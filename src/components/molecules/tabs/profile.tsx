export const CharacterProfile = () => {
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
          <h1 className="font-bold text-4xl">Evelyn</h1>
          <div className="my-3">
            Evelyn is an S Rank rank character with the Fire attribute who
            belongs to the Attack Attack Specialty and who is part of the Stars
            of Lyra faction. Ms. Yao is currently enjoying her private time and
            will not be taking any interviews. To learn more about Evelyn check
            the sections below. Use the tabs to quickly switch to the kind of
            information you're looking for.
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <div className="font-bold text-2xl">Profile</div>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Rarity
                </div>
                <div className="w-full py-4 text-center text-xl">S Rank</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Attribute
                </div>
                <div className="w-full py-4 text-center text-xl">Fire</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Speciality
                </div>
                <div className="w-full py-4 text-center text-xl">Attack</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.1)]">
                <div className="bg-[rgba(255,255,255,0.05)] w-full py-3 text-center uppercase text-gray-400 text-xs">
                  Faction
                </div>
                <div className="w-full py-4 text-center text-xl">
                  Stars of Lyra
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-8">
            <div className="font-bold text-2xl">Stats (Level 60)</div>
            <div className="flex flex-col">
              {Array.from({ length: 10 }).map((item, index) => {
                return (
                  <div
                    className={`w-full flex items-center place-content-between ${
                      index % 2
                        ? "bg-[rgba(255,255,255,0.1)]"
                        : "bg-[rgba(255,255,255,0.16)]"
                    } h-10 px-4`}
                    key={index}
                  >
                    <div className="text-sm font-semibold">HP</div>
                    <div className="text-sm font-semibold">10204</div>
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
