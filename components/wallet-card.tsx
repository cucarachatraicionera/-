"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type WalletCardType = {
  className?: string;
  background: string;
  raydium: string;
  raydium1?: string;

  /** Style props */
  backgroundIconBottom?: CSSProperties["bottom"];
  backgroundIconLeft?: CSSProperties["left"];
  backgroundIconRight?: CSSProperties["right"];
};

const WalletCard: NextPage<WalletCardType> = ({
  className = "",
  background,
  backgroundIconBottom,
  backgroundIconLeft,
  backgroundIconRight,
  raydium,
  raydium1,
}) => {
  const backgroundIconStyle: CSSProperties = useMemo(() => {
    return {
      bottom: backgroundIconBottom,
      left: backgroundIconLeft,
      right: backgroundIconRight,
    };
  }, [backgroundIconBottom, backgroundIconLeft, backgroundIconRight]);

  return (
    <div
      className={`h-[210px] w-[210px] relative rounded-21xl border-gray-800 border-solid border-[1px] box-border overflow-hidden shrink-0 text-center text-10xl text-miscellaneous-floating-tab-pill-fill font-montserrat ${className}`}
    >
      <Image
        className="absolute bottom-[-330px] left-[-129.5px] w-[2000px] h-[2000px] object-cover"
        width={2000}
        height={2000}
        alt=""
        src={background}
        style={backgroundIconStyle}
      />
      <div className="absolute top-[calc(50%_-_65px)] left-[calc(50%_-_69.5px)] flex flex-col items-center justify-start gap-2.5">
        <Image
          className="w-20 relative h-20 overflow-hidden shrink-0"
          width={80}
          height={80}
          alt=""
          src={raydium}
        />
        <h2 className="m-0 w-[140px] relative text-inherit leading-[40px] font-medium font-[inherit] inline-block mq450:text-4xl mq450:leading-[32px]">
          {raydium1}
        </h2>
      </div>
    </div>
  );
};

export default WalletCard;
