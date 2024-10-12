'use client'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            setError('All fields are required!')
            return;
        }
        try {

            const resUserExists = await fetch('api/userExist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            })

            const {user} = await resUserExists.json();
            if (user) {
                setError('User already exists!');
                return;
            }

            const res = await fetch('api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })


            if (res.ok) {
                setError('');
                setName('');
                setEmail('');
                setPassword('');
                alert('User registered successfully!');
                router.push('/'); // Redirect to home page after registration

            } else {
                console.log('User registration failed!');
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        onChange={(e) => {
                            setName(e.target.value);
                            setError('');
                        }}
                        value={name}
                    />
                    <input
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                        }}
                        value={email}
                    />

                    <input
                        placeholder="Enter Password"
                        type='password'
                        onChange={(e) => {
                            setPassword(e.target.value);
                            setError('');
                        }}
                        value={password}
                        autoComplete="true"

                    />
                    <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
                        Register
                    </button>

                    {
                        error && (
                            <div className="text-sm py-1 px-3 rounded-md mt-2 bg-red-500 text-white w-fit ">
                                {error}
                            </div>
                        )
                    }

                    <Link href={'/'} className="text-sm mt-3 text-right">
                        Already have an account? <span className="underline">Login</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm