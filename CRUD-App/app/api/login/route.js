import { signCookie } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import Session from "@/models/sessionModel";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import bcrypt from 'bcrypt'

export async function POST(request) {
  await connectDB();
  const cookieStore = await cookies();
  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email });

    const isPasswordValid = bcrypt.compare(password, user.password);

    if (!user || !isPasswordValid) {
      return Response.json(
        { error: "Invalid Credentials!" },
        {
          status: 400,
        }
      );
    }

    const checkSessionUser = await Session.find({ userId: user._id });
    //At a time login only 2 devices
    if (checkSessionUser.length>=2){
      return Response.json({msg:'Login in another device!'}, {status: 403})
    }
      const session = await Session.create({ userId: user._id });

    cookieStore.set("userId", signCookie(session.id), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    return Response.json({ name: user.name, email: user.email }, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return Response.json(
        { error: "Email already exists" },
        {
          status: 409,
        }
      );
    } else {
      return Response.json(
        { error: "Something went wrong" },
        {
          status: 500,
        }
      );
    }
  }
}
