import Navbar from "@/components/navbar";

function AboutPage() {
    return (<>
    <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold mb-4 text-blue-700">About Us</h1>
            <p className="text-lg text-gray-700 max-w-xl text-center mb-6">
                Welcome to our website! We are passionate about building modern web applications using Next.js and Tailwind CSS. Our mission is to deliver high-quality, performant, and accessible solutions for everyone.
            </p>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Team</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Experienced Developers</li>
                    <li>UI/UX Designers</li>
                    <li>Project Managers</li>
                </ul>
            </div>
            {/* Blog Section */}
            <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Latest Blog Posts</h2>
                <div className="space-y-4">
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-bold text-blue-600">Getting Started with Next.js</h3>
                        <p className="text-gray-700">Learn the basics of building fast and scalable web apps with Next.js.</p>
                    </div>
                    <div className="border-b pb-4">
                        <h3 className="text-xl font-bold text-blue-600">Why Tailwind CSS?</h3>
                        <p className="text-gray-700">Discover the benefits of using utility-first CSS for rapid UI development.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-blue-600">Accessibility Matters</h3>
                        <p className="text-gray-700">Tips and tricks for making your web applications accessible to everyone.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default AboutPage;