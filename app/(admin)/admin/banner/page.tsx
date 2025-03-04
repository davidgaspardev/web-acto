'use client';

import BannerCarousel from "@/app/components/BannerCarousel";
import ImageUpload from "@/app/components/ImageUpload";
import { useCallback, useRef, DragEventHandler } from "react";

export default function BannerUpload() {
    return (
        <div className="w-full flex flex-col items-center py-4">
            <BannerCarousel
                className="w-[1120px]"
                hiddenAutoPlayButton
                initialPosition={5}
                banners={[
                    <div key="banner-1" className="w-full h-full bg-red-100">Banner 1</div>,
                    <div key="banner-2" className="w-full h-full bg-red-200">Banner 2</div>,
                    <div key="banner-3" className="w-full h-full bg-red-300">Banner 3</div>,
                    <div key="banner-4" className="w-full h-full bg-red-400">Banner 4</div>,
                    <div key="banner-5" className="w-full h-full bg-red-500">Banner 5</div>,
                    <ImageUpload key="banner-6" inputId="banner-6" />
                ]}
            />
        </div>
    );
}