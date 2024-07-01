'use client'

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

interface CarouselProps {
  className?: string;
  thumbnails: string[];
}

export default function Carousel(props: CarouselProps) {
  const { thumbnails, className } = props;

  const [position, setPosition] = useState(0);
  const corouselRef = useRef<HTMLDivElement>(null);
  const corouselAnimationLock = useRef(false);

  const next = useCallback((positionTarget?: number) => {
    // if (position === thumbnails.length - 1) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    const hasPositionTarget = positionTarget !== undefined;

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      let offset = 1;

      if (hasPositionTarget) {
        offset = positionTarget - position;
      }

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(hasPositionTarget ? positionTarget : position + 1);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position /*, thumbnails*/]);

  const prev = useCallback((positionTarget?: number) => {
    // if (position === 0) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    const hasPositionTarget = positionTarget !== undefined;

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');

      let offset = -1;

      if (hasPositionTarget) {
        offset = (position - positionTarget) * offset;
      }

      console.log({ offset, position, positionTarget, width });

      corouselElement.scrollBy({ left: Number(width) * offset, behavior: 'smooth' });
      setPosition(hasPositionTarget ? positionTarget : position - 1);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position]);

  return (
    <div className={className}>
      <div className={"w-full aspect-[16/7] relative"}>
        {/* <SideButton direction="left" onClick={prev} />
        <SideButton direction="right" onClick={next} /> */}
        <BottomIndicator index={position} amount={thumbnails.length} onClick={(i) => {
          if (i > position) {
            next(i);
          } else if (i < position) {
            prev(i);
          }
        }} />
        <div
          ref={corouselRef}
          className="w-full h-full whitespace-nowrap overflow-hidden flex flex-row rounded-b-[6%_13%] rounded-tl-[6%_13%]"
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
    <div className="flex flex-row absolute top-4 right-4 bg-[#FFF8FF] p-2 rounded-r-full rounded-bl-full">
      {Array.from({ length: amount }).map((_, i) => (
        <div
          key={i}
          className={`w-4 h-4 rounded-full mx-1 ${index === i ? 'bg-[#553581]' : 'bg-[#FFDBFF] cursor-pointer'}`}
          onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

