import ContactUserForm from '@/src/models/authModel'
import connectDB from '@/src/util/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const formData = await req.json()

  const { fname, lname, phone, email, message } = formData

  await connectDB()

  if (!fname) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Last Name is Required.',
    })
  }

  if (!lname) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Last Name is Required.',
    })
  }

  if (!email) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Email is Required.',
    })
  }

  if (!phone) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Phone is Required.',
    })
  }

  if (!message) {
    return NextResponse.json({
      status: 400,
      success: false,
      message: 'Message is Required.',
    })
  }

  const contactform = new ContactUserForm({
    fname,
    lname,
    phone,
    email,
    message,
  })
  const user = await contactform.save()

  try {
    return NextResponse.json({
      success: true,
      message: 'Message Successfully!',
      user,
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error During Message',
      error,
    })
  }
}
