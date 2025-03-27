import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[4282px] left-[92px] w-[1301px] h-[894px] flex flex-row items-start justify-start pt-0 px-0 pb-[172px] box-border max-w-full text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch w-[1224px] flex flex-row items-end justify-start gap-[71px] max-w-full mq1025:flex-wrap">
        <div className="self-stretch flex-1 rounded-21xl flex flex-col items-start justify-start py-10 px-[39px] box-border gap-10 bg-[url('/swap-module@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq450:min-w-full mq1025:min-h-[auto]">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-5">
            <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 z-[0]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                <div className="relative leading-[16px] font-medium">from</div>
              </div>
              <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-0 text-21xl mq450:flex-wrap">
                <div className="flex flex-row items-center justify-start">
                  <b className="relative leading-[44px] mq450:text-5xl mq450:leading-[26px] mq1025:text-13xl mq1025:leading-[35px]">
                    2,194
                  </b>
                </div>
                <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl overflow-x-auto flex flex-row items-center justify-end">
                  <div className="flex flex-row items-center justify-end">
                    <Image
                      className="w-9 relative h-9"
                      width={36}
                      height={36}
                      alt=""
                      src="/protocol-icon.svg"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-4">
                    <div className="relative text-base leading-[16px] font-montserrat text-deepskyblue text-left">
                      SOL
                    </div>
                  </div>
                  <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5">
                    <Image
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                </button>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 z-[1] font-overpass">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-5">
                <div className="relative leading-[16px] font-medium">to</div>
              </div>
              <div className="self-stretch rounded-xl bg-dark-grey flex flex-row items-center justify-between p-xl gap-0 text-21xl font-montserrat mq750:flex-wrap">
                <div className="flex flex-row items-center justify-start">
                  <b className="relative leading-[44px] mq450:text-5xl mq450:leading-[26px] mq1025:text-13xl mq1025:leading-[35px]">
                    12,466
                  </b>
                </div>
                <button className="cursor-pointer border-deepskyblue border-solid border-[1px] py-0.5 px-[3px] bg-dark-grey rounded-25xl flex flex-row items-center justify-end">
                  <div className="h-[38px] w-[41px] relative">
                    <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-end">
                      <div className="w-9 relative rounded-[50%] bg-black1 h-9" />
                    </div>
                    <Image
                      className="absolute top-[0px] left-[4px] w-[37px] h-[38px] object-cover z-[1]"
                      width={37}
                      height={38}
                      alt=""
                      src="/chihuahua-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-center py-2.5 px-4">
                    <div className="relative text-base leading-[16px] font-montserrat text-deepskyblue text-left">
                      Pinky Promise
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="!m-[0] absolute top-[calc(50%_-_22px)] left-[calc(50%_-_21.5px)] rounded-17xl bg-deepskyblue border-black border-solid border-[4px] flex flex-row items-start justify-start p-1.5 z-[2]">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/autorenew.svg"
              />
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-black flex flex-col items-start justify-start p-xl gap-5">
            <div className="flex flex-row items-center justify-start gap-2.5 text-xl mq750:flex-wrap">
              <div className="flex flex-row items-end justify-start gap-1">
                <b className="relative leading-[20px] mq450:text-base mq450:leading-[16px]">
                  2,194
                </b>
                <div className="relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                  SOL
                </div>
              </div>
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                loading="lazy"
                width={24}
                height={24}
                alt=""
                src="/drag-handle.svg"
              />
              <div className="flex flex-row items-end justify-start gap-1">
                <b className="relative leading-[20px] mq450:text-base mq450:leading-[16px]">
                  12,466
                </b>
                <div className="relative leading-[20px] font-light mq450:text-base mq450:leading-[16px]">
                  PINKY PROMISE
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-0 mq450:flex-wrap">
              <div className="w-[140px] flex flex-row items-center justify-start">
                <div className="relative leading-[20px] whitespace-nowrap">
                  Minimun Received
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-2">
                <b className="relative leading-[16px]">10</b>
                <div className="relative leading-[16px]">PINKY PROMISE</div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-0">
              <div className="w-[97px] flex flex-row items-center justify-start">
                <div className="relative leading-[20px] whitespace-nowrap">
                  Price Impact
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-2 font-space-grotesk">
                <b className="relative leading-[16px]">-</b>
                <div className="relative leading-[16px] hidden">-</div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] p-1 bg-deepskyblue self-stretch rounded-25xl flex flex-row items-center justify-center relative">
            <div className="flex flex-row items-center justify-center py-2.5 px-4 z-[0]">
              <div className="relative text-base leading-[16px] font-montserrat text-dark-grey text-left">
                Swap
              </div>
            </div>
            <div className="!m-[0] absolute top-[4px] right-[4px] rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 z-[1]">
              <Image
                className="h-6 w-6 relative overflow-hidden shrink-0"
                width={24}
                height={24}
                alt=""
                src="/autorenew-1.svg"
              />
            </div>
          </button>
        </div>
        <div className="h-[606px] w-[570px] flex flex-col items-start justify-start max-w-full text-6xl mq750:min-w-full mq1025:flex-1">
          <div className="self-stretch h-[563px] flex flex-col items-start justify-start gap-10">
            <div className="self-stretch flex flex-col items-start justify-start">
              <h3 className="m-0 self-stretch relative text-inherit leading-[24px] font-bold font-[inherit] opacity-[0.6] mq450:text-xl mq450:leading-[19px]">
                shop now
              </h3>
              <h1 className="m-0 w-[635px] relative text-61xl leading-[80px] font-bold font-[inherit] text-deepskyblue inline-block mq450:text-5xl mq450:leading-[32px] mq1025:text-21xl mq1025:leading-[48px]">
                <p className="m-0">buy the Lotery</p>
                <p className="m-0">Pinky Promise</p>
              </h1>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-10xl">
              <h2 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[40px] font-light font-[inherit] mq450:text-4xl mq450:leading-[32px]">
                The Pinky Promise Token is a digital lottery where you can buy
                tickets with rewards. 10% of each prize is reinvested in
                liquidity, staking, and development and without intermediaries.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
