import { NextRequest, NextResponse } from 'next/server';
import Firebase from '../services/firebase';

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file || !file.type.startsWith("image/jpeg")) {
        return new NextResponse('Please upload a valid jpeg image', { status: 400 });
    }

    try {
        const filename = 'banner-' + Date.now() + '.jpeg';
        const image = new File([file], filename, { type: file.type });
        const bannerUrl = await Firebase.getInstance().uploadFile('banner', image);

        return NextResponse.json({ url: bannerUrl }, { status: 201 });
    } catch (error) {
        console.error('Error uploading file:', error);
        return new NextResponse('Error uploading file', { status: 500 });
    }
}