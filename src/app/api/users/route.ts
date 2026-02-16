 import { NextRequest, NextResponse } from "next/server";
const user = [{
id: 1,
    name: "Ahmed",
    email: "ahmed@gmail.com",
}
    
];

export async function GET() {
  
  return NextResponse.json(user);
}
export async function POST(req:NextRequest) {
  const body = await req.json();
  user.push(body);
  return NextResponse.json({
    message:'User added successfully',
    user,
  });
}
