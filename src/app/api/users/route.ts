 import { NextRequest, NextResponse } from "next/server"

const users = [
  {
    id: 1,
    name: 'ahmed ali',
    email: 'ahmed@gmail.com'
  },
]

// GET method: ترجّع كل المستخدمين
export async function GET() {
  return NextResponse.json(users)
}

// POST method: تضيف مستخدم جديد
export async function POST(req: NextRequest) {
  const body = await req.json()

  // إضافة id تلقائي
  const newUser = { id: users.length + 1, ...body }
  users.push(newUser)

  return NextResponse.json({
    message: 'User added successfully',
    users
  })
}
