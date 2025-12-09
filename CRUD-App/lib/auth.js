import User from "@/models/userModel";
import { createHmac } from "node:crypto"
import { cookies } from "next/headers";
import Session from "@/models/sessionModel";

export async function getLoggedInUser() {
  const cookieStore = await cookies();
  const errorResponse = Response.json(
    { error: "Please login" },
    {
      status: 401,
    }
  );
  const cookie = cookieStore.get("userId")?.value;

  if (!cookie) {
    return errorResponse;
  }

  const sessionId = verifyCookie(cookie);

  if (!sessionId) {
    return errorResponse;
  }

  const session = await Session.findById(sessionId).select("-password -__v");
console.log(`Sessoin: ${session} \n SessionID ${sessionId}`)
  if (!session) {
    return errorResponse;
  }

  const user = await User.findById(session.userId);

  if (!user) {
    return errorResponse;
  }

  return session;
}

export function signCookie(cookie) {
  const signature = createHmac("sha256", 'This is the secret key for signing cookies')
    .update(cookie)
    .digest("hex");

  return `${cookie}.${signature}`;
}

export function verifyCookie(signedCookie) {
  const [cookie, cookieSignature] = signedCookie.split(".");
  const signature = signCookie(cookie).split(".")[1];

  if (signature === cookieSignature) {
    return cookie;
  }

  return false;
}


export async function getUserSession() {
  const cookieStore = await cookies();
  const cookie = cookieStore.get('userId')?.value;
  return verifyCookie(cookie);
}