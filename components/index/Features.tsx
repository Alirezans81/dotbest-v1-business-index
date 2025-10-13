import { ChartNoAxesCombined, Clock, ChartPie } from "lucide-react";

export default function Features() {
  return (
    <div className="py-20">
      <h2 className="xl:text-5xl sm:text-4xl text-3xl font-bold text-center mb-14">
        ویژگی‌های برتر برای تجربه بهتر
      </h2>
      <div className="flex md:flex-row flex-col justify-center gap-10 xl:px-20 sm:px-8 px-8">
        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4 min-[420px]:px-[10%] sm:px-0">
          <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl sm:shadow-orange-500 shadow-orange-500/35 hover:shadow-none">
            <ChartNoAxesCombined className="text-orange-500" />
          </div>
          <div className="flex-1 flex flex-col sm:items-start items-center">
            <h3 className="xl:text-2xl sm:text-xl text-lg font-bold mb-2 sm:text-start text-center">
              جذب مشتریان جدید
            </h3>
            <p className="text-gray_002 lg:text-xl sm:text-lg text-base sm:text-start text-center sm:w-auto">
              با پیشنهادات ویژه و یادآوری‌های خودکار، مشتریان بیشتری جذب کنید و
              درآمد خود را افزایش دهید
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4 min-[420px]:px-[10%] sm:px-0">
          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl sm:shadow-green-500 shadow-green-500/35 hover:shadow-none">
            <Clock className="text-green-500" />
          </div>
          <div className="flex-1 flex flex-col sm:items-start items-center">
            <h3 className="xl:text-2xl sm:text-xl text-lg font-bold mb-2 sm:text-start text-center">
              مدیریت مشتریان و نوبت‌دهی
            </h3>
            <p className="text-gray_002 lg:text-xl sm:text-lg text-base sm:text-start text-center sm:w-auto">
              تمامی نوبت‌ها، مشتریان و شیفت‌های کاری را در یک داشبورد حرفه‌ای
              مدیریت کنید
            </p>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col sm:items-start items-center gap-4 min-[420px]:px-[10%] sm:px-0">
          <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl sm:shadow-purple-500 shadow-purple-500/35 hover:shadow-none">
            <ChartPie className="text-purple-500" />
          </div>
          <div className="flex-1 flex flex-col sm:items-start items-center">
            <h3 className="xl:text-2xl sm:text-xl text-lg font-bold mb-2 sm:text-start text-center">
              رعایت حریم خصوصی و حفاظت از داده ها
            </h3>
            <p className="text-gray_002 lg:text-xl sm:text-lg text-base sm:text-start text-center sm:w-auto">
              داده‌های شما و مشتریانتان با جدیدترین استانداردهای امنیتی
              رمزگذاری و به صورت ناشناس ثبت می‌شود
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
