export const CharacterReview = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Pro And Cons</h1>
          <div className="my-8 grid grid-cols-2 gap-3">
            <div className="col-span-1 h-fit bg-[rgba(255,255,255,0.1)]">
              <div className="w-full h-10 flex items-center justify-center bg-orange-500 font-semibold text-sm">
                PRO
              </div>
              <div className="p-4 w-full flex flex-col gap-3">
                {Array.from({ length: 4 }).map((item, index) => {
                  return (
                    <div
                      className="font-semibold text-sm w-full flex items-center justify-center"
                      key={index}
                    >
                      Universal support that can be played in almost any team
                      composition.
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-1 h-fit bg-[rgba(255,255,255,0.1)]">
              <div className="w-full h-10 flex items-center justify-center bg-orange-500 font-semibold text-sm">
                CONS
              </div>
              <div className="p-4 w-full flex flex-col gap-3">
                {Array.from({ length: 4 }).map((item, index) => {
                  return (
                    <div
                      className="font-semibold text-sm w-full flex items-center justify-center"
                      key={index}
                    >
                      Effectively locks you into a 2 active Agent playstyle, due
                      to her low field time playstyle - while competitive, it
                      won't be for everyone.
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8">
          <h1 className="font-bold text-2xl">Review</h1>
          <div className="my-3">
            <p>
              Astra Yao is a S-Rank Ranged Ether Support Agent wielding a
              microphone and the power of her voice to buff allies and deal a
              bit of damage herself. As the first Limited Support unit, it’s no
              surprise that Astra’s buffs take things to the next level and set
              a new bar for team-wide boosts. With that said she is more than
              just a buff machine as she brings her own unique playstyle to the
              game, thanks to her powerful but somewhat unusual kit. Astra is
              all about her Special Attack, an ability that renders her immobile
              and mostly inactive by placing her in a special singing state
              called “Idyllic Cadenza”. In this state, she remains on the field
              even when swapped off (is invulnerable for the duration), buffs
              allies, and allows them to expend her energy to trigger Quick
              Assists on demand taking the concept of “Quick-Swap” to an
              entirely new level. If all of that sounds a bit strange and maybe
              a bit too simple you’d be right so let's get into more detail. Her
              kit is wordy and doesn’t read like a traditional character’s kit
              due to the nature of her “Idyllic Cadenza” state, but have no
              fear! She is in fact the simplest character to play in the entire
              game (and it’s not close), with her gameplay boiling down to the
              following: Use her Special Attack to enter the “Idyllic Cadenza”
              state. Use her Chain Attack when available. Use her Ultimate when
              it makes sense. And that’s it... There is no “traditional
              rotation” with her and whilst there are other actions you can
              perform such as Basic Attacks and Dodges, it’s usually not needed.
              With that said, while “How to Play” Astra is simple, understanding
              what she’s doing and her effects on teams is less so, and quite
              important to making full of her. And as such, it’s time to dive
              into the nitty gritty of her kit! Her unique resource gauge is
              “Chords” which unlike other character’s resources doesn’t require
              you to do anything special to accumulate. “Chords” are simply a
              representation of her current energy for the purpose of tracking
              her potential ability usage more easily. For every 25 energy she
              has, it will show up as having 1 “Chord”, thus 100 energy = 4
              “Chords”. Spending 25 of that on an ability will consume 1 “Chord”
              worth of energy. First and most important of Astra’s abilities is
              her Special Attack which notably has no EX-Special alternative and
              Astra will be using that energy for something else. Using the
              Special Attack causes the following effects to happen all at once:
              Astra enters the “Idyllic Cadenza” state. Astra performs an attack
              called Tremolo. She can optionally choose to press and hold to
              charge the Special Attack. Doing so draws enemies toward Astra and
              increases the Tremeloes triggered from the typically 1 up to a
              maximum of 4 instead (dependent on charge duration). She triggers
              a Quick Assist in the same way as all other Support’s Special
              Attacks (Can be converted to a “Precise Assist”). Tremolo is a
              special damage source triggered by multiple of Astra’s abilities,
              it deals a small amount of Ether DMG, but most importantly is
              considered EX-Special DMG which is important for the purpose of
              many W-Engine effects. While in the “Idyllic Cadenza” state Astra
              gains access to a myriad of buffs, mechanics and ability changes.
              To get started and keep things simple here is a quick list of all
              of them: Becomes immobile outside of Dashing. Gains Anti-Interrupt
              Level and takes 40% reduced damage while on field. Gains the
              ability to remain on the field in an Invulnerable state when
              switched out maintaining “Idyllic Cadenza” while not being the
              active Agent. Grants all squad members 20% DMG and 25% CRIT DMG.
              Enables Squad Members to trigger “Precise Assists” and gain access
              to Quick Assists at non-standard times. Out of all of these, the
              last one is the one that needs explaining. While in “Idyllic
              Cadenza” state and having at least 1 “Chord”, whenever the
              on-field agent executes: A hit on an enemy (CD: 3s). A Heavy
              Attack on an enemy (CD: 1s). She will grant that Agent a Quick
              Assist between them and your team's other Agent (not being Astra)
              immediately followed by a “Precise Assist” trigger and the “Chord”
              consumption related to it. Triggering Quick Assists in this way,
              follow the cooldowns listed above for their respective attack
              types. “Precise Assists” trigger whenever any squad mate performs
              a: Quick Assist Chain Attack Defensive Assist Evasive Assist And
              Astra has access to a “Chord” (25 energy). Triggering a “Precise
              Assist" consumes the “Chord” and causes Astra to launch 1 Tremolo
              (the same one as the initial cast of her Special Attack) followed
              immediately by 3 “Tone Clusters” which deal a small amount of
              Ether DMG each for even more damage. Astra can remain in the
              “Idyllic Cadenza” state indefinitely even if her energy reaches 0
              - a fact that many players take advantage of by using her ability
              at the start of battle and only ever switching back to her to use
              her Ultimate or Chain Attack. Astra’s Additional Ability and Core
              Passive directly build on her Special Attack and “Idyllic Cadenza”
              state enhancing it further. Her Core Passive: “Graceful Andante”
              allows her to grant 35% of her own ATK as additional Flat ATK to
              both herself and any character that switches in after triggering a
              “Precise Assist” up to a cap of 1200 Flat ATK (Requires roughly
              3430 ATK to max out at M0). Assuming you’re playing Astra normally
              and constantly alternating between your other two agents via Quick
              Assists you’ll have no issues maintaining this buff on your entire
              team indefinitely. Whereas, while Active, her Additional Ability:
              “Moonlit Frenzy” causes her Tremolo and 3 Tone Clusters to double
              trigger every time a “Chord” is consumed, doubling her damage
              output from “Precise Assist” triggers. Astra’s Chain Attack is a
              stock standard Ether DMG attack but her Ultimate is something
              special. Upon use, her Ultimate heals all squad members up to 2950
              HP and causes the next two Quick Assists Astra grants to be Chain
              Attacks instead. With this Astra is ZZZ’s very first Healer and
              can also open up new potential combos with characters having
              particularly impactful Chain Attacks. Because her role in battle
              is to remain in the “Idyllic Cadenza” state, off the field for
              almost all of the combat, it should be no surprise that her Basic
              Attacks, Dodge Attacks, and Assists aren’t of too much relevance
              or used that frequently. With that said her Dodge can be used to
              reposition if you end up with her as your active Agent and her
              Basic Attack can be pressed and held to perform an attack that
              causes her to exit the “Idyllic Cadenza” state. Some of her
              abilities in these categories also gain different versions while
              within “Idyllic Cadenza” state but aren’t impactful on her role as
              a Support and as a result aren’t frequently used. In conclusion,
              Astra is perhaps one of the simplest characters to play in the
              game but also is someone who has some of the highest impact on
              teams she's present in. Astra teams are effectively 2 Agent teams
              as Astra is almost exclusively off-field buffing and offering her
              Quick Assists. While this playstyle is competitive it certainly
              won't be for everyone. It also heavily relies on the fact that
              those 2 Agents are strong enough to carry the extra weight.
              Ultimately, Astra has some of the best buffs in the game, offers a
              new twist on combat and team building and is a top tier meta
              choice at the time of her release.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
