"use client"

import React from 'react'

const InstagramPost = () => {

  const images = [
    "https://media-hosting.imagekit.io//800d76755a6943cb/image%20(7).png?Expires=1836962894&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=n~DR8E0nbqKzhL5kRzw5CsIsHmadiiAOX7t0boiOh-ImsMQSW2kRolcTIzY9~wkHmY4pphmCo3NzUcyx3t3FKzAZvq~l9rInFvQnfYlEEWR~F2TeNC63TZ0rpS8WawVY51mrjqDZp~PIK4fkEVLjDayi4l5zmVU8~QPEgE1zpzTxLG91rXXNjxJVJAazc3ZShmX4wH6oznp6hrWKn4gMaP4oucZGtZe0CMPAxgwCpPqS-94qppz0y14QxQPhmFwlVqoWqgx0eH5E4BhXcaPuemvJ4J4zex0fAMummZexnBIu2~8fByGPPUaA9g33dtEq2k72uOfMVPZylVIIhzR9rw__",
    // "https://media-hosting.imagekit.io//1e5437e1c2ce498a/image%20(8).png?Expires=1836964537&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qgxtikflJi~jVsRsDQBXKuYToAGpGqX2kB5LeHMLSKxd1S6Znc~PKbQ1szbC7aKi1HRtcCHpmdZ~WrMs~hwEU95B83Q017ghkNKw0R7K8VpJp8N6dNfZo8RA10DjjWrcUKJaHXgALFbXTq7dh5H3zRPWHmd2ND1Mr1wa6fMxGzwUgsHcGXPlvvQ8O24xsIMm5eE54E1cZ4GISYPlLh~qhnvokZS1EQQsNu4ymuRktMnxHomQS0QHi4GtQG7w7-m7-g93x18K-mY9-hzKb4547brlbp9Bq7IiGAEI3fe8vGHf21CyhrEk9Y03lglJdhvYSu2t~4l0HGFMzQF9ZZEmxg__",
    "https://media-hosting.imagekit.io//2ca41103504f4cd4/image%20(9).png?Expires=1836965035&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=O-UPQGIMIXuRLfBws68ZxFhJ1X3zLOtZCVXD79rtjgpflRxSf8q8afwazXalaWk7gi75KuEQMCIPcr4EAZKWoYQJaxUabdZF8r6KZp38UTw9eoJZhhCXKhrhCBGO3e7Z1m2RBY9pSccm7wpJXcA54Ka52qjCuagCguozymgELFvY~9SEWoha5gkFjYyGQycgHhDKLIVNM4MtKJ~uwyZfKRYFC2Xd3kdaO07PZxkqpNVkBt~vDTzHDGGp1DC1FiToSw3IEEAc2MGrABrUFxcAG~JACbcpfrdVbShUttUe9vUoHUzDe6tQpr6NJyWa0UDDnGCdR3G-V5DEDZrXK35D0A__",
    // "https://media-hosting.imagekit.io//e8a9e1cd5e034a35/image%20(10).png?Expires=1836965050&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZNh9sFlkMJeDtN27Sn-YSii9P4l3ZboZz-FN28WF3eEJJNALfjrbhgjB41aQMSHASs5MCkH6~i48g6mPH30MT0FVwrR1tWoCA93MWSEEoYICrneIAtutyzyRdqQC~2OCa9YpIZtngLrQDk4Yj~xtvi~PgdqggCE6dGPRIl1-aBx~ZFG7nMehmALqoYCju8Y7jgfmIQcfPW5WsmsjZ9GWFkTnvgNU5O04T5QIsRGhQnh1XBxVwK4XpsrD1COi6JejItRAesMXeEksVz68R1N~Viqgx1fWTs1lYdJOxfEsjKSRAf1oRQwSoi5-VwbL7ynSRgA1YXpSxHdr-rYOV0Wb3g__",
    "https://media-hosting.imagekit.io//9b8f8dd478814108/image%20(11).png?Expires=1836965066&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S3Iu-OEAJzpGwpnc2CJkmGfcRj3weBfIgqubhsMpekoI-PO~0vRnJ9Z~U5WfyCLgzK2xF1iQQ9jHsUK0u0rCqI5fNBlmUt5pw4wQjiMtixHWDynLGpHAc1ZhOujauWaFQU0a6PEX5aYxfIAMuEPotM6mMTwF-cnBXsBnbMm-4Mf0CBZZtQ4hFrO~pjmM5wmmjXcaLk1v31xj4wwzX05x1tUSG9GeeOnmii~cWkE~uCvXXrMg9Mp7sstsbH~h5QBoBeAmv2qoZ5VAHwzbxCJOxfE28OP~PhGXyvJWcssy0-75OSNd4nQQxOuF2NginA6AfpZdnPts5dS38G3u4vdMkw__",
    "https://media-hosting.imagekit.io//19a946b775d443c1/image%20(12).png?Expires=1836965093&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=M6IXwDQm9qvc6yJTCU~0af~py6uNDrcLuFQexjDjVDg5uERCz0qPYjE3ckV55UmILGiCGMSwCaz3rY5-jvpBxXANMzwUKfLXxHyuUAQYWlEAfoN21nGM~NuhfbAlEVXyC0DY3uejSPe2or4UB9qlWFqMC9F~ze6jPrOUSzaeGGsXiORg6SAcZB8No2wOq9ldsxN4bhkoKd7LVHhW1PEfsBNMoX-gboIwA2sr6xd93PnjmEqxfLIGeRXXSVTYMua06taymotjQC8iciFQ9bwoqzhFGSIPxFArvcdeIg~fjZHXZQD64yBaCWIxWxCHu0AlkJIp980orc-Xn9IhRVTnOQ__",
    "https://media-hosting.imagekit.io//f0cd85a2a28b4e05/image%20(13).png?Expires=1836965109&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EZnvfxUh6t4oVSfkmIwG8oyHpvIz5vL2kdgDpZIlykgK8zr3BVomr-xzunJ3jpQub5~GpNwqAMZ88VGeBTGaoSNFMkC3vUEt95tPMyYFPeZy~YS6Ed70Dh~7ZiNaAqDFdNiFMGUeU4Sxahz14UyusJS0lC1esGo8~zSmfVej9e9jHm3WQhf3RfKBHdcED1jJpnDFA49yA~371thQXcYcwQMl4IvXQrMU-ontq81HmY-zD3lomjDvA4OWLNA7UaE175vl8VVoStdmFD-D1p2BBathBicVXlAzHZK91YwJZPzwN24w0PE~sUsPPLfwQJ2eiP9bW5iCsEBToQpd2SzWNw__"
  ]


  return (
    <div className='max-w-6xl mx-auto mt-6 mb-10 '>
      <div className='flex flex-col items-center mb-10'>
        <h1 className='md:text-4xl text-2xl font-semibold text-slate-600  text-shadow-md'>Follow Us On Instagram</h1>
        <p className='md:text-[14px] text-[9px] mt-4 w-2/3 text-center text-slate-600 text-opacity-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.  Eaque, laboriosam? Eaque, laboriosam Eaque, laboriosam</p>
      </div>
      <div className='flex gap-2 items-center justify-center'>
        {
          images.map((img, index) => {
            return (

              <div key={index} className={`${index % 2 === 0 ? "md:w-1/2 w-full h-[400px] " : "md:w-1/2 w-full h-[350px]"}`}>
                <img src={img} alt="" className='w-full h-full rounded-lg object-cover' />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default InstagramPost
