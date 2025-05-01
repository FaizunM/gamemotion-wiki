export interface ICharacter {
  name: string;
  profile: Profile;
  skills: Skills;
  pro_cons: ProCons;
  build: Build;
  recomendation: Recomendation;
  character_enchantment: CharacterEnchantment[];
  teams_section: TeamsSection;
}

export interface Build {
  target_substat: string[];
  target_set: TargetSet[];
  description: string;
}

export interface BuildEquipmentSet {
  name: string;
  unit: string;
}

export interface TargetSet {
  set_num: string;
  name: string;
}

export interface BuildWeapon {
  name: string;
  index: number;
}

export interface CharacterEnchantment {
  name: string;
  effect: string;
}

export interface ProCons {
  strength: string[];
  weeknesses: string[];
  review: string;
}

export interface Profile {
  rarity: string;
  attribute: string;
  speciality: string;
  faction: string;
  description: string;
  stats: Stat[];
  tier: Tier;
}

export interface Stat {
  level: number;
  attributes: Attribute[];
}

export interface Attribute {
  key: string;
  value: number;
}

export interface Tier {
  overall: string;
  DPS: string;
  Stun: null;
  Support: null;
}

export interface Recomendation {
  weapons: RecomendationWeapon[];
  equipment_set: RecomendationEquipmentSet[];
}

export interface RecomendationEquipmentSet {
  name: string;
  rating: string;
  sets: Set[];
  description: string;
}

export interface Set {
  name: string;
  unit: number;
}

export interface RecomendationWeapon {
  name: string;
  effects: CharacterEnchantment[];
}

export interface Skills {
  core_skill: CharacterEnchantment[];
  basic_attack: CharacterEnchantment[];
  dodge: CharacterEnchantment[];
  assist: CharacterEnchantment[];
  special_attack: CharacterEnchantment[];
  chain_attack: CharacterEnchantment[];
}

export interface TeamsSection {
  introduction: string;
  teams: Team[];
  outro: string;
  gameplay: string;
}

export interface Team {
  name: string;
  composition: Composition;
}

export interface Composition {
  dps: Bamboo[];
  stun: Bamboo[];
  support: Bamboo[];
  bamboo: Bamboo[];
}

export interface Bamboo {
  name: string;
}
