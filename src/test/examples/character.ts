export const ExampleCharacter = {
  name: "Evelyn",
  profile: {
    rarity: "S",
    attribute: "Fire",
    speciality: "Attack",
    faction: "Stars of Lyra",
    description:
      "Evelyn is an S Rank rank character with the Fire attribute who belongs to the Attack Attack Specialty and who is part of the Stars of Lyra faction. Ms. Yao is currently enjoying her private time and will not be taking any interviews. To learn more about Evelyn check the sections below. Use the tabs to quickly switch to the kind of information you're looking for.",
    stats: [
      {
        level: 60,
        attributes: [
          {
            key: "HP",
            value: 7788,
          },
          {
            key: "Attack",
            value: 854,
          },
          {
            key: "DEF",
            value: 612,
          },
          {
            key: "Impact",
            value: 93,
          },
          {
            key: "Anomaly Mastery",
            value: 92,
          },
          {
            key: "Anomaly Proficiency",
            value: 90,
          },
        ],
      },
    ],
    tier: {
      overall: "SSS",
      DPS: "SSS",
      Stun: null,
      Support: null,
    },
  },
  skills: {
    core_skill: [
      {
        name: "Core Passive - Voltage Gap",
        effect:
          "Soldier 0 - Anby's DMG against enemies with the Silver Star mark increases by 12.5%. After an enemy is marked with Silver Star, the CRIT DMG received from Aftershock attacks is further increased by 15% of Soldier 0 - Anby's CRIT DMG.",
      },
      {
        name: "Additional Ability - Voltage Surge",
        effect:
          "When another character in your squad is a Stun or Support character: Soldier 0 - Anby's CRIT Rate increases by 10%. When Soldier 0 - Anby is the active character, all squad members' Aftershock DMG to enemies with a Silver Star mark increases by 25%.",
      },
    ],
    basic_attack: [
      {
        name: "Basic Attack - Penetrating Shock",
        effect:
          "Press Basic Attack to activate: Perform up to five slashes ahead, dealing Electric DMG. After the 4th attack hits the enemy, repeatedly press or hold Basic Attack to quickly pass through enemies in front up to 5 times.",
      },
    ],
    dodge: [
      {
        name: "Dodge - Strobe",
        effect:
          "Press Dodge to activate: A quick dash dodge. Character is invulnerable while using this skill.",
      },
    ],
    assist: [
      {
        name: "Quick Assist - Cloud Flash",
        effect:
          "When the active character is launched, press Assist to activate: Repeatedly slash enemies in front, dealing Electric DMG. Character is invulnerable while using this skill.",
      },
      {
        name: "Defensive Assist - Counter Surge",
        effect:
          "When the on-field character is about to be attacked, press Assist to activate: Parries the enemy's attack, dealing massive Daze. Character is invulnerable while using this skill.",
      },
      {
        name: "Assist Follow-Up - Conducting Blow",
        effect:
          "Press Basic Attack after a Defensive Assist to activate: Dash forward and unleash a series of slashes at enemies ahead, dealing Electric DMG. Character is invulnerable while using this skill.",
      },
    ],
    special_attack: [
      {
        name: "Special Attack - Celestial Thunder",
        effect:
          "Press Special Attack to activate: Dash diagonally forward, then unleash a cross slash, dealing Electric DMG. Anti-Interrupt level is increased while using this skill.",
      },
      {
        name: "Special Attack - Azure Flash",
        effect:
          "When Soldier 0 - Anby's attacks hit an enemy, they apply the Silver Star mark and charges the target For every one-third of charge, the enemy receives 1 stack of White Thunder, stacking up to 3 times. When the enemy has White Thunder, press Special Attack to activate: Quickly dash forward, slashing through enemies and dealing multiple hits of Electric DMG. When the skill hits an enemy, it will consume 1 stack of White Thunder to trigger an Aftershock that deals 1 extra instance of Electric DMG. Character is invulnerable while using this skill.",
      },
      {
        name: "Special Attack - Thunder Smite",
        effect:
          "When the additional damage from White Thunder triggers 3 times on the same enemy: A lightning strike will fall at the enemy's location, dealing Electric DMG to enemies within range. This DMG is considered Aftershock DMG.",
      },
      {
        name: "EX Special Attack - Sundering Bolt",
        effect:
          "With enough energy, hold Special Attack to activate: Combines her twin swords and throws them forward for a high-speed slash, dealing massive Electric DMG. When the skill hits an enemy, it will fully charge Silver Star. Character is invulnerable while using this skill.",
      },
    ],
    chain_attack: [
      {
        name: "Chain Attack - Leaping Thunderstrike",
        effect:
          "When Decibel Rating is at Maximum, press Ultimate to activate: Perform a powerful series of slashes at a large area in front, followed by a lightning strike, dealing massive Electric DMG. When the skill hits an enemy, it will fully charge Silver Star. Character is invulnerable while using this skill.",
      },
      {
        name: "Ultimate - Voidstrike",
        effect:
          "When a Chain Attack is triggered, select the character to activate: Leap forward, then quickly dive and perform a cross slash, dealing massive Electric DMG. Character is invulnerable while using this skill.",
      },
    ],
  },
  pro_cons: {
    strength: [
      "Very mobile gameplay.",
      "Kit is straightforward since all you have to do is buildup White Thunder stacks and use your EX Special Attack.",
      "High EX Special Attack DMG when White Thunder is fully stacked.",
      "Only needs a Stun or Support Agent to activate her Additional Ability.",
    ],
    weeknesses: [
      "Needs to be on-field for the most part to ramp up White Thunder stacks.",
      "Needs specific Agents, most of which are Premium, to be played comfortably.",
    ],
    review:
      "Astra Yao is a S-Rank Ranged Ether Support Agent wielding a microphone and the power of her voice to buff allies and deal a bit of damage herself. As the first Limited Support unit, it’s no surprise that Astra’s buffs take things to the next level and set a new bar for team-wide boosts. With that said she is more than just a buff machine as she brings her own unique playstyle to the game, thanks to her powerful but somewhat unusual kit. Astra is all about her Special Attack, an ability that renders her immobile and mostly inactive by placing her in a special singing state called “Idyllic Cadenza”.",
  },
  build: {
    target_substat: ["CRIT DMG", "CRIT Rate", "ATK", "PEN"],
    target_set: [
      {
        set_num: "6",
        name: "ATK",
      },
      {
        set_num: "5",
        name: "Electric DMG",
      },
      {
        set_num: "4",
        name: "CRIT Rate",
      },
    ],
    description:
      "This Evelyn build is your typical DPS build that can be used on any team. Prioritize getting 80% CRIT Rate to activate Evelyn's Additional Ability. You can also use Inferno Metal to easily reach the required CRIT Rate.",
  },
  recomendation: {
    weapons: [
      {
        name: "Heartstring Nocturne",
        effects: [
          {
            name: "String & Melody",
            effect:
              "CRIT DMG increases by 50%. When the equipper enters combat, or activates a Chain Attack or Ultimate, they gain 1 stack of Heartstring. Each stack of Heartstring allows the wearer's Chain Attack and Ultimate DMG to ignore 12.5% of the target's Fire RES. This effect can stack up to 2 times and lasts 30s. Repeated triggers reset the duration.",
          },
        ],
      },
      {
        name: "Marcato Desire",
        effects: [
          {
            name: "Get Everyone Fired Up",
            effect:
              "When an EX Special Attack or Chain Attack hits an enemy, the equipper's ATK increases by 6% for 8s. While the target is under an Attribute Anomaly, this effect is increased by an additional 6%.",
          },
        ],
      },
      {
        name: "Cannon Rotor",
        effects: [
          {
            name: "Oversized Barrel",
            effect:
              "Increases CRIT Rate by 7.5%. Attacks that land a critical hit on an enemy will inflict an additional 200% of ATK as DMG. This effect can trigger once every 8s.",
          },
        ],
      },
      {
        name: "Steel Cushion",
        effects: [
          {
            name: "Metal Cat Claws",
            effect:
              "Increases Physical DMG by 20%. The equipper's DMG increases by 25% when attacking the enemy from behind.",
          },
        ],
      },
      {
        name: "Street Superstar",
        effects: [
          {
            name: "Flaming Bars",
            effect:
              "Whenever a squad member launches a Chain Attack, the equipper gains a Charge stack, stacking up to 3 times. Upon activating their own Ultimate, the equipper consumes all Charge stacks, and each stack increases the skill's DMG by 15%.",
          },
        ],
      },
    ],
    equipment_set: [
      {
        name: "Best set",
        rating: "S",
        sets: [
          {
            name: "Woodpecker Electro",
            unit: 4,
          },
          {
            name: "Inferno Metal",
            unit: 2,
          },
        ],
        description:
          "Woodpecker Electro is Evelyn's best set for general use since it provides CRIT Rate and increases her ATK when she does a Basic Attack, Dodge Counter, or EX Special Attack.",
      },
      {
        name: "2nd Best",
        rating: "A",
        sets: [
          {
            name: "Inferno Metal",
            unit: 2,
          },
          {
            name: "Woodpecker Electro",
            unit: 2,
          },
          {
            name: "Branch and Blade Song",
            unit: 2,
          },
        ],
        description:
          "You can use a mix of Inferno Metal, Woodpecker, and Branch sets to simply increase Evelyn's stats.",
      },
    ],
  },
  character_enchantment: [
    {
      name: "Dreamweave",
      effect:
        "Upon entering the battlefield, Evelyn immediately gains 1,500 Decibels. Enemies affected by Binding Seal will be Bound. When Evelyn attacks Bound enemies, she ignores 12% of their DEF. When Evelyn uses Special Attack: Binding Sunder - First Form or EX Special Attack: Binding Sunder - Final Form, the Bound effect spreads to all enemies hit by the skill. This spread Bound effect lasts for 10s.",
    },
    {
      name: "Dance of Fire",
      effect:
        "Evelyn's ATK increases by 15%. When Evelyn uses Basic Attack: Garrote - First Form or Basic Attack: Garrote - Second Form, the Burning Embers consumed will be returned. This effect can trigger once every 25s. When Evelyn consumes Burning Tether Point to trigger Chain Attack: Lunalux - Snare, the skill's Interrupt Level increases.",
    },
    {
      name: "Metamorphosis",
      effect:
        "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2",
    },
    {
      name: "Fate's Melody",
      effect:
        "Upon activating a Chain Attack or Ultimate, Evelyn immediately gains a shield equal to 10% of her Max HP. While this shield exists, Evelyn's CRIT DMG increases by 40%.",
    },
    {
      name: "Crimson Threads Like the Dawn",
      effect:
        "Basic Attack, Dodge, Assist, Special Attack, and Chain Attack Lv. +2",
    },
    {
      name: "Bond of Light and Shadow",
      effect:
        "When activating her Chain Attack or Ultimate, Evelyn gains Shadowstring Edge for 20s. During Shadowstring Edge, when Evelyn hits enemies with a Basic Attack, Dash Attack, Special Attack, or EX Special Attack, an additional Lunalux Garrote will be released for a follow-up attack, dealing Fire DMG equal to 375% of Evelyn's ATK. This DMG is considered Chain Attack DMG and can trigger up to 16 times. The number of triggers will be refreshed each time Shadowstring Edge is gained.",
    },
  ],
  teams_section: {
    introduction:
      "Astra Yao's best with everyone (pretty much). As the easiest, quickest, and most universal Support unit in the game, she is able to slot as the best Support option to almost any team in the current Zenless Zone Zero meta, including all the best Agents, and being at least very very strong anywhere. Have fun using her as the best Support to just about anybody! (Or second best to Nicole, in very specific cases). Below are some examples of the top meta teams for you to take inspiration from:",
    teams: [
      {
        name: "EVELYN BEST TEAM",
        composition: {
          dps: [{ name: "Evelyn" }, { name: "Miyabi" }, { name: "Yanagi" }],
          stun: [{ name: "Anby" }],
          support: [{ name: "Nicole" }],
          bamboo: [{ name: "Bagboo" }],
        },
      },
    ],
    outro:
      "For this free-to-play team, you can use the Cunning Hares trio but replace Billy with Evelyn. Use Anby and Nicole to stun and debuff the enemy, respectively. As a CRIT DPS, Evelyn is best used in a team with a Stun and Support unit. Astra Yao will be her best teammate since her Ultimate can allow Evelyn to use her Chain Attack via Quick Assist. Lighter will be Evelyn's best Stun unit since he can increase Evelyn's Fire DMG.",
    gameplay:
      "When Evelyn's certain attacks hit enemies, she will entangle them with her Lunalux Garrote, setting them up for Garrote Attacks. These attacks will have Evelyn pull on the tether and immediately close in on them! Entangling enemies with the Lunalux Garrote will have Evelyn enter the Binding Seal state, which will increase her CRIT Rate throughout its duration!Whenever Evelyn deals DMG to enemies, she will accumulate Burning Embers. Evelyn will accumulate different amounts of Burning Embers for each attack and she will use these points to enhance certain attacks.",
  },
};
