import Image from "next/image";
import MyLink from "../common/MyLink";

import Lady from "@/public/images/index/lady.svg";
import Avatar1 from "@/public/images/index/prof1.svg";
import Avatar2 from "@/public/images/index/prof2.svg";
import Avatar3 from "@/public/images/index/prof3.svg";
import Avatar4 from "@/public/images/index/prof4.svg";
import Stars from "@/public/images/index/Stars.svg";

interface Props {
  avatar: string;
  title: string;
  comment: string;
}
const CommentCard = ({ avatar, title, comment }: Props) => {
  return (
    <div className="bg-gray_006/90 backdrop-blur-sm px-3 py-2 flex gap-2 md:text-sm text-xs rounded-2xl">
      <Image
        alt="عکس پروفایل"
        src={avatar}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex flex-col gap-1 w-52">
        <span className="text-white">{title}</span>
        <span className="text-white/35">{comment}</span>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <div className="w-full grid grid-cols-2 px-8 pt-6">
      <div className="lg:col-span-1 col-span-2 flex flex-col xl:gap-20 gap-8 my-auto xl:my-auto lg:-mt-2 lg:pb-0 pb-10">
        <div className="flex flex-col sm:gap-6 gap-3">
          <div className="flex flex-col">
            <span className="xl:text-[3.6rem] lg:text-[2.75rem] sm:text-[3rem] text-[1.9rem] leading-tight font-bold">
              <span className="text-[75%]">زمان کمتری صرف کنید، </span>
              <br />
              <span className="text-primary text-[120%]">
                مشتری بیشتری جذب کنید!
              </span>
            </span>
          </div>
          <div className="xl:text-[1.3rem] lg:text-[1.2rem] md:text-[1.5rem] text-[1.1rem] text-gray_002">
            <span>
              خدمات خود را به هزاران مشتری معرفی کنید و نوبت‌ها را نیز بدون
              دردسر مدیریت کنید. از طریق این پلتفرم می‌توانید فروش خود را افزایش
              دهید و تمرکز بیشتری بر روی کیفیت خدمات خود داشته باشید.
            </span>
          </div>
          <MyLink
            className="w-fit border-none bg-primary hover:scale-105"
            label="شروع رایگان"
            href={process.env.NEXT_PUBLIC_CALL_TO_ACTION_URL || "#form"}
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            <div className="items-center sm:flex hidden">
              <Image
                className="z-[3] rounded-full sm:w-16 sm:h-16 w-12 h-12"
                alt="عکس پروفایل کاربر"
                src={Avatar1}
              />
              <Image
                className="z-[2] rounded-full sm:w-16 sm:h-16 w-12 h-12 -ms-8"
                alt="عکس پروفایل کاربر"
                src={Avatar2}
              />
              <Image
                className="z-[1] rounded-full sm:w-16 sm:h-16 w-12 h-12 -ms-8"
                alt="عکس پروفایل کاربر"
                src={Avatar3}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="sm:text-3xl text-2xl">52</span>
              <span className="sm:text-xl text-lg text-gray_003 -mt-1.5">
                زیبافر
              </span>
            </div>
          </div>
          <div className="w-[1px] h-8 bg-white rounded-full" />
          <div className="flex flex-col">
            <span className="sm:text-3xl text-2xl">4.2/5</span>
            <div className="flex items-center gap-2">
              <Image alt="" src={Stars} />
              <span className="sm:text-xl text-lg text-gray_003 -mb-1">
                میانگین امتیاز
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:col-span-1 col-span-2 relative lg:block sm:order-last order-first min-[460px]:hidden block sm:pb-0 pb-8">
        <Image alt="" src={Lady} className="sm:w-[70%] w-full h-full mx-auto" />
        <div className="absolute xl:left-28 left-20 sm:bottom-52 bottom-44">
          <CommentCard
            avatar={Avatar4}
            title="ستاره قاسمی"
            comment="من برای کوتاهی مو اومد سالنتون و کاملا از خدمات راضی بودم."
          />
        </div>
        <div className="absolute right-20 bottom-20">
          <CommentCard
            avatar={Avatar3}
            title="ماهتیسا درویشی"
            comment="مرسی عزیزم، لطف داری. من همیشه سعیم اینه که بهترین خدمات رو به مشتری هام ارائه بدم."
          />
        </div>
      </div>
    </div>
  );
}
