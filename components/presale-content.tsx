import type { NextPage } from "next";
import Image from "next/image";

export type PresaleContentType = {
  className?: string;
};

const PresaleContent: NextPage<PresaleContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[969px] flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full text-center text-10xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-end justify-start gap-[35px] max-w-full">
        <header className="self-stretch rounded-21xl bg-black1 border-gray-800 border-solid border-[1px] flex flex-row items-center justify-between py-1.5 pl-2 pr-[7px] gap-5 top-[0] z-[99] sticky text-left text-lg text-miscellaneous-floating-tab-pill-fill font-montserrat">
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
        <div className="flex-1 flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
          <div className="self-stretch w-[786px] rounded-10xl [background:linear-gradient(180deg,_#1e1e1e_56%,_#202020),_#3512e3] border-gray-800 border-solid border-[1px] box-border flex flex-col items-start justify-start pt-[79px] px-10 pb-10 relative gap-5 max-w-full">
            <div className="w-[378px] h-20 flex flex-col items-start justify-start z-[0] text-29xl">
              <div className="w-[704px] h-[57px] flex flex-col items-start justify-start">
                <h1 className="m-0 self-stretch relative text-inherit leading-[80px] font-bold font-[inherit] mq450:text-10xl mq450:leading-[48px] mq1025:text-19xl mq1025:leading-[64px]">
                  $PINKYP Presale
                </h1>
              </div>
            </div>
            <div className="w-[670px] relative text-xl leading-[16px] text-right inline-block z-[1] mq450:text-base mq450:leading-[13px]">
              <span className="font-medium">{`Listing Price: `}</span>
              <b>$10,000,000</b>
            </div>
            <div className="w-[714px] h-[38px] rounded-xl bg-miscellaneous-floating-tab-pill-fill border-darkslategray border-solid border-[5px] box-border flex flex-row items-center justify-between py-3.5 px-5 z-[2] text-left text-gainsboro font-sofia">
              <h2 className="m-0 h-[43px] w-[667px] relative text-inherit leading-[44px] font-normal font-[inherit] whitespace-pre-wrap inline-block [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)] mq450:text-4xl mq450:leading-[35px]">{`>  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >  >`}</h2>
            </div>
            <div className="w-[670px] relative leading-[16px] font-extrabold inline-block z-[3] text-dimgray mq450:text-4xl mq450:leading-[13px]">
              <span>USD Raised:</span>
              <span className="text-miscellaneous-floating-tab-pill-fill">
                {" "}
                $0.00 / $ 10.000.000
              </span>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start z-[4] text-left text-base text-whitesmoke font-syne">
              <div className="self-stretch rounded-xl bg-gray-500 flex flex-col items-start justify-start pt-5 px-1 pb-1 gap-5 text-center text-miscellaneous-floating-tab-pill-fill font-montserrat">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-2">
                  <div className="w-[670px] relative leading-[16px] font-medium inline-block shrink-0">
                    <span className="whitespace-pre-wrap">{`_______________________  `}</span>
                    <span className="text-xl">Presale payment methods</span>
                    <span className="whitespace-pre-wrap">
                      {" "}
                      ________________________
                    </span>
                  </div>
                </div>
                <div className="self-stretch rounded-xl bg-gray-400 flex flex-row items-center justify-between p-xl gap-0 text-left text-whitesmoke font-syne mq750:flex-wrap mq750:justify-center">
                  <button className="cursor-pointer border-black border-solid border-[3px] p-1 bg-darkslategray w-[122px] rounded-25xl box-border flex flex-row items-center justify-end">
                    <div className="h-9 w-8 relative hidden" />
                    <Image
                      className="w-6 relative max-h-full object-cover"
                      width={24}
                      height={24}
                      alt=""
                      src="/trone-2@2x.png"
                    />
                    <div className="flex flex-row items-center justify-center py-2.5 px-4">
                      <div className="relative text-base leading-[16px] font-syne text-whitesmoke text-left">
                        SOL
                      </div>
                    </div>
                  </button>
                  <div className="w-[125px] rounded-25xl bg-darkslategray border-black border-solid border-[3px] box-border flex flex-row items-center justify-end p-1">
                    <div className="h-9 w-8 relative hidden" />
                    <Image
                      className="w-[37px] relative rounded-93xl-5 max-h-full object-contain"
                      loading="lazy"
                      width={37}
                      height={37}
                      alt=""
                      src="/usdt-1@2x.png"
                    />
                    <div className="flex flex-row items-center justify-center py-2.5 px-4">
                      <div className="relative leading-[16px]">USDT</div>
                    </div>
                  </div>
                  <div className="w-[120px] rounded-25xl bg-darkslategray border-black border-solid border-[3px] box-border flex flex-row items-center justify-end p-1">
                    <Image
                      className="w-[38px] relative max-h-full object-cover"
                      width={38}
                      height={38}
                      alt=""
                      src="/visa-1@2x.png"
                    />
                    <div className="flex flex-row items-center justify-center py-2.5 px-4">
                      <div className="relative leading-[16px]">VISA</div>
                    </div>
                    <div className="rounded-17xl bg-dark-grey hidden flex-row items-start justify-start p-1.5">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        width={24}
                        height={24}
                        alt=""
                        src="/keyboard-arrow-down-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[104px] rounded-xl bg-gray-500 flex flex-col items-start justify-start pt-5 px-1 pb-1 box-border mq450:h-auto">
                <div className="self-stretch rounded-xl bg-gray-400 flex flex-row items-center justify-between p-xl gap-0 mq450:flex-wrap">
                  <div className="h-[42px] w-[125px] rounded-25xl bg-darkslategray border-black border-solid border-[3px] box-border flex flex-row items-center justify-end p-1">
                    <div className="h-9 w-8 relative hidden" />
                    <div className="flex flex-row items-center justify-center py-2.5 px-4 gap-2.5">
                      <Image
                        className="w-[30.2px] relative max-h-full object-contain"
                        width={30}
                        height={30}
                        alt=""
                        src="/btc-1@2x.png"
                      />
                      <div className="relative leading-[16px]">BTC</div>
                    </div>
                  </div>
                  <div className="w-[120px] rounded-25xl bg-darkslategray border-black border-solid border-[3px] box-border flex flex-row items-center justify-end p-1">
                    <Image
                      className="w-9 relative rounded-93xl-5 max-h-full object-cover"
                      loading="lazy"
                      width={36}
                      height={36}
                      alt=""
                      src="/fondo-1@2x.png"
                    />
                    <div className="flex flex-row items-center justify-center py-2.5 px-4">
                      <div className="relative leading-[16px]">BNB</div>
                    </div>
                    <div className="rounded-17xl bg-dark-grey hidden flex-row items-start justify-start p-1.5">
                      <Image
                        className="h-6 w-6 relative overflow-hidden shrink-0"
                        width={24}
                        height={24}
                        alt=""
                        src="/keyboard-arrow-down-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[137px] rounded-xl bg-black flex flex-col items-start justify-start pt-[30px] px-1 pb-1 box-border text-10xl mq1025:h-auto">
                <div className="self-stretch h-[102px] rounded-xl bg-black1 flex flex-row items-center justify-between p-xl box-border gap-0 mq1025:h-auto mq1025:flex-wrap">
                  <div className="h-20 w-[296px] rounded-xl bg-gray-600 border-black border-solid border-[5px] box-border flex flex-row items-center justify-start py-3.5 pl-5 pr-[11px] gap-[197px]">
                    <Image
                      className="w-10 relative max-h-full object-cover"
                      width={40}
                      height={38}
                      alt=""
                      src="/trone-1@2x.png"
                    />
                    <div className="relative leading-[16px] mq450:text-4xl mq450:leading-[13px]">
                      0
                    </div>
                  </div>
                  <div className="h-20 w-[296px] rounded-xl bg-gray-600 border-black border-solid border-[5px] box-border flex flex-row items-center justify-start py-3.5 pl-5 pr-[7px] gap-[197px]">
                    <Image
                      className="w-11 relative rounded-436xl max-h-full object-contain"
                      loading="lazy"
                      width={44}
                      height={44}
                      alt=""
                      src="/moned-1@2x.png"
                    />
                    <div className="relative leading-[16px] mq450:text-4xl mq450:leading-[13px]">
                      0
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer border-darkslategray border-solid border-[5px] p-1 bg-miscellaneous-floating-tab-pill-fill self-stretch h-[66px] rounded-25xl box-border flex flex-row items-center justify-center z-[5]">
              <div className="h-[76px] flex flex-row items-center justify-center py-2.5 px-4 box-border">
                <b className="relative text-6xl leading-[16px] font-montserrat text-black1 text-left mq450:text-xl mq450:leading-[13px]">
                  CONNECT WALLET
                </b>
              </div>
            </button>
            <b className="w-[704px] relative text-2xl leading-[16px] inline-block text-darkgoldenrod z-[6] mq450:text-mid mq450:leading-[13px]">
              + GET REFERRAL LINK
            </b>
            <div className="!m-[0] absolute top-[34px] left-[calc(50%_-_43px)] rounded-25xl bg-limegreen flex flex-row items-center justify-center p-1 z-[7] text-left text-lgi">
              <div className="h-3 w-3 rounded-17xl bg-miscellaneous-floating-tab-pill-fill" />
              <div className="flex flex-row items-center justify-center py-2.5 pl-4 pr-[11px]">
                <div className="relative leading-[16px] font-medium">Live</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresaleContent;
