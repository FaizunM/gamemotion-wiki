import { ICharacter } from "@/interfaces/global";

export const CharacterBuild = ({ data }: { data: ICharacter }) => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Recomended Build</h1>
          <div className="mt-3 w-1/2 flex flex-col bg-[rgba(255,255,255,0.1)]">
            <div className="flex items-center border-b border-b-[rgba(255,255,255,0.1)]">
              <div className="w-[200px] min-h-full h-12 flex items-center px-4 font-semibold text-sm">
                Best W-Engine
              </div>
              <div className="grow flex flex-col">
                <div className="grow flex items-center bg-[rgba(255,255,255,0.05)]">
                  <div className="w-16 h-16 flex items-center justify-center p-2">
                    <picture>
                      <img
                        src="https://www.prydwen.gg/static/7fd4c7065d83314fc045e6e1ef89212c/d1e3d/zzz_Heartstring_Nocturne.webp"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="px-2 font-semibold text-sm">
                    {data.recomendation.weapons[0].name}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center border-b border-b-[rgba(255,255,255,0.1)]">
              <div className="w-[200px] min-h-full h-12 flex items-center px-4 font-semibold text-sm">
                Best Drive Disc
              </div>
              <div className="grow flex flex-col bg-[rgba(255,255,255,0.05)]">
                {data.recomendation.equipment_set[0].sets.map((item, index) => {
                  return (
                    <div className="flex items-center" key={index}>
                      <div className="w-16 h-16 flex items-center justify-center p-3">
                        <picture>
                          <img
                            src="https://www.prydwen.gg/static/e746b8872689f23c909a40aa192ae850/d8057/set_woodpecker.webp"
                            alt=""
                          />
                        </picture>
                      </div>
                      <div className="px-2 font-semibold text-sm">
                        {item.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center border-b border-b-[rgba(255,255,255,0.1)]">
              <div className="w-[200px] min-h-full h-12 flex items-center px-4 font-semibold text-sm">
                Disc Main Stats
              </div>
              <div className="grow flex items-center bg-[rgba(255,255,255,0.05)]">
                {data.build.target_set.map((item, index) => {
                  return (
                    <div
                      className="w-full h-12 flex items-center justify-center font-semibold text-sm"
                      key={index}
                    >
                      {item.set_num}: {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center border-b border-b-[rgba(255,255,255,0.1)]">
              <div className="w-[200px] min-h-full h-12 flex items-center px-4 font-semibold text-sm">
                Disc Substats
              </div>
              <div className="grow flex items-center bg-[rgba(255,255,255,0.05)]">
                {data.build.target_substat.map((item, index) => {
                  return (
                    <div
                      className="w-full h-12 flex items-center justify-center font-semibold text-sm"
                      key={index}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="my-8">{data.build.description}</div>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Weapons</h1>
          <div className="flex flex-col gap-2 mt-3">
            {data.recomendation.weapons.map((item, index) => {
              return (
                <div
                  className="w-full flex bg-[rgba(255,255,255,0.1)]"
                  key={index}
                >
                  <div className="w-12 min-w-12 h-auto bg-orange-500 flex items-center justify-center font-semibold text-sm">
                    100%
                  </div>
                  <div className="w-[200px] min-w-[200px] h-[200px] flex items-center justify-center ">
                    <picture>
                      <img
                        src="https://www.prydwen.gg/static/7fd4c7065d83314fc045e6e1ef89212c/d1e3d/zzz_Heartstring_Nocturne.webp"
                        alt=""
                      />
                    </picture>
                  </div>
                  <div className="grow flex flex-col bg-[rgba(255,255,255,0.025)]">
                    <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                      {item.name}
                    </div>
                    <div className="p-4">
                      {item.effects.map((item, index) => {
                        return (
                          <div className="flex flex-col" key={index}>
                            <div className="w-full flex items-center py-1 h-auto">
                              {item.name}
                            </div>
                            <div className="w-full flex items-center py-1 h-auto">
                              {item.effect}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="my-8">
            <div className="font-semibold text-xl mb-3">
              Heartstring Nocturne is the Best for Evelyn
            </div>
            <p>
              Heartstring Nocturne is Evelyn's signature W-Engine. We will
              update its effects once it has been announced. We recommend using
              CRIT Rate W-Engines since you need at least 80% for Evelyn's
              Additional Ability.
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Drive Disc</h1>
          <div className="flex flex-col gap-2 mt-3">
            {data.recomendation.equipment_set.map((set_equip, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  {set_equip.sets.map((item, index) => {
                    return (
                      <div
                        className="w-full flex bg-[rgba(255,255,255,0.1)]"
                        key={index}
                      >
                        <div className="w-12 min-w-12 h-auto bg-orange-500 flex items-center justify-center font-semibold text-sm">
                          100%
                        </div>
                        <div className="w-[200px] min-w-[200px] h-[200px] flex items-center justify-center ">
                          <picture>
                            <img
                              src="https://www.prydwen.gg/static/ca76b911b56aab1a68209e6aa6b52a74/d8057/set_puffer.webp"
                              alt=""
                            />
                          </picture>
                        </div>
                        <div className="grow flex flex-col bg-[rgba(255,255,255,0.025)]">
                          <div className="w-full h-12 flex items-center px-4 bg-[rgba(255,255,255,0.05)] font-semibold text-sm">
                            {item.name} - {item.unit} Unit
                          </div>
                          <div className="w-full flex items-center p-4 h-auto">
                            CRIT DMG increases by 50%. When the equipper enters
                            combat, or activates a Chain Attack or Ultimate,
                            they gain 1 stack of Heartstring. Each stack of
                            Heartstring allows the wearer's Chain Attack and
                            Ultimate DMG to ignore 12.5% of the target's Fire
                            RES. This effect can stack up to 2 times and lasts
                            30s. Repeated triggers reset the duration.
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="my-8">
            <div className="font-semibold text-xl mb-3">
              Woodpecker Electro is the Best for Evelyn
            </div>
            <p>
              Woodpecker Electro is Evelyn's best set for general use since it
              provides CRIT Rate and increases her ATK when she does a Basic
              Attack, Dodge Counter, or EX Special Attack.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
