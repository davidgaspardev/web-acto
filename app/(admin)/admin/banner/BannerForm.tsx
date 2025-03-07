'use client';

import BannerCarousel from "@/app/components/BannerCarousel";
import ImageUpload from "@/app/components/ImageUpload";
import Image from "next/image";
import { useState } from "react";

interface BannerFormProps {
    urls: string[];
}

/**
 *
 * @param {BannerFormProps} props
 * @returns {JSX.Element}
 */
export default function BannerForm(props: BannerFormProps): JSX.Element {
    const { urls: initialUrls } = props;

    const [urls, setUrls] = useState(initialUrls);
    const [newUrl, setNewUrl] = useState<string | null>(null);

    const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const response = await fetch("/api/banner", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const { url } = await response.json();
            setUrls([url, ...urls]);
            setNewUrl(null);
        } else {
            console.error("Error uploading file");
        }
    };

    return (
        <form method="post" encType="multipart/form-data" onSubmit={handleUpload}>
            <BannerCarousel
                className="w-[1120px]"
                hiddenAutoPlayButton
                initialPosition={0}
                banners={[
                    <ImageUpload key="banner-6" inputId="banner-6" name="file" onUrl={setNewUrl} url={newUrl} />,
                    ...urls.map((url, index) => (
                        <Image
                            key={url.split("token=")[1]}
                            className="w-full h-full object-cover"
                            src={url}
                            width={0}
                            height={0}
                            alt="Carousel image"
                            unoptimized
                            priority={index === 0}/>
                    )),
                ]}
            />
            <button type="submit">Upload</button>
        </form>
    );
}