import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute bottom-[0px] left-[calc(50%_-_693px)] rounded-t-21xl rounded-b-none w-[1386px] overflow-hidden flex flex-col items-center justify-start max-w-full text-left text-6xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="w-[1440px] flex-1 rounded-t-21xl rounded-b-none bg-gray-900 border-gray-800 border-solid border-t-[1px] box-border overflow-hidden flex flex-row items-center justify-between pt-[118px] px-10 pb-60 relative gap-0">
        <div className="w-[439px] flex flex-col items-start justify-start gap-5 z-[0]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] opacity-[0.6] mq450:text-xl mq450:leading-[19px]">
              contact
            </h3>
            <h1 className="m-0 self-stretch relative text-61xl leading-[80px] font-semibold font-[inherit] mq450:text-5xl mq450:leading-[32px] mq1025:text-21xl mq1025:leading-[48px]">
              contact us
            </h1>
          </div>
          <div className="w-[469px] flex flex-col items-start justify-start py-1.5 pl-[30px] pr-5 box-border">
            <h3 className="m-0 w-[478px] h-[77px] relative text-inherit tracking-[0.02em] leading-[30px] font-light font-[inherit] inline-block mq450:text-xl mq450:leading-[24px]">
              <p className="m-0">
                Pinky Promise!! Feel free to contact us if you have any
                questions or suggestions.
              </p>
              <p className="m-0">
                Send your messages to pinkypromisetkn@gmail.com
              </p>
            </h3>
          </div>
        </div>
        <Image
          className="h-2 w-[329px] absolute !m-[0] top-[407px] left-[71px] z-[1]"
          loading="lazy"
          width={329}
          height={8}
          alt=""
          src="/highlight.svg"
        />
        <div className="flex flex-row items-start justify-start gap-10 z-[2] text-base text-darkslategray mq1025:flex-wrap">
          <button className="cursor-pointer border-darkslategray border-solid border-[1px] py-0.5 px-[3px] bg-miscellaneous-floating-tab-pill-fill rounded-25xl flex flex-row items-center justify-center [row-gap:20px] mq450:flex-wrap">
            <div className="flex flex-row items-center justify-center py-2.5 px-4">
              <div className="relative text-base leading-[16px] font-montserrat text-darkslategray text-left">
                pinkypromisetkn@gmail.com
              </div>
            </div>
            <div className="rounded-17xl bg-darkslategray flex flex-row items-start justify-start p-1.5">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/arrow-outward.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer border-darkslategray border-solid border-[1px] py-0.5 px-[3px] bg-miscellaneous-floating-tab-pill-fill rounded-25xl flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-center py-2.5 px-[15px]">
              <div className="relative text-base leading-[16px] font-montserrat text-darkslategray text-left">
                Telegram
              </div>
            </div>
            <div className="rounded-17xl bg-darkslategray flex flex-row items-start justify-start p-1.5">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/arrow-outward.svg"
              />
            </div>
          </button>
          <button className="cursor-pointer border-darkslategray border-solid border-[1px] py-0.5 px-[3px] bg-miscellaneous-floating-tab-pill-fill rounded-25xl flex flex-row items-center justify-center">
            <div className="w-[126px] flex flex-row items-center justify-center py-2.5 px-4 box-border">
              <div className="w-[82px] relative text-base leading-[16px] font-montserrat text-darkslategray text-left inline-block shrink-0">
                Reddit
              </div>
            </div>
            <div className="rounded-17xl bg-darkslategray flex flex-row items-start justify-start p-1.5">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/arrow-outward.svg"
              />
            </div>
          </button>
          <div className="rounded-25xl bg-miscellaneous-floating-tab-pill-fill border-darkslategray border-solid border-[1px] flex flex-row items-center justify-center p-1">
            <div className="flex flex-row items-center justify-center py-2.5 px-4">
              <div className="relative leading-[16px]">X</div>
            </div>
            <div className="rounded-17xl bg-darkslategray flex flex-row items-start justify-start p-1.5">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/arrow-outward.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="w-[1440px] bg-black1 border-black border-solid border-t-[1px] box-border flex flex-col items-center justify-center pt-[18px] px-2.5 pb-5 text-left text-base text-light-gray font-overpass">
        <div className="relative leading-[20px] font-light flex items-center pl-5 pr-5">
          © 2025 PINKY PROMISE. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
