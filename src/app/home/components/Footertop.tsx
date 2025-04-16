'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footertop = () => {
    return (
        <div className="flex flex-col items-center bg-[linear-gradient(180deg,#227631_0%,#3FA740_100%)] p-6 rounded-[30px_30px_0px_0px] max-md:px-6 max-sm:px-4">
            <div className="flex justify-center items-center gap-[57px] w-full max-w-[1200px] max-md:flex-col max-md:gap-8">
                <div className="flex flex-col w-full max-w-[750px] pt-[79px] max-md:pt-10 max-sm:pt-6">
                    <h1 className="text-white text-5xl  font-bold leading-[52.3px] tracking-[2.4px] mb-4 max-md:text-[40px] max-md:leading-[44px] max-sm:text-[32px] max-sm:leading-[35.2px]">
                        Ready to Transform Your Business with Dezprox?
                    </h1>
                    <p className="text-white text-lg font-medium leading-[25.2px] tracking-[0.18px] max-w-[451px] mb-[19px] max-md:text-base max-md:leading-[22.4px] max-sm:text-sm max-sm:leading-[19.6px]">
                        Take the next step toward smarter automation, better customer
                        management, and data-driven decisions.
                    </p>
                    <div className="flex items-center ">
                        <Link href="/contact_us">
                        <button
                            className="bg-neutral-950 cursor-pointer text-[#F5FFFD] text-[15px] font-medium leading-[22.5px] tracking-[-0.3px] shadow-[0px_1.344px_0.537px_-0.625px_rgba(0,0,0,0.09),0px_3.185px_1.274px_-1.25px_rgba(0,0,0,0.09),0px_5.809px_2.324px_-1.875px_rgba(0,0,0,0.08),0px_9.658px_3.863px_-2.5px_rgba(0,0,0,0.08),0px_15.597px_6.239px_-3.125px_rgba(0,0,0,0.07),0px_25.531px_10.212px_-3.75px_rgba(0,0,0,0.06),0px_43.962px_17.585px_-4.375px_rgba(0,0,0,0.04)] px-[30px] py-2.5 rounded-[40px]"
                            onClick={() => console.log("Get started clicked")}
                        >
                            Get started for free
                        </button>
                        </Link>
                    </div>
                </div>
                <Image
                    width={500}
                    height={500}
                    src="https://res.cloudinary.com/do7dw5dwq/image/upload/v1743626470/Robot2_iiy9b2.png"
                    alt="Dezprox_Robot"
                    className="w-[393px] h-[393px] max-lg:w-[300px] max-lg:h-[300px] max-sm:w-[200px] max-sm:h-[200px]"
                />
            </div>
        </div>
    );
};

export default Footertop;
