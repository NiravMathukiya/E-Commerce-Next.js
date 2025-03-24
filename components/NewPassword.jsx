"use client"

import React from 'react'
import toast from 'react-hot-toast';

const NewPassword = () => {
    const [newPassword, setNewPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            console.log('New Password:', newPassword);
        } else {
            toast.error('Passwords do not match');
        }
    };

    return (
        <div>
            <p className='ml-2 mt-16 font-normal text-center'>Create New Password</p>
            <form onSubmit={handleSubmit}>
                <div className="mt-10">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="border-b-2 border-black focus:outline-none placeholder:text-xs md:placeholder:text-base mt-2 md:p-2 p-2 w-full"
                    />
                </div>
                <div className="mt-6">
                    <label htmlFor="confirmPassword">Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="border-b-2 border-black focus:outline-none placeholder:text-xs md:placeholder:text-base mt-2 md:p-2 p-2 w-full"
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="bg-black/80 w-full text-white py-2 px-4 rounded hover:bg-black/75"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewPassword
