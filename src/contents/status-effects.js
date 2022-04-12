const buffs = {
  bubble: {
    name: 'Bubble',
    imgURL: 'status-effects/buffs/bubble.png',
    description: 'Block 5 DMG/stack. Max: 3 stack. Turn into Bubble Bomb upon reaching 3 stacks.',
  },
  cleanser: {
    name: 'Cleanser',
    imgURL: 'status-effects/buffs/cleanser.png',
    description: 'Each stack negates 1 debuff applied on the target.',
  },
  feather: {
    name: 'Feather',
    imgURL: 'status-effects/buffs/feather.png',
    description: 'When Axie does an attack, consume all Feather stacks to deal 2 bonus DMG per stack and heal 2 HP per stack. Max : 10 stack.',
  },
  healing_boost: {
    name: 'Healing Boost',
    imgURL: 'status-effects/buffs/healing_boost.png',
    description: 'Increase healing card effects to this unit by 1 HP per stack.',
  },
  meditate: {
    name: 'Meditate',
    imgURL: 'status-effects/buffs/meditate.png',
    description: 'Meditate for 2 turns. If attacked while Meditating, awake and gain 3 Rage. If not, Cleanse 1 debuff and gain 1 Energy after effect ends.',
  },
  shield_boost: {
    name: 'Shield Boost',
    imgURL: 'status-effects/buffs/shield_boost.png',
    description: 'The target has Shield gained from cards increased by 1 per stack.',
  },
  bubble_bomb: {
    name: 'Bubble Bomb',
    imgURL: 'status-effects/buffs/bubble_bomb.png',
    description: 'Next attack explodes Bubble Bomb and deals 20 DMG to all Enemies.',
  },
  damage_boost: {
    name: 'Damage Boost',
    imgURL: 'status-effects/buffs/damage_boost.png',
    description: 'The target has Attack DMG increased by 1 per stack.',
  },
  fury: {
    name: 'Fury',
    imgURL: 'status-effects/buffs/fury.png',
    description: 'Gain 1 Energy when transforms. Deal double damage and last for 1 turn.',
  },
  leaf: {
    name: 'Leaf',
    imgURL: 'status-effects/buffs/leaf.png',
    description: 'Regen 5 HP at the end of your turn. Max stack: 5.',
  },
  rage: {
    name: 'Rage',
    imgURL: 'status-effects/buffs/rage.png',
    description: 'DMG is increases by 2 per Rage stack. Transform into Fury Form when reaches 10 Rage stack.',
  },
  stealth: {
    name: 'Stealth',
    imgURL: 'status-effects/buffs/stealth.png',
    description: 'The target cannot be targeted directly. If it uses a card, remove Stealth.',
  },
};

const debuffs = {
  bleed: {
    name: 'Bleed',
    imgURL: 'status-effects/debuffs/bleed.png',
    description: 'Whenever the target uses a card, it loses 15HP.',
  },
  disarmed: {
    name: 'Disarmed',
    imgURL: 'status-effects/debuffs/disarmed.png',
    description: 'The target cannot use Attack cards.',
  },
  fear: {
    name: 'Fear',
    imgURL: 'status-effects/debuffs/fear.png',
    description: 'Whenever the target uses an Attack card, shuffle a Confused into its draw pile.',
  },
  heal_block: {
    name: 'Heal Block',
    imgURL: 'status-effects/debuffs/heal_block.png',
    description: 'The target cannot be healed.',
  },
  poison: {
    name: 'Poison',
    imgURL: 'status-effects/debuffs/poison.png',
    description: 'At the start of its turn, the target loses 3 HP per stack and stacks are reduced by 1. Max: 30 stacks.',
  },
  sleep: {
    name: 'Sleep',
    imgURL: 'status-effects/debuffs/sleep.png',
    description: 'The target cannot use cards. If it is attacked, remove Sleep.',
  },
  vulnerable: {
    name: 'Vulnerable',
    imgURL: 'status-effects/debuffs/vulnerable.png',
    description: 'The target receives 20% more attack damage.',
  },
  death_mark: {
    name: 'Death Mark',
    imgURL: 'status-effects/debuffs/death_mark.png',
    description: 'Whenever opponent plays an Attack Card, the target take 13 DMG per Energy spent.',
  },
  doubt: {
    name: 'Doubt',
    imgURL: 'status-effects/debuffs/doubt.png',
    description: 'The target gains 20% less HP from Healing.',
  },
  fragile: {
    name: 'Fragile',
    imgURL: 'status-effects/debuffs/fragile.png',
    description: 'The target gains 20% less Shield from cards.',
  },
  hex: {
    name: 'Hex',
    imgURL: 'status-effects/debuffs/hex.png',
    description: 'Whenever the target uses a non-Attack card, shuffle a Confused into its draw pile.',
  },
  silence: {
    name: 'Silence',
    imgURL: 'status-effects/debuffs/silence.png',
    description: 'The target cannot use non-Attack cards.',
  },
  stunned: {
    name: 'Stunned',
    imgURL: 'status-effects/debuffs/stunned.png',
    description: 'The target cannot perform any action.',
  },
  weak: {
    name: 'Weak',
    imgURL: 'status-effects/debuffs/weak.png',
    description: 'The target deals 20% less attack damage.',
  },
};

const neutrals = {
  taunt: {
    name: 'Taunt',
    imgURL: 'status-effects/neutrals/taunt.png',
    description: 'The target is always targeted by enemy\'s attack abilities.',
  },
};

export const statusEffects = {
  buffs,
  debuffs,
  neutrals,
};