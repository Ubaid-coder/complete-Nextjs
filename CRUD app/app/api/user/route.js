import { getLoggedInUser } from "@/lib/auth";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";

export async function GET() {
    await connectDB();
    const user = await getLoggedInUser();

    if (user instanceof Response) {
        return user;
    }

    const userData = await User.findById(user.userId).select('-password ');

    return Response.json(userData);

}
