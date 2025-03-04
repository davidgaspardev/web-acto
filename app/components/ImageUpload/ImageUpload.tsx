'use client';

import { useCallback, useRef, DragEventHandler } from "react";

interface ImageUploadProps {
    className?: string;
    inputId: string;
}

/**
 * Image Upload component
 *
 * @returns {JSX.Element}
 */
export default function ImageUpload(props: ImageUploadProps): JSX.Element {
    const { className, inputId } = props;

    const inputElementRef = useRef<HTMLInputElement>(null);
    const imageDivElementRef = useRef<HTMLDivElement>(null);
    const imageUrlRef = useRef<string | null>(null);

    const showImage = useCallback(() => {
        const inputElement = inputElementRef.current;
        const imageDivElement = imageDivElementRef.current;

        if (!inputElement || !inputElement.files) return;

        if (imageUrlRef.current) {
            URL.revokeObjectURL(imageUrlRef.current);
        }

        const file = inputElement.files[0];
        const imageUrl = URL.createObjectURL(file);
        imageUrlRef.current = imageUrl;

        console.log("imageLink", imageUrl);

        if (imageDivElement) {
            imageDivElement.style.backgroundImage = `url(${imageUrl})`;
            imageDivElement.textContent = "";
        }
    }, []);

    const handleInputOnDrogOver: DragEventHandler<HTMLLabelElement> = useCallback((event) => {
        event.preventDefault();
    }, []);

    const handleInputOnDrop: DragEventHandler<HTMLLabelElement> = useCallback((event) => {
        event.preventDefault();
        if (!event.dataTransfer.files || !inputElementRef.current) return;
        const { dataTransfer } = event;

        if (dataTransfer.files.length > 1) {
            alert("Please upload only one image");
            return;
        }

        const file = dataTransfer.files[0];
        if (file.type !== "image/jpeg") {
            alert("Please upload a valid jpeg image");
            return;
        }

        inputElementRef.current.files = dataTransfer.files;
        showImage();
    }, [showImage]);

    return (
        <div className={className}>
            <label
                className="max-w-[1120px] w-full aspect-[1120/664] flex bg-red-50"
                htmlFor={inputId}
                onDragOver={handleInputOnDrogOver}
                onDrop={handleInputOnDrop}>

                <input
                    ref={inputElementRef}
                    id={inputId}
                    type="file"
                    accept="image/jpeg"
                    onInput={showImage}
                    hidden />

                <div
                    ref={imageDivElementRef}
                    className="w-full h-full flex justify-center items-center bg-cover bg-center bg-no-repeat">
                    <p>Drag and drop or click here to upload banner image</p>
                    <span>Upload any images from desktop</span>
                </div>
            </label>
        </div>
    );
}
