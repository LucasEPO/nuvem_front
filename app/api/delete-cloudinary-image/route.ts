import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function DELETE(req: Request) {
    try {
        const body = await req.json();
        const public_id = body?.public_id;

        if (!public_id) {
            return NextResponse.json(
                { error: "public_id missing" },
                { status: 400 }
            );
        }

        const result = await cloudinary.uploader.destroy(public_id);

        return NextResponse.json({ ok: true, result });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "delete failed", details: String(err) },
            { status: 500 }
        );
    }
}