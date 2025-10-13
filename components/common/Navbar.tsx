"use client";

// import { Route, topbarRoutes } from "@/lib/routes";
// import Link from "next/link";
import MyLink from "./MyLink";

// const pages: Route[] = topbarRoutes;

export default function Navbar() {
  return (
    <div className="w-full px-8 py-2 flex justify-between items-center">
      <div className="flex items-center">
        {/* <Link href={"/#sidebar"}>Sidebar</Link> */}
        <span className="flex items-center text-primary -mt-2">
          <span className="text-[2.5rem] font-semibold font-eng">best</span>
          <span className="text-[3.8rem] font-semibold font-eng -mt-3 animate-bounce">
            .
          </span>
        </span>
      </div>

      {/* <div className="items-center gap-5 -mb-1 md:flex hidden">
        {pages.map((page, i) => {
          if (i === 0) {
            return (
              <a
                className="transition-all duration-300 text-gray_002 hover:text-white text-xl"
                key={i}
                href={page.route}
              >
                {page.name}
              </a>
            );
          }
          return (
            <Link
              className="transition-all duration-300 text-gray_002 hover:text-white text-xl"
              key={i}
              href={page.route}
            >
              {page.name}
            </Link>
          );
        })}
      </div> */}
      <div className="flex items-center gap-5">
        <MyLink
          className="border-none !px-0 text-gray_002 hover:text-white hover:bg-transparent sm:block hidden"
          label="دریافت اپلیکیشن"
          href={process.env.NEXT_PUBLIC_CALL_TO_ACTION_URL || "#form"}
        />
        <MyLink
          className="border-none py-2 bg-primary hover:scale-105"
          label="ثبت نام/ورود"
          href={process.env.NEXT_PUBLIC_CALL_TO_ACTION_URL || "#form"}
        />
      </div>
    </div>
  );
}
