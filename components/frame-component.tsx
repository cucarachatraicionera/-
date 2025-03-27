import type { NextPage } from "next";
import Image from "next/image";
import Box1 from "./box1";
import Box2 from "./box2";
import WalletCard from "./wallet-card";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start py-0 pl-0 pr-1.5 box-border max-w-full text-left text-xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[33px] max-w-full">
        <div className="flex flex-row items-center justify-center py-0 pl-0 pr-5 box-border max-w-full z-[3]">
          <div className="h-[800px] rounded-21xl bg-black1 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-center py-20 px-[79px] relative gap-10 mq750:h-auto">
            <Image
              className="w-[1200px] h-[1323.5px] absolute !m-[0] bottom-[-271px] left-[calc(50%_-_393px)] object-cover z-[0]"
              width={1200}
              height={1324}
              alt=""
              src="/background-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start z-[1]">
              <b className="w-[510px] relative leading-[24px] inline-block opacity-[0.6] mq450:text-base mq450:leading-[19px]">
                About Pink Promise
              </b>
              <h1 className="m-0 w-[510px] relative text-49xl leading-[68px] font-medium font-[inherit] inline-block mq450:text-22xl mq450:leading-[41px] mq1025:text-35xl mq1025:leading-[54px]">
                <p className="m-0">Welcome to Pinky Promise,</p>
                <p className="m-0">your token for</p>
                <p className="m-0">a brighter</p>
                <p className="m-0">{`future `}</p>
              </h1>
            </div>
            <div className="flex flex-row items-start justify-center z-[2]">
              <div className="w-[510px] relative tracking-[0.02em] leading-[32px] inline-block shrink-0 mq450:text-base mq450:leading-[26px]">
                Join a community driven by trust and innovation
              </div>
            </div>
            <div className="flex flex-row items-start justify-center gap-5 z-[3] mq750:flex-wrap">
              <button className="cursor-pointer [border:none] p-1 bg-gainsboro rounded-25xl flex flex-row items-center justify-center [row-gap:20px] mq450:flex-wrap">
                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                  <div className="w-[123px] relative text-base leading-[16px] font-montserrat text-dark-grey text-left inline-block shrink-0">
                    0x532f...B142E4
                  </div>
                </div>
                <div className="rounded-17xl bg-dark-grey flex flex-row items-start justify-start p-1.5 gap-2.5">
                  <Image
                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                    width={24}
                    height={24}
                    alt=""
                    src="/arrow-outward1.svg"
                  />
                  <Image
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/content-copy.svg"
                  />
                </div>
              </button>
              <button className="cursor-pointer border-gainsboro border-solid border-[1px] py-0.5 px-[3px] bg-gainsboro rounded-25xl flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center py-2.5 px-4">
                  <div className="relative text-base leading-[16px] font-montserrat text-darkslategray text-left">
                    Get Started
                  </div>
                </div>
                <div className="rounded-17xl bg-darkslategray flex flex-row items-start justify-start p-1.5">
                  <Image
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    width={24}
                    height={24}
                    alt=""
                    src="/arrow-outward-1.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-21xl bg-gray-900 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start pt-[118px] px-[88px] pb-[132px] gap-[97px] max-w-full">
          <div className="w-[1133px] flex flex-col items-start justify-start max-w-full">
            <b className="w-[510px] h-9 relative leading-[24px] inline-block shrink-0 opacity-[0.6] mq450:text-base mq450:leading-[19px]">
              {" "}
              Pinky Promise
            </b>
            <h1 className="m-0 self-stretch relative text-50xl leading-[80px] font-semibold font-[inherit] text-center mq450:text-22xl mq450:leading-[48px] mq1025:text-36xl mq1025:leading-[64px]">
              What is Pinky Promise Token?
            </h1>
          </div>
          <h2 className="m-0 w-[1116px] relative text-10xl tracking-[0.02em] leading-[40px] font-light font-[inherit] text-center inline-block max-w-full mq450:text-4xl mq450:leading-[32px]">
            <p className="m-0">
              Pinky Promise seeks to be an innovative and diversified ecosystem,
              combining digital entertainment and disruptive businesses. Its
              integration into games, lotteries and physical products such as
              pet food will drive demand for the token, ensuring sustainable and
              attractive growth for the community and investors. 🚀
            </p>
          </h2>
        </div>
        <div className="self-stretch rounded-21xl bg-black1 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-end justify-start pt-[118px] px-[39px] pb-[53px] gap-[50px] max-w-full">
          <div className="flex flex-row items-start justify-end py-0 px-[38px] box-border max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <b className="w-[510px] relative leading-[24px] inline-block opacity-[0.6] mq450:text-base mq450:leading-[19px]">
                why Pinky Promise
              </b>
              <h1 className="m-0 w-[1144px] flex-1 relative text-40xl leading-[80px] font-semibold font-[inherit] inline-block mq450:text-16xl mq450:leading-[48px] mq1025:text-28xl mq1025:leading-[64px]">
                Why Choose Pinky Promise Token?
              </h1>
            </div>
          </div>
          <div className="w-[1280px] overflow-hidden flex flex-row items-center justify-center flex-wrap content-center gap-5 z-[1] text-16xl">
            <Box1
              trustworthy="Trustworthy"
              builtOnSecureBlockchainTechnolo="Built on secure blockchain technology"
            />
            <Box1
              boxPadding="38px 39px"
              trustworthy="Strong Community "
              builtOnSecureBlockchainTechnolo="Built on trust and powered by community-driven growth."
            />
            <Box2
              communityDriven="Community-Driven"
              empoweringUsersWithCollective="Empowering users with collective growth"
            />
            <Box2
              communityDriven="Seamless Experience"
              empoweringUsersWithCollective="Simple and intuitive token management"
            />
          </div>
        </div>
        <div className="self-stretch h-[769px] flex flex-row items-start justify-start py-0 pl-4 pr-2 box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-col items-start justify-center py-[120px] px-0 box-border gap-[50px] max-w-full">
            <div className="w-[784px] flex-1 flex flex-row items-center justify-between gap-0">
              <div className="w-[555px]" />
              <div className="flex flex-col items-start justify-start">
                <div className="w-[785px] flex flex-col items-center justify-start gap-5">
                  <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-5">
                    <div className="flex-1 flex flex-row items-center justify-start relative gap-5 min-w-[242px] mq450:flex-wrap">
                      <div className="rounded-17xl flex flex-row items-center justify-center p-4 z-[0]">
                        <Image
                          className="h-8 w-8 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={32}
                          height={32}
                          alt=""
                          src="/altdelsitio.svg"
                        />
                      </div>
                      <div className="w-44 absolute !m-[0] top-[34px] left-[121px] bg-deepskyblue h-2 opacity-[0.7] z-[1]" />
                      <div className="w-60 relative leading-[25px] inline-block z-[2] mq450:text-base mq450:leading-[20px]">
                        <span>{`Visit `}</span>
                        <span className="font-semibold">pinkypromise.sol</span>
                      </div>
                    </div>
                    <div className="w-px relative border-miscellaneous-floating-tab-pill-fill border-solid border-r-[1px] box-border h-[105px] mq750:w-[100px] mq750:h-px mq750:border-miscellaneous-floating-tab-pill-fill mq750:border-solid mq750:mq750:border-t-[1px] mq750:box-border" />
                    <div className="flex-1 flex flex-row items-center justify-start gap-5 min-w-[242px] mq450:flex-wrap">
                      <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                        <Image
                          className="h-8 w-8 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={32}
                          height={32}
                          alt=""
                          src="/cartera-1.svg"
                        />
                      </div>
                      <div className="w-60 relative leading-[25px] inline-block shrink-0 mq450:text-base mq450:leading-[20px]">
                        Open your phantom or backpack wallet
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative border-miscellaneous-floating-tab-pill-fill border-solid border-t-[1px] box-border h-px" />
                  <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-5">
                    <div className="flex-1 flex flex-row items-center justify-start gap-5 min-w-[242px] mq450:flex-wrap">
                      <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                        <Image
                          className="h-8 w-8 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={32}
                          height={32}
                          alt=""
                          src="/actualizar-1.svg"
                        />
                      </div>
                      <div className="w-60 relative leading-[29px] inline-block shrink-0 mq450:text-base mq450:leading-[23px]">
                        <p className="m-0">Click on</p>
                        <p className="m-0">
                          <span className="font-montserrat">"</span>
                          <span className="font-medium font-montserrat">
                            Buy Pinky Promise
                          </span>
                          <span>
                            " on the website, and swap SOL for Pinky Promise.
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="w-px relative border-miscellaneous-floating-tab-pill-fill border-solid border-r-[1px] box-border h-[105px] mq750:w-[100px] mq750:h-px mq750:border-miscellaneous-floating-tab-pill-fill mq750:border-solid mq750:mq750:border-t-[1px] mq750:box-border" />
                    <div className="flex-1 flex flex-row items-center justify-start gap-5 min-w-[242px] mq450:flex-wrap">
                      <div className="rounded-17xl flex flex-row items-center justify-center p-4">
                        <Image
                          className="h-8 w-8 relative overflow-hidden shrink-0"
                          loading="lazy"
                          width={32}
                          height={32}
                          alt=""
                          src="/estrella-1.svg"
                        />
                      </div>
                      <div className="w-60 relative leading-[25px] inline-block shrink-0 mq450:text-base mq450:leading-[20px]">
                        <p className="m-0">
                          You are now part of the Pinky Promise community!
                        </p>
                        <p className="m-0">Welcome to</p>
                        <p className="m-0">P-P!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[692px] flex flex-row items-center justify-start py-0 pl-0 pr-[22px] box-border gap-5 text-center text-10xl">
              <WalletCard
                background="/background-2@2x.png"
                raydium="/raydium.svg"
                raydium1="Raydium"
              />
              <div className="h-[210px] w-[210px] relative rounded-21xl border-gray-800 border-solid border-[1px] box-border overflow-hidden shrink-0">
                <div className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_999.5px)] w-[2000px] h-[2000px]">
                  <Image
                    className="absolute top-[calc(50%_-_1000px)] left-[calc(50%_-_1000px)] w-full h-full object-cover"
                    width={2000}
                    height={2000}
                    alt=""
                    src="/background-2@2x.png"
                  />
                 
                </div>
                <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_69.5px)] flex flex-col items-center justify-start gap-2.5">
                  <div className="w-20 relative h-20 overflow-hidden shrink-0">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={80}
                      height={80}
                      alt=""
                      src="/logo-image.svg"
                    />
                    <Image
                      className="absolute top-[calc(50%_-_25px)] left-[calc(50%_-_25.5px)] w-[50px] h-[50px] object-cover z-[1]"
                      loading="lazy"
                      width={50}
                      height={50}
                      alt=""
                      src="/backpack-logo-1@2x.png"
                    />
                  </div>
                  <h2 className="m-0 w-[140px] relative text-inherit leading-[40px] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[32px]">
                    Pinksale
                  </h2>
                </div>
              </div>
              <WalletCard
                background="/background-2@2x.png"
                backgroundIconBottom="0px"
                backgroundIconLeft="unset"
                backgroundIconRight="-0.5px"
                raydium="/phantom.svg"
                raydium1="Phantom"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="w-[678px] relative rounded-29xl max-h-full object-cover max-w-full ml-[-683px]"
        loading="lazy"
        width={678}
        height={809}
        alt=""
        src="/pinky-promise-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent;
