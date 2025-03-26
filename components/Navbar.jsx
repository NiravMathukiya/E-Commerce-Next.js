'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { profile } from '@/images/index'; // Ensure the correct path
import { getCookie, deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [token, setToken] = useState(null);
    const user = useSelector((state) => state.auth.user);
    const router = useRouter(); // Initialize the router

    useEffect(() => {
        const storedToken = getCookie('token');
        setToken(storedToken);
    }, []);

    const signOut = () => {
        deleteCookie('token'); // Delete the token cookie
        router.push('/'); // Redirect to the home page
    };

    return (
        <div className='max-w-6xl md:mt-6 h-20 p-2 px-5 mx-auto flex justify-between items-center relative'>
            {/* Logo Section */}
            <div className='h-14 flex items-center overflow-hidden'>
                <Image
                    src='https://png.pngtree.com/png-vector/20220207/ourmid/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png'
                    width={56}
                    height={56}
                    className='bg-center object-cover h-full'
                    alt='Logo'
                />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-6 items-center text-sm'>
                <Link href='/' className='cursor-pointer hover:text-gray-600'>Home</Link>
                <Link href='/deals' className='cursor-pointer hover:text-gray-600'>Deals</Link>
                <Link href='/new-arrivals' className='cursor-pointer hover:text-gray-600'>New Arrivals</Link>
                <Link href='/packages' className='cursor-pointer hover:text-gray-600'>Packages</Link>

                {token ? (
                    <div className='flex items-center gap-4'>
                        <Link href='/profile' className='bg-black/80 h-12 w-12 rounded-full shadow-lg hover:bg-black transition-all duration-300 overflow-hidden flex items-center justify-center'>
                            <Image src={profile} alt='User Profile' width={48} height={48} className='object-cover rounded-full' />
                        </Link>
                        <button onClick={signOut} className='bg-red-500 px-3 py-2 font-bold text-md rounded-xl'>Sign Out</button>
                    </div>
                ) : (
                    <span>
                        <Link href='/login' className='cursor-pointer hover:text-gray-600 font-semibold text-[16px] mr-2'>Sign in</Link>
                        <Link href='/signup' className='bg-black/80 py-2 px-6 text-white text-sm rounded-md shadow-lg hover:bg-black transition-all duration-300'>
                            Sign Up
                        </Link>
                    </span>
                )}
            </div>

            {/* Hamburger Button (Mobile View) */}
            <button className='md:hidden block' onClick={() => setIsOpen(true)}>
                <Menu size={30} />
            </button>

            {/* Sidebar Menu (Mobile) */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='p-5 flex justify-between items-center border-b'>
                    <h2 className='text-lg font-semibold'>Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        <X size={30} />
                    </button>
                </div>
                <ul className='p-5 space-y-4 text-lg'>
                    <Link href='/' className='cursor-pointer hover:text-gray-600' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href='/deals' className='cursor-pointer hover:text-gray-600' onClick={() => setIsOpen(false)}>Deals</Link>
                    <Link href='/new-arrivals' className='cursor-pointer hover:text-gray-600' onClick={() => setIsOpen(false)}>New Arrivals</Link>
                    <Link href='/packages' className='cursor-pointer hover:text-gray-600' onClick={() => setIsOpen(false)}>Packages</Link>

                    {token ? (
                        <Link href='/profile' className='block text-center bg-black/80 py-2 text-white text-sm rounded-md shadow-lg hover:bg-black transition-all duration-300' onClick={() => setIsOpen(false)}>
                            Profile
                        </Link>
                    ) : (
                        <>
                            <Link href='/login' className='block text-center font-bold hover:text-gray-600' onClick={() => setIsOpen(false)}>
                                Sign in
                            </Link>
                            <Link href='/signup' className='block text-center bg-black/80 py-2 text-white text-sm rounded-md shadow-lg hover:bg-black transition-all duration-300' onClick={() => setIsOpen(false)}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
