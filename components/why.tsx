import type { NextPage } from "next";
import Box from "./box";

export type WhyType = {
  className?: string;
};

const Why: NextPage<WhyType> = ({ className = "" }) => {
  return (
    <section
      className={`absolute top-[6040px] left-[calc(50%_-_693px)] rounded-21xl bg-gray-900 border-gray-800 border-solid border-[1px] box-border w-[1386px] overflow-hidden flex flex-col items-start justify-start pt-[118px] pb-9 pl-[52px] pr-[49px] gap-[52px] max-w-full text-center text-50xl text-blueviolet font-montserrat ${className}`}
    >
      <div className="w-[1252.5px] flex flex-row items-start justify-center max-w-full">
        <div className="flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 w-[1084px] h-20 relative text-inherit leading-[80px] font-bold font-[inherit] inline-block mq450:text-22xl mq450:leading-[48px] mq1025:text-36xl mq1025:leading-[64px]">
            Roadmap highlights
          </h1>
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-center flex-wrap content-center gap-5 z-[1] text-left text-13xl">
        <Box
          q42024="-Q4 2024"
          projectIdeation="Project ideation"
          feasibilityEvaluation="Feasibility evaluation "
          eRC20TokenDevelopment="ERC-20 token development"
        />
        <div className="h-[484px] flex-1 rounded-21xl bg-gray-100 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[39px] gap-5 min-w-[236px] max-w-[241px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <b className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[19px] mq1025:text-7xl mq1025:leading-[26px]">
              -Q1 2025
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-xl text-miscellaneous-floating-tab-pill-fill">
            <div className="flex-1 relative tracking-[0.02em] leading-[30px] font-light mq450:text-base mq450:leading-[24px]">
              <p className="m-0">Internal docs</p>
              <p className="m-0">Web ideation</p>
              <p className="m-0">Figma design</p>
              <p className="m-0">Smart contract</p>
              <p className="m-0">Web launch</p>
              <p className="m-0">Private sale</p>
              <p className="m-0">Public sale</p>
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-gray-100 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[39px] gap-5 min-w-[236px] max-w-[241px] font-overpass">
          <div className="self-stretch flex flex-col items-start justify-center">
            <b className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[19px] mq1025:text-7xl mq1025:leading-[26px]">
              -Q2 2025
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-xl text-miscellaneous-floating-tab-pill-fill font-montserrat">
            <div className="flex-1 relative tracking-[0.02em] leading-[30px] font-light mq450:text-base mq450:leading-[24px]">
              <p className="m-0">Marketing strategy</p>
              <p className="m-0 whitespace-pre-wrap">{`Latam expansion  `}</p>
              <p className="m-0">User experience improvement</p>
              <p className="m-0">Alliance with “The Lotter” lottery</p>
            </div>
          </div>
        </div>
        <Box
          q42024="-Q3 2025"
          projectIdeation="Staking Integration"
          feasibilityEvaluation="Integration of burning functions (Tokens)"
          eRC20TokenDevelopment="New alliances with different lotteries"
        />
        <div className="flex-1 rounded-21xl bg-gray-100 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[39px] gap-5 min-w-[236px] max-w-[241px]">
          <div className="self-stretch flex flex-col items-start justify-center">
            <b className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[19px] mq1025:text-7xl mq1025:leading-[26px]">
              -Q4 2025
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-xl text-miscellaneous-floating-tab-pill-fill">
            <div className="flex-1 relative tracking-[0.02em] leading-[30px] font-light mq450:text-base mq450:leading-[24px]">
              <p className="m-0">Improvements to the website</p>
              <p className="m-0">Marketing strategy</p>
              <p className="m-0">{`Advertising guidelines `}</p>
              <p className="m-0">
                Ideation of new developments for the project
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
