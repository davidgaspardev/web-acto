'use client'

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CarouselProps {
  className?: string;
  thumbnails: string[];
}

export default function Carousel(props: CarouselProps) {
  const { thumbnails, className } = props;

  const [position, setPosition] = useState(0);
  const corouselRef = useRef<HTMLDivElement>(null);
  const corouselAnimationLock = useRef(false);

  const next = useCallback(() => {
    if (position === thumbnails.length - 1) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');
      corouselElement.scrollBy({ left: Number(width), behavior: 'smooth' });
      setPosition(position + 1);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position, thumbnails]);

  const prev = useCallback(() => {
    if (position === 0) return;
    if (corouselAnimationLock.current) return;
    corouselAnimationLock.current = true;

    const corouselElement = corouselRef.current;

    if (corouselElement) {
      const width = getComputedStyle(corouselElement).width.replace('px', '');
      corouselElement.scrollBy({ left: -Number(width), behavior: 'smooth' });
      setPosition(position - 1);
    }

    setTimeout(() => corouselAnimationLock.current = false, 500);
  }, [position]);

  return (
    <div className={className}>
      <div className={"w-full aspect-[16/7] relative"}>
        <SideButton direction="left" onClick={prev} />
        <SideButton direction="right" onClick={next} />
        <BottomIndicator index={position} amount={thumbnails.length} />
        <div
          ref={corouselRef}
          className="w-full h-full whitespace-nowrap overflow-hidden flex flex-row rounded-lg"
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
}

function BottomIndicator(props: BottomIndicatorProps) {
  const { index, amount } = props;

  return (
    <div className="flex flex-row absolute bottom-4 left-1/2 transform -translate-x-1/2">
      {Array.from({ length: amount }).map((_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full mx-1 ${index === i ? 'bg-gray-900' : 'bg-gray-300'}`} />
      ))}
    </div>
  )
}

