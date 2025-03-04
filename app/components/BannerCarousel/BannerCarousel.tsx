'use client'

import { useCallback, useEffect, useRef, useState, ReactNode } from "react";

interface BannerCarouselProps {
  className?: string;
  banners: ReactNode[];
  isAutoPlay?: boolean;
  hiddenAutoPlayButton?: boolean;
}

/**
 * Banner Carousel component
 *
 * @param {BannerCarouselProps} props
 * @returns {JSX.Element}
 */
export default function BannerCarousel(props: BannerCarouselProps): JSX.Element {
  const { banners, className, isAutoPlay: isAutoPlayInitial, hiddenAutoPlayButton } = props;

  const [position, setPosition] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(isAutoPlayInitial);
  const corouselElementRef = useRef<HTMLDivElement>(null);
  const corouselAnimationLock = useRef(false);

  const next = useCallback((positionTarget?: number) => {
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    if (typeof positionTarget === "undefined") {
      positionTarget = (position == banners.length - 1) ? 0 : position + 1;
    }

    const corouselElement = corouselElementRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      const offset = positionTarget - position;

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(positionTarget);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position, banners]);

  const prev = useCallback((positionTarget?: number) => {
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    if (typeof positionTarget === "undefined") {
      positionTarget = (position == 0) ? banners.length - 1 : position - 1;
    }

    const corouselElement = corouselElementRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      const offset = -(position - positionTarget);

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(positionTarget);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position, banners]);

  useEffect(() => {
    if (isAutoPlay) {
      const timeout = setTimeout(next, 6000);

      return () => clearTimeout(timeout);
    }
  }, [next, isAutoPlay]);

  return (
    <div className={className}>
      <div className="relative">
        <BannerControlButtons
          index={position}
          amount={banners.length}
          onClick={(i) => {
            if (i > position) {
              next(i);
            } else if (i < position) {
              prev(i);
            }
          }} />

        <div
          ref={corouselElementRef}
          className="w-full h-full whitespace-nowrap overflow-hidden flex flex-row rounded-b-[4%_8%] rounded-tl-[4%_8%]"
        >
          {banners.map((slide, index) => (
            <div key={index} className="min-w-full min-h-full">
              {slide}
            </div>
          ))}

          {!!!hiddenAutoPlayButton && (
            <button className="absolute left-4 md:left-8 top-4 w-14 h-5 rounded-full opacity-50 bg-[#fef7ffb3] flex justify-center items-center text-[#553581] text-xs" onClick={() => setIsAutoPlay(!isAutoPlay)}>
              {isAutoPlay ? "Pause" : "Play"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Banenr Control Buttons properties
 */
interface BannerControlButtonsProps {
  index: number;
  amount: number;
  onClick: (currentIndex: number) => void;
}

/**
 * Banner Control Buttons component
 *
 * @param {BannerControlButtonsProps} props
 * @returns {JSX.Element}
 */
function BannerControlButtons(props: BannerControlButtonsProps): JSX.Element {
  const { index, amount, onClick } = props;

  return (
    <div
      className="flex flex-row absolute md:top-4 md:right-4 md:bg-[#FFF8FF] p-2 rounded-r-full rounded-bl-full max-md:bottom-4 right-1/2 max-md:transform max-md:translate-x-1/2 bg-[#fef7ffb3]">

      {Array.from({ length: amount }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full mx-1 ${index === i ? 'bg-[#553581]' : 'bg-[#FFDBFF] cursor-pointer'}`}
          onClick={() => onClick(i)} />
      ))}

    </div>
  )
}