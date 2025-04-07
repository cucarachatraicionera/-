import type { NextPage } from "next";
import Image from "next/image";

export type PresaleContentType = {
  className?: string;
};

const PresaleContent: NextPage<PresaleContentType> = ({ className = "" }) => {
  return (
    <div
      className={`relative z-10 pointer-events-none self-stretch h-[969px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-10xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[35px] max-w-full">
        <header className="self-stretch z-50 rounded-21xl bg-black1 border-gray-800 border-solid border-[1px] flex flex-row items-center justify-between py-1.5 pl-2 pr-[7px] gap-5 top-[0] sticky text-left text-lg text-miscellaneous-floating-tab-pill-fill font-montserrat">
          <div className="w-[200px] flex flex-row items-center justify-start py-0 px-5 box-border">
            <Image
              className="w-[46px] relative max-h-full object-cover"
              loading="lazy"
              width={46}
              height={46}
              alt=""
              src="/solana-1@2x.png"
            />
          </div>
          <div className="w-[646px] flex flex-row items-start justify-start gap-9 mq1025:hidden">
            <div className="flex flex-row items-center justify-center">
              <div className="relative leading-[20px] font-medium">
                whitepaper
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[20px] font-medium">swap</div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="w-[122px] relative leading-[20px] font-medium inline-block shrink-0">
                tokenomics
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <div className="relative leading-[20px] font-medium">roadmap</div>
            </div>
          </div>
          <div className="h-11 flex flex-row items-center justify-end py-0 pl-[25px] pr-0 box-border text-lgi text-dark-grey">
            <div className="rounded-25xl bg-miscellaneous-floating-tab-pill-fill flex flex-row items-center justify-center p-1">
              <div className="flex flex-row items-center justify-center py-2.5 px-4">
                <div className="relative leading-[16px] font-medium">
                  Buy Now
                </div>
              </div>
              <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                <Image
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  width={24}
                  height={24}
                  alt=""
                  src="/arrow-outward.svg"
                />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PresaleContent;
