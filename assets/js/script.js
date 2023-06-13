// ISSUE: combine similar sourced arrays into an array of two arrays
// ISSUE: gold range slider functionality
// ISSUE: allow for requiring X amount of consumables to be populated to the list
// ISSUE: come up with other tag ideas for each item to be able to filter shop results with

var magicItemsStandard = `Absorbing Tattoo	8,000	Very Rare	Combat Items
Adamantine Armor	500	Uncommon	Combat Items
Alchemical Compendium	5,000	Rare	Gamechanging Items
Alchemy Jug	6,000	Uncommon	Gamechanging Items
All-Purpose Tool +1	1,500	Uncommon	Combat Items
All-Purpose Tool +2	6,000	Rare	Combat Items
All-Purpose Tool +3	24,000	Very Rare	Combat Items
Ammunition +1(each)	25	Uncommon	Consumables
Ammunition +2(each)	100	Rare	Consumables
Ammunition +3(each)	400	Very Rare	Consumables
Amulet of Health	8,000	Rare	Combat Items
Amulet of Proof Against Detection and Location	20,000	Uncommon	Noncombat Items
Amulet of the Devout +1	1,800	Uncommon	Combat Items
Amulet of the Devout +2	7,200	Rare	Combat Items
Amulet of the Devout +3	28,800	Very Rare	Combat Items
Amulet of the Planes	160,000	Very Rare	Gamechanging Items
Animated Shield	6,000	Very Rare	Combat Items
Apparatus of Kwalish	10,000	Legendary	Noncombat Items
Arcane Grimoire +1	1,500	Uncommon	Combat Items
Arcane Grimoire +2	6,000	Rare	Combat Items
Arcane Grimoire +3	24,000	Very Rare	Combat Items
Armor +1 (add to cost of armor)	1,500	Rare	Gamechanging Items
Armor +2 (add to cost of armor)	6,000	Very Rare	Gamechanging Items
Armor +3 (add to cost of armor)	24,000	Legendary	Gamechanging Items
Armor of Gleaming (add to cost of armor)	20	Common	Noncombat Items
Armor of Invulnerability	18,000	Legendary	Gamechanging Items
Armor of Resistance	6,000	Rare	Combat Items
Arrow of Slaying(ea)	600	Very Rare	Consumables
Arrow-Catching Shield	6,000	Rare	Combat Items
Astral Shard	3,000	Rare	Gamechanging Items
Astromancy Archive	5,000	Rare	Gamechanging Items
Atlas of Endless Horizons	5,000	Rare	Gamechanging Items
Bag of Holding	4,000	Uncommon	Noncombat Items
Barrier Tattoo (AC 12 + Dex)	2,000	Uncommon	Gamechanging Items
Barrier Tattoo (AC 15 + Dex | max +2)	8,000	Rare	Gamechanging Items
Barrier Tattoo (AC 18)	32,000	Very Rare	Gamechanging Items
Bead of Force	960	Rare	Consumables
Bead of Nourishment	1	Common	Consumables
Bead of Refreshment	10	Common	Consumables
Bell Branch	3,000	Rare	Noncombat Items
Belt of Dwarvenkind	6,000	Rare	Combat Items
Belt of Giant Strength (STR 21, Hill)	9,000	Rare	Combat Items
Belt of Giant Strength (STR 23, Frost)	14,000	Very Rare	Combat Items
Belt of Giant Strength (STR 23, Stone)	14,000	Very Rare	Combat Items
Belt of Giant Strength (STR 25, Fire)	38,000	Very Rare	Combat Items
Belt of Giant Strength (STR 27, Cloud)	45,000	Legendary	Combat Items
Belt of Giant Strength (STR 29, Storm)	75,000	Legendary	Combat Items
Blood Fury Tattoo	48,000	Legendary	Combat Items
Bloodwell Vial +1	1,800	Uncommon	Combat Items
Bloodwell Vial +2	7,200	Rare	Combat Items
Bloodwell Vial +3	28,800	Very Rare	Combat Items
Boots of Elvenkind	2,500	Uncommon	Noncombat Items
Boots of False Tracks	40	Common	Noncombat Items
Boots of Levitation	4,000	Rare	Noncombat Items
Boots of Speed	4,000	Rare	Combat Items
Boots of Striding and Springing	5,000	Uncommon	Noncombat Items
Boots of the Winterlands	10,000	Uncommon	Noncombat Items
Bowl of Commanding Water Elementals	8,000	Rare	Summoning Items
Bracers of Archery	1,500	Uncommon	Combat Items
Bracers of Defense	6,000	Rare	Combat Items
Brass Horn of Valhalla	8,400	Rare	Summoning Items
Brazier of Commanding Fire Elementals	8,000	Rare	Summoning Items
Bronze Griffon	8,000	Rare	Gamechanging Items
Bronze Horn of Valhalla	11,200	Very Rare	Summoning Items
Brooch of Shielding	7,500	Uncommon	Combat Items
Broom of Flying	8,000	Uncommon	Gamechanging Items
Candle of the Deep	40	Common	Noncombat Items
Cap of Water Breathing	1,000	Uncommon	Noncombat Items
Cape of the Mountebank	8,000	Rare	Noncombat Items
Carpet of Flying	12,000	Very Rare	Gamechanging Items
Cast-Off Armor (add to cost of armor)	50	Common	Noncombat Items
Cauldron of Rebirth	50,000	Very Rare	Gamechanging Items
Censer of Controlling Air Elementals	8,000	Rare	Summoning Items
Charlatan's Die	30	Common	Noncombat Items
Chime of Opening	1,500	Rare	Consumables
Circlet of Blasting	1,500	Uncommon	Combat Items
Cloak of Arachnida	5,000	Very Rare	Noncombat Items
Cloak of Billowing	20	Common	Noncombat Items
Cloak of Displacement	60,000	Rare	Combat Items
Cloak of Elvenkind	5,000	Uncommon	Noncombat Items
Cloak of Invisibility	80,000	Legendary	Gamechanging Items
Cloak of Many Fashions	70	Common	Noncombat Items
Cloak of Protection	3,500	Uncommon	Combat Items
Cloak of the Bat	6,000	Rare	Noncombat Items
Cloak of the Manta Ray	6,000	Uncommon	Noncombat Items
Clockwork Amulet	240	Common	Gamechanging Items
Clothes of Mending	40	Common	Noncombat Items
Coiling Grasp Tattoo	8,000	Uncommon	Combat Items
Cracked Driftglobe	325	Uncommon	Noncombat Items
Crystal Ball	50,000	Very Rare	Gamechanging Items
Crystalline Chronicle	20,000	Very Rare	Gamechanging Items
Cube of Force	16,000	Rare	Noncombat Items
Cubic Gate	40,000	Legendary	Gamechanging Items
Daern's Instant Fortress	75,000	Rare	Gamechanging Items
Dagger of Venom	2,500	Rare	Combat Items
Dancing Sword	2,000	Very Rare	Combat Items
Dark Shard Amulet	120	Common	Combat Items
Decanter of Endless Water	135,000	Uncommon	Gamechanging Items
Deck of Illusions	6,120	Uncommon	Consumables
Defender	24,000	Legendary	Gamechanging Items
Devotee's Censer	8,000	Rare	Combat Items
Dimensional Shackles	3,000	Rare	Noncombat Items
Dragon Scale Mail	4,000	Very Rare	Combat Items
Dragon Slayer	8,000	Rare	Combat Items
Dread Helm	20	Common	Noncombat Items
Driftglobe	750	Uncommon	Noncombat Items
Duplicitous Manuscript	5,000	Rare	Gamechanging Items
Dust of Disappearance	300	Uncommon	Consumables
Dust of Dryness(1 pellet)	120	Uncommon	Consumables
Dust of Sneezing and Choking	480	Uncommon	Consumables
Dwarven Plate	9,000	Very Rare	Gamechanging Items
Dwarven Thrower	18,000	Very Rare	Combat Items
Ear Horn of Hearing	20	Common	Noncombat Items
Ebony Fly	6,000	Rare	Gamechanging Items
Efreeti Chain	20,000	Legendary	Combat Items
Eldritch Claw Tattoo	1,200	Uncommon	Combat Items
Elemental Essence Shard	8,000	Rare	Gamechanging Items
Elemental Gem	960	Uncommon	Consumables
Elixir of Health	120	Rare	Consumables
Elven Chain	4,000	Rare	Combat Items
Enduring Spellbook	100	Common	Noncombat Items
Ersatz Eye	20	Common	Noncombat Items
Eversmoking Bottle	1,000	Uncommon	Noncombat Items
Eyes of Charming	3,000	Uncommon	Noncombat Items
Eyes of Minute Seeing	2,500	Uncommon	Noncombat Items
Eyes of the Eagle	2,500	Uncommon	Noncombat Items
Far Realm Shard	3,000	Rare	Combat Items
Feywild Shard	3,000	Rare	Combat Items
Flame Tongue	5,000	Rare	Combat Items
Folding Boat	10,000	Rare	Noncombat Items
Frost Brand	2,200	Very Rare	Combat Items
Fulminating Treatise	5,000	Rare	Gamechanging Items
Gauntlets of Ogre Power	8,000	Uncommon	Combat Items
Gem of Brightness	5,000	Uncommon	Consumables
Gem of Seeing	32,000	Rare	Noncombat Items
Ghost Step Tattoo	8,000	Very Rare	Gamechanging Items
Giant Slayer	7,000	Rare	Combat Items
Glamoured Studded Leather	2,000	Rare	Combat Items
Gloves of Missile Snaring	3,000	Uncommon	Combat Items
Gloves of Swimming and Climbing	2,000	Uncommon	Noncombat Items
Gloves of Thievery	5,000	Uncommon	Noncombat Items
Goggles of Night	1,500	Uncommon	Noncombat Items
Goldean Lion(ea)	600	Rare	Summoning Items
Guardian Emblem 	3,000	Uncommon	Combat Items
Hammer of Thunderbolts	16,000	Legendary	Combat Items
Hat of Disguise	5,000	Uncommon	Noncombat Items
Hat of Vermin	180	Common	Summoning Items
Hat of Wizardry	120	Common	Combat Items
Headband of Intellect	8,000	Uncommon	Combat Items
Heart Weaver's Primer	5,000	Rare	Gamechanging Items
Helm of Comprehend Languages	500	Uncommon	Noncombat Items
Helm of Telepathy	12,000	Uncommon	Noncombat Items
Helm of Teleportation	64,000	Rare	Gamechanging Items
Heward's Handy Haversack	2,000	Rare	Noncombat Items
Heward's Handy Spice Pouch	20	Common	Noncombat Items
Holy Avenger	165,000	Legendary	Combat Items
Horn of Blasting	450	Rare	Consumables
Horn of Silent Alarm	240	Common	Noncombat Items
Horseshoes of Speed	5,000	Rare	Noncombat Items
Horseshoes of the Zephyr	1,500	Very Rare	Noncombat Items
Illuminator's Tattoo	240	Common	Noncombat Items
Immovable Rod	5,000	Uncommon	Noncombat Items
Instrument of Illusions	40	Common	Noncombat Items
Instrument of Scribing	180	Common	Noncombat Items
Instrument of the Bards - Anstruth Harp	109,000	Very Rare	Combat Items
Instrument of the Bards - Canaith Mandolin	30,000	Rare	Combat Items
Instrument of the Bards - Cli Lyre	35,000	Rare	Combat Items
Instrument of the Bards - Doss Lute	28,500	Uncommon	Combat Items
Instrument of the Bards - Fochulan Bandlore	26,500	Uncommon	Combat Items
Instrument of the Bards - Mac-Fuirmidh Cittern	27,000	Uncommon	Combat Items
Instrument of the Bards - Ollamh Harp	125,000	Legendary	Combat Items
Ioun Stone Absorption	2,400	Very Rare	Consumables
Ioun Stone Agility	3,000	Very Rare	Combat Items
Ioun Stone Awareness	12,000	Rare	Combat Items
Ioun Stone Fortitude	3,000	Very Rare	Combat Items
Ioun Stone Greater Absorption	31,000	Legendary	Consumables
Ioun Stone Insight	3,000	Very Rare	Combat Items
Ioun Stone Intellect	3,000	Very Rare	Combat Items
Ioun Stone Leadership	3,000	Very Rare	Combat Items
Ioun Stone Mastery	15,000	Legendary	Combat Items
Ioun Stone Protection	1,200	Rare	Combat Items
Ioun Stone Regeneration	4,000	Legendary	Combat Items
Ioun Stone Reserve	6,000	Rare	Combat Items
Ioun Stone Strength	3,000	Very Rare	Combat Items
Ioun Stone Sustenance	1,000	Rare	Noncombat Items
Iron Bands of Bilarro	4,000	Rare	Combat Items
Iron Horn of Valhalla	14,000	Legendary	Summoning Items
Ivory Goat(Terror)	20,000	Rare	Summoning Items
Ivory Goat(Travail)	400	Rare	Summoning Items
Ivory Goat(Traveling)	1,000	Rare	Summoning Items
Javelin of Lightning	1,500	Uncommon	Combat Items
Keoghtom's Ointment(Per dose)	120	Uncommon	Consumables
Lantern of Revealing	5,000	Uncommon	Noncombat Items
Libram of Souls and Flesh	5,000	Rare	Gamechanging Items
Lifewell Tattoo	8,000	Very Rare	Combat Items
Lock of Trickery	40	Common	Noncombat Items
Luckstone	4,200	Uncommon	Combat Items
Lyre of Building	12,000	Rare	Noncombat Items
Mace of Disruption	8,000	Rare	Combat Items
Mace of Smiting	7,000	Rare	Combat Items
Mace of Terror	8,000	Rare	Combat Items
Mantle of Spell Resistance	30,000	Rare	Combat Items
Marble Elephant	6,000	Rare	Summoning Items
Mariner's Armor	1,500	Uncommon	Noncombat Items
Masquerade Tattoo	300	Common	Noncombat Items
Medallion of Thoughts	3,000	Uncommon	Noncombat Items
Mirror of Life Trapping	18,000	Very Rare	Noncombat Items
Mithral Armor	800	Uncommon	Combat Items
Moon Sickle +1	1,800	Uncommon	Combat Items
Moon Sickle +2	7,200	Rare	Combat Items
Moon Sickle +3	28,800	Very Rare	Combat Items
Moon-Touched Sword (add to cost of weapon)	200	Common	Combat Items
Mystery Key	20	Common	Noncombat Items
Nature's Mantle	800	Uncommon	Noncombat Items
Necklace of Adaption	1,500	Uncommon	Noncombat Items
Necklace of Fireballs(1 bead)	300	Rare	Consumables
Necklace of Fireballs(2 beads)	480	Rare	Consumables
Necklace of Fireballs(3 beads)	960	Rare	Consumables
Necklace of Fireballs(4 beads)	1,600	Rare	Consumables
Necklace of Fireballs(5 bead)	3,840	Rare	Consumables
Necklace of Fireballs(6 beads)	7,680	Rare	Consumables
Nine Lives Stealer(Fully Charged)	8,000	Very Rare	Combat Items
Nolzur's Marvelous Pigments	200	Very Rare	Consumables
Oathbow	3,500	Very Rare	Combat Items
Obsidian Steed	128,000	Very Rare	Gamechanging Items
Oil of Etherealness	1,920	Rare	Consumables
Oil of Sharpness	3,200	Very Rare	Consumables
Oil of Slipperiness	480	Uncommon	Consumables
Onyx Dog	3,000	Rare	Summoning Items
Orb of Direction	20	Common	Noncombat Items
Orb of Time	20	Common	Noncombat Items
Outer Essence Shard	8,000	Rare	Gamechanging Items
Pearl of Power	6,000	Uncommon	Combat Items
Perfume of Bewitching	90	Common	Noncombat Items
Periapt of Health	5,000	Uncommon	Noncombat Items
Periapt of Proof Against Poison	5,000	Rare	Noncombat Items
Periapt of Wound Closure	5,000	Uncommon	Combat Items
Philter of Love	90	Uncommon	Consumables
Pipe of Smoke Monsters	20	Common	Noncombat Items
Pipes of Haunting	6,000	Uncommon	Combat Items
Pipes of the Sewers	2,000	Uncommon	Combat Items
Planecaller's Codex	5,000	Rare	Gamechanging Items
Plate Armor of Etherealness	48,000	Legendary	Noncombat Items
Pole of Angling	20	Common	Noncombat Items
Pole of Collapsing	20	Common	Noncombat Items
Portable Hole	8,000	Rare	Noncombat Items
Pot of Awakening	120	Common	Summoning Items
Potion of Animal Friendship	200	Uncommon	Consumables
Potion of Clairvoyance	960	Rare	Consumables
Potion of Climbing	180	Common	Consumables
Potion of Diminution	270	Rare	Consumables
Potion of Fire Breath	150	Uncommon	Consumables
Potion of Flying	500	Very Rare	Consumables
Potion of Gaseous Form	300	Rare	Consumables
Potion of Greater Healing	150	Uncommon	Consumables
Potion of Growth	270	Uncommon	Consumables
Potion of Healing	50	Common	Consumables
Potion of Heroism	180	Rare	Consumables
Potion of Invisibility	180	Very Rare	Consumables
Potion of Invulnerability	3,840	Rare	Consumables
Potion of Longevity	9,000	Very Rare	Gamechanging Items
Potion of Mind Reading	180	Rare	Consumables
Potion of Poison	100	Uncommon	Consumables
Potion of Resistance	300	Uncommon	Consumables
Potion of Speed	400	Very Rare	Consumables
Potion of Superior Healing	450	Very Rare	Consumables
Potion of Supreme Healing	1,350	Very Rare	Consumables
Potion of Vitality	960	Very Rare	Consumables
Potion of Water Breathing	180	Uncommon	Consumables
Prayer Bead - Bless	2,000	Rare	Combat Items
Prayer Bead - Curing	4,000	Rare	Combat Items
Prayer Bead - Favor	32,000	Rare	Combat Items
Prayer Bead - Smiting	1,500	Rare	Combat Items
Prayer Bead - Summons	128,000	Rare	Combat Items
Prayer Bead - Wind Walking	96,000	Rare	Combat Items
Prosthetic Limb	40	Common	Noncombat Items
Protective Verses	5,000	Rare	Gamechanging Items
Quaal's Feather Token Anchor	50	Rare	Consumables
Quaal's Feather Token Bird	3,000	Rare	Consumables
Quaal's Feather Token Fan	250	Rare	Consumables
Quaal's Feather Token Swan Boat	3,000	Rare	Consumables
Quaal's Feather Token Whip	250	Rare	Consumables
Quiver of Ehlonna	1,000	Uncommon	Noncombat Items
Reveler's Concertina	10,000	Rare	Combat Items
Rhythm-Maker's Drum +1	1,800	Uncommon	Combat Items
Rhythm-Maker's Drum +2	7,200	Rare	Combat Items
Rhythm-Maker's Drum +3	28,800	Very Rare	Combat Items
Ring of Air Elemental Command	35,000	Legendary	Gamechanging Items
Ring of Animal Influence	4,000	Rare	Noncombat Items
Ring of Earth Elemental Command	31,000	Legendary	Gamechanging Items
Ring of Evasion	5,000	Rare	Combat Items
Ring of Feather Falling	2,000	Rare	Noncombat Items
Ring of Fire Elemental Command	17,000	Legendary	Combat Items
Ring of Free Action	20,000	Rare	Combat Items
Ring of Invisibility	10,000	Legendary	Noncombat Items
Ring of Jumping	2,500	Uncommon	Noncombat Items
Ring of Mind Shielding	16,000	Uncommon	Noncombat Items
Ring of Protection	3,500	Rare	Combat Items
Ring of Regeneration	12,000	Very Rare	Gamechanging Items
Ring of Resistance	6,000	Rare	Combat Items
Ring of Shooting Stars	14,000	Very Rare	Combat Items
Ring of Spell Storing	24,000	Rare	Combat Items
Ring of Spell Turning	30,000	Legendary	Combat Items
Ring of Swimming	3,000	Uncommon	Noncombat Items
Ring of Telekinesis	80,000	Very Rare	Gamechanging Items
Ring of the Ram	5,000	Rare	Combat Items
Ring of Warmth	1,000	Uncommon	Noncombat Items
Ring of Water Elemental Command	25,000	Legendary	Combat Items
Ring of Water Walking	1,500	Uncommon	Noncombat Items
Ring of X-Ray Vision	6,000	Rare	Noncombat Items
Robe of Eyes	30,000	Rare	Noncombat Items
Robe of Scintillating Colors	6,000	Very Rare	Combat Items
Robe of Stars	60,000	Very Rare	Combat Items
Robe of the Archmagi	34,000	Legendary	Gamechanging Items
Robe of Useful Items (priced per item)	5	Uncommon	Consumables
Rod of Absorption	50,000	Very Rare	Consumables
Rod of Alertness	25,000	Very Rare	Combat Items
Rod of Lordly Might	28,000	Legendary	Combat Items
Rod of Rulership	16,000	Rare	Noncombat Items
Rod of Security	90,000	Very Rare	Gamechanging Items
Rod of the Pact Keeper +1	2,000	Uncommon	Combat Items
Rod of the Pact Keeper +2	8,000	Rare	Combat Items
Rod of the Pact Keeper +3	32,000	Very Rare	Combat Items
Rope of Climbing	2,000	Uncommon	Noncombat Items
Rope of Entanglement	4,000	Rare	Combat Items
Rope of Mending	40	Common	Noncombat Items
Ruby of the War Mage	40	Common	Noncombat Items
Saddle of the Cavalier	2,000	Uncommon	Combat Items
Scarab of Protection	36,000	Legendary	Combat Items
Scimitar of Speed	6,000	Very Rare	Combat Items
Scroll of Protection	180	Rare	Consumables
Sending Stones	2,000	Uncommon	Gamechanging Items
Sentinel Shield	20,000	Uncommon	Combat Items
Serpentine Owl	8,000	Rare	Gamechanging Items
Shadowfell Brand Tattoo	8,000	Rare	Noncombat Items
Shadowfell Shard	3,000	Rare	Combat Items
Shield +1	1,500	Uncommon	Gamechanging Items
Shield +2	6,000	Rare	Gamechanging Items
Shield +3	24,000	Very Rare	Gamechanging Items
Shield of Expression	70	Common	Combat Items
Shield of Missile Attraction	6,000	Rare	Combat Items
Silver Horn of Valhalla	5,600	Rare	Summoning Items
Silver Raven	5,000	Uncommon	Summoning Items
Slippers of Spider Climbing	5,000	Uncommon	Noncombat Items
Smoldering Armor (add to cost of armor)	40	Common	Combat Items
Sovereign Glue	400	Legendary	Consumables
Spell Scroll Level 0	10	Common	Consumables
Spell Scroll Level 1	60	Common	Consumables
Spell Scroll Level 2	120	Uncommon	Consumables
Spell Scroll Level 3	200	Uncommon	Consumables
Spell Scroll Level 4	320	Rare	Consumables
Spell Scroll Level 5	640	Rare	Consumables
Spell Scroll Level 6	1,280	Very Rare	Consumables
Spell Scroll Level 7	2,560	Very Rare	Consumables
Spell Scroll Level 8	5,120	Very Rare	Consumables
Spell Scroll Level 9	10,240	Legendary	Consumables
Spellguard Shield	50,000	Very Rare	Combat Items
Spellwrought Tattoo (1st)	120	Common	Consumables
Spellwrought Tattoo (2nd)	240	Uncommon	Consumables
Spellwrought Tattoo (3rd)	400	Uncommon	Consumables
Spellwrought Tattoo (4th)	640	Rare	Consumables
Spellwrought Tattoo (5th)	1,280	Rare	Consumables
Spellwrought Tattoo (Cantrip)	20	Common	Consumables
Sphere of Annihilation	15,000	Legendary	Gamechanging Items
Staff of Adornment	25	Common	Noncombat Items
Staff of Birdcalls	140	Common	Noncombat Items
Staff of Charming	12,000	Rare	Combat Items
Staff of Fire	16,000	Very Rare	Combat Items
Staff of Flowers	140	Common	Noncombat Items
Staff of Frost	26,000	Very Rare	Combat Items
Staff of Healing	13,000	Rare	Combat Items
Staff of Power	95,500	Very Rare	Gamechanging Items
Staff of Striking	21,000	Very Rare	Combat Items
Staff of Swarming Insects	16,000	Rare	Combat Items
Staff of the Adder	1,800	Uncommon	Combat Items
Staff of the Python	2,000	Uncommon	Summoning Items
Staff of the Woodlands	44,000	Rare	Combat Items
Staff of Thunder and Lightning	10,000	Very Rare	Combat Items
Staff of Withering	3,000	Rare	Combat Items
Stone of Controlling Earth Elementals	8,000	Rare	Summoning Items
Sunblade	12,000	Rare	Combat Items
Sword of Answering	36,000	Legendary	Combat Items
Sword of Life-Stealing	1,000	Rare	Combat Items
Sword of Sharpness	1,700	Rare	Combat Items
Sword of Wounding	2,000	Rare	Combat Items
Talisman of Pure Good	71,680	Legendary	Consumables
Talisman of the Sphere	20,000	Legendary	Gamechanging Items
Talisman of Ultimate Evil	61,440	Legendary	Consumables
Talking Doll	80	Common	Noncombat Items
Tankard of Sobriety	20	Common	Noncombat Items
Tentacle Rod	5,000	Rare	Combat Items
Trident of Fish Command	800	Uncommon	Noncombat Items
Unbreakable Arrow	40	Common	Combat Items
Universal Solvent	300	Legendary	Consumables
Veteran's Cane	30	Common	Combat Items
Vicious Weapon	350	Rare	Combat Items
Vorpal Sword	24,000	Legendary	Combat Items
Walloping Ammunition	25	Common	Consumables
Wand of Binding	10,000	Rare	Combat Items
Wand of Conducting	40	Common	Noncombat Items
Wand of Enemy Detection	4,000	Rare	Combat Items
Wand of Fear	10,000	Rare	Combat Items
Wand of Fireballs	32,000	Rare	Combat Items
Wand of Lightning Bolts	32,000	Rare	Combat Items
Wand of Magic Detection	1,500	Uncommon	Noncombat Items
Wand of Magic Missiles	8,000	Uncommon	Combat Items
Wand of Paralysis	16,000	Rare	Combat Items
Wand of Polymorph	32,000	Very Rare	Combat Items
Wand of Pyrotechnics	140	Common	Noncombat Items
Wand of Scowls	80	Common	Noncombat Items
Wand of Secrets	1,500	Uncommon	Noncombat Items
Wand of Smiles	80	Common	Noncombat Items
Wand of the War Mage +1	1,200	Uncommon	Combat Items
Wand of the War Mage +2	4,800	Rare	Combat Items
Wand of the War Mage +3	19,200	Very Rare	Combat Items
Wand of Web	8,000	Uncommon	Combat Items
Weapon +1 (Martial)	1,200	Uncommon	Combat Items
Weapon +1 (Simple)	1,000	Uncommon	Combat Items
Weapon +2 (Martial)	4,800	Rare	Combat Items
Weapon +2 (Simple)	4,000	Rare	Combat Items
Weapon +3 (Martial)	19,200	Very Rare	Combat Items
Weapon +3 (Simple)	16,000	Very Rare	Combat Items
Weapon of Warning	60,000	Uncommon	Combat Items
Wind Fan	1,500	Uncommon	Combat Items
Winged Boots	8,000	Uncommon	Gamechanging Items
Wings of Flying	5,000	Rare	Gamechanging Items`;

