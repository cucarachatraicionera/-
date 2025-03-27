import type { NextPage } from "next";
import Image from "next/image";
import Why from "../components/why";
import Tokenomics from "../components/tokenomics";
import FrameComponent1 from "../components/frame-component1";
import PresaleContent from "../components/presale-content";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";

const Desktop: NextPage = () => {
  return (
    <div className="w-full h-[7480px] relative [background:linear-gradient(180deg,_#a2025c_18.1%,_#1b8bad_49.1%,_#363637_99.6%)] overflow-hidden opacity-[0.99] leading-[normal] tracking-[normal] text-left text-base text-miscellaneous-floating-tab-pill-fill font-montserrat mq1125:h-auto mq1125:min-h-[7480]">
      <Why />
      <Tokenomics />
      <FrameComponent1 />
      <Image
        className="absolute top-[calc(50%_-_387px)] left-[829px] rounded-21xl w-[536px] h-[648px] object-cover"
        loading="lazy"
        width={536}
        height={648}
        alt=""
        src="/swap-module1@2x.png"
      />
      <section className="absolute top-[1px] left-[20px] w-[1373px] flex flex-row items-start justify-end pt-0 pb-[189px] pl-0 pr-3 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-20 max-w-full">
          <PresaleContent />
          <FrameComponent />
        </div>
      </section>
      <div className="absolute top-[268px] left-[688px] text-xl leading-[16px] inline-block w-[670px] mq450:text-base mq450:leading-[13px]">
        <span className="font-medium">Actual Price:</span>
        <b> $0,0</b>
      </div>
      <div className="absolute top-[641px] left-[701px] leading-[16px] font-medium inline-block w-[670px]">
        Pay with ETH
      </div>
      <div className="absolute top-[641px] left-[713px] leading-[16px] font-medium text-right">
        Receive $PINKYP
      </div>
      <Footer />
    </div>
  );
};

export default Desktop;
