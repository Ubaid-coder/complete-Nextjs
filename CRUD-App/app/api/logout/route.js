import { getUserSession } from "@/lib/auth";
import Session from "@/models/sessionModel";
import {cookies} from 'next/headers';

export async function POST() {
    const sessionId = await getUserSession();
    await Session.findByIdAndDelete(sessionId);
    (await cookies()).delete("userId")

    return new Response(null, {
        status: 204
    })
}