var magicItems = [{}];

var magicItemsParsed = magicItemsStandard.split('\n');
console.log(magicItemsParsed);

// set the item limits of each item
var itemLimit = 15;
var itemLimitConsumables = 5;
var itemCountConsumables = 0;
var itemLimitScrolls = 3;
var itemCountScrolls = 0;
var itemLimitPrice = 2000;
var itemPriceRange = false;
var itemLimitRarity = 'Rare';
var itemRarityRange = false;

var shopEl = $('#shop');

// generates properties for each item
function generateMagicItemList(value, index){
    var tempArr = value.split('\t');

    // create space for the next object so long as we don't go over the length of our parsed dataset
    if (magicItems.length < magicItemsParsed.length) { magicItems.push({}); }
    magicItems[index].name = tempArr[0];
    magicItems[index].price = tempArr[1];
    magicItems[index].rarity = tempArr[2];
    magicItems[index].tags = tempArr[3];
}

function randNum(num){
    return Math.floor(Math.random() * num);
}

// creates elements and displays them to the UI
function displayItems(){
    // generates a list of completely random items from our magicItems object
    for(var i = 0; i < itemLimit; i++){
        var randomNumber = randNum(magicItems.length);
        var itemEl = $('<li>');
        itemEl.attr('id', `item-${i}`);
        shopEl.append(itemEl);

        // ensures there are a certain amount of consumable items, based on the initialized variable
        while(!magicItems[randomNumber].tags.includes('Consumables') && itemCountConsumables < itemLimitConsumables){
            console.log(`Consumable ${itemCountConsumables} | ${magicItems[randomNumber].name}`);
            // console.log(magicItems[randomNumber]);
            randomNumber = randNum(magicItems.length);
            if(magicItems[randomNumber].tags.includes('Consumables')){
                itemEl.text(magicItems[randomNumber].name);
                console.log(`Test ${i} | ${itemEl.text()}`);
                itemCountConsumables++;
            }
        }

        // rerolls while the item has the consumable tag because we already populated our consumables
        while(magicItems[randomNumber].tags.includes('Consumables')){
            randomNumber = randNum(magicItems.length);
        }

        
    }
    itemCountConsumables = 0;
}

function init(){
    magicItemsParsed.forEach(generateMagicItemList);
    console.log(magicItems);
    displayItems();
}

init();