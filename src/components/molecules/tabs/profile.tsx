import { ICharacter } from "@/interfaces/global";

export const CharacterProfile = ({ data }: { data: ICharacter }) => {
  return (
    <>
      <div className="w-full grid grid-cols-12 gap-8">
        <div className="col-span-5">
          <div className="w-full h-fit overflow-hidden rounded-xl">
            <img
              src="https://onwaleed.sirv.com/banners/bdb6d4d2366bbb38aea8746c338345ef_1602436254243019584.png?ch=1500"
              alt=""
            />
          </div>
          <div className="mt-8 flex items-center gap-4">
            {Array.from({ length: 5 }).map((item, index) => {
              return (
                <div
                  className="w-[100px] overflow-hidden rounded-xl h-fit"
                  key={index}
                >
                  <picture>
                    <img
                      src="https://onwaleed.sirv.com/banners/bdb6d4d2366bbb38aea8746c338345ef_1602436254243019584.png?cw=512&ch=512"
                      alt=""
                    />
                  </picture>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-7">
          <h1 className="font-bold text-4xl">{data.name}</h1>
          <div className="my-3">{data.profile.description}</div>
          <div className="flex flex-col gap-3 mt-8">
            <div className="font-bold text-2xl">Profile</div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Rarity
                </div>
                <div className="w-full py-4 text-center text-xl">
                  {data.profile.rarity} Rank
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Attribute
                </div>
                <div className="w-full py-4 text-center text-xl">
                  {data.profile.attribute}
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Speciality
                </div>
                <div className="w-full py-4 text-center text-xl">
                  {data.profile.speciality}
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Faction
                </div>
                <div className="w-full py-4 text-center text-xl">
                  {data.profile.faction}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <div className="font-bold text-2xl">Stats (Level 60)</div>
            <div className="flex flex-col">
              {data.profile.stats[0].attributes.map((item, index) => {
                return (
                  <div
                    className={`w-full flex items-center place-content-between ${
                      index % 2
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "bg-[rgba(255,255,255,0.16)]"
                    } h-10 px-4`}
                    key={index}
                  >
                    <div className="text-sm font-semibold">{item.key}</div>
                    <div className="text-sm font-semibold">{item.value}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
