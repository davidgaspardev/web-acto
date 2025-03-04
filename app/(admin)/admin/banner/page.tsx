'use client';

import { useCallback, useRef, DragEventHandler} from "react";

export default function BannerUpload() {
    const bannerInputRef = useRef<HTMLInputElement>(null);
    const bannerImageDivRef = useRef<HTMLDivElement>(null);
    const bannerImageUrlRef = useRef<string | null>(null);

    const showImage = useCallback(() => {
        if (!bannerInputRef.current || !bannerInputRef.current.files) return;

        if (bannerImageUrlRef.current) {
            URL.revokeObjectURL(bannerImageUrlRef.current);
        }

        const file = bannerInputRef.current.files[0];
        const imageUrl = URL.createObjectURL(file);
        bannerImageUrlRef.current = imageUrl;

        console.log("imageLink", imageUrl);

        if (bannerImageDivRef.current) {
            bannerImageDivRef.current.style.backgroundImage = `url(${imageUrl})`;
            bannerImageDivRef.current.textContent = "";
        }
    }, []);

    const handleInputOnDrogOver: DragEventHandler<HTMLLabelElement> = useCallback((event) => {
        event.preventDefault();
    }, []);

    const handleInputOnDrop: DragEventHandler<HTMLLabelElement> = useCallback((event) => {
        event.preventDefault();
        if (!event.dataTransfer.files || !bannerInputRef.current) return;

        bannerInputRef.current.files = event.dataTransfer.files;
        showImage();
    }, [ showImage ]);

    return (
        <div className="bg-white">
            <form>
                <label
                    className="max-w-[1120px] w-full aspect-[1120/664] flex bg-red-50"
                    htmlFor="input-banner"
                    onDragOver={handleInputOnDrogOver}
                    onDrop={handleInputOnDrop}>

                    <input
                        ref={bannerInputRef}
                        id="input-banner"
                        type="file"
                        accept="image/jpeg"
                        onInput={showImage}
                        hidden/>

                    <div
                        ref={bannerImageDivRef}
                        className="w-full h-full flex justify-center items-center bg-cover bg-center bg-no-repeat">
                        <p>Drag and drop or click here to upload banner image</p>
                        <span>Upload any images from desktop</span>
                    </div>
                </label>
            </form>
        </div>
    );
}