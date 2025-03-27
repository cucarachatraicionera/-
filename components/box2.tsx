import type { NextPage } from "next";

export type Box2Type = {
  className?: string;
  communityDriven?: string;
  empoweringUsersWithCollective?: string;
};

const Box2: NextPage<Box2Type> = ({
  className = "",
  communityDriven,
  empoweringUsersWithCollective,
}) => {
  return (
    <div
      className={`flex-1 rounded-21xl bg-gray-700 border-gray-800 border-solid border-[1px] box-border overflow-hidden flex flex-col items-start justify-start py-10 px-[39px] gap-5 min-w-[229px] max-w-[305px] text-left text-16xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-center">
        <h1 className="m-0 self-stretch relative text-inherit leading-[32px] font-semibold font-[inherit] mq450:text-2xl mq450:leading-[19px] mq1025:text-9xl mq1025:leading-[26px]">
          {communityDriven}
        </h1>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start text-10xl font-overpass">
        <h2 className="m-0 flex-1 relative text-inherit tracking-[0.02em] leading-[40px] font-light font-[inherit] mq450:text-4xl mq450:leading-[32px]">
          {empoweringUsersWithCollective}
        </h2>
      </div>
    </div>
  );
};

export default Box2;
