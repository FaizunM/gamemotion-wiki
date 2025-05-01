import { ICharacter } from "@/interfaces/global";

export const CharacterTeams = ({ data }: { data: ICharacter }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col mt-8">
        <h1 className="font-bold text-2xl">Teams</h1>
        <div className="my-3">
          <p>
            Astra Yao's best with everyone (pretty much). As the easiest,
            quickest, and most universal Support unit in the game, she is able
            to slot as the best Support option to almost any team in the current
            Zenless Zone Zero meta, including all the best Agents, and being at
            least very very strong anywhere. Have fun using her as the best
            Support to just about anybody! (Or second best to Nicole, in very
            specific cases). Below are some examples of the top meta teams for
            you to take inspiration from:
          </p>
        </div>
        <div className="w-full flex flex-col gap-8 mt-3">
          {Array.from({ length: 3 }).map((item, index) => {
            return (
              <div className="w-full bg-[rgba(255,255,255,0.1)]" key={index}>
                <div className="w-full h-10 flex items-center justify-center bg-orange-500 font-semibold text-sm">
                  EVELYN BEST TEAM
                </div>
                <div className="grid grid-cols-3">
                  {Array.from({ length: 3 }).map((item, index) => {
                    return (
                      <div
                        className="col-span-1 h-[200px] flex items-center justify-center"
                        key={index}
                      >
                        <div className="flex flex-col gap-3 items-center">
                          <div className="w-24 h-w-24 flex items-center justify-center">
                            <picture>
                              <img
                                src="https://www.prydwen.gg/static/f1ae128f165d2fef3be95794c803a01e/60b4d/10_sm.webp"
                                alt=""
                              />
                            </picture>
                          </div>
                          <div className="font-semibold text-sm">Miyabi</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-3">
                  <div className="w-full h-10 bg-[rgba(255,255,255,0.05)] font-semibold text-sm flex items-center justify-center">
                    DPS
                  </div>
                  <div className="w-full h-10 bg-[rgba(255,255,255,0.05)] font-semibold text-sm flex items-center justify-center">
                    Stun
                  </div>
                  <div className="w-full h-10 bg-[rgba(255,255,255,0.05)] font-semibold text-sm flex items-center justify-center">
                    Support
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="my-3">
          <p>
            For this free-to-play team, you can use the Cunning Hares trio but
            replace Billy with Evelyn. Use Anby and Nicole to stun and debuff
            the enemy, respectively.
          </p>
        </div>
        <div className="my-3">
          <p>
            As a CRIT DPS, Evelyn is best used in a team with a Stun and Support
            unit. Astra Yao will be her best teammate since her Ultimate can
            allow Evelyn to use her Chain Attack via Quick Assist. Lighter will
            be Evelyn's best Stun unit since he can increase Evelyn's Fire DMG.
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-8">
        <h1 className="font-bold text-2xl">Game Play</h1>
        <div className="my-3">
          <p>
            When Evelyn's certain attacks hit enemies, she will entangle them
            with her Lunalux Garrote, setting them up for Garrote Attacks. These
            attacks will have Evelyn pull on the tether and immediately close in
            on them! Entangling enemies with the Lunalux Garrote will have
            Evelyn enter the Binding Seal state, which will increase her CRIT
            Rate throughout its duration!
          </p>
          <p>
            Whenever Evelyn deals DMG to enemies, she will accumulate Burning
            Embers. Evelyn will accumulate different amounts of Burning Embers
            for each attack and she will use these points to enhance certain
            attacks.
          </p>
        </div>
      </div>
    </div>
  );
};
