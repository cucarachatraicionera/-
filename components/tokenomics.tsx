import type { NextPage } from "next";
import Image from "next/image";

export type TokenomicsType = {
  className?: string;
};

const Tokenomics: NextPage<TokenomicsType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[5208px] left-[7px] rounded-21xl bg-gray-300 border-gray-200 border-solid border-[1px] box-border w-[1386px] h-[800px] overflow-hidden flex flex-row items-start justify-end py-[98px] px-[141px] max-w-full text-left text-6xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch w-[699px] flex flex-col items-start justify-start gap-10 max-w-full z-[0]">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 w-[510px] h-[41px] relative text-inherit leading-[24px] font-bold font-[inherit] inline-block opacity-[0.6] mq450:text-xl mq450:leading-[19px]">
            tokenomics
          </h3>
          <h1 className="m-0 self-stretch relative text-61xl leading-[80px] font-bold font-[inherit] mq450:text-5xl mq450:leading-[32px] mq1025:text-21xl mq1025:leading-[48px]">
            <p className="m-0">Allocation</p>
            <p className="m-0">breakdown</p>
          </h1>
        </div>
        <div className="self-stretch flex-1 flex flex-col items-start justify-center text-13xl">
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[130px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              10%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[95px] mq450:text-lgi mq450:leading-[32px]">
              Marketing
            </h3>
          </div>
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[130px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              10%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[105px] mq450:text-lgi mq450:leading-[32px]">
              Developers
            </h3>
          </div>
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[130px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              10%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[109px] mq450:text-lgi mq450:leading-[32px]">
              Private sells
            </h3>
          </div>
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[130px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              40%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[145px] mq450:text-lgi mq450:leading-[32px]">
              Will be blocked
            </h3>
          </div>
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[133px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              5%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[244px] mq450:text-lgi mq450:leading-[32px]">
              Administrative expensses
            </h3>
          </div>
          <div className="self-stretch border-deepskyblue border-solid border-b-[1px] flex flex-row items-center justify-start flex-wrap content-center pt-2.5 px-0 pb-2 gap-5">
            <b className="w-[130px] relative leading-[40px] inline-block shrink-0 mq450:text-lgi mq450:leading-[24px] mq1025:text-7xl mq1025:leading-[32px]">
              25%
            </b>
            <h3 className="m-0 flex-1 relative text-5xl leading-[40px] font-normal font-[inherit] inline-block min-w-[100px] mq450:text-lgi mq450:leading-[32px]">
              Public sale
            </h3>
          </div>
        </div>
      </div>
      <Image
        className="h-[1000px] w-[500px] relative object-contain hidden max-w-full z-[1]"
        width={500}
        height={1000}
        alt=""
        src="/figpie@2x.png"
      />
      <div className="h-[1638.3px] w-[1700px] absolute !m-[0] bottom-[-466.3px] left-[-307px]">
        <Image
          className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[2000px] object-cover"
          width={2000}
          height={1638}
          alt=""
          src="/background@2x.png"
        />
        <Image
          className="absolute top-[372px] left-[307px] w-[400px] h-[800px] object-contain z-[1]"
          loading="lazy"
          width={400}
          height={800}
          alt=""
          src="/figpie@2x.png"
        />
      </div>
    </section>
  );
};

export default Tokenomics;
