import { FirebaseApp, initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, listAll, ref, uploadBytes } from "firebase/storage";

export default class Firebase {
    private static instance: Firebase;
    private readonly app: FirebaseApp;

    private constructor() {
        if (!process.env.FIREBASE_CONFIG) throw new Error("Firebase config not found");

        this.app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
    }

    public static getInstance(): Firebase {
        if (!this.instance) this.instance = new Firebase();

        return this.instance;
    }

    public getDownloadUrls = async (storagePath: string): Promise<string[]> => {
        try {
            const { app } = this;

            const storage = getStorage(app);
            const listRef = ref(storage, storagePath);

            console.log(listRef.toString());

            const res = await listAll(listRef);

            if (res.items.length === 0) {
                console.log("No items found in the specified storage path:", listRef.fullPath);
                return [];
            }

            const fileLinks = [];

            for (const itemRef of res.items) {
                const downloadURL = await getDownloadURL(itemRef);
                fileLinks.push(downloadURL);
            }


            return fileLinks.reverse();
        } catch (error) {
            console.error('Error fetching download URLs:', error);
            return [];
        }
    };

    public uploadFile = async (storagePath: string, file: File): Promise<string> => {
        try {
            const { app } = this;

            const storage = getStorage(app);
            const storageRef = ref(storage, `${storagePath}/${file.name}`);

            const { ref: uploadRef } = await uploadBytes(storageRef, file);

            return await getDownloadURL(uploadRef);
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    };
}

export const dynamic = 'force-dynamic'
