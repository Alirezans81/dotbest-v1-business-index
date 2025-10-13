import Image from "next/image";
import Image1 from "@/public/images/index/Sale/1.svg";
import Image2 from "@/public/images/index/Sale/2.svg";
import Image3 from "@/public/images/index/Sale/3.svg";
import Image4 from "@/public/images/index/Sale/4.svg";
import Carousel from "../common/Carousel";

export default function Sale() {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 py-16 xl:px-36 px-8 xl:gap-32 gap-14">
      <div className="col-span-1 justify-center items-center md:flex sm:hidden block max-h-full overflow-hidden">
        <div className="h-full w-full flex justify-center items-center overflow-hidden">
          <Carousel autoPlay className="overflow-hidden">
            <div className="h-[30rem] flex">
              <Image
                className="rounded-[1rem] h-full w-fit mx-auto shadow-[0_0px_100px_-5px_rgba(224,145,72,0.4)] transition-all duration-500 hover:shadow-none"
                alt=""
                src={Image1}
              />
            </div>
            <div className="h-[30rem] flex">
              <Image
                className="rounded-[1rem] h-full w-fit mx-auto shadow-[0_0px_100px_-5px_rgba(224,145,72,0.4)] transition-all duration-500 hover:shadow-none"
                alt=""
                src={Image2}
              />
            </div>
            <div className="h-[30rem] flex">
              <Image
                className="rounded-[1rem] h-full w-fit mx-auto shadow-[0_0px_100px_-5px_rgba(224,145,72,0.4)] transition-all duration-500 hover:shadow-none"
                alt=""
                src={Image3}
              />
            </div>
            <div className="h-[30rem] flex">
              <Image
                className="rounded-[1rem] h-full w-fit mx-auto shadow-[0_0px_100px_-5px_rgba(224,145,72,0.4)] transition-all duration-500 hover:shadow-none"
                alt=""
                src={Image4}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex flex-col justify-center gap-12">
        <span className="lg:text-5xl text-3xl leading-tight font-bold">
          خدمات شما، در هر زمان و<br /> هر مکان در دسترس است!
        </span>
        <span className="lg:text-xl text-lg text-gray_002">
          با راه‌حل‌های دیجیتال ما، به هزاران مشتری در سراسر منطقه دسترسی پیدا
          کنید.
          <br />
          <br /> سیستم آنلاین ما به شما این امکان را می‌دهد که بدون نیاز به تماس
          تلفنی یا حضور فیزیکی،
          <br /> تمام خدمات خود را به مشتریان معرفی کنید و در زمانی کوتاه، تعداد
          بیشتری نوبت دریافت کنید.
        </span>
      </div>
    </div>
  );
}
