import type { NextPage } from "next";

export type BoxType = {
  className?: string;
  q42024?: string;
  projectIdeation?: string;
  feasibilityEvaluation?: string;
  eRC20TokenDevelopment?: string;
};

const Box: NextPage<BoxType> = ({
  className = "",
  q42024,
  projectIdeation,
  feasibilityEvaluation,
  eRC20TokenDevelopment,
}) => {
  return (
    <div
      className={`flex-1 rounded-21xl bg-gray-100 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[39px] gap-5 min-w-[236px] max-w-[241px] text-left text-13xl text-blueviolet font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-center">
        <b className="self-stretch relative leading-[32px] mq450:text-lgi mq450:leading-[19px] mq1025:text-7xl mq1025:leading-[26px]">
          {q42024}
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-xl text-miscellaneous-floating-tab-pill-fill">
        <div className="flex-1 relative tracking-[0.02em] leading-[30px] font-light mq450:text-base mq450:leading-[24px]">
          <p className="m-0">{projectIdeation}</p>
          <p className="m-0">{feasibilityEvaluation}</p>
          <p className="m-0">{eRC20TokenDevelopment}</p>
        </div>
      </div>
    </div>
  );
};

export default Box;
