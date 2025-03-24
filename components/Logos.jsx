import React from 'react';

const Logos = ({ data, num = "24" }) => {
    return (
        <div className='max-w-6xl md:mt-4 mt-4 mx-auto bg-slate-100  flex  overflow-scroll no-scrollbar px-2 w-full justify-center items-center md:gap-14 gap-4 border'>
            {data.map((src, index) => (
                <div key={index} className={`md:w-32 md:h-16  w-full h-14 md:min-w-${num} md:h-${num / 2}`} >
                    <img className="w-full h-full object-contain" src={src} alt={`Logo ${index + 1}`} />
                </div>
            ))
            }
        </div >
    );
};

export default Logos;
