import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const paramsToSign = {
        source: "uw",
        timestamp,
        upload_preset: "next-cloudinary-signed",
    };

    const signature = cloudinary.utils.api_sign_request(
        paramsToSign,
        process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({
        ...paramsToSign,
        signature,
        apiKey: process.env.CLOUDINARY_API_KEY,
    });
}
