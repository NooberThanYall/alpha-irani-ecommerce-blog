import { User } from "@/models/UserSchema";
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await connectDB()
    const {name, email, password} = await req.json();
    
    try {
        
        const userAlrExist = await User.findOne({email});

        if(!userAlrExist) {
            const newUser = await User.create({
                name,
                email,
                password,
                admin: false,
            })
             
            return NextResponse.json({success: true, user: {...newUser, password: null}})
        } else {
            throw new Error('این ایمیل قبلا ثبت شده!')
        }


    } catch ({message}) {
        return NextResponse.json({success: false, error: message})
    }
}