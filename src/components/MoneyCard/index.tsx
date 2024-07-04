import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type MoneyCardProps = {
  className?: string;
  category: string;
  iconSrc: string;
  money: string;
};

const MoneyCard = (props: MoneyCardProps) => {
  return (
    <div
      className={twMerge(
        "text-slate-100 min-w-72 min-h-36 p-4 rounded flex flex-col justify-between",
        props.className
      )}
    >
      <div className=" flex justify-between">
        <h2 className="text-2xl">{props.category}</h2>
        <Image src={props.iconSrc} alt="" height={40} width={40} />
      </div>
      <div className=" flex justify-between">
        <p className="text-lg font-bold">VND</p>
        <p className="text-xl">{props.money}</p>
      </div>
    </div>
  );
};

export default MoneyCard;
