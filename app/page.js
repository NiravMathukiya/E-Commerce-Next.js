import DealsOfTheMonth from "@/components/DealOfTheDay";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramPost from "@/components/InstagramPost";
import Logos from "@/components/Logos";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import NewSeletter from "@/components/NewSeletter";
import SpecialProduct from "@/components/SpecialProduct";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {

  const companiesdata = [
    "https://media-hosting.imagekit.io//4d3373c5afec4f77/logo.png?Expires=1836892100&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JW6hekFRAy1BJ5oCzOm0T2fvce3G3piUpi9ESBQjJ9uuAa2oxmVupYB9vm2rJxQCgYSXqr-ketjtLXzezMynSKGFoZKWvfHkEoYp88LSH-hK0Ur85b~W2On5nanGmkvvFiwrfEgjaol-C7iTg5-xA5PfDuBjIT3SnI4C9yBKnR1v7y3Z-oTWzMxxtgZxyOvxAPZhKTTTFUiW-EAXXoc1ZKN4oMusAbtVhC5JJLvy7io1Wpcw-pRFXZ20a9pNsH-nwu89vTYm0LCTczBRtP0ZIi76XyzYf17gDkY3JDTkIxLZxKhoMPRPISCIYtrsFTAYdm8kIq~EgoIDNDeVnBGVbw__",
    "https://media-hosting.imagekit.io//5de38b5491d74ca6/logo%20(1).png?Expires=1836892098&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QgUQwOsjnjpDvpXgyqh1s9ZZiq216FsnjE~hsA0cg7b5ug9~YXM-xBSwyJPsuH7BcdloSGLO38rZPjvr4GiO46hiBPFgiCZKgRQprgX2rmd-S9v9V-GBV9SdgA5-AQwTB5bQ4Kh5XJQo5LdqW0iDOhHkjHabD~2UWFaqqVaXeyo0q7ufdL2F34-IG-y1JJzF701z8GXGvD-7ZryD5-rCIRQWEFgnABBsx5QLNbdOeYzjim4Ysyc4YEM-JL2g0zKzKdwfjiiYcqoeZi3e-xLTob2PZGLtHQ3ulb46MH2eMNdCmHiRxM794DFZ~uqeKa~UGQfGQXq~Y3eGz-wHpEgQoQ__",
    "https://media-hosting.imagekit.io//5afac66235724b73/logo%20(2).png?Expires=1836892097&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=JBt1nfRzBlENEwLRmJ8WxpHrM3-XUW9~P5LNy4vtud04UOrVs69kHSCk1zVYl~tW3dFjMEWU2COoCAj2gpj0wfE9dAluax56im9nSd3-qtrNLfM5HuWUKdqYPJ7o0oXPPxEtMXqhj0S3ocu-aptpwWqj3R-fgVfkqi22tYb3UFuW2rALAKt9S1bOXJUw8IdTlnTz2D~Vvh4wvsGIrqLPfSogHM2iPRNE~CeYrYrrBFhUk1x~PRGl3QKLMY~VtvTA4uHAzg4ESvUlSks9jfGF2RvAAfmBSz1sLzxtt1qTsNbulJex-DVfD41YMK8utAdPnO9fX038Og0sZuGen-dlAQ__",
    "https://media-hosting.imagekit.io//b5217858a4d7411b/logo%20(3).png?Expires=1836892095&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mr6bbEF58UiTssZkp2AKRoMEohSzmjp~EUt56c7CeVqbEBPyb4qp7CB6~Q9HeJDoScXfaa0CQ5gQCvBYQL8ZMmHxdmc5BMSwra27FZHDtsrUeie5KHkiTB~d4q84iQAh-MuTVsNT06abBAg08j703qvfxOvbBawL~6r9pMcMpV1T7wTA4nKQFwv53C7fzNwqrCZBY56bK7aoLua~3s95NkoW1XaeLjeDjsBe9bMV-yZvlI8e6xHIc2Sq5tFhBa7C5Fp8vKAdBlGpKI1bI9m5GaRwtUBr5U9uytYySCosOdarnYIsCiHQnWKFhvZk6nGD9BEOFZzRbuUOt8v-zK-NoQ__",
    "https://media-hosting.imagekit.io//9ac1190f14d34704/logo%20(4).png?Expires=1836892095&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LHQPHlFDDAuJ5RG7OPyt~3J76HCAAGVKBSHh4XhorTAhus5o99giTda2-Op6qCBD7HwnQAUtJeSia1suQGdJI43EFj0IaXw3KAvq7PytcN7IAff9cztIBANPe1QqJpvTu7JgbvdAlUz8rfrjxMLNjg0ZXpK3KLyscAdb3OAUVKVmLXbHZZTpQqht187if6yFCNXGg9Irym9zQoA8T3SWGPIBjQBwQq3pDgwXCNVQraQNDmpUkB11ue42wZGAEkwqe7pJ~YOyO5l1xqzOGLGLMiIlJ5t9lhCZSD0bNQ9Gaa2jQavKy2uHOHJAJk95zn3Qt9ESFb5qaMT7Q0g4wPaavQ__"
  ]

  const fecturedData = [
    "https://media-hosting.imagekit.io//2ce50d1f51e944a9/feature%20(1).png?Expires=1836907605&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Wi~TXZwmFnoujOOHgvF4x~E4GXRnu7OpiWaSB8QPChmPlKk~Z0PcGkxxpDXDpLEdJrQqKI0hp4q-e~EffYRDuNxu6Wg1m97sr3zrE8ZIo8BxcN7STSe2fZt33lCXdiNdI6RK2xEWBjfga1ln65mIAJunAXiBStrmy1bMUrrLHOhfpVAZWeBkXoqjhgF54JhrvlPJ4VXSToYuEBjD8yVX-fUM~MHRNOiWZ7-XY3XJp1wadeeFfG-nefbBVetVHf8JL9wFhDGwJCKl4QS7kV-8QGMLtJc~n52JsWOsKaotym~BUzwfKf~DxTojERuMceOeSC~Avo~ITm~ZonydloguAw__",
    "https://media-hosting.imagekit.io//cf957d0d2a724009/feature.png?Expires=1836907605&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TcOW-9W~kB5dlw4jAleKjuQ1ZH8ewvpZ84bPxCmLVrVEV~ktXs-A3VCACuMPRJWTYTMhKxQXQR7MftUqdXrbxiGzYZZ05SB1-KN-ZOcKGVO3WBU1eQWcffYufcE~LRgDpcjzfP~QCCxm40JAuiZxaRjJErOlXMVmScEMARPWj7tirwMHcUhveczlLVZd~si0Ny0mNYVFJONUkPQiHNFDJVEY~G1Z3ugG5y-9cZ554LyGiTIKr501dUcA3Sl3tSVaVyfWcIHEt2zdNbm4G~q77xRJ-tRVlrBWxFscYl9vXENfC6a29lwBS3Yu18nJ~IMxe6lXuke0S2zVz2dlwpWZwg__",
    "https://media-hosting.imagekit.io//4fde622455f4479b/feature%20(2).png?Expires=1836907604&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zoSPKjgVpDS20QnTKQsYaZhmWqaCcsdOPaKStqdU3YbdG4PwqGXOtU3TVkVbxzMx-~nUJ3Y1BC89jSO6fP0grb4HvY~~BDoIoNNsUV0WhRjmlfXelosHYHpXFGaG2jNc-OQZAptl-NL1sewDTNmMevoOG-EBkUHAQzD3~GNfrCPxbCUge~JY~SlRE~1xBrZ4oGdIM7RfCxbGD81aT6TKUdHWp~a3QtPV-m~7t9FSMpBd2MQjGMoYpFm-V0EIgG90jOB0BUDasuG-FgFWqg~ZATzwJvNL4OYbzM3NnesITgD99OEEDl25UAqnYicGnXbBDCXeUXwdy6SsL8cccAaEyA__",
    "https://media-hosting.imagekit.io//8c7a538d8c094ea9/feature%20(3).png?Expires=1836907604&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=sxcwbsZh6RjPb-TUT6f4aEWTZh~To32KKMpOaDeBncDsJZJqUZBl2wd92kQKuWGJHDe~m80~ucO7H~azVZyJIejimS-B~KHjSBSF3ituVTYHmbeHqZBsAbetFAdC1HH~CLIu1IKg07I0rxrs~RRR1iMnwm82WFfcwJNBXnMe7QQKzNbk1JSGp744wjrFXaT7UJDCSo7OTkAHEhvb51LMARyzEX6T7f~m4G55kVELW6ta3~fUPTzUTFFwDIEJObFgyPioROBKhiQWD-rXtD1HT5-kR03wVU-gG65rVF1OyBymihPD9TF1nv8a-o1eZ589GlJIXD77tnslAyObl2hplw__"
  ]

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Logos data={companiesdata} />
      <DealsOfTheMonth />
      <NewArrivals />
      <SpecialProduct />
      <Logos data={fecturedData} num="34" />
      <InstagramPost />
      <TestimonialCarousel />
      <NewSeletter />
      <Footer />
    </div>
  );
}
