import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
  const {id} = await params
  const { title, description } = await request.json();

  await connectMongoDB();

  const data = await User.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  );

  return NextResponse.json({ message: "Updated", data });
}