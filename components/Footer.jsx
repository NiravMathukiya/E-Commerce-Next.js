import React from 'react'

const Footer = () => {
    return (
        <div className="max-w-6xl mx-auto  ">
            <hr className='border border-gray-300 max-w-6xl mx-auto' />
            <div className='max-w-6xl mx-auto'>

                <div className='flex flex-col items-center md:flex-row justify-center md:justify-between mt-4 text-gray-500 '>
                    <div className='font-bold mb-1'>
                        LOGOS
                    </div>

                    <div className='list-none md:w-3/5  text-center gap-2 flex-wrap text-sm grid grid-cols-2  md:grid-cols-auto md:grid-cols-6 md:place-items-end place-items-center  mt-2 justify-between '>
                        <li className='mr-2 md:mr-0'>Support Center</li>
                        <li className='mr-2 md:mr-0'>Invoicing</li>
                        <li className='mr-2 md:mr-0'>Contract</li>
                        <li className='mr-2 md:mr-0'>Careers</li>
                        <li className='mr-2 md:mr-0'>Blog</li>
                        <li className='mr-2 md:mr-0'>FAQs</li>
                    </div>
                </div>

                <div className='flex justify-center text-gray-400 mt-8 text-[12px] md:text-sm mb-3' >
                    Copyright © 2022 Nirav . All Rights Reseved.
                </div>
            </div>
        </div>
    )
}

export default Footer
