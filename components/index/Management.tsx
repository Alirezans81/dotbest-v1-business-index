import Image from "next/image";
import MyLink from "../common/MyLink";

import ManagementPage from "@/public/images/index/management.svg";

export default function Management() {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 py-24 xl:px-36 px-8 xl:gap-32 gap-14">
      <div className="xl:col-span-1 lg:col-span-2 col-span-1 flex flex-col justify-center gap-12 z-50">
        <span className="lg:text-5xl text-3xl leading-tight font-bold">
          مدیریت حرفه‌ای، مشتریان راضی، برنامه‌ای هماهنگ!
        </span>
        <span className="lg:text-xl text-lg text-gray_002">
          دیگر نگران ناهماهنگی نوبت‌ها، زمان‌های خالی و مدیریت مشتریان خود
          نباشید!
          <br />
          با سیستم هوشمند ما، مشتریان می‌توانند به‌راحتی نوبت خود را رزرو کنندو
          شما می‌توانید به‌سادگی همه‌چیز را کنترل کنید. <br /> یادآوری خودکار
          نوبت‌ها، کاهش زمان‌های خالی، و افزایش بهره‌وری تنها بخشی از امکاناتی
          است که کمک می‌کند خدماتی حرفه‌ای‌تر و منظم‌تر ارائه دهید.
        </span>
        <MyLink
          className="w-fit border-none bg-primary hover:scale-105"
          label="ثبت نام کنید"
          href={process.env.NEXT_PUBLIC_CALL_TO_ACTION_URL || "#form"}
        />
      </div>
      <div className="col-span-1 justify-center items-center md:flex sm:hidden block relative md:order-last order-first">
        <div className="w-96 h-96 bg-primary/15 blur-3xl rounded-full absolute md:-left-20 left-20 md:top-auto -top-20 animate-pulse" />
        <Image
          className="transition-all duration-500 hover:shadow-none z-50 xl:scale-110 lg:scale-125 md:scale-110"
          alt=""
          src={ManagementPage}
        />
      </div>
    </div>
  );
}
