"use client";

import { ICharacter } from "@/interfaces/global";
import { useState } from "react";

export const CharacterSkills = ({ data }: { data: ICharacter }) => {
  const [SkillIndex, setSkillIndex] = useState<number>(0);

  const getSkillKey = (index: number) => {
    if (index == 0) return "core_skill";
    else if (index == 1) return "basic_attack";
    else if (index == 2) return "dodge";
    else if (index == 3) return "assist";
    else if (index == 4) return "special_attack";
    else if (index == 5) return "chain_attack";
    return "core_skill";
  };

  const skillKey = getSkillKey(SkillIndex);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Skills</h1>
          <div className="flex gap-2 items-center flex-nowrap mt-3">
            {[
              "Core",
              "Basic Attack",
              "Dodge",
              "Assist",
              "Special Attack",
              "Chain Attack",
            ].map((item, index) => {
              return (
                <div
                  className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.15)] transition-all duration-200 ease-in-out font-semibold text-sm w-full h-12 flex items-center justify-center"
                  key={index}
                  onClick={() => setSkillIndex(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {data.skills[skillKey].map((item, index) => {
              return (
                <div
                  className="w-full flex flex-col bg-[rgba(255,255,255,0.1)]"
                  key={index}
                >
                  <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                    {item.name}
                  </div>
                  <div className="w-full flex items-center p-4">
                    {item.effect}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-2">
          <h1 className="font-bold text-2xl">Mindscapes</h1>
          <div className="mt-2 flex flex-col gap-2">
            {data.character_enchantment.map((item, index) => {
              return (
                <div
                  className="w-full flex flex-col bg-[rgba(255,255,255,0.1)]"
                  key={index}
                >
                  <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                    M{index + 1} - {item.name}
                  </div>
                  <div className="w-full flex items-center p-4">
                    {item.effect}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
