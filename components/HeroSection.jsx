import React from 'react'

const HeroSection = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-2 max-w-6xl mx-auto h-[210px]  md:h-[500px] mt-6 px-6 gap-4 '>
            <div className='bg-[#E0E0E0] rounded-xl flex justify-center items-end h-[200px] md:h-[500px] '>
                <img className='h-4/5  ' src="https://media-hosting.imagekit.io//89f7fa2747dc4664/image%202%2028.png?Expires=1836890549&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=A3htP2Tk09hq4~vvMmVHR3H-WZWyR60VVDSN~OGhAxryKxdxGEIAHhOVZa4A9br0EIOpRXp-6ryGeIH2HFMLZU~AIzOUOnaGlpDa6i7gdxWpVYMRJcJqETtiTpa2N1aktzThbL-QzbGPQy-k0pDE7W~hH1w0ED4l7Eu90jSgQ5iBJ4E6k54ODPEPkCZTA67ndN~VeDT3yhxSuywvxJw6crNAqKS2MP03Rz7IBDhfOO5b5WlHPwFW5c4CssqyK2zq30BUV--c9J2efKXVoohc7KUqAceuhaZo9ZFWu44Bsc4jN--cY3M2Z3bURsLK4wnhgnMM-3D6uOtxua3dKqUIFA__" alt="" />
            </div>
            <div className='hidden  rounded-xl md:flex  flex-col h-[200px] md:h-[500px]'>
                <div className='bg-[#E0E0E0] pt-0 rounded-xl h-[25%]'>
                    <img className="h-full pt-1 object-cover px-1" src="https://media-hosting.imagekit.io//53058a29e5ef435f/screenshot_1742281805672.png?Expires=1836889808&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aW-~5WRTwXeWaIgUu1h~7dM3PU30GAi6-TqrEQbpdYPIHEvZcITl8ExQCcxvG4G1L3W5p~uuYqN~XRgRXo0OcdsdyxLfHZUW4LugwpaxCFSzzbmmPEkH6-i42SUvc5c0Ek5LgFKOpmyhrHg8EUQqksQM6Ioh7ASg2ql0IMBsRyYgR71eC2pBIqa6s-A6BpMQ0xF4Hk8aSPramOMnG0d68l-kvo7nUM~TGEtrS1YHwTQhHedM8~v5Ku2Th2TDTmVK9Rnu17xPQSL47IvMnKKpoxJI5PHi-AGVsyDnuPL-pSckcxGcLoo1pyh9NkDrTtKYpEBkOsjhnZCZkLryeV6msQ__" alt="" />
                </div>
                <div className='bg-white rounded-xl h-[50%]'>
                    <h1 className='text-center text-4xl uppercase font-semibold mt-2 w-full'>ultimate</h1>
                    <h2 className='text-center text-9xl uppercase font-bold text-transparent [-webkit-text-stroke:0.9px_black] text-shadow-md text-shadow-[#E0E0E0]  w-full'>sale</h2>
                    <p className='text-center text-sm text-slate-500 mt-2'>NEW COLLECTION</p>
                    <div className='flex justify-center mt-1'>
                        <button className='bg-black/80 py-2 px-6  text-white text-sm  rounded-md shadow-lg hover:bg-black transition-all duration-300 tetxt-center '>SHOP NOW</button>
                    </div>
                </div>
                <div className='bg-[#E0E0E0] rounded-xl h-[25%]'>
                    <img className='h-full w-full object-cover rounded-xl' src="https://media-hosting.imagekit.io//7ff682396fa84e83/image%20(1).png?Expires=1836890701&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=CIeW~byituC0Pg~MviN7X6znFmQAufteT-MpIzKGhD-jITqkJEjz4ZoOR-ZlPu1pLXmTfttHyI4ND1AnicljIey8mNEEP45b1pDwVyzC5ZpuHqDKW5o9nX9hFOWJxJOAXqxxNOew67kXwZYRyVAE4qtyT11P8qUB9WzMtvfjYnwbZ3ncaBLMiBBJwaQ05e7~O~vfmhigCgR4mqHgLNg4g--mI3u8XIdHo6ZQV-b24haaJ6KLLHxWHbtUSmShqpzCbU8OMtUGa8l2P0xGvCtlubRzz4eWFNc4ph6pnmBV~4NQ4vIVeWLIFHx1RmOYnYvLVOCTo5HNuDQp9u77INanhg__" alt="" />
                </div>
            </div>

            <div className='bg-[#E0E0E0] rounded-xl h-[200px] md:h-[500px] overflow-hidden flex justify-center items-end'>
                <img className='h-full w-auto object-cover rounded-xl' src="https://media-hosting.imagekit.io//ea531bcf6c2b4b13/image%20227.png?Expires=1836889965&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vzds2RJ1Vw~aKoblgPVL44cKoIj0KyACB9MNCA0BDr~91I3yGNKLtwduLQ9W3G5~Bj8Cdwu83bgUgMdvbLat-1xoQBl0K2-~UeGu356j0UGAk9ZhhUg0aFR~-QkCDLRAAMV2NJyLsO1aYWyioEtN~JSACbP3pkUrYWLq71aPUfwVkl6UkWiA42P9dEB0wuqr9v0RJIrynIABsTgjMHdourZMd1qRi2Ou46MMnOQuX~VMFKPOiA~KWZcXoAYKMW8FW-y9LEc2iDsN8Byql8Sx0Ze35GI3q2vTZoGh~8P4PtXsr6yNk7wgMVOOhlZHCq~DeeaoiUKGhp9RNXz~9FODOw__" alt="" />
            </div>
        </div>
    )
}

export default HeroSection
