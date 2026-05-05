import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("API hit");   
    await connectMongoDB();
    const { title, description } = await request.json();
    const data = await User.create({
      title,
      description,
       });
    return NextResponse.json(
      { message: "User Created", data },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

export async function GET(){
  await connectMongoDB();
  const user = await User.find();
  return NextResponse.json({user}) 
}

export async function DELETE(request) {
  const id= request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({message : "Topic deleted"})
}

