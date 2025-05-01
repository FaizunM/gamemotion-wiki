export const CharacterSkills = () => {
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
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-2 flex flex-col gap-2">
            {Array.from({ length: 2 }).map((item, index) => {
              return (
                <div
                  className="w-full flex flex-col bg-[rgba(255,255,255,0.1)]"
                  key={index}
                >
                  <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                    Basic Attack: Razor Wire
                  </div>
                  <div className="w-full flex items-center p-4">
                    Press Basic Attack to activate: Launch up to five attacks
                    ahead, dealing Physical DMG and Fire DMG. When the 5th hit
                    lands against an enemy, Evelyn will use her Lunalux Garrote
                    to bind the primary target and enter Binding Seal.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col mt-8 gap-2">
          <h1 className="font-bold text-2xl">Mindscapes</h1>
          <div className="mt-2 flex flex-col gap-2">
            {Array.from({ length: 6 }).map((item, index) => {
              return (
                <div
                  className="w-full flex flex-col bg-[rgba(255,255,255,0.1)]"
                  key={index}
                >
                  <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                    M{index + 1}
                  </div>
                  <div className="w-full flex items-center p-4">
                    Upon entering the battlefield, Evelyn immediately gains
                    1,500 Decibels. Enemies affected by Binding Seal will be
                    Bound. When Evelyn attacks Bound enemies, she ignores 12% of
                    their DEF. When Evelyn uses Special Attack: Binding Sunder -
                    First Form or EX Special Attack: Binding Sunder - Final
                    Form, the Bound effect spreads to all enemies hit by the
                    skill. This spread Bound effect lasts for 10s.
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
