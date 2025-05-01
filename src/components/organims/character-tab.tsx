"use client";

import { Tab } from "@/components/molecules/Tab";
import { useState } from "react";
import { CharacterProfile } from "../molecules/tabs/profile";
import { CharacterSkills } from "../molecules/tabs/skills";
import { CharacterBuild } from "../molecules/tabs/build";
import { CharacterTeams } from "../molecules/tabs/teams";
import { CharacterReview } from "../molecules/tabs/reviews";

export const CharacterTab = () => {
  const [TabIndex, setTabIndex] = useState<number>(0);
  return (
    <>
      <Tab
        onSelectTab={(index) => {
          setTabIndex(index);
        }}
      />
      <div className="px-8 mt-8 pb-32">
        {TabIndex == 0 && <CharacterProfile />}
        {TabIndex == 1 && <CharacterSkills />}
        {TabIndex == 2 && <CharacterBuild />}
        {TabIndex == 3 && <CharacterTeams />}
        {TabIndex == 4 && <CharacterReview />}
      </div>
    </>
  );
};
