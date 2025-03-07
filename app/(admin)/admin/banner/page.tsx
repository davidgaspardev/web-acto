import Firebase from "@/app/api/services/firebase";
import BannerForm from "./BannerForm";

export default async function BannerPage() {
    const firebase = Firebase.getInstance();
    const urls = await firebase.getDownloadUrls("banner");

    return (
        <div className="w-full flex flex-col items-center py-4">
            <BannerForm urls={urls} />
        </div>
    );
}

export const revalidate = 0;
