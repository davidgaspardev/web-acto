'use client'

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

interface CarouselProps {
  className?: string;
  thumbnails: string[];
}

export default function Carousel(props: CarouselProps) {
  const { thumbnails, className } = props;

  const [position, setPosition] = useState(0);
  const corouselRef = useRef<HTMLDivElement>(null);
  const corouselAnimationLock = useRef(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const next = useCallback((positionTarget?: number) => {
    // if (position === thumbnails.length - 1) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    if(typeof positionTarget === "undefined") {
      positionTarget = (position == thumbnails.length - 1) ? 0 : position + 1;
    }

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      const offset = positionTarget - position;

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(positionTarget);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position, thumbnails]);

  const prev = useCallback((positionTarget?: number) => {
    // if (position === 0) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    if(typeof positionTarget === "undefined") {
      positionTarget = (position == 0) ? thumbnails.length - 1 : position - 1;
    }

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      const offset = -(position - positionTarget);

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(positionTarget);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position, thumbnails]);

  useEffect(() => {
    if (isAutoPlay) {
      const timeout = setTimeout(next, 6000);

      return () => clearTimeout(timeout);
    }
  }, [next, isAutoPlay]);

  return (
    <div className={className}>
      <div className={"w-full aspect-[27/16] relative"}>
        <BottomIndicator index={position} amount={thumbnails.length} onClick={(i) => {
          if (i > position) {
            next(i);
          } else if (i < position) {
            prev(i);
          }
        }} />
        <div
          ref={corouselRef}
          className="w-full h-full whitespace-nowrap overflow-hidden flex flex-row rounded-b-[4%_8%] rounded-tl-[4%_8%]"
        >
          {thumbnails.map((thumbnail, index) => <Image
            unoptimized
            key={index}
            width={0}
            height={0}
            className="min-w-full min-h-full object-cover"
            src={thumbnail}
            alt="carousel image"
          />)}

          <button className="absolute left-4 md:left-8 top-4 w-14 h-5 rounded-full opacity-50 bg-[#fef7ffb3] flex justify-center items-center text-[#553581] text-xs" onClick={() => setIsAutoPlay(!isAutoPlay)}>
            {isAutoPlay ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface SideButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
}

function SideButton(props: SideButtonProps) {
  const { direction, onClick } = props;

  return (
    <button className={`absolute w-10 h-10 rounded-full top-[calc(50%-20px)] bg-gray-900 bg-opacity-50 ${direction === 'left' ? 'left-4' : 'right-4'}`} onClick={onClick}>
      {direction === 'left' ? '<' : '>'}
    </button>
  )
}

interface BottomIndicatorProps {
  index: number;
  amount: number;
  onClick: (currentIndex: number) => void;
}

function BottomIndicator(props: BottomIndicatorProps) {
  const { index, amount, onClick } = props;

  return (
    <div className="flex flex-row absolute md:top-4 md:right-4 md:bg-[#FFF8FF] p-2 rounded-r-full rounded-bl-full max-md:bottom-4 right-1/2 max-md:transform max-md:translate-x-1/2 bg-[#fef7ffb3]">
      {Array.from({ length: amount }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full mx-1 ${index === i ? 'bg-[#553581]' : 'bg-[#FFDBFF] cursor-pointer'}`}
          onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

