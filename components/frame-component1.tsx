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
                    {/* Imagen comentada porque genera error en Vercel */}
                    {/*
                    <Image
                      src="/background-2@2x.png"
                      className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] w-[400px] h-[400px]"
                      width={400}
                      height={400}
                      alt="Decorative background"
                    />
                    */}
                    {/* Imagen temporal para evitar error de compilación */}
                    <Image
                      src="https://via.placeholder.com/400"
                      className="absolute top-[calc(50%_-_200px)] left-[calc(50%_-_200px)] w-[400px] h-[400px]"
                      width={400}
                      height={400}
                      alt="Temporary placeholder"
                    />
                  </div>
                </button>
              </div>
            </div>
            {/* ...el resto del código permanece igual... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
