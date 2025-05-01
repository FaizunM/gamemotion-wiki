"use client";

import { ICharacter } from "@/interfaces/global";
import { useEffect, useState } from "react";

export const CharacterBanner = ({ data }: { data: ICharacter }) => {
  const [Floating, setFloating] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300) {
        setFloating(true);
      } else {
        setFloating(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          Floating
            ? "fixed top-16 left-12 -translate-y-[272px] w-[calc(100vw-64px)]"
            : "w-full "
        }`}
      >
        <div className="relative w-full h-[400px] overflow-hidden">
          <div
            className={`absolute top-0 left-0 inset-0 ${
              Floating && "filter blur-3xl"
            }`}
            style={{
              background: `url(https://onwaleed.sirv.com/banners/banner.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-linear-to-b from-transparent to-[#141415] absolute top-0 left-0 inset-0"></div>
          <div className="relative z-10 w-full h-full">
            <div className="absolute bottom-0 left-0 flex items-center p-8 gap-2 w-full">
              <div className="w-[72px] h-[72px] flex items-center justify-center rounded overflow-hidden">
                <picture>
                  <img
                    src="https://onwaleed.sirv.com/banners/bdb6d4d2366bbb38aea8746c338345ef_1602436254243019584.png?cx=256&cy=150&cw=512&ch=512"
                    alt=""
                  />
                </picture>
              </div>
              <div className="flex flex-col gap-2 grow">
                <div className="flex gap-3">
                  <div className="font-bold text-4xl">
                    {data.name} - {data.profile.faction}
                  </div>
                  <div className="w-[1px] min-h-[3px] bg-[rgba(255,255,255,0.1)]"></div>
                  <div className="flex gap-1">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className="fa-light fa-info-circle"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className="fa-light fa-share"></i>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                      <i className="fa-light fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="px-1 bg-[rgba(255,255,255,0.1)] rounded border border-[rgba(255,255,255,0.1)] font-semibold text-sm">
                    {data.profile.faction}
                  </div>
                  <div className="px-1 bg-[rgba(255,255,255,0.1)] rounded border border-[rgba(255,255,255,0.1)] font-semibold text-sm">
                    18 November 2024
                  </div>
                </div>
              </div>
              <div className=" flex gap-8 items-center">
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-gray-400 text-xs text-right">
                    RARITY
                  </div>
                  <div className="font-bold text-xl text-right">
                    {data.profile.rarity}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-gray-400 text-xs text-right">
                    RANKING
                  </div>
                  <div className="font-bold text-xl text-right">S TIER</div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="font-medium text-gray-400 text-xs text-right">
                    HERO POWER
                  </div>
                  <div className="font-bold text-xl text-right">1480 POINT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {Floating && <div className="w-full h-[400px]"></div>}
    </>
  );
};
