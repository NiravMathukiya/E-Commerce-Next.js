"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';


const ForgetPassword = () => {
    const [email, setEmail] = React.useState('');
    const router = useRouter();
    const handlesubmit = (e) => {

        e.preventDefault();
        if(email.trim().length<=0) {
            toast.error('Email is required');
            return;
        }
        console.log('Email:', email);
        toast.success(`OTP Sent Successfully to ${email}`);
        setEmail('');

        router.push('forget-password/otp-verify');
        

    }
    
    return (
        <div>
            <p className='ml-2 mt-16 font-normal text-center'>Forget Password</p>
            <form onSubmit={handlesubmit}>
                <div className="mt-10">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        className="border-b-2 border-black focus:outline-none placeholder:text-xs md:placeholder:text-base mt-2 md:p-2 p-2 w-full"
                    />
                </div>
                <div className="mt-6    ">
                    <button
                        type="submit"
                        className="bg-black/80 w-full text-white py-2 px-4 rounded hover:bg-black/75"
                    >
                        Send OTP
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;