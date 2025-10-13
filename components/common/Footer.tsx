/* eslint-disable @next/next/no-img-element */
// import { footerRoutes, Route } from "@/lib/routes";
import Link from "next/link";

import Telegram from "@/public/images/index/telegram.svg";
import Linkdin from "@/public/images/index/linkdin.svg";
import Whatsapp from "@/public/images/index/whatsapp.svg";
import Instagram from "@/public/images/index/instagram.svg";
import Image from "next/image";

// const pages: Route[] = footerRoutes;

export default function Footer() {
  return (
    <div className="w-full px-8 py-3 flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <span className="flex items-center text-primary sm:w-44">
          <span className="text-[2rem] font-eng">best</span>
          <div className="w-[0.45rem] h-[0.45rem] bg-primary rounded-b-full rounded-tl-full mr-[0.15rem]"></div>
        </span>

        {/* <div className="sm:flex hidden items-center gap-5 -mb-1">
          {pages.map((page, i) => (
            <Link
              className="transition-all duration-300 text-gray_002 hover:text-white text-xl"
              key={i}
              href={page.route}
            >
              {page.name}
            </Link>
          ))}
        </div> */}

        <div className="flex-1 flex gap-2 justify-center items-center">
          <div className="w-14 h-14">
            <Link
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=628533&Code=ziXRknRNVqJr1KRAwMTTCiR4HPeI573s"
            >
              <img
                referrerPolicy="origin"
                src="https://trustseal.enamad.ir/logo.aspx?id=628533&Code=ziXRknRNVqJr1KRAwMTTCiR4HPeI573s"
                alt=""
                style={{ cursor: "pointer" }}
                // code="ziXRknRNVqJr1KRAwMTTCiR4HPeI573s"
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-end items-center gap-5 sm:w-44">
          <Link href={"https://wa.me/message/YJH74RGKXLCBI1"}>
            <Image alt="" className="w-6 h-6" src={Whatsapp} />
          </Link>
          <Link
            href={
              "https://www.instagram.com/dotbest.ir?igsh=c24ycmJ2MjJkNHo5&utm_source=qr"
            }
          >
            <Image alt="" className="w-6 h-6" src={Instagram} />
          </Link>
          <Link href={"https://www.linkedin.com/in/dotbest"}>
            <Image alt="" className="w-6 h-6" src={Linkdin} />
          </Link>
          <Link href={"https://t.me/dotbest_support"}>
            <Image alt="" className="w-6 h-6" src={Telegram} />
          </Link>
        </div>
      </div>
      <div className="flex xl:hidden flex-row gap-3 items-center text-lg mx-auto -mt-2">
        <span>مشهد، فلسطین 19 (شهید قادری) ،پلاک 65، طبقه دوم</span>
        <span>|</span>
        <span>05138823507</span>
      </div>
      <div className="w-full h-[1px] bg-gray_003" />
      <div className="w-full flex sm:justify-between justify-center items-center">
        <div className="items-center gap-6 sm:flex hidden w-80">
          <Link
            className="text-lg transition-all duration-500 text-gray_003 hover:text-white"
            href=""
          >
            قوانین و ضوابط
          </Link>
          <Link
            className="text-lg transition-all duration-500 text-gray_003 hover:text-white"
            href=""
          >
            سیاست حفظ حریم خصوصی
          </Link>
        </div>
        <div className="hidden xl:flex flex-row gap-3 items-center text-lg">
          <span>مشهد، فلسطین 19 (شهید قادری) ،پلاک 65، طبقه دوم</span>
          <span>|</span>
          <span>05138823507</span>
        </div>
        <span className="text-lg w-80 sm:text-end text-center">
          © ۲۰۲۵ Best. تمامی حقوق محفوظ است.
        </span>
      </div>
    </div>
  );
}
