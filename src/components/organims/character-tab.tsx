"use client";

import { Tab } from "@/components/molecules/Tab";
import { useState } from "react";
import { CharacterProfile } from "../molecules/tabs/profile";
import { CharacterSkills } from "../molecules/tabs/skills";
import { CharacterBuild } from "../molecules/tabs/build";
import { CharacterTeams } from "../molecules/tabs/teams";
import { CharacterReview } from "../molecules/tabs/reviews";
import { ICharacter } from "@/interfaces/global";

export const CharacterTab = ({ data }: { data: ICharacter }) => {
  const [TabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <Tab
        onSelectTab={(index) => {
          setTabIndex(index);
        }}
      />
      <div className="px-8 mt-8 pb-32">
        {TabIndex == 0 && <CharacterProfile data={data} />}
        {TabIndex == 1 && <CharacterSkills data={data} />}
        {TabIndex == 2 && <CharacterBuild data={data} />}
        {TabIndex == 3 && <CharacterTeams data={data} />}
        {TabIndex == 4 && <CharacterReview data={data} />}
      </div>
    </>
  );
};
