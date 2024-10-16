//=============================================================================
// VisuStella MZ - Items & Equips Core
// VisuMZ_1_ItemsEquipsCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_ItemsEquipsCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ItemsEquipsCore = VisuMZ.ItemsEquipsCore || {};
VisuMZ.ItemsEquipsCore.version = 1.54;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.54] [ItemsEquipsCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Items_and_Equips_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Items & Equips Core makes improvements to the RPG Maker MZ item and
 * equipment dedicated scenes (including the shop) and how they're handled.
 * From more item categories, better parameter control, rulings, and more, game
 * devs are able to take control over key aspects of their game's items.
 *
 * Features include all (but not limited to) the following:
 *
 * * Modifying the appearances to the Item Scene, Equip Scene, and Shop Scene.
 * * Categorizing items in unique and multiple categories.
 * * Item Scene and Shop Scene will now display detailed information on items.
 * * NEW! marker can be displayed over recently acquired items in-game.
 * * Equipment notetags to adjust parameters past the editor limitations.
 * * Equipment Rulings to adjust what slot types can and can't be unequipped
 *   and/or optimized.
 * * Equipment Type Handling offers more control over equipment loadouts.
 * * Items sold in shops can be hidden/shown based on Switches.
 * * Items sold in shops can have varying prices adjusted by notetags.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 1 ------
 *
 * This plugin is a Tier 1 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes: New Hard-Coded Features
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Equipment Type Handling
 *
 * - Characters will no longer have one universal equipment slot setting.
 * Classes can have different equipment type loadouts, made possible through
 * the usage of notetags. Also, equipment types of matching names would be
 * treated as the same type, where previously, they would be different types.
 * This means if you have two "Accessory" slots, be it in the form of notetags
 * or through the Database > Types tab, they can both equip the same type of
 * accessories.
 *
 * - The Change Equip event command is now updated to reflect this new change.
 * When processing an equip change, the slot changed will go to the first
 * empty slot of matching type. If all of the actor's matching slot types are
 * equipped, then the equip will replace the last slot available.
 *
 * ---
 *
 * Shop Status Window
 *
 * - The Status Window found in the Shop Scene was originally barren and did
 * not display much information at all. This is changed through this plugin's
 * new features. While the contents of the Shop Status Window can be customized
 * through the Plugin Parameters, it is a change that cannot be reversed and
 * for the better since it gives players the much needed information revolving
 * around the game's items.
 *
 * ---
 *
 * Core Engine Compatibility: Modern Controls
 *
 * - If the VisuStella Core Engine is added to your game with Modern Controls
 * enabled, then the Item Menu Scene, Equip Menu Scene, and Shop Menu Scene's
 * controls will be changed a bit.
 *
 * - The Item Menu Scene will automatically have the Item List Window active,
 * with using the Left/Right (for single column) or Page Up/Page Down (for
 * multi-columns) to navigate between the Item Categories. Similar will occur
 * when trying to sell items in the Shop Menu Scene.
 *
 * - The Equip Menu Scene will automatically have the Equip Slots Window active
 * and only activate the command window upon moving up to it.
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 * 
 * ---
 * 
 * VisuMZ_1_BattleCore
 * 
 * Changing the "Damage Multiplier" or "Healing Multiplier" vocabulary for the
 * Item and Equip Core's Shop Status Window is not done with the Item and Equip
 * Core's Plugin Parameters if you have the Battle Core installed.
 * 
 * Instead, go to Battle Core's Plugin Parameters, Damage Settings, Damage
 * Styles, and adjust the style's version of the "Damage Multiplier" or
 * "Healing Multiplier" text instead.
 * 
 * Why does this work this way? Because not all damage styles work off
 * "Multipliers" so in order for it to convey the proper message to the player,
 * each damage style has its own vocabulary to be more accurate.
 * 
 * In case you forget about that, when you visit the Item and Equip Core's
 * plugin parameters for these, it should also remind you in the parameter's
 * description on where to change it.
 * 
 * ---
 *
 * VisuMZ_2_WeaponSwapSystem
 *
 * The custom equip slots feature from the VisuStella MZ Items and Equips Core
 * allowed you to add in extra weapon slots. This is now curated up to a max
 * of one weapon slot per character. This needs to be done to make the Weapon
 * Swap System viable.
 *
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 * 
 * ---
 *
 * === General ===
 * 
 * These notetags affect the Items, Weapons, and Armors on a general scale.
 *
 * ---
 *
 * <Max: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the maximum quantity that can be held for this item.
 * - Replace 'x' with a number value to determine the maximum amount.
 *
 * ---
 *
 * <Color: x>
 * <Color: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor, Skill Notetags
 * - Determines the color of the object inside the in-game menus.
 * - Replace 'x' with a number value depicting a window text color.
 * - Replace 'rrggbb' with a hex color code for a more custom color.
 *
 * ---
 *
 * <Category: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace 'x' with a category name to mark this item as.
 *
 * ---
 *
 * <Categories>
 *  x
 *  x
 * </Categories>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Arranges items into certain/multiple categories to work with the Category
 *   Plugin Parameter setting: "Category:x".
 * - Replace each 'x' with a category name to mark this item as.
 *
 * ---
 * 
 * <Conserve: x%>
 * 
 * - Used for: Item
 * - Gives the item a percent chance when used to not consume the item.
 * - Replace 'x' with a number representing the percent chance to successfully
 *   conserve the item.
 * - If an item cannot be consumed, conserve chance will be 100% regardless.
 * 
 * ---
 * 
 * <ID Sort Priority: x>
 * 
 * - Used for: Item, Weapon, and Armor Notetags
 * - Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *   option (only when selling).
 * - Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 *   - Default priority level is '50'.
 * - Items, weapons, and armors with higher priority values will be sorted
 *   higher up on the list while lower values will be lower on the list.
 * 
 * ---
 *
 * === Item Accessibility Notetags ===
 *
 * The following notetags allow you to choose when items can/cannot be used
 * based on switches.
 *
 * ---
 *
 * <Enable Switch: x>
 *
 * <Enable All Switches: x,x,x>
 * <Enable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be disabled until all
 *   switches are ON. Then, it would be enabled.
 * - If 'Any' notetag variant is used, item will be enabled if any of the
 *   switches are ON. Otherwise, it would be disabled.
 *
 * ---
 *
 * <Disable Switch: x>
 *
 * <Disable All Switches: x,x,x>
 * <Disable Any Switches: x,x,x>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on switches.
 * - Replace 'x' with the switch ID to determine the item's enabled status.
 * - If 'All' notetag variant is used, item will be enabled until all switches
 *   are ON. Then, it would be disabled.
 * - If 'Any' notetag variant is used, item will be disabled if any of the
 *   switches are ON. Otherwise, it would be enabled.
 *
 * ---
 *
 * === JavaScript Notetags: Item Accessibility ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * determine if an item can be accessible by code.
 *
 * ---
 *
 * <JS Item Enable>
 *  code
 *  code
 *  enabled = code;
 * </JS Item Enable>
 *
 * - Used for: Item Notetags
 * - Determines the enabled status of the item based on JavaScript code.
 * - If the actor this is disabled for is the only party member, it will not be
 *   visible in the item list unless the VisuStella Battle Core is installed.
 *   - If the VisuStella Battle Core is installed, then all battle scope items
 *     will be visible even if they're disabled.
 * - Replace 'code' to determine the type enabled status of the item.
 * - The 'enabled' variable returns a boolean (true/false) to determine if the
 *   item will be enabled or not.
 * - The 'user' variable refers to the user with the item.
 * - The 'item' variable refers to the item being checked.
 * - All other item conditions must be met in order for this to code to count.
 *
 * ---
 *
 * === Equipment Notetags ===
 *
 * The following notetags provide equipment-related effects from deciding what
 * equip slots can be given to classes to the base parameter changes asigned
 * to weapons and armors.
 *
 * ---
 *
 * <Equip Slots>
 *  slotName
 *  slotName
 *  slotName
 * </Equip Slots>
 *
 * - Used for: Class Notetags
 * - Changes the equipment slot loadout for any actor who is that class.
 * - Replace 'slotName' with an Equipment Type name from Database > Types.
 *   This is case-sensitive.
 * - Insert or remove as many "slotName" equipment types as needed.
 *
 * ---
 *
 * <param: +x>
 * <param: -x>
 *
 * - Used for: Weapon, Armor Notetags
 * - Changes the base parameter value for the equip item.
 * - Replace 'param' with any of the following: 'MaxHP', 'MaxMP', 'ATK', 'DEF',
 *   'MAT', 'MDF', 'AGI', or 'LUK' to change that specific parameter's value.
 *   - These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * - Replace 'x' with a number value to set the parameter value to.
 * - This allows you to bypass the Database Editor's number limitations.
 *
 * ---
 * 
 * <Equip Copy Limit: x>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Sets a maximum number of copies that the actor can wear of this equipment.
 * - Replace 'x' with a number value to determine the copy limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: Actors can only equip one copy of the "One-of-a-Kind Ring"
 *   on at any time despite having empty accessory slots because the ring has a
 *   <Equip Copy Limit: 1> notetag.
 * 
 * ---
 * 
 * <Equip Weapon Type Limit: x>
 * 
 * - Used for: Weapon
 * - This weapon cannot be equipped with other weapons of the same type once
 *   the limited amount has been reached.
 * - Replace 'x' with a number value to determine the weapon type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: A dualwielding warrior who can only equip one sword and a
 *   dagger but never two swords or two daggers because the swords and daggers
 *   all have the <Equip Weapon Type Limit: 1> notetags on them.
 * 
 * ---
 * 
 * <Equip Armor Type Limit: x>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped with other armors of the same type once the
 *   limited amount has been reached.
 * - Replace 'x' with a number value to determine the armor type limit.
 * - This can be bypassed using Event Commands and/or Script Calls.
 * - Usage Example: People cannot equip more than two glove accessories on at a
 *   time because the glove is a "Glove" armor-type and each glove item has the
 *   <Equip Armor Type Limit: 2> notetags on them.
 * 
 * ---
 * 
 * <Party Artifact>
 * <Troop Artifact>
 * 
 * <Stackable Party Artifact>
 * <Stackable Troop Artifact>
 * 
 * - Used for: Armor
 * - This armor cannot be equipped at all. However, by simply being in the
 *   party's inventory, its parameter bonuses and traits will be applied
 *   globally throughout the whole party or troop (depending on the notetag).
 * - Add both notetags to affect both groups.
 * - The normal versions of the notetag is only applied once regardless of the
 *   number of copies are found in the party's inventory.
 * - The stackable versions of the notetag will have the bonuses and traits
 *   stacked multiple times relative to the number of copies found in the
 *   party's inventory.
 * - This item will NOT be added during the setup phase for Battle Tests.
 *   - If you want to add the item, do it manually.
 * 
 * ---
 * 
 * <Equip For Class Only: x>
 * <Equip For Classes Only: x, x, x>
 * <Equip For Class Only: name>
 * <Equip For Classes Only: name, name, name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - This piece of equipment can only be worn by members with 'x' as the main
 *   class. If there are multiple classes listed, at least one of them need to
 *   be the actor's main class.
 * - Replace 'x' with a number representing the ID of the class required.
 * - For the 'name' variant, replace 'name' with the name of the required class
 *   the actor needs to have in order to equip this object.
 * 
 * ---
 * 
 * <Equip Requirements>
 *  requirement
 *  requirement
 *  requirement
 * </Equip Requirements>
 * 
 * - Used for: Weapon, Armor Notetags
 * - Defines a requirement(s) for the actor to meet in order for the equip item
 *   to be equippable.
 * - Failure to meet these requirements will cause the equipment to unequip
 *   automatically.
 *   - Keep in mind that in some cases, this will not happen immediately.
 *     Things like switches will require the actor to meet its cache clear
 *     in order to trigger the automatic unequip.
 *   - Some ways to trigger a cache clear would be to change the actor's HP/MP,
 *     or adding and then removing a state for the actor (preferrably an unused
 *     state that has no real effect).
 * - Replace 'requirement' with one of the settings bellow:
 * - Add multiple 'requirement' lines for more requirements.
 * 
 *   Requirements:
 *
 *   param > x
 *   param >= x
 *   param === x
 *   param <= x
 *   param < x
 *   - Replace 'param' with 'level', 'maxhp', 'maxmp', 'atk', 'def', 'mat',
 *     'mdf', 'agi', or 'luk'.
 *   - This will make the piece of equipment require the actor's base parameter
 *     to be greater than (>), greater than or equal to (>=), equal to (===),
 *     less than or equal to (<=), or less than (<).
 *   - This is NOT the value for the total parameter, only the base parameter.
 *   - The base parameter is calculated by the user's class parameter value and
 *     any bonuses received through permanent stat increases.
 *
 *   learned skill: x
 *   learned skill: name
 *   - This will make the piece of equipment require the actor to have learned
 *     skill 'x'. 
 *   - If 'name' is used, priority will be given to the skill with the highest
 *     ID in the database.
 *   - The actor needs to have LEARNED the skill. This means that if you have
 *     added a skill to the actor's kit through a trait, it will not count.
 *
 *   switch: x
 *   - This will require switch X to be on.
 *   - If it isn't, the piece of equipment cannot be worn.
 *   - Insert multiple of these to add more switches that are are required to
 *     be on.
 * 
 *   ***NOTE 1***
 *   There is no "class: x" for these equip requirements. Instead, use the
 *   <Equip For Class Only: x> notetags.
 * 
 *   ***NOTE 2***
 *   For those wondering where "unique only" is, that does not exist in this
 *   plugin. Instead, use the <Equip Copy Limit: x> notetag listed above.
 * 
 *   Example A:
 * 
 *     <Equip Requirements>
 *     level >= 20
 *     </Equip Requirements>
 * 
 *     - Requires the user to be at least level 20 in order to equip.
 * 
 *   Example B:
 * 
 *     <Equip Requirements>
 *     atk >= 50
 *     def <= 50
 *     </Equip Requirements>
 *     - Requires the user have at least 50 base ATK to equip.
 *     - Requires the user to be under 50 base DEF to equip.
 * 
 * ---
 * 
 * <Added EType: x>
 * <Added ETypes: x, x, x>
 * 
 * - Used for: Armor Notetags
 * - This is for armors only and does NOT work with weapons!
 * - Allows a piece of armor to belong to multiple ETypes. This means a glove
 *   can be equipped as "Armgear" or as an "Accessory" if you so choose.
 * - Replace 'x' with a number representing the ID of the EType you wish to add
 *   to the list of ETypes.
 *   - Insert multiple 'x' entries to add more than one EType ID.
 * 
 * ---
 * 
 * <Cursed>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this weapon or armor is equipped, it cannot manually be removed by the
 *   player until it is purified.
 * - To remove it, it must be done by event commands, script calls, or through
 *   the Purify-related Plugin Commands provided by this plugin.
 * - Once purified, the weapon or armor will become unequipped unless it has a
 *   purify transformation.
 *   - If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * - If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become cursed
 *   in order to allow free weapon swapping. Weaponry will not be cursed
 *   if VisuMZ_2_WeaponSwapSystem is installed.
 * 
 * ---
 * 
 * <Purify Transform: id>
 * <Purify Transform: name>
 * 
 * - Used for: Weapon, Armor Notetags
 * - If this notetag is present on a <Cursed> weapon or armor, then upon the
 *   actor receiving purification, the weapon or armor will transform into a
 *   different item.
 * - Replace 'id' with a number representing the transformed weapon/armor's ID.
 * - Replace 'name' with text representing the transformed weapon/armor's name.
 * - Weapons can only transform into weapons.
 * - Armors can only transform into armors.
 * 
 * ---
 *
 * === JavaScript Notetags: Equipment ===
 *
 * The following are notetags made for users with JavaScript knowledge to
 * adjust the parameter through code.
 *
 * ---
 *
 * <JS Parameters>
 *  MaxHP = code;
 *  MaxMP = code;
 *  ATK = code;
 *  DEF = code;
 *  MAT = code;
 *  MDF = code;
 *  AGI = code;
 *  LUK = code;
 * </JS Parameters>
 *
 * - Used for: Weapon, Armor Notetags
 * - Uses JavaScript to determine the values for the basic parameters based on
 *   the code used to calculate its value.
 * - The variables 'MaxHP', 'MaxMP', 'ATK', 'DEF', 'MAT', 'MDF', 'AGI', and
 *   'LUK' are used to determine the finalized value of the parameter. This
 *   variable is case sensitive.
 * - If a parameter is not present, its value will be treated as +0.
 * 
 * '''WARNING!''' If you are trying to calculate a value based off a full
 * parameter value, such as "ATK = user.atk * 0.10", it's going to break and
 * will cause an infinite loop. Use base parameter values instead.
 *
 * ---
 *
 * === Status Window Notetags ===
 *
 * The following notetags will affect the Shop Status Window info. If for any
 * reason the data that is displayed is not to your liking or insufficient,
 * you can change it up using the following notetags.
 *
 * ---
 *
 * <Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Status Info>
 *
 * - Used for: Skill, Item Notetags
 * - If you do not like the generated data that's displayed, you can change it
 *   using this notetag to display what you want.
 * - Replace 'key' with one of the following:
 *   - Consumable
 *   - Quantity
 *   - Occasion
 *   - Scope
 *   - Speed
 *   - Success Rate
 *   - Repeat
 *   - Hit Type
 *   - Element
 *   - Damage Multiplier
 *   - HP Recovery
 *   - MP Recovery
 *   - TP Recovery
 *   - HP Damage
 *   - MP Damage
 *   - TP Damage
 *   - User TP Gain
 *   - Added Effects
 *   - Removed Effects
 * - Replace 'data' with the text data you want to visually appear. You may use
 *   text codes for this.
 * - This only affects info entries that are already visible and won't make
 *   other categories suddenly appear.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 *
 * <Custom Status Info>
 *  key: data
 *  key: data
 *  key: data
 * </Custom Status Info>
 *
 * - Used for: Skill, Item
 * - If you want custom categories and data to be displayed for your items that
 *   aren't provided by the Shop Status Window Info to begin with, you can use
 *   this notetag to add in your own entries.
 * - Replace 'key' with text of the exact label you want. You may use text
 *   codes for this.
 * - Replace 'data' with text of the exact text data you want. You may use text
 *   codes for this.
 * - Insert or remove as many "key: data" lines as needed.
 *
 * ---
 * 
 * <Shop Picture Name: filename>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Enables a shop picture for the status window. This image can be seen in
 *   the item scene, shop scene, and skill scene if enabled.
 * - If this notetag is not used, there will be no image.
 * - Replace 'filename' with the filename of the graphic to use from the game
 *   project's img/pictures/ folder. Filenames are case sensitive. Leave out
 *   the filename extension from the notetag.
 * - Use the supporting notetags to determine where the image appears. If not,
 *   they will default to the background, fit to the window dimensions,
 *   centered at the middle of the window.
 * 
 * ---
 * 
 * <Shop Picture Layer: Background>
 * <Shop Picture Layer: Foreground>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines which layer the graphic will be drawn on.
 * - If the background layer is selected, the picture will appear behind the
 *   data text.
 * - If the foreground layer is selected, the picture will appear in front of
 *   the data text.
 * - If this notetag is not used, it will default to the background layer.
 * 
 * ---
 * 
 * <Shop Picture Max Width: x>
 * <Shop Picture Max Height: y>
 * <Shop Picture Max Dimensions: x, y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Determines the maximum width and/or height for the image.
 * - This means the image will be automatically scaled proportionally to that
 *   width or height as long as everything else does not break boundaries.
 * - Replace 'x' and 'y' with number values representing the maximum dimensions
 *   the image can be in pixels.
 * - If these notetags are not used, the image will be automatically scaled to
 *   the dimensions of the shop status window.
 * 
 * ---
 * 
 * <Shop Picture Alignment: Left>
 * <Shop Picture Alignment: Center>
 * <Shop Picture Alignment: Right>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the horizontal alignment for the image.
 * - Left, center, right determines how it's aligned horizontally if the
 *   image does not horizontally fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'center' alignment.
 * 
 * ---
 * 
 * <Shop Picture Position: Top>
 * <Shop Picture Position: Middle>
 * <Shop Picture Position: Bottom>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the vertical position for the image.
 * - Top, middle, bottom determines how it's positioned vertically if the
 *   image does not vertically fit in the width of the window.
 * - If any of these notetags are not used, the image will default to the
 *   'middle' position.
 * 
 * ---
 * 
 * <Shop Picture Offset X: +x>
 * <Shop Picture Offset X: -x>
 * 
 * <Shop Picture Offset Y: +y>
 * <Shop Picture Offset Y: -y>
 * 
 * <Shop Picture Offset: +x, +y>
 * <Shop Picture Offset: -y, -y>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Offsets the X and Y positions of the image in the shop status window.
 * - X offsets adjust the horizontal position by x pixels.
 *   - Positive goes right.
 *   - Negative goes left.
 * - Y offsets adjust the horizontal position by y pixels.
 *   - Positive goes down.
 *   - Negative goes up.
 * - Replace 'x' and 'y' with number values representing the pixels to offset
 *   the image by. The '+' and '-' signs are required.
 * - If none of these notetags are used, there will be no offsets.
 * 
 * ---
 * 
 * <Shop Picture Opacity: x>
 * <Shop Picture Opacity: x%>
 * 
 * - Used for: Skill, Item, Weapon, Armor Notetags
 * - Adjusts the opacity of the image used.
 * - When using 'x' and not 'x%', use a number between 0 and 255.
 *   - The closer to 0, the more transparent the image is.
 *   - The closer to 255, the more opaque the image is.
 * - When using 'x%' and not 'x', use a number between 0% and 100%.
 *   - The closer to 0%, the more transparent the image is.
 *   - The closer to 100%, the more opaque the image is.
 * 
 * ---
 *
 * === Shop Menu Notetags ===
 *
 * These notetags adjust how prices and such are managed inside the Shop Menu
 * as well as whether or not some items are visible depending on switch states.
 *
 * ---
 *
 * <Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Adjusts the buying price for this item.
 * - Replace 'x' with a number depicting the desired value for the buy price.
 * - This allows you to bypass the RPG Maker MZ editor's limitation of 999,999.
 *
 * ---
 *
 * <Can Sell>
 * <Cannot Sell>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Makes the item either always sellable or cannot be sold.
 * - This bypasses the game's internal hard-coding to prevent items with a
 *   price of 0 from being able to be sold.
 * - This bypasses the game's internal hard-coding to always allow items with
 *   a price value of being able to be sold.
 *
 * ---
 *
 * <Sell Price: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the sell price to be something different than the default amount.
 * - Replace 'x' with a number depicting the desired value for the sell price.
 *
 * ---
 *
 * <Show Shop Switch: x>
 *
 * <Show Shop All Switches: x,x,x>
 * <Show Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be hidden until all switches
 *   are ON. Then, it would be shown.
 * - If 'Any' notetag variant is used, item will be shown if any of the
 *   switches are ON. Otherwise, it would be hidden.
 *
 * ---
 *
 * <Hide Shop Switch: x>
 *
 * <Hide Shop All Switches: x,x,x>
 * <Hide Shop Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the visibility of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's visibility.
 * - If 'All' notetag variant is used, item will be shown until all switches
 *   are ON. Then, it would be hidden.
 * - If 'Any' notetag variant is used, item will be hidden if any of the
 *   switches are ON. Otherwise, it would be shown.
 *
 * ---
 *
 * <Cannot Sell Switch: x>
 *
 * <Cannot Sell All Switches: x,x,x>
 * <Cannot Sell Any Switches: x,x,x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Determines the sellability of the shop item based on switches.
 * - Replace 'x' with the switch ID to determine the shop item's sellability.
 * - If 'All' notetag variant is used, item cannot be sold until all switches
 *   are ON. Otherwise, it can be sold.
 * - If 'Any' notetag variant is used, item cannot be sold if any of the
 *   switches are ON. Otherwise, it can be sold.
 *
 * ---
 * 
 * <Buy Turn On Switch: x>
 * <Buy Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon buying.
 * 
 * ---
 * 
 * <Buy Turn Off Switch: x>
 * <Buy Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is bought in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon buying.
 * 
 * ---
 * 
 * <Sell Turn On Switch: x>
 * <Sell Turn On Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn on the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn on.
 *   - Insert multiple 'x' values to turn on multiple switches upon selling.
 * 
 * ---
 * 
 * <Sell Turn Off Switch: x>
 * <Sell Turn Off Switches: x, x, x>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - When this item, weapon, or armor is sold in the shop scene, turn off the
 *   switch(es) 'x'.
 * - Replace 'x' with a number representing the ID of the switch to turn off.
 *   - Insert multiple 'x' values to turn off multiple switches upon selling.
 * 
 * ---
 *
 * === JavaScript Notetags: Shop Menu ===
 *
 * The following are notetags made for users with JavaScript knowledge. These
 * notetags are primarily aimed at Buy and Sell prices.
 *
 * ---
 *
 * <JS Buy Price>
 *  code
 *  code
 *  price = code;
 * </JS Buy Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the buying 'price' of the item.
 * - Insert the final buy price into the 'price' variable.
 * - The 'item' variable refers to the item being bought.
 *
 * ---
 *
 * <JS Sell Price>
 *  code
 *  code
 *  price = code;
 * </JS Sell Price>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Replace 'code' to determine the selling 'price' of the item.
 * - Insert the final sell price into the 'price' variable.
 * - The 'item' variable refers to the item being sold.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Actor Plugin Commands ===
 * 
 * ---
 *
 * Actor: Change Equip Slots
 * - Forcefully change the actor(s) equip slots.
 * - These will persist through class changes.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 *   Equip Slots:
 *   - Insert the equip slots you want the actor(s) to have.
 *   - These entries are case-sensitive.
 *
 * ---
 *
 * Actor: Reset Equip Slots
 * - Reset any forced equip slots for the actor(s).
 * - Equip slots will then be based on class.
 *
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 *
 * ---
 * 
 * === Purify Plugin Commands ===
 * 
 * ---
 * 
 * Purify: Target Actor(s)
 * - Purifies target actor(s) of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 *   Actor ID(s):
 *   - Select which Actor ID(s) to affect.
 * 
 * ---
 * 
 * Purify: Whole Party
 * - Purifies whole party of any cursed weapons or armors.
 * - Cannot be used in battle.
 * 
 * ---
 * 
 * === Shop Plugin Commands ===
 * 
 * ---
 *
 * Shop: Advanced
 * - Make it easier to put together inventories for a shop.
 * - WARNING: Does not allow for event-specific prices.
 *
 *   Step 1: Item ID's
 *   - Select which Item ID ranges to add.
 *
 *   Step 2: Weapon ID's
 *   - Select which Weapon ID ranges to add.
 *
 *   Step 3: Armor ID's
 *   - Select which Armor ID ranges to add.
 *
 *   Step 4: Purchase Only?
 *   - Make the shop purchase-only?
 * 
 *   Optional:
 * 
 *     Blacklist
 *     - A list of categories to blacklist from the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 * 
 *     Whitelist
 *     - A list of categories to whitelist for the shop.
 *     - Not used if empty. Mark categories with <Category: x>
 *
 * This Plugin Command primarily functions as an alternative to the editor's
 * "Shop Processing" event command as that one requires you to add items one at
 * a time, making it extremely tedious to add large amounts of items. This
 * Plugin Command will mitigate that by allowing ID ranges to determine which
 * items to make available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Menu Settings
 * ============================================================================
 *
 * The Item Menu Settings allow you to adjust specifics on how key objects and
 * windows in the Item Menu Scene operate.
 *
 * ---
 *
 * General Window
 *
 *   Use Updated Layout:
 *   - Use the Updated Item Menu Layout provided by this plugin?
 *   - This will automatically enable the Status Window.
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 *
 * List Window
 * 
 *   Columns:
 *   - Number of maximum columns.
 *   - If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *
 * ---
 *
 * Item Quantity
 *
 *   Item Max:
 *   Weapon Max:
 *   Armor Max:
 *   - The default maximum quantity for items, weapons, and/or armors.
 * 
 *   Quantity Format:
 *   - How to display an item's quantity.
 *   - %1 - Item Quantity
 *
 *   Font Size:
 *   - Default font size for item quantity.
 *
 * ---
 *
 * Shop Status Window
 * 
 *   Show in Item Menu?:
 *   - Show the Shop Status Window in the Item Menu?
 *   - This is enabled if the Updated Layout is on.
 *
 *   Adjust List Window?:
 *   - Automatically adjust the Item List Window in the Item Menu if using the
 *     Shop Status Window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 *     - 0 - Window
 *     - 1 - Dim
 *     - 2 - Transparent
 *
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this Status Window in the
 *     Item Menu.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Switch Category:
 *   - Button assist text used for switching categories.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Item Categories
 * ============================================================================
 *
 * Item Categories appear both in the Item Menu Scene and Shop Menu Scene (but
 * only under the Sell command). These Plugin Parameters give you the ability
 * to add in the specific categories you want displayed, remove the ones you
 * don't, and associate them with icons.
 *
 * ---
 *
 * List
 *
 *   Category List
 *   - A list of the item categories displayed in the Item/Shop menus.
 * 
 *     Type:
 *     - A list of the item categories displayed in the Item/Shop menus.
 *     - Replace x with ID numbers or text.
 *     - AllItems, RegularItems, KeyItems
 *     - HiddenItemA, HiddenItemB
 *     - Consumable, Nonconsumable
 *     - AlwaysUsable, BattleUsable, FieldUsable, NeverUsable
 *     - AllWeapons, WType:x
 *     - AllArmors, AType:x, EType:x
 *     - Category:x
 * 
 *     Icon:
 *     - Icon used for this category.
 *     - Use 0 for no icon.
 * 
 *     Visibility Switch:
 *     - This Switch must be turned ON in order for the category to show.
 *     - Use 0 for no Switch requirement.
 * 
 *     Sort By:
 *     - Sort this category (in Scene_Item and Scene_Shop only) this way.
 *
 *   Style:
 *   - How do you wish to draw categorie entries in the Category Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 *
 *   Text Alignment
 *   - Decide how you want the text to be aligned.
 *
 * ---
 *
 * Vocabulary
 *
 *   Hidden Item A
 *   Hidden Item B
 *   Consumable
 *   Nonconsumable
 *   Always Usable
 *   Battle Usable
 *   Field Usable
 *   Never Usable
 *   - How these categories are named in the Item Menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: NEW! Labels
 * ============================================================================
 *
 * Whenever the player receives a new item(s), a NEW! Label can be placed on
 * top of the item's icon when browsing a menu displaying the item(s). This is
 * a quality of life addition from more modern RPG's to help players figure out
 * what they've recently received. The following are Plugin Parameters made to
 * adjust how the NEW! Labels are handled in-game.
 *
 * ---
 *
 * NEW! Labels
 * 
 *   Use NEW! Labels?:
 *   - Use the NEW! Labels or not?
 * 
 *   Icon:
 *   - The icon index used to represent the NEW! text.
 *   - Use 0 to not draw any icons.
 * 
 *   Text:
 *   - The text written on the NEW! Label.
 * 
 *     Font Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *     Font Size:
 *     - The font size used for the NEW! text.
 * 
 *   Fade Limit:
 *   - What's the upper opaque limit before reversing?
 * 
 *   Fade Speed:
 *   - What's the fade speed of the NEW! Label?
 * 
 *   Offset X:
 *   - How much to offset the NEW! Label's X position by.
 * 
 *   Offset Y:
 *   - How much to offset the NEW! Label's Y position by.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Equip Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters adjust the Equipment Menu Scene, ranging from using
 * a more updated and modern layout, changing the styles of other windows, and
 * other key visual aspects of the Equip Menu Scene. Other settings here allow
 * you to adjust how equipment operate under certain rulings, too.
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Equip Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 * 
 *     Param Font Size:
 *     - The font size used for parameter values.
 * 
 *     Show Menu Portraits?:
 *     - If Main Menu Core is installed, display the Menu Portraits instead of
 *       the actor's face in the status window?
 * 
 *     JS: Portrait Upper:
 *     - If Menu Portraits are available, this is code used to draw the upper
 *       data like this in the Status Window.
 * 
 *     JS: Face Upper:
 *     - If faces used used, this is code used to draw the upper data like this
 *       in the Status Window.
 * 
 *     JS: Parameter Lower:
 *     - Code to determine how parameters are drawn in the Status Window.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 * 
 *   Status Window Width:
 *   - The usual width of the status window if using the non-Updated Equip
 *     Menu Layout.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 * 
 *   Cursed Equip Popup:
 *   - Text popup appears when an actor equips a cursed weapon/armor.
 *   - Text codes allowed.
 *   - Requires VisuMZ_0_CoreEngine!
 *   - Empty to not use.
 *   -  %1 - Actor, %2 - Equip, %3 - Icon.
 *
 * ---
 *
 * Command Window
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Equip Icon:
 *   - The icon used for the Equip command.
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *   Add Optimize Command?:
 *   - Add the "Optimize" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Optimize Icon:
 *     - The icon used for the Optimize command.
 * 
 *   Add Clear Command?:
 *   - Add the "Clear" command to the Command Window?
 * 
 *     Help Description:
 *     - Help description used when this command is selected.
 *     - Text codes allowed.
 * 
 *     Clear Icon:
 *     - The icon used for the Clear command.
 *
 * ---
 *
 * Remove Equip
 * 
 *   Icon:
 *   - Icon used for equipment removal.
 * 
 *   Text:
 *   - Text used for equipment removal.
 * 
 *   Use SHIFT Shortcut?:
 *   - Add the "Shift" button as a shortcut key to removing items?
 *
 * ---
 *
 * Rulings
 * 
 *   Equip-Adjust HP/MP:
 *   - Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * 
 *   Non-Removable Types:
 *   - Insert ID's of the Equipment Types that must always have an item
 *     equipped and cannot be empty.
 * 
 *   Non-Optimized Types:
 *   - Insert ID's of the Equipment Types that will be ignored when equipment
 *     is being optimized.
 *
 * ---
 *
 * Button Assist Window
 *
 *   SHIFT: Remove:
 *   - Button assist text used for the SHIFT Remove Shortcut.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Menu Settings
 * ============================================================================
 *
 * These Plugin Parameters allow you a number of options to adjust the Shop
 * Menu Scene. These options range from enabling an updated and modern layout,
 * adjust how various key visual aspects appear, and determine how prices can
 * be affected when it comes to selling them or buying them (for coders).
 *
 * ---
 *
 * General
 * 
 *   Use Updated Layout:
 *   - Use the Updated Shop Layout provided by this plugin?
 *   - This will override the Core Engine windows settings.
 *
 *   Layout Style:
 *   - If using an updated layout, how do you want to style the menu scene?
 *     - Upper Help, Left Input
 *     - Upper Help, Right Input
 *     - Lower Help, Left Input
 *     - Lower Help, Right Input
 *
 * ---
 * 
 * Switches:
 * 
 *   Switch: Buy:
 *   - Buying items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 *   Switch: Sell
 *   - Selling items in the Shop Scene turns this Switch to ON.
 *   - Switch reverts to OFF whenever the Shop Scene opens.
 * 
 * ---
 *
 * Command Window
 * 
 *   Hide Unavailable?:
 *   - Hide all unavailable commands like when a shop is set to Purchase Only?
 * 
 *   Style:
 *   - How do you wish to draw commands in the Command Window?
 *   - Text Only: Display only the text.
 *   - Icon Only: Display only the icon.
 *   - Icon + Text: Display the icon first, then the text.
 *   - Auto: Determine which is better to use based on the size of the cell.
 * 
 *   Text Align:
 *   - Text alignment for the Command Window.
 * 
 *   Buy Icon:
 *   - The icon used for the Buy command.
 * 
 *   Sell Icon:
 *   - The icon used for the Sell command.
 * 
 *   Cancel Icon:
 *   - The icon used for the Cancel command.
 * 
 *   Rename "Cancel":
 *   - Rename Cancel to something more logical for the Shop Menu Scene.
 *
 * ---
 *
 * Prices
 * 
 *   Sell Price Rate:
 *   - The default sell price rate.
 * 
 *   JS: Buy Price:
 *   - Modificatons made to the buy price before finalizing it.
 * 
 *   JS: Sell Price:
 *   - Modificatons made to the sell price before finalizing it.
 *
 * ---
 *
 * Button Assist Window
 *
 *   Small Increment:
 *   Large Increment:
 *   - Text used for changing amount bought/sold.
 *   - For VisuStella MZ's Core Engine's Button Assist Window.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Shop Status Window
 * ============================================================================
 *
 * These Plugin Parameters focuses on the Shop Status Window and determines how
 * its data is displayed.
 *
 * ---
 *
 * General
 * 
 *   Window Width:
 *   - The usual width of the status window.
 * 
 *   Parameter Font Size:
 *   - Font size used for parameter changes.
 * 
 *   Translucent Opacity:
 *   - Opacity setting used for translucent window objects.
 * 
 *   Show Back Rectangles?:
 *   - Show back rectangles of darker colors to display information better?
 * 
 *     Back Rectangle Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors
 *       from the Window Skin.
 *
 * ---
 *
 * Equipment Data
 * 
 *   Already Equipped:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Can't Equip:
 *   - Marker used to show an actor cannot equip an item.
 * 
 *   Delay MS:
 *   - How many milliseconds (MS) to delay the preview update?
 *   - This is to prevent lag spikes for equips only.
 * 
 *   No Changes:
 *   - Marker used to show no changes have occurred.
 * 
 *   JS: Draw Equip Data:
 *   - Code used to draw the equipment data for the Shop Status Window.
 *
 * ---
 *
 * Item Data
 * 
 *   Max State/Buff Icons:
 *   - Maximum number of icons that can be displayed for Add/Remove
 *     States/Buffs.
 * 
 *   Multiplier Standard:
 *   - Constant standard to filter out random values when calculating the
 *     damage multiplier.
 * 
 *   JS: Draw Item Data:
 *   - Code used to draw the item data for the Shop Status Window.
 *
 * ---
 *
 * Vocabulary
 * 
 *   Consumable:
 *   Occasions:
 *   Scope:
 *   Speed:
 *   Success Rate:
 *   Repeats:
 *   Hit Type:
 *   Element:
 *   Damage Type:
 *   Effects:
 *   - Vocabulary used for these data entries.
 *   - Some of these have Plugin Parameters have sub-entries.
 * 
 *   NOTE: Regarding Damage Labels
 * 
 *   If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * 
 *   Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.54: October 17, 2024
 * * Feature Update!
 * ** If "Modern Controls" is selected while "Remove Equip" and "Optimize" are
 *    gone from the Equip Menu, right click will exit the menu. Feature added
 *    by Arisu.
 * 
 * Version 1.53: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added warning to <JS Parameters>:
 * *** If you are trying to calculate a value based off a full parameter value,
 *     such as "ATK = user.atk * 0.10", it's going to break and will cause an
 *     infinite loop. Use base parameter values instead.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <ID Sort Priority: x>
 * **** Used for Scene_Item, Scene_Equip, Scene_Battle, and Scene_Shop's sell
 *      option (only when selling).
 * **** Changes sorting priority by ID for item, weapon, or armor to 'x'. 
 * **** Default priority level is '50'.
 * **** Items, weapons, and armors with higher priority values will be sorted
 *      higher up on the list while lower values will be lower on the list.
 * 
 * Version 1.52: May 16, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Parameters > Item Categories > Category List > Category > Sorted By:
 * **** You can now sort specific item categories by ID or Name.
 * **** Only usable within Scene_Item and Scene_Shop.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.51: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an item is unequipped, it may cause a crash. Fix
 *    made by Arisu.
 * ** Fixed a bug where <Proxy: id> did not properly give the proxy item. Fix
 *    made by Arisu.
 * 
 * Version 1.50: November 16, 2023
 * * Bug Fixes!
 * ** <JS Buy Price> and <JS Sell Price> was not working properly. Fix made
 *    by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * * New Features!
 * ** New Notetags added by Arisu:
 * *** <Cursed>
 * **** If this weapon or armor is equipped, it cannot manually be removed by
 *      the player until it is purified.
 * **** To remove it, it must be done by event commands, script calls, or
 *     through the Purify-related Plugin Commands provided by this plugin.
 * **** Once purified, the weapon or armor will become unequipped unless it has
 *     a purify transformation.
 * **** If the newly transformed weapon/armor is equippable, it will remain in
 *     the actor's equipment slots.
 * **** If you are using VisuMZ_2_WeaponSwapSystem, weapons cannot become
 *      cursed in order to allow free weapon swapping. Weaponry will not be
 *      cursed if VisuMZ_2_WeaponSwapSystem is installed.
 * *** <Purify Transform: id>
 * *** <Purify Transform: name>
 * **** If this notetag is present on a <Cursed> weapon or armor, then upon the
 *      actor receiving purification, the weapon or armor will transform into a
 *      different item.
 * ** New Plugin Commands added by Arisu:
 * *** Purify: Target Actor(s)
 * **** Purifies target actor(s) of any cursed weapons or armors.
 * *** Purify: Whole Party
 * **** Purifies whole party of any cursed weapons or armors.
 * ** Added "Cursed Equip Popup" to Equip Scene Plugin Parameters.
 * *** Text popup appears when an actor equips a cursed weapon/armor.
 * ** Added "Ally or Enemy" or "Enemy or Ally" scopes to Shop Status Window
 *    Plugin Parameters.
 * *** If unused, will default to "1 Ally" or "1 Enemy" like usual.
 *     Added by Irina.
 * 
 * Version 1.49: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a problem where for weapon types, all weapon types are listed in
 *    the equip menu even when the actor cannot equip them (though they would
 *    be disabled). Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Olivia and sponsored by AndyL:
 * *** <Added EType: x>
 * *** <Added ETypes: x, x, x>
 * **** This is for armors only and does NOT work with weapons!
 * **** Allows a piece of armor to belong to multiple ETypes. This means a
 *      glove can be equipped as "Armgear" or as an "Accessory" if you so
 *      choose.
 * 
 * Version 1.48: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help window position of the non-updated layout
 *    would appear in the wrong position. Fix made by Irina.
 * * Optimization Update!
 * ** Plugin should run more optimized when weapons and armors exceed 2000
 *    in database quantity.
 * 
 * Version 1.47: July 13, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause the shop status window to display incorrect
 *    removed buffs and debuffs. Fix made by Olivia.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Updates!
 * ** Changes made to dynamic shop listings in order to update upon listing
 *    changes rather than having to enter and exit the shop again. Update made
 *    by Arisu.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by AndyL:
 * *** <Conserve: x%>
 * **** Gives the item a percent chance when used to not consume the item.
 * *** <Buy Turn On Switches: x, x, x>
 * *** <Buy Turn Off Switches: x, x, x>
 * *** <Sell Turn On Switches: x, x, x>
 * *** <Sell Turn Off Switches: x, x, x>
 * **** When buying/selling an item, weapon, or armor with these notetags,
 *      turn on/off switch(es) 'x'.
 * *** New Plugin Parameters added by Arisu:
 * **** Params > Settings > Shop Status Window > Equipment Data > Delay MS:
 * ***** How many milliseconds (MS) to delay the preview update?
 * ***** This is to prevent lag spikes for equips only.
 * 
 * Version 1.46: June 15, 2023
 * * Bug Fixes!
 * ** Fixed a problem where the help and input modes are not adequately
 *    adjusted when not used with the updated layout or without the Options
 *    Core custom UI placement. Fix made by Arisu.
 * 
 * Version 1.45: May 18, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would cause equip slots to not be recognized properly if
 *    the equip slot name ends in a space.
 * 
 * Version 1.44: April 13, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag effects added by Arisu and sponsored by Anon:
 * *** <Equip For Class Only: x>
 * *** <Equip For Classes Only: x, x, x>
 * *** <Equip For Class Only: name>
 * *** <Equip For Classes Only: name, name, name>
 * **** The piece of equipment can only be worn by the listed classes.
 * *** <Equip Requirements> notetag added.
 * **** Define multiple requirements that the actor needs to meet in order for
 *      this equip item to be equippable.
 * **** See help file for more information on the types of requirements that
 *      can be added.
 * 
 * Version 1.43: March 16, 2023
 * * Bug Fixes!
 * ** Artifact armors should now update and refresh the party members' cache
 *    upon acquisition. Fix made by Olivia.
 * 
 * Version 1.42: February 16, 2023
 * * Bug Fixes!
 * ** Proxy items should no longer cause infinite loops if they're made to
 *    reference other proxy items in a circular fashion. Instead, they just
 *    give the exact first found proxy instead of cycling through others.
 *    Fix made by Arisu.
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu and sponsored by Anon:
 * *** Equip Scene > Equip Command > Help Description
 * *** Equip Scene > Optimize Command > Help Description
 * *** Equip Scene > Clear Command > Help Description
 * **** Help description used when these commands are selected.
 * 
 * Version 1.40: October 20, 2022
 * * Feature Update!
 * ** For the shop status window, when comparing equipment of a type where
 *    there are multiple equipment slots (such as accessories), the plugin will
 *    now check for an empty equipment slot first and then make calculations
 *    there. Otherwise, it will use the first available equipment slot of that
 *    type regardless of the equipped item. Update made by Arisu.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.39: September 29, 2022:
 * * Feature Update!
 * ** Changed the default code for the equip scene's status window display to
 *    prevent the face graphic and basic actor stats from going above the
 *    window boundaries if there are too many parameters displayed in the
 *    status window at a time.
 * ** If you already have this plugin installed the changes will not be
 *    reflected unless you do the following:
 * **** BACKUP your game project.
 * **** REMOVE this plugin from the Plugin Manager list.
 * **** REINSTALL this plugin into the Plugin Manager list.
 * **** SAVE the game project.
 * 
 * Version 1.38: March 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New mechanics and notetags added by Olivia and sponsored by Anon:
 * *** <Party Artifact>
 * *** <Troop Artifact>
 * *** <Stackable Party Artifact>
 * *** <Stackable Troop Artifact>
 * **** Armors only! This armor cannot be equipped at all. However, by simply
 *      being in the party's inventory, its parameter bonuses and traits will
 *      be applied globally throughout the whole party or troop (depending on
 *      the notetag). Add both notetags to affect both groups.
 * **** The normal versions of the notetag is only applied once regardless of
 *      the number of copies are found in the party's inventory.
 * **** The stackable versions of the notetag will have the bonuses and traits
 *      stacked multiple times relative to the number of copies found in the
 *      party's inventory.
 * **** This item will NOT be added during the setup phase for Battle Tests.
 * ***** If you want to add the item, do it manually.
 * 
 * Version 1.37: December 23, 2021
 * * Compatibility Update
 * ** Created foundation for proxy items to be used in any applicable system
 *    and extension plugins. Update made by Arisu.
 * 
 * Version 1.36: December 2, 2021
 * * Feature Update!
 * ** For those using custom parameters from the Core Engine and do not have
 *    the parameters all-capitalized, the plugin will automatically do it for
 *    you to prevent errors. Update made by Olivia.
 * 
 * Version 1.35: November 18, 2021
 * * Compatibility Update!
 * ** If this plugin's updated scene is disabled, the Help Window locations for
 *    the Item, Equip, and Shop Scenes should now be at their designated
 *    locations as calculated by the VisuMZ Core Engine instead of the RMMZ
 *    default location. Update made by Irina.
 * 
 * Version 1.34: October 28, 2021
 * * Feature Update
 * ** Added fail safe checks for projects that are using old data for starting
 *    equipment that no longer exist, thus preventing the game from opening.
 *    Update made by Arisu.
 * 
 * Version 1.33: August 6, 2021
 * * Documentation Update!
 * ** Removed "Weapon" and "Armor" from "Used For" for <Status Info>. This was
 *    an unintended piece of documentation.
 * 
 * Version 1.32: July 23, 2021
 * * Bug Fixes!
 * ** Fixed a bug that would cause armor duplication when changing to classes
 *    with unaligned equipment slot types. Fix made by Arisu.
 * 
 * Version 1.31: July 9, 2021
 * * Feature Update!
 * ** Added a failsafe for price manipulation JavaScript to never have prices
 *    drop below 0 if possible. Update made by Arisu.
 * 
 * Version 1.30: July 2, 2021
 * * Documentation Update!
 * ** Added an extra note to the help file for the following:
 *    Plugin Parameters > Item Menu Settings > List Window > Columns
 * *** If you are using the VisuStella MZ Core Engine and the "Modern Controls"
 *     Plugin Parameter, please read through that section in case you have any
 *     questions about how to switch between categories when using multiple
 *     columns of items at a time.
 *    
 * 
 * Version 1.29: June 25, 2021
 * * Compatibility Update
 * ** Compatibility update with RPG Maker MZ 1.3.0+.
 * * Feature Update!
 * ** Phantom data when changing equipment types in the database should no
 *    longer affect actors with cached equip ID's. Update made by Arisu.
 * 
 * Version 1.28: June 4, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.27: May 21, 2021
 * * Bug Fixes!
 * ** Using the mouse right click in the Equip Scene while inside of the item
 *    to slot window will no longer exit the Equip Scene. Fix made by Yanfly.
 * 
 * Version 1.26: April 30, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** "VisuStella MZ Compatibility" added VisuMZ_1_BattleCore section regarding
 *    Damage Multiplier and Healing Multiplier vocabulary settings to reduce
 *    commonly asked questions.
 * * New Features!
 * ** New notetags added by Irina and sponsored by Archeia:
 * *** <Shop Picture Name: filename>
 * *** <Shop Picture Layer: x>
 * *** <Shop Picture Max Width: x>
 * *** <Shop Picture Max Height: y>
 * *** <Shop Picture Max Dimensions: x, y>
 * *** <Shop Picture Alignment: x>
 * *** <Shop Picture Position: y>
 * *** <Shop Picture Offset X: +x>
 * *** <Shop Picture Offset X: -x>
 * *** <Shop Picture Offset Y: +y>
 * *** <Shop Picture Offset Y: -y>
 * *** <Shop Picture Offset: +x, +y>
 * *** <Shop Picture Offset: -x, -y>
 * *** <Shop Picture Opacity: x>
 * *** <Shop Picture Opacity: x%>
 * **** Add images from the game project's img/pictures/ folder to display in
 *      the Shop Status Window.
 * 
 * Version 1.25: April 23, 2021
 * * Documentation Update!
 * ** Added clarity to the <param: +x> and <param: -x> notetags:
 * *** These notetags do NOT work with X Parameters, S Parameters, or any
 *     custom parameters. These notetags ONLY work with the base parameters.
 * 
 * Version 1.24: April 16, 2021
 * * Bug Fixes!
 * ** Changing an actor's equipment slots to past their original amount will no
 *    longer yield errors with duplicate slot types. Fix made by Arisu.
 * ** Completely selling an item should now refresh the help window to the new
 *    selected item's help description. Fix made by Arisu.
 * * Optimization Update!
 * ** Non-removable equipment restrictions for the equipment scene are now
 *    better optimized. Update made by Olivia.
 * 
 * Version 1.23: April 2, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.22: March 26, 2021
 * * Documentation Update!
 * ** Added "VisuStella MZ Compatibility" section for detailed compatibility
 *    explanations with the VisuMZ_4_BreakShields plugin.
 * 
 * Version 1.21: March 5, 2021
 * * Feature Update!
 * ** Custom equipment slots are disabled during Battle Testing for better
 *    accuracy and results.
 * 
 * Version 1.20: February 26, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Buy
 * *** Plugin Parameters > Shop Menu Settings > Switches > Switch: Sell
 * **** Buying/selling items in the Shop Scene turns this Switch to ON.
 * **** Switch reverts to OFF whenever the Shop Scene opens.
 * **** These switches can be used after a "Shop Processing" event command to
 *      determine if the player has bought an item, bought and sold an item,
 *      sold an item, or neither.
 * 
 * Version 1.19: January 29, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina.
 * *** <Equip Copy Limit: x>
 * **** Sets a maximum number of copies that the actor can wear of this
 *      equipment. Usage Example: Actors can only equip one copy of the
 *      "One-of-a-Kind Ring" on at any time despite having empty accessory
 *      slots because the ring has a <Equip Copy Limit: 1> notetag.
 * *** <Equip Weapon Type Limit: x>
 * **** This weapon cannot be equipped with other weapons of the same type once
 *      the limited amount has been reached. Usage Example: A dualwielding
 *      warrior who can only equip one sword and a dagger but never two swords
 *      or two daggers because the swords and daggers all have the
 *      <Equip Weapon Type Limit: 1> notetags on them.
 * *** <Equip Armor Type Limit: x>
 * **** This armor cannot be equipped with other armors of the same type once
 *      the limited amount has been reached. Usage Example: People cannot equip
 *      more than two glove accessories on at a time because the glove is a
 *      "Glove" armor-type and each glove item has the
 *      <Equip Armor Type Limit: 2> notetags on them.
 * 
 * Version 1.18: January 15, 2021
 * * Bug Fixes!
 * ** Pressing "Shift" to remove equipment will now refresh the status window
 *    unlike before. Fix made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added
 * *** Plugin Parameters > Item Menu Settings > Background Type
 * 
 * Version 1.17: January 1, 2021
 * * Bug Fixes!
 * ** Equipping should be working properly again. Fix made by Yanfly.
 * 
 * Version 1.16: December 25, 2020
 * * Bug Fixes!
 * ** Equip-Adjust HP/MP should work properly now. Fix made by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that if the VisuStella
 *    Battle Core is installed, then all battle scope items are visible, but
 *    not necessarily enabled if they are disabled otherwise.
 * 
 * Version 1.15: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MZ Bug: Unusable items on an individual-actor basis will no
 *    longer be overwritten by party-based usability for battle. Fix by Yanfly.
 * * Documentation Update!
 * ** Added more clarity for <JS Item Enable> to state that it removes the
 *    usable item from visibility as well if the actor unable to use it is the
 *    only person in the party.
 * 
 * Version 1.14: December 11, 2020
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.13: December 4, 2020
 * * Documentation Update!
 * ** Added documentation for new feature(s)!
 * * New Features!
 * ** New Plugin Commands added by Arisu!
 * *** Actor: Change Equip Slots
 * *** Actor: Reset Equip Slots
 * **** These plugin commands allow you to forcefully change the equip slots
 *      available to an actor regardless of the slots provided by its class as
 *      well as reset them.
 * 
 * Version 1.12: November 15, 2020
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.11: November 8, 2020
 * * Bug Fix!
 * ** Font size ratio for the shop status window now scales to a hard coded
 *    value to prevent smaller font sizes from expanding icon sizes. Fix made
 *    by Arisu.
 * * Feature Update!
 * ** Currency display in the shop menu is now reflected upon how the plugin
 *    parameters set them to display. Update made by Arisu.
 * 
 * Version 1.10: November 1, 2020
 * * Feature Update!
 * ** Modern Controls compatibility with Core Engine no longer enables the
 *    Item Categories window and child classes to utilize the Home/End keys.
 * 
 * Version 1.09: October 25, 2020
 * * Bug Fixes!
 * ** "All Items" category should now display the "Items" text. Fix by Irina.
 * ** WType, AType, and EType categories now work with text. Fix by Irina.
 *
 * Version 1.08: October 18, 2020
 * * Compatibility Update!
 * ** Plugins should be more compatible with one another.
 * 
 * Version 1.07: October 11, 2020
 * * Bug Fixes!
 * ** XParams and SParams in the Window_EquipStatus window will no longer show
 *    a non-percentile difference if the original value is not a whole value.
 *    Fix made by Yanfly.
 * 
 * Version 1.06: October 4, 2020
 * * Bug Fixes!
 * ** Select Item event command now displays the default amount of columns
 *    instead of whatever setting is made with the plugin parameters.
 * 
 * Version 1.05: September 27, 2020
 * * Bug Fixes!
 * ** When using the updated shop layout, leaving the sell option will no
 *    longer cause the dummy window to appear.
 * * Documentation Update
 * ** "Use Updated Layout" plugin parameters now have the added clause:
 *    "This will override the Core Engine windows settings." to reduce
 *    confusion. Added by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Pressing Shift to quickly remove equipment should no longer crash the
 *    game. This will also clear the help window text. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** If both Optimize and Clear commands have been removed and using modern
 *    controls, pressing up at the top of the slot window list will not go to
 *    the window. Fix made by Yanfly.
 * ** If both Optimize and Clear commands have been removed, the window will no
 *    longer appear and the slot window will be moved upward to fill any empty
 *    spaces. Fix made by Yanfly.
 * * New Features!
 * ** New Plugin Parameter added in NEW! Label to let you adjust the font face.
 * ** New Plugin Parameters added in Equip Menu Scene Settings for disabling
 *    the back rectangles and/or changing their colors.
 * ** New Plugin Parameters added in Shop Status Window Settings for disabling
 *    the back rectangles and/or changing their colors.
 * 
 * Version 1.02: August 30, 2020
 * * Documentation Fix!
 * ** Added: NOTE: Regarding Damage Labels
 * *** If Visu_1_BattleCore is installed, priority goes to its Damage Style
 *   settings. The label displayed is based on the damage style settings in
 *   place for that specific skill or item.
 * *** Go to Battle Core > Plugin Parameters > Damage Settings > Style List >
 *   pick the damage style you want to edit > Damage Label and change the
 *   text settings you'd like there.
 * *** Documentation update added by Yanfly.
 * 
 * Version 1.01: August 23, 2020
 * * Added failsafe to prevent non-existent equipment (because the database
 *   entries have been deleted) from being equipped as initial equipment.
 *   Fix made by Olivia.
 *
 * Version 1.00: August 20, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorChangeEquipSlots
 * @text Actor: Change Equip Slots
 * @desc Forcefully change the actor(s) equip slots.
 * These will persist through class changes.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 * 
 * @arg Slots:arraystr
 * @text Equip Slots
 * @type string[]
 * @desc Insert the equip slots you want the actor(s) to have.
 * These entries are case-sensitive.
 * @default ["Weapon","Shield","Head","Body","Accessory"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ActorResetEquipSlots
 * @text Actor: Reset Equip Slots
 * @desc Reset any forced equip slots for the actor(s).
 * Equip slots will then be based on class.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Purify
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyActors
 * @text Purify: Target Actor(s)
 * @desc Purifies target actor(s) of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @arg Actors:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select which Actor ID(s) to affect.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PurifyParty
 * @text Purify: Whole Party
 * @desc Purifies whole party of any cursed weapons or armors.
 * Cannot be used in battle.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Shop
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BatchShop
 * @text Shop: Advanced
 * @desc Make it easier to put together inventories for a shop.
 * WARNING: Does not allow for event-specific prices.
 *
 * @arg Step1
 * @text Step 1: Item ID's
 *
 * @arg Step1Start:num
 * @text Range Start
 * @parent Step1
 * @type item
 * @desc Select which Item ID to start from.
 * @default 1
 *
 * @arg Step1End:num
 * @text Range End
 * @parent Step1
 * @type item
 * @desc Select which Item ID to end at.
 * @default 4
 *
 * @arg Step2
 * @text Step 2: Weapon ID's
 *
 * @arg Step2Start:num
 * @text Range Start
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to start from.
 * @default 1
 *
 * @arg Step2End:num
 * @text Range End
 * @parent Step2
 * @type weapon
 * @desc Select which Weapon ID to end at.
 * @default 4
 *
 * @arg Step3
 * @text Step 3: Armor ID's
 *
 * @arg Step3Start:num
 * @text Range Start
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to start from.
 * @default 1
 *
 * @arg Step3End:num
 * @text Range End
 * @parent Step3
 * @type armor
 * @desc Select which Armor ID to end at.
 * @default 4
 *
 * @arg PurchaseOnly:eval
 * @text Step 4: Purchase Only?
 * @type boolean
 * @on Purchase-Only
 * @off Sell Accessible
 * @desc Make the shop purchase-only?
 * @default false
 * 
 * @arg Optional
 * 
 * @arg Blacklist:arraystr
 * @text Blacklisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to blacklist from the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 * 
 * @arg Whitelist:arraystr
 * @text Whitelisted Categories
 * @parent Optional
 * @type string[]
 * @desc A list of categories to whitelist for the shop.
 * Not used if empty. Mark categories with <Category: x>
 * @default []
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemsEquipsCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ItemScene:struct
 * @text Item Menu Settings
 * @type struct<ItemScene>
 * @desc Change the Item Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","ListWindow":"","ListWindowCols:num":"1","ItemQt":"","MaxItems:num":"99","MaxWeapons:num":"99","MaxArmors:num":"99","ItemQuantityFmt:str":"×%1","ItemQuantityFontSize:num":"22","ShopStatusWindow":"","ShowShopStatus:eval":"true","ItemSceneAdjustItemList:eval":"true","ItemMenuStatusRect:func":"\"const width = this.statusWidth();\\nconst height = this._itemWindow.height;\\nconst x = Graphics.boxWidth - width;\\nconst y = this._itemWindow.y;\\nreturn new Rectangle(x, y, width, height);\"","ButtonAssist":"","buttonAssistCategory:str":"Switch Category"}
 *
 * @param Categories:struct
 * @text Item Categories
 * @parent ItemScene:struct
 * @type struct<Categories>
 * @desc Change the categories displayed in the Item/Shop menus.
 * @default {"MainList":"","List:arraystruct":"[\"{\\\"Type:str\\\":\\\"FieldUsable\\\",\\\"Icon:num\\\":\\\"208\\\"}\",\"{\\\"Type:str\\\":\\\"BattleUsable\\\",\\\"Icon:num\\\":\\\"218\\\"}\",\"{\\\"Type:str\\\":\\\"NeverUsable\\\",\\\"Icon:num\\\":\\\"302\\\"}\",\"{\\\"Type:str\\\":\\\"AllWeapons\\\",\\\"Icon:num\\\":\\\"97\\\"}\",\"{\\\"Type:str\\\":\\\"EType:2\\\",\\\"Icon:num\\\":\\\"128\\\"}\",\"{\\\"Type:str\\\":\\\"EType:3\\\",\\\"Icon:num\\\":\\\"131\\\"}\",\"{\\\"Type:str\\\":\\\"EType:4\\\",\\\"Icon:num\\\":\\\"137\\\"}\",\"{\\\"Type:str\\\":\\\"EType:5\\\",\\\"Icon:num\\\":\\\"145\\\"}\",\"{\\\"Type:str\\\":\\\"KeyItems\\\",\\\"Icon:num\\\":\\\"195\\\"}\"]","Style:str":"icon","TextAlign:str":"center","Vocabulary":"","HiddenItemA:str":"Special Items","HiddenItemB:str":"Unique Items","Consumable:str":"Consumable","Nonconsumable:str":"Nonconsumable","AlwaysUsable:str":"Usable","BattleUsable:str":"Battle","FieldUsable:str":"Field","NeverUsable:str":"Materials"}
 *
 * @param New:struct
 * @text NEW! Labels
 * @parent ItemScene:struct
 * @type struct<NewLabel>
 * @desc Change how NEW! Labels apply to your game project.
 * @default {"Enable:eval":"true","Icon:num":"0","Text:str":"NEW!","FontColor:str":"17","FontFace:str":"Verdana","FontSize:str":"16","FadeLimit:num":"360","FadeSpeed:num":"4","OffsetX:num":"0","OffsetY:num":"4"}
 *
 * @param EquipScene:struct
 * @text Equip Menu Settings
 * @type struct<EquipScene>
 * @desc Adjust the settings regarding the Equip Menu Scene.
 * @default {"General":"","EnableLayout:eval":"true","ParamValueFontSize:num":"22","MenuPortraits:eval":"true","DrawPortraitJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst x1 = padding;\\nconst x2 = this.innerWidth - 128 - padding;\\n\\n// Draw Menu Image\\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\\n\\n// Draw Data\\nthis.drawActorName(this._actor, x1, lineHeight * 0);\\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);\"","DrawFaceJS:func":"\"// Declare Variables\\nconst lineHeight = this.lineHeight();\\nconst gaugeLineHeight = this.gaugeLineHeight();\\nconst x = Math.floor(this.innerWidth / 2);\\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\\nlet dataHeight = lineHeight * 3;\\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\\n\\n// Draw Data\\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);\"","DrawParamJS:func":"\"// Declare variables\\nconst params = this.actorParams();\\nconst lineHeight = this.lineHeight();\\nconst padding = this.itemPadding();\\nconst baseX = 0;\\nconst baseY = this.innerHeight - params.length * lineHeight;\\nconst baseWidth = this.innerWidth;\\nconst valueFontSize = this.paramValueFontSize();\\n\\n// Calculate Widths\\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\\nparamNameWidth += padding * 2;\\nif (this.isUseParamNamesWithIcons()) {\\n    paramNameWidth += ImageManager.iconWidth + 4;\\n}\\nlet arrowWidth = this.rightArrowWidth();\\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\\n\\n// Draw Parameters\\nlet x = baseX;\\nlet y = baseY;\\nlet value = 0;\\nlet diffValue = 0;\\nlet alter = 2;\\nfor (const paramId of params) {\\n    // Draw Param Name\\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\\n    this.resetFontSettings();\\n    x += paramNameWidth;\\n\\n    // Draw Param Before\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\\n    this.resetFontSettings();\\n    x += paramValueWidth;\\n\\n    // Draw Arrow\\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\\n    this.drawRightArrow(x, y);\\n    x += arrowWidth;\\n\\n    // Draw Param After\\n    this.contents.fontSize = valueFontSize;\\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\\n    x += paramValueWidth;\\n\\n    // Draw Param Change\\n    if (totalDivides > 2) {\\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\\n    }\\n\\n    // Prepare Next Parameter\\n    x = baseX;\\n    y += lineHeight;\\n    alter = alter === 2 ? 1 : 2;\\n}\"","LayoutStyle:str":"upper/right","StatusWindowWidth:num":"312","DrawBackRect:eval":"true","BackRectColor:str":"19","CursedTextPopup:json":"\"%1 is cursed by %3%2!\"","Command":"","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconEquip:num":"136","equipCmdDesc:json":"\"Pick and choose equipment to change.\"","CommandAddOptimize:eval":"true","optimizeCmdDesc:json":"\"Equip the strongest available equipment.\"","CmdIconOptimize:num":"137","CommandAddClear:eval":"true","clearCmdDesc:json":"\"Remove all available equipment.\"","CmdIconClear:num":"135","RemoveEquip":"","RemoveEquipIcon:num":"16","RemoveEquipText:str":"Remove","ShiftShortcutKey:eval":"true","Rulings":"","EquipAdjustHpMp:eval":"true","NonRemoveETypes:arraynum":"[]","NonOptimizeETypes:arraynum":"[]","ButtonAssist":"","buttonAssistRemove:str":"Unequip"}
 *
 * @param ShopScene:struct
 * @text Shop Menu Settings
 * @type struct<ShopScene>
 * @desc Change the Shop Menu Scene settings.
 * @default {"General":"","EnableLayout:eval":"true","LayoutStyle:str":"upper/left","Command":"","CmdHideDisabled:eval":"true","CmdStyle:str":"auto","CmdTextAlign:str":"center","CmdIconBuy:num":"208","CmdIconSell:num":"314","CmdIconCancel:num":"82","CmdCancelRename:str":"Exit","Prices":"","SellPriceRate:num":"0.50","BuyPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","SellPriceJS:func":"\"// Declare variables\\nlet item = arguments[0];\\nlet price = arguments[1];\\n\\n// Return the finalized price\\nreturn price;\"","ButtonAssist":"","buttonAssistSmallIncrement:str":"-1/+1","buttonAssistLargeIncrement:str":"-10/+10"}
 *
 * @param StatusWindow:struct
 * @text Shop Status Window
 * @parent ShopScene:struct
 * @type struct<StatusWindow>
 * @desc Change the Item Status Window settings.
 * @default {"General":"","Width:num":"352","ParamChangeFontSize:num":"22","Translucent:num":"64","DrawBackRect:eval":"true","BackRectColor:str":"19","EquipData":"","AlreadyEquipMarker:str":"E","CannotEquipMarker:str":"-","EquipDelayMS:num":"240","NoChangeMarker:str":"-","DrawEquipData:func":"\"// Set Variables\\nconst lineHeight = this.lineHeight();\\nconst paramheight = this.gaugeLineHeight() + 8;\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name, Type, and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\nif (this.drawItemEquipType(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\n\\n// Draw Parameter Names\\nconst params = this.actorParams();\\nconst backY = y;\\ny = height - (params.length * paramheight) - 4;\\nlet paramX = x;\\nlet paramWidth = 0;\\nlet tableY = y;\\nfor (const paramId of params) {\\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\\n    y += paramheight;\\n}\\n\\n// Draw Actor Data\\nconst actorMax = $gameParty.maxBattleMembers();\\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\\nparamWidth = width - (actorWidth * actorMax);\\nfor (const actor of $gameParty.battleMembers()) {\\n    const index = $gameParty.battleMembers().indexOf(actor);\\n    const actorX = paramX + paramWidth + (index * actorWidth);\\n    this.changePaintOpacity(actor.canEquip(this._item));\\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\\n    let actorY = tableY;\\n\\n    // Draw Parameter Changes\\n    for (const paramId of params) {\\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\\n        actorY += paramheight;\\n    }\\n}\\n\\n// Draw Back Rectangles\\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\\nfor (let i = 0; i < actorMax; i++) {\\n    const actorX = paramX + paramWidth + (i * actorWidth);\\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\\n}\\nfor (const paramId of params) {\\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\\n    for (let i = 0; i < actorMax; i++) {\\n        const actorX = paramX + paramWidth + (i * actorWidth);\\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\\n    }\\n    tableY += paramheight;\\n}\"","ItemData":"","ItemGeneral":"","MaxIcons:num":"8","MultiplierStandard:num":"1000000","DrawItemData:func":"\"const lineHeight = this.lineHeight();\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\nlet hw = Math.floor(width / 2);\\nlet hx = x + width - hw;\\n\\n// Draw Item Name and Quantity\\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\\nthis.drawItemDarkRect(x, y, width);\\ny += lineHeight;\\n\\n// Draw Main Item Properties\\nif (this.drawItemConsumable(x, y, hw)) y += 0;\\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\\nif (this._item.occasion < 3) {\\n    y = this.drawItemDamage(x, y, width);\\n    y = this.drawItemEffects(x, y, width);\\n}\\ny = this.drawItemCustomEntries(x, y, width);\\n\\n// Draw Remaining Item Properties\\nif (this._item.occasion < 3) {\\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemHitType(x, y, hw)) y += 0;\\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\\n}\\n\\n// Fill Rest of the Window\\nthis.drawItemDarkRect(x, y, width, height - y);\"","Vocabulary":"","LabelConsume:str":"Consumable","Consumable:str":"✔","NotConsumable:str":"✘","Occasions":"","Occasion0:str":"Anytime Use","Occasion1:str":"Battle-Only","Occasion2:str":"Field-Only","Occasion3:str":"-","Scope":"","Scope0:str":"No Target","Scope1:str":"1 Foe","Scope2:str":"All Foes","Scope3:str":"Random Foe","Scope4:str":"2 Random Foes","Scope5:str":"3 Random Foes","Scope6:str":"4 Random Foes","Scope7:str":"1 Ally","Scope8:str":"Alive Allies","Scope9:str":"Dead Ally","Scope10:str":"Dead Allies","Scope11:str":"User","Scope12:str":"Any Ally","Scope13:str":"All Allies","Scope14:str":"Everybody","BattleCore":"","ScopeRandomAny:str":"%1 Random Units","ScopeRandomEnemies:str":"%1 Random Foes","ScopeRandomAllies:str":"%1 Random Allies","ScopeAlliesButUser:str":"Other Allies","ScopeAllyOrEnemy:str":"Ally/Enemy","ScopeEnemyOrAlly:str":"Enemy/Ally","LabelSpeed:str":"Speed","Speed2000:str":"Fastest","Speed1000:str":"Faster","Speed1:str":"Fast","Speed0:str":"Normal","SpeedNeg999:str":"Slow","SpeedNeg1999:str":"Slower","SpeedNeg2000:str":"Slowest","LabelSuccessRate:str":"Accuracy","LabelRepeats:str":"Hits","LabelHitType:str":"Type","HitType0:str":"Neutral","HitType1:str":"Physical","HitType2:str":"Magical","LabelElement:str":"Element","ElementWeapon:str":"\\I[97]Weapon","ElementNone:str":"\\I[160]No Element","DamageType":"","DamageType1:str":"%1 Damage Multiplier","DamageType2:str":"%1 Damage Multiplier","DamageType3:str":"%1 Recovery Multiplier","DamageType4:str":"%1 Recovery Multiplier","DamageType5:str":"%1 Drain Multiplier","DamageType6:str":"%1 Drain Multiplier","Effects":"","LabelRecoverHP:str":"%1 Recovery","LabelRecoverMP:str":"%1 Recovery","LabelRecoverTP:str":"%1 Recovery","LabelSelfGainTP:str":"User %1","LabelDamageHP:str":"%1 Damage","LabelDamageMP:str":"%1 Damage","LabelDamageTP:str":"%1 Damage","LabelApply:str":"Applies","LabelRemove:str":"Removes"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Item Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ItemScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Item Menu Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param ListWindow
 * @text List Window
 *
 * @param ListWindowCols:num
 * @text Columns
 * @parent ListWindow
 * @type number
 * @min 1
 * @desc Number of maximum columns.
 * @default 1
 *
 * @param ItemQt
 * @text Item Quantity
 *
 * @param MaxItems:num
 * @text Item Max
 * @parent ItemQt
 * @desc The default maximum quantity for items.
 * @default 99
 *
 * @param MaxWeapons:num
 * @text Weapon Max
 * @parent ItemQt
 * @desc The default maximum quantity for weapons.
 * @default 99
 *
 * @param MaxArmors:num
 * @text Armor Max
 * @parent ItemQt
 * @desc The default maximum quantity for armors.
 * @default 99
 *
 * @param ItemQuantityFmt:str
 * @text Quantity Format
 * @parent ItemQt
 * @desc How to display an item's quantity.
 * %1 - Item Quantity
 * @default ×%1
 *
 * @param ItemQuantityFontSize:num
 * @text Font Size
 * @parent ItemQt
 * @desc Default font size for item quantity.
 * @default 22
 *
 * @param ShopStatusWindow
 * @text Shop Status Window
 *
 * @param ShowShopStatus:eval
 * @text Show in Item Menu?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Show
 * @off Don't Show
 * @desc Show the Shop Status Window in the Item Menu?
 * This is enabled if the Updated Layout is on.
 * @default true
 *
 * @param ItemSceneAdjustItemList:eval
 * @text Adjust List Window?
 * @parent ShopStatusWindow
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the Item List Window in the Item Menu if using the Shop Status Window?
 * @default true
 *
 * @param ItemMenuStatusBgType:num
 * @text Background Type
 * @parent ShopStatusWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param ItemMenuStatusRect:func
 * @text JS: X, Y, W, H
 * @parent ShopStatusWindow
 * @type note
 * @desc Code used to determine the dimensions for this Status Window in the Item Menu.
 * @default "const width = this.statusWidth();\nconst height = this._itemWindow.height;\nconst x = Graphics.boxWidth - width;\nconst y = this._itemWindow.y;\nreturn new Rectangle(x, y, width, height);"
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistCategory:str
 * @text Switch Category
 * @parent ButtonAssist
 * @desc Button assist text used for switching categories.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Switch Category
 *
 */
/* ----------------------------------------------------------------------------
 * Item Categories
 * ----------------------------------------------------------------------------
 */
/*~struct~Categories:
 *
 * @param MainList
 * @text List
 * 
 * @param List:arraystruct
 * @text Category List
 * @parent MainList
 * @type struct<Category>[]
 * @desc A list of the item categories displayed in the Item/Shop menus.
 * @default ["{\"Type:str\":\"RegularItems\",\"Icon:num\":\"208\"}","{\"Type:str\":\"AllWeapons\",\"Icon:num\":\"97\"}","{\"Type:str\":\"AllArmors\",\"Icon:num\":\"137\"}","{\"Type:str\":\"KeyItems\",\"Icon:num\":\"195\"}"]
 *
 * @param Style:str
 * @text Category Style
 * @parent MainList
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw categorie entries in the Category Window?
 * @default icon
 *
 * @param TextAlign:str
 * @text Text Alignment
 * @parent MainList
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Decide how you want the text to be aligned.
 * @default center
 *
 * @param Vocabulary
 *
 * @param HiddenItemA:str
 * @text Hidden Item A
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Special Items
 *
 * @param HiddenItemB:str
 * @text Hidden Item B
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Unique Items
 *
 * @param Consumable:str
 * @text Consumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Consumable
 *
 * @param Nonconsumable:str
 * @text Nonconsumable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Nonconsumable
 *
 * @param AlwaysUsable:str
 * @text Always Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Usable
 *
 * @param BattleUsable:str
 * @text Battle Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Battle
 *
 * @param FieldUsable:str
 * @text Field Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Field
 *
 * @param NeverUsable:str
 * @text Never Usable
 * @parent Vocabulary
 * @desc How this category is named in the Item Menu.
 * @default Materials
 *
 */
/* ----------------------------------------------------------------------------
 * Category Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Category:
 *
 * @param Type:str
 * @text Type
 * @type combo
 * @option AllItems
 * @option 
 * @option RegularItems
 * @option KeyItems
 * @option HiddenItemA
 * @option HiddenItemB
 * @option 
 * @option Consumable
 * @option Nonconsumable
 * @option 
 * @option AlwaysUsable
 * @option BattleUsable
 * @option FieldUsable
 * @option NeverUsable
 * @option 
 * @option AllWeapons
 * @option WType:x
 * @option 
 * @option AllArmors
 * @option AType:x
 * @option 
 * @option EType:x
 * @option 
 * @option Category:x
 * @option
 * @desc A list of the item categories displayed in the Item/Shop
 * menus. Replace x with ID numbers or text.
 * @default RegularItems
 *
 * @param Icon:num
 * @text Icon
 * @desc Icon used for this category.
 * Use 0 for no icon.
 * @default 0
 *
 * @param SwitchID:num
 * @text Visibility Switch
 * @type switch
 * @desc This Switch must be turned ON in order for the category to show.
 * Use 0 for no Switch requirement.
 * @default 0
 *
 * @param SortBy:str
 * @text Sorted By
 * @type select
 * @option ID
 * @option Name
 * @desc Sort this category (in Scene_Item and Scene_Shop only) this way.
 * @default ID
 *
 */
/* ----------------------------------------------------------------------------
 * New Label Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~NewLabel:
 *
 * @param Enable:eval
 * @text Use NEW! Labels?
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the NEW! Labels or not?
 * @default true
 *
 * @param Icon:num
 * @text Icon
 * @desc The icon index used to represent the NEW! text.
 * Use 0 to not draw any icons.
 * @default 0
 *
 * @param Text:str
 * @text Text
 * @desc The text written on the NEW! Label.
 * @default NEW!
 *
 * @param FontColor:str
 * @text Font Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 17
 *
 * @param FontFace:str
 * @text Font Face
 * @parent Text:str
 * @desc Font face used for the NEW! Label.
 * @default Verdana
 *
 * @param FontSize:str
 * @text Font Size
 * @parent Text:str
 * @desc The font size used for the NEW! text.
 * @default 16
 *
 * @param FadeLimit:num
 * @text Fade Limit
 * @desc What's the upper opaque limit before reversing?
 * @default 360
 *
 * @param FadeSpeed:num
 * @text Fade Speed
 * @desc What's the fade speed of the NEW! Label?
 * @default 4
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the NEW! Label's X position by.
 * @default 0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the NEW! Label's Y position by.
 * @default 4
 *
 */
/* ----------------------------------------------------------------------------
 * Equip Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~EquipScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Equip Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/right
 *
 * @param ParamValueFontSize:num
 * @text Param Font Size
 * @parent EnableLayout:eval
 * @desc The font size used for parameter values.
 * @default 22
 *
 * @param MenuPortraits:eval
 * @text Show Menu Portraits?
 * @parent EnableLayout:eval
 * @type boolean
 * @on Use Portraits
 * @off Use Faces
 * @desc If Main Menu Core is installed, display the Menu Portraits
 * instead of the actor's face in the status window?
 * @default true
 *
 * @param DrawPortraitJS:func
 * @text JS: Portrait Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If Menu Portraits are available, this is code used to draw
 * the upper data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst x1 = padding;\nconst x2 = this.innerWidth - 128 - padding;\n\n// Draw Menu Image\nthis.drawItemActorMenuImage(this._actor, 0, 0, this.innerWidth, this.innerHeight);\n\n// Draw Data\nthis.drawActorName(this._actor, x1, lineHeight * 0);\nthis.drawActorClass(this._actor, x1, lineHeight * 1);\nthis.drawActorIcons(this._actor, x1, lineHeight * 2);\nthis.drawActorLevel(this._actor, x2, lineHeight * 0);\nthis.placeBasicGauges(this._actor, x2, lineHeight * 1);"
 *
 * @param DrawFaceJS:func
 * @text JS: Face Upper
 * @parent EnableLayout:eval
 * @type note
 * @desc If faces used used, this is code used to draw the upper
 * data like this in the Status Window.
 * @default "// Declare Variables\nconst lineHeight = this.lineHeight();\nconst gaugeLineHeight = this.gaugeLineHeight();\nconst x = Math.floor(this.innerWidth / 2);\nconst limitHeight = this.innerHeight - (this.actorParams().length * lineHeight);\nconst actorX = Math.floor((x - ImageManager.faceWidth) / 2);\nconst actorY = Math.max(0, Math.floor((limitHeight - ImageManager.faceHeight) / 2));\nlet dataHeight = lineHeight * 3;\ndataHeight += gaugeLineHeight * ($dataSystem.optDisplayTp ? 3 : 2);\nconst dataY = Math.max(0, Math.floor((limitHeight - dataHeight) / 2));\n\n// Draw Data\nthis.drawActorFace(this._actor, actorX, actorY, ImageManager.faceWidth, ImageManager.faceHeight);\nthis.drawActorIcons(this._actor, actorX + 16, actorY + ImageManager.faceHeight - lineHeight);\nthis.drawActorName(this._actor, x, dataY + lineHeight * 0);\nthis.drawActorLevel(this._actor, x, dataY + lineHeight * 1);\nthis.drawActorClass(this._actor, x, dataY + lineHeight * 2);\nthis.placeBasicGauges(this._actor, x, dataY + lineHeight * 3);"
 *
 * @param DrawParamJS:func
 * @text JS: Parameter Lower
 * @parent EnableLayout:eval
 * @type note
 * @desc Code to determine how parameters are drawn in the
 * Status Window.
 * @default "// Declare variables\nconst params = this.actorParams();\nconst lineHeight = this.lineHeight();\nconst padding = this.itemPadding();\nconst baseX = 0;\nconst baseY = this.innerHeight - params.length * lineHeight;\nconst baseWidth = this.innerWidth;\nconst valueFontSize = this.paramValueFontSize();\n\n// Calculate Widths\nlet paramNameWidth = Math.max(...params.map(param => this.textWidth(TextManager.param(param))));\nparamNameWidth += padding * 2;\nif (this.isUseParamNamesWithIcons()) {\n    paramNameWidth += ImageManager.iconWidth + 4;\n}\nlet arrowWidth = this.rightArrowWidth();\nconst totalDivides = this.innerWidth >= 500 ? 3 : 2;\nlet paramValueWidth = Math.floor((baseWidth - paramNameWidth - arrowWidth) / totalDivides);\nparamNameWidth = baseWidth - (paramValueWidth * totalDivides) - arrowWidth;\n\n// Draw Parameters\nlet x = baseX;\nlet y = baseY;\nlet value = 0;\nlet diffValue = 0;\nlet alter = 2;\nfor (const paramId of params) {\n    // Draw Param Name\n    this.drawItemDarkRect(x, y, paramNameWidth, lineHeight, alter);\n    this.drawUpdatedParamName(paramId, x, y, paramNameWidth);\n    this.resetFontSettings();\n    x += paramNameWidth;\n\n    // Draw Param Before\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedBeforeParamValue(paramId, x, y, paramValueWidth);\n    this.resetFontSettings();\n    x += paramValueWidth;\n\n    // Draw Arrow\n    this.drawItemDarkRect(x, y, arrowWidth, lineHeight, alter);\n    this.drawRightArrow(x, y);\n    x += arrowWidth;\n\n    // Draw Param After\n    this.contents.fontSize = valueFontSize;\n    this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n    this.drawUpdatedAfterParamValue(paramId, x, y, paramValueWidth);\n    x += paramValueWidth;\n\n    // Draw Param Change\n    if (totalDivides > 2) {\n        this.drawItemDarkRect(x, y, paramValueWidth, lineHeight, alter);\n        this.drawUpdatedParamValueDiff(paramId, x, y, paramValueWidth);\n    }\n\n    // Prepare Next Parameter\n    x = baseX;\n    y += lineHeight;\n    alter = alter === 2 ? 1 : 2;\n}"
 *
 * @param StatusWindowWidth:num
 * @text Status Window Width
 * @parent General
 * @desc The usual width of the status window if using the 
 * non-Updated Equip Menu Layout.
 * @default 312
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param CursedTextPopup:json
 * @text Cursed Equip Popup
 * @parent General
 * @type note
 * @desc %1 - Actor, %2 - Equip, %3 - Icon. Text codes allowed.
 * Requires VisuMZ_0_CoreEngine! Empty to not use.
 * @default "%1 is cursed by %3%2!"
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconEquip:num
 * @text Equip Icon
 * @parent Command
 * @desc The icon used for the Equip command.
 * @default 136
 *
 * @param equipCmdDesc:json
 * @text Help Description
 * @parent CmdIconEquip:num
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Pick and choose equipment to change."
 *
 * @param CommandAddOptimize:eval
 * @text Add Optimize Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Optimize" command to the Command Window?
 * @default true
 *
 * @param optimizeCmdDesc:json
 * @text Help Description
 * @parent CommandAddOptimize:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Equip the strongest available equipment."
 *
 * @param CmdIconOptimize:num
 * @text Optimize Icon
 * @parent CommandAddOptimize:eval
 * @desc The icon used for the Optimize command.
 * @default 137
 *
 * @param CommandAddClear:eval
 * @text Add Clear Command?
 * @parent Command
 * @type boolean
 * @on Add
 * @off Don't
 * @desc Add the "Clear" command to the Command Window?
 * @default true
 *
 * @param clearCmdDesc:json
 * @text Help Description
 * @parent CommandAddClear:eval
 * @type note
 * @desc Help description used when this command is selected.
 * Text codes allowed.
 * @default "Remove all available equipment."
 *
 * @param CmdIconClear:num
 * @text Clear Icon
 * @parent CommandAddClear:eval
 * @desc The icon used for the Clear command.
 * @default 135
 *
 * @param RemoveEquip
 * @text Remove Equip
 *
 * @param RemoveEquipIcon:num
 * @text Icon
 * @parent RemoveEquip
 * @desc Icon used for equipment removal.
 * @default 16
 *
 * @param RemoveEquipText:str
 * @text Text
 * @parent RemoveEquip
 * @desc Text used for equipment removal.
 * @default Remove
 *
 * @param ShiftShortcutKey:eval
 * @text Use SHIFT Shortcut?
 * @parent RemoveEquip
 * @type boolean
 * @on Use
 * @off Don't
 * @desc Add the "Shift" button as a shortcut key to removing items?
 * @default true

 * @param Rulings
 *
 * @param EquipAdjustHpMp:eval
 * @text Equip-Adjust HP/MP
 * @parent Rulings
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Adjust HP/MP differences after changing equips with MaxHP/MaxMP values.
 * @default true
 * 
 * @param NonRemoveETypes:arraynum
 * @text Non-Removable Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that must always have
 * an item equipped and cannot be empty.
 * @default []
 *
 * @param NonOptimizeETypes:arraynum
 * @text Non-Optimized Types
 * @parent Rulings
 * @type number[]
 * @min 1
 * @max 100
 * @desc Insert ID's of the Equipment Types that will be ignored
 * when equipment is being optimized.
 * @default []
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistRemove:str
 * @text SHIFT: Remove
 * @parent ButtonAssist
 * @desc Button assist text used for the SHIFT Remove Shortcut.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default Unequip
 * 
 */
/* ----------------------------------------------------------------------------
 * Shop Menu Scene Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~ShopScene:
 *
 * @param General
 *
 * @param EnableLayout:eval
 * @text Use Updated Layout
 * @parent General
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use the Updated Shop Layout provided by this plugin?
 * This will override the Core Engine windows settings.
 * @default true
 *
 * @param LayoutStyle:str
 * @text Layout Style
 * @parent General
 * @type select
 * @option Upper Help, Left Input
 * @value upper/left
 * @option Upper Help, Right Input
 * @value upper/right
 * @option Lower Help, Left Input
 * @value lower/left
 * @option Lower Help, Right Input
 * @value lower/right
 * @desc If using an updated layout, how do you want to style
 * the menu scene layout?
 * @default upper/left
 *
 * @param Switches
 *
 * @param SwitchBuy:num
 * @text Switch: Buy
 * @parent Switches
 * @type switch
 * @desc Buying items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param SwitchSell:num
 * @text Switch: Sell
 * @parent Switches
 * @type switch
 * @desc Selling items in the Shop Scene turns this Switch to ON.
 * Switch reverts to OFF whenever the Shop Scene opens.
 * @default 0
 *
 * @param Command
 * @text Command Window
 *
 * @param CmdHideDisabled:eval
 * @text Hide Unavailable?
 * @parent Command
 * @type boolean
 * @on Hide
 * @off Default
 * @desc Hide all unavailable commands like when a shop is set to Purchase Only?
 * @default true
 *
 * @param CmdStyle:str
 * @text Style
 * @parent Command
 * @type select
 * @option Text Only
 * @value text
 * @option Icon Only
 * @value icon
 * @option Icon + Text
 * @value iconText
 * @option Automatic
 * @value auto
 * @desc How do you wish to draw commands in the Command Window?
 * @default auto
 *
 * @param CmdTextAlign:str
 * @text Text Align
 * @parent Command
 * @type combo
 * @option left
 * @option center
 * @option right
 * @desc Text alignment for the Command Window.
 * @default center
 *
 * @param CmdIconBuy:num
 * @text Buy Icon
 * @parent Command
 * @desc The icon used for the Buy command.
 * @default 208
 *
 * @param CmdIconSell:num
 * @text Sell Icon
 * @parent Command
 * @desc The icon used for the Sell command.
 * @default 314
 *
 * @param CmdIconCancel:num
 * @text Cancel Icon
 * @parent Command
 * @desc The icon used for the Cancel command.
 * @default 82
 *
 * @param CmdCancelRename:str
 * @text Rename "Cancel"
 * @parent Command
 * @desc Rename Cancel to something more logical for the Shop Menu Scene.
 * @default Exit
 *
 * @param Prices
 *
 * @param SellPriceRate:num
 * @text Sell Price Rate
 * @parent Prices
 * @desc The default sell price rate.
 * @default 0.50
 *
 * @param BuyPriceJS:func
 * @text JS: Buy Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the buy price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 *
 * @param SellPriceJS:func
 * @text JS: Sell Price
 * @parent Prices
 * @type note
 * @desc Modificatons made to the sell price before finalizing it.
 * @default "// Declare variables\nlet item = arguments[0];\nlet price = arguments[1];\n\n// Return the finalized price\nreturn price;"
 * 
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param buttonAssistSmallIncrement:str
 * @text Small Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -1/+1
 *
 * @param buttonAssistLargeIncrement:str
 * @text Large Increment
 * @parent ButtonAssist
 * @desc Text used for changing amount bought/sold.
 * For VisuStella MZ's Core Engine's Button Assist Window.
 * @default -10/+10
 *
 */
/* ----------------------------------------------------------------------------
 * Shop Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param General
 *
 * @param Width:num
 * @text Window Width
 * @parent General
 * @desc The usual width of the status window.
 * @default 352
 *
 * @param ParamChangeFontSize:num
 * @text Parameter Font Size
 * @parent General
 * @desc Font size used for parameter changes.
 * @default 22
 *
 * @param Translucent:num
 * @text Translucent Opacity
 * @parent General
 * @desc Opacity setting used for translucent window objects.
 * @default 64
 *
 * @param DrawBackRect:eval
 * @text Show Back Rectangles?
 * @parent General
 * @type boolean
 * @on Draw
 * @off Don't Draw
 * @desc Show back rectangles of darker colors to display information better?
 * @default true
 *
 * @param BackRectColor:str
 * @text Back Rectangle Color
 * @parent DrawBackRect:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 19
 *
 * @param EquipData
 * @text Equipment Data
 *
 * @param AlreadyEquipMarker:str
 * @text Already Equipped
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default E
 *
 * @param CannotEquipMarker:str
 * @text Can't Equip
 * @parent EquipData
 * @desc Marker used to show an actor cannot equip an item.
 * @default -
 *
 * @param EquipDelayMS:num
 * @text Delay MS
 * @parent EquipData
 * @type number
 * @min 1
 * @max 999
 * @desc How many milliseconds (MS) to delay the preview update?
 * This is to prevent lag spikes for equips only.
 * @default 240
 *
 * @param NoChangeMarker:str
 * @text No Changes
 * @parent EquipData
 * @desc Marker used to show no changes have occurred.
 * @default -
 *
 * @param DrawEquipData:func
 * @text JS: Draw Equip Data
 * @parent EquipData
 * @type note
 * @desc Code used to draw the equipment data for the Shop Status Window.
 * @default "// Set Variables\nconst lineHeight = this.lineHeight();\nconst paramheight = this.gaugeLineHeight() + 8;\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name, Type, and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\nif (this.drawItemEquipType(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\n\n// Draw Parameter Names\nconst params = this.actorParams();\nconst backY = y;\ny = height - (params.length * paramheight) - 4;\nlet paramX = x;\nlet paramWidth = 0;\nlet tableY = y;\nfor (const paramId of params) {\n    paramWidth = Math.max(this.drawParamName(paramId, x + 4, y + 4, width), paramWidth);\n    y += paramheight;\n}\n\n// Draw Actor Data\nconst actorMax = $gameParty.maxBattleMembers();\nconst actorWidth = Math.floor((width - paramWidth) / actorMax);\nparamWidth = width - (actorWidth * actorMax);\nfor (const actor of $gameParty.battleMembers()) {\n    const index = $gameParty.battleMembers().indexOf(actor);\n    const actorX = paramX + paramWidth + (index * actorWidth);\n    this.changePaintOpacity(actor.canEquip(this._item));\n    this.drawActorCharacter(actor, actorX + (actorWidth / 2), tableY);\n    let actorY = tableY;\n\n    // Draw Parameter Changes\n    for (const paramId of params) {\n        const diffY = actorY - ((lineHeight - paramheight) / 2);\n        this.drawActorParamDifference(actor, paramId, actorX, diffY, actorWidth);\n        actorY += paramheight;\n    }\n}\n\n// Draw Back Rectangles\nthis.drawItemDarkRect(paramX, backY, paramWidth, tableY - backY);\nfor (let i = 0; i < actorMax; i++) {\n    const actorX = paramX + paramWidth + (i * actorWidth);\n    this.drawItemDarkRect(actorX, backY, actorWidth, tableY - backY);\n}\nfor (const paramId of params) {\n    this.drawItemDarkRect(paramX, tableY, paramWidth, paramheight);\n    for (let i = 0; i < actorMax; i++) {\n        const actorX = paramX + paramWidth + (i * actorWidth);\n        this.drawItemDarkRect(actorX, tableY, actorWidth, paramheight);\n    }\n    tableY += paramheight;\n}"
 *
 * @param ItemData
 * @text Item Data
 *
 * @param ItemGeneral
 * @parent ItemData
 * @text Data Settings
 *
 * @param MaxIcons:num
 * @text Max State/Buff Icons
 * @parent ItemGeneral
 * @desc Maximum number of icons that can be displayed for Add/Remove States/Buffs.
 * @default 8
 *
 * @param MultiplierStandard:num
 * @text Multiplier Standard
 * @parent ItemGeneral
 * @desc Constant standard to filter out random values when calculating the damage multiplier.
 * @default 1000000
 *
 * @param DrawItemData:func
 * @text JS: Draw Item Data
 * @parent ItemGeneral
 * @type note
 * @desc Code used to draw the item data for the Shop Status Window.
 * @default "const lineHeight = this.lineHeight();\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\nlet hw = Math.floor(width / 2);\nlet hx = x + width - hw;\n\n// Draw Item Name and Quantity\nthis.drawItemName(this._item, x + this.itemPadding(), y, width - this.itemPadding() * 2);\nthis.drawItemDarkRect(x, y, width);\ny += lineHeight;\n\n// Draw Main Item Properties\nif (this.drawItemConsumable(x, y, hw)) y += 0;\nif (this.drawItemQuantity(hx, y, hw)) y += lineHeight;\nif (this._item.occasion < 3) {\n    y = this.drawItemDamage(x, y, width);\n    y = this.drawItemEffects(x, y, width);\n}\ny = this.drawItemCustomEntries(x, y, width);\n\n// Draw Remaining Item Properties\nif (this._item.occasion < 3) {\n    if (this.drawItemOccasion(x, y, hw)) y += 0;\n    if (this.drawItemScope(hx, y, hw)) y += lineHeight;\n    if (this.drawItemHitType(x, y, hw)) y += 0;\n    if (this.drawItemSuccessRate(hx, y, hw)) y += lineHeight;\n    if (this.drawItemSpeed(x, y, hw)) y += 0;\n    if (this.drawItemRepeats(hx, y, hw)) y += lineHeight;\n}\n\n// Fill Rest of the Window\nthis.drawItemDarkRect(x, y, width, height - y);"
 *
 * @param Vocabulary
 * @parent ItemData
 *
 * @param LabelConsume:str
 * @text Consumable
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Consumable
 *
 * @param Consumable:str
 * @text Yes
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✔
 *
 * @param NotConsumable:str
 * @text No
 * @parent LabelConsume:str
 * @desc Vocabulary used for this data entry.
 * @default ✘
 *
 * @param Occasions
 * @parent Vocabulary
 *
 * @param Occasion0:str
 * @text Always
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Anytime Use
 *
 * @param Occasion1:str
 * @text Battle Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Battle-Only
 *
 * @param Occasion2:str
 * @text Menu Screen
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default Field-Only
 *
 * @param Occasion3:str
 * @text Never
 * @parent Occasions
 * @desc Vocabulary used for this data entry.
 * @default -
 *
 * @param Scope
 * @parent Vocabulary
 *
 * @param Scope0:str
 * @text None
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default No Target
 *
 * @param Scope1:str
 * @text 1 Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Foe
 *
 * @param Scope2:str
 * @text All Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Foes
 *
 * @param Scope3:str
 * @text 1 Random Enemy
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Random Foe
 *
 * @param Scope4:str
 * @text 2 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 2 Random Foes
 *
 * @param Scope5:str
 * @text 3 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 3 Random Foes
 *
 * @param Scope6:str
 * @text 4 Random Enemies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 4 Random Foes
 *
 * @param Scope7:str
 * @text 1 Ally
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default 1 Ally
 *
 * @param Scope8:str
 * @text All Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Alive Allies
 *
 * @param Scope9:str
 * @text 1 Ally (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Ally
 *
 * @param Scope10:str
 * @text All Allies (Dead)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Dead Allies
 *
 * @param Scope11:str
 * @text The User
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default User
 *
 * @param Scope12:str
 * @text 1 Ally (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Any Ally
 *
 * @param Scope13:str
 * @text All Allies (DoA)
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default All Allies
 *
 * @param Scope14:str
 * @text Enemies & Allies
 * @parent Scope
 * @desc Vocabulary used for this data entry.
 * @default Everybody
 *
 * @param BattleCore
 * @text Battle Core Support
 * @parent Vocabulary
 *
 * @param ScopeRandomAny:str
 * @text x Random Any
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Any> notetag.
 * @default %1 Random Units
 *
 * @param ScopeRandomEnemies:str
 * @text x Random Enemies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Enemies> notetag.
 * @default %1 Random Foes
 *
 * @param ScopeRandomAllies:str
 * @text x Random Allies
 * @parent BattleCore
 * @desc Vocabulary used for <Target: x Random Allies> notetag.
 * @default %1 Random Allies
 *
 * @param ScopeAlliesButUser:str
 * @text All Allies But User
 * @parent BattleCore
 * @desc Vocabulary used for <Target: All Allies But User> notetag.
 * @default Other Allies
 *
 * @param ScopeAllyOrEnemy:str
 * @text Ally or Enemy
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Ally or Enemy> notetag.
 * @default Ally/Enemy
 *
 * @param ScopeEnemyOrAlly:str
 * @text Enemy or Ally
 * @parent BattleCore
 * @desc Vocabulary used for <Target: Enemy or Ally> notetag.
 * @default Enemy/Ally
 *
 * @param LabelSpeed:str
 * @text Speed
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Speed
 *
 * @param Speed2000:str
 * @text >= 2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fastest
 *
 * @param Speed1000:str
 * @text >= 1000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Faster
 *
 * @param Speed1:str
 * @text >= 1 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Fast
 *
 * @param Speed0:str
 * @text == 0 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Normal
 *
 * @param SpeedNeg999:str
 * @text >= -999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slow
 *
 * @param SpeedNeg1999:str
 * @text >= -1999 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slower
 *
 * @param SpeedNeg2000:str
 * @text <= -2000 Speed
 * @parent LabelSpeed:str
 * @desc Vocabulary used for this data entry.
 * @default Slowest
 *
 * @param LabelSuccessRate:str
 * @text Success Rate
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Accuracy
 *
 * @param LabelRepeats:str
 * @text Repeats
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Hits
 *
 * @param LabelHitType:str
 * @text Hit Type
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Type
 *
 * @param HitType0:str
 * @text Certain Hit
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Neutral
 *
 * @param HitType1:str
 * @text Physical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Physical
 *
 * @param HitType2:str
 * @text Magical
 * @parent LabelHitType:str
 * @desc Vocabulary used for this data entry.
 * @default Magical
 *
 * @param LabelElement:str
 * @text Element
 * @parent Vocabulary
 * @desc Vocabulary used for this data entry.
 * @default Element
 *
 * @param ElementWeapon:str
 * @text Weapon-Based
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[97]Weapon
 *
 * @param ElementNone:str
 * @text Nonelement Element
 * @parent LabelElement:str
 * @desc Vocabulary used for this data entry.
 * @default \I[160]No Element
 *
 * @param DamageType
 * @text Damage Type
 * @parent Vocabulary
 *
 * @param DamageType1:str
 * @text HP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType2:str
 * @text MP Damage
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Damage Multiplier
 *
 * @param DamageType3:str
 * @text HP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType4:str
 * @text MP Recovery
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Recovery Multiplier
 *
 * @param DamageType5:str
 * @text HP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param DamageType6:str
 * @text MP Drain
 * @parent DamageType
 * @desc Vocabulary used for this data entry. If Visu_1_BattleCore
 * is installed, priority goes to its Damage Style settings.
 * @default %1 Drain Multiplier
 *
 * @param Effects
 * @parent Vocabulary
 *
 * @param LabelRecoverHP:str
 * @text Recover HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverMP:str
 * @text Recover MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelRecoverTP:str
 * @text Recover TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Recovery
 *
 * @param LabelSelfGainTP:str
 * @text Self Gain TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default User %1
 *
 * @param LabelDamageHP:str
 * @text Damage HP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageMP:str
 * @text Damage MP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelDamageTP:str
 * @text Damage TP
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default %1 Damage
 *
 * @param LabelApply:str
 * @text Add State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Applies
 *
 * @param LabelRemove:str
 * @text Remove State/Buff
 * @parent Effects
 * @desc Vocabulary used for this data entry.
 * @default Removes
 *
 */
//=============================================================================

function _0x1a1f(_0x5e9a0e,_0xbee833){const _0x2a8564=_0x2a85();return _0x1a1f=function(_0x1a1f43,_0x3386e8){_0x1a1f43=_0x1a1f43-0x143;let _0x389aa3=_0x2a8564[_0x1a1f43];return _0x389aa3;},_0x1a1f(_0x5e9a0e,_0xbee833);}function _0x2a85(){const _0x2e9d05=['show','isEquipChangeOk','_shopTrackingData','Game_BattlerBase_param_artifact','changeTextColor','categoryList','damage','isEquipAtypeOk','_purchaseOnly','NoChangeMarker','Step2End','(+%1)','isSceneShop','cursorDown','drawParamsItemsEquipsCore','Game_Actor_forceChangeEquip','paramValueByName','drawItemEffectsHpRecovery','canSortListItemScene','Window_ItemCategory_initialize','sort','setStatusWindow','isPressed','isStackableArtifact','value2','Game_Actor_artifact','drawNewLabelIcon','changeEquipById','drawUpdatedBeforeParamValue','isPartyArtifact','paramId','releaseUnequippableItems','NonRemoveETypes','drawItemQuantity','createStatusWindow','drawItemStyleIconText','Step2Start','BackRectColor','SwitchBuy','random','NonOptimizeETypes','process_VisuMZ_ItemsEquipsCore_RegExp','drawItemEffectsMpRecovery','Window_Selectable_setHelpWindowItem','isShowNew','Parse_Notetags_EnableJS','deepCopy','commandSellItemsEquipsCore','numberWindowRect','Game_Actor_changeEquip','slotWindowRectItemsEquipsCore','Scope7','forceResetEquipSlots','HP\x20RECOVERY','_itemWindow','hpRate','commandStyleCheck','DrawBackRect','shouldCommandWindowExist','reloadMapIfUpdated','_buyWindow','Game_BattlerBase_meetsItemConditions','JSON','postCreateItemsEquipsCore','addEquipCommand','getItemSpeedText','left','Scene_Item_create','Scene_Battle','Scene_Item','onSellItem','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Blacklist','ScopeRandomAllies','Scene_Equip_onActorChange','canShiftRemoveEquipment','initNewLabelSprites','index','Scene_Item_createItemWindow','_bypassReleaseUnequippableItemsItemsEquipsCore','helpWindowRect','_getEquipRequirements','KeyItemProtect','AllArmors','_itemData','maxVisibleItems','MenuPortraits','ScopeRandomEnemies','isEquipCommandEnabled','ShopScene','cursorPageup','refreshActor','checkItemConditionsSwitchNotetags','drawItemDarkRect','clearNewLabelFromItem','callUpdateHelp','equip','icon','itemPadding','values','Game_BattlerBase_param','Speed0','EVAL','addShopTrackingItem','battleMembers','createCommandWindow','postCreateSellWindowItemsEquipsCore','drawCustomShopGraphicLoad','addItemCategory','isVisuMzLocalizationEnabled','ScopeRandomAny','Window_ItemList_colSpacing','cursorPagedown','sellPriceOfItem','onMenuImageLoad','setHp','effects','BuyTurnSwitchOn','ARRAYSTR','normalColor','Scope%1','242PogdNF','CmdCancelRename','consumeItem','auto','loadPicture','isUseModernControls','getItemQuantityText','getItemEffectsHpRecoveryLabel','description','FieldUsable','processShiftRemoveShortcut','itemLineRect','armor-%1','buyWindowRect','CmdHideDisabled','itemHasEquipLimit','playCancel','SetupProxyItemGroups','includes','isClearCommandAdded','buffIconIndex','prepareItemCustomData','_slotId','switchProxyItem','rateMP','process_VisuMZ_ItemsEquipsCore_Notetags','refreshActorEquipSlotsIfUpdated','_armorIDs','_categoryWindow','ItemMenuStatusRect','Scene_Equip_statusWindowRect','getItemDamageElementText','currentClass','itemAt','maxCols','_list','pagedown','optimizeCmdDesc','_dummyWindow','equipSlotIndex','contents','param','ParamValueFontSize','removeBattleTestArtifacts','isBuyCommandEnabled','some','AlreadyEquipMarker','QUANTITY','Game_Actor_discardEquip','occasion','updateChangedSlots','2443svTjZs','drawActorParamDifference','getProxyItem','SwitchID','prototype','onBuyItem','hitIndex','price','isClicked','DrawEquipData','limitedPageUpDownSceneCheck','Parse_Notetags_Prices','_allowArtifactParamBase','elementId','selfTP','getItemsEquipsCoreBackColor2','CoreEngine','sortListItemScene','Scene_Shop_commandBuy','purifyCursedEquips','Game_Actor_equips_artifacts','repeats','getPrototypeOf','Game_Party_consumeItem','isOptimizeEquipOk','middle','clearNewItem','itemWindowRect','successRate','placeItemNewLabel','getItemSpeedLabel','traitObjects','playBuzzerSound','?????','buyingPrice','drawItemConsumable','value','KeyItems','setItem','prepareRefreshItemsEquipsCoreLayout','commandNameWindowDrawBackground','equipItems','isEquipItem','text','clearCmdDesc','AlwaysUsable','activate','_paramPlus','onBuyOk','characterName','CmdTextAlign','innerHeight','refreshItemsEquipsCoreNoMenuImage','paramchangeTextColor','goodsToItem','ShopListingRegExp','_newItemsList','Window_ShopBuy_item','setShopStatusWindowMode','getItemSuccessRateLabel','colSpacing','Scene_Shop_activateSellWindow','MaxItems','ScopeAlliesButUser','getItemEffectsHpDamageLabel','List','ShowShopStatus','ItemScene','weaponTypes','modifiedBuyPriceItemsEquipsCore','Game_Party_initialize','DrawPortraitJS','playCursorSound','mat','Parse_Notetags_EquipSlots','postCreateItemWindowModernControls','getItemDamageAmountLabelBattleCore','setHelpWindowItem','addShopTrackingItemSell','RegularItems','Equip\x20the\x20strongest\x20available\x20equipment.','ListWindowCols','387RLhBGd','drawUpdatedParamName','updateHelp','drawEquipData','isHoverEnabled','commandEquip','drawItemHitType','Scene_Equip_createSlotWindow','isLearnedSkill','atypeId','TP\x20RECOVERY','getItemDamageAmountTextOriginal','Window_EquipItem_includes','_scene','isMainMenuCoreMenuImageOptionAvailable','makeDeepCopy','128kJEKZF','gaugeBackColor','_customItemInfo','_shopStatusMenuAlly','visible','toUpperCase','USER\x20TP\x20GAIN','categories','allMembers','isSoleArmorType','_resetFontSize','addShopTrackingGoldSell','SCOPE','FadeLimit','actorId','Style','_etypeIDs','paramPlus','Icon','makeItemList','Scope1','smallParamFontSize','Window_EquipItem_isEnabled','isBattleTest','ELEMENT','hide','members','Scene_Shop_onCategoryCancel','call','Scene_Shop_createCategoryWindow','cursorRight','isTroopArtifact','textLocale','concat','_bypassProxy','Speed2000','cancel','paintOpacity','ParseItemNotetags','boxWidth','mainFontSize','refresh','CmdIconBuy','EquipAdjustHpMp','Scene_Equip_helpWindowRect','inBattle','DAMAGE\x20MULTIPLIER','changeBuff','11235yoxdhB','addStateBuffChanges','VisuMZ_2_WeaponSwapSystem','uiInputPosition','registerCommand','isCursedItem','forceChangeEquip','%1-%2','A%1','mdf','smoothSelect','Game_BattlerBase_canEquip_artifact','createSellWindow','onBuyCancel','Game_Actor_isEquipChangeOk','setupItemDamageTempActors','opacity','getItemDamageAmountLabelOriginal','setObject','addState','isPlaytest','buttonAssistRemove','PurifyActors','toLowerCase','activateSellWindow','allowShiftScrolling','anyEmptyEquipSlotsOfSameEtype','298050QYfXct','Parse_Notetags_Category','getItemEffectsTpRecoveryText','SellTurnSwitchOn','buttonAssistSlotWindowShift','maxItems','Window_Selectable_update','value1','numberWindowRectItemsEquipsCore','isDualWield','test','drawItemEffectsRemovedStatesBuffs','_bypassNewLabel','DrawItemData','ItemQuantityFmt','isOpen','sellWindowRect','isItem','max','updateMoneyAmount','0000','IncludeShopItem','isDrawItemNumber','EFFECT_GAIN_TP','baseSellingPrice','Remove\x20all\x20available\x20equipment.','processCursorSpecialCheckModernControls','removeStateBuffChanges','isEnabled','Scene_Shop_onBuyCancel','ParseArmorNotetags','itemEnableJS','maxItemAmount','etypeId','helpAreaTop','getNextAvailableEtypeId','PurifyParty','HiddenItemB','categoryNameWindowCenter','isCommandEnabled','deselect','drawItemEffectsHpDamage','isClearCommandEnabled','statusWidth','updateCommandNameWindow','equips','createCategoryWindow','select','isShiftRemoveShortcutEnabled','getItemEffects','Scene_Load_reloadMapIfUpdated','drawItemCustomEntryLine','discardEquip','_cache','scrollTo','isGoodShown','statusWindowRect','getShopTrackingItemSell','SetupArtifactItemIDs','maxBattleMembers','addShopTrackingItemBuy','top','getMatchingInitEquip','parameters','_equips','getItemEffectsSelfTpGainLabel','_tempActorB','paramJS','textSizeEx','initShopTrackingData','ParamChangeFontSize','SortByIDandPriority','onTouchSelectModern','categoryStyle','_calculatingJSParameters','partyArtifactIDs','getItemEffectsTpDamageText','setItemWindow','_slotWindow','buy','Scene_Shop_commandWindowRect','TP\x20DAMAGE','onSlotCancel','helpWindowRectItemsEquipsCore','DrawIcons','length','EFFECT_RECOVER_HP','_actor','createItemWindow','getShopTrackingItemBuy','doSell','processShopCondListingOnBuyItem','deactivate','ParseWeaponNotetags','ScopeAllyOrEnemy','geUpdatedLayoutStatusWidth','gainItem','drawing','getShopTrackingItem','Scene_Shop_onSellCancel','meetsEquipRequirements','parse','commandNameWindowCenter','getItemDamageAmountText','uiMenuStyle','actor','fontSize','move','FontColor','getItemIdWithName','postCreateSlotWindowItemsEquipsCore','troopArtifacts','newLabelEnabled','getColor','innerWidth','drawIcon','buttonAssistSmallIncrement','adjustHiddenShownGoods','getMenuImage','prepareNewEquipSlotsOnLoad','Game_BattlerBase_paramPlus_artifact','Speed1','hideDisabledCommands','goldWindowRect','sellPriceRate','_newLabelSprites','possession','setCategory','start','MaxIcons','getItemEffectsSelfTpGainText','convertInitEquipsToItems','number','STRUCT','Parse_Notetags_Batch','getItemConsumableText','TextAlign','MP\x20DAMAGE','Scene_Shop_numberWindowRect','buttonAssistText2','meetsItemConditionsJS','getItemEffectsTpRecoveryLabel','note','loadFaceImages','cursorLeft','equipSlots','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20enabled\x20=\x20true;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','nonOptimizeEtypes','MAT','drawCurrencyValue','isShiftShortcutKeyForRemove','initialize','blt','Window_ShopSell_isEnabled','numItems','initNewItemsList','getEquipRequirements','OffsetY','fill','Window_ItemList_drawItem','lineHeight','_goodsCount','onTouchSelectModernControls','cursorUp','agi','isUseParamNamesWithIcons','bind','addShopTrackingGoldBuy','CmdIconCancel','_buyWindowLastIndex','Speed1000','process_VisuMZ_ItemsEquipsCore_EquipSlots','sellingPrice','BatchShop','StatusWindowWidth','windowPadding','iconText','StatusWindow','categoryItemTypes','ParseClassNotetags','itypeId','isUseItemsEquipsCoreUpdatedLayout','dataId','constructor','clamp','playOkSound','<%1:[\x20]([\x5c+\x5c-]\x5cd+)>','height','REMOVED\x20EFFECTS','SetupProxyItemGroup','Scene_Shop_doSell','Game_Actor_paramPlus','refreshCursor','luk','replace','SortBy','AllItems','isBottomHelpMode','sortPriority','createNewLabelSprite','money','getItemScopeText','Window_Selectable_refresh','Window_EquipCommand_initialize','3156740feZqoK','VisuMZ_0_CoreEngine','createTempActorEquips','background','Game_Party_numItems','Consumable','CursedTextPopup','OffsetX','setValue','keyItem','prepare','changePaintOpacity','Scene_Shop_goldWindowRect','_newLabelOpacityChange','REPEAT','isArtifact','match','meetsClassRequirements','fontFace','sell','paramBase','helpDesc','Scene_Shop_sellWindowRect','NUM','ShopMenuStatusStandard','onActorChange','buttonAssistText1','DEF','troopArtifactIDs','_scrollDuration','EnableLayout','isCancelled','Scene_Equip_onSlotOk','categoryStyleCheck','buyWindowRectItemsEquipsCore','level','Window_ShopStatus_setItem','Param','getDamageStyle','name','activateItemWindow','atk','canUse','Window_ItemList_makeItemList','_shopStatusMenuMode','onSellCancel','currentExt','onBuyCancelItemsEquipsCore','onTouchSelect','allowCreateStatusWindow','isHandled','PurchaseOnly','_statusWindow','_item','ARRAYFUNC','onTouchOk','right','MDF','Window_ShopBuy_refresh','EFFECT_RECOVER_MP','type','params','onSellOk','setupBattleTestItems','ARRAYSTRUCT','systemColor','iconWidth','ShiftShortcutKey','Scene_ItemBase_activateItemWindow','Scene_Shop_create','getItemEffectsTpDamageLabel','Parse_Notetags_ParamJS','addOptimizeCommand','_weaponIDs','ceil','Window_ShopBuy_goodsToItem','drawParamText','addCommand','Scene_Shop_createSellWindow','addLoadListener','BuyPriceJS','categoryNameWindowDrawText','iconIndex','onSlotOk','getEtypeIdWithName','def','LayoutStyle','_doubleTouch','onDatabaseLoaded','contentsBack','indexOf','isArmor','buttonAssistKey3','width','_numberWindow','meetsItemConditions','itemWindowRectItemsEquipsCore','+%1','LabelDamageMP','Damage\x20Formula\x20Error\x20for\x20%1','ATK','drawItemName','_skillIDs','getItemDamageElementLabel','drawItemEffectsTpDamage','removeState','CheckCursedItemMsg','textColor','setNewItem','Scene_Shop_onSellOk','update','LabelHitType','resetShopSwitches','Window_ItemCategory_setItemWindow','MaxWeapons','getInputMultiButtonStrings','getItemEffectsAddedStatesBuffsText','consumable','Parse_Notetags_Sorting','LabelRecoverMP','getClassRequirements','equipTypes','processHandling','CONSUMABLE','ItemQuantityFontSize','AllWeapons','FadeSpeed','splice','isOptimizeCommandAdded','artifactIDs','EFFECT_ADD_BUFF','===','onCategoryCancel','MaxHP','×%1','getItemSuccessRateText','drawItemEffectsTpRecovery','optKeyItemsNumber','MaxMP','uiHelpPosition','ElementWeapon','floor','drawPossession','return\x200','Scene_Shop_sellingPrice','getEtypeIDsCache','forceChangeEquipSlots','partyArtifacts','_handlers','drawActorCharacter','equipAdjustHpMp','EFFECT_ADD_STATE','buttonAssistCategory','Slots','HideAllSwitches','fillRect','isProxyItem','_sellWindow','every','calcWindowHeight','LabelSpeed','ScopeEnemyOrAlly','weapon-%1','_allowArtifactTraitObjects','updatedLayoutStyle','resetFontSettings','Window_ItemList_item','drawItemNumber','processTouchModernControls','needsNewTempActor','drawText','getItemEffectsRemovedStatesBuffsText','addBuyCommand','Pick\x20and\x20choose\x20equipment\x20to\x20change.','down','CmdIconClear','drawItemData','MP\x20RECOVERY','Scene_Equip_commandWindowRect','Scene_Boot_onDatabaseLoaded','categoryWindowRectItemsEquipsCore','STR','drawItemScope','_getClassRequirements','Step1End','setTopRow','isHovered','Game_Actor_tradeItemWithParty','drawItemEquipType','3499805xkxRRQ','LabelConsume','ActorResetEquipSlots','canEquip','_commandNameWindow','getEtypeIDs','getItemRepeatsLabel','getClassIdWithName','refreshDelay','+%1%','flatMP','LabelRecoverHP','drawItemDamageElement','addInnerChild','setItemDelay','getItemEffectsRemovedStatesBuffsLabel','SUCCESS\x20RATE','mainAreaBottom','getItemEffectsHpDamageText','Scene_Shop_buyWindowRect','pop','Scene_Shop','_resetFontColor','drawTextEx','buttonAssistKey1','Occasion%1','prepareNextScene','(%1)','LUK','getItemEffectsHpRecoveryText','optimizeEquipments','isSkill','placeNewLabel','format','Scene_Shop_categoryWindowRect','processCursorMove','exit','Scene_Equip_createCommandWindow','FontFace','helpAreaHeight','EQUIP_DELAY_MS','equip2','versionId','ConvertParams','sellWindowRectItemsEquipsCore','HP\x20DAMAGE','setMp','createBitmap','isTriggered','onCategoryCancelItemsEquipsCore','powerUpColor','paramPlusItemsEquipsCoreCustomJS','CmdStyle','LabelApply','round','push','defaultItemMax','drawItemSuccessRate','Scene_Shop_buyingPrice','SpeedNeg1999','gold','isRightInputMode','hasItem','gainTP','mainAreaHeight','pageup','item-%1','Step3End','Game_Party_setupBattleTestItems_artifact','SellTurnSwitchOff','resetTextColor','center','6QelgNa','buttonAssistOffset3','getTextColor','Scene_Item_itemWindowRect','Translucent','ITEMS_EQUIPS_CORE','version','processCursorMoveModernControls','getItemsEquipsCoreBackColor1','paramValueFontSize','Width','commandWindowRect','bestEquipItem','ItemsEquipsCore','onSlotOkAutoSelect','isSellCommandEnabled','speed','_helpWindow','SellPriceRate','EquipScene','min','addSellCommand','isEquipTypeSealed','mmp','addCancelCommand','_itemIDs','ElementNone','_newLabelOpacityUpperLimit','getInputButtonString','Game_Party_gainItem_artifact','updateNewLabelOpacity','createCommandNameWindow','buttonAssistKey2','_commandWindow','tpGain','commandSell','getItemEffectsMpDamageText','shift','ConvertNumberToString','SPEED','bitmap','foreground','determineBaseSellingPrice','drawParamName','commandBuyItemsEquipsCore','drawItemKeyData','getItemHitTypeLabel','UNDEFINED!','maxmp','updateCategoryNameWindow','\x5cI[%1]%2','#%1','_newLabelOpacity','getItemRepeatsText','drawItemEffectsSelfTpGain','nonRemovableEtypes','VisuMZ_1_SkillsStatesCore','proxyItem','drawCustomShopGraphic','addClearCommand','onCategoryOk','wtypeId','getWeaponIdWithName','drawUpdatedParamValueDiff','Nonconsumable','MultiplierStandard','getItemEffectsAddedStatesBuffsLabel','powerDownColor','setHandler','Parse_Notetags_ParamValues','onSellOkItemsEquipsCore','Window_Selectable_initialize','%1%','Game_Item_setObject','Window_ShopBuy_price','hideNewLabelSprites','optimize','rateHP','getArmorIdWithName','ARMOR','status','loadSystem','drawItemEffectsAddedStatesBuffs','drawItemRepeats','_tempActor','isSoleWeaponType','EFFECT_REMOVE_BUFF','_buttonAssistWindow','canConsumeItem','isCursorMovable','drawItemDamage','isEquipped','_tempActorA','actorParams','MANUAL','processDownCursorSpecialCheckModernControls','initEquips','tradeItemWithParty','remove','\x5cb%1\x5cb','localeCompare','buttonAssistItemListRequirement','_data','addChild','nextActor','Categories','object','\x5cI[%1]','Scene_Item_createCategoryWindow','getItemEffectsMpDamageLabel','14545564pFwXZA','drawItemOccasion','drawItem','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','_classIDs','isKeyItem','getShopTrackingData','Scene_Equip_slotWindowRect','getEmptyEquipSlotOfSameEtype','_categoryNameWindow','slotWindowRect','makeCommandList','Scene_Equip_onSlotCancel','LabelSuccessRate','isRepeated','RegExp','drawItemCustomEntries','HIT\x20TYPE','commandStyle','drawNewLabelText','commandWindowRectItemsEquipsCore','categoryNameWindowDrawBackground','OCCASION','meetsShopListingConditions','trim','SwitchSell','Scene_Item_helpWindowRect','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MaxHP\x20=\x200;\x20let\x20MaxMP\x20=\x200;\x20let\x20ATK\x20=\x200;\x20let\x20DEF\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20let\x20MAT\x20=\x200;\x20let\x20MDF\x20=\x200;\x20let\x20AGI\x20=\x200;\x20let\x20LUK\x20=\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20user\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20target\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20a\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20const\x20b\x20=\x20this;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20try\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20%1\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x20catch\x20(e)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20($gameTemp.isPlaytest())\x20console.log(e);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20return\x20[MaxHP,\x20MaxMP,\x20ATK,\x20DEF,\x20MAT,\x20MDF,\x20AGI,\x20LUK][paramId];\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','goldWindowRectItemsEquipsCore','checkShiftRemoveShortcut','clear','statusWindowRectItemsEquipsCore','RemoveEquipText','item','CommandAddOptimize','getSkillIdWithName','BuyTurnSwitchOff','VisuMZ_1_BattleCore','drawRemoveItem','scope','Scene_Shop_helpWindowRect','112959CUcSlD','create','_category','buttonAssistText3','_checkEquipRequirements','changeEquipBase','BattleUsable','items','getItemEffectsMpRecoveryLabel','Scene_Item_categoryWindowRect','equipCmdDesc','log','iconHeight','ADDED\x20EFFECTS','postCreateCategoryWindowItemsEquipsCore','W%1','_forcedSlots','changeEquip','filter','getItemHitTypeText','EquipParams','categoryWindowRect','drawItemCost','code','NAME','Step1Start','allowCommandWindowCursorUp','mainFontFace','isClearEquipOk','drawItemStyleIcon','hideAdditionalSprites','getShopTrackingGoldBuy','isOpenAndActive','getItemDamageAmountLabel','split','Scene_Shop_statusWindowRect','CommandAddClear','createCategoryNameWindow','WEAPON','getItemOccasionText','meetsItemConditionsNotetags','clearEquipments','damageColor','HiddenItemA','Type','Settings','mainAreaTop','SpeedNeg999','Game_Party_gainItem','fontSizeRatio','commandName','getItemConsumableLabel','meetsEquipRequirement','Scene_Shop_doBuy','getItemColor','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','adjustItemWidthByStatus','isWeapon','VisuMZ_1_MainMenuCore','New','active','currencyUnit','mainCommandWidth','flatHP','ParseAllNotetags','elements','revertGlobalNamespaceVariables','removeBuff','drawItemEffects','itemTextAlign','IconSet','Game_Enemy_traitObjects_artifact','drawItemActorMenuImage','BorderRegExp','map','ShowAllSwitches','processShopCondListingOnSellItem','itemDataFontSize','_goods','HideAnySwitches','QoL','createSlotWindow','RemoveEquipIcon','Window_ShopCommand_initialize','Actors','popScene','FontSize','ARRAYEVAL','Window_ItemList_maxCols','Window_EquipStatus_refresh','commandNameWindowDrawText','removeDebuff','drawItemDamageAmount','setHelpWindow','Step3Start','drawItemEffectsMpDamage','_cache_etypeIDs'];_0x2a85=function(){return _0x2e9d05;};return _0x2a85();}const _0x1149b0=_0x1a1f;(function(_0x463732,_0x50d9ba){const _0x3e02f9=_0x1a1f,_0x48b60b=_0x463732();while(!![]){try{const _0x32abbd=parseInt(_0x3e02f9(0x380))/0x1+parseInt(_0x3e02f9(0x45a))/0x2*(parseInt(_0x3e02f9(0x51f))/0x3)+parseInt(_0x3e02f9(0x1e4))/0x4+-parseInt(_0x3e02f9(0x2a1))/0x5*(parseInt(_0x3e02f9(0x2e9))/0x6)+parseInt(_0x3e02f9(0x48d))/0x7*(-parseInt(_0x3e02f9(0x4ef))/0x8)+parseInt(_0x3e02f9(0x4df))/0x9*(-parseInt(_0x3e02f9(0x53a))/0xa)+parseInt(_0x3e02f9(0x357))/0xb;if(_0x32abbd===_0x50d9ba)break;else _0x48b60b['push'](_0x48b60b['shift']());}catch(_0x1f761f){_0x48b60b['push'](_0x48b60b['shift']());}}}(_0x2a85,0xa8915));var label='ItemsEquipsCore',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x1149b0(0x392)](function(_0x54fcc7){const _0x344f7e=_0x1149b0;return _0x54fcc7[_0x344f7e(0x339)]&&_0x54fcc7[_0x344f7e(0x462)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x1149b0(0x3ad)]=VisuMZ[label][_0x1149b0(0x3ad)]||{},VisuMZ['ConvertParams']=function(_0x1fa141,_0x540588){const _0x136e2f=_0x1149b0;for(const _0x463245 in _0x540588){if(_0x463245[_0x136e2f(0x1f4)](/(.*):(.*)/i)){const _0x45c4cb=String(RegExp['$1']),_0x5e99d9=String(RegExp['$2'])['toUpperCase']()[_0x136e2f(0x36f)]();let _0x2cb99c,_0x559447,_0x42b39d;switch(_0x5e99d9){case _0x136e2f(0x1fb):_0x2cb99c=_0x540588[_0x463245]!==''?Number(_0x540588[_0x463245]):0x0;break;case'ARRAYNUM':_0x559447=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447[_0x136e2f(0x3ca)](_0x1a3b55=>Number(_0x1a3b55));break;case _0x136e2f(0x447):_0x2cb99c=_0x540588[_0x463245]!==''?eval(_0x540588[_0x463245]):null;break;case _0x136e2f(0x3d7):_0x559447=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447[_0x136e2f(0x3ca)](_0xe1c90e=>eval(_0xe1c90e));break;case _0x136e2f(0x41f):_0x2cb99c=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):'';break;case'ARRAYJSON':_0x559447=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447['map'](_0x2fcc15=>JSON['parse'](_0x2fcc15));break;case'FUNC':_0x2cb99c=_0x540588[_0x463245]!==''?new Function(JSON[_0x136e2f(0x17d)](_0x540588[_0x463245])):new Function(_0x136e2f(0x273));break;case _0x136e2f(0x21a):_0x559447=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447[_0x136e2f(0x3ca)](_0x570ee7=>new Function(JSON['parse'](_0x570ee7)));break;case _0x136e2f(0x299):_0x2cb99c=_0x540588[_0x463245]!==''?String(_0x540588[_0x463245]):'';break;case _0x136e2f(0x457):_0x559447=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447[_0x136e2f(0x3ca)](_0x564c04=>String(_0x564c04));break;case _0x136e2f(0x19d):_0x42b39d=_0x540588[_0x463245]!==''?JSON[_0x136e2f(0x17d)](_0x540588[_0x463245]):{},_0x1fa141[_0x45c4cb]={},VisuMZ[_0x136e2f(0x2cc)](_0x1fa141[_0x45c4cb],_0x42b39d);continue;case _0x136e2f(0x224):_0x559447=_0x540588[_0x463245]!==''?JSON['parse'](_0x540588[_0x463245]):[],_0x2cb99c=_0x559447[_0x136e2f(0x3ca)](_0x5084d2=>VisuMZ[_0x136e2f(0x2cc)]({},JSON[_0x136e2f(0x17d)](_0x5084d2)));break;default:continue;}_0x1fa141[_0x45c4cb]=_0x2cb99c;}}return _0x1fa141;},(_0x575e0e=>{const _0x31e5aa=_0x1149b0,_0x3d7d82=_0x575e0e[_0x31e5aa(0x20b)];for(const _0x33089b of dependencies){if(!Imported[_0x33089b]){alert(_0x31e5aa(0x3b7)[_0x31e5aa(0x2c2)](_0x3d7d82,_0x33089b)),SceneManager[_0x31e5aa(0x2c5)]();break;}}const _0x505aad=_0x575e0e['description'];if(_0x505aad['match'](/\[Version[ ](.*?)\]/i)){const _0x29faad=Number(RegExp['$1']);_0x29faad!==VisuMZ[label][_0x31e5aa(0x2ef)]&&(alert(_0x31e5aa(0x35a)[_0x31e5aa(0x2c2)](_0x3d7d82,_0x29faad)),SceneManager[_0x31e5aa(0x2c5)]());}if(_0x505aad[_0x31e5aa(0x1f4)](/\[Tier[ ](\d+)\]/i)){const _0x29800c=Number(RegExp['$1']);_0x29800c<tier?(alert(_0x31e5aa(0x428)[_0x31e5aa(0x2c2)](_0x3d7d82,_0x29800c,tier)),SceneManager[_0x31e5aa(0x2c5)]()):tier=Math[_0x31e5aa(0x54c)](_0x29800c,tier);}VisuMZ[_0x31e5aa(0x2cc)](VisuMZ[label][_0x31e5aa(0x3ad)],_0x575e0e[_0x31e5aa(0x157)]);})(pluginData),PluginManager[_0x1149b0(0x523)](pluginData[_0x1149b0(0x20b)],'ActorChangeEquipSlots',_0x13c92e=>{const _0xb773eb=_0x1149b0;VisuMZ[_0xb773eb(0x2cc)](_0x13c92e,_0x13c92e);const _0x56c3b8=_0x13c92e[_0xb773eb(0x3d4)][_0xb773eb(0x3ca)](_0x3c6e96=>$gameActors['actor'](_0x3c6e96)),_0x29c5c9=_0x13c92e[_0xb773eb(0x27d)]['map'](_0x3e3e7b=>$dataSystem[_0xb773eb(0x25d)][_0xb773eb(0x23e)](_0x3e3e7b['trim']()));for(const _0x24c5a7 of _0x56c3b8){if(!_0x24c5a7)continue;_0x24c5a7['forceChangeEquipSlots'](_0x29c5c9);}}),PluginManager[_0x1149b0(0x523)](pluginData[_0x1149b0(0x20b)],_0x1149b0(0x2a3),_0x29b0d8=>{const _0x3ba6c0=_0x1149b0;VisuMZ[_0x3ba6c0(0x2cc)](_0x29b0d8,_0x29b0d8);const _0x1010ed=_0x29b0d8['Actors'][_0x3ba6c0(0x3ca)](_0x21a533=>$gameActors['actor'](_0x21a533));for(const _0xd6c3b of _0x1010ed){if(!_0xd6c3b)continue;_0xd6c3b[_0x3ba6c0(0x415)]();}}),PluginManager['registerCommand'](pluginData[_0x1149b0(0x20b)],_0x1149b0(0x535),_0x393325=>{const _0x5b501a=_0x1149b0;if($gameParty['inBattle']())return;VisuMZ[_0x5b501a(0x2cc)](_0x393325,_0x393325);const _0x313ab6=_0x393325[_0x5b501a(0x3d4)][_0x5b501a(0x3ca)](_0x1f4c93=>$gameActors[_0x5b501a(0x181)](_0x1f4c93));for(const _0x235cab of _0x313ab6){if(!_0x235cab)continue;_0x235cab['purifyCursedEquips']();}}),PluginManager[_0x1149b0(0x523)](pluginData[_0x1149b0(0x20b)],_0x1149b0(0x55e),_0x2b771c=>{const _0x407977=_0x1149b0;if($gameParty[_0x407977(0x51c)]())return;$gameParty[_0x407977(0x4a0)]();}),PluginManager[_0x1149b0(0x523)](pluginData[_0x1149b0(0x20b)],_0x1149b0(0x1c5),_0x31179e=>{const _0x120c8e=_0x1149b0;VisuMZ[_0x120c8e(0x2cc)](_0x31179e,_0x31179e);const _0x2fe6a2=[],_0x28fa65=_0x31179e[_0x120c8e(0x429)][_0x120c8e(0x3ca)](_0x123275=>_0x123275[_0x120c8e(0x4f4)]()[_0x120c8e(0x36f)]()),_0x555724=_0x31179e['Whitelist'][_0x120c8e(0x3ca)](_0x1ffcd2=>_0x1ffcd2['toUpperCase']()[_0x120c8e(0x36f)]()),_0x166a1c=_0x31179e[_0x120c8e(0x29c)]>=_0x31179e[_0x120c8e(0x399)]?_0x31179e[_0x120c8e(0x399)]:_0x31179e['Step1End'],_0x966e26=_0x31179e['Step1End']>=_0x31179e[_0x120c8e(0x399)]?_0x31179e['Step1End']:_0x31179e[_0x120c8e(0x399)],_0x367451=Array(_0x966e26-_0x166a1c+0x1)[_0x120c8e(0x1b6)]()[_0x120c8e(0x3ca)]((_0x586f61,_0x196f8a)=>_0x166a1c+_0x196f8a);for(const _0x507812 of _0x367451){const _0x1396b6=$dataItems[_0x507812];if(!_0x1396b6)continue;if(!VisuMZ[_0x120c8e(0x2f6)]['IncludeShopItem'](_0x1396b6,_0x28fa65,_0x555724))continue;_0x2fe6a2['push']([0x0,_0x507812,0x0,_0x1396b6['price']]);}const _0x1105b3=_0x31179e[_0x120c8e(0x3eb)]>=_0x31179e[_0x120c8e(0x405)]?_0x31179e[_0x120c8e(0x405)]:_0x31179e[_0x120c8e(0x3eb)],_0x3d08e8=_0x31179e[_0x120c8e(0x3eb)]>=_0x31179e[_0x120c8e(0x405)]?_0x31179e[_0x120c8e(0x3eb)]:_0x31179e['Step2Start'],_0xc5abb2=Array(_0x3d08e8-_0x1105b3+0x1)['fill']()[_0x120c8e(0x3ca)]((_0x3a9f5f,_0x31c3ad)=>_0x1105b3+_0x31c3ad);for(const _0x12556f of _0xc5abb2){const _0x2a4710=$dataWeapons[_0x12556f];if(!_0x2a4710)continue;if(!VisuMZ[_0x120c8e(0x2f6)]['IncludeShopItem'](_0x2a4710,_0x28fa65,_0x555724))continue;_0x2fe6a2['push']([0x1,_0x12556f,0x0,_0x2a4710[_0x120c8e(0x494)]]);}const _0x587bf2=_0x31179e[_0x120c8e(0x2e4)]>=_0x31179e[_0x120c8e(0x3de)]?_0x31179e[_0x120c8e(0x3de)]:_0x31179e[_0x120c8e(0x2e4)],_0x27fa39=_0x31179e[_0x120c8e(0x2e4)]>=_0x31179e[_0x120c8e(0x3de)]?_0x31179e[_0x120c8e(0x2e4)]:_0x31179e['Step3Start'],_0x11b49e=Array(_0x27fa39-_0x587bf2+0x1)['fill']()['map']((_0x40c28d,_0xdb0fe6)=>_0x587bf2+_0xdb0fe6);for(const _0x3a7262 of _0x11b49e){const _0x5d5d56=$dataArmors[_0x3a7262];if(!_0x5d5d56)continue;if(!VisuMZ[_0x120c8e(0x2f6)][_0x120c8e(0x54f)](_0x5d5d56,_0x28fa65,_0x555724))continue;_0x2fe6a2[_0x120c8e(0x2d8)]([0x2,_0x3a7262,0x0,_0x5d5d56[_0x120c8e(0x494)]]);}SceneManager[_0x120c8e(0x2d8)](Scene_Shop),SceneManager[_0x120c8e(0x2bb)](_0x2fe6a2,_0x31179e[_0x120c8e(0x217)]);}),VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x54f)]=function(_0x4ee628,_0x51b0f8,_0x26b536){const _0x5cf11c=_0x1149b0;if(_0x4ee628['name'][_0x5cf11c(0x36f)]()==='')return![];if(_0x4ee628[_0x5cf11c(0x20b)]['match'](/-----/i))return![];const _0x7a6f65=_0x4ee628[_0x5cf11c(0x4f6)];if(_0x51b0f8[_0x5cf11c(0x16d)]>0x0)for(const _0x7a92bd of _0x51b0f8){if(!_0x7a92bd)continue;if(_0x7a6f65[_0x5cf11c(0x46c)](_0x7a92bd))return![];}if(_0x26b536[_0x5cf11c(0x16d)]>0x0){for(const _0x1f9981 of _0x26b536){if(!_0x1f9981)continue;if(_0x7a6f65[_0x5cf11c(0x46c)](_0x1f9981))return!![];}return![];}return!![];},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x297)]=Scene_Boot[_0x1149b0(0x491)][_0x1149b0(0x23c)],Scene_Boot[_0x1149b0(0x491)][_0x1149b0(0x23c)]=function(){const _0x28b2df=_0x1149b0;this[_0x28b2df(0x40a)](),VisuMZ[_0x28b2df(0x2f6)][_0x28b2df(0x297)]['call'](this),this[_0x28b2df(0x473)](),VisuMZ[_0x28b2df(0x2f6)]['SetupProxyItemGroups'](),VisuMZ[_0x28b2df(0x2f6)][_0x28b2df(0x152)]();},Scene_Boot[_0x1149b0(0x491)]['process_VisuMZ_ItemsEquipsCore_RegExp']=function(){const _0x5295f3=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x5295f3(0x366)]={},VisuMZ['ItemsEquipsCore']['RegExp'][_0x5295f3(0x394)]=[],VisuMZ[_0x5295f3(0x2f6)][_0x5295f3(0x366)][_0x5295f3(0x3c9)]=[];const _0x48e723=[_0x5295f3(0x269),_0x5295f3(0x26e),_0x5295f3(0x248),_0x5295f3(0x1ff),_0x5295f3(0x1ac),_0x5295f3(0x21d),'AGI',_0x5295f3(0x2bd)];for(const _0xd3a73a of _0x48e723){const _0x4d2bd0=_0x5295f3(0x1d2)[_0x5295f3(0x2c2)](_0xd3a73a);VisuMZ[_0x5295f3(0x2f6)][_0x5295f3(0x366)]['EquipParams'][_0x5295f3(0x2d8)](new RegExp(_0x4d2bd0,'i'));const _0x8c036f=_0x5295f3(0x34c)[_0x5295f3(0x2c2)](_0xd3a73a);VisuMZ[_0x5295f3(0x2f6)][_0x5295f3(0x366)][_0x5295f3(0x3c9)][_0x5295f3(0x2d8)](new RegExp(_0x8c036f,'g'));}},Scene_Boot['prototype']['process_VisuMZ_ItemsEquipsCore_Notetags']=function(){const _0x20aec3=_0x1149b0;if(VisuMZ[_0x20aec3(0x3c0)])return;this[_0x20aec3(0x1c3)]();const _0x5402f1=[$dataItems,$dataWeapons,$dataArmors];for(const _0x138cc9 of _0x5402f1){for(const _0x5ce0bb of _0x138cc9){if(!_0x5ce0bb)continue;VisuMZ['ItemsEquipsCore'][_0x20aec3(0x53b)](_0x5ce0bb,_0x138cc9),VisuMZ[_0x20aec3(0x2f6)][_0x20aec3(0x498)](_0x5ce0bb,_0x138cc9),VisuMZ[_0x20aec3(0x2f6)][_0x20aec3(0x32e)](_0x5ce0bb,_0x138cc9),VisuMZ[_0x20aec3(0x2f6)][_0x20aec3(0x22b)](_0x5ce0bb,_0x138cc9),VisuMZ[_0x20aec3(0x2f6)][_0x20aec3(0x40e)](_0x5ce0bb,_0x138cc9);}}},Scene_Boot[_0x1149b0(0x491)][_0x1149b0(0x1c3)]=function(){const _0x4457c5=_0x1149b0;for(const _0x34f188 of $dataClasses){if(!_0x34f188)continue;VisuMZ[_0x4457c5(0x2f6)][_0x4457c5(0x4d7)](_0x34f188);}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1cb)]=VisuMZ['ParseClassNotetags'],VisuMZ[_0x1149b0(0x1cb)]=function(_0x1adf7f){const _0x4a7586=_0x1149b0;VisuMZ[_0x4a7586(0x2f6)][_0x4a7586(0x1cb)][_0x4a7586(0x50b)](this,_0x1adf7f),VisuMZ[_0x4a7586(0x2f6)]['Parse_Notetags_EquipSlots'](_0x1adf7f);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x515)]=VisuMZ[_0x1149b0(0x515)],VisuMZ['ParseItemNotetags']=function(_0x25ea6f){const _0x3bc2de=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x3bc2de(0x515)]['call'](this,_0x25ea6f),VisuMZ['ItemsEquipsCore'][_0x3bc2de(0x19e)](_0x25ea6f,$dataItems);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x175)]=VisuMZ['ParseWeaponNotetags'],VisuMZ['ParseWeaponNotetags']=function(_0x3d78e3){const _0x51dfab=_0x1149b0;VisuMZ[_0x51dfab(0x2f6)][_0x51dfab(0x175)]['call'](this,_0x3d78e3),VisuMZ['ItemsEquipsCore']['Parse_Notetags_Batch'](_0x3d78e3,$dataWeapons);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x558)]=VisuMZ[_0x1149b0(0x558)],VisuMZ[_0x1149b0(0x558)]=function(_0x40295e){const _0x97896e=_0x1149b0;VisuMZ[_0x97896e(0x2f6)]['ParseArmorNotetags'][_0x97896e(0x50b)](this,_0x40295e),VisuMZ[_0x97896e(0x2f6)][_0x97896e(0x19e)](_0x40295e,$dataArmors);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x4d7)]=function(_0x453b28){const _0x224cdf=_0x1149b0;_0x453b28[_0x224cdf(0x1a9)]=[];const _0x358a11=$dataSystem[_0x224cdf(0x25d)][_0x224cdf(0x3ca)](_0x4a47a0=>_0x4a47a0?_0x4a47a0[_0x224cdf(0x36f)]():'');if(!BattleManager[_0x224cdf(0x506)]()&&_0x453b28[_0x224cdf(0x1a6)][_0x224cdf(0x1f4)](/<EQUIP SLOTS>\s*([\s\S]*)\s*<\/EQUIP SLOTS>/i)){const _0x222e4c=String(RegExp['$1'])['split'](/[\r\n]+/);for(const _0x1bcaac of _0x222e4c){const _0x4cccfa=_0x358a11[_0x224cdf(0x23e)](_0x1bcaac['trim']());if(_0x4cccfa>0x0)_0x453b28[_0x224cdf(0x1a9)][_0x224cdf(0x2d8)](_0x4cccfa);}}else for(const _0xf598a0 of _0x358a11){const _0xfc35da=_0x358a11[_0x224cdf(0x23e)](_0xf598a0['trim']());if(_0xfc35da>0x0)_0x453b28['equipSlots'][_0x224cdf(0x2d8)](_0xfc35da);}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x19e)]=function(_0x43ffcd,_0x4060f9){const _0x4aa620=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x4aa620(0x53b)](_0x43ffcd,_0x4060f9),VisuMZ[_0x4aa620(0x2f6)][_0x4aa620(0x498)](_0x43ffcd,_0x4060f9),VisuMZ[_0x4aa620(0x2f6)][_0x4aa620(0x32e)](_0x43ffcd,_0x4060f9),VisuMZ[_0x4aa620(0x2f6)][_0x4aa620(0x22b)](_0x43ffcd,_0x4060f9),VisuMZ[_0x4aa620(0x2f6)][_0x4aa620(0x40e)](_0x43ffcd,_0x4060f9);},VisuMZ[_0x1149b0(0x2f6)]['Parse_Notetags_Category']=function(_0x122efb,_0x2951a0){const _0x2117b7=_0x1149b0;_0x122efb[_0x2117b7(0x4f6)]=[];const _0x5702b1=_0x122efb[_0x2117b7(0x1a6)]||'',_0x28513c=_0x5702b1[_0x2117b7(0x1f4)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);if(_0x28513c)for(const _0x2b8dfa of _0x28513c){_0x2b8dfa[_0x2117b7(0x1f4)](/<(?:CATEGORY|CATEGORIES):[ ](.*)>/gi);const _0x3d50d9=String(RegExp['$1'])['toUpperCase']()['trim']()[_0x2117b7(0x3a2)](',');for(const _0x388f4f of _0x3d50d9){_0x122efb[_0x2117b7(0x4f6)]['push'](_0x388f4f[_0x2117b7(0x36f)]());}}if(_0x5702b1[_0x2117b7(0x1f4)](/<(?:CATEGORY|CATEGORIES)>\s*([\s\S]*)\s*<\/(?:CATEGORY|CATEGORIES)>/i)){const _0x46ba6c=RegExp['$1'][_0x2117b7(0x3a2)](/[\r\n]+/);for(const _0x46144c of _0x46ba6c){_0x122efb[_0x2117b7(0x4f6)][_0x2117b7(0x2d8)](_0x46144c[_0x2117b7(0x4f4)]()[_0x2117b7(0x36f)]());}}},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x25a)]=function(_0x7cf3a6,_0x25aeef){const _0x521da6=_0x1149b0;if(!_0x7cf3a6)return;_0x7cf3a6[_0x521da6(0x1de)]=0x32;const _0x108741=_0x7cf3a6['note']||'';_0x108741[_0x521da6(0x1f4)](/<(?:|ID )SORT(?:|ING)[ ]PRIORITY:[ ](\d+)>/i)&&(_0x7cf3a6['sortPriority']=Number(RegExp['$1']));},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x498)]=function(_0x25e010,_0x597759){const _0xc4915c=_0x1149b0;_0x25e010['note'][_0xc4915c(0x1f4)](/<PRICE:[ ](\d+)>/i)&&(_0x25e010[_0xc4915c(0x494)]=Number(RegExp['$1']));},VisuMZ['ItemsEquipsCore']['Parse_Notetags_ParamValues']=function(_0x1cfb06,_0x5630c0){const _0x4c91e4=_0x1149b0;if(_0x5630c0===$dataItems)return;for(let _0x72730e=0x0;_0x72730e<0x8;_0x72730e++){const _0x5cfdd3=VisuMZ[_0x4c91e4(0x2f6)][_0x4c91e4(0x366)][_0x4c91e4(0x394)][_0x72730e];_0x1cfb06[_0x4c91e4(0x1a6)][_0x4c91e4(0x1f4)](_0x5cfdd3)&&(_0x1cfb06[_0x4c91e4(0x221)][_0x72730e]=parseInt(RegExp['$1']));}},VisuMZ[_0x1149b0(0x2f6)]['paramJS']={},VisuMZ[_0x1149b0(0x2f6)]['Parse_Notetags_ParamJS']=function(_0x739cd7,_0x4008d6){const _0xcde366=_0x1149b0;if(_0x4008d6===$dataItems)return;if(_0x739cd7[_0xcde366(0x1a6)][_0xcde366(0x1f4)](/<JS PARAMETERS>\s*([\s\S]*)\s*<\/JS PARAMETERS>/i)){const _0x5fabcf=String(RegExp['$1']),_0x1a8a34=(_0x4008d6===$dataWeapons?_0xcde366(0x38f):'A%1')[_0xcde366(0x2c2)](_0x739cd7['id']),_0x372808=_0xcde366(0x372)[_0xcde366(0x2c2)](_0x5fabcf);for(let _0x2d8179=0x0;_0x2d8179<0x8;_0x2d8179++){if(_0x5fabcf[_0xcde366(0x1f4)](VisuMZ[_0xcde366(0x2f6)][_0xcde366(0x366)][_0xcde366(0x3c9)][_0x2d8179])){const _0x46f09c=_0xcde366(0x526)[_0xcde366(0x2c2)](_0x1a8a34,_0x2d8179);VisuMZ[_0xcde366(0x2f6)][_0xcde366(0x15b)][_0x46f09c]=new Function('item',_0xcde366(0x3ff),_0x372808);}}}},VisuMZ['ItemsEquipsCore']['itemEnableJS']={},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x40e)]=function(_0x21a249,_0x43de8f){const _0x3978e1=_0x1149b0;if(_0x43de8f!==$dataItems)return;if(_0x21a249[_0x3978e1(0x1a6)]['match'](/<JS ITEM ENABLE>\s*([\s\S]*)\s*<\/JS ITEM ENABLE>/i)){const _0x23046e=String(RegExp['$1']),_0x1761a7=_0x3978e1(0x1aa)['format'](_0x23046e);VisuMZ['ItemsEquipsCore'][_0x3978e1(0x559)][_0x21a249['id']]=new Function(_0x3978e1(0x378),_0x1761a7);}},DataManager[_0x1149b0(0x35c)]=function(_0xe791f4){const _0x158d91=_0x1149b0;return this['isItem'](_0xe791f4)&&_0xe791f4[_0x158d91(0x1cc)]===0x2;},DataManager['maxItemAmount']=function(_0x429bf7){const _0x44780c=_0x1149b0;if(!_0x429bf7)return 0x63;else return _0x429bf7[_0x44780c(0x1a6)][_0x44780c(0x1f4)](/<MAX:[ ](\d+)>/i)?parseInt(RegExp['$1']):this[_0x44780c(0x2d9)](_0x429bf7);},DataManager[_0x1149b0(0x2d9)]=function(_0x1743f5){const _0x205f11=_0x1149b0;if(this[_0x205f11(0x54b)](_0x1743f5))return VisuMZ[_0x205f11(0x2f6)][_0x205f11(0x3ad)][_0x205f11(0x4d0)][_0x205f11(0x4cb)];else{if(this[_0x205f11(0x3b9)](_0x1743f5))return VisuMZ['ItemsEquipsCore'][_0x205f11(0x3ad)][_0x205f11(0x4d0)][_0x205f11(0x256)];else{if(this[_0x205f11(0x23f)](_0x1743f5))return VisuMZ['ItemsEquipsCore']['Settings']['ItemScene']['MaxArmors'];}}},DataManager[_0x1149b0(0x2a8)]=function(_0x585c75){const _0x2863ba=_0x1149b0;_0x585c75=_0x585c75['toUpperCase']()[_0x2863ba(0x36f)](),this[_0x2863ba(0x35b)]=this[_0x2863ba(0x35b)]||{};if(this[_0x2863ba(0x35b)][_0x585c75])return this[_0x2863ba(0x35b)][_0x585c75];for(const _0x3e7ba9 of $dataClasses){if(!_0x3e7ba9)continue;let _0x1167b5=_0x3e7ba9[_0x2863ba(0x20b)];_0x1167b5=_0x1167b5[_0x2863ba(0x1da)](/\x1I\[(\d+)\]/gi,''),_0x1167b5=_0x1167b5['replace'](/\\I\[(\d+)\]/gi,''),this[_0x2863ba(0x35b)][_0x1167b5[_0x2863ba(0x4f4)]()['trim']()]=_0x3e7ba9['id'];}return this[_0x2863ba(0x35b)][_0x585c75]||0x0;},DataManager[_0x1149b0(0x37a)]=function(_0x139409){const _0x49764e=_0x1149b0;_0x139409=_0x139409[_0x49764e(0x4f4)]()['trim'](),this['_skillIDs']=this[_0x49764e(0x24a)]||{};if(this['_skillIDs'][_0x139409])return this['_skillIDs'][_0x139409];for(const _0x707041 of $dataSkills){if(!_0x707041)continue;this[_0x49764e(0x24a)][_0x707041['name'][_0x49764e(0x4f4)]()[_0x49764e(0x36f)]()]=_0x707041['id'];}return this[_0x49764e(0x24a)][_0x139409]||0x0;},DataManager[_0x1149b0(0x185)]=function(_0x239713){const _0x32b7f5=_0x1149b0;_0x239713=_0x239713[_0x32b7f5(0x4f4)]()[_0x32b7f5(0x36f)](),this[_0x32b7f5(0x302)]=this[_0x32b7f5(0x302)]||{};if(this[_0x32b7f5(0x302)][_0x239713])return this['_itemIDs'][_0x239713];for(const _0x3cf2c7 of $dataItems){if(!_0x3cf2c7)continue;this[_0x32b7f5(0x302)][_0x3cf2c7['name'][_0x32b7f5(0x4f4)]()[_0x32b7f5(0x36f)]()]=_0x3cf2c7['id'];}return this[_0x32b7f5(0x302)][_0x239713]||0x0;},DataManager[_0x1149b0(0x327)]=function(_0x27ff0a){const _0x3616f1=_0x1149b0;_0x27ff0a=_0x27ff0a['toUpperCase']()[_0x3616f1(0x36f)](),this[_0x3616f1(0x22d)]=this['_weaponIDs']||{};if(this[_0x3616f1(0x22d)][_0x27ff0a])return this[_0x3616f1(0x22d)][_0x27ff0a];for(const _0x525574 of $dataWeapons){if(!_0x525574)continue;this[_0x3616f1(0x22d)][_0x525574[_0x3616f1(0x20b)][_0x3616f1(0x4f4)]()[_0x3616f1(0x36f)]()]=_0x525574['id'];}return this['_weaponIDs'][_0x27ff0a]||0x0;},DataManager[_0x1149b0(0x337)]=function(_0x2c2eff){const _0x5e25c8=_0x1149b0;_0x2c2eff=_0x2c2eff[_0x5e25c8(0x4f4)]()[_0x5e25c8(0x36f)](),this[_0x5e25c8(0x475)]=this[_0x5e25c8(0x475)]||{};if(this[_0x5e25c8(0x475)][_0x2c2eff])return this[_0x5e25c8(0x475)][_0x2c2eff];for(const _0x2549cb of $dataArmors){if(!_0x2549cb)continue;this[_0x5e25c8(0x475)][_0x2549cb['name']['toUpperCase']()[_0x5e25c8(0x36f)]()]=_0x2549cb['id'];}return this[_0x5e25c8(0x475)][_0x2c2eff]||0x0;},DataManager[_0x1149b0(0x238)]=function(_0x286798){const _0x87b659=_0x1149b0;_0x286798=_0x286798[_0x87b659(0x4f4)]()[_0x87b659(0x36f)](),this['_etypeIDs']=this[_0x87b659(0x4ff)]||{};if(this[_0x87b659(0x4ff)][_0x286798])return this[_0x87b659(0x4ff)][_0x286798];for(const _0x24fee4 of $dataSystem[_0x87b659(0x25d)]){this[_0x87b659(0x4ff)][_0x24fee4[_0x87b659(0x4f4)]()[_0x87b659(0x36f)]()]=$dataSystem[_0x87b659(0x25d)][_0x87b659(0x23e)](_0x24fee4);}return this[_0x87b659(0x4ff)][_0x286798]||0x0;},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x46b)]=function(){const _0x53dc1e=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x53dc1e(0x1d5)]($dataItems),VisuMZ[_0x53dc1e(0x2f6)][_0x53dc1e(0x1d5)]($dataWeapons),VisuMZ[_0x53dc1e(0x2f6)][_0x53dc1e(0x1d5)]($dataArmors);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1d5)]=function(_0x5e80a7){const _0x3b58b6=_0x1149b0;for(const _0x4c4c00 of _0x5e80a7){if(!_0x4c4c00)continue;if(!DataManager['isProxyItem'](_0x4c4c00))continue;const _0xea76d8=DataManager[_0x3b58b6(0x48f)](_0x4c4c00),_0xffb9bb=[_0x3b58b6(0x20b),'iconIndex',_0x3b58b6(0x462)];for(const _0x4d8b75 of _0xffb9bb){_0x4c4c00[_0x4d8b75]=_0xea76d8[_0x4d8b75];}}},DataManager[_0x1149b0(0x280)]=function(_0x61ca56){const _0x5c5c90=_0x1149b0;if(!_0x61ca56)return![];if(!_0x61ca56[_0x5c5c90(0x1a6)])return![];return _0x61ca56&&_0x61ca56[_0x5c5c90(0x1a6)][_0x5c5c90(0x1f4)](/<PROXY:[ ](.*)>/i);},DataManager[_0x1149b0(0x48f)]=function(_0x2f906c){const _0x4db90d=_0x1149b0;return this[_0x4db90d(0x280)](_0x2f906c)?this[_0x4db90d(0x471)](_0x2f906c)||_0x2f906c:_0x2f906c;},DataManager[_0x1149b0(0x471)]=function(_0x258f5a){const _0x98aeef=_0x1149b0;_0x258f5a[_0x98aeef(0x1a6)]['match'](/<PROXY:[ ](.*)>/i);const _0x5bd426=RegExp['$1']['trim'](),_0x530e7e=/^\d+$/[_0x98aeef(0x544)](_0x5bd426);if(this['isItem'](_0x258f5a)){const _0x41bbb9=_0x530e7e?Number(_0x5bd426):DataManager[_0x98aeef(0x185)](_0x5bd426);return $dataItems[_0x41bbb9]||_0x258f5a;}else{if(this[_0x98aeef(0x3b9)](_0x258f5a)){const _0x89231f=_0x530e7e?Number(_0x5bd426):DataManager[_0x98aeef(0x327)](_0x5bd426);return $dataWeapons[_0x89231f]||_0x258f5a;}else{if(this[_0x98aeef(0x23f)](_0x258f5a)){const _0x767470=_0x530e7e?Number(_0x5bd426):DataManager['getArmorIdWithName'](_0x5bd426);return $dataArmors[_0x767470]||_0x258f5a;}}}return _0x258f5a;},VisuMZ[_0x1149b0(0x2f6)]['Window_ItemList_item']=Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x378)],Window_ItemList['prototype'][_0x1149b0(0x378)]=function(){const _0x49f0cd=_0x1149b0;if($gameTemp[_0x49f0cd(0x511)])return VisuMZ['ItemsEquipsCore'][_0x49f0cd(0x28a)]['call'](this);return DataManager['getProxyItem'](VisuMZ[_0x49f0cd(0x2f6)][_0x49f0cd(0x28a)][_0x49f0cd(0x50b)](this));},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x322)]=function(){const _0x3e672c=_0x1149b0;return VisuMZ[_0x3e672c(0x2f6)][_0x3e672c(0x28a)][_0x3e672c(0x50b)](this);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x4c6)]=Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x378)],Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x378)]=function(){const _0x103258=_0x1149b0;if($gameTemp[_0x103258(0x511)])return VisuMZ[_0x103258(0x2f6)][_0x103258(0x4c6)][_0x103258(0x50b)](this);return DataManager[_0x103258(0x48f)](VisuMZ[_0x103258(0x2f6)][_0x103258(0x4c6)][_0x103258(0x50b)](this));},Window_ShopBuy['prototype'][_0x1149b0(0x322)]=function(){const _0x513324=_0x1149b0;return VisuMZ[_0x513324(0x2f6)][_0x513324(0x4c6)][_0x513324(0x50b)](this);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x332)]=Game_Item[_0x1149b0(0x491)][_0x1149b0(0x531)],Game_Item[_0x1149b0(0x491)][_0x1149b0(0x531)]=function(_0x7bee68){const _0x14bac7=_0x1149b0;if(DataManager['isProxyItem'](_0x7bee68))return;VisuMZ[_0x14bac7(0x2f6)][_0x14bac7(0x332)][_0x14bac7(0x50b)](this,_0x7bee68);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x152)]=function(){const _0xdeffc2=_0x1149b0;this['artifactIDs']={'partyArtifactIDs':[],'troopArtifactIDs':[]};for(const _0x24bd82 of $dataArmors){if(!_0x24bd82)continue;if(!DataManager[_0xdeffc2(0x1f3)](_0x24bd82))continue;DataManager[_0xdeffc2(0x3fe)](_0x24bd82)&&this[_0xdeffc2(0x265)][_0xdeffc2(0x163)]['push'](_0x24bd82['id']),DataManager[_0xdeffc2(0x50e)](_0x24bd82)&&this[_0xdeffc2(0x265)][_0xdeffc2(0x200)][_0xdeffc2(0x2d8)](_0x24bd82['id']);}},DataManager[_0x1149b0(0x1f3)]=function(_0x21d2d2){const _0x54f6f3=_0x1149b0;if(!this[_0x54f6f3(0x23f)](_0x21d2d2))return![];const _0x3c7a0a=_0x21d2d2[_0x54f6f3(0x1a6)];if(!_0x3c7a0a)return![];if(_0x3c7a0a['match'](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x3c7a0a[_0x54f6f3(0x1f4)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x3c7a0a[_0x54f6f3(0x1f4)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x3c7a0a[_0x54f6f3(0x1f4)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1149b0(0x3f8)]=function(_0xa54afe){const _0x4086f6=_0x1149b0;if(!this[_0x4086f6(0x1f3)](_0xa54afe))return![];const _0x1ff8f8=_0xa54afe[_0x4086f6(0x1a6)];if(!_0x1ff8f8)return![];if(_0x1ff8f8['match'](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x1ff8f8[_0x4086f6(0x1f4)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1149b0(0x3fe)]=function(_0x1228d5){const _0x256460=_0x1149b0;if(!this['isArtifact'](_0x1228d5))return![];const _0x450e10=_0x1228d5[_0x256460(0x1a6)];if(!_0x450e10)return![];if(_0x450e10[_0x256460(0x1f4)](/<(?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x450e10[_0x256460(0x1f4)](/<(?:STACKABLE|STACK) (?:PARTY|ALLY) (?:ARTIFACT|RELIC)>/i))return!![];return![];},DataManager[_0x1149b0(0x50e)]=function(_0x407655){const _0x43d1d3=_0x1149b0;if(!this[_0x43d1d3(0x1f3)](_0x407655))return![];const _0x63e2b1=_0x407655[_0x43d1d3(0x1a6)];if(!_0x63e2b1)return![];if(_0x63e2b1[_0x43d1d3(0x1f4)](/<(?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];if(_0x63e2b1[_0x43d1d3(0x1f4)](/<(?:STACKABLE|STACK) (?:TROOP|FOE) (?:ARTIFACT|RELIC)>/i))return!![];return![];},VisuMZ[_0x1149b0(0x2f6)]['Game_BattlerBase_canEquip_artifact']=Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x2a4)],Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x2a4)]=function(_0xf133aa){const _0x4ae1e4=_0x1149b0;if(DataManager[_0x4ae1e4(0x1f3)](_0xf133aa))return![];if(!DataManager['meetsClassRequirements'](this,_0xf133aa))return![];if(!DataManager[_0x4ae1e4(0x17c)](this,_0xf133aa))return![];return VisuMZ['ItemsEquipsCore'][_0x4ae1e4(0x52a)][_0x4ae1e4(0x50b)](this,_0xf133aa);},VisuMZ[_0x1149b0(0x2f6)]['Game_BattlerBase_param_artifact']=Game_BattlerBase['prototype'][_0x1149b0(0x483)],Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x483)]=function(_0x4a138f){const _0x2deef5=_0x1149b0;this[_0x2deef5(0x499)]=!![];const _0x204fc6=VisuMZ[_0x2deef5(0x2f6)][_0x2deef5(0x3e4)][_0x2deef5(0x50b)](this,_0x4a138f);return this[_0x2deef5(0x499)]=undefined,_0x204fc6;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3fa)]=Game_Actor['prototype'][_0x1149b0(0x4ac)],Game_Actor[_0x1149b0(0x491)]['traitObjects']=function(){const _0x45afb9=_0x1149b0;this[_0x45afb9(0x287)]=!![];const _0x1c56ce=VisuMZ[_0x45afb9(0x2f6)][_0x45afb9(0x3fa)]['call'](this);return this[_0x45afb9(0x287)]=undefined,_0x1c56ce;},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x4a1)]=Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x145)],Game_Actor['prototype']['equips']=function(){const _0x51ea4a=_0x1149b0,_0x3dff09=VisuMZ[_0x51ea4a(0x2f6)]['Game_Actor_equips_artifacts'][_0x51ea4a(0x50b)](this);if(this[_0x51ea4a(0x287)]||this['_allowArtifactParamBase']){const _0x6a0dd1=_0x3dff09[_0x51ea4a(0x510)]($gameParty[_0x51ea4a(0x277)]());return _0x6a0dd1;}else return _0x3dff09;},VisuMZ[_0x1149b0(0x2f6)]['Game_BattlerBase_paramPlus_artifact']=Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x500)],Game_BattlerBase['prototype'][_0x1149b0(0x500)]=function(_0x47c706){const _0x493efc=_0x1149b0;let _0xa24c65=VisuMZ['ItemsEquipsCore'][_0x493efc(0x190)]['call'](this,_0x47c706);if(this['constructor']===Game_Enemy)for(const _0x3b862c of $gameParty[_0x493efc(0x187)]()){if(_0x3b862c)_0xa24c65+=_0x3b862c[_0x493efc(0x221)][_0x47c706];}return _0xa24c65;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3c7)]=Game_Enemy['prototype'][_0x1149b0(0x4ac)],Game_Enemy['prototype'][_0x1149b0(0x4ac)]=function(){const _0x4b7488=_0x1149b0;let _0x7aa3a1=VisuMZ[_0x4b7488(0x2f6)]['Game_Enemy_traitObjects_artifact'][_0x4b7488(0x50b)](this);return _0x7aa3a1['concat']($gameParty[_0x4b7488(0x187)]());},VisuMZ[_0x1149b0(0x2f6)]['Game_Party_gainItem_artifact']=Game_Party[_0x1149b0(0x491)][_0x1149b0(0x178)],Game_Party[_0x1149b0(0x491)]['gainItem']=function(_0x3cfb14,_0x59c993,_0x5cd037){const _0x59f93e=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x59f93e(0x306)][_0x59f93e(0x50b)](this,_0x3cfb14,_0x59c993,_0x5cd037);if(DataManager[_0x59f93e(0x1f3)](_0x3cfb14)){let _0x3ff6f5=$gameParty[_0x59f93e(0x4f7)]();if($gameParty[_0x59f93e(0x51c)]())_0x3ff6f5=_0x3ff6f5[_0x59f93e(0x510)]($gameTroop[_0x59f93e(0x509)]());for(const _0x47e7fa of _0x3ff6f5){if(!_0x47e7fa)continue;_0x47e7fa[_0x59f93e(0x14d)]={};}}},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x277)]=function(){const _0x4124a2=_0x1149b0;let _0x42fe05=[];const _0x47fccf=VisuMZ[_0x4124a2(0x2f6)]['artifactIDs'][_0x4124a2(0x163)];if(_0x47fccf)for(const _0x166214 of _0x47fccf){const _0x3c1f94=$dataArmors[_0x166214];if(!_0x3c1f94)continue;if(!this[_0x4124a2(0x2df)](_0x3c1f94))continue;let _0x46b143=0x1;if(DataManager[_0x4124a2(0x3f8)](_0x3c1f94))_0x46b143=this[_0x4124a2(0x1b2)](_0x3c1f94);while(_0x46b143--)_0x42fe05[_0x4124a2(0x2d8)](_0x3c1f94);}return _0x42fe05;},Game_Party[_0x1149b0(0x491)]['troopArtifacts']=function(){const _0x12ed01=_0x1149b0;let _0x3edd32=[];const _0xe00ea2=VisuMZ[_0x12ed01(0x2f6)][_0x12ed01(0x265)][_0x12ed01(0x200)];if(_0xe00ea2)for(const _0x216a0a of _0xe00ea2){const _0xa1d0ea=$dataArmors[_0x216a0a];if(!_0xa1d0ea)continue;if(!this['hasItem'](_0xa1d0ea))continue;let _0x55b3d1=0x1;if(DataManager[_0x12ed01(0x3f8)](_0xa1d0ea))_0x55b3d1=this[_0x12ed01(0x1b2)](_0xa1d0ea);while(_0x55b3d1--)_0x3edd32[_0x12ed01(0x2d8)](_0xa1d0ea);}return _0x3edd32;},Game_Party[_0x1149b0(0x491)]['artifacts']=function(){const _0x23d89=_0x1149b0;return this['partyArtifacts']()[_0x23d89(0x510)](this['troopArtifacts']());},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x2e5)]=Game_Party[_0x1149b0(0x491)][_0x1149b0(0x223)],Game_Party[_0x1149b0(0x491)][_0x1149b0(0x223)]=function(){const _0xe64a27=_0x1149b0;VisuMZ[_0xe64a27(0x2f6)]['Game_Party_setupBattleTestItems_artifact'][_0xe64a27(0x50b)](this),this['removeBattleTestArtifacts']();},Game_Party['prototype'][_0x1149b0(0x485)]=function(){const _0x55f0ac=_0x1149b0,_0x2ce22a=$gameParty['armors']()[_0x55f0ac(0x392)](_0x3ff15a=>DataManager[_0x55f0ac(0x1f3)](_0x3ff15a));for(const _0xb26c2a of _0x2ce22a){const _0x3872e5=this[_0x55f0ac(0x1b2)](_0xb26c2a);if(_0x3872e5)this['loseItem'](_0xb26c2a,_0x3872e5);}},DataManager[_0x1149b0(0x1f5)]=function(_0x4001b8,_0x1d01ce){const _0x3f8d73=_0x1149b0;if(this['isItem'](_0x1d01ce))return![];if(!_0x4001b8)return![];if($gameTemp['_checkEquipRequirements'])return!![];if(BattleManager[_0x3f8d73(0x506)]())return!![];const _0x3f0b44=this[_0x3f8d73(0x25c)](_0x1d01ce);if(_0x3f0b44[_0x3f8d73(0x16d)]<=0x0)return!![];return _0x3f0b44[_0x3f8d73(0x46c)](_0x4001b8[_0x3f8d73(0x47a)]()['id']);},DataManager[_0x1149b0(0x25c)]=function(_0x2fa6ce){const _0x1e490b=_0x1149b0;if(!_0x2fa6ce)return[];this[_0x1e490b(0x29b)]=this[_0x1e490b(0x29b)]||{};const _0x565420='%1-%2'[_0x1e490b(0x2c2)](this[_0x1e490b(0x3b9)](_0x2fa6ce)?_0x1e490b(0x3a6):_0x1e490b(0x338),_0x2fa6ce['id']);if(this[_0x1e490b(0x29b)][_0x565420]!==undefined)return this['_getClassRequirements'][_0x565420];let _0x3fe74c=[];const _0x100ce9=_0x2fa6ce[_0x1e490b(0x1a6)]||'';if(_0x100ce9[_0x1e490b(0x1f4)](/<EQUIP FOR CLASS(?:|ES) ONLY:[ ](.*)>/i)){const _0xb293f=String(RegExp['$1'])[_0x1e490b(0x3a2)](',')[_0x1e490b(0x3ca)](_0x3dbd8a=>_0x3dbd8a[_0x1e490b(0x36f)]());for(const _0x38188b of _0xb293f){const _0x1a75df=/^\d+$/['test'](_0x38188b);_0x1a75df?_0x3fe74c[_0x1e490b(0x2d8)](Number(_0x38188b)):_0x3fe74c[_0x1e490b(0x2d8)](DataManager['getClassIdWithName'](_0x38188b));}}return this[_0x1e490b(0x29b)][_0x565420]=_0x3fe74c,this[_0x1e490b(0x29b)][_0x565420];},DataManager[_0x1149b0(0x17c)]=function(_0x454cd3,_0x41097f){const _0x4b3244=_0x1149b0;if(this['isItem'](_0x41097f))return![];if(!_0x454cd3)return![];if($gameTemp[_0x4b3244(0x384)])return!![];if(BattleManager[_0x4b3244(0x506)]())return!![];const _0x5a0779=this[_0x4b3244(0x1b4)](_0x41097f);for(const _0x45fdd1 of _0x5a0779){if(!this[_0x4b3244(0x3b4)](_0x454cd3,_0x45fdd1))return![];}return!![];},DataManager[_0x1149b0(0x1b4)]=function(_0x3ca574){const _0x5f2c99=_0x1149b0;if(!_0x3ca574)return[];this['_getEquipRequirements']=this['_getEquipRequirements']||{};const _0x323429='%1-%2'[_0x5f2c99(0x2c2)](this['isWeapon'](_0x3ca574)?_0x5f2c99(0x3a6):_0x5f2c99(0x338),_0x3ca574['id']);if(this['_getEquipRequirements'][_0x323429]!==undefined)return this[_0x5f2c99(0x432)][_0x323429];let _0x524888=[];const _0x598637=_0x3ca574[_0x5f2c99(0x1a6)]||'';return _0x598637['match'](/<EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>\s*([\s\S]*)\s*<\/EQUIP(?:|MENT)[ ]REQUIREMENT(?:|S)>/i)&&(_0x524888=String(RegExp['$1'])['split'](/[\r\n]+/)),this[_0x5f2c99(0x432)][_0x323429]=_0x524888,this[_0x5f2c99(0x432)][_0x323429];},DataManager[_0x1149b0(0x3b4)]=function(_0x243767,_0x15c0b5){const _0x4aa041=_0x1149b0;if(_0x15c0b5[_0x4aa041(0x1f4)](/(?:LEVEL|LV|LVL)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0xba25d8=String(RegExp['$1'])[_0x4aa041(0x36f)](),_0x1e444a=Number(RegExp['$2']);switch(_0xba25d8){case'>':return _0x243767[_0x4aa041(0x207)]>_0x1e444a;case'>=':return _0x243767[_0x4aa041(0x207)]>=_0x1e444a;case _0x4aa041(0x267):return _0x243767[_0x4aa041(0x207)]===_0x1e444a;case'<=':return _0x243767['level']<=_0x1e444a;case'<':return _0x243767[_0x4aa041(0x207)]<_0x1e444a;}return![];}if(_0x15c0b5[_0x4aa041(0x1f4)](/(MAXHP|MAXMP|MHP|MMP)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x3ddac0=String(RegExp['$1'])[_0x4aa041(0x536)]()[_0x4aa041(0x36f)](),_0x51f2e8=String(RegExp['$2'])['trim'](),_0x3c84de=Number(RegExp['$3']);let _0x215802=0x0;if([_0x4aa041(0x319),'mmp']['includes'](_0x3ddac0))_0x215802=0x1;const _0xd52b53=_0x243767[_0x4aa041(0x4bc)][_0x215802]||0x0;switch(_0x51f2e8){case'>':return _0x243767[_0x4aa041(0x1f8)](_0x215802)+_0xd52b53>_0x3c84de;case'>=':return _0x243767[_0x4aa041(0x1f8)](_0x215802)+_0xd52b53>=_0x3c84de;case'===':return _0x243767[_0x4aa041(0x1f8)](_0x215802)+_0xd52b53===_0x3c84de;case'<=':return _0x243767[_0x4aa041(0x1f8)](_0x215802)+_0xd52b53<=_0x3c84de;case'<':return _0x243767['paramBase'](_0x215802)+_0xd52b53<_0x3c84de;}return![];}if(_0x15c0b5['match'](/(ATK|DEF|MAT|MDF|AGI|LUK)[ ](>|>=|===|<=|<)[ ](\d+)/i)){const _0x3fcc1f=String(RegExp['$1'])[_0x4aa041(0x536)]()[_0x4aa041(0x36f)](),_0x1638be=String(RegExp['$2'])[_0x4aa041(0x36f)](),_0x25645c=Number(RegExp['$3']),_0x94cb95=['atk',_0x4aa041(0x239),_0x4aa041(0x4d6),_0x4aa041(0x528),_0x4aa041(0x1bc),_0x4aa041(0x1d9)];let _0x2fc706=_0x94cb95[_0x4aa041(0x23e)](_0x3fcc1f)+0x2;if(_0x2fc706<0x2)return![];const _0x31ef53=_0x243767[_0x4aa041(0x4bc)][_0x2fc706]||0x0;switch(_0x1638be){case'>':return _0x243767[_0x4aa041(0x1f8)](_0x2fc706)+_0x31ef53>_0x25645c;case'>=':return _0x243767[_0x4aa041(0x1f8)](_0x2fc706)+_0x31ef53>=_0x25645c;case'===':return _0x243767[_0x4aa041(0x1f8)](_0x2fc706)+_0x31ef53===_0x25645c;case'<=':return _0x243767[_0x4aa041(0x1f8)](_0x2fc706)+_0x31ef53<=_0x25645c;case'<':return _0x243767[_0x4aa041(0x1f8)](_0x2fc706)+_0x31ef53<_0x25645c;}return![];}if(_0x15c0b5['match'](/LEARNED SKILL:[ ](\d+)/i)){const _0x30e636=Number(RegExp['$1']);return _0x243767[_0x4aa041(0x4e7)](_0x30e636);}else{if(_0x15c0b5[_0x4aa041(0x1f4)](/LEARNED SKILL:[ ](.*)/i)){const _0x3409b0=String(RegExp['$1']),_0x3b3974=this[_0x4aa041(0x37a)](_0x3409b0);return _0x243767[_0x4aa041(0x4e7)](_0x3b3974);}}if(_0x15c0b5[_0x4aa041(0x1f4)](/SWITCH:[ ](\d+)/i)){const _0x4232f9=Number(RegExp['$1']);return $gameSwitches[_0x4aa041(0x4b1)](_0x4232f9);}return!![];},DataManager[_0x1149b0(0x2a6)]=function(_0x37cc2e){const _0x673e3a=_0x1149b0;return this[_0x673e3a(0x23f)](_0x37cc2e)?this[_0x673e3a(0x275)](_0x37cc2e):[_0x37cc2e['etypeId']||0x0];},DataManager['getEtypeIDsCache']=function(_0x221106){const _0x17bbf6=_0x1149b0;this[_0x17bbf6(0x3e0)]=this[_0x17bbf6(0x3e0)]||{};if(this['_cache_etypeIDs'][_0x221106['id']]!==undefined)return this[_0x17bbf6(0x3e0)][_0x221106['id']];this[_0x17bbf6(0x3e0)][_0x221106['id']]=[_0x221106[_0x17bbf6(0x55b)]||0x0];const _0xfd33f1=_0x221106['note']||'';if(_0xfd33f1[_0x17bbf6(0x1f4)](/<ADDED ETYPE(?:|S):[ ](.*)>/i)){const _0x130113=String(RegExp['$1'])[_0x17bbf6(0x3a2)](',')['map'](_0x16494a=>_0x16494a[_0x17bbf6(0x36f)]());for(const _0x593736 of _0x130113){const _0x282135=/^\d+$/[_0x17bbf6(0x544)](_0x593736);let _0x1354fa=0x0;_0x282135?_0x1354fa=Number(_0x593736):_0x1354fa=this[_0x17bbf6(0x238)](_0x593736),_0x1354fa>0x1&&this[_0x17bbf6(0x3e0)][_0x221106['id']][_0x17bbf6(0x2d8)](_0x1354fa);}}return this['_cache_etypeIDs'][_0x221106['id']];},Game_BattlerBase[_0x1149b0(0x491)]['canEquipArmor']=function(_0x31afbb){const _0x303db1=_0x1149b0;return this[_0x303db1(0x3e8)](_0x31afbb[_0x303db1(0x4e8)])&&!this[_0x303db1(0x2ff)](_0x31afbb[_0x303db1(0x55b)])&&DataManager['getEtypeIDs'](_0x31afbb)[_0x303db1(0x282)](_0x3072ff=>!this[_0x303db1(0x2ff)](_0x3072ff));},DataManager[_0x1149b0(0x524)]=function(_0x5dd642){const _0x17e727=_0x1149b0;if(!this[_0x17e727(0x3b9)](_0x5dd642)&&!this[_0x17e727(0x23f)](_0x5dd642))return![];if(Imported[_0x17e727(0x521)]&&this[_0x17e727(0x3b9)](_0x5dd642))return![];if(!_0x5dd642[_0x17e727(0x1a6)])return![];return _0x5dd642[_0x17e727(0x1a6)][_0x17e727(0x1f4)](/<CURSED>/i);},DataManager['getPurifyTransformation']=function(_0x20457f){const _0x511b01=_0x1149b0;if(!_0x20457f)return _0x20457f;if(!this[_0x511b01(0x3b9)](_0x20457f)&&!this['isArmor'](_0x20457f))return _0x20457f;if(_0x20457f[_0x511b01(0x1a6)][_0x511b01(0x1f4)](/<PURIFY TRANSFORM:[ ](.*)>/i)){const _0x232647=String(RegExp['$1'])['trim'](),_0x5417c6=/^\d+$/[_0x511b01(0x544)](_0x232647);if(_0x5417c6){if(this[_0x511b01(0x3b9)](_0x20457f))return $dataWeapons[Number(_0x232647)];if(this['isArmor'](_0x20457f))return $dataArmors[Number(_0x232647)];}else{if(this['isWeapon'](_0x20457f))return $dataWeapons[this[_0x511b01(0x327)](_0x232647)];if(this[_0x511b01(0x23f)](_0x20457f))return $dataArmors[this[_0x511b01(0x337)](_0x232647)];}}return _0x20457f;},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x4a0)]=function(){const _0x529add=_0x1149b0,_0x3c7261=this[_0x529add(0x4f7)]();for(const _0x579af1 of _0x3c7261){if(!_0x579af1)continue;_0x579af1[_0x529add(0x4a0)]();}},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x4a0)]=function(){const _0x48c632=_0x1149b0,_0x47cb9c=this['equipSlots']()['length'];for(let _0x561566=0x0;_0x561566<_0x47cb9c;_0x561566++){const _0x182ffe=this[_0x48c632(0x158)][_0x561566];if(!_0x182ffe)continue;const _0x100782=_0x182ffe[_0x48c632(0x353)]();if(!DataManager[_0x48c632(0x524)](_0x100782))continue;let _0x3e997d=DataManager['getPurifyTransformation'](_0x100782);this['isPurifyItemSwapOk'](_0x100782,_0x3e997d)?(this[_0x48c632(0x158)][_0x561566][_0x48c632(0x531)](_0x3e997d),this[_0x48c632(0x518)]()):this[_0x48c632(0x391)](_0x561566,null);}},Game_Actor[_0x1149b0(0x491)]['isPurifyItemSwapOk']=function(_0x1599e7,_0x33ea02){const _0x31f7a6=_0x1149b0;if(_0x1599e7===_0x33ea02)return![];const _0x2f8319=DataManager[_0x31f7a6(0x2a6)](_0x33ea02);if(!_0x2f8319[_0x31f7a6(0x46c)](_0x1599e7[_0x31f7a6(0x55b)]))return![];if(DataManager['isWeapon'](_0x33ea02))return this['isEquipWtypeOk'](_0x33ea02[_0x31f7a6(0x326)]);else{if(DataManager[_0x31f7a6(0x23f)](_0x33ea02))return this['isEquipAtypeOk'](_0x33ea02[_0x31f7a6(0x4e8)]);}return![];},TextManager[_0x1149b0(0x2ee)]={'helpDesc':{'equip':VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3ad)][_0x1149b0(0x2fc)][_0x1149b0(0x38a)]??_0x1149b0(0x291),'optimize':VisuMZ[_0x1149b0(0x2f6)]['Settings']['EquipScene'][_0x1149b0(0x47f)]??_0x1149b0(0x4dd),'clear':VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3ad)][_0x1149b0(0x2fc)][_0x1149b0(0x4b9)]??_0x1149b0(0x553)}},ColorManager[_0x1149b0(0x3b6)]=function(_0x1c7289){const _0x284a9b=_0x1149b0;if(!_0x1c7289)return this[_0x284a9b(0x458)]();else{if(_0x1c7289[_0x284a9b(0x1a6)][_0x284a9b(0x1f4)](/<COLOR:[ ](\d+)>/i))return this[_0x284a9b(0x24f)](Number(RegExp['$1'])[_0x284a9b(0x1d0)](0x0,0x1f));else return _0x1c7289[_0x284a9b(0x1a6)][_0x284a9b(0x1f4)](/<COLOR:[ ]#(.*)>/i)?'#'+String(RegExp['$1']):this[_0x284a9b(0x458)]();}},ColorManager[_0x1149b0(0x189)]=function(_0x10397e){const _0x3fdefb=_0x1149b0;return _0x10397e=String(_0x10397e),_0x10397e[_0x3fdefb(0x1f4)](/#(.*)/i)?_0x3fdefb(0x31c)[_0x3fdefb(0x2c2)](String(RegExp['$1'])):this['textColor'](Number(_0x10397e));},SceneManager[_0x1149b0(0x3ed)]=function(){const _0x466de8=_0x1149b0;return this[_0x466de8(0x4ec)]&&this['_scene']['constructor']===Scene_Shop;},Game_Temp['prototype']['newLabelEnabled']=function(){const _0x350137=_0x1149b0;if(this[_0x350137(0x546)])return![];return VisuMZ[_0x350137(0x2f6)][_0x350137(0x3ad)][_0x350137(0x3bb)]['Enable'];},VisuMZ[_0x1149b0(0x1fc)]=VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3ad)][_0x1149b0(0x1c9)][_0x1149b0(0x32a)],VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x445)]=Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x483)],Game_BattlerBase[_0x1149b0(0x491)]['param']=function(_0xa05189){const _0x45a9c0=_0x1149b0;return this[_0x45a9c0(0x210)]?this[_0x45a9c0(0x4f2)]?VisuMZ[_0x45a9c0(0x1fc)]:0x1:VisuMZ[_0x45a9c0(0x2f6)]['Game_BattlerBase_param'][_0x45a9c0(0x50b)](this,_0xa05189);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x41e)]=Game_BattlerBase[_0x1149b0(0x491)]['meetsItemConditions'],Game_BattlerBase['prototype'][_0x1149b0(0x243)]=function(_0x5b4bc7){const _0x445f75=_0x1149b0;if(!_0x5b4bc7)return![];if(!VisuMZ[_0x445f75(0x2f6)]['Game_BattlerBase_meetsItemConditions'][_0x445f75(0x50b)](this,_0x5b4bc7))return![];if(!this[_0x445f75(0x3a8)](_0x5b4bc7))return![];if(!this[_0x445f75(0x1a4)](_0x5b4bc7))return![];return!![];},Game_BattlerBase[_0x1149b0(0x491)][_0x1149b0(0x3a8)]=function(_0x30a669){const _0xa48a79=_0x1149b0;if(!this[_0xa48a79(0x43d)](_0x30a669))return![];return!![];},Game_BattlerBase['prototype'][_0x1149b0(0x43d)]=function(_0x49601c){const _0x527361=_0x1149b0,_0x146abe=_0x49601c[_0x527361(0x1a6)];if(_0x146abe[_0x527361(0x1f4)](/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1743b3=JSON[_0x527361(0x17d)]('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x3d9ef7 of _0x1743b3){if(!$gameSwitches[_0x527361(0x4b1)](_0x3d9ef7))return![];}return!![];}if(_0x146abe[_0x527361(0x1f4)](/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x573be8=JSON[_0x527361(0x17d)]('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x548cb3 of _0x573be8){if(!$gameSwitches[_0x527361(0x4b1)](_0x548cb3))return![];}return!![];}if(_0x146abe[_0x527361(0x1f4)](/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2c8c9f=JSON[_0x527361(0x17d)]('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x49b478 of _0x2c8c9f){if($gameSwitches[_0x527361(0x4b1)](_0x49b478))return!![];}return![];}if(_0x146abe[_0x527361(0x1f4)](/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x2f906e=JSON[_0x527361(0x17d)]('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x23962d of _0x2f906e){if(!$gameSwitches[_0x527361(0x4b1)](_0x23962d))return!![];}return![];}if(_0x146abe[_0x527361(0x1f4)](/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x118a3d=JSON['parse']('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x2ee2ac of _0x118a3d){if(!$gameSwitches['value'](_0x2ee2ac))return!![];}return![];}if(_0x146abe[_0x527361(0x1f4)](/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x37b9cb=JSON[_0x527361(0x17d)]('['+RegExp['$1'][_0x527361(0x1f4)](/\d+/g)+']');for(const _0x5b9424 of _0x37b9cb){if($gameSwitches[_0x527361(0x4b1)](_0x5b9424))return![];}return!![];}return!![];},Game_BattlerBase['prototype'][_0x1149b0(0x1a4)]=function(_0x7aecad){const _0x11e89b=_0x1149b0,_0x2207df=_0x7aecad['note'],_0x106fa7=VisuMZ[_0x11e89b(0x2f6)]['itemEnableJS'];return _0x106fa7[_0x7aecad['id']]?_0x106fa7[_0x7aecad['id']]['call'](this,_0x7aecad):!![];},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x349)]=function(_0x328767){const _0x59fe37=_0x1149b0;_0x328767=this[_0x59fe37(0x19b)](_0x328767);const _0xee26a8=this['equipSlots']();this[_0x59fe37(0x158)]=[];for(let _0x108ca9=0x0;_0x108ca9<_0xee26a8['length'];_0x108ca9++){this[_0x59fe37(0x158)][_0x108ca9]=new Game_Item();}for(let _0x2b4625=0x0;_0x2b4625<_0xee26a8[_0x59fe37(0x16d)];_0x2b4625++){const _0x5f449f=_0xee26a8[_0x2b4625],_0x2a1b3c=this[_0x59fe37(0x156)](_0x328767,_0x5f449f);if(this[_0x59fe37(0x2a4)](_0x2a1b3c))this['_equips'][_0x2b4625][_0x59fe37(0x531)](_0x2a1b3c);}this[_0x59fe37(0x400)](!![]),this[_0x59fe37(0x518)]();},Game_Actor['prototype']['convertInitEquipsToItems']=function(_0xbcb586){const _0x474cf1=_0x1149b0,_0x2ef09d=[];for(let _0x20290d=0x0;_0x20290d<_0xbcb586[_0x474cf1(0x16d)];_0x20290d++){const _0x4590da=_0xbcb586[_0x20290d];if(_0x4590da<=0x0)continue;const _0x217a38=$dataSystem['equipTypes'][_0x20290d+0x1];if(_0x217a38===$dataSystem[_0x474cf1(0x25d)][0x1]||_0x20290d===0x1&&this['isDualWield']())_0x2ef09d[_0x474cf1(0x2d8)]($dataWeapons[_0x4590da]);else{if(BattleManager['isBattleTest']()){const _0x117c7d=$dataArmors[_0x4590da];_0x117c7d&&_0x117c7d['etypeId']===_0x20290d+0x1&&_0x2ef09d['push'](_0x117c7d);}else{const _0x452017=$dataArmors[_0x4590da];_0x452017&&_0x452017[_0x474cf1(0x55b)]===_0x20290d+0x1&&_0x2ef09d[_0x474cf1(0x2d8)](_0x452017);}}}return _0x2ef09d;},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x156)]=function(_0x3a59dc,_0x2e7b66){const _0x34d158=_0x1149b0;for(const _0x4e58cf of _0x3a59dc){if(!_0x4e58cf)continue;if(_0x4e58cf[_0x34d158(0x55b)]===_0x2e7b66)return _0x3a59dc[_0x34d158(0x263)](_0x3a59dc[_0x34d158(0x23e)](_0x4e58cf),0x1),_0x4e58cf;}return null;},Game_Actor['prototype'][_0x1149b0(0x1a9)]=function(){const _0x37b393=_0x1149b0,_0x2f7a96=VisuMZ[_0x37b393(0x2f6)]['deepCopy'](this[_0x37b393(0x390)]||this[_0x37b393(0x47a)]()[_0x37b393(0x1a9)]);if(_0x2f7a96[_0x37b393(0x16d)]>=0x2&&this[_0x37b393(0x543)]())_0x2f7a96[0x1]=0x1;return _0x2f7a96;},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x276)]=function(_0x59d216){const _0x267145=_0x1149b0;_0x59d216[_0x267145(0x34b)](0x0),_0x59d216[_0x267145(0x34b)](-0x1),this[_0x267145(0x390)]=_0x59d216,this[_0x267145(0x518)](),this[_0x267145(0x48c)]();},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x415)]=function(){const _0x15eb38=_0x1149b0;this['_forcedSlots']=undefined,this[_0x15eb38(0x518)](),this[_0x15eb38(0x48c)]();},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x48c)]=function(){const _0x59e42e=_0x1149b0;let _0xd59c4d=this[_0x59e42e(0x1a9)]()['length'];while(this['_equips'][_0x59e42e(0x16d)]>_0xd59c4d){const _0x18ed7e=this[_0x59e42e(0x158)][this[_0x59e42e(0x158)][_0x59e42e(0x16d)]-0x1];_0x18ed7e&&_0x18ed7e[_0x59e42e(0x353)]()&&$gameParty[_0x59e42e(0x178)](_0x18ed7e[_0x59e42e(0x353)](),0x1),this[_0x59e42e(0x158)][_0x59e42e(0x2b5)]();}while(_0xd59c4d>this[_0x59e42e(0x158)]['length']){this['_equips']['push'](new Game_Item());}},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x18f)]=function(){const _0x5cc3ac=_0x1149b0,_0x33d090=this[_0x5cc3ac(0x1a9)]();for(let _0x5c05ab=0x0;_0x5c05ab<_0x33d090[_0x5cc3ac(0x16d)];_0x5c05ab++){if(!this[_0x5cc3ac(0x158)][_0x5c05ab])this[_0x5cc3ac(0x158)][_0x5c05ab]=new Game_Item();}this[_0x5cc3ac(0x400)](![]),this['refresh']();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x412)]=Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x391)],Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x391)]=function(_0x42b369,_0x475e71){const _0x22433f=_0x1149b0;if(!this[_0x22433f(0x33d)]){const _0x6691a0=JsonEx[_0x22433f(0x4ee)](this);_0x6691a0['_tempActor']=!![],this[_0x22433f(0x385)](_0x42b369,_0x475e71),this[_0x22433f(0x27a)](_0x6691a0);}else this[_0x22433f(0x385)](_0x42b369,_0x475e71);},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x385)]=function(_0x482872,_0x2648d7){const _0x3d703e=_0x1149b0;if(!this['tradeItemWithParty'](_0x2648d7,this['equips']()[_0x482872]))return;if(_0x2648d7){const _0x2fac2f=DataManager[_0x3d703e(0x2a6)](_0x2648d7);if(!_0x2fac2f[_0x3d703e(0x46c)](this[_0x3d703e(0x1a9)]()[_0x482872]))return;}this['_equips'][_0x482872][_0x3d703e(0x531)](_0x2648d7);if(VisuMZ['ItemsEquipsCore'][_0x3d703e(0x24e)](_0x2648d7)){const _0x2c5b3c=VisuMZ[_0x3d703e(0x2f6)][_0x3d703e(0x3ad)][_0x3d703e(0x2fc)][_0x3d703e(0x1ea)]||'',_0x2edbbf=this[_0x3d703e(0x20b)](),_0x1d00c8=_0x3d703e(0x354)[_0x3d703e(0x2c2)](_0x2648d7[_0x3d703e(0x236)]),_0xd222bc=_0x2648d7[_0x3d703e(0x20b)]||'';let _0x298ade=_0x2c5b3c[_0x3d703e(0x2c2)](_0x2edbbf,_0x1d00c8,_0xd222bc);if(VisuMZ[_0x3d703e(0x49d)]['version']>=1.79&&_0x298ade[_0x3d703e(0x16d)]>0x0)$textPopup(_0x298ade);}this[_0x3d703e(0x518)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x24e)]=function(_0xa64fbe){const _0x1438ad=_0x1149b0;if(!_0xa64fbe)return![];if(!Imported['VisuMZ_0_CoreEngine'])return![];if(VisuMZ['CoreEngine']['version']<1.79)return![];return DataManager[_0x1438ad(0x524)](_0xa64fbe);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3f0)]=Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x525)],Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x525)]=function(_0x217626,_0x9bc9c3){const _0x31f330=_0x1149b0;if(!this[_0x31f330(0x33d)]){const _0x25fb4c=JsonEx[_0x31f330(0x4ee)](this);_0x25fb4c[_0x31f330(0x33d)]=!![],VisuMZ[_0x31f330(0x2f6)][_0x31f330(0x3f0)]['call'](this,_0x217626,_0x9bc9c3),this[_0x31f330(0x27a)](_0x25fb4c);}else VisuMZ[_0x31f330(0x2f6)][_0x31f330(0x3f0)]['call'](this,_0x217626,_0x9bc9c3);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x48a)]=Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x14c)],Game_Actor['prototype'][_0x1149b0(0x14c)]=function(_0x55babf){const _0x4118e9=_0x1149b0;if(!this['_tempActor']){const _0x130cc4=JsonEx[_0x4118e9(0x4ee)](this);_0x130cc4['_tempActor']=!![],VisuMZ[_0x4118e9(0x2f6)][_0x4118e9(0x48a)][_0x4118e9(0x50b)](this,_0x55babf),this[_0x4118e9(0x27a)](_0x130cc4);}else VisuMZ['ItemsEquipsCore']['Game_Actor_discardEquip'][_0x4118e9(0x50b)](this,_0x55babf);},Game_Actor['prototype'][_0x1149b0(0x400)]=function(_0x1c9219){const _0x505814=_0x1149b0;if(this['_bypassReleaseUnequippableItemsItemsEquipsCore'])return;let _0x2a7f63=0x0;for(;;){_0x2a7f63++;if(_0x2a7f63>0x3)break;const _0x42b3a3=this[_0x505814(0x1a9)](),_0x4c5b22=this[_0x505814(0x145)](),_0x24094c=_0x4c5b22['length'];let _0x37ff16=![];for(let _0x2ed820=0x0;_0x2ed820<_0x24094c;_0x2ed820++){const _0x594923=_0x4c5b22[_0x2ed820];if(!_0x594923)continue;const _0x529479=DataManager[_0x505814(0x2a6)](_0x594923);if(!this[_0x505814(0x2a4)](_0x594923)||!_0x529479[_0x505814(0x46c)](_0x42b3a3[_0x2ed820])){!_0x1c9219&&this[_0x505814(0x34a)](null,_0x594923);if(!this[_0x505814(0x33d)]){const _0x309c33=JsonEx[_0x505814(0x4ee)](this);_0x309c33[_0x505814(0x33d)]=!![],this[_0x505814(0x158)][_0x2ed820][_0x505814(0x531)](null),this[_0x505814(0x430)]=!![],this[_0x505814(0x27a)](_0x309c33),this['_bypassReleaseUnequippableItemsItemsEquipsCore']=undefined;}else{if(this['_equips'][_0x2ed820])this[_0x505814(0x158)][_0x2ed820][_0x505814(0x531)](null);else continue;}_0x37ff16=!![];}}if(!_0x37ff16)break;}},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x27a)]=function(_0x5270a6){const _0x710e48=_0x1149b0;if(this[_0x710e48(0x33d)])return;if(!VisuMZ[_0x710e48(0x2f6)][_0x710e48(0x3ad)][_0x710e48(0x2fc)][_0x710e48(0x51a)])return;const _0xe5bf4=Math['round'](_0x5270a6[_0x710e48(0x418)]()*this['mhp']),_0x3266c4=Math['round'](_0x5270a6['mpRate']()*this[_0x710e48(0x300)]);if(this['hp']>0x0)this[_0x710e48(0x454)](_0xe5bf4);if(this['mp']>0x0)this[_0x710e48(0x2cf)](_0x3266c4);},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x3a9)]=function(){const _0x21a916=_0x1149b0,_0x4d279d=this[_0x21a916(0x1a9)]()[_0x21a916(0x16d)];for(let _0x5a7bb8=0x0;_0x5a7bb8<_0x4d279d;_0x5a7bb8++){if(this[_0x21a916(0x39c)](_0x5a7bb8))this['changeEquip'](_0x5a7bb8,null);}},Game_Actor['prototype'][_0x1149b0(0x39c)]=function(_0x11eed6){const _0x1c1c95=_0x1149b0;return this['nonRemovableEtypes']()[_0x1c1c95(0x46c)](this[_0x1c1c95(0x1a9)]()[_0x11eed6])?![]:this[_0x1c1c95(0x3e2)](_0x11eed6);},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x320)]=function(){const _0x2a2922=_0x1149b0;return VisuMZ[_0x2a2922(0x2f6)][_0x2a2922(0x3ad)]['EquipScene'][_0x2a2922(0x401)];},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x2bf)]=function(){const _0x18ce69=_0x1149b0,_0x96818e=this[_0x18ce69(0x1a9)]()['length'];for(let _0x254fca=0x0;_0x254fca<_0x96818e;_0x254fca++){if(this[_0x18ce69(0x4a5)](_0x254fca))this['changeEquip'](_0x254fca,null);}for(let _0x2a9fe8=0x0;_0x2a9fe8<_0x96818e;_0x2a9fe8++){if(this[_0x18ce69(0x4a5)](_0x2a9fe8))this[_0x18ce69(0x391)](_0x2a9fe8,this[_0x18ce69(0x2f5)](_0x2a9fe8));}},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x2f5)]=function(_0x3851ea){const _0x15114b=_0x1149b0,_0x5e5811=this[_0x15114b(0x1a9)]()[_0x3851ea],_0x418400=$gameParty[_0x15114b(0x4b6)]()['filter'](_0x36be9e=>DataManager[_0x15114b(0x2a6)](_0x36be9e)[_0x15114b(0x46c)](_0x5e5811)&&this[_0x15114b(0x2a4)](_0x36be9e)&&!DataManager[_0x15114b(0x524)](_0x36be9e));let _0x66e92=null,_0x53dd07=-0x3e8;for(let _0x3c4747=0x0;_0x3c4747<_0x418400[_0x15114b(0x16d)];_0x3c4747++){const _0x406e51=this['calcEquipItemPerformance'](_0x418400[_0x3c4747]);_0x406e51>_0x53dd07&&(_0x53dd07=_0x406e51,_0x66e92=_0x418400[_0x3c4747]);}return _0x66e92;},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x4a5)]=function(_0xd6464f){const _0x24b6c5=_0x1149b0;return this[_0x24b6c5(0x1ab)]()[_0x24b6c5(0x46c)](this[_0x24b6c5(0x1a9)]()[_0xd6464f])?![]:this[_0x24b6c5(0x3e2)](_0xd6464f);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x52d)]=Game_Actor[_0x1149b0(0x491)]['isEquipChangeOk'],Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x3e2)]=function(_0x5bb585){const _0x2027d4=_0x1149b0,_0xfcdbcf=this[_0x2027d4(0x158)][_0x5bb585];if(_0xfcdbcf){const _0x566532=_0xfcdbcf['object']();if(DataManager[_0x2027d4(0x524)](_0x566532))return![];}return VisuMZ['ItemsEquipsCore'][_0x2027d4(0x52d)][_0x2027d4(0x50b)](this,_0x5bb585);},Game_Actor['prototype'][_0x1149b0(0x1ab)]=function(){const _0x360af3=_0x1149b0;return VisuMZ[_0x360af3(0x2f6)][_0x360af3(0x3ad)][_0x360af3(0x2fc)][_0x360af3(0x409)];},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x29f)]=Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x34a)],Game_Actor[_0x1149b0(0x491)]['tradeItemWithParty']=function(_0x1fc251,_0x506ec){const _0x511ad6=_0x1149b0;if(this[_0x511ad6(0x33d)])return![];$gameTemp[_0x511ad6(0x546)]=!![];const _0x12ad19=VisuMZ[_0x511ad6(0x2f6)][_0x511ad6(0x29f)][_0x511ad6(0x50b)](this,_0x1fc251,_0x506ec);return $gameTemp['_bypassNewLabel']=![],_0x12ad19;},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x3fc)]=function(_0x587753,_0x164205){const _0x4927d9=_0x1149b0,_0x24c4cc=this['getNextAvailableEtypeId'](_0x587753);if(_0x24c4cc<0x0)return;const _0x4dfcdc=_0x587753===0x1?$dataWeapons[_0x164205]:$dataArmors[_0x164205];this[_0x4927d9(0x391)](_0x24c4cc,_0x4dfcdc);},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x55d)]=function(_0x37341b){const _0xcbe422=_0x1149b0;let _0x29085c=0x0;const _0x226f9e=this['equipSlots'](),_0xb97d7d=this[_0xcbe422(0x145)]();for(let _0x466041=0x0;_0x466041<_0x226f9e[_0xcbe422(0x16d)];_0x466041++){if(_0x226f9e[_0x466041]===_0x37341b){_0x29085c=_0x466041;if(!_0xb97d7d[_0x466041])return _0x29085c;}}return _0x29085c;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1d7)]=Game_Actor[_0x1149b0(0x491)]['paramPlus'],Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x500)]=function(_0x2ed459){const _0x5ed279=_0x1149b0;let _0x3c49f1=VisuMZ[_0x5ed279(0x2f6)][_0x5ed279(0x1d7)][_0x5ed279(0x50b)](this,_0x2ed459);for(const _0xcb5183 of this['equips']()){if(_0xcb5183)_0x3c49f1+=this[_0x5ed279(0x2d4)](_0xcb5183,_0x2ed459);}return _0x3c49f1;},Game_Actor['prototype']['paramPlusItemsEquipsCoreCustomJS']=function(_0x479786,_0x5d94ba){const _0x110b14=_0x1149b0;if(this[_0x110b14(0x162)])return 0x0;const _0x5cb613=(DataManager[_0x110b14(0x3b9)](_0x479786)?_0x110b14(0x38f):_0x110b14(0x527))[_0x110b14(0x2c2)](_0x479786['id']),_0x3ff47a='%1-%2'[_0x110b14(0x2c2)](_0x5cb613,_0x5d94ba);if(VisuMZ[_0x110b14(0x2f6)]['paramJS'][_0x3ff47a]){this[_0x110b14(0x162)]=!![];const _0x3a409e=VisuMZ['ItemsEquipsCore'][_0x110b14(0x15b)][_0x3ff47a][_0x110b14(0x50b)](this,_0x479786,_0x5d94ba);return this[_0x110b14(0x162)]=![],_0x3a409e;}else return 0x0;},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x4c7)]=function(_0x31de8a){const _0x2ea79c=_0x1149b0;this[_0x2ea79c(0x210)]=!![],this[_0x2ea79c(0x4f2)]=_0x31de8a;},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x4d3)]=Game_Party['prototype'][_0x1149b0(0x1af)],Game_Party['prototype']['initialize']=function(){const _0x2eec08=_0x1149b0;VisuMZ[_0x2eec08(0x2f6)][_0x2eec08(0x4d3)][_0x2eec08(0x50b)](this),this[_0x2eec08(0x1b3)](),this[_0x2eec08(0x15d)]();},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x1b3)]=function(){const _0x45e80b=_0x1149b0;this[_0x45e80b(0x4c5)]=[];},Game_Party[_0x1149b0(0x491)]['isNewItem']=function(_0x27b998){const _0x227dd6=_0x1149b0;if(!$gameTemp[_0x227dd6(0x188)]())return![];if(this['_newItemsList']===undefined)this[_0x227dd6(0x1b3)]();let _0x45f1a9='';if(DataManager[_0x227dd6(0x54b)](_0x27b998))_0x45f1a9=_0x227dd6(0x2e3)[_0x227dd6(0x2c2)](_0x27b998['id']);else{if(DataManager['isWeapon'](_0x27b998))_0x45f1a9=_0x227dd6(0x286)['format'](_0x27b998['id']);else{if(DataManager['isArmor'](_0x27b998))_0x45f1a9=_0x227dd6(0x466)['format'](_0x27b998['id']);else return;}}return this[_0x227dd6(0x4c5)]['includes'](_0x45f1a9);},Game_Party['prototype']['setNewItem']=function(_0x1755fa){const _0x19d095=_0x1149b0;if(!$gameTemp[_0x19d095(0x188)]())return;if(this['_newItemsList']===undefined)this[_0x19d095(0x1b3)]();let _0x520c05='';if(DataManager[_0x19d095(0x54b)](_0x1755fa))_0x520c05=_0x19d095(0x2e3)['format'](_0x1755fa['id']);else{if(DataManager[_0x19d095(0x3b9)](_0x1755fa))_0x520c05=_0x19d095(0x286)[_0x19d095(0x2c2)](_0x1755fa['id']);else{if(DataManager['isArmor'](_0x1755fa))_0x520c05=_0x19d095(0x466)[_0x19d095(0x2c2)](_0x1755fa['id']);else return;}}if(!this[_0x19d095(0x4c5)][_0x19d095(0x46c)](_0x520c05))this[_0x19d095(0x4c5)][_0x19d095(0x2d8)](_0x520c05);},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x4a7)]=function(_0x1d9534){const _0x52379d=_0x1149b0;if(!$gameTemp[_0x52379d(0x188)]())return;if(this[_0x52379d(0x4c5)]===undefined)this[_0x52379d(0x1b3)]();let _0x4540a2='';if(DataManager[_0x52379d(0x54b)](_0x1d9534))_0x4540a2=_0x52379d(0x2e3)[_0x52379d(0x2c2)](_0x1d9534['id']);else{if(DataManager[_0x52379d(0x3b9)](_0x1d9534))_0x4540a2='weapon-%1'[_0x52379d(0x2c2)](_0x1d9534['id']);else{if(DataManager['isArmor'](_0x1d9534))_0x4540a2='armor-%1'[_0x52379d(0x2c2)](_0x1d9534['id']);else return;}}this[_0x52379d(0x4c5)][_0x52379d(0x46c)](_0x4540a2)&&this[_0x52379d(0x4c5)][_0x52379d(0x263)](this[_0x52379d(0x4c5)][_0x52379d(0x23e)](_0x4540a2),0x1);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x1e8)]=Game_Party[_0x1149b0(0x491)][_0x1149b0(0x1b2)],Game_Party['prototype'][_0x1149b0(0x1b2)]=function(_0x31bcb9){const _0x3914bb=_0x1149b0;if(DataManager[_0x3914bb(0x280)](_0x31bcb9))_0x31bcb9=DataManager[_0x3914bb(0x48f)](_0x31bcb9);return VisuMZ[_0x3914bb(0x2f6)][_0x3914bb(0x1e8)][_0x3914bb(0x50b)](this,_0x31bcb9);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3b0)]=Game_Party[_0x1149b0(0x491)][_0x1149b0(0x178)],Game_Party[_0x1149b0(0x491)]['gainItem']=function(_0x219b07,_0x2f5c4a,_0x18cf24){const _0x3cfc42=_0x1149b0;if(DataManager[_0x3cfc42(0x280)](_0x219b07))_0x219b07=null;const _0x310a6e=this[_0x3cfc42(0x1b2)](_0x219b07);VisuMZ[_0x3cfc42(0x2f6)][_0x3cfc42(0x3b0)][_0x3cfc42(0x50b)](this,_0x219b07,_0x2f5c4a,_0x18cf24);if(this[_0x3cfc42(0x1b2)](_0x219b07)>_0x310a6e)this[_0x3cfc42(0x250)](_0x219b07);},Game_Party['prototype'][_0x1149b0(0x53f)]=function(_0x5698a1){const _0x443d60=_0x1149b0;if(DataManager[_0x443d60(0x280)](_0x5698a1))_0x5698a1=DataManager[_0x443d60(0x48f)](_0x5698a1);return DataManager[_0x443d60(0x55a)](_0x5698a1);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x4a4)]=Game_Party[_0x1149b0(0x491)]['consumeItem'],Game_Party[_0x1149b0(0x491)][_0x1149b0(0x45c)]=function(_0x3241e3){const _0x27b4db=_0x1149b0;if(_0x3241e3){const _0x11edc0=_0x3241e3[_0x27b4db(0x1a6)]||'';if(_0x11edc0[_0x27b4db(0x1f4)](/<(?:CONSERVE|PRESERVE):[ ](\d+)([%％])>/i)){const _0x1d02ec=Number(RegExp['$1'])*0.01;if(Math[_0x27b4db(0x408)]()<_0x1d02ec)return;}}VisuMZ[_0x27b4db(0x2f6)]['Game_Party_consumeItem'][_0x27b4db(0x50b)](this,_0x3241e3);},Game_Party[_0x1149b0(0x491)]['initShopTrackingData']=function(){const _0x227d8b=_0x1149b0;this[_0x227d8b(0x3e3)]={'buy':{'gold':0x0,'items':{}},'sell':{'gold':0x0,'items':{}}};},Game_Party[_0x1149b0(0x491)]['getShopTrackingData']=function(){const _0x239831=_0x1149b0;return this[_0x239831(0x3e3)]===undefined&&this['initShopTrackingData'](),this['_shopTrackingData'];},Game_Party['prototype'][_0x1149b0(0x17a)]=function(_0x3d88e3,_0xcf14c){const _0x6ab2c=_0x1149b0;if(!_0xcf14c)return 0x0;this[_0x6ab2c(0x3e3)]===undefined&&this[_0x6ab2c(0x15d)]();const _0x1ed1d9=this[_0x6ab2c(0x35d)]();if(!_0x1ed1d9[_0x3d88e3])return 0x0;if(_0xcf14c==='gold')return _0x1ed1d9[_0x3d88e3][_0x6ab2c(0x2dd)]=_0x1ed1d9[_0x3d88e3]['gold']||0x0,_0x1ed1d9[_0x3d88e3][_0x6ab2c(0x2dd)];else{if(DataManager['isItem'](_0xcf14c))key=_0x6ab2c(0x2e3)[_0x6ab2c(0x2c2)](_0xcf14c['id']);else{if(DataManager['isWeapon'](_0xcf14c))key='weapon-%1'[_0x6ab2c(0x2c2)](_0xcf14c['id']);else{if(DataManager[_0x6ab2c(0x23f)](_0xcf14c))key=_0x6ab2c(0x466)['format'](_0xcf14c['id']);else return 0x0;}}}return _0x1ed1d9[_0x3d88e3][_0x6ab2c(0x387)][key]=_0x1ed1d9[_0x3d88e3]['items'][key]||0x0,_0x1ed1d9[_0x3d88e3][_0x6ab2c(0x387)][key];},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x171)]=function(_0x492ff3){const _0x2054d1=_0x1149b0;return this[_0x2054d1(0x17a)](_0x2054d1(0x167),_0x492ff3);},Game_Party['prototype'][_0x1149b0(0x151)]=function(_0x268e00){const _0x286252=_0x1149b0;return this[_0x286252(0x17a)]('sell',_0x268e00);},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x39f)]=function(){const _0x7b2261=_0x1149b0;return this[_0x7b2261(0x17a)]('buy',_0x7b2261(0x2dd));},Game_Party['prototype']['getShopTrackingGoldSell']=function(){const _0x559856=_0x1149b0;return this[_0x559856(0x17a)](_0x559856(0x1f7),'gold');},Game_Party[_0x1149b0(0x491)]['addShopTrackingItem']=function(_0x4511c7,_0x268690,_0x1f0466){const _0x546f5c=_0x1149b0;if(!_0x268690)return;if(_0x1f0466<=0x0)return;this[_0x546f5c(0x3e3)]===undefined&&this[_0x546f5c(0x15d)]();const _0x4d5ac0=this[_0x546f5c(0x35d)]();if(!_0x4d5ac0[_0x4511c7])return;if(_0x268690===_0x546f5c(0x2dd)){_0x4d5ac0[_0x4511c7]['gold']=_0x4d5ac0[_0x4511c7][_0x546f5c(0x2dd)]||0x0,_0x4d5ac0[_0x4511c7][_0x546f5c(0x2dd)]+=_0x1f0466;return;}else{if(DataManager[_0x546f5c(0x54b)](_0x268690))key=_0x546f5c(0x2e3)[_0x546f5c(0x2c2)](_0x268690['id']);else{if(DataManager[_0x546f5c(0x3b9)](_0x268690))key=_0x546f5c(0x286)[_0x546f5c(0x2c2)](_0x268690['id']);else{if(DataManager[_0x546f5c(0x23f)](_0x268690))key='armor-%1'[_0x546f5c(0x2c2)](_0x268690['id']);else return;}}}_0x4d5ac0[_0x4511c7][_0x546f5c(0x387)][key]=_0x4d5ac0[_0x4511c7][_0x546f5c(0x387)][key]||0x0,_0x4d5ac0[_0x4511c7][_0x546f5c(0x387)][key]+=_0x1f0466;},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x154)]=function(_0x447dd0,_0xe9e8b){const _0x219c2f=_0x1149b0;this['addShopTrackingItem'](_0x219c2f(0x167),_0x447dd0,_0xe9e8b);},Game_Party[_0x1149b0(0x491)][_0x1149b0(0x4db)]=function(_0x584912,_0x372af9){const _0x493335=_0x1149b0;this[_0x493335(0x448)](_0x493335(0x1f7),_0x584912,_0x372af9);},Game_Party['prototype'][_0x1149b0(0x1bf)]=function(_0x4c012a){const _0x17f276=_0x1149b0;this['addShopTrackingItem']('buy',_0x17f276(0x2dd),_0x4c012a);},Game_Party[_0x1149b0(0x491)]['addShopTrackingGoldSell']=function(_0x29a3c9){const _0x490c88=_0x1149b0;this[_0x490c88(0x448)]('sell',_0x490c88(0x2dd),_0x29a3c9);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x228)]=Scene_ItemBase[_0x1149b0(0x491)][_0x1149b0(0x20c)],Scene_ItemBase['prototype']['activateItemWindow']=function(){const _0x5d918e=_0x1149b0;VisuMZ[_0x5d918e(0x2f6)][_0x5d918e(0x228)][_0x5d918e(0x50b)](this),this[_0x5d918e(0x417)][_0x5d918e(0x440)]();},Scene_Item['prototype'][_0x1149b0(0x1dd)]=function(){const _0x2d11c7=_0x1149b0;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x2d11c7(0x26f)]!==undefined)return ConfigManager['uiHelpPosition'];else return this[_0x2d11c7(0x1cd)]()?this[_0x2d11c7(0x288)]()['match'](/LOWER/i):Scene_ItemBase['prototype']['isBottomHelpMode'][_0x2d11c7(0x50b)](this);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x2de)]=function(){const _0x2e2726=_0x1149b0;if(ConfigManager[_0x2e2726(0x180)]&&ConfigManager[_0x2e2726(0x522)]!==undefined)return ConfigManager[_0x2e2726(0x522)];else return this[_0x2e2726(0x1cd)]()?this[_0x2e2726(0x288)]()[_0x2e2726(0x1f4)](/RIGHT/i):Scene_ItemBase[_0x2e2726(0x491)][_0x2e2726(0x2de)][_0x2e2726(0x50b)](this);},Scene_Item[_0x1149b0(0x491)]['updatedLayoutStyle']=function(){const _0x1d3d3d=_0x1149b0;return VisuMZ[_0x1d3d3d(0x2f6)]['Settings'][_0x1d3d3d(0x4d0)]['LayoutStyle'];},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x45f)]=function(){const _0x6111c7=_0x1149b0;return this[_0x6111c7(0x476)]&&this['_categoryWindow']['isUseModernControls']();},Scene_Item[_0x1149b0(0x491)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x1c3a57=_0x1149b0;return VisuMZ['ItemsEquipsCore']['Settings'][_0x1c3a57(0x4d0)][_0x1c3a57(0x202)];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x424)]=Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x381)],Scene_Item['prototype'][_0x1149b0(0x381)]=function(){const _0x2edcc7=_0x1149b0;VisuMZ[_0x2edcc7(0x2f6)][_0x2edcc7(0x424)][_0x2edcc7(0x50b)](this),this[_0x2edcc7(0x45f)]()&&this['onCategoryOk']();},VisuMZ[_0x1149b0(0x2f6)]['Scene_Item_helpWindowRect']=Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x431)],Scene_Item['prototype']['helpWindowRect']=function(){const _0x4ce637=_0x1149b0;return this[_0x4ce637(0x1cd)]()?this[_0x4ce637(0x16b)]():VisuMZ[_0x4ce637(0x2f6)][_0x4ce637(0x371)]['call'](this);},Scene_Item[_0x1149b0(0x491)]['helpWindowRectItemsEquipsCore']=function(){const _0x52a2be=_0x1149b0,_0x3ead99=0x0,_0x5e0c9e=this[_0x52a2be(0x55c)](),_0x3cc773=Graphics['boxWidth'],_0x421e4a=this[_0x52a2be(0x2c8)]();return new Rectangle(_0x3ead99,_0x5e0c9e,_0x3cc773,_0x421e4a);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x355)]=Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x146)],Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x146)]=function(){const _0x4c80f7=_0x1149b0;VisuMZ[_0x4c80f7(0x2f6)][_0x4c80f7(0x355)][_0x4c80f7(0x50b)](this),this[_0x4c80f7(0x45f)]()&&this['postCreateCategoryWindowItemsEquipsCore']();},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x38e)]=function(){const _0x28bfb3=_0x1149b0;delete this['_categoryWindow'][_0x28bfb3(0x278)]['ok'],delete this[_0x28bfb3(0x476)]['_handlers'][_0x28bfb3(0x513)];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x389)]=Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x395)],Scene_Item['prototype'][_0x1149b0(0x395)]=function(){const _0x42707f=_0x1149b0;return this['isUseItemsEquipsCoreUpdatedLayout']()?this['categoryWindowRectItemsEquipsCore']():VisuMZ['ItemsEquipsCore'][_0x42707f(0x389)][_0x42707f(0x50b)](this);},Scene_Item[_0x1149b0(0x491)]['categoryWindowRectItemsEquipsCore']=function(){const _0x4be33d=_0x1149b0,_0x25a01b=0x0,_0x583019=this[_0x4be33d(0x3ae)](),_0x5b86f0=Graphics[_0x4be33d(0x516)],_0x295986=this['calcWindowHeight'](0x1,!![]);return new Rectangle(_0x25a01b,_0x583019,_0x5b86f0,_0x295986);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x42f)]=Scene_Item['prototype'][_0x1149b0(0x170)],Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x170)]=function(){const _0x4054d3=_0x1149b0;VisuMZ[_0x4054d3(0x2f6)][_0x4054d3(0x42f)][_0x4054d3(0x50b)](this),this['isUseModernControls']()&&this[_0x4054d3(0x4d8)](),this[_0x4054d3(0x215)]()&&this[_0x4054d3(0x403)]();},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x2ec)]=Scene_Item['prototype'][_0x1149b0(0x4a8)],Scene_Item['prototype'][_0x1149b0(0x4a8)]=function(){const _0x34ab00=_0x1149b0;if(this[_0x34ab00(0x1cd)]())return this[_0x34ab00(0x244)]();else{const _0x1cd413=VisuMZ[_0x34ab00(0x2f6)][_0x34ab00(0x2ec)][_0x34ab00(0x50b)](this);return this['allowCreateStatusWindow']()&&this[_0x34ab00(0x3b8)]()&&(_0x1cd413['width']-=this[_0x34ab00(0x143)]()),_0x1cd413;}},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x244)]=function(){const _0x3a8cfe=_0x1149b0,_0x11e850=this[_0x3a8cfe(0x2de)]()?this['statusWidth']():0x0,_0x1187a2=this['_categoryWindow']['y']+this[_0x3a8cfe(0x476)][_0x3a8cfe(0x1d3)],_0x3d3ab0=Graphics[_0x3a8cfe(0x516)]-this['statusWidth'](),_0x26aad2=this[_0x3a8cfe(0x2b2)]()-_0x1187a2;return new Rectangle(_0x11e850,_0x1187a2,_0x3d3ab0,_0x26aad2);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x4d8)]=function(){const _0x28375d=_0x1149b0;this[_0x28375d(0x417)][_0x28375d(0x32d)]('cancel',this[_0x28375d(0x3d5)]['bind'](this));},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x215)]=function(){const _0x1a7d53=_0x1149b0;return this[_0x1a7d53(0x1cd)]()?!![]:VisuMZ[_0x1a7d53(0x2f6)][_0x1a7d53(0x3ad)][_0x1a7d53(0x4d0)][_0x1a7d53(0x4cf)];},Scene_Item[_0x1149b0(0x491)]['adjustItemWidthByStatus']=function(){const _0x3c1ad3=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x3c1ad3(0x3ad)][_0x3c1ad3(0x4d0)]['ItemSceneAdjustItemList'];},Scene_Item[_0x1149b0(0x491)]['createStatusWindow']=function(){const _0x53c44f=_0x1149b0,_0x3e5441=this[_0x53c44f(0x150)]();this[_0x53c44f(0x218)]=new Window_ShopStatus(_0x3e5441),this['addWindow'](this[_0x53c44f(0x218)]),this[_0x53c44f(0x417)][_0x53c44f(0x3f6)](this[_0x53c44f(0x218)]);const _0x3a5982=VisuMZ['ItemsEquipsCore'][_0x53c44f(0x3ad)]['ItemScene']['ItemMenuStatusBgType'];this[_0x53c44f(0x218)]['setBackgroundType'](_0x3a5982||0x0);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x150)]=function(){const _0x46c04b=_0x1149b0;return this[_0x46c04b(0x1cd)]()?this[_0x46c04b(0x376)]():VisuMZ['ItemsEquipsCore'][_0x46c04b(0x3ad)][_0x46c04b(0x4d0)][_0x46c04b(0x477)]['call'](this);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x376)]=function(){const _0x40e280=_0x1149b0,_0x3bf439=this[_0x40e280(0x143)](),_0x5d65b5=this[_0x40e280(0x417)][_0x40e280(0x1d3)],_0x5d9584=this[_0x40e280(0x2de)]()?0x0:Graphics[_0x40e280(0x516)]-this[_0x40e280(0x143)](),_0x417006=this['_itemWindow']['y'];return new Rectangle(_0x5d9584,_0x417006,_0x3bf439,_0x5d65b5);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x143)]=function(){const _0x2956ab=_0x1149b0;return Scene_Shop[_0x2956ab(0x491)][_0x2956ab(0x143)]();},Scene_Item['prototype']['buttonAssistItemListRequirement']=function(){const _0x2aa883=_0x1149b0;if(!this[_0x2aa883(0x288)]())return![];if(!this[_0x2aa883(0x45f)]())return![];if(!this['_itemWindow'])return![];if(!this['_itemWindow'][_0x2aa883(0x3bc)])return![];return this[_0x2aa883(0x288)]()&&this[_0x2aa883(0x45f)]();},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x2b9)]=function(){const _0x1c862a=_0x1149b0;if(this[_0x1c862a(0x34e)]())return this['_itemWindow'][_0x1c862a(0x47c)]()===0x1?TextManager[_0x1c862a(0x257)]('left',_0x1c862a(0x21c)):TextManager[_0x1c862a(0x257)](_0x1c862a(0x2e2),_0x1c862a(0x47e));return Scene_ItemBase[_0x1c862a(0x491)]['buttonAssistKey1']['call'](this);},Scene_Item[_0x1149b0(0x491)][_0x1149b0(0x1fe)]=function(){const _0x3cba31=_0x1149b0;if(this[_0x3cba31(0x34e)]())return VisuMZ[_0x3cba31(0x2f6)][_0x3cba31(0x3ad)][_0x3cba31(0x4d0)][_0x3cba31(0x27c)];return Scene_ItemBase[_0x3cba31(0x491)][_0x3cba31(0x1fe)][_0x3cba31(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x198)]=function(){const _0xc25eb7=_0x1149b0;Scene_ItemBase[_0xc25eb7(0x491)]['start'][_0xc25eb7(0x50b)](this),this[_0xc25eb7(0x43c)]();},Scene_Equip[_0x1149b0(0x491)]['isBottomHelpMode']=function(){const _0x6284d0=_0x1149b0;if(ConfigManager[_0x6284d0(0x180)]&&ConfigManager[_0x6284d0(0x26f)]!==undefined)return ConfigManager[_0x6284d0(0x26f)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0x6284d0(0x288)]()[_0x6284d0(0x1f4)](/LOWER/i);else Scene_MenuBase[_0x6284d0(0x491)][_0x6284d0(0x2de)][_0x6284d0(0x50b)](this);}},Scene_Equip['prototype'][_0x1149b0(0x2de)]=function(){const _0xae8f1e=_0x1149b0;if(ConfigManager[_0xae8f1e(0x180)]&&ConfigManager[_0xae8f1e(0x522)]!==undefined)return ConfigManager[_0xae8f1e(0x522)];else{if(this['isUseItemsEquipsCoreUpdatedLayout']())return this[_0xae8f1e(0x288)]()[_0xae8f1e(0x1f4)](/RIGHT/i);else Scene_MenuBase[_0xae8f1e(0x491)][_0xae8f1e(0x2de)][_0xae8f1e(0x50b)](this);}},Scene_Equip[_0x1149b0(0x491)]['updatedLayoutStyle']=function(){const _0x254044=_0x1149b0;return VisuMZ[_0x254044(0x2f6)][_0x254044(0x3ad)][_0x254044(0x2fc)][_0x254044(0x23a)];},Scene_Equip[_0x1149b0(0x491)]['isUseModernControls']=function(){const _0x3d0911=_0x1149b0;return this[_0x3d0911(0x30a)]&&this['_commandWindow'][_0x3d0911(0x45f)]();},Scene_Equip[_0x1149b0(0x491)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x325c25=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x325c25(0x3ad)]['EquipScene'][_0x325c25(0x202)];},VisuMZ['ItemsEquipsCore']['Scene_Equip_create']=Scene_Equip[_0x1149b0(0x491)]['create'],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x381)]=function(){const _0x5c42f5=_0x1149b0;VisuMZ[_0x5c42f5(0x2f6)]['Scene_Equip_create'][_0x5c42f5(0x50b)](this),this[_0x5c42f5(0x45f)]()&&this[_0x5c42f5(0x4e4)]();},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x51b)]=Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x431)],Scene_Equip['prototype'][_0x1149b0(0x431)]=function(){const _0x34254f=_0x1149b0;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x34254f(0x16b)]():VisuMZ[_0x34254f(0x2f6)]['Scene_Equip_helpWindowRect'][_0x34254f(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x16b)]=function(){const _0x4eda38=_0x1149b0,_0x54f948=0x0,_0x1ea4bc=this[_0x4eda38(0x55c)](),_0x44608c=Graphics[_0x4eda38(0x516)],_0x5a95a8=this['helpAreaHeight']();return new Rectangle(_0x54f948,_0x1ea4bc,_0x44608c,_0x5a95a8);},VisuMZ[_0x1149b0(0x2f6)]['Scene_Equip_statusWindowRect']=Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x150)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x150)]=function(){const _0x55cb57=_0x1149b0;return this[_0x55cb57(0x1cd)]()?this[_0x55cb57(0x376)]():VisuMZ[_0x55cb57(0x2f6)][_0x55cb57(0x478)]['call'](this);},Scene_Equip['prototype'][_0x1149b0(0x376)]=function(){const _0x372d18=_0x1149b0,_0x919f13=this[_0x372d18(0x2de)]()?0x0:Graphics[_0x372d18(0x516)]-this[_0x372d18(0x143)](),_0x4697af=this[_0x372d18(0x3ae)](),_0x1dd814=this[_0x372d18(0x143)](),_0x267679=this[_0x372d18(0x2e1)]();return new Rectangle(_0x919f13,_0x4697af,_0x1dd814,_0x267679);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x2c6)]=Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x44a)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x44a)]=function(){const _0x5f1760=_0x1149b0;VisuMZ[_0x5f1760(0x2f6)][_0x5f1760(0x2c6)][_0x5f1760(0x50b)](this);if(this['_helpWindow'])this[_0x5f1760(0x30a)][_0x5f1760(0x3dd)](this[_0x5f1760(0x2fa)]);},VisuMZ[_0x1149b0(0x2f6)]['Scene_Equip_commandWindowRect']=Scene_Equip['prototype'][_0x1149b0(0x2f4)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x2f4)]=function(){const _0x1f9100=_0x1149b0;return this[_0x1f9100(0x1cd)]()?this[_0x1f9100(0x36b)]():VisuMZ[_0x1f9100(0x2f6)][_0x1f9100(0x296)][_0x1f9100(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x41b)]=function(){const _0x3184aa=_0x1149b0,_0x1b3e39=VisuMZ[_0x3184aa(0x2f6)][_0x3184aa(0x3ad)][_0x3184aa(0x2fc)];return _0x1b3e39[_0x3184aa(0x379)]||_0x1b3e39['CommandAddClear'];},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x36b)]=function(){const _0x3e389c=_0x1149b0,_0x5811c2=this[_0x3e389c(0x41b)](),_0x542f64=this['isRightInputMode']()?this[_0x3e389c(0x143)]():0x0,_0x2e053b=this['mainAreaTop'](),_0x2203c0=Graphics[_0x3e389c(0x516)]-this['statusWidth'](),_0x3d1129=_0x5811c2?this[_0x3e389c(0x283)](0x1,!![]):0x0;return new Rectangle(_0x542f64,_0x2e053b,_0x2203c0,_0x3d1129);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x4e6)]=Scene_Equip['prototype']['createSlotWindow'],Scene_Equip['prototype'][_0x1149b0(0x3d1)]=function(){const _0x2b2eae=_0x1149b0;VisuMZ[_0x2b2eae(0x2f6)][_0x2b2eae(0x4e6)][_0x2b2eae(0x50b)](this),this['isUseModernControls']()&&this[_0x2b2eae(0x186)]();},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x35e)]=Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x361)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x361)]=function(){const _0xba8919=_0x1149b0;return this[_0xba8919(0x1cd)]()?this[_0xba8919(0x413)]():VisuMZ[_0xba8919(0x2f6)]['Scene_Equip_slotWindowRect'][_0xba8919(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x413)]=function(){const _0x2352ab=_0x1149b0,_0x48acce=this[_0x2352ab(0x2f4)](),_0x2a7864=this[_0x2352ab(0x2de)]()?this[_0x2352ab(0x143)]():0x0,_0x4bc37c=_0x48acce['y']+_0x48acce[_0x2352ab(0x1d3)],_0x5aa76a=Graphics[_0x2352ab(0x516)]-this[_0x2352ab(0x143)](),_0x34785b=this[_0x2352ab(0x2e1)]()-_0x48acce['height'];return new Rectangle(_0x2a7864,_0x4bc37c,_0x5aa76a,_0x34785b);},VisuMZ[_0x1149b0(0x2f6)]['Scene_Equip_itemWindowRect']=Scene_Equip['prototype'][_0x1149b0(0x4a8)],Scene_Equip['prototype'][_0x1149b0(0x4a8)]=function(){const _0x50b299=_0x1149b0;return this[_0x50b299(0x1cd)]()?this[_0x50b299(0x361)]():VisuMZ['ItemsEquipsCore']['Scene_Equip_itemWindowRect'][_0x50b299(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x143)]=function(){const _0x1f1161=_0x1149b0;return this[_0x1f1161(0x1cd)]()?this[_0x1f1161(0x177)]():VisuMZ[_0x1f1161(0x2f6)][_0x1f1161(0x3ad)]['EquipScene'][_0x1f1161(0x1c6)];},Scene_Equip[_0x1149b0(0x491)]['geUpdatedLayoutStatusWidth']=function(){const _0x307581=_0x1149b0;return Math[_0x307581(0x271)](Graphics['boxWidth']/0x2);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x186)]=function(){const _0x5476f5=_0x1149b0;this['_slotWindow']['setHandler'](_0x5476f5(0x513),this['popScene']['bind'](this)),this[_0x5476f5(0x166)][_0x5476f5(0x32d)]('pagedown',this[_0x5476f5(0x351)]['bind'](this)),this[_0x5476f5(0x166)][_0x5476f5(0x32d)](_0x5476f5(0x2e2),this['previousActor'][_0x5476f5(0x1be)](this));},VisuMZ[_0x1149b0(0x2f6)]['Scene_Equip_commandEquip']=Scene_Equip['prototype'][_0x1149b0(0x4e4)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x4e4)]=function(){const _0x261c2d=_0x1149b0;this['isUseModernControls']()&&(this[_0x261c2d(0x30a)][_0x261c2d(0x562)](),this[_0x261c2d(0x30a)][_0x261c2d(0x174)]()),VisuMZ[_0x261c2d(0x2f6)]['Scene_Equip_commandEquip'][_0x261c2d(0x50b)](this);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x204)]=Scene_Equip['prototype'][_0x1149b0(0x237)],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x237)]=function(){const _0x268e8d=_0x1149b0;this[_0x268e8d(0x166)][_0x268e8d(0x42e)]()>=0x0?(VisuMZ[_0x268e8d(0x2f6)]['Scene_Equip_onSlotOk'][_0x268e8d(0x50b)](this),this[_0x268e8d(0x2f7)]()):(this[_0x268e8d(0x166)]['smoothSelect'](0x0),this[_0x268e8d(0x166)][_0x268e8d(0x4bb)]());},Scene_Equip['prototype'][_0x1149b0(0x2f7)]=function(){const _0x527d28=_0x1149b0;this[_0x527d28(0x417)][_0x527d28(0x518)]();const _0x6d4aa3=this[_0x527d28(0x166)][_0x527d28(0x378)](),_0x5a505b=this[_0x527d28(0x417)]['_data']['indexOf'](_0x6d4aa3),_0x2a731d=Math[_0x527d28(0x271)](this[_0x527d28(0x417)][_0x527d28(0x436)]()/0x2)-0x1;this[_0x527d28(0x417)]['smoothSelect'](_0x5a505b>=0x0?_0x5a505b:0x0),this[_0x527d28(0x417)][_0x527d28(0x201)]>0x1&&(this[_0x527d28(0x417)][_0x527d28(0x201)]=0x1,this['_itemWindow']['updateSmoothScroll']()),this[_0x527d28(0x417)][_0x527d28(0x29d)](this[_0x527d28(0x417)][_0x527d28(0x42e)]()-_0x2a731d);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x363)]=Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x16a)],Scene_Equip['prototype']['onSlotCancel']=function(){const _0x2b5d95=_0x1149b0;VisuMZ[_0x2b5d95(0x2f6)][_0x2b5d95(0x363)][_0x2b5d95(0x50b)](this),this['isUseModernControls']()&&(this[_0x2b5d95(0x30a)][_0x2b5d95(0x529)](0x0),this['_slotWindow'][_0x2b5d95(0x174)]());},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x42b)]=Scene_Equip['prototype']['onActorChange'],Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x1fd)]=function(){const _0x53a1b6=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x53a1b6(0x42b)]['call'](this),this[_0x53a1b6(0x45f)]()&&(this[_0x53a1b6(0x30a)][_0x53a1b6(0x174)](),this[_0x53a1b6(0x30a)][_0x53a1b6(0x562)](),this[_0x53a1b6(0x166)][_0x53a1b6(0x529)](0x0),this['_slotWindow'][_0x53a1b6(0x4bb)]());},Scene_Equip['prototype']['buttonAssistSlotWindowShift']=function(){const _0x4223bd=_0x1149b0;if(!this[_0x4223bd(0x166)])return![];if(!this['_slotWindow'][_0x4223bd(0x3bc)])return![];return this[_0x4223bd(0x166)][_0x4223bd(0x148)]();},Scene_Equip['prototype']['buttonAssistKey3']=function(){const _0xd66ba6=_0x1149b0;if(this['buttonAssistSlotWindowShift']())return TextManager[_0xd66ba6(0x305)](_0xd66ba6(0x30e));return Scene_MenuBase[_0xd66ba6(0x491)][_0xd66ba6(0x240)][_0xd66ba6(0x50b)](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x383)]=function(){const _0x4406ed=_0x1149b0;if(this[_0x4406ed(0x53e)]())return VisuMZ[_0x4406ed(0x2f6)][_0x4406ed(0x3ad)][_0x4406ed(0x2fc)][_0x4406ed(0x534)];return Scene_MenuBase[_0x4406ed(0x491)]['buttonAssistText3']['call'](this);},Scene_Equip['prototype']['buttonAssistOffset3']=function(){const _0x5c9cb1=_0x1149b0;if(this[_0x5c9cb1(0x53e)]())return this[_0x5c9cb1(0x340)]['width']/0x5/-0x3;return Scene_MenuBase[_0x5c9cb1(0x491)][_0x5c9cb1(0x2ea)]['call'](this);},Scene_Equip[_0x1149b0(0x491)][_0x1149b0(0x3d5)]=function(){const _0x3b94a9=_0x1149b0;SceneManager[_0x3b94a9(0x2b5)]();},VisuMZ[_0x1149b0(0x2f6)]['Scene_Load_reloadMapIfUpdated']=Scene_Load[_0x1149b0(0x491)][_0x1149b0(0x41c)],Scene_Load[_0x1149b0(0x491)][_0x1149b0(0x41c)]=function(){const _0x782a3c=_0x1149b0;VisuMZ[_0x782a3c(0x2f6)][_0x782a3c(0x14a)][_0x782a3c(0x50b)](this),this['refreshActorEquipSlotsIfUpdated']();},Scene_Load[_0x1149b0(0x491)][_0x1149b0(0x474)]=function(){const _0x737ece=_0x1149b0;if($gameSystem[_0x737ece(0x2cb)]()!==$dataSystem['versionId'])for(const _0x5c0d4a of $gameActors[_0x737ece(0x34f)]){if(_0x5c0d4a)_0x5c0d4a[_0x737ece(0x18f)]();}},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x1dd)]=function(){const _0x2064f9=_0x1149b0;if(ConfigManager['uiMenuStyle']&&ConfigManager[_0x2064f9(0x26f)]!==undefined)return ConfigManager[_0x2064f9(0x26f)];else{if(this[_0x2064f9(0x1cd)]())return this[_0x2064f9(0x288)]()[_0x2064f9(0x1f4)](/LOWER/i);else Scene_MenuBase[_0x2064f9(0x491)][_0x2064f9(0x2de)]['call'](this);}},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x2de)]=function(){const _0x1b07df=_0x1149b0;if(ConfigManager['uiMenuStyle']&&ConfigManager['uiInputPosition']!==undefined)return ConfigManager[_0x1b07df(0x522)];else{if(this[_0x1b07df(0x1cd)]())return this[_0x1b07df(0x288)]()['match'](/RIGHT/i);else Scene_MenuBase[_0x1b07df(0x491)][_0x1b07df(0x2de)][_0x1b07df(0x50b)](this);}},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x288)]=function(){const _0x26ee80=_0x1149b0;return VisuMZ[_0x26ee80(0x2f6)]['Settings']['ShopScene']['LayoutStyle'];},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x45f)]=function(){const _0x156820=_0x1149b0;return this[_0x156820(0x476)]&&this['_categoryWindow'][_0x156820(0x45f)]();},Scene_Shop[_0x1149b0(0x491)]['isUseItemsEquipsCoreUpdatedLayout']=function(){const _0x16fc6e=_0x1149b0;return VisuMZ[_0x16fc6e(0x2f6)][_0x16fc6e(0x3ad)][_0x16fc6e(0x43a)][_0x16fc6e(0x202)];},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_prepare']=Scene_Shop[_0x1149b0(0x491)]['prepare'],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x1ee)]=function(_0x6962fd,_0x26c1d7){const _0x3fc9ff=_0x1149b0;_0x6962fd=VisuMZ['ItemsEquipsCore'][_0x3fc9ff(0x40f)](_0x6962fd),VisuMZ[_0x3fc9ff(0x2f6)]['Scene_Shop_prepare'][_0x3fc9ff(0x50b)](this,_0x6962fd,_0x26c1d7),this[_0x3fc9ff(0x18d)]();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x18d)]=function(){const _0x3f4b95=_0x1149b0;this['_goodsCount']=0x0;const _0x4e452d=[];for(const _0x5d6c8b of this[_0x3f4b95(0x3ce)]){this[_0x3f4b95(0x14f)](_0x5d6c8b)?this[_0x3f4b95(0x1b9)]++:_0x4e452d['push'](_0x5d6c8b);}for(const _0x414746 of _0x4e452d){this['_goods'][_0x3f4b95(0x34b)](_0x414746);}},Scene_Shop['prototype']['isGoodShown']=function(_0x24f225){if(_0x24f225[0x0]>0x2||_0x24f225[0x0]<0x0)return![];const _0x384016=[$dataItems,$dataWeapons,$dataArmors][_0x24f225[0x0]][_0x24f225[0x1]];if(!_0x384016)return![];return!![];},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x229)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x381)],Scene_Shop['prototype'][_0x1149b0(0x381)]=function(){const _0x38e2f=_0x1149b0;VisuMZ[_0x38e2f(0x2f6)][_0x38e2f(0x229)][_0x38e2f(0x50b)](this),this[_0x38e2f(0x1cd)]()&&this[_0x38e2f(0x420)](),this[_0x38e2f(0x254)]();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x420)]=function(){const _0x437daf=_0x1149b0;this[_0x437daf(0x480)][_0x437daf(0x508)](),this[_0x437daf(0x41d)][_0x437daf(0x3e1)](),this[_0x437daf(0x41d)]['deselect'](),this['_statusWindow'][_0x437daf(0x3e1)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x37f)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x431)],Scene_Shop['prototype'][_0x1149b0(0x431)]=function(){const _0x2973d4=_0x1149b0;return this[_0x2973d4(0x1cd)]()?this[_0x2973d4(0x16b)]():VisuMZ['ItemsEquipsCore'][_0x2973d4(0x37f)]['call'](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x16b)]=function(){const _0x1261d8=_0x1149b0,_0x5acba5=0x0,_0x17ca13=this[_0x1261d8(0x55c)](),_0x273ee0=Graphics[_0x1261d8(0x516)],_0x252e09=this['helpAreaHeight']();return new Rectangle(_0x5acba5,_0x17ca13,_0x273ee0,_0x252e09);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x1f0)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x193)],Scene_Shop['prototype'][_0x1149b0(0x193)]=function(){const _0x4e53fa=_0x1149b0;return this[_0x4e53fa(0x1cd)]()?this[_0x4e53fa(0x373)]():VisuMZ[_0x4e53fa(0x2f6)][_0x4e53fa(0x1f0)]['call'](this);},Scene_Shop['prototype']['goldWindowRectItemsEquipsCore']=function(){const _0x167d5e=_0x1149b0,_0x10c3aa=this[_0x167d5e(0x3be)](),_0x3d2bc7=this[_0x167d5e(0x283)](0x1,!![]),_0x28a545=this['isRightInputMode']()?0x0:Graphics['boxWidth']-_0x10c3aa,_0xc4736a=this[_0x167d5e(0x3ae)]();return new Rectangle(_0x28a545,_0xc4736a,_0x10c3aa,_0x3d2bc7);},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_commandWindowRect']=Scene_Shop['prototype'][_0x1149b0(0x2f4)],Scene_Shop[_0x1149b0(0x491)]['commandWindowRect']=function(){const _0x260eae=_0x1149b0;return this[_0x260eae(0x1cd)]()?this[_0x260eae(0x36b)]():VisuMZ['ItemsEquipsCore'][_0x260eae(0x168)][_0x260eae(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x36b)]=function(){const _0x116396=_0x1149b0,_0x5db2d1=this[_0x116396(0x2de)]()?this[_0x116396(0x3be)]():0x0,_0x127319=this[_0x116396(0x3ae)](),_0x2a107a=Graphics[_0x116396(0x516)]-this[_0x116396(0x3be)](),_0x5dfc57=this[_0x116396(0x283)](0x1,!![]);return new Rectangle(_0x5db2d1,_0x127319,_0x2a107a,_0x5dfc57);},VisuMZ['ItemsEquipsCore']['Scene_Shop_numberWindowRect']=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x411)],Scene_Shop['prototype'][_0x1149b0(0x411)]=function(){const _0x1ab982=_0x1149b0;return this[_0x1ab982(0x1cd)]()?this[_0x1ab982(0x542)]():VisuMZ[_0x1ab982(0x2f6)][_0x1ab982(0x1a2)][_0x1ab982(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x542)]=function(){const _0x32757b=_0x1149b0,_0x66159f=this[_0x32757b(0x30a)]['y']+this[_0x32757b(0x30a)][_0x32757b(0x1d3)],_0xfc2172=Graphics[_0x32757b(0x516)]-this['statusWidth'](),_0x47a10f=this[_0x32757b(0x2de)]()?Graphics[_0x32757b(0x516)]-_0xfc2172:0x0,_0xf5012b=this[_0x32757b(0x2e1)]()-this['_commandWindow'][_0x32757b(0x1d3)];return new Rectangle(_0x47a10f,_0x66159f,_0xfc2172,_0xf5012b);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3a3)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x150)],Scene_Shop['prototype'][_0x1149b0(0x150)]=function(){const _0x49841a=_0x1149b0;return this[_0x49841a(0x1cd)]()?this[_0x49841a(0x376)]():VisuMZ[_0x49841a(0x2f6)][_0x49841a(0x3a3)][_0x49841a(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)]['statusWindowRectItemsEquipsCore']=function(){const _0x5abe94=_0x1149b0,_0xac6179=this['statusWidth'](),_0x2b13f6=this[_0x5abe94(0x2e1)]()-this[_0x5abe94(0x30a)][_0x5abe94(0x1d3)],_0x392276=this[_0x5abe94(0x2de)]()?0x0:Graphics['boxWidth']-_0xac6179,_0x3c0eb9=this['_commandWindow']['y']+this[_0x5abe94(0x30a)]['height'];return new Rectangle(_0x392276,_0x3c0eb9,_0xac6179,_0x2b13f6);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x2b4)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x467)],Scene_Shop['prototype'][_0x1149b0(0x467)]=function(){const _0x4b5283=_0x1149b0;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x4b5283(0x206)]():VisuMZ[_0x4b5283(0x2f6)][_0x4b5283(0x2b4)][_0x4b5283(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x206)]=function(){const _0x568e34=_0x1149b0,_0x3a7209=this['_commandWindow']['y']+this[_0x568e34(0x30a)][_0x568e34(0x1d3)],_0x242ff1=Graphics[_0x568e34(0x516)]-this[_0x568e34(0x143)](),_0x24955b=this[_0x568e34(0x2e1)]()-this[_0x568e34(0x30a)]['height'],_0x11415e=this[_0x568e34(0x2de)]()?Graphics['boxWidth']-_0x242ff1:0x0;return new Rectangle(_0x11415e,_0x3a7209,_0x242ff1,_0x24955b);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x50c)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x146)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x146)]=function(){const _0x46b172=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x46b172(0x50c)][_0x46b172(0x50b)](this),this['isUseModernControls']()&&this['postCreateCategoryWindowItemsEquipsCore']();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x2c3)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x395)],Scene_Shop['prototype'][_0x1149b0(0x395)]=function(){const _0x876c7f=_0x1149b0;return this[_0x876c7f(0x1cd)]()?this[_0x876c7f(0x298)]():VisuMZ[_0x876c7f(0x2f6)]['Scene_Shop_categoryWindowRect'][_0x876c7f(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x298)]=function(){const _0x1c3520=_0x1149b0,_0x331295=this[_0x1c3520(0x30a)]['y'],_0x4ce808=this[_0x1c3520(0x30a)][_0x1c3520(0x241)],_0x2ddcb4=this[_0x1c3520(0x283)](0x1,!![]),_0x22fbd5=this[_0x1c3520(0x2de)]()?Graphics['boxWidth']-_0x4ce808:0x0;return new Rectangle(_0x22fbd5,_0x331295,_0x4ce808,_0x2ddcb4);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x38e)]=function(){const _0x21e20b=_0x1149b0;delete this[_0x21e20b(0x476)][_0x21e20b(0x278)]['ok'],delete this[_0x21e20b(0x476)][_0x21e20b(0x278)][_0x21e20b(0x513)];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x232)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x52b)],Scene_Shop[_0x1149b0(0x491)]['createSellWindow']=function(){const _0x48641e=_0x1149b0;VisuMZ[_0x48641e(0x2f6)][_0x48641e(0x232)][_0x48641e(0x50b)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x48641e(0x44b)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1fa)]=Scene_Shop[_0x1149b0(0x491)]['sellWindowRect'],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x54a)]=function(){const _0x173fdc=_0x1149b0;return this['isUseItemsEquipsCoreUpdatedLayout']()?this[_0x173fdc(0x2cd)]():VisuMZ[_0x173fdc(0x2f6)][_0x173fdc(0x1fa)][_0x173fdc(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x2cd)]=function(){const _0x36c322=_0x1149b0,_0x3e6237=this[_0x36c322(0x476)]['y']+this[_0x36c322(0x476)][_0x36c322(0x1d3)],_0x34ad25=Graphics[_0x36c322(0x516)]-this[_0x36c322(0x143)](),_0x12b109=this[_0x36c322(0x2e1)]()-this['_categoryWindow'][_0x36c322(0x1d3)],_0x5cca18=this[_0x36c322(0x2de)]()?Graphics['boxWidth']-_0x34ad25:0x0;return new Rectangle(_0x5cca18,_0x3e6237,_0x34ad25,_0x12b109);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x44b)]=function(){const _0xa6bd56=_0x1149b0;this[_0xa6bd56(0x281)][_0xa6bd56(0x3f6)](this[_0xa6bd56(0x218)]);},Scene_Shop['prototype'][_0x1149b0(0x143)]=function(){const _0x5db6d4=_0x1149b0;return VisuMZ[_0x5db6d4(0x2f6)]['Settings'][_0x5db6d4(0x1c9)][_0x5db6d4(0x2f3)];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x4ca)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x537)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x537)]=function(){const _0x1da5a3=_0x1149b0;VisuMZ[_0x1da5a3(0x2f6)][_0x1da5a3(0x4ca)][_0x1da5a3(0x50b)](this),this[_0x1da5a3(0x1cd)]()&&this['_statusWindow'][_0x1da5a3(0x3e1)](),this['_sellWindow']['updateHelp']();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x49f)]=Scene_Shop[_0x1149b0(0x491)]['commandBuy'],Scene_Shop[_0x1149b0(0x491)]['commandBuy']=function(){const _0xe1e338=_0x1149b0;VisuMZ[_0xe1e338(0x2f6)][_0xe1e338(0x49f)][_0xe1e338(0x50b)](this),this[_0xe1e338(0x1cd)]()&&this[_0xe1e338(0x315)]();},Scene_Shop[_0x1149b0(0x491)]['commandBuyItemsEquipsCore']=function(){const _0x1230d3=_0x1149b0;this[_0x1230d3(0x1c1)]=this[_0x1230d3(0x1c1)]||0x0,this[_0x1230d3(0x41d)][_0x1230d3(0x529)](this[_0x1230d3(0x1c1)]);},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_commandSell']=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x30c)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x30c)]=function(){const _0x25284c=_0x1149b0;VisuMZ[_0x25284c(0x2f6)]['Scene_Shop_commandSell'][_0x25284c(0x50b)](this),this[_0x25284c(0x1cd)]()&&this[_0x25284c(0x410)](),this[_0x25284c(0x45f)]()&&(this[_0x25284c(0x476)]['smoothSelect'](0x0),this[_0x25284c(0x325)]());},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x410)]=function(){const _0x4caf95=_0x1149b0;this[_0x4caf95(0x41d)][_0x4caf95(0x508)](),this[_0x4caf95(0x30a)][_0x4caf95(0x508)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x557)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x52c)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x52c)]=function(){const _0x1197e9=_0x1149b0;VisuMZ[_0x1197e9(0x2f6)][_0x1197e9(0x557)][_0x1197e9(0x50b)](this),this['isUseItemsEquipsCoreUpdatedLayout']()&&this[_0x1197e9(0x213)]();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x213)]=function(){const _0x3670e9=_0x1149b0;this['_buyWindowLastIndex']=this[_0x3670e9(0x41d)][_0x3670e9(0x42e)](),this[_0x3670e9(0x41d)][_0x3670e9(0x3e1)](),this['_buyWindow']['deselect'](),this[_0x3670e9(0x41d)]['smoothScrollTo'](0x0,0x0),this[_0x3670e9(0x218)][_0x3670e9(0x3e1)](),this['_dummyWindow'][_0x3670e9(0x508)]();},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_onCategoryCancel']=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x268)],Scene_Shop[_0x1149b0(0x491)]['onCategoryCancel']=function(){const _0x500803=_0x1149b0;VisuMZ[_0x500803(0x2f6)][_0x500803(0x50a)][_0x500803(0x50b)](this),this[_0x500803(0x1cd)]()&&this[_0x500803(0x2d2)]();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x2d2)]=function(){const _0x4c0a10=_0x1149b0;this[_0x4c0a10(0x41d)][_0x4c0a10(0x3e1)](),this[_0x4c0a10(0x30a)][_0x4c0a10(0x3e1)]();},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_onBuyOk']=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x4bd)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x4bd)]=function(){const _0xc1e81e=_0x1149b0;$gameTemp[_0xc1e81e(0x511)]=!![],VisuMZ[_0xc1e81e(0x2f6)]['Scene_Shop_onBuyOk'][_0xc1e81e(0x50b)](this),$gameTemp[_0xc1e81e(0x511)]=![],this[_0xc1e81e(0x219)]=this[_0xc1e81e(0x41d)][_0xc1e81e(0x378)]();},VisuMZ[_0x1149b0(0x2f6)]['Scene_Shop_buyingPrice']=Scene_Shop['prototype']['buyingPrice'],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x4af)]=function(){const _0x6ac15b=_0x1149b0;$gameTemp[_0x6ac15b(0x511)]=!![],this['_item']=this[_0x6ac15b(0x41d)]['item']();const _0x1f2535=VisuMZ['ItemsEquipsCore'][_0x6ac15b(0x2db)][_0x6ac15b(0x50b)](this);return $gameTemp['_bypassProxy']=![],this[_0x6ac15b(0x219)]=this[_0x6ac15b(0x41d)][_0x6ac15b(0x378)](),_0x1f2535;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x251)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x222)],Scene_Shop[_0x1149b0(0x491)]['onSellOk']=function(){const _0x3ed79f=_0x1149b0;VisuMZ[_0x3ed79f(0x2f6)]['Scene_Shop_onSellOk'][_0x3ed79f(0x50b)](this),this[_0x3ed79f(0x1cd)]()&&this[_0x3ed79f(0x32f)]();},Scene_Shop[_0x1149b0(0x491)]['onSellOkItemsEquipsCore']=function(){const _0x4ac661=_0x1149b0;this['_categoryWindow'][_0x4ac661(0x3e1)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x17b)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x211)],Scene_Shop['prototype']['onSellCancel']=function(){const _0x158893=_0x1149b0;VisuMZ[_0x158893(0x2f6)]['Scene_Shop_onSellCancel'][_0x158893(0x50b)](this),this[_0x158893(0x45f)]()&&this[_0x158893(0x268)](),this[_0x158893(0x1cd)]()&&this[_0x158893(0x480)][_0x158893(0x508)]();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x452)]=function(_0x482303){const _0x4eb8e8=_0x1149b0,_0x31b97d=this[_0x4eb8e8(0x219)];this['_item']=_0x482303;const _0xc7475f=this[_0x4eb8e8(0x1c4)]();return this[_0x4eb8e8(0x219)]=_0x31b97d,_0xc7475f;},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x274)]=Scene_Shop[_0x1149b0(0x491)]['sellingPrice'],Scene_Shop[_0x1149b0(0x491)]['sellingPrice']=function(){const _0x5a0d92=_0x1149b0;let _0x14e9b9=this[_0x5a0d92(0x313)]();const _0x46dcf3=this['_item'];return _0x14e9b9=VisuMZ[_0x5a0d92(0x2f6)][_0x5a0d92(0x3ad)][_0x5a0d92(0x43a)]['SellPriceJS']['call'](this,_0x46dcf3,_0x14e9b9),_0x14e9b9;},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x313)]=function(){const _0x1b38ed=_0x1149b0;let _0x129b54=this[_0x1b38ed(0x219)][_0x1b38ed(0x494)];if(!this[_0x1b38ed(0x219)])return 0x0;else{if(this[_0x1b38ed(0x219)][_0x1b38ed(0x1a6)]['match'](/<JS SELL PRICE>\s*([\s\S]*)\s*<\/JS SELL PRICE>/i)){const _0x2c70f5=String(RegExp['$1']);window['item']=this[_0x1b38ed(0x219)],window[_0x1b38ed(0x494)]=_0x129b54*this[_0x1b38ed(0x194)]();try{eval(_0x2c70f5);}catch(_0x91e1a8){if($gameTemp[_0x1b38ed(0x533)]())console['log'](_0x91e1a8);}let _0x21afc4=window[_0x1b38ed(0x494)];window[_0x1b38ed(0x378)]=undefined,window['price']=undefined;if(isNaN(_0x21afc4))_0x21afc4=0x0;return Math[_0x1b38ed(0x271)](_0x21afc4);}else return this[_0x1b38ed(0x219)][_0x1b38ed(0x1a6)][_0x1b38ed(0x1f4)](/<SELL PRICE:[ ](\d+)>/i)?parseInt(RegExp['$1']):Math[_0x1b38ed(0x271)](this[_0x1b38ed(0x552)]());}},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x552)]=function(){const _0x3436f5=_0x1149b0;return this[_0x3436f5(0x219)][_0x3436f5(0x494)]*this[_0x3436f5(0x194)]();},Scene_Shop[_0x1149b0(0x491)]['sellPriceRate']=function(){const _0x4b5dd9=_0x1149b0;return VisuMZ[_0x4b5dd9(0x2f6)][_0x4b5dd9(0x3ad)][_0x4b5dd9(0x43a)][_0x4b5dd9(0x2fb)];},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x34e)]=function(){const _0x224023=_0x1149b0;if(!this[_0x224023(0x288)]())return![];if(!this[_0x224023(0x45f)]())return![];if(!this['_sellWindow'])return![];if(!this[_0x224023(0x281)][_0x224023(0x3bc)])return![];return this[_0x224023(0x288)]()&&this[_0x224023(0x45f)]();},Scene_Shop[_0x1149b0(0x491)]['buttonAssistKey1']=function(){const _0xd7ea2d=_0x1149b0;if(this['buttonAssistItemListRequirement']())return this[_0xd7ea2d(0x281)]['maxCols']()===0x1?TextManager['getInputMultiButtonStrings'](_0xd7ea2d(0x423),_0xd7ea2d(0x21c)):TextManager[_0xd7ea2d(0x257)](_0xd7ea2d(0x2e2),'pagedown');else{if(this[_0xd7ea2d(0x242)]&&this[_0xd7ea2d(0x242)][_0xd7ea2d(0x3bc)])return TextManager['getInputMultiButtonStrings'](_0xd7ea2d(0x423),_0xd7ea2d(0x21c));}return Scene_MenuBase[_0xd7ea2d(0x491)][_0xd7ea2d(0x2b9)][_0xd7ea2d(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)]['buttonAssistKey2']=function(){const _0x2792fc=_0x1149b0;if(this['_numberWindow']&&this[_0x2792fc(0x242)][_0x2792fc(0x3bc)])return TextManager[_0x2792fc(0x257)]('up',_0x2792fc(0x292));return Scene_MenuBase[_0x2792fc(0x491)][_0x2792fc(0x309)][_0x2792fc(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x1fe)]=function(){const _0x199446=_0x1149b0;if(this[_0x199446(0x34e)]())return VisuMZ[_0x199446(0x2f6)][_0x199446(0x3ad)][_0x199446(0x4d0)][_0x199446(0x27c)];else{if(this[_0x199446(0x242)]&&this[_0x199446(0x242)][_0x199446(0x3bc)])return VisuMZ[_0x199446(0x2f6)][_0x199446(0x3ad)][_0x199446(0x43a)][_0x199446(0x18c)];}return Scene_MenuBase[_0x199446(0x491)]['buttonAssistText1']['call'](this);},Scene_Shop['prototype']['buttonAssistText2']=function(){const _0x5e2cc7=_0x1149b0;if(this['_numberWindow']&&this[_0x5e2cc7(0x242)][_0x5e2cc7(0x3bc)])return VisuMZ[_0x5e2cc7(0x2f6)][_0x5e2cc7(0x3ad)][_0x5e2cc7(0x43a)]['buttonAssistLargeIncrement'];return Scene_MenuBase[_0x5e2cc7(0x491)][_0x5e2cc7(0x1a3)][_0x5e2cc7(0x50b)](this);},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x254)]=function(){const _0x49600b=_0x1149b0;if(!SceneManager['isSceneShop']())return;const _0x2862f3=VisuMZ[_0x49600b(0x2f6)]['Settings'][_0x49600b(0x43a)];_0x2862f3[_0x49600b(0x407)]&&$gameSwitches[_0x49600b(0x1ec)](_0x2862f3[_0x49600b(0x407)],![]),_0x2862f3[_0x49600b(0x370)]&&$gameSwitches['setValue'](_0x2862f3[_0x49600b(0x370)],![]);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3b5)]=Scene_Shop['prototype']['doBuy'],Scene_Shop[_0x1149b0(0x491)]['doBuy']=function(_0x3c3cfb){const _0x4ba704=_0x1149b0;VisuMZ[_0x4ba704(0x2f6)][_0x4ba704(0x3b5)]['call'](this,_0x3c3cfb),this[_0x4ba704(0x492)](this['_item'],_0x3c3cfb);if(_0x3c3cfb<=0x0)return;const _0x33b242=VisuMZ[_0x4ba704(0x2f6)][_0x4ba704(0x3ad)][_0x4ba704(0x43a)];_0x33b242['SwitchBuy']&&$gameSwitches[_0x4ba704(0x1ec)](_0x33b242[_0x4ba704(0x407)],!![]),this[_0x4ba704(0x41d)]['refresh'](),this[_0x4ba704(0x281)]['refresh']();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x492)]=function(_0x4a54db,_0x377080){const _0x165da5=_0x1149b0;this[_0x165da5(0x173)](_0x4a54db,_0x377080),$gameParty[_0x165da5(0x154)](_0x4a54db,_0x377080),$gameParty[_0x165da5(0x1bf)](_0x377080*this[_0x165da5(0x4af)]());},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x173)]=function(_0x128c7f,_0x3734ad){const _0x527021=_0x1149b0;if(!_0x128c7f)return;if(!_0x3734ad)return;const _0x55eb6c=VisuMZ[_0x527021(0x2f6)]['ShopListingRegExp'],_0xe8b186=_0x128c7f[_0x527021(0x1a6)]||'';if(_0xe8b186[_0x527021(0x1f4)](_0x55eb6c[_0x527021(0x456)])){const _0x45e2d5=String(RegExp['$1'])[_0x527021(0x3a2)](',')[_0x527021(0x3ca)](_0xbbd93b=>Number(_0xbbd93b));for(const _0x69711f of _0x45e2d5){$gameSwitches['setValue'](_0x69711f,!![]);}}if(_0xe8b186['match'](_0x55eb6c[_0x527021(0x37b)])){const _0x5e37f5=String(RegExp['$1'])[_0x527021(0x3a2)](',')[_0x527021(0x3ca)](_0x4f6043=>Number(_0x4f6043));for(const _0x1698c8 of _0x5e37f5){$gameSwitches[_0x527021(0x1ec)](_0x1698c8,![]);}}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1d6)]=Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x172)],Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x172)]=function(_0x13c321){const _0x4562f8=_0x1149b0;VisuMZ['ItemsEquipsCore'][_0x4562f8(0x1d6)][_0x4562f8(0x50b)](this,_0x13c321),this[_0x4562f8(0x427)](this[_0x4562f8(0x219)],_0x13c321);if(_0x13c321<=0x0)return;const _0xc4521b=VisuMZ[_0x4562f8(0x2f6)]['Settings'][_0x4562f8(0x43a)];_0xc4521b[_0x4562f8(0x407)]&&$gameSwitches[_0x4562f8(0x1ec)](_0xc4521b['SwitchSell'],!![]),this[_0x4562f8(0x41d)][_0x4562f8(0x518)](),this[_0x4562f8(0x281)]['refresh']();},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x427)]=function(_0x5deebb,_0x536509){const _0x248d6d=_0x1149b0;this[_0x248d6d(0x3cc)](_0x5deebb,_0x536509),$gameParty[_0x248d6d(0x4db)](_0x5deebb,_0x536509),$gameParty[_0x248d6d(0x4fa)](_0x536509*this[_0x248d6d(0x1c4)]());},Scene_Shop[_0x1149b0(0x491)][_0x1149b0(0x3cc)]=function(_0xef283b,_0x531a26){const _0x1f4868=_0x1149b0;if(!_0xef283b)return;if(!_0x531a26)return;const _0x574edb=VisuMZ[_0x1f4868(0x2f6)]['ShopListingRegExp'],_0x18889a=_0xef283b['note']||'';if(_0x18889a[_0x1f4868(0x1f4)](_0x574edb[_0x1f4868(0x53d)])){const _0xa189a8=String(RegExp['$1'])[_0x1f4868(0x3a2)](',')[_0x1f4868(0x3ca)](_0x302c71=>Number(_0x302c71));for(const _0x574c1b of _0xa189a8){$gameSwitches[_0x1f4868(0x1ec)](_0x574c1b,!![]);}}if(_0x18889a[_0x1f4868(0x1f4)](_0x574edb[_0x1f4868(0x2e6)])){const _0x502576=String(RegExp['$1'])[_0x1f4868(0x3a2)](',')[_0x1f4868(0x3ca)](_0x5164b0=>Number(_0x5164b0));for(const _0x3e4efa of _0x502576){$gameSwitches[_0x1f4868(0x1ec)](_0x3e4efa,![]);}}};function Sprite_NewLabel(){const _0x221fea=_0x1149b0;this[_0x221fea(0x1af)](...arguments);}Sprite_NewLabel[_0x1149b0(0x491)]=Object[_0x1149b0(0x381)](Sprite[_0x1149b0(0x491)]),Sprite_NewLabel[_0x1149b0(0x491)][_0x1149b0(0x1cf)]=Sprite_NewLabel,Sprite_NewLabel[_0x1149b0(0x491)][_0x1149b0(0x1af)]=function(){const _0x1b8433=_0x1149b0;Sprite['prototype'][_0x1b8433(0x1af)][_0x1b8433(0x50b)](this),this[_0x1b8433(0x2d0)]();},Sprite_NewLabel[_0x1149b0(0x491)][_0x1149b0(0x2d0)]=function(){const _0x5cb8b8=_0x1149b0,_0x42bc6e=ImageManager['iconWidth'],_0x572256=ImageManager[_0x5cb8b8(0x38c)];this[_0x5cb8b8(0x311)]=new Bitmap(_0x42bc6e,_0x572256),this['drawNewLabelIcon'](),this[_0x5cb8b8(0x36a)]();},Sprite_NewLabel['prototype'][_0x1149b0(0x3fb)]=function(){const _0x3bd4f1=_0x1149b0,_0x2c3371=VisuMZ[_0x3bd4f1(0x2f6)][_0x3bd4f1(0x3ad)][_0x3bd4f1(0x3bb)]['Icon'];if(_0x2c3371<=0x0)return;const _0x773775=ImageManager[_0x3bd4f1(0x33a)]('IconSet'),_0x3bd239=ImageManager['iconWidth'],_0x3b1e87=ImageManager[_0x3bd4f1(0x38c)],_0x9fef3e=_0x2c3371%0x10*_0x3bd239,_0x299576=Math[_0x3bd4f1(0x271)](_0x2c3371/0x10)*_0x3b1e87;this[_0x3bd4f1(0x311)]['blt'](_0x773775,_0x9fef3e,_0x299576,_0x3bd239,_0x3b1e87,0x0,0x0);},Sprite_NewLabel[_0x1149b0(0x491)]['drawNewLabelText']=function(){const _0x12df15=_0x1149b0,_0x10f7f6=VisuMZ[_0x12df15(0x2f6)][_0x12df15(0x3ad)][_0x12df15(0x3bb)],_0xa99834=_0x10f7f6['Text'];if(_0xa99834==='')return;const _0x227730=ImageManager[_0x12df15(0x226)],_0x3d0de9=ImageManager['iconHeight'];this[_0x12df15(0x311)][_0x12df15(0x1f6)]=_0x10f7f6[_0x12df15(0x2c7)]||$gameSystem[_0x12df15(0x39b)](),this[_0x12df15(0x311)]['textColor']=this[_0x12df15(0x2eb)](),this[_0x12df15(0x311)][_0x12df15(0x182)]=_0x10f7f6[_0x12df15(0x3d6)],this[_0x12df15(0x311)][_0x12df15(0x28e)](_0xa99834,0x0,_0x3d0de9/0x2,_0x227730,_0x3d0de9/0x2,_0x12df15(0x2e8));},Sprite_NewLabel['prototype']['getTextColor']=function(){const _0x497c60=_0x1149b0,_0x290a1b=VisuMZ['ItemsEquipsCore'][_0x497c60(0x3ad)][_0x497c60(0x3bb)][_0x497c60(0x184)];return _0x290a1b[_0x497c60(0x1f4)](/#(.*)/i)?'#'+String(RegExp['$1']):ColorManager[_0x497c60(0x24f)](_0x290a1b);},Window_Base[_0x1149b0(0x491)]['drawItemName']=function(_0x42df82,_0xa441c,_0x4b5ae3,_0x3a914d){const _0x1144e1=_0x1149b0;if(_0x42df82){const _0x1af85d=_0x4b5ae3+(this['lineHeight']()-ImageManager[_0x1144e1(0x38c)])/0x2,_0x31a6b9=ImageManager[_0x1144e1(0x226)]+0x4,_0x47e52b=Math[_0x1144e1(0x54c)](0x0,_0x3a914d-_0x31a6b9);this['changeTextColor'](ColorManager[_0x1144e1(0x3b6)](_0x42df82)),this[_0x1144e1(0x18b)](_0x42df82['iconIndex'],_0xa441c,_0x1af85d),this[_0x1144e1(0x28e)](_0x42df82[_0x1144e1(0x20b)],_0xa441c+_0x31a6b9,_0x4b5ae3,_0x47e52b),this['resetTextColor']();}},Window_Base[_0x1149b0(0x491)][_0x1149b0(0x28b)]=function(_0x5dfa21,_0x4c68ae,_0x264511,_0x495bc6){const _0x5885ce=_0x1149b0;if(this[_0x5885ce(0x550)](_0x5dfa21)){this['resetFontSettings']();const _0xd288cc=VisuMZ[_0x5885ce(0x2f6)]['Settings'][_0x5885ce(0x4d0)],_0x458326=_0xd288cc[_0x5885ce(0x548)],_0x5c5d64=_0x458326['format']($gameParty[_0x5885ce(0x1b2)](_0x5dfa21));this['contents'][_0x5885ce(0x182)]=_0xd288cc[_0x5885ce(0x260)],this[_0x5885ce(0x28e)](_0x5c5d64,_0x4c68ae,_0x264511,_0x495bc6,_0x5885ce(0x21c)),this[_0x5885ce(0x289)]();}},Window_Base['prototype'][_0x1149b0(0x550)]=function(_0x4742ac){const _0x1c05de=_0x1149b0;if(DataManager[_0x1c05de(0x35c)](_0x4742ac))return $dataSystem[_0x1c05de(0x26d)];return!![];},Window_Base[_0x1149b0(0x491)][_0x1149b0(0x43e)]=function(_0x31b81c,_0x167943,_0x2c55c3,_0x2331d3,_0x3edd40){const _0x365d9a=_0x1149b0;_0x3edd40=Math[_0x365d9a(0x54c)](_0x3edd40||0x1,0x1);while(_0x3edd40--){_0x2331d3=_0x2331d3||this[_0x365d9a(0x1b8)](),this[_0x365d9a(0x23d)][_0x365d9a(0x514)]=0xa0;const _0x3cd728=ColorManager[_0x365d9a(0x4f0)]();this[_0x365d9a(0x23d)][_0x365d9a(0x27f)](_0x31b81c+0x1,_0x167943+0x1,_0x2c55c3-0x2,_0x2331d3-0x2,_0x3cd728),this[_0x365d9a(0x23d)][_0x365d9a(0x514)]=0xff;}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x330)]=Window_Selectable['prototype'][_0x1149b0(0x1af)],Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x1af)]=function(_0x52ce79){const _0x220615=_0x1149b0;this['initNewLabelSprites'](),VisuMZ[_0x220615(0x2f6)][_0x220615(0x330)][_0x220615(0x50b)](this,_0x52ce79);},Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x42d)]=function(){const _0x51e1da=_0x1149b0;this[_0x51e1da(0x195)]={},this[_0x51e1da(0x31d)]=0xff,this[_0x51e1da(0x1f1)]=VisuMZ[_0x51e1da(0x2f6)]['Settings']['New'][_0x51e1da(0x262)],this[_0x51e1da(0x304)]=VisuMZ[_0x51e1da(0x2f6)][_0x51e1da(0x3ad)][_0x51e1da(0x3bb)][_0x51e1da(0x4fc)];},Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x40d)]=function(){return![];},VisuMZ[_0x1149b0(0x2f6)]['Window_Selectable_setHelpWindowItem']=Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x4da)],Window_Selectable['prototype'][_0x1149b0(0x4da)]=function(_0xdabcd2){const _0x31c7c8=_0x1149b0;VisuMZ[_0x31c7c8(0x2f6)][_0x31c7c8(0x40c)][_0x31c7c8(0x50b)](this,_0xdabcd2);if(this[_0x31c7c8(0x40d)]())this[_0x31c7c8(0x43f)](_0xdabcd2);},Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x43f)]=function(_0x316847){const _0x3d7e5d=_0x1149b0;if(!_0x316847)return;$gameParty['clearNewItem'](_0x316847);let _0x180f0e='';if(DataManager[_0x3d7e5d(0x54b)](_0x316847))_0x180f0e='item-%1'[_0x3d7e5d(0x2c2)](_0x316847['id']);else{if(DataManager[_0x3d7e5d(0x3b9)](_0x316847))_0x180f0e=_0x3d7e5d(0x286)[_0x3d7e5d(0x2c2)](_0x316847['id']);else{if(DataManager[_0x3d7e5d(0x23f)](_0x316847))_0x180f0e=_0x3d7e5d(0x466)[_0x3d7e5d(0x2c2)](_0x316847['id']);else return;}}const _0x15de82=this[_0x3d7e5d(0x195)][_0x180f0e];if(_0x15de82)_0x15de82[_0x3d7e5d(0x508)]();},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1e2)]=Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x518)],Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x518)]=function(){const _0x42d18d=_0x1149b0;this[_0x42d18d(0x334)](),VisuMZ['ItemsEquipsCore']['Window_Selectable_refresh'][_0x42d18d(0x50b)](this);},Window_Selectable['prototype'][_0x1149b0(0x334)]=function(){const _0xb39cf6=_0x1149b0;for(const _0x545cb7 of Object[_0xb39cf6(0x444)](this[_0xb39cf6(0x195)])){_0x545cb7[_0xb39cf6(0x508)]();}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x540)]=Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x252)],Window_Selectable['prototype'][_0x1149b0(0x252)]=function(){const _0x308f79=_0x1149b0;this[_0x308f79(0x307)](),VisuMZ['ItemsEquipsCore'][_0x308f79(0x540)][_0x308f79(0x50b)](this);},Window_Selectable['prototype']['updateNewLabelOpacity']=function(){const _0x4058a0=_0x1149b0;if(!this['isShowNew']())return;const _0x2815bc=this[_0x4058a0(0x304)];this[_0x4058a0(0x31d)]+=this[_0x4058a0(0x1f1)];(this['_newLabelOpacity']>=_0x2815bc||this[_0x4058a0(0x31d)]<=0x0)&&(this[_0x4058a0(0x1f1)]*=-0x1);this[_0x4058a0(0x31d)]=this[_0x4058a0(0x31d)][_0x4058a0(0x1d0)](0x0,_0x2815bc);for(const _0x1dca2b of Object['values'](this['_newLabelSprites'])){_0x1dca2b[_0x4058a0(0x52f)]=this[_0x4058a0(0x31d)];}},Window_Selectable[_0x1149b0(0x491)]['createNewLabelSprite']=function(_0x15ba8d){const _0x1914f2=_0x1149b0,_0x49beb5=this[_0x1914f2(0x195)];if(_0x49beb5[_0x15ba8d])return _0x49beb5[_0x15ba8d];else{const _0x4694c6=new Sprite_NewLabel();return _0x49beb5[_0x15ba8d]=_0x4694c6,this[_0x1914f2(0x2ae)](_0x4694c6),_0x4694c6;}},Window_Selectable[_0x1149b0(0x491)][_0x1149b0(0x2c1)]=function(_0x22f711,_0x410b63,_0xe722bc){const _0x31dcf9=_0x1149b0;let _0x55b665='';if(DataManager[_0x31dcf9(0x54b)](_0x22f711))_0x55b665=_0x31dcf9(0x2e3)['format'](_0x22f711['id']);else{if(DataManager[_0x31dcf9(0x3b9)](_0x22f711))_0x55b665='weapon-%1'[_0x31dcf9(0x2c2)](_0x22f711['id']);else{if(DataManager[_0x31dcf9(0x23f)](_0x22f711))_0x55b665=_0x31dcf9(0x466)['format'](_0x22f711['id']);else return;}}const _0x46ae51=this[_0x31dcf9(0x1df)](_0x55b665);_0x46ae51[_0x31dcf9(0x183)](_0x410b63,_0xe722bc),_0x46ae51['show'](),_0x46ae51['opacity']=this[_0x31dcf9(0x31d)];},Window_ItemCategory[_0x1149b0(0x3e6)]=VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3ad)][_0x1149b0(0x352)][_0x1149b0(0x4ce)],Window_ItemCategory[_0x1149b0(0x1ca)]=[_0x1149b0(0x3ab),_0x1149b0(0x55f),_0x1149b0(0x329),_0x1149b0(0x1e9),_0x1149b0(0x4ba),'BattleUsable',_0x1149b0(0x463),'NeverUsable'],VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3f4)]=Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x1af)],Window_ItemCategory['prototype'][_0x1149b0(0x1af)]=function(_0x359574){const _0x248910=_0x1149b0;VisuMZ[_0x248910(0x2f6)][_0x248910(0x3f4)][_0x248910(0x50b)](this,_0x359574),this[_0x248910(0x3a5)](_0x359574);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x3a5)]=function(_0x11cc62){const _0x3c5c68=_0x1149b0,_0xb0750e=new Rectangle(0x0,0x0,_0x11cc62['width'],_0x11cc62[_0x3c5c68(0x1d3)]);this['_categoryNameWindow']=new Window_Base(_0xb0750e),this[_0x3c5c68(0x360)]['opacity']=0x0,this[_0x3c5c68(0x350)](this[_0x3c5c68(0x360)]),this[_0x3c5c68(0x31a)]();},Window_ItemCategory['prototype'][_0x1149b0(0x45f)]=function(){const _0x4dfb77=_0x1149b0;return Imported[_0x4dfb77(0x1e5)]&&Window_HorzCommand[_0x4dfb77(0x491)][_0x4dfb77(0x45f)][_0x4dfb77(0x50b)](this);},Window_ItemCategory[_0x1149b0(0x491)]['processCursorHomeEndTrigger']=function(){},Window_ItemCategory['prototype']['playOkSound']=function(){const _0x3ab85e=_0x1149b0;if(!this[_0x3ab85e(0x45f)]())Window_HorzCommand['prototype']['playOkSound']['call'](this);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x47c)]=function(){const _0x1b34eb=_0x1149b0;return this[_0x1b34eb(0x47d)]?this[_0x1b34eb(0x53f)]():0x4;},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x252)]=function(){const _0x2d1798=_0x1149b0;Window_HorzCommand['prototype'][_0x2d1798(0x252)][_0x2d1798(0x50b)](this),this[_0x2d1798(0x417)]&&this[_0x2d1798(0x417)][_0x2d1798(0x197)](this[_0x2d1798(0x212)]());},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x2f0)]=function(){const _0x1a559a=_0x1149b0;if(this[_0x1a559a(0x342)]()){const _0x2a1a99=this[_0x1a559a(0x42e)]();if(this[_0x1a559a(0x417)]&&this[_0x1a559a(0x417)][_0x1a559a(0x47c)]()<=0x1)Input[_0x1a559a(0x365)](_0x1a559a(0x21c))&&this[_0x1a559a(0x50d)](Input['isTriggered'](_0x1a559a(0x21c))),Input[_0x1a559a(0x365)](_0x1a559a(0x423))&&this[_0x1a559a(0x1a8)](Input[_0x1a559a(0x2d1)](_0x1a559a(0x423)));else this['_itemWindow']&&this[_0x1a559a(0x417)][_0x1a559a(0x47c)]()>0x1&&(Input[_0x1a559a(0x365)]('pagedown')&&!Input[_0x1a559a(0x3f7)](_0x1a559a(0x30e))&&this[_0x1a559a(0x50d)](Input[_0x1a559a(0x2d1)]('pagedown')),Input[_0x1a559a(0x365)]('pageup')&&!Input[_0x1a559a(0x3f7)]('shift')&&this[_0x1a559a(0x1a8)](Input[_0x1a559a(0x2d1)]('pageup')));this['index']()!==_0x2a1a99&&this[_0x1a559a(0x4d5)]();}},Window_ItemCategory['prototype']['processHandling']=function(){const _0x4cb83c=_0x1149b0;if(this[_0x4cb83c(0x45f)]())return;Window_HorzCommand['prototype'][_0x4cb83c(0x25e)][_0x4cb83c(0x50b)](this);},Window_ItemCategory[_0x1149b0(0x491)]['isHoverEnabled']=function(){const _0x48ec07=_0x1149b0;return this[_0x48ec07(0x45f)]()?![]:Window_HorzCommand[_0x48ec07(0x491)][_0x48ec07(0x4e3)][_0x48ec07(0x50b)](this);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x28c)]=function(){const _0x350426=_0x1149b0;if(this[_0x350426(0x3a0)]()){TouchInput[_0x350426(0x2d1)]()&&this[_0x350426(0x214)](!![]);if(TouchInput[_0x350426(0x495)]())this[_0x350426(0x21b)]();else TouchInput[_0x350426(0x203)]()&&this['onTouchCancel']();}},Window_ItemCategory['prototype'][_0x1149b0(0x214)]=function(_0x476745){const _0x4ce384=_0x1149b0;this['isUseModernControls']()?this['onTouchSelectModern'](!![]):Window_HorzCommand[_0x4ce384(0x491)]['onTouchSelect'][_0x4ce384(0x50b)](this,_0x476745);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x160)]=function(_0x5ef25c){const _0x20fb0d=_0x1149b0;this[_0x20fb0d(0x23b)]=![];if(this[_0x20fb0d(0x342)]()){const _0x233612=this[_0x20fb0d(0x42e)](),_0x574175=this[_0x20fb0d(0x493)]();_0x574175>=0x0&&_0x574175!==this[_0x20fb0d(0x42e)]()&&this[_0x20fb0d(0x147)](_0x574175),_0x5ef25c&&this[_0x20fb0d(0x42e)]()!==_0x233612&&this[_0x20fb0d(0x4d5)]();}},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x362)]=function(){const _0x590a94=_0x1149b0;this['addItemCategories'](),this[_0x590a94(0x147)](this[_0x590a94(0x42e)]());},Window_ItemCategory[_0x1149b0(0x491)]['addItemCategories']=function(){for(const _0x1f5b39 of Window_ItemCategory['categoryList']){this['addItemCategory'](_0x1f5b39);}},Window_ItemCategory['prototype'][_0x1149b0(0x44d)]=function(_0x3b07b0){const _0x1a4b3b=_0x1149b0,_0xaa2543=_0x3b07b0['Type'],_0x31e91f=_0x3b07b0[_0x1a4b3b(0x501)],_0x593d88=_0x3b07b0[_0x1a4b3b(0x490)]||0x0;if(_0x593d88>0x0&&!$gameSwitches[_0x1a4b3b(0x4b1)](_0x593d88))return;let _0x5f0bf9='',_0x3fe2e7='category',_0x45b855=_0xaa2543;if(_0xaa2543[_0x1a4b3b(0x1f4)](/Category:(.*)/i))_0x5f0bf9=String(RegExp['$1'])[_0x1a4b3b(0x36f)]();else{if(Window_ItemCategory[_0x1a4b3b(0x1ca)][_0x1a4b3b(0x46c)](_0xaa2543))_0x5f0bf9=VisuMZ[_0x1a4b3b(0x2f6)][_0x1a4b3b(0x3ad)][_0x1a4b3b(0x352)][_0xaa2543];else{if([_0x1a4b3b(0x1dc),_0x1a4b3b(0x4dc)][_0x1a4b3b(0x46c)](_0xaa2543))_0x5f0bf9=TextManager[_0x1a4b3b(0x378)];else{if(_0xaa2543===_0x1a4b3b(0x4b2))_0x5f0bf9=TextManager[_0x1a4b3b(0x1ed)];else{if(_0xaa2543===_0x1a4b3b(0x261))_0x5f0bf9=TextManager['weapon'];else{if(_0xaa2543===_0x1a4b3b(0x434))_0x5f0bf9=TextManager['armor'];else{if(_0xaa2543['match'](/WTYPE:(\d+)/i))_0x5f0bf9=$dataSystem[_0x1a4b3b(0x4d1)][Number(RegExp['$1'])]||'';else{if(_0xaa2543['match'](/ATYPE:(\d+)/i))_0x5f0bf9=$dataSystem['armorTypes'][Number(RegExp['$1'])]||'';else _0xaa2543[_0x1a4b3b(0x1f4)](/ETYPE:(\d+)/i)&&(_0x5f0bf9=$dataSystem['equipTypes'][Number(RegExp['$1'])]||'');}}}}}}}if(TextManager['parseLocalizedText']&&TextManager[_0x1a4b3b(0x44e)]()){const _0x595b33=_0x5f0bf9[_0x1a4b3b(0x536)]()[_0x1a4b3b(0x36f)]();if($dataLocalization[_0x595b33]&&_0x595b33[_0x1a4b3b(0x16d)]>0x0){const _0x384c2f=ConfigManager[_0x1a4b3b(0x50f)]||'English';_0x5f0bf9=$dataLocalization[_0x595b33][_0x384c2f]||_0x1a4b3b(0x318);}}_0x31e91f>0x0&&this[_0x1a4b3b(0x161)]()!==_0x1a4b3b(0x4b8)&&(_0x5f0bf9=_0x1a4b3b(0x31b)[_0x1a4b3b(0x2c2)](_0x31e91f,_0x5f0bf9)),this[_0x1a4b3b(0x231)](_0x5f0bf9,_0x3fe2e7,!![],_0x45b855);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x3c5)]=function(){const _0x22a3bf=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x22a3bf(0x3ad)]['Categories'][_0x22a3bf(0x1a0)];},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x359)]=function(_0x35a2a8){const _0x3336da=_0x1149b0,_0x2ceeeb=this[_0x3336da(0x205)](_0x35a2a8);if(_0x2ceeeb==='iconText')this[_0x3336da(0x404)](_0x35a2a8);else _0x2ceeeb===_0x3336da(0x442)?this[_0x3336da(0x39d)](_0x35a2a8):Window_HorzCommand[_0x3336da(0x491)]['drawItem'][_0x3336da(0x50b)](this,_0x35a2a8);},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x161)]=function(){const _0x2f02ea=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x2f02ea(0x3ad)][_0x2f02ea(0x352)][_0x2f02ea(0x4fe)];},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x205)]=function(_0x31804d){const _0x21d068=_0x1149b0;if(_0x31804d<0x0)return _0x21d068(0x4b8);const _0x33791f=this[_0x21d068(0x161)]();if(_0x33791f!==_0x21d068(0x45d))return _0x33791f;else{const _0x65d67b=this[_0x21d068(0x3b2)](_0x31804d);if(_0x65d67b[_0x21d068(0x1f4)](/\\I\[(\d+)\]/i)){const _0x8562b5=this['itemLineRect'](_0x31804d),_0x1ae5e2=this[_0x21d068(0x15c)](_0x65d67b)['width'];return _0x1ae5e2<=_0x8562b5[_0x21d068(0x241)]?_0x21d068(0x1c8):'icon';}else return _0x21d068(0x4b8);}},Window_ItemCategory['prototype'][_0x1149b0(0x404)]=function(_0x1509a0){const _0x1313f1=_0x1149b0,_0x36c43e=this[_0x1313f1(0x465)](_0x1509a0),_0x78fa4a=this['commandName'](_0x1509a0),_0x391d19=this[_0x1313f1(0x15c)](_0x78fa4a)['width'];this['changePaintOpacity'](this[_0x1313f1(0x561)](_0x1509a0));const _0x19c6f3=this[_0x1313f1(0x3c5)]();if(_0x19c6f3===_0x1313f1(0x21c))this[_0x1313f1(0x2b8)](_0x78fa4a,_0x36c43e['x']+_0x36c43e[_0x1313f1(0x241)]-_0x391d19,_0x36c43e['y'],_0x391d19);else{if(_0x19c6f3==='center'){const _0x2f8ea3=_0x36c43e['x']+Math[_0x1313f1(0x271)]((_0x36c43e[_0x1313f1(0x241)]-_0x391d19)/0x2);this[_0x1313f1(0x2b8)](_0x78fa4a,_0x2f8ea3,_0x36c43e['y'],_0x391d19);}else this[_0x1313f1(0x2b8)](_0x78fa4a,_0x36c43e['x'],_0x36c43e['y'],_0x391d19);}},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x39d)]=function(_0x15682d){const _0x23c288=_0x1149b0,_0x5dc18a=this[_0x23c288(0x3b2)](_0x15682d);if(_0x5dc18a[_0x23c288(0x1f4)](/\\I\[(\d+)\]/i)){const _0xc9f1da=Number(RegExp['$1'])||0x0,_0x1b26ee=this['itemLineRect'](_0x15682d),_0x352613=_0x1b26ee['x']+Math[_0x23c288(0x271)]((_0x1b26ee[_0x23c288(0x241)]-ImageManager[_0x23c288(0x226)])/0x2),_0xf9e02=_0x1b26ee['y']+(_0x1b26ee[_0x23c288(0x1d3)]-ImageManager[_0x23c288(0x38c)])/0x2;this[_0x23c288(0x18b)](_0xc9f1da,_0x352613,_0xf9e02);}},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x255)]=Window_ItemCategory[_0x1149b0(0x491)]['setItemWindow'],Window_ItemCategory['prototype'][_0x1149b0(0x165)]=function(_0x193114){const _0x4e1132=_0x1149b0;VisuMZ[_0x4e1132(0x2f6)]['Window_ItemCategory_setItemWindow'][_0x4e1132(0x50b)](this,_0x193114),_0x193114[_0x4e1132(0x476)]=this;},Window_ItemCategory['prototype'][_0x1149b0(0x440)]=function(){const _0x13b777=_0x1149b0;Window_HorzCommand[_0x13b777(0x491)][_0x13b777(0x440)]['call'](this);if(this['_categoryNameWindow'])this[_0x13b777(0x31a)]();},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x31a)]=function(){const _0x2534a2=_0x1149b0,_0x3d65b5=this[_0x2534a2(0x360)];_0x3d65b5[_0x2534a2(0x482)][_0x2534a2(0x375)]();const _0x3582f2=this[_0x2534a2(0x205)](this['index']());if(_0x3582f2==='icon'){const _0x35c072=this[_0x2534a2(0x465)](this[_0x2534a2(0x42e)]());let _0x3baa09=this[_0x2534a2(0x3b2)](this[_0x2534a2(0x42e)]());_0x3baa09=_0x3baa09[_0x2534a2(0x1da)](/\\I\[(\d+)\]/gi,''),_0x3d65b5[_0x2534a2(0x289)](),this['categoryNameWindowDrawBackground'](_0x3baa09,_0x35c072),this[_0x2534a2(0x235)](_0x3baa09,_0x35c072),this[_0x2534a2(0x560)](_0x3baa09,_0x35c072);}},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x36c)]=function(_0x22860c,_0x34be78){},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x235)]=function(_0x5c1f37,_0x509a01){const _0x38bc53=_0x1149b0,_0x559382=this['_categoryNameWindow'];_0x559382[_0x38bc53(0x28e)](_0x5c1f37,0x0,_0x509a01['y'],_0x559382[_0x38bc53(0x18a)],_0x38bc53(0x2e8));},Window_ItemCategory[_0x1149b0(0x491)][_0x1149b0(0x560)]=function(_0x14c084,_0x18185c){const _0x3cc2b5=_0x1149b0,_0x2fdd87=this[_0x3cc2b5(0x360)],_0x57ea3a=$gameSystem['windowPadding'](),_0x4d7551=_0x18185c['x']+Math[_0x3cc2b5(0x271)](_0x18185c[_0x3cc2b5(0x241)]/0x2)+_0x57ea3a;_0x2fdd87['x']=_0x2fdd87[_0x3cc2b5(0x241)]/-0x2+_0x4d7551,_0x2fdd87['y']=Math[_0x3cc2b5(0x271)](_0x18185c[_0x3cc2b5(0x1d3)]/0x2);},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x2f0)]=function(){const _0x2dad3b=_0x1149b0;if(this[_0x2dad3b(0x342)]()){const _0x2dcff6=this['index']();if(this['maxCols']()<=0x1)!this[_0x2dad3b(0x216)]('pagedown')&&Input[_0x2dad3b(0x2d1)]('pagedown')&&this[_0x2dad3b(0x451)](),!this['isHandled'](_0x2dad3b(0x2e2))&&Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x2e2))&&this['cursorPageup']();else this['maxCols']()>0x1&&(Input['isRepeated'](_0x2dad3b(0x21c))&&this[_0x2dad3b(0x50d)](Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x21c))),Input[_0x2dad3b(0x365)](_0x2dad3b(0x423))&&this[_0x2dad3b(0x1a8)](Input['isTriggered']('left')),this['limitedPageUpDownSceneCheck']()?(Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x47e))&&Input[_0x2dad3b(0x3f7)]('shift')&&this[_0x2dad3b(0x451)](),Input['isTriggered'](_0x2dad3b(0x2e2))&&Input[_0x2dad3b(0x3f7)](_0x2dad3b(0x30e))&&this['cursorPageup']()):(Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x47e))&&this[_0x2dad3b(0x451)](),Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x2e2))&&this['cursorPageup']()));Input[_0x2dad3b(0x365)](_0x2dad3b(0x292))&&(Input[_0x2dad3b(0x3f7)](_0x2dad3b(0x30e))&&this[_0x2dad3b(0x538)]()?this[_0x2dad3b(0x451)]():this[_0x2dad3b(0x3ee)](Input[_0x2dad3b(0x2d1)](_0x2dad3b(0x292)))),Input[_0x2dad3b(0x365)]('up')&&(Input[_0x2dad3b(0x3f7)](_0x2dad3b(0x30e))&&this['allowShiftScrolling']()?this[_0x2dad3b(0x43b)]():this[_0x2dad3b(0x1bb)](Input['isTriggered']('up'))),Imported[_0x2dad3b(0x1e5)]&&this['processCursorHomeEndTrigger'](),this['index']()!==_0x2dcff6&&this[_0x2dad3b(0x4d5)]();}},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x497)]=function(){const _0x3f2743=_0x1149b0,_0xa8c560=SceneManager[_0x3f2743(0x4ec)],_0x425e25=[Scene_Item,Scene_Shop];return _0x425e25[_0x3f2743(0x46c)](_0xa8c560[_0x3f2743(0x1cf)]);},Window_ItemList[_0x1149b0(0x491)]['activate']=function(){const _0x23c15f=_0x1149b0;Window_Selectable[_0x23c15f(0x491)][_0x23c15f(0x4bb)]['call'](this),this[_0x23c15f(0x476)]&&this[_0x23c15f(0x476)][_0x23c15f(0x45f)]()&&this[_0x23c15f(0x476)][_0x23c15f(0x4bb)]();},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x174)]=function(){const _0x4d3d1b=_0x1149b0;Window_Selectable[_0x4d3d1b(0x491)][_0x4d3d1b(0x174)][_0x4d3d1b(0x50b)](this),this[_0x4d3d1b(0x476)]&&this[_0x4d3d1b(0x476)][_0x4d3d1b(0x45f)]()&&this[_0x4d3d1b(0x476)]['deactivate']();},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x197)]=function(_0x4372d9){const _0x344673=_0x1149b0;this[_0x344673(0x382)]!==_0x4372d9&&(this[_0x344673(0x382)]=_0x4372d9,this[_0x344673(0x518)](),this[_0x344673(0x476)]&&this[_0x344673(0x476)]['isUseModernControls']()?this[_0x344673(0x529)](0x0):this[_0x344673(0x14e)](0x0,0x0));},VisuMZ['ItemsEquipsCore']['Window_ItemList_maxCols']=Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x47c)],Window_ItemList[_0x1149b0(0x491)]['maxCols']=function(){const _0x2655fc=_0x1149b0;if(SceneManager[_0x2655fc(0x4ec)][_0x2655fc(0x1cf)]===Scene_Battle)return VisuMZ[_0x2655fc(0x2f6)]['Window_ItemList_maxCols'][_0x2655fc(0x50b)](this);else return SceneManager['_scene'][_0x2655fc(0x1cf)]===Scene_Map?VisuMZ[_0x2655fc(0x2f6)][_0x2655fc(0x3d8)][_0x2655fc(0x50b)](this):VisuMZ[_0x2655fc(0x2f6)][_0x2655fc(0x3ad)][_0x2655fc(0x4d0)][_0x2655fc(0x4de)];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x450)]=Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x4c9)],Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x4c9)]=function(){const _0x4cea15=_0x1149b0;return this[_0x4cea15(0x47c)]()<=0x1?Window_Selectable[_0x4cea15(0x491)][_0x4cea15(0x4c9)][_0x4cea15(0x50b)](this):VisuMZ['ItemsEquipsCore'][_0x4cea15(0x450)][_0x4cea15(0x50b)](this);},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x46c)]=function(_0x42162c){const _0x468261=_0x1149b0;switch(this[_0x468261(0x382)]){case _0x468261(0x1dc):return DataManager['isItem'](_0x42162c);case _0x468261(0x4dc):return DataManager[_0x468261(0x54b)](_0x42162c)&&_0x42162c[_0x468261(0x1cc)]===0x1;case _0x468261(0x4b2):return DataManager['isItem'](_0x42162c)&&_0x42162c[_0x468261(0x1cc)]===0x2;case'HiddenItemA':return DataManager[_0x468261(0x54b)](_0x42162c)&&_0x42162c['itypeId']===0x3;case _0x468261(0x55f):return DataManager[_0x468261(0x54b)](_0x42162c)&&_0x42162c[_0x468261(0x1cc)]===0x4;case'Consumable':return DataManager[_0x468261(0x54b)](_0x42162c)&&_0x42162c[_0x468261(0x259)];case _0x468261(0x329):return DataManager['isItem'](_0x42162c)&&!_0x42162c[_0x468261(0x259)];case _0x468261(0x4ba):return DataManager[_0x468261(0x54b)](_0x42162c)&&[0x0][_0x468261(0x46c)](_0x42162c[_0x468261(0x48b)]);case _0x468261(0x386):return DataManager['isItem'](_0x42162c)&&[0x0,0x1][_0x468261(0x46c)](_0x42162c['occasion']);case _0x468261(0x463):return DataManager[_0x468261(0x54b)](_0x42162c)&&[0x0,0x2][_0x468261(0x46c)](_0x42162c['occasion']);case'NeverUsable':return DataManager['isItem'](_0x42162c)&&[0x3][_0x468261(0x46c)](_0x42162c[_0x468261(0x48b)]);case _0x468261(0x261):return DataManager[_0x468261(0x3b9)](_0x42162c);case _0x468261(0x434):return DataManager[_0x468261(0x23f)](_0x42162c);default:if(this['_category'][_0x468261(0x1f4)](/WTYPE:(\d+)/i))return DataManager[_0x468261(0x3b9)](_0x42162c)&&_0x42162c[_0x468261(0x326)]===Number(RegExp['$1']);else{if(this['_category'][_0x468261(0x1f4)](/WTYPE:(.*)/i)){const _0x37458d=$dataSystem[_0x468261(0x4d1)][_0x468261(0x23e)](String(RegExp['$1'])[_0x468261(0x36f)]());return DataManager[_0x468261(0x3b9)](_0x42162c)&&_0x42162c[_0x468261(0x326)]===_0x37458d;}else{if(this['_category'][_0x468261(0x1f4)](/ATYPE:(\d+)/i))return DataManager[_0x468261(0x23f)](_0x42162c)&&_0x42162c[_0x468261(0x4e8)]===Number(RegExp['$1']);else{if(this[_0x468261(0x382)][_0x468261(0x1f4)](/ATYPE:(.*)/i)){const _0x5c29a2=$dataSystem['armorTypes']['indexOf'](String(RegExp['$1'])[_0x468261(0x36f)]());return DataManager['isArmor'](_0x42162c)&&_0x42162c[_0x468261(0x4e8)]===_0x5c29a2;}else{if(this[_0x468261(0x382)][_0x468261(0x1f4)](/ETYPE:(\d+)/i))return!!_0x42162c&&_0x42162c['etypeId']===Number(RegExp['$1']);else{if(this[_0x468261(0x382)][_0x468261(0x1f4)](/ETYPE:(.*)/i)){const _0x19f868=$dataSystem['equipTypes'][_0x468261(0x23e)](String(RegExp['$1'])[_0x468261(0x36f)]());return DataManager['isArmor'](_0x42162c)&&_0x42162c[_0x468261(0x55b)]===_0x19f868;}else{if(this['_category'][_0x468261(0x1f4)](/Category:(.*)/i))return!!_0x42162c&&_0x42162c['categories'][_0x468261(0x46c)](String(RegExp['$1'])['toUpperCase']()[_0x468261(0x36f)]());}}}}}}}return![];},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x20f)]=Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x502)],Window_ItemList['prototype']['makeItemList']=function(){const _0x1d3d3e=_0x1149b0;VisuMZ['ItemsEquipsCore']['Window_ItemList_makeItemList'][_0x1d3d3e(0x50b)](this);if(this[_0x1d3d3e(0x3f3)]())this[_0x1d3d3e(0x49e)]();},Window_ItemList[_0x1149b0(0x491)]['canSortListItemScene']=function(){const _0x16dd52=_0x1149b0,_0x2fba2e=[_0x16dd52(0x425),_0x16dd52(0x426),'Scene_Equip',_0x16dd52(0x2b6)],_0x3bf644=SceneManager['_scene'];return _0x2fba2e[_0x16dd52(0x46c)](_0x3bf644[_0x16dd52(0x1cf)]['name']);},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x49e)]=function(){const _0x2ef834=_0x1149b0,_0x58e873=Window_ItemCategory['categoryList'],_0x450fe7=_0x58e873['find'](_0x3fd2d5=>_0x3fd2d5[_0x2ef834(0x3ac)]===this['_category']);if(!_0x450fe7){VisuMZ['ItemsEquipsCore'][_0x2ef834(0x15f)](this[_0x2ef834(0x34f)]);return;}const _0x434ff5=((_0x450fe7[_0x2ef834(0x1db)]??'ID')||'ID')[_0x2ef834(0x4f4)]()[_0x2ef834(0x36f)]();_0x434ff5===_0x2ef834(0x398)?this[_0x2ef834(0x34f)][_0x2ef834(0x3f5)]((_0x2f5d29,_0x3b249e)=>{const _0x954174=_0x2ef834;if(!!_0x2f5d29&&!!_0x3b249e)return _0x2f5d29[_0x954174(0x20b)][_0x954174(0x34d)](_0x3b249e[_0x954174(0x20b)]);return 0x0;}):VisuMZ[_0x2ef834(0x2f6)]['SortByIDandPriority'](this[_0x2ef834(0x34f)]);},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x15f)]=function(_0x389f82){const _0x313a9b=_0x1149b0;return _0x389f82[_0x313a9b(0x3f5)]((_0x1db0e1,_0x5dc674)=>{const _0xb8e8d2=_0x313a9b;if(!!_0x1db0e1&&!!_0x5dc674){if(_0x1db0e1[_0xb8e8d2(0x1de)]===undefined)VisuMZ['ItemsEquipsCore']['Parse_Notetags_Sorting'](_0x1db0e1);if(_0x5dc674['sortPriority']===undefined)VisuMZ[_0xb8e8d2(0x2f6)][_0xb8e8d2(0x25a)](_0x5dc674);const _0x554f46=_0x1db0e1[_0xb8e8d2(0x1de)],_0x5ea813=_0x5dc674[_0xb8e8d2(0x1de)];if(_0x554f46!==_0x5ea813)return _0x5ea813-_0x554f46;return _0x1db0e1['id']-_0x5dc674['id'];}return 0x0;}),_0x389f82;},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x40d)]=function(){return!![];},VisuMZ[_0x1149b0(0x2f6)]['Window_ItemList_drawItem']=Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x359)],Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x359)]=function(_0xafcc68){const _0x1a10b8=_0x1149b0;VisuMZ[_0x1a10b8(0x2f6)][_0x1a10b8(0x1b7)][_0x1a10b8(0x50b)](this,_0xafcc68),this['placeItemNewLabel'](_0xafcc68);},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x28b)]=function(_0x54f3cf,_0x5a40ec,_0x3fc7fc,_0x2fe7cc){const _0x69bdcc=_0x1149b0;Window_Selectable['prototype']['drawItemNumber'][_0x69bdcc(0x50b)](this,_0x54f3cf,_0x5a40ec,_0x3fc7fc,_0x2fe7cc);},Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x4aa)]=function(_0x58dd84){const _0x3dd17c=_0x1149b0,_0x3025ee=this[_0x3dd17c(0x47b)](_0x58dd84);if(!_0x3025ee||!this['isShowNew']())return;if(!$gameParty['isNewItem'](_0x3025ee))return;const _0x2869c3=this[_0x3dd17c(0x465)](_0x58dd84),_0x45c1c1=_0x2869c3['x'],_0x2f0512=_0x2869c3['y']+(this[_0x3dd17c(0x1b8)]()-ImageManager['iconHeight'])/0x2,_0x14fd35=VisuMZ[_0x3dd17c(0x2f6)]['Settings'][_0x3dd17c(0x3bb)][_0x3dd17c(0x1eb)],_0x5a9b0e=VisuMZ['ItemsEquipsCore'][_0x3dd17c(0x3ad)][_0x3dd17c(0x3bb)][_0x3dd17c(0x1b5)];this[_0x3dd17c(0x2c1)](_0x3025ee,_0x45c1c1+_0x14fd35,_0x2f0512+_0x5a9b0e);},Window_ItemList['prototype'][_0x1149b0(0x3f6)]=function(_0x262d7e){const _0x380f4f=_0x1149b0;this[_0x380f4f(0x218)]=_0x262d7e,this['callUpdateHelp']();},VisuMZ['ItemsEquipsCore']['Window_ItemList_updateHelp']=Window_ItemList[_0x1149b0(0x491)]['updateHelp'],Window_ItemList[_0x1149b0(0x491)][_0x1149b0(0x4e1)]=function(){const _0x8c0f6f=_0x1149b0;VisuMZ[_0x8c0f6f(0x2f6)]['Window_ItemList_updateHelp'][_0x8c0f6f(0x50b)](this),this[_0x8c0f6f(0x218)]&&this[_0x8c0f6f(0x218)][_0x8c0f6f(0x1cf)]===Window_ShopStatus&&this[_0x8c0f6f(0x218)]['setItem'](this[_0x8c0f6f(0x378)]());},Window_BattleItem[_0x1149b0(0x491)]['isEnabled']=function(_0x5c1a1b){const _0xbd0e7c=_0x1149b0;return BattleManager[_0xbd0e7c(0x181)]()?BattleManager[_0xbd0e7c(0x181)]()[_0xbd0e7c(0x20e)](_0x5c1a1b):Window_ItemList[_0xbd0e7c(0x491)][_0xbd0e7c(0x556)][_0xbd0e7c(0x50b)](this,_0x5c1a1b);},Window_EventItem['prototype']['isShowNew']=function(){return![];},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x1cd)]=function(){const _0x43038b=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x43038b(0x3ad)][_0x43038b(0x2fc)][_0x43038b(0x202)];},VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3d9)]=Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x518)],Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x518)]=function(){const _0x2c007c=_0x1149b0;this[_0x2c007c(0x39e)](),this[_0x2c007c(0x289)]();if(this[_0x2c007c(0x16f)])this[_0x2c007c(0x16f)]['refresh']();this[_0x2c007c(0x1cd)]()?this[_0x2c007c(0x4b4)]():VisuMZ[_0x2c007c(0x2f6)][_0x2c007c(0x3d9)][_0x2c007c(0x50b)](this);},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x4b4)]=function(){const _0xd441be=_0x1149b0;this['contents'][_0xd441be(0x375)]();if(!this[_0xd441be(0x16f)])return;if(this[_0xd441be(0x4ed)]()){const _0x551df4=ImageManager[_0xd441be(0x45e)](this[_0xd441be(0x16f)][_0xd441be(0x18e)]());_0x551df4['addLoadListener'](this['onMenuImageLoad'][_0xd441be(0x1be)](this));}else this[_0xd441be(0x4c1)]();},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x4ed)]=function(){const _0x5000c6=_0x1149b0;return Imported[_0x5000c6(0x3ba)]&&this['_actor'][_0x5000c6(0x18e)]()!==''&&VisuMZ[_0x5000c6(0x2f6)][_0x5000c6(0x3ad)][_0x5000c6(0x2fc)][_0x5000c6(0x437)];},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x453)]=function(){const _0x61e669=_0x1149b0;VisuMZ[_0x61e669(0x2f6)][_0x61e669(0x3ad)][_0x61e669(0x2fc)][_0x61e669(0x4d4)][_0x61e669(0x50b)](this),this[_0x61e669(0x3ef)]();},Window_EquipStatus[_0x1149b0(0x491)]['refreshItemsEquipsCoreNoMenuImage']=function(){const _0x31aa2d=_0x1149b0;VisuMZ[_0x31aa2d(0x2f6)][_0x31aa2d(0x3ad)][_0x31aa2d(0x2fc)]['DrawFaceJS'][_0x31aa2d(0x50b)](this),this[_0x31aa2d(0x3ef)]();},Window_EquipStatus['prototype'][_0x1149b0(0x3ef)]=function(){const _0x3e280f=_0x1149b0;this[_0x3e280f(0x289)](),VisuMZ[_0x3e280f(0x2f6)]['Settings'][_0x3e280f(0x2fc)]['DrawParamJS'][_0x3e280f(0x50b)](this);},Window_EquipStatus[_0x1149b0(0x491)]['drawItemActorMenuImage']=function(_0x97a945,_0x95dbd8,_0x57d372,_0x1ed67e,_0x5b6153){const _0x3647a0=_0x1149b0,_0x6f726a=ImageManager[_0x3647a0(0x45e)](_0x97a945['getMenuImage']()),_0x23a4b7=this['innerWidth']-_0x6f726a[_0x3647a0(0x241)];_0x95dbd8+=_0x23a4b7/0x2;if(_0x23a4b7<0x0)_0x1ed67e-=_0x23a4b7;Window_StatusBase[_0x3647a0(0x491)][_0x3647a0(0x3c8)][_0x3647a0(0x50b)](this,_0x97a945,_0x95dbd8,_0x57d372,_0x1ed67e,_0x5b6153);},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x346)]=function(){const _0x44079d=_0x1149b0;return Imported[_0x44079d(0x1e5)]?VisuMZ['CoreEngine'][_0x44079d(0x3ad)][_0x44079d(0x209)]['ExtDisplayedParams']:[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x2f2)]=function(){const _0x144da2=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x144da2(0x3ad)][_0x144da2(0x2fc)][_0x144da2(0x484)];},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x1bd)]=function(){const _0x598c0b=_0x1149b0;return Imported[_0x598c0b(0x1e5)]&&VisuMZ[_0x598c0b(0x49d)][_0x598c0b(0x3ad)][_0x598c0b(0x209)]['DrawIcons'];},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x4e0)]=function(_0x3a1a8b,_0x2bfa74,_0x53f8a2,_0x42b378){const _0x37014c=_0x1149b0,_0x109538=this[_0x37014c(0x443)]();Imported[_0x37014c(0x1e5)]?this['drawParamText'](_0x2bfa74+_0x109538,_0x53f8a2,_0x42b378,_0x3a1a8b,![]):this['drawText'](TextManager[_0x37014c(0x483)](_0x3a1a8b),_0x2bfa74+_0x109538,_0x53f8a2,_0x42b378);},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x3fd)]=function(_0x18ddf2,_0x290d11,_0x497fa4,_0x3b1cee){const _0x59017e=_0x1149b0,_0x590930=this['itemPadding']();let _0x2c71ad=0x0;Imported[_0x59017e(0x1e5)]?_0x2c71ad=this[_0x59017e(0x16f)][_0x59017e(0x3f1)](_0x18ddf2,!![]):_0x2c71ad=this[_0x59017e(0x16f)][_0x59017e(0x483)](_0x18ddf2);const _0x283b21=_0x2c71ad;this[_0x59017e(0x28e)](_0x2c71ad,_0x290d11,_0x497fa4,_0x3b1cee-_0x590930,_0x59017e(0x21c));},Window_EquipStatus[_0x1149b0(0x491)]['drawUpdatedAfterParamValue']=function(_0x5a26fa,_0x145ab8,_0x527aad,_0x8061cc){const _0x2baa7f=_0x1149b0,_0x41e78a=this[_0x2baa7f(0x443)]();let _0x3488ae=0x0,_0x1fcbbe=0x0,_0x468a10='';if(this[_0x2baa7f(0x33d)]){Imported[_0x2baa7f(0x1e5)]?(_0x3488ae=this[_0x2baa7f(0x16f)][_0x2baa7f(0x3f1)](_0x5a26fa,![]),_0x1fcbbe=this[_0x2baa7f(0x33d)][_0x2baa7f(0x3f1)](_0x5a26fa,![]),_0x468a10=this[_0x2baa7f(0x33d)][_0x2baa7f(0x3f1)](_0x5a26fa,!![])):(_0x3488ae=this[_0x2baa7f(0x16f)][_0x2baa7f(0x483)](_0x5a26fa),_0x1fcbbe=this[_0x2baa7f(0x33d)][_0x2baa7f(0x483)](_0x5a26fa),_0x468a10=this[_0x2baa7f(0x33d)][_0x2baa7f(0x483)](_0x5a26fa));const _0x5c8688=_0x3488ae,_0x3a542d=_0x1fcbbe;diffValue=_0x3a542d-_0x5c8688,this[_0x2baa7f(0x3e5)](ColorManager[_0x2baa7f(0x4c2)](diffValue)),this[_0x2baa7f(0x28e)](_0x468a10,_0x145ab8,_0x527aad,_0x8061cc-_0x41e78a,_0x2baa7f(0x21c));}},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x328)]=function(_0x279e1d,_0x1ab34d,_0x292aff,_0x31f3bc){const _0x2a64d4=_0x1149b0,_0x2bc561=this['itemPadding']();let _0x440785=0x0,_0x4ab13b=0x0,_0x320f2d=![];if(this[_0x2a64d4(0x33d)]){Imported[_0x2a64d4(0x1e5)]?(_0x440785=this[_0x2a64d4(0x16f)]['paramValueByName'](_0x279e1d,![]),_0x4ab13b=this[_0x2a64d4(0x33d)]['paramValueByName'](_0x279e1d,![]),_0x320f2d=String(this['_actor'][_0x2a64d4(0x3f1)](_0x279e1d,!![]))[_0x2a64d4(0x1f4)](/([%％])/i)):(_0x440785=this[_0x2a64d4(0x16f)][_0x2a64d4(0x483)](_0x279e1d),_0x4ab13b=this[_0x2a64d4(0x33d)]['param'](_0x279e1d),_0x320f2d=_0x440785%0x1!==0x0||_0x4ab13b%0x1!==0x0);const _0x28dfd6=_0x440785,_0x261ad0=_0x4ab13b,_0x123a2c=_0x261ad0-_0x28dfd6;let _0x1965b4=_0x123a2c;if(_0x320f2d)_0x1965b4=Math['round'](_0x123a2c*0x64)+'%';_0x123a2c!==0x0&&(this[_0x2a64d4(0x3e5)](ColorManager[_0x2a64d4(0x4c2)](_0x123a2c)),_0x1965b4=(_0x123a2c>0x0?_0x2a64d4(0x3ec):_0x2a64d4(0x2bc))['format'](_0x1965b4),this[_0x2a64d4(0x28e)](_0x1965b4,_0x1ab34d+_0x2bc561,_0x292aff,_0x31f3bc,'left'));}},Window_EquipStatus[_0x1149b0(0x491)][_0x1149b0(0x43e)]=function(_0x1177c2,_0x10239c,_0x67cca9,_0x21c015,_0x3b3b77){const _0x367ab3=_0x1149b0;if(VisuMZ[_0x367ab3(0x2f6)][_0x367ab3(0x3ad)][_0x367ab3(0x2fc)][_0x367ab3(0x41a)]===![])return;_0x3b3b77=Math[_0x367ab3(0x54c)](_0x3b3b77||0x1,0x1);while(_0x3b3b77--){_0x21c015=_0x21c015||this[_0x367ab3(0x1b8)](),this[_0x367ab3(0x482)]['paintOpacity']=0xa0;const _0x40f9d2=ColorManager[_0x367ab3(0x49c)]();this['contents'][_0x367ab3(0x27f)](_0x1177c2+0x1,_0x10239c+0x1,_0x67cca9-0x2,_0x21c015-0x2,_0x40f9d2),this[_0x367ab3(0x482)]['paintOpacity']=0xff;}},ColorManager[_0x1149b0(0x49c)]=function(){const _0x2757c5=_0x1149b0,_0x3096ab=VisuMZ['ItemsEquipsCore'][_0x2757c5(0x3ad)][_0x2757c5(0x2fc)];let _0x18f903=_0x3096ab[_0x2757c5(0x406)]!==undefined?_0x3096ab[_0x2757c5(0x406)]:0x13;return ColorManager[_0x2757c5(0x189)](_0x18f903);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1e3)]=Window_EquipCommand[_0x1149b0(0x491)]['initialize'],Window_EquipCommand[_0x1149b0(0x491)]['initialize']=function(_0x1d24be){const _0x5680dd=_0x1149b0;VisuMZ[_0x5680dd(0x2f6)][_0x5680dd(0x1e3)][_0x5680dd(0x50b)](this,_0x1d24be),this[_0x5680dd(0x308)](_0x1d24be);},Window_EquipCommand[_0x1149b0(0x491)]['createCommandNameWindow']=function(_0xda9b79){const _0x363dfe=_0x1149b0,_0x58f003=new Rectangle(0x0,0x0,_0xda9b79['width'],_0xda9b79[_0x363dfe(0x1d3)]);this['_commandNameWindow']=new Window_Base(_0x58f003),this[_0x363dfe(0x2a5)][_0x363dfe(0x52f)]=0x0,this['addChild'](this[_0x363dfe(0x2a5)]),this['updateCommandNameWindow']();},Window_EquipCommand['prototype'][_0x1149b0(0x440)]=function(){const _0x4faa2e=_0x1149b0;Window_HorzCommand['prototype']['callUpdateHelp']['call'](this);if(this['_commandNameWindow'])this[_0x4faa2e(0x144)]();},Window_EquipCommand['prototype'][_0x1149b0(0x144)]=function(){const _0x3d86a3=_0x1149b0,_0xda4684=this[_0x3d86a3(0x2a5)];_0xda4684[_0x3d86a3(0x482)][_0x3d86a3(0x375)]();const _0xa487ce=this[_0x3d86a3(0x419)](this['index']());if(_0xa487ce==='icon'){const _0x36f883=this[_0x3d86a3(0x465)](this[_0x3d86a3(0x42e)]());let _0x1b8945=this['commandName'](this[_0x3d86a3(0x42e)]());_0x1b8945=_0x1b8945[_0x3d86a3(0x1da)](/\\I\[(\d+)\]/gi,''),_0xda4684['resetFontSettings'](),this[_0x3d86a3(0x4b5)](_0x1b8945,_0x36f883),this['commandNameWindowDrawText'](_0x1b8945,_0x36f883),this[_0x3d86a3(0x17e)](_0x1b8945,_0x36f883);}},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x4b5)]=function(_0x430c1f,_0x18fdfd){},Window_EquipCommand['prototype'][_0x1149b0(0x3da)]=function(_0x35fab8,_0x1481a3){const _0x153eb3=_0x1149b0,_0x4c993a=this[_0x153eb3(0x2a5)];_0x4c993a[_0x153eb3(0x28e)](_0x35fab8,0x0,_0x1481a3['y'],_0x4c993a[_0x153eb3(0x18a)],_0x153eb3(0x2e8));},Window_EquipCommand['prototype']['commandNameWindowCenter']=function(_0x26befd,_0x3bfdd1){const _0x164a00=_0x1149b0,_0x17e418=this[_0x164a00(0x2a5)],_0x26ce2c=$gameSystem['windowPadding'](),_0x42335c=_0x3bfdd1['x']+Math['floor'](_0x3bfdd1[_0x164a00(0x241)]/0x2)+_0x26ce2c;_0x17e418['x']=_0x17e418[_0x164a00(0x241)]/-0x2+_0x42335c,_0x17e418['y']=Math[_0x164a00(0x271)](_0x3bfdd1[_0x164a00(0x1d3)]/0x2);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x45f)]=function(){const _0x27160b=_0x1149b0;return Imported[_0x27160b(0x1e5)]&&Window_HorzCommand[_0x27160b(0x491)][_0x27160b(0x45f)][_0x27160b(0x50b)](this);},Window_EquipCommand['prototype'][_0x1149b0(0x1d1)]=function(){const _0x1c792d=_0x1149b0;if(this['currentSymbol']()===_0x1c792d(0x441))Window_HorzCommand[_0x1c792d(0x491)]['playOkSound'][_0x1c792d(0x50b)](this);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x2f0)]=function(){const _0x57174e=_0x1149b0;!this[_0x57174e(0x554)]()&&Window_HorzCommand[_0x57174e(0x491)][_0x57174e(0x2f0)]['call'](this);},Window_EquipCommand['prototype'][_0x1149b0(0x554)]=function(){const _0x447eca=_0x1149b0;if(!this[_0x447eca(0x342)]())return![];if(SceneManager[_0x447eca(0x4ec)][_0x447eca(0x1cf)]!==Scene_Equip)return![];return Input[_0x447eca(0x2d1)]('down')&&this[_0x447eca(0x348)](),![];},Window_EquipCommand['prototype'][_0x1149b0(0x348)]=function(){const _0x441cd4=_0x1149b0;this['playCursorSound'](),SceneManager[_0x441cd4(0x4ec)][_0x441cd4(0x4e4)](),SceneManager[_0x441cd4(0x4ec)]['_slotWindow'][_0x441cd4(0x529)](-0x1);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x47c)]=function(){const _0xfc49d0=_0x1149b0;return this[_0xfc49d0(0x47d)]?this['_list'][_0xfc49d0(0x16d)]:0x3;},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x28c)]=function(){const _0x2d0de7=_0x1149b0;if(this[_0x2d0de7(0x549)]()&&this[_0x2d0de7(0x4f3)]&&SceneManager[_0x2d0de7(0x4ec)][_0x2d0de7(0x1cf)]===Scene_Equip){if(this[_0x2d0de7(0x4e3)]()&&TouchInput['isHovered']())this[_0x2d0de7(0x1ba)](![]);else TouchInput[_0x2d0de7(0x2d1)]()&&this[_0x2d0de7(0x1ba)](!![]);TouchInput[_0x2d0de7(0x495)]()&&this[_0x2d0de7(0x21b)]();}},Window_EquipCommand[_0x1149b0(0x491)]['onTouchSelectModernControls']=function(_0x22322d){const _0xa90efd=_0x1149b0;this[_0xa90efd(0x23b)]=![];const _0xd2a7f8=this[_0xa90efd(0x42e)](),_0x2f65e8=this[_0xa90efd(0x493)](),_0x140395=SceneManager[_0xa90efd(0x4ec)][_0xa90efd(0x166)];if(_0x140395[_0xa90efd(0x549)]()&&_0x140395[_0xa90efd(0x4f3)]){if(_0x2f65e8>=0x0)_0x2f65e8===this[_0xa90efd(0x42e)]()&&(this['_doubleTouch']=!![]),this[_0xa90efd(0x4bb)](),this[_0xa90efd(0x147)](_0x2f65e8);else _0x140395[_0xa90efd(0x493)]()>=0x0&&(this[_0xa90efd(0x174)](),this[_0xa90efd(0x562)]());}_0x22322d&&this['index']()!==_0xd2a7f8&&this[_0xa90efd(0x4d5)]();},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x362)]=function(){const _0x1d44a5=_0x1149b0;this[_0x1d44a5(0x421)](),this['addOptimizeCommand'](),this[_0x1d44a5(0x324)]();},Window_EquipCommand[_0x1149b0(0x491)]['refresh']=function(){const _0x2acd55=_0x1149b0;Window_HorzCommand[_0x2acd55(0x491)][_0x2acd55(0x518)][_0x2acd55(0x50b)](this),this[_0x2acd55(0x1d8)]();},Window_EquipCommand['prototype'][_0x1149b0(0x421)]=function(){const _0x322f49=_0x1149b0;if(!this['isEquipCommandAdded']())return;const _0x233c0f=this[_0x322f49(0x369)](),_0x443006=VisuMZ[_0x322f49(0x2f6)]['Settings'][_0x322f49(0x2fc)]['CmdIconEquip'],_0x4e75e0=_0x233c0f==='text'?TextManager[_0x322f49(0x2ca)]:'\x5cI[%1]%2'[_0x322f49(0x2c2)](_0x443006,TextManager[_0x322f49(0x2ca)]),_0x41f895=this['isEquipCommandEnabled']();this[_0x322f49(0x231)](_0x4e75e0,_0x322f49(0x441),_0x41f895);},Window_EquipCommand[_0x1149b0(0x491)]['isEquipCommandAdded']=function(){const _0x1ebe22=_0x1149b0;return!this[_0x1ebe22(0x45f)]();},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x439)]=function(){return!![];},Window_EquipCommand['prototype'][_0x1149b0(0x22c)]=function(){const _0x2cabcf=_0x1149b0;if(!this[_0x2cabcf(0x264)]())return;const _0xc57356=this[_0x2cabcf(0x369)](),_0xa78841=VisuMZ['ItemsEquipsCore']['Settings'][_0x2cabcf(0x2fc)]['CmdIconOptimize'],_0x1fd160=_0xc57356===_0x2cabcf(0x4b8)?TextManager[_0x2cabcf(0x335)]:_0x2cabcf(0x31b)[_0x2cabcf(0x2c2)](_0xa78841,TextManager[_0x2cabcf(0x335)]),_0x4c8327=this['isOptimizeCommandEnabled']();this[_0x2cabcf(0x231)](_0x1fd160,_0x2cabcf(0x335),_0x4c8327);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x264)]=function(){const _0x3e573c=_0x1149b0;return VisuMZ[_0x3e573c(0x2f6)][_0x3e573c(0x3ad)]['EquipScene']['CommandAddOptimize'];},Window_EquipCommand[_0x1149b0(0x491)]['isOptimizeCommandEnabled']=function(){return!![];},Window_EquipCommand['prototype'][_0x1149b0(0x324)]=function(){const _0x206dc0=_0x1149b0;if(!this[_0x206dc0(0x46d)]())return;const _0x59044d=this[_0x206dc0(0x369)](),_0x53205d=VisuMZ[_0x206dc0(0x2f6)][_0x206dc0(0x3ad)][_0x206dc0(0x2fc)][_0x206dc0(0x293)],_0x500c12=_0x59044d===_0x206dc0(0x4b8)?TextManager['clear']:_0x206dc0(0x31b)[_0x206dc0(0x2c2)](_0x53205d,TextManager['clear']),_0x4b5526=this['isClearCommandEnabled']();this[_0x206dc0(0x231)](_0x500c12,'clear',_0x4b5526);},Window_EquipCommand['prototype'][_0x1149b0(0x46d)]=function(){const _0x29439b=_0x1149b0;return VisuMZ[_0x29439b(0x2f6)]['Settings'][_0x29439b(0x2fc)][_0x29439b(0x3a4)];},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x564)]=function(){return!![];},Window_EquipCommand['prototype'][_0x1149b0(0x3c5)]=function(){const _0x515179=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x515179(0x3ad)][_0x515179(0x2fc)][_0x515179(0x4bf)];},Window_EquipCommand['prototype'][_0x1149b0(0x359)]=function(_0x1819d3){const _0x3b8fb8=_0x1149b0,_0x21bda4=this[_0x3b8fb8(0x419)](_0x1819d3);if(_0x21bda4===_0x3b8fb8(0x1c8))this[_0x3b8fb8(0x404)](_0x1819d3);else _0x21bda4==='icon'?this[_0x3b8fb8(0x39d)](_0x1819d3):Window_HorzCommand[_0x3b8fb8(0x491)][_0x3b8fb8(0x359)][_0x3b8fb8(0x50b)](this,_0x1819d3);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x369)]=function(){const _0x463e7d=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x463e7d(0x3ad)]['EquipScene'][_0x463e7d(0x2d5)];},Window_EquipCommand['prototype'][_0x1149b0(0x419)]=function(_0x40ff4f){const _0x297e7a=_0x1149b0;if(_0x40ff4f<0x0)return _0x297e7a(0x4b8);const _0x4befe7=this[_0x297e7a(0x369)]();if(_0x4befe7!==_0x297e7a(0x45d))return _0x4befe7;else{if(this['maxItems']()>0x0){const _0x43d4a7=this[_0x297e7a(0x3b2)](_0x40ff4f);if(_0x43d4a7['match'](/\\I\[(\d+)\]/i)){const _0x594644=this[_0x297e7a(0x465)](_0x40ff4f),_0x15f8f1=this[_0x297e7a(0x15c)](_0x43d4a7)[_0x297e7a(0x241)];return _0x15f8f1<=_0x594644[_0x297e7a(0x241)]?'iconText':'icon';}}}return _0x297e7a(0x4b8);},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x404)]=function(_0x3bf7a2){const _0x48b373=_0x1149b0,_0x47b6fb=this[_0x48b373(0x465)](_0x3bf7a2),_0x5ecda2=this[_0x48b373(0x3b2)](_0x3bf7a2),_0xcd74eb=this['textSizeEx'](_0x5ecda2)['width'];this[_0x48b373(0x1ef)](this['isCommandEnabled'](_0x3bf7a2));const _0x180e64=this[_0x48b373(0x3c5)]();if(_0x180e64===_0x48b373(0x21c))this[_0x48b373(0x2b8)](_0x5ecda2,_0x47b6fb['x']+_0x47b6fb[_0x48b373(0x241)]-_0xcd74eb,_0x47b6fb['y'],_0xcd74eb);else{if(_0x180e64===_0x48b373(0x2e8)){const _0x264a0e=_0x47b6fb['x']+Math['floor']((_0x47b6fb['width']-_0xcd74eb)/0x2);this['drawTextEx'](_0x5ecda2,_0x264a0e,_0x47b6fb['y'],_0xcd74eb);}else this[_0x48b373(0x2b8)](_0x5ecda2,_0x47b6fb['x'],_0x47b6fb['y'],_0xcd74eb);}},Window_EquipCommand['prototype']['drawItemStyleIcon']=function(_0x445475){const _0x5e714d=_0x1149b0;this[_0x5e714d(0x3b2)](_0x445475)[_0x5e714d(0x1f4)](/\\I\[(\d+)\]/i);const _0x2424e9=Number(RegExp['$1'])||0x0,_0x57cc24=this[_0x5e714d(0x465)](_0x445475),_0x3663e5=_0x57cc24['x']+Math[_0x5e714d(0x271)]((_0x57cc24['width']-ImageManager[_0x5e714d(0x226)])/0x2),_0x2131cf=_0x57cc24['y']+(_0x57cc24[_0x5e714d(0x1d3)]-ImageManager[_0x5e714d(0x38c)])/0x2;this['drawIcon'](_0x2424e9,_0x3663e5,_0x2131cf);},Window_EquipCommand['prototype'][_0x1149b0(0x181)]=function(){const _0x251e60=SceneManager['_scene'];if(_0x251e60&&_0x251e60['user'])return _0x251e60['user']();return null;},Window_EquipCommand[_0x1149b0(0x491)][_0x1149b0(0x4e1)]=function(){const _0x272c97=_0x1149b0;Window_Command[_0x272c97(0x491)][_0x272c97(0x4e1)]['call'](this),this[_0x272c97(0x2fa)]['setText'](this['helpDescriptionText']());},Window_EquipCommand[_0x1149b0(0x491)]['helpDescriptionText']=function(){const _0xdb5de8=_0x1149b0,_0x3d2f37=this['currentSymbol']();switch(_0x3d2f37){case _0xdb5de8(0x441):return TextManager['ITEMS_EQUIPS_CORE'][_0xdb5de8(0x1f9)][_0xdb5de8(0x441)];case'optimize':return TextManager[_0xdb5de8(0x2ee)][_0xdb5de8(0x1f9)][_0xdb5de8(0x335)];case _0xdb5de8(0x375):return TextManager[_0xdb5de8(0x2ee)][_0xdb5de8(0x1f9)][_0xdb5de8(0x375)];default:return'';}},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x45f)]=function(){const _0x33651c=_0x1149b0;return Imported[_0x33651c(0x1e5)]&&Window_HorzCommand['prototype'][_0x33651c(0x45f)][_0x33651c(0x50b)](this);},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x4bb)]=function(){const _0x514476=_0x1149b0;Window_StatusBase[_0x514476(0x491)]['activate'][_0x514476(0x50b)](this),this[_0x514476(0x440)]();},Window_EquipSlot['prototype'][_0x1149b0(0x2c4)]=function(){const _0x4043c7=_0x1149b0;Window_StatusBase[_0x4043c7(0x491)][_0x4043c7(0x2c4)][_0x4043c7(0x50b)](this),this[_0x4043c7(0x374)]();},Window_EquipSlot['prototype'][_0x1149b0(0x374)]=function(){const _0x3b0a16=_0x1149b0;if(!this[_0x3b0a16(0x148)]())return;if(Input[_0x3b0a16(0x2d1)](_0x3b0a16(0x30e))&&this[_0x3b0a16(0x378)]()){const _0x4eff42=SceneManager[_0x3b0a16(0x4ec)][_0x3b0a16(0x16f)];_0x4eff42&&(this[_0x3b0a16(0x42c)](this[_0x3b0a16(0x42e)]())?(this[_0x3b0a16(0x464)](),this[_0x3b0a16(0x4e1)]()):this[_0x3b0a16(0x4ad)]());}},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x42c)]=function(_0x513087){const _0x25ed04=_0x1149b0,_0x90981f=SceneManager[_0x25ed04(0x4ec)][_0x25ed04(0x16f)];if(!_0x90981f)return;if(!_0x90981f[_0x25ed04(0x3e2)](_0x513087))return![];const _0x37ac61=_0x90981f[_0x25ed04(0x1a9)]()[_0x513087];if(_0x90981f[_0x25ed04(0x320)]()['includes'](_0x37ac61))return![];return!![];;},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x464)]=function(){const _0x3dc6da=_0x1149b0;SoundManager['playEquip']();const _0x30f4a5=SceneManager[_0x3dc6da(0x4ec)][_0x3dc6da(0x16f)];_0x30f4a5[_0x3dc6da(0x391)](this[_0x3dc6da(0x42e)](),null),this['refresh'](),this['_itemWindow'][_0x3dc6da(0x518)](),this[_0x3dc6da(0x440)]();const _0x4dd7a7=SceneManager[_0x3dc6da(0x4ec)][_0x3dc6da(0x218)];if(_0x4dd7a7)_0x4dd7a7[_0x3dc6da(0x518)]();},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x148)]=function(){const _0x4e6a1b=_0x1149b0;if(!this[_0x4e6a1b(0x3bc)])return![];if(!VisuMZ[_0x4e6a1b(0x2f6)][_0x4e6a1b(0x3ad)][_0x4e6a1b(0x2fc)][_0x4e6a1b(0x227)])return![];return!![];},Window_EquipSlot['prototype'][_0x1149b0(0x2f0)]=function(){const _0x1ae4bb=_0x1149b0;!this['processCursorSpecialCheckModernControls']()&&Window_StatusBase[_0x1ae4bb(0x491)][_0x1ae4bb(0x2f0)][_0x1ae4bb(0x50b)](this);},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x554)]=function(){const _0x294ef4=_0x1149b0;if(!this[_0x294ef4(0x342)]())return![];if(SceneManager[_0x294ef4(0x4ec)][_0x294ef4(0x1cf)]!==Scene_Equip)return![];if(this[_0x294ef4(0x39a)]())return this['playCursorSound'](),Input[_0x294ef4(0x375)](),SceneManager[_0x294ef4(0x4ec)]['onSlotCancel'](),![];else{if(Input['isRepeated'](_0x294ef4(0x292))){const _0x216984=this[_0x294ef4(0x42e)]();return Input[_0x294ef4(0x3f7)](_0x294ef4(0x30e))?this[_0x294ef4(0x451)]():this['cursorDown'](Input['isTriggered'](_0x294ef4(0x292))),this['index']()!==_0x216984&&this['playCursorSound'](),!![];}else{if(this[_0x294ef4(0x1ae)]()&&Input[_0x294ef4(0x2d1)]('shift'))return!![];}}return![];},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x39a)]=function(){const _0xf96485=_0x1149b0;if(this['index']()!==0x0)return![];const _0x254c9e=VisuMZ['ItemsEquipsCore'][_0xf96485(0x3ad)]['EquipScene'];if(!_0x254c9e[_0xf96485(0x379)]&&!_0x254c9e['CommandAddClear'])return![];return Input[_0xf96485(0x2d1)]('up');},Window_EquipSlot[_0x1149b0(0x491)]['isShiftShortcutKeyForRemove']=function(){const _0x14e3fb=_0x1149b0;return VisuMZ[_0x14e3fb(0x2f6)][_0x14e3fb(0x3ad)]['EquipScene'][_0x14e3fb(0x227)];},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x28c)]=function(){const _0x1ea14f=_0x1149b0;if(this[_0x1ea14f(0x549)]()&&this['visible']&&SceneManager[_0x1ea14f(0x4ec)]['constructor']===Scene_Equip){if(this[_0x1ea14f(0x4e3)]()&&TouchInput[_0x1ea14f(0x29e)]())this[_0x1ea14f(0x1ba)](![]);else TouchInput[_0x1ea14f(0x2d1)]()&&this[_0x1ea14f(0x1ba)](!![]);if(TouchInput[_0x1ea14f(0x495)]())this[_0x1ea14f(0x21b)]();else{if(TouchInput[_0x1ea14f(0x203)]()){const _0x364c5=VisuMZ[_0x1ea14f(0x2f6)][_0x1ea14f(0x3ad)][_0x1ea14f(0x2fc)];this[_0x1ea14f(0x45f)]()&&this['active']&&!_0x364c5[_0x1ea14f(0x379)]&&!_0x364c5[_0x1ea14f(0x3a4)]?(SoundManager[_0x1ea14f(0x46a)](),SceneManager[_0x1ea14f(0x2b5)]()):this['onTouchCancel']();}}}},Window_EquipSlot[_0x1149b0(0x491)][_0x1149b0(0x1ba)]=function(_0x321ed1){const _0x3772c0=_0x1149b0;this['_doubleTouch']=![];const _0x449266=this[_0x3772c0(0x42e)](),_0x3e97dc=this[_0x3772c0(0x493)](),_0x1e79f7=SceneManager[_0x3772c0(0x4ec)][_0x3772c0(0x30a)];if(_0x1e79f7[_0x3772c0(0x549)]()&&_0x1e79f7[_0x3772c0(0x4f3)]){if(_0x3e97dc>=0x0)_0x3e97dc===this[_0x3772c0(0x42e)]()&&(this[_0x3772c0(0x23b)]=!![]),this[_0x3772c0(0x4bb)](),this[_0x3772c0(0x147)](_0x3e97dc),_0x1e79f7[_0x3772c0(0x174)]();else _0x1e79f7['hitIndex']()>=0x0&&(this['deactivate'](),this['deselect'](),_0x1e79f7[_0x3772c0(0x4bb)]());}_0x321ed1&&this['index']()!==_0x449266&&this['playCursorSound']();},Window_EquipSlot[_0x1149b0(0x491)]['equipSlotIndex']=function(){return this['index']();},VisuMZ[_0x1149b0(0x2f6)]['Window_EquipItem_includes']=Window_EquipItem[_0x1149b0(0x491)]['includes'],Window_EquipItem['prototype'][_0x1149b0(0x46c)]=function(_0x481950){const _0x1997a2=_0x1149b0;if(_0x481950===null&&this[_0x1997a2(0x320)]()['includes'](this[_0x1997a2(0x55b)]()))return![];else{$gameTemp[_0x1997a2(0x384)]=!![];let _0x51b538=VisuMZ['ItemsEquipsCore'][_0x1997a2(0x4eb)]['call'](this,_0x481950);if(!_0x51b538&&_0x481950&&DataManager[_0x1997a2(0x23f)](_0x481950)){const _0x185492=_0x481950['atypeId']||0x0;if(this[_0x1997a2(0x16f)]&&this[_0x1997a2(0x16f)]['isEquipAtypeOk'](_0x185492)){const _0x419529=DataManager[_0x1997a2(0x2a6)](_0x481950);_0x419529[_0x1997a2(0x46c)](this[_0x1997a2(0x55b)]())&&(_0x51b538=!![]);}}return $gameTemp[_0x1997a2(0x384)]=undefined,_0x51b538;}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x505)]=Window_EquipItem[_0x1149b0(0x491)][_0x1149b0(0x556)],Window_EquipItem['prototype'][_0x1149b0(0x556)]=function(_0x59182a){const _0x61f29f=_0x1149b0;if(_0x59182a&&this[_0x61f29f(0x16f)]){if(this[_0x61f29f(0x469)](_0x59182a))return![];if(this[_0x61f29f(0x33e)](_0x59182a))return![];if(this['isSoleArmorType'](_0x59182a))return![];if(!this['_actor'][_0x61f29f(0x2a4)](_0x59182a))return![];}if(!_0x59182a)return!this[_0x61f29f(0x320)]()[_0x61f29f(0x46c)](this[_0x61f29f(0x55b)]());return VisuMZ[_0x61f29f(0x2f6)]['Window_EquipItem_isEnabled'][_0x61f29f(0x50b)](this,_0x59182a);},Window_EquipItem['prototype'][_0x1149b0(0x469)]=function(_0x465b95){const _0x2abb5d=_0x1149b0,_0x3e2d05=_0x465b95[_0x2abb5d(0x1a6)];if(_0x3e2d05[_0x2abb5d(0x1f4)](/<EQUIP COPY LIMIT:[ ](\d+)>/i)){const _0x26302f=Number(RegExp['$1'])||0x1;let _0xf04130=0x0;const _0x9b0525=this[_0x2abb5d(0x16f)][_0x2abb5d(0x145)](),_0x569f75=SceneManager[_0x2abb5d(0x4ec)][_0x2abb5d(0x166)][_0x2abb5d(0x481)]();_0x9b0525[_0x569f75]=null;for(const _0x3a1667 of _0x9b0525){if(!_0x3a1667)continue;if(DataManager[_0x2abb5d(0x3b9)](_0x465b95)===DataManager[_0x2abb5d(0x3b9)](_0x3a1667)){if(_0x465b95['id']===_0x3a1667['id'])_0xf04130+=0x1;}}return _0xf04130>=_0x26302f;}else return![];},Window_EquipItem['prototype'][_0x1149b0(0x33e)]=function(_0x183f91){const _0x55d0d7=_0x1149b0;if(!DataManager[_0x55d0d7(0x3b9)](_0x183f91))return![];const _0x57f0d8=/<EQUIP WEAPON TYPE LIMIT:[ ](\d+)>/i;let _0x401649=0x0;const _0x465e96=this['_actor'][_0x55d0d7(0x145)](),_0x1faaf2=SceneManager[_0x55d0d7(0x4ec)][_0x55d0d7(0x166)][_0x55d0d7(0x481)]();_0x465e96[_0x1faaf2]=null;for(const _0xbb9d70 of _0x465e96){if(!_0xbb9d70)continue;if(!DataManager[_0x55d0d7(0x3b9)](_0xbb9d70))continue;if(_0x183f91['wtypeId']===_0xbb9d70[_0x55d0d7(0x326)]){_0x401649+=0x1;if(_0x183f91[_0x55d0d7(0x1a6)][_0x55d0d7(0x1f4)](_0x57f0d8)){const _0x447afc=Number(RegExp['$1'])||0x1;if(_0x401649>=_0x447afc)return!![];}if(_0xbb9d70[_0x55d0d7(0x1a6)][_0x55d0d7(0x1f4)](_0x57f0d8)){const _0x41c848=Number(RegExp['$1'])||0x1;if(_0x401649>=_0x41c848)return!![];}}}return![];},Window_EquipItem['prototype'][_0x1149b0(0x4f8)]=function(_0x49fb2b){const _0x90133f=_0x1149b0;if(!DataManager[_0x90133f(0x23f)](_0x49fb2b))return![];const _0x489b39=/<EQUIP ARMOR TYPE LIMIT:[ ](\d+)>/i;let _0x4ca549=0x0;const _0x4dc844=this['_actor'][_0x90133f(0x145)](),_0x3c2019=SceneManager['_scene'][_0x90133f(0x166)][_0x90133f(0x481)]();_0x4dc844[_0x3c2019]=null;for(const _0x423a3f of _0x4dc844){if(!_0x423a3f)continue;if(!DataManager[_0x90133f(0x23f)](_0x423a3f))continue;if(_0x49fb2b[_0x90133f(0x4e8)]===_0x423a3f[_0x90133f(0x4e8)]){_0x4ca549+=0x1;if(_0x49fb2b[_0x90133f(0x1a6)]['match'](_0x489b39)){const _0x20f877=Number(RegExp['$1'])||0x1;if(_0x4ca549>=_0x20f877)return!![];}if(_0x423a3f['note']['match'](_0x489b39)){const _0x4dd130=Number(RegExp['$1'])||0x1;if(_0x4ca549>=_0x4dd130)return!![];}}}return![];},Window_EquipItem[_0x1149b0(0x491)][_0x1149b0(0x320)]=function(){const _0x567ada=_0x1149b0;return VisuMZ[_0x567ada(0x2f6)][_0x567ada(0x3ad)]['EquipScene'][_0x567ada(0x401)];},Window_EquipItem['prototype'][_0x1149b0(0x359)]=function(_0x4031fa){const _0x5e0b55=_0x1149b0,_0x3519bc=this[_0x5e0b55(0x47b)](_0x4031fa);_0x3519bc?Window_ItemList[_0x5e0b55(0x491)]['drawItem'][_0x5e0b55(0x50b)](this,_0x4031fa):this[_0x5e0b55(0x37d)](_0x4031fa);},Window_EquipItem[_0x1149b0(0x491)][_0x1149b0(0x37d)]=function(_0x31c990){const _0x355bb1=_0x1149b0;this[_0x355bb1(0x1ef)](this[_0x355bb1(0x556)](null));const _0x148599=VisuMZ['ItemsEquipsCore'][_0x355bb1(0x3ad)]['EquipScene'],_0x4719f0=this[_0x355bb1(0x465)](_0x31c990),_0x4f9268=_0x4719f0['y']+(this[_0x355bb1(0x1b8)]()-ImageManager[_0x355bb1(0x38c)])/0x2,_0x268536=ImageManager['iconWidth']+0x4,_0x48fb70=Math[_0x355bb1(0x54c)](0x0,_0x4719f0[_0x355bb1(0x241)]-_0x268536);this[_0x355bb1(0x2e7)](),this['drawIcon'](_0x148599[_0x355bb1(0x3d2)],_0x4719f0['x'],_0x4f9268),this[_0x355bb1(0x28e)](_0x148599[_0x355bb1(0x377)],_0x4719f0['x']+_0x268536,_0x4719f0['y'],_0x48fb70),this['changePaintOpacity'](!![]);},Window_EquipItem['prototype'][_0x1149b0(0x4e1)]=function(){const _0x5bae35=_0x1149b0;Window_ItemList['prototype']['updateHelp']['call'](this);if(this[_0x5bae35(0x16f)]&&this[_0x5bae35(0x218)]&&this[_0x5bae35(0x470)]>=0x0){const _0x3107e8=JsonEx['makeDeepCopy'](this[_0x5bae35(0x16f)]);_0x3107e8[_0x5bae35(0x33d)]=!![],_0x3107e8[_0x5bae35(0x525)](this[_0x5bae35(0x470)],this['item']()),this[_0x5bae35(0x218)]['setTempActor'](_0x3107e8);}},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x3d3)]=Window_ShopCommand[_0x1149b0(0x491)]['initialize'],Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x1af)]=function(_0x3c4bb4){const _0x23dae0=_0x1149b0;VisuMZ[_0x23dae0(0x2f6)][_0x23dae0(0x3d3)][_0x23dae0(0x50b)](this,_0x3c4bb4),this[_0x23dae0(0x308)](_0x3c4bb4);},Window_ShopCommand[_0x1149b0(0x491)]['createCommandNameWindow']=function(_0x4518c7){const _0x4332=_0x1149b0,_0x176125=new Rectangle(0x0,0x0,_0x4518c7[_0x4332(0x241)],_0x4518c7[_0x4332(0x1d3)]);this['_commandNameWindow']=new Window_Base(_0x176125),this[_0x4332(0x2a5)][_0x4332(0x52f)]=0x0,this[_0x4332(0x350)](this[_0x4332(0x2a5)]),this[_0x4332(0x144)]();},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x440)]=function(){const _0x341712=_0x1149b0;Window_HorzCommand['prototype'][_0x341712(0x440)][_0x341712(0x50b)](this);if(this[_0x341712(0x2a5)])this[_0x341712(0x144)]();},Window_ShopCommand[_0x1149b0(0x491)]['updateCommandNameWindow']=function(){const _0x244737=_0x1149b0,_0x1245ce=this[_0x244737(0x2a5)];_0x1245ce['contents'][_0x244737(0x375)]();const _0xd62d22=this['commandStyleCheck'](this[_0x244737(0x42e)]());if(_0xd62d22==='icon'){const _0x3ccfc0=this[_0x244737(0x465)](this[_0x244737(0x42e)]());let _0x183e32=this[_0x244737(0x3b2)](this['index']());_0x183e32=_0x183e32[_0x244737(0x1da)](/\\I\[(\d+)\]/gi,''),_0x1245ce[_0x244737(0x289)](),this[_0x244737(0x4b5)](_0x183e32,_0x3ccfc0),this[_0x244737(0x3da)](_0x183e32,_0x3ccfc0),this[_0x244737(0x17e)](_0x183e32,_0x3ccfc0);}},Window_ShopCommand['prototype'][_0x1149b0(0x4b5)]=function(_0x101ba7,_0x382a62){},Window_ShopCommand['prototype'][_0x1149b0(0x3da)]=function(_0x1b5238,_0x2f64df){const _0xc76119=_0x1149b0,_0x46afbe=this[_0xc76119(0x2a5)];_0x46afbe[_0xc76119(0x28e)](_0x1b5238,0x0,_0x2f64df['y'],_0x46afbe[_0xc76119(0x18a)],'center');},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x17e)]=function(_0x3978f6,_0x4daa80){const _0x435d4d=_0x1149b0,_0x160b7b=this[_0x435d4d(0x2a5)],_0x227fe7=$gameSystem[_0x435d4d(0x1c7)](),_0x209bf1=_0x4daa80['x']+Math[_0x435d4d(0x271)](_0x4daa80[_0x435d4d(0x241)]/0x2)+_0x227fe7;_0x160b7b['x']=_0x160b7b[_0x435d4d(0x241)]/-0x2+_0x209bf1,_0x160b7b['y']=Math[_0x435d4d(0x271)](_0x4daa80['height']/0x2);},Window_ShopCommand['prototype'][_0x1149b0(0x47c)]=function(){const _0x1a1f7b=_0x1149b0;return this['_list']?this[_0x1a1f7b(0x47d)][_0x1a1f7b(0x16d)]:0x3;},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x192)]=function(){const _0x34d3d5=_0x1149b0;return VisuMZ[_0x34d3d5(0x2f6)][_0x34d3d5(0x3ad)]['ShopScene'][_0x34d3d5(0x468)];},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x362)]=function(){const _0xd96b19=_0x1149b0;this['addBuyCommand'](),this[_0xd96b19(0x2fe)](),this[_0xd96b19(0x301)]();},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x518)]=function(){const _0x244b43=_0x1149b0;Window_HorzCommand[_0x244b43(0x491)]['refresh']['call'](this),this['refreshCursor']();},Window_ShopCommand['prototype'][_0x1149b0(0x290)]=function(){const _0x4c335a=_0x1149b0,_0x1d91e3=this['commandStyle'](),_0x2d76ec=VisuMZ[_0x4c335a(0x2f6)][_0x4c335a(0x3ad)][_0x4c335a(0x43a)][_0x4c335a(0x519)],_0x2c8668=_0x1d91e3===_0x4c335a(0x4b8)?TextManager[_0x4c335a(0x167)]:_0x4c335a(0x31b)[_0x4c335a(0x2c2)](_0x2d76ec,TextManager[_0x4c335a(0x167)]),_0x468469=this[_0x4c335a(0x486)]();if(this['hideDisabledCommands']()&&!_0x468469)return;this[_0x4c335a(0x231)](_0x2c8668,_0x4c335a(0x167),_0x468469);},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x486)]=function(){const _0x210313=_0x1149b0;return SceneManager[_0x210313(0x4ec)]['constructor']===Scene_Shop?SceneManager[_0x210313(0x4ec)][_0x210313(0x1b9)]>0x0:!![];},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x2fe)]=function(){const _0xfc301a=_0x1149b0,_0x22d94a=this[_0xfc301a(0x369)](),_0x277828=VisuMZ['ItemsEquipsCore']['Settings'][_0xfc301a(0x43a)]['CmdIconSell'],_0x48b44c=_0x22d94a===_0xfc301a(0x4b8)?TextManager[_0xfc301a(0x1f7)]:_0xfc301a(0x31b)[_0xfc301a(0x2c2)](_0x277828,TextManager['sell']),_0xe0ceda=this[_0xfc301a(0x2f8)]();if(this[_0xfc301a(0x192)]()&&!_0xe0ceda)return;this[_0xfc301a(0x231)](_0x48b44c,_0xfc301a(0x1f7),_0xe0ceda);},Window_ShopCommand[_0x1149b0(0x491)]['isSellCommandEnabled']=function(){const _0x3b57f9=_0x1149b0;return!this[_0x3b57f9(0x3e9)];},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x301)]=function(){const _0x2e9ae1=_0x1149b0,_0x480410=this[_0x2e9ae1(0x369)](),_0x3043a9=VisuMZ[_0x2e9ae1(0x2f6)][_0x2e9ae1(0x3ad)][_0x2e9ae1(0x43a)][_0x2e9ae1(0x1c0)],_0x5b079b=VisuMZ['ItemsEquipsCore']['Settings'][_0x2e9ae1(0x43a)][_0x2e9ae1(0x45b)],_0x330a50=_0x480410===_0x2e9ae1(0x4b8)?_0x5b079b:_0x2e9ae1(0x31b)[_0x2e9ae1(0x2c2)](_0x3043a9,_0x5b079b);this[_0x2e9ae1(0x231)](_0x330a50,_0x2e9ae1(0x513));},Window_ShopCommand['prototype'][_0x1149b0(0x3c5)]=function(){const _0x37a526=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x37a526(0x3ad)][_0x37a526(0x43a)]['CmdTextAlign'];},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x359)]=function(_0x3e2c7e){const _0x1cfb94=_0x1149b0,_0x2727d0=this['commandStyleCheck'](_0x3e2c7e);if(_0x2727d0===_0x1cfb94(0x1c8))this[_0x1cfb94(0x404)](_0x3e2c7e);else _0x2727d0===_0x1cfb94(0x442)?this['drawItemStyleIcon'](_0x3e2c7e):Window_HorzCommand[_0x1cfb94(0x491)]['drawItem'][_0x1cfb94(0x50b)](this,_0x3e2c7e);},Window_ShopCommand['prototype'][_0x1149b0(0x369)]=function(){const _0x4a1f87=_0x1149b0;return VisuMZ['ItemsEquipsCore']['Settings'][_0x4a1f87(0x43a)][_0x4a1f87(0x2d5)];},Window_ShopCommand[_0x1149b0(0x491)]['commandStyleCheck']=function(_0x396bfc){const _0x358179=_0x1149b0;if(_0x396bfc<0x0)return _0x358179(0x4b8);const _0x5b3117=this['commandStyle']();if(_0x5b3117!==_0x358179(0x45d))return _0x5b3117;else{if(this[_0x358179(0x53f)]()>0x0){const _0x51b921=this[_0x358179(0x3b2)](_0x396bfc);if(_0x51b921[_0x358179(0x1f4)](/\\I\[(\d+)\]/i)){const _0x31bd5b=this[_0x358179(0x465)](_0x396bfc),_0x517551=this[_0x358179(0x15c)](_0x51b921)['width'];return _0x517551<=_0x31bd5b['width']?_0x358179(0x1c8):_0x358179(0x442);}}}return _0x358179(0x4b8);},Window_ShopCommand[_0x1149b0(0x491)][_0x1149b0(0x404)]=function(_0x1fcf3e){const _0x1b9318=_0x1149b0,_0x2f5a2f=this[_0x1b9318(0x465)](_0x1fcf3e),_0x314237=this[_0x1b9318(0x3b2)](_0x1fcf3e),_0x2949ff=this[_0x1b9318(0x15c)](_0x314237)['width'];this[_0x1b9318(0x1ef)](this[_0x1b9318(0x561)](_0x1fcf3e));const _0x2c3e18=this[_0x1b9318(0x3c5)]();if(_0x2c3e18===_0x1b9318(0x21c))this[_0x1b9318(0x2b8)](_0x314237,_0x2f5a2f['x']+_0x2f5a2f[_0x1b9318(0x241)]-_0x2949ff,_0x2f5a2f['y'],_0x2949ff);else{if(_0x2c3e18===_0x1b9318(0x2e8)){const _0x2cf304=_0x2f5a2f['x']+Math['floor']((_0x2f5a2f[_0x1b9318(0x241)]-_0x2949ff)/0x2);this[_0x1b9318(0x2b8)](_0x314237,_0x2cf304,_0x2f5a2f['y'],_0x2949ff);}else this[_0x1b9318(0x2b8)](_0x314237,_0x2f5a2f['x'],_0x2f5a2f['y'],_0x2949ff);}},Window_ShopCommand[_0x1149b0(0x491)]['drawItemStyleIcon']=function(_0x4d7344){const _0x379c27=_0x1149b0;this[_0x379c27(0x3b2)](_0x4d7344)[_0x379c27(0x1f4)](/\\I\[(\d+)\]/i);const _0x5dfe31=Number(RegExp['$1'])||0x0,_0x5e7c76=this['itemLineRect'](_0x4d7344),_0x14d8bf=_0x5e7c76['x']+Math[_0x379c27(0x271)]((_0x5e7c76[_0x379c27(0x241)]-ImageManager[_0x379c27(0x226)])/0x2),_0x405bbd=_0x5e7c76['y']+(_0x5e7c76['height']-ImageManager['iconHeight'])/0x2;this[_0x379c27(0x18b)](_0x5dfe31,_0x14d8bf,_0x405bbd);},VisuMZ[_0x1149b0(0x2f6)]['Window_ShopBuy_refresh']=Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x518)],Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x518)]=function(){const _0x12a69b=_0x1149b0;this[_0x12a69b(0x54d)](),VisuMZ['ItemsEquipsCore'][_0x12a69b(0x21e)]['call'](this);},Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x54d)]=function(){const _0x967693=_0x1149b0;SceneManager[_0x967693(0x4ec)]['constructor']===Scene_Shop&&(this['_money']=SceneManager[_0x967693(0x4ec)][_0x967693(0x1e0)]());},VisuMZ[_0x1149b0(0x2f6)]['Window_ShopBuy_price']=Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x494)],Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x494)]=function(_0x49252c){const _0x156bf4=_0x1149b0;if(!_0x49252c)return 0x0;let _0x2ae511=VisuMZ[_0x156bf4(0x2f6)][_0x156bf4(0x333)]['call'](this,_0x49252c);return Math[_0x156bf4(0x54c)](0x0,this[_0x156bf4(0x4d2)](_0x49252c,_0x2ae511));},Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x4d2)]=function(_0x46a8d3,_0x266527){const _0x161b3a=_0x1149b0,_0x200ee0=_0x46a8d3[_0x161b3a(0x1a6)]||'';if(_0x200ee0[_0x161b3a(0x1f4)](/<JS BUY PRICE>\s*([\s\S]*)\s*<\/JS BUY PRICE>/i)){const _0x40cd15=String(RegExp['$1']);window['price']=_0x266527,window[_0x161b3a(0x378)]=_0x46a8d3;try{eval(_0x40cd15);}catch(_0xf9e5e3){if($gameTemp[_0x161b3a(0x533)]())console['log'](_0xf9e5e3);}_0x266527=window['price'],window[_0x161b3a(0x494)]=undefined,window[_0x161b3a(0x378)]=undefined;}_0x266527=VisuMZ['ItemsEquipsCore'][_0x161b3a(0x3ad)][_0x161b3a(0x43a)][_0x161b3a(0x234)]['call'](this,_0x46a8d3,_0x266527);if(isNaN(_0x266527))_0x266527=0x0;return Math[_0x161b3a(0x271)](_0x266527);},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x22f)]=Window_ShopBuy['prototype'][_0x1149b0(0x4c3)],Window_ShopBuy['prototype'][_0x1149b0(0x4c3)]=function(_0x5e61c6){const _0x1251b6=_0x1149b0,_0x319b1b=VisuMZ[_0x1251b6(0x2f6)][_0x1251b6(0x22f)][_0x1251b6(0x50b)](this,_0x5e61c6);return _0x319b1b&&!this['meetsShopListingConditions'](_0x319b1b)?null:_0x319b1b;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x4c4)]={'ShowAllSwitches':/<SHOW SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'ShowAnySwitches':/<SHOW SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'HideAllSwitches':/<HIDE SHOP (?:ALL |)SWITCH(?:|ES):[ ](.*)>/i,'HideAnySwitches':/<HIDE SHOP ANY SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOn':/<BUY TURN ON SWITCH(?:|ES):[ ](.*)>/i,'BuyTurnSwitchOff':/<BUY TURN OFF SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOn':/<SELL TURN ON SWITCH(?:|ES):[ ](.*)>/i,'SellTurnSwitchOff':/<SELL TURN OFF SWITCH(?:|ES):[ ](.*)>/i},Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x36e)]=function(_0x18769f){const _0x164f12=_0x1149b0;if(!_0x18769f)return![];const _0x2da9b6=VisuMZ[_0x164f12(0x2f6)][_0x164f12(0x4c4)],_0x25a60c=_0x18769f?_0x18769f[_0x164f12(0x1a6)]||'':'';if(_0x25a60c[_0x164f12(0x1f4)](_0x2da9b6[_0x164f12(0x3cb)])){const _0x3fd8aa=String(RegExp['$1'])['split'](',')['map'](_0x24e5ce=>Number(_0x24e5ce));if(_0x3fd8aa[_0x164f12(0x487)](_0xdc38fd=>!$gameSwitches[_0x164f12(0x4b1)](_0xdc38fd)))return![];}if(_0x25a60c[_0x164f12(0x1f4)](_0x2da9b6['ShowAnySwitches'])){const _0x5028dc=String(RegExp['$1'])['split'](',')['map'](_0xdf5491=>Number(_0xdf5491));if(_0x5028dc['every'](_0xb9b094=>!$gameSwitches['value'](_0xb9b094)))return![];}if(_0x25a60c[_0x164f12(0x1f4)](_0x2da9b6[_0x164f12(0x27e)])){const _0x236929=String(RegExp['$1'])['split'](',')['map'](_0x527234=>Number(_0x527234));if(_0x236929['every'](_0x52e3d7=>$gameSwitches[_0x164f12(0x4b1)](_0x52e3d7)))return![];}if(_0x25a60c[_0x164f12(0x1f4)](_0x2da9b6[_0x164f12(0x3cf)])){const _0x16ba7c=String(RegExp['$1'])[_0x164f12(0x3a2)](',')[_0x164f12(0x3ca)](_0x81545a=>Number(_0x81545a));if(_0x16ba7c[_0x164f12(0x487)](_0x56d569=>$gameSwitches['value'](_0x56d569)))return![];}return!![];},Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x359)]=function(_0x4b7c61){const _0x342fa6=_0x1149b0;this[_0x342fa6(0x289)]();const _0x25051d=this[_0x342fa6(0x47b)](_0x4b7c61),_0x2df7f1=this['itemLineRect'](_0x4b7c61),_0x2bf2c8=_0x2df7f1[_0x342fa6(0x241)];this['changePaintOpacity'](this[_0x342fa6(0x556)](_0x25051d)),this[_0x342fa6(0x249)](_0x25051d,_0x2df7f1['x'],_0x2df7f1['y'],_0x2bf2c8),this[_0x342fa6(0x396)](_0x25051d,_0x2df7f1),this[_0x342fa6(0x1ef)](!![]);},Window_ShopBuy[_0x1149b0(0x491)][_0x1149b0(0x396)]=function(_0x200e4d,_0x32190a){const _0x509ebc=_0x1149b0,_0x5f0e0e=this[_0x509ebc(0x494)](_0x200e4d);this[_0x509ebc(0x1ad)](_0x5f0e0e,TextManager[_0x509ebc(0x3bd)],_0x32190a['x'],_0x32190a['y'],_0x32190a[_0x509ebc(0x241)]);},Window_ShopSell[_0x1149b0(0x491)][_0x1149b0(0x47c)]=function(){const _0x5dd00d=_0x1149b0;return SceneManager[_0x5dd00d(0x4ec)][_0x5dd00d(0x1cd)]()?0x1:0x2;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x1b1)]=Window_ShopSell[_0x1149b0(0x491)]['isEnabled'],Window_ShopSell['prototype']['isEnabled']=function(_0x5b7b0d){const _0x548342=_0x1149b0;if(!_0x5b7b0d)return![];const _0x45659f=_0x5b7b0d[_0x548342(0x1a6)];if(_0x45659f[_0x548342(0x1f4)](/<CANNOT SELL>/i))return![];if(_0x45659f[_0x548342(0x1f4)](/<CAN SELL>/i))return!![];if(_0x45659f[_0x548342(0x1f4)](/<CANNOT SELL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x15e286=JSON['parse']('['+RegExp['$1'][_0x548342(0x1f4)](/\d+/g)+']');for(const _0x4e54ae of _0x15e286){if(!$gameSwitches[_0x548342(0x4b1)](_0x4e54ae))return![];}}if(_0x45659f[_0x548342(0x1f4)](/<CANNOT SELL ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x1063c0=JSON[_0x548342(0x17d)]('['+RegExp['$1'][_0x548342(0x1f4)](/\d+/g)+']');for(const _0x50b93b of _0x1063c0){if(!$gameSwitches[_0x548342(0x4b1)](_0x50b93b))return![];}}if(_0x45659f[_0x548342(0x1f4)](/<CANNOT SELL ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(\d+(?:\s*,\s*\d+)*)>/i)){const _0x431a5d=JSON[_0x548342(0x17d)]('['+RegExp['$1'][_0x548342(0x1f4)](/\d+/g)+']');for(const _0x23ca23 of _0x431a5d){if($gameSwitches[_0x548342(0x4b1)](_0x23ca23))return![];}}return VisuMZ['ItemsEquipsCore'][_0x548342(0x1b1)][_0x548342(0x50b)](this,_0x5b7b0d);},Window_ShopStatus[_0x1149b0(0x2c9)]=VisuMZ['ItemsEquipsCore'][_0x1149b0(0x3ad)]['StatusWindow']['EquipDelayMS']??0xf0,VisuMZ['ItemsEquipsCore'][_0x1149b0(0x208)]=Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x4b3)],Window_ShopStatus[_0x1149b0(0x491)]['setItem']=function(_0x5500b5){const _0xf8dc6a=_0x1149b0;_0x5500b5=DataManager[_0xf8dc6a(0x48f)](_0x5500b5),DataManager[_0xf8dc6a(0x3b9)](_0x5500b5)||DataManager[_0xf8dc6a(0x23f)](_0x5500b5)?this[_0xf8dc6a(0x2af)](_0x5500b5):VisuMZ[_0xf8dc6a(0x2f6)][_0xf8dc6a(0x208)]['call'](this,_0x5500b5);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x2af)]=function(_0x4388f0){const _0x2efbdf=_0x1149b0;this[_0x2efbdf(0x219)]=_0x4388f0;const _0x17ea78=Window_ShopStatus['EQUIP_DELAY_MS'];setTimeout(this['refreshDelay']['bind'](this,_0x4388f0),_0x17ea78);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x2a9)]=function(_0x43d8be){const _0x16cabf=_0x1149b0;this[_0x16cabf(0x219)]===_0x43d8be&&this[_0x16cabf(0x518)]();},Window_ShopStatus[_0x1149b0(0x491)]['isPageChangeRequested']=function(){return![];},Window_ShopStatus['prototype'][_0x1149b0(0x1a7)]=function(){const _0x153801=_0x1149b0;Window_StatusBase[_0x153801(0x491)][_0x153801(0x1a7)][_0x153801(0x50b)](this);for(const _0xe8a7c of $gameParty[_0x153801(0x509)]()){ImageManager['loadCharacter'](_0xe8a7c[_0x153801(0x4be)]());}},Window_ShopStatus['prototype']['translucentOpacity']=function(){const _0x6806bf=_0x1149b0;return VisuMZ['ItemsEquipsCore']['Settings']['StatusWindow'][_0x6806bf(0x2ed)];},Window_ShopStatus[_0x1149b0(0x491)]['refresh']=function(){const _0x145048=_0x1149b0;this[_0x145048(0x482)][_0x145048(0x375)](),this[_0x145048(0x23d)][_0x145048(0x375)](),this[_0x145048(0x219)]&&(this['resetFontSettings'](),this[_0x145048(0x1ef)](!![]),this[_0x145048(0x46f)](),this[_0x145048(0x4b7)]()?this[_0x145048(0x4e2)]():this['drawItemData'](),this['drawCustomShopGraphic']());},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x272)]=function(_0x3431a5,_0x80edad){const _0x22122e=_0x1149b0;if(!this['isEquipItem']()&&!DataManager['isItem'](this[_0x22122e(0x219)]))return;const _0x2c7391=this[_0x22122e(0x18a)]-this[_0x22122e(0x443)]()-_0x3431a5,_0x107fa8=this['textWidth'](_0x22122e(0x54e));this[_0x22122e(0x3e5)](ColorManager[_0x22122e(0x225)]()),this[_0x22122e(0x28e)](TextManager[_0x22122e(0x196)],_0x3431a5+this[_0x22122e(0x443)](),_0x80edad,_0x2c7391-_0x107fa8),this['resetTextColor'](),this[_0x22122e(0x28b)](this['_item'],_0x3431a5,_0x80edad,_0x2c7391);},Window_ShopStatus[_0x1149b0(0x491)]['drawItemDarkRect']=function(_0x158b87,_0x49c59c,_0x4b4996,_0x500915,_0x4fc387){const _0x2cce1e=_0x1149b0;if(VisuMZ[_0x2cce1e(0x2f6)]['Settings'][_0x2cce1e(0x1c9)]['DrawBackRect']===![])return;_0x4fc387=Math['max'](_0x4fc387||0x1,0x1);while(_0x4fc387--){_0x500915=_0x500915||this[_0x2cce1e(0x1b8)](),this['contentsBack'][_0x2cce1e(0x514)]=0xa0;const _0x158b99=ColorManager[_0x2cce1e(0x2f1)]();this[_0x2cce1e(0x23d)]['fillRect'](_0x158b87+0x1,_0x49c59c+0x1,_0x4b4996-0x2,_0x500915-0x2,_0x158b99),this[_0x2cce1e(0x23d)][_0x2cce1e(0x514)]=0xff;}},ColorManager[_0x1149b0(0x2f1)]=function(){const _0x11051d=_0x1149b0,_0x574e45=VisuMZ['ItemsEquipsCore'][_0x11051d(0x3ad)]['StatusWindow'];let _0x19e326=_0x574e45['BackRectColor']!==undefined?_0x574e45[_0x11051d(0x406)]:0x13;return ColorManager[_0x11051d(0x189)](_0x19e326);},Window_ShopStatus['prototype'][_0x1149b0(0x4e2)]=function(){const _0x42f431=_0x1149b0;this[_0x42f431(0x33d)]=null;if(VisuMZ[_0x42f431(0x2f6)][_0x42f431(0x3ad)][_0x42f431(0x1c9)][_0x42f431(0x496)]){VisuMZ[_0x42f431(0x2f6)]['Settings'][_0x42f431(0x1c9)][_0x42f431(0x496)][_0x42f431(0x50b)](this);return;}const _0x10c964=this[_0x42f431(0x1b8)](),_0x1d8ac7=this['gaugeLineHeight']()+0x8;let _0x1ea68b=0x0,_0x54813c=0x0,_0x2aaa51=this[_0x42f431(0x18a)],_0x486d1a=this['innerHeight'],_0xfd39fd=Math[_0x42f431(0x271)](_0x2aaa51/0x2),_0x2cf84b=_0x1ea68b+_0x2aaa51-_0xfd39fd;this['drawItemName'](this[_0x42f431(0x219)],_0x1ea68b+this[_0x42f431(0x443)](),_0x54813c,_0x2aaa51-this['itemPadding']()*0x2),this['drawItemDarkRect'](_0x1ea68b,_0x54813c,_0x2aaa51),_0x54813c+=_0x10c964;if(this[_0x42f431(0x2a0)](_0x1ea68b,_0x54813c,_0xfd39fd))_0x54813c+=0x0;if(this[_0x42f431(0x402)](_0x2cf84b,_0x54813c,_0xfd39fd))_0x54813c+=_0x10c964;const _0xbea9bb=this[_0x42f431(0x346)](),_0xe0bab=_0x54813c;_0x54813c=_0x486d1a-_0xbea9bb[_0x42f431(0x16d)]*_0x1d8ac7-0x4;let _0xbc849c=_0x1ea68b,_0x407dd9=0x0,_0x26d25d=_0x54813c;for(const _0x1dd37d of _0xbea9bb){_0x407dd9=Math[_0x42f431(0x54c)](this[_0x42f431(0x314)](_0x1dd37d,_0x1ea68b+0x4,_0x54813c+0x4,_0x2aaa51),_0x407dd9),_0x54813c+=_0x1d8ac7;}const _0x1c2d55=$gameParty[_0x42f431(0x153)](),_0x27b7df=Math[_0x42f431(0x271)]((_0x2aaa51-_0x407dd9)/_0x1c2d55);_0x407dd9=_0x2aaa51-_0x27b7df*_0x1c2d55;for(const _0x356963 of $gameParty[_0x42f431(0x449)]()){const _0x56a0d6=$gameParty['battleMembers']()[_0x42f431(0x23e)](_0x356963),_0x1dc331=_0xbc849c+_0x407dd9+_0x56a0d6*_0x27b7df;this[_0x42f431(0x1ef)](_0x356963[_0x42f431(0x2a4)](this[_0x42f431(0x219)])),this[_0x42f431(0x279)](_0x356963,_0x1dc331+_0x27b7df/0x2,_0x26d25d);let _0x53fbf0=_0x26d25d;for(const _0x187cef of _0xbea9bb){const _0x39b7cb=_0x53fbf0-(_0x10c964-_0x1d8ac7)/0x2;this[_0x42f431(0x48e)](_0x356963,_0x187cef,_0x1dc331,_0x39b7cb,_0x27b7df),_0x53fbf0+=_0x1d8ac7;}}this['drawItemDarkRect'](_0xbc849c,_0xe0bab,_0x407dd9,_0x26d25d-_0xe0bab);for(let _0x4a5173=0x0;_0x4a5173<_0x1c2d55;_0x4a5173++){const _0x32bace=_0xbc849c+_0x407dd9+_0x4a5173*_0x27b7df;this['drawItemDarkRect'](_0x32bace,_0xe0bab,_0x27b7df,_0x26d25d-_0xe0bab);}for(const _0x2b8bfd of _0xbea9bb){this[_0x42f431(0x43e)](_0xbc849c,_0x26d25d,_0x407dd9,_0x1d8ac7);for(let _0x5a3b82=0x0;_0x5a3b82<_0x1c2d55;_0x5a3b82++){const _0x3fa13d=_0xbc849c+_0x407dd9+_0x5a3b82*_0x27b7df;this[_0x42f431(0x43e)](_0x3fa13d,_0x26d25d,_0x27b7df,_0x1d8ac7);}_0x26d25d+=_0x1d8ac7;}},Window_ShopStatus[_0x1149b0(0x491)]['drawItemEquipType']=function(_0x15fe44,_0x4ad0fd,_0x2fb43a){const _0x108273=_0x1149b0;if(!this['isEquipItem']())return![];const _0xd08004=$dataSystem[_0x108273(0x25d)][this[_0x108273(0x219)][_0x108273(0x55b)]];return this['drawItemKeyData'](_0xd08004,_0x15fe44,_0x4ad0fd,_0x2fb43a,!![]),this[_0x108273(0x43e)](_0x15fe44,_0x4ad0fd,_0x2fb43a),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x460)]=function(){const _0x4a9a72=_0x1149b0,_0xca27fe=VisuMZ[_0x4a9a72(0x2f6)][_0x4a9a72(0x3ad)][_0x4a9a72(0x4d0)][_0x4a9a72(0x548)];return _0xca27fe['format']($gameParty[_0x4a9a72(0x1b2)](this['_item']));},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x346)]=function(){const _0x38bcc9=_0x1149b0;let _0x2a3641=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7];return Imported['VisuMZ_0_CoreEngine']&&(_0x2a3641=VisuMZ[_0x38bcc9(0x49d)][_0x38bcc9(0x3ad)]['Param']['ExtDisplayedParams']),_0x2a3641=_0x2a3641[_0x38bcc9(0x3ca)](_0x2f8b5d=>typeof _0x2f8b5d===_0x38bcc9(0x19c)?_0x2f8b5d:_0x2f8b5d['toUpperCase']()[_0x38bcc9(0x36f)]()),_0x2a3641;},Window_ShopStatus['prototype']['smallParamFontSize']=function(){const _0x1eace9=_0x1149b0;return VisuMZ['ItemsEquipsCore']['Settings'][_0x1eace9(0x1c9)][_0x1eace9(0x15e)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x314)]=function(_0x18bd2e,_0x140a74,_0x1671af,_0x26c639){const _0xad5b1e=_0x1149b0;this[_0xad5b1e(0x289)](),this[_0xad5b1e(0x482)][_0xad5b1e(0x182)]=this[_0xad5b1e(0x504)]();let _0x2dda2c=this['textWidth'](TextManager[_0xad5b1e(0x483)](_0x18bd2e))+0x4+_0x140a74;return Imported['VisuMZ_0_CoreEngine']?(this[_0xad5b1e(0x230)](_0x140a74,_0x1671af,_0x26c639,_0x18bd2e,!![]),VisuMZ[_0xad5b1e(0x49d)][_0xad5b1e(0x3ad)][_0xad5b1e(0x209)][_0xad5b1e(0x16c)]&&(_0x2dda2c+=ImageManager[_0xad5b1e(0x226)]+0x4)):(this[_0xad5b1e(0x3e5)](ColorManager[_0xad5b1e(0x225)]()),this['drawText'](TextManager[_0xad5b1e(0x483)](_0x18bd2e),_0x140a74,_0x1671af,_0x26c639)),this[_0xad5b1e(0x289)](),_0x2dda2c;},Window_ShopStatus['prototype']['drawActorParamDifference']=function(_0x14bece,_0x4f8e5f,_0x3dc995,_0x4e7ca8,_0x327db5){const _0x3347fb=_0x1149b0;_0x3dc995+=this[_0x3347fb(0x443)](),_0x327db5-=this[_0x3347fb(0x443)]()*0x2;const _0x372bf9=VisuMZ[_0x3347fb(0x2f6)][_0x3347fb(0x3ad)][_0x3347fb(0x1c9)];this[_0x3347fb(0x482)]['fontSize']=_0x372bf9['ParamChangeFontSize'],this[_0x3347fb(0x1ef)](_0x14bece[_0x3347fb(0x2a4)](this[_0x3347fb(0x219)]));if(_0x14bece[_0x3347fb(0x344)](this[_0x3347fb(0x219)])&&!_0x14bece['anyEmptyEquipSlotsOfSameEtype'](this[_0x3347fb(0x219)])){const _0x45c5d2=_0x372bf9[_0x3347fb(0x488)];this[_0x3347fb(0x28e)](_0x45c5d2,_0x3dc995,_0x4e7ca8,_0x327db5,_0x3347fb(0x2e8));}else{if(_0x14bece[_0x3347fb(0x2a4)](this[_0x3347fb(0x219)])){const _0x100ca5=this['createTempActorEquips'](_0x14bece);let _0x225d03=0x0,_0x298eec=0x0,_0x5bb8a6=0x0;Imported[_0x3347fb(0x1e5)]?(_0x225d03=_0x100ca5['paramValueByName'](_0x4f8e5f),_0x298eec=_0x225d03-_0x14bece['paramValueByName'](_0x4f8e5f),this['changeTextColor'](ColorManager[_0x3347fb(0x4c2)](_0x298eec)),_0x5bb8a6=(_0x298eec>=0x0?'+':'')+VisuMZ[_0x3347fb(0x30f)](_0x298eec,0x0,_0x4f8e5f)):(_0x225d03=_0x100ca5[_0x3347fb(0x483)](_0x4f8e5f),_0x298eec=_0x225d03-_0x14bece[_0x3347fb(0x483)](_0x4f8e5f),this[_0x3347fb(0x3e5)](ColorManager[_0x3347fb(0x4c2)](_0x298eec)),_0x5bb8a6=(_0x298eec>=0x0?'+':'')+_0x298eec),_0x5bb8a6==='+0'&&(_0x5bb8a6=_0x372bf9[_0x3347fb(0x3ea)]),this[_0x3347fb(0x28e)](_0x5bb8a6,_0x3dc995,_0x4e7ca8,_0x327db5,_0x3347fb(0x2e8));}else{const _0x1d4f11=_0x372bf9['CannotEquipMarker'];this[_0x3347fb(0x28e)](_0x1d4f11,_0x3dc995,_0x4e7ca8,_0x327db5,'center');}}this[_0x3347fb(0x289)](),this['changePaintOpacity'](!![]);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x1e6)]=function(_0xe6b166){const _0x402bd8=_0x1149b0;if(this['needsNewTempActor'](_0xe6b166)){const _0x485bd4=JsonEx[_0x402bd8(0x4ee)](_0xe6b166);_0x485bd4[_0x402bd8(0x33d)]=!![];const _0x3cb18e=_0x485bd4[_0x402bd8(0x35f)](this['_item']);_0x3cb18e>=0x0&&_0x485bd4[_0x402bd8(0x525)](_0x3cb18e,this[_0x402bd8(0x219)]),this[_0x402bd8(0x33d)]=_0x485bd4;}return this[_0x402bd8(0x33d)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x28d)]=function(_0x56bef6){const _0x51b8fe=_0x1149b0;if(!this[_0x51b8fe(0x33d)])return!![];return this[_0x51b8fe(0x33d)][_0x51b8fe(0x4fd)]()!==_0x56bef6['actorId']();},Game_Actor[_0x1149b0(0x491)][_0x1149b0(0x539)]=function(_0x6589ae){const _0x4adbda=_0x1149b0;if(!_0x6589ae)return![];const _0x5ccef6=_0x6589ae[_0x4adbda(0x55b)],_0x91e495=this[_0x4adbda(0x1a9)]();for(let _0x318eed=0x0;_0x318eed<_0x91e495[_0x4adbda(0x16d)];_0x318eed++){const _0x39f5b9=_0x91e495[_0x318eed];if(_0x39f5b9!==_0x5ccef6)continue;if(!this[_0x4adbda(0x145)]()[_0x318eed])return!![];}return![];},Game_Actor[_0x1149b0(0x491)]['getEmptyEquipSlotOfSameEtype']=function(_0x508b86){const _0x1ffe5b=_0x1149b0;if(!_0x508b86)return-0x1;const _0xd37344=_0x508b86['etypeId'],_0x167e92=this['equipSlots']();let _0x301a1d=-0x1;for(let _0x2138c3=0x0;_0x2138c3<_0x167e92[_0x1ffe5b(0x16d)];_0x2138c3++){const _0x31050b=_0x167e92[_0x2138c3];if(_0x31050b!==_0xd37344)continue;if(!this[_0x1ffe5b(0x145)]()[_0x2138c3])return _0x2138c3;if(_0x301a1d<0x0)_0x301a1d=_0x2138c3;}return _0x301a1d;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x294)]=function(){const _0x246045=_0x1149b0;VisuMZ[_0x246045(0x2f6)][_0x246045(0x3ad)]['StatusWindow'][_0x246045(0x547)][_0x246045(0x50b)](this);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x249)]=function(_0x143ac6,_0x17d9a1,_0x2e458d,_0x14147a){const _0xae5aba=_0x1149b0,_0x4dd3fe=DataManager[_0xae5aba(0x2c0)](_0x143ac6,_0x17d9a1,_0x2e458d,_0x14147a)&&Imported[_0xae5aba(0x321)],_0x157808=_0x143ac6?_0x143ac6[_0xae5aba(0x20b)]:'';if(_0x4dd3fe)Window_SkillList[_0xae5aba(0x491)]['alterSkillName'][_0xae5aba(0x50b)](this,_0x143ac6);Window_Base[_0xae5aba(0x491)][_0xae5aba(0x249)][_0xae5aba(0x50b)](this,_0x143ac6,_0x17d9a1,_0x2e458d,_0x14147a);if(_0x4dd3fe)_0x143ac6[_0xae5aba(0x20b)]=_0x157808;},Window_ShopStatus['prototype'][_0x1149b0(0x46f)]=function(){const _0x3e9fc2=_0x1149b0;this[_0x3e9fc2(0x4f1)]={};if(!this[_0x3e9fc2(0x219)])return;const _0x2337a1=this[_0x3e9fc2(0x219)]['note'];if(_0x2337a1['match'](/<STATUS INFO>\s*([\s\S]*)\s*<\/STATUS INFO>/i)){const _0x545d2b=String(RegExp['$1'])[_0x3e9fc2(0x3a2)](/[\r\n]+/);for(const _0x4e4bb8 of _0x545d2b){if(_0x4e4bb8[_0x3e9fc2(0x1f4)](/(.*):[ ](.*)/i)){const _0x591a20=String(RegExp['$1'])['toUpperCase']()[_0x3e9fc2(0x36f)](),_0x2e3d9d=String(RegExp['$2'])[_0x3e9fc2(0x36f)]();this[_0x3e9fc2(0x4f1)][_0x591a20]=_0x2e3d9d;}}}},Window_ShopStatus['prototype'][_0x1149b0(0x3cd)]=function(){const _0x32203a=_0x1149b0;return Math[_0x32203a(0x54c)](0x1,$gameSystem['mainFontSize']()-0x4);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x289)]=function(){const _0x5141e0=_0x1149b0;Window_StatusBase[_0x5141e0(0x491)]['resetFontSettings'][_0x5141e0(0x50b)](this),this['contents']['fontSize']=this['_resetFontSize']||this[_0x5141e0(0x482)][_0x5141e0(0x182)],this[_0x5141e0(0x482)][_0x5141e0(0x24f)]=this[_0x5141e0(0x2b7)]||this[_0x5141e0(0x482)][_0x5141e0(0x24f)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3b1)]=function(){const _0x20423d=_0x1149b0;return this[_0x20423d(0x482)][_0x20423d(0x182)]/$gameSystem[_0x20423d(0x517)]();},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x18b)]=function(_0x5bf5fb,_0x5932ec,_0xa15516){const _0x49cbb7=_0x1149b0,_0x5c5d73=ImageManager[_0x49cbb7(0x33a)](_0x49cbb7(0x3c6)),_0x408df0=ImageManager[_0x49cbb7(0x226)],_0x215166=ImageManager[_0x49cbb7(0x38c)],_0x2601db=_0x5bf5fb%0x10*_0x408df0,_0x1bccbf=Math['floor'](_0x5bf5fb/0x10)*_0x215166,_0x467e9b=Math[_0x49cbb7(0x22e)](_0x408df0*this[_0x49cbb7(0x3b1)]()),_0x238152=Math[_0x49cbb7(0x22e)](_0x215166*this['fontSizeRatio']());this[_0x49cbb7(0x482)][_0x49cbb7(0x1b0)](_0x5c5d73,_0x2601db,_0x1bccbf,_0x408df0,_0x215166,_0x5932ec,_0xa15516,_0x467e9b,_0x238152);},Window_ShopStatus['prototype']['processDrawIcon']=function(_0x22db1f,_0x26d43b){const _0x380532=_0x1149b0;_0x26d43b[_0x380532(0x179)]&&this[_0x380532(0x18b)](_0x22db1f,_0x26d43b['x'],_0x26d43b['y']+0x2);_0x26d43b['x']+=Math['ceil'](ImageManager[_0x380532(0x226)]*this[_0x380532(0x3b1)]());if(this['fontSizeRatio']()===0x1)_0x26d43b['x']+=0x4;},Window_ShopStatus['prototype'][_0x1149b0(0x316)]=function(_0x1541d5,_0xd39ce5,_0x1d0182,_0x22eb33,_0x195179,_0x4aeecd){const _0x5f262a=_0x1149b0;_0x1541d5=_0x1541d5||'',_0x4aeecd=_0x4aeecd||'left',this['_resetFontSize']=this[_0x5f262a(0x3cd)](),this[_0x5f262a(0x2b7)]=_0x195179?ColorManager[_0x5f262a(0x225)]():this['contents'][_0x5f262a(0x24f)],_0xd39ce5+=this[_0x5f262a(0x443)](),_0x22eb33-=this[_0x5f262a(0x443)]()*0x2;const _0x335f70=this[_0x5f262a(0x15c)](_0x1541d5);if(_0x4aeecd===_0x5f262a(0x2e8))_0xd39ce5=_0xd39ce5+Math[_0x5f262a(0x271)]((_0x22eb33-_0x335f70[_0x5f262a(0x241)])/0x2);else _0x4aeecd===_0x5f262a(0x21c)&&(_0xd39ce5=_0xd39ce5+_0x22eb33-_0x335f70[_0x5f262a(0x241)]);_0x1d0182+=(this['lineHeight']()-_0x335f70['height'])/0x2,this[_0x5f262a(0x2b8)](_0x1541d5,_0xd39ce5,_0x1d0182,_0x22eb33),this[_0x5f262a(0x4f9)]=undefined,this[_0x5f262a(0x2b7)]=undefined,this['resetFontSettings']();},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x4b0)]=function(_0x2ec93f,_0x384166,_0x8a0028){const _0x301624=_0x1149b0;if(!DataManager[_0x301624(0x54b)](this[_0x301624(0x219)]))return![];const _0x15c92a=this[_0x301624(0x3b3)]();this['drawItemKeyData'](_0x15c92a,_0x2ec93f,_0x384166,_0x8a0028,!![]);const _0x1554de=this[_0x301624(0x19f)]();return this[_0x301624(0x316)](_0x1554de,_0x2ec93f,_0x384166,_0x8a0028,![],'right'),this['drawItemDarkRect'](_0x2ec93f,_0x384166,_0x8a0028),this[_0x301624(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3b3)]=function(){const _0xe235dc=_0x1149b0;return VisuMZ[_0xe235dc(0x2f6)][_0xe235dc(0x3ad)]['StatusWindow'][_0xe235dc(0x2a2)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x19f)]=function(){const _0x4c15d5=_0x1149b0,_0x1ec89d=_0x4c15d5(0x25f);if(this['_customItemInfo'][_0x1ec89d])return this[_0x4c15d5(0x4f1)][_0x1ec89d];return this[_0x4c15d5(0x341)]()?VisuMZ[_0x4c15d5(0x2f6)][_0x4c15d5(0x3ad)][_0x4c15d5(0x1c9)]['Consumable']:VisuMZ[_0x4c15d5(0x2f6)][_0x4c15d5(0x3ad)][_0x4c15d5(0x1c9)]['NotConsumable'];},Window_ShopStatus[_0x1149b0(0x491)]['canConsumeItem']=function(){const _0x3b771f=_0x1149b0;return VisuMZ['CoreEngine']&&VisuMZ[_0x3b771f(0x49d)][_0x3b771f(0x3ad)][_0x3b771f(0x3d0)][_0x3b771f(0x433)]&&DataManager[_0x3b771f(0x35c)](this[_0x3b771f(0x219)])?![]:this[_0x3b771f(0x219)][_0x3b771f(0x259)];},Window_ShopStatus['prototype'][_0x1149b0(0x402)]=function(_0x7c60a6,_0x4d81b0,_0x5f2d45){const _0x2eec71=_0x1149b0;if(!this[_0x2eec71(0x4b7)]()&&!DataManager[_0x2eec71(0x54b)](this[_0x2eec71(0x219)]))return![];if(DataManager[_0x2eec71(0x35c)](this[_0x2eec71(0x219)])&&!$dataSystem[_0x2eec71(0x26d)]){const _0x309fe0=TextManager[_0x2eec71(0x1ed)];this['drawItemKeyData'](_0x309fe0,_0x7c60a6,_0x4d81b0,_0x5f2d45,!![],'center');}else{const _0x128094=TextManager[_0x2eec71(0x196)];this[_0x2eec71(0x316)](_0x128094,_0x7c60a6,_0x4d81b0,_0x5f2d45,!![]);const _0x374fa5=this[_0x2eec71(0x460)]();this[_0x2eec71(0x316)](_0x374fa5,_0x7c60a6,_0x4d81b0,_0x5f2d45,![],'right');}return this[_0x2eec71(0x43e)](_0x7c60a6,_0x4d81b0,_0x5f2d45),this[_0x2eec71(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x460)]=function(){const _0x4e11ab=_0x1149b0,_0x4e3781=_0x4e11ab(0x489);if(this['_customItemInfo'][_0x4e3781])return this[_0x4e11ab(0x4f1)][_0x4e3781];const _0x10b016=VisuMZ[_0x4e11ab(0x2f6)][_0x4e11ab(0x3ad)][_0x4e11ab(0x4d0)][_0x4e11ab(0x548)];return _0x10b016['format']($gameParty[_0x4e11ab(0x1b2)](this['_item']));},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x358)]=function(_0x3dea3a,_0x2e555c,_0x477e2f){const _0x3e0a08=_0x1149b0,_0x19a880=this[_0x3e0a08(0x3a7)]();return this[_0x3e0a08(0x316)](_0x19a880,_0x3dea3a,_0x2e555c,_0x477e2f,![],_0x3e0a08(0x2e8)),this[_0x3e0a08(0x43e)](_0x3dea3a,_0x2e555c,_0x477e2f),this[_0x3e0a08(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)]['getItemOccasionText']=function(){const _0x2cab97=_0x1149b0,_0x4c4224=_0x2cab97(0x36d);if(this['_customItemInfo'][_0x4c4224])return this[_0x2cab97(0x4f1)][_0x4c4224];const _0xd329f5=VisuMZ[_0x2cab97(0x2f6)][_0x2cab97(0x3ad)][_0x2cab97(0x1c9)],_0x5bd41a=_0x2cab97(0x2ba)[_0x2cab97(0x2c2)](this[_0x2cab97(0x219)][_0x2cab97(0x48b)]);return _0xd329f5[_0x5bd41a];},Window_ShopStatus['prototype'][_0x1149b0(0x29a)]=function(_0x421352,_0x1fb152,_0xeaaf03){const _0x3a41be=_0x1149b0,_0x32f093=this[_0x3a41be(0x1e1)]();return this[_0x3a41be(0x316)](_0x32f093,_0x421352,_0x1fb152,_0xeaaf03,![],_0x3a41be(0x2e8)),this[_0x3a41be(0x43e)](_0x421352,_0x1fb152,_0xeaaf03),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype'][_0x1149b0(0x1e1)]=function(){const _0xf1ae34=_0x1149b0,_0x501c6b=_0xf1ae34(0x4fb);if(this[_0xf1ae34(0x4f1)][_0x501c6b])return this[_0xf1ae34(0x4f1)][_0x501c6b];const _0x1337a2=VisuMZ[_0xf1ae34(0x2f6)]['Settings'][_0xf1ae34(0x1c9)];if(Imported[_0xf1ae34(0x37c)]){const _0x133ad8=this['_item'][_0xf1ae34(0x1a6)];if(_0x133ad8[_0xf1ae34(0x1f4)](/<TARGET:[ ](.*)>/i)){const _0x203287=String(RegExp['$1']);if(_0x203287[_0xf1ae34(0x1f4)](/(\d+) RANDOM ANY/i))return _0x1337a2[_0xf1ae34(0x44f)]['format'](Number(RegExp['$1']));else{if(_0x203287[_0xf1ae34(0x1f4)](/(\d+) RANDOM (?:ENEMY|ENEMIES|FOE|FOES)/i))return _0x1337a2[_0xf1ae34(0x438)][_0xf1ae34(0x2c2)](Number(RegExp['$1']));else{if(_0x203287[_0xf1ae34(0x1f4)](/(\d+) RANDOM (?:ALLY|ALLIES|FRIEND|FRIENDS)/i))return _0x1337a2[_0xf1ae34(0x42a)][_0xf1ae34(0x2c2)](Number(RegExp['$1']));else{if(_0x203287[_0xf1ae34(0x1f4)](/ALL (?:ALLY|ALLIES|FRIEND|FRIENDS) (?:BUT|EXCEPT) (?:USER|SELF)/i))return _0x1337a2[_0xf1ae34(0x4cc)];else{if(_0x203287[_0xf1ae34(0x1f4)](/ALLY OR ENEMY/i))return _0x1337a2[_0xf1ae34(0x176)]||_0x1337a2[_0xf1ae34(0x414)];else{if(_0x203287[_0xf1ae34(0x1f4)](/ENEMY OR ALLY/i))return _0x1337a2[_0xf1ae34(0x285)]||_0x1337a2[_0xf1ae34(0x503)];}}}}}}}const _0x1041e3=_0xf1ae34(0x459)[_0xf1ae34(0x2c2)](this[_0xf1ae34(0x219)][_0xf1ae34(0x37e)]);return _0x1337a2[_0x1041e3];},Window_ShopStatus['prototype']['drawItemSpeed']=function(_0xaf124c,_0x146645,_0x2c83b0){const _0x4f2ab0=_0x1149b0,_0x457b35=this[_0x4f2ab0(0x4ab)]();this[_0x4f2ab0(0x316)](_0x457b35,_0xaf124c,_0x146645,_0x2c83b0,!![]);const _0x47cf3c=this[_0x4f2ab0(0x422)]();return this[_0x4f2ab0(0x316)](_0x47cf3c,_0xaf124c,_0x146645,_0x2c83b0,![],_0x4f2ab0(0x21c)),this[_0x4f2ab0(0x43e)](_0xaf124c,_0x146645,_0x2c83b0),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x4ab)]=function(){const _0xf44207=_0x1149b0;return VisuMZ[_0xf44207(0x2f6)]['Settings']['StatusWindow'][_0xf44207(0x284)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x422)]=function(){const _0x58b3c7=_0x1149b0,_0x59a92d=_0x58b3c7(0x310);if(this['_customItemInfo'][_0x59a92d])return this[_0x58b3c7(0x4f1)][_0x59a92d];const _0xb56a7a=this[_0x58b3c7(0x219)][_0x58b3c7(0x2f9)];if(_0xb56a7a>=0x7d0)return VisuMZ[_0x58b3c7(0x2f6)][_0x58b3c7(0x3ad)][_0x58b3c7(0x1c9)][_0x58b3c7(0x512)];else{if(_0xb56a7a>=0x3e8)return VisuMZ[_0x58b3c7(0x2f6)][_0x58b3c7(0x3ad)][_0x58b3c7(0x1c9)][_0x58b3c7(0x1c2)];else{if(_0xb56a7a>0x0)return VisuMZ[_0x58b3c7(0x2f6)]['Settings'][_0x58b3c7(0x1c9)][_0x58b3c7(0x191)];else{if(_0xb56a7a===0x0)return VisuMZ[_0x58b3c7(0x2f6)][_0x58b3c7(0x3ad)][_0x58b3c7(0x1c9)][_0x58b3c7(0x446)];else{if(_0xb56a7a>-0x3e8)return VisuMZ[_0x58b3c7(0x2f6)][_0x58b3c7(0x3ad)]['StatusWindow'][_0x58b3c7(0x3af)];else{if(_0xb56a7a>-0x7d0)return VisuMZ[_0x58b3c7(0x2f6)][_0x58b3c7(0x3ad)][_0x58b3c7(0x1c9)][_0x58b3c7(0x2dc)];else return _0xb56a7a<=-0x7d0?VisuMZ['ItemsEquipsCore']['Settings'][_0x58b3c7(0x1c9)]['SpeedNeg2000']:'?????';}}}}}},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x2da)]=function(_0x145255,_0x526717,_0x5399df){const _0x4f6cc4=_0x1149b0,_0x18bd33=this['getItemSuccessRateLabel']();this[_0x4f6cc4(0x316)](_0x18bd33,_0x145255,_0x526717,_0x5399df,!![]);const _0x3a07aa=this[_0x4f6cc4(0x26b)]();return this[_0x4f6cc4(0x316)](_0x3a07aa,_0x145255,_0x526717,_0x5399df,![],'right'),this['drawItemDarkRect'](_0x145255,_0x526717,_0x5399df),this[_0x4f6cc4(0x289)](),!![];},Window_ShopStatus['prototype'][_0x1149b0(0x4c8)]=function(){const _0x147a7a=_0x1149b0;return VisuMZ[_0x147a7a(0x2f6)][_0x147a7a(0x3ad)]['StatusWindow'][_0x147a7a(0x364)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x26b)]=function(){const _0x4144f9=_0x1149b0,_0x5100e4=_0x4144f9(0x2b1);if(this['_customItemInfo'][_0x5100e4])return this[_0x4144f9(0x4f1)][_0x5100e4];if(Imported[_0x4144f9(0x37c)]){const _0xac96b8=this['_item'][_0x4144f9(0x1a6)];if(_0xac96b8['match'](/<ALWAYS HIT>/i))return'100%';else{if(_0xac96b8[_0x4144f9(0x1f4)](/<ALWAYS HIT RATE: (\d+)([%％])>/i))return _0x4144f9(0x331)[_0x4144f9(0x2c2)](Number(RegExp['$1']));}}return _0x4144f9(0x331)[_0x4144f9(0x2c2)](this['_item'][_0x4144f9(0x4a9)]);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x33c)]=function(_0x198b92,_0x837f62,_0x5e01c4){const _0x48c90c=_0x1149b0,_0x5395dc=this[_0x48c90c(0x2a7)]();this[_0x48c90c(0x316)](_0x5395dc,_0x198b92,_0x837f62,_0x5e01c4,!![]);const _0x1e5be2=this[_0x48c90c(0x31e)]();return this[_0x48c90c(0x316)](_0x1e5be2,_0x198b92,_0x837f62,_0x5e01c4,![],_0x48c90c(0x21c)),this[_0x48c90c(0x43e)](_0x198b92,_0x837f62,_0x5e01c4),this[_0x48c90c(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x2a7)]=function(){const _0x4be8af=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x4be8af(0x3ad)][_0x4be8af(0x1c9)]['LabelRepeats'];},Window_ShopStatus['prototype']['getItemRepeatsText']=function(){const _0x32ba1a=_0x1149b0,_0x3d2506=_0x32ba1a(0x1f2);if(this['_customItemInfo'][_0x3d2506])return this['_customItemInfo'][_0x3d2506];const _0x38f600=_0x32ba1a(0x26a);return _0x38f600[_0x32ba1a(0x2c2)](this[_0x32ba1a(0x219)][_0x32ba1a(0x4a2)]);},Window_ShopStatus['prototype'][_0x1149b0(0x4e5)]=function(_0x204810,_0x5f4078,_0x1f7a8){const _0x2b8559=_0x1149b0,_0x30f7ec=this[_0x2b8559(0x317)]();this['drawItemKeyData'](_0x30f7ec,_0x204810,_0x5f4078,_0x1f7a8,!![]);const _0x2b5ef0=this[_0x2b8559(0x393)]();return this[_0x2b8559(0x316)](_0x2b5ef0,_0x204810,_0x5f4078,_0x1f7a8,![],_0x2b8559(0x21c)),this[_0x2b8559(0x43e)](_0x204810,_0x5f4078,_0x1f7a8),this[_0x2b8559(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)]['getItemHitTypeLabel']=function(){const _0x53bf1d=_0x1149b0;return VisuMZ[_0x53bf1d(0x2f6)]['Settings'][_0x53bf1d(0x1c9)][_0x53bf1d(0x253)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x393)]=function(){const _0x3a28e6=_0x1149b0,_0x571e28=_0x3a28e6(0x368);if(this[_0x3a28e6(0x4f1)][_0x571e28])return this[_0x3a28e6(0x4f1)][_0x571e28];const _0x31c35f=VisuMZ['ItemsEquipsCore'][_0x3a28e6(0x3ad)]['StatusWindow'],_0x556572='HitType%1'['format'](this[_0x3a28e6(0x219)]['hitType']);return _0x31c35f[_0x556572];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x343)]=function(_0x1ed52c,_0x504049,_0x14a0fe){const _0x18e059=_0x1149b0;if(this[_0x18e059(0x219)][_0x18e059(0x3e7)][_0x18e059(0x220)]<=0x0)return _0x504049;if(this['drawItemDamageElement'](_0x1ed52c,_0x504049,_0x14a0fe))_0x504049+=this[_0x18e059(0x1b8)]();if(this[_0x18e059(0x3dc)](_0x1ed52c,_0x504049,_0x14a0fe))_0x504049+=this[_0x18e059(0x1b8)]();return this[_0x18e059(0x289)](),_0x504049;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x2ad)]=function(_0x4989ee,_0x4e7642,_0x516467){const _0x30e411=_0x1149b0,_0x2bc274=this[_0x30e411(0x24b)]();this[_0x30e411(0x316)](_0x2bc274,_0x4989ee,_0x4e7642,_0x516467,!![]);const _0x3ae774=this[_0x30e411(0x479)]();return this[_0x30e411(0x316)](_0x3ae774,_0x4989ee,_0x4e7642,_0x516467,![],'right'),this[_0x30e411(0x43e)](_0x4989ee,_0x4e7642,_0x516467),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x24b)]=function(){const _0x476f84=_0x1149b0;return VisuMZ[_0x476f84(0x2f6)][_0x476f84(0x3ad)][_0x476f84(0x1c9)]['LabelElement'];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x479)]=function(){const _0x22adb5=_0x1149b0,_0x19edcd=_0x22adb5(0x507);if(this[_0x22adb5(0x4f1)][_0x19edcd])return this[_0x22adb5(0x4f1)][_0x19edcd];if(this[_0x22adb5(0x219)][_0x22adb5(0x3e7)][_0x22adb5(0x49a)]<=-0x1)return VisuMZ[_0x22adb5(0x2f6)][_0x22adb5(0x3ad)][_0x22adb5(0x1c9)][_0x22adb5(0x270)];else return this[_0x22adb5(0x219)][_0x22adb5(0x3e7)][_0x22adb5(0x49a)]===0x0?VisuMZ[_0x22adb5(0x2f6)][_0x22adb5(0x3ad)][_0x22adb5(0x1c9)][_0x22adb5(0x303)]:$dataSystem[_0x22adb5(0x3c1)][this[_0x22adb5(0x219)]['damage'][_0x22adb5(0x49a)]];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3dc)]=function(_0x14f8d5,_0x5cdc6f,_0x51864a){const _0x3ca6e9=_0x1149b0,_0x201454=this['getItemDamageAmountLabel']();this[_0x3ca6e9(0x316)](_0x201454,_0x14f8d5,_0x5cdc6f,_0x51864a,!![]),this[_0x3ca6e9(0x52e)]();const _0x13b96e=this['getItemDamageAmountText'](),_0x3893f7=ColorManager['damageColor']([0x0,0x0,0x2,0x1,0x3,0x1,0x3][this[_0x3ca6e9(0x219)][_0x3ca6e9(0x3e7)][_0x3ca6e9(0x220)]]);return this['changeTextColor'](_0x3893f7),this['drawItemKeyData'](_0x13b96e,_0x14f8d5,_0x5cdc6f,_0x51864a,![],_0x3ca6e9(0x21c)),this[_0x3ca6e9(0x43e)](_0x14f8d5,_0x5cdc6f,_0x51864a),this[_0x3ca6e9(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3a1)]=function(){const _0x397fe8=_0x1149b0;return Imported['VisuMZ_1_BattleCore']&&DataManager['getDamageStyle'](this['_item'])!==_0x397fe8(0x347)?this[_0x397fe8(0x4d9)]():this[_0x397fe8(0x530)]();},Window_ShopStatus[_0x1149b0(0x491)]['getItemDamageAmountLabelOriginal']=function(){const _0x5f0556=_0x1149b0,_0x29e5a6=VisuMZ[_0x5f0556(0x2f6)]['Settings'][_0x5f0556(0x1c9)],_0x31b4a4='DamageType%1'[_0x5f0556(0x2c2)](this[_0x5f0556(0x219)][_0x5f0556(0x3e7)]['type']),_0x5623d9=[null,TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp'],TextManager['hp'],TextManager['mp']][this['_item']['damage'][_0x5f0556(0x220)]];return _0x29e5a6[_0x31b4a4]['format'](_0x5623d9);},Window_ShopStatus[_0x1149b0(0x491)]['setupItemDamageTempActors']=function(){const _0x4c2015=_0x1149b0,_0x572621=$gameActors['actor'](0x1);this[_0x4c2015(0x345)]=JsonEx[_0x4c2015(0x4ee)](_0x572621),this[_0x4c2015(0x15a)]=JsonEx[_0x4c2015(0x4ee)](_0x572621);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x17f)]=function(){const _0x2c1e72=_0x1149b0,_0x4894c0=_0x2c1e72(0x51d);if(this[_0x2c1e72(0x4f1)][_0x4894c0])return this[_0x2c1e72(0x4f1)][_0x4894c0];return Imported['VisuMZ_1_BattleCore']&&DataManager[_0x2c1e72(0x20a)](this[_0x2c1e72(0x219)])!==_0x2c1e72(0x347)?this['getItemDamageAmountTextBattleCore']():this[_0x2c1e72(0x4ea)]();},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x4ea)]=function(){const _0x7242b5=_0x1149b0;window['a']=this['_tempActorA'],window['b']=this[_0x7242b5(0x15a)],this[_0x7242b5(0x345)]['setShopStatusWindowMode'](!![]),this[_0x7242b5(0x15a)][_0x7242b5(0x4c7)]([0x3,0x4][_0x7242b5(0x46c)](this['_item'][_0x7242b5(0x3e7)][_0x7242b5(0x220)]));let _0x2b5997=this[_0x7242b5(0x219)][_0x7242b5(0x3e7)]['formula'];try{const _0x52886c=Math[_0x7242b5(0x54c)](eval(_0x2b5997),0x0)/window['a'][_0x7242b5(0x20d)];return this[_0x7242b5(0x3c2)](),isNaN(_0x52886c)?_0x7242b5(0x4ae):'%1%'[_0x7242b5(0x2c2)](Math[_0x7242b5(0x2d7)](_0x52886c*0x64));}catch(_0x3c7e24){return $gameTemp['isPlaytest']()&&(console[_0x7242b5(0x38b)](_0x7242b5(0x247)[_0x7242b5(0x2c2)](this['_item'][_0x7242b5(0x20b)])),console['log'](_0x3c7e24)),this[_0x7242b5(0x3c2)](),_0x7242b5(0x4ae);}},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3c2)]=function(){window['a']=undefined,window['b']=undefined;},Window_ShopStatus['prototype'][_0x1149b0(0x3c4)]=function(_0x247257,_0x18b95e,_0x461c1b){const _0x7b82ce=_0x1149b0;if(!this['makeItemData']())return _0x18b95e;if(this[_0x7b82ce(0x3f2)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this[_0x7b82ce(0x40b)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this['drawItemEffectsTpRecovery'](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this[_0x7b82ce(0x563)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this['lineHeight']();if(this['drawItemEffectsMpDamage'](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this[_0x7b82ce(0x24c)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this['lineHeight']();if(this['drawItemEffectsSelfTpGain'](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this[_0x7b82ce(0x33b)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();if(this[_0x7b82ce(0x545)](_0x247257,_0x18b95e,_0x461c1b))_0x18b95e+=this[_0x7b82ce(0x1b8)]();return this[_0x7b82ce(0x289)](),_0x18b95e;},Window_ShopStatus['prototype'][_0x1149b0(0x149)]=function(){const _0x122c69=_0x1149b0;return this[_0x122c69(0x219)][_0x122c69(0x455)];},Window_ShopStatus[_0x1149b0(0x491)]['makeItemData']=function(){const _0x4f47b3=_0x1149b0;let _0x2444bc=![];this[_0x4f47b3(0x435)]={'rateHP':0x0,'flatHP':0x0,'rateMP':0x0,'flatMP':0x0,'gainTP':0x0,'selfTP':0x0,'addState':[],'removeState':[],'changeBuff':[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],'removeBuff':[],'removeDebuff':[],'addStateBuffChanges':![],'removeStateBuffChanges':![]};const _0x522904=this[_0x4f47b3(0x149)]();for(const _0x3a9f86 of _0x522904){switch(_0x3a9f86[_0x4f47b3(0x397)]){case Game_Action[_0x4f47b3(0x16e)]:this[_0x4f47b3(0x435)][_0x4f47b3(0x336)]+=_0x3a9f86[_0x4f47b3(0x541)],this[_0x4f47b3(0x435)][_0x4f47b3(0x3bf)]+=_0x3a9f86['value2'],_0x2444bc=!![];break;case Game_Action[_0x4f47b3(0x21f)]:this[_0x4f47b3(0x435)]['rateMP']+=_0x3a9f86[_0x4f47b3(0x541)],this[_0x4f47b3(0x435)][_0x4f47b3(0x2ab)]+=_0x3a9f86[_0x4f47b3(0x3f9)],_0x2444bc=!![];break;case Game_Action[_0x4f47b3(0x551)]:this[_0x4f47b3(0x435)][_0x4f47b3(0x2e0)]+=_0x3a9f86['value1'],_0x2444bc=!![];break;case Game_Action[_0x4f47b3(0x27b)]:this[_0x4f47b3(0x435)]['addState']['push'](_0x3a9f86[_0x4f47b3(0x1ce)]),_0x2444bc=!![];break;case Game_Action['EFFECT_REMOVE_STATE']:this[_0x4f47b3(0x435)]['removeState'][_0x4f47b3(0x2d8)](_0x3a9f86['dataId']),this[_0x4f47b3(0x435)][_0x4f47b3(0x555)]=!![],_0x2444bc=!![];break;case Game_Action[_0x4f47b3(0x266)]:this[_0x4f47b3(0x435)][_0x4f47b3(0x51e)][_0x3a9f86[_0x4f47b3(0x1ce)]]+=0x1,_0x2444bc=!![];break;case Game_Action['EFFECT_ADD_DEBUFF']:this[_0x4f47b3(0x435)][_0x4f47b3(0x51e)][_0x3a9f86[_0x4f47b3(0x1ce)]]-=0x1,_0x2444bc=!![];break;case Game_Action[_0x4f47b3(0x33f)]:this[_0x4f47b3(0x435)][_0x4f47b3(0x3c3)][_0x4f47b3(0x2d8)](_0x3a9f86[_0x4f47b3(0x1ce)]),this[_0x4f47b3(0x435)][_0x4f47b3(0x555)]=!![],_0x2444bc=!![];break;case Game_Action['EFFECT_REMOVE_DEBUFF']:this[_0x4f47b3(0x435)][_0x4f47b3(0x3db)][_0x4f47b3(0x2d8)](_0x3a9f86['dataId']),this[_0x4f47b3(0x435)][_0x4f47b3(0x555)]=!![],_0x2444bc=!![];break;}}if(this[_0x4f47b3(0x435)][_0x4f47b3(0x532)][_0x4f47b3(0x16d)]>0x0)this[_0x4f47b3(0x435)][_0x4f47b3(0x520)]=!![];for(let _0x428b21=0x0;_0x428b21<this[_0x4f47b3(0x435)][_0x4f47b3(0x51e)]['length'];_0x428b21++){if(this[_0x4f47b3(0x435)]['changeBuff'][_0x428b21]!==0x0)this[_0x4f47b3(0x435)][_0x4f47b3(0x520)]=!![];}this[_0x4f47b3(0x219)][_0x4f47b3(0x30b)]!==0x0&&(this[_0x4f47b3(0x435)]['selfTP']=this[_0x4f47b3(0x219)][_0x4f47b3(0x30b)],_0x2444bc=!![]);const _0x392d87=[_0x4f47b3(0x416),_0x4f47b3(0x295),_0x4f47b3(0x4e9),_0x4f47b3(0x2ce),_0x4f47b3(0x1a1),_0x4f47b3(0x169),_0x4f47b3(0x4f5),'ADDED\x20EFFECTS','REMOVED\x20EFFECTS'];for(const _0x4940a9 of _0x392d87){if(this['_customItemInfo'][_0x4940a9]){_0x2444bc=!![];break;}}return _0x2444bc;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3f2)]=function(_0x52168f,_0x54f0cb,_0x400e71){const _0xda7b0b=_0x1149b0,_0x530b0a=_0xda7b0b(0x416);if(this['_itemData'][_0xda7b0b(0x336)]<=0x0&&this[_0xda7b0b(0x435)][_0xda7b0b(0x3bf)]<=0x0&&!this[_0xda7b0b(0x4f1)][_0x530b0a])return![];const _0x31792c=this['getItemEffectsHpRecoveryLabel']();this['drawItemKeyData'](_0x31792c,_0x52168f,_0x54f0cb,_0x400e71,!![]);const _0x38017f=this[_0xda7b0b(0x2be)]();return this[_0xda7b0b(0x3e5)](ColorManager['damageColor'](0x1)),this['drawItemKeyData'](_0x38017f,_0x52168f,_0x54f0cb,_0x400e71,![],_0xda7b0b(0x21c)),this[_0xda7b0b(0x43e)](_0x52168f,_0x54f0cb,_0x400e71),this[_0xda7b0b(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x461)]=function(){const _0x45c084=_0x1149b0,_0x1fd92a=VisuMZ[_0x45c084(0x2f6)][_0x45c084(0x3ad)]['StatusWindow'][_0x45c084(0x2ac)];return _0x1fd92a[_0x45c084(0x2c2)](TextManager['hp']);},Window_ShopStatus['prototype'][_0x1149b0(0x2be)]=function(){const _0xd1d401=_0x1149b0,_0x288f3d=_0xd1d401(0x416);if(this[_0xd1d401(0x4f1)][_0x288f3d])return this[_0xd1d401(0x4f1)][_0x288f3d];let _0x5865ef='';if(this[_0xd1d401(0x435)][_0xd1d401(0x336)]>0x0)_0x5865ef+=_0xd1d401(0x2aa)[_0xd1d401(0x2c2)](Math[_0xd1d401(0x271)](this[_0xd1d401(0x435)][_0xd1d401(0x336)]*0x64));if(this[_0xd1d401(0x435)]['rateHP']>0x0&&this[_0xd1d401(0x435)]['flatHP']>0x0)_0x5865ef+='\x20';if(this[_0xd1d401(0x435)][_0xd1d401(0x3bf)]>0x0)_0x5865ef+=_0xd1d401(0x245)[_0xd1d401(0x2c2)](this[_0xd1d401(0x435)][_0xd1d401(0x3bf)]);return _0x5865ef;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x40b)]=function(_0x53be69,_0x405a82,_0x328f8e){const _0x4ba70b=_0x1149b0,_0x3ea626=_0x4ba70b(0x295);if(this[_0x4ba70b(0x435)]['rateMP']<=0x0&&this[_0x4ba70b(0x435)]['flatMP']<=0x0&&!this[_0x4ba70b(0x4f1)][_0x3ea626])return![];const _0x3cd069=this[_0x4ba70b(0x388)]();this[_0x4ba70b(0x316)](_0x3cd069,_0x53be69,_0x405a82,_0x328f8e,!![]);const _0x12cda1=this['getItemEffectsMpRecoveryText']();return this['changeTextColor'](ColorManager[_0x4ba70b(0x3aa)](0x3)),this[_0x4ba70b(0x316)](_0x12cda1,_0x53be69,_0x405a82,_0x328f8e,![],_0x4ba70b(0x21c)),this[_0x4ba70b(0x43e)](_0x53be69,_0x405a82,_0x328f8e),this[_0x4ba70b(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x388)]=function(){const _0x357f9f=_0x1149b0,_0x3a8fda=VisuMZ[_0x357f9f(0x2f6)][_0x357f9f(0x3ad)]['StatusWindow'][_0x357f9f(0x25b)];return _0x3a8fda['format'](TextManager['mp']);},Window_ShopStatus[_0x1149b0(0x491)]['getItemEffectsMpRecoveryText']=function(){const _0x54fffd=_0x1149b0,_0xaa73d=_0x54fffd(0x295);if(this[_0x54fffd(0x4f1)][_0xaa73d])return this[_0x54fffd(0x4f1)][_0xaa73d];let _0x4528c3='';if(this['_itemData'][_0x54fffd(0x472)]>0x0)_0x4528c3+=_0x54fffd(0x2aa)['format'](Math['floor'](this[_0x54fffd(0x435)]['rateMP']*0x64));if(this[_0x54fffd(0x435)][_0x54fffd(0x472)]>0x0&&this[_0x54fffd(0x435)][_0x54fffd(0x2ab)]>0x0)_0x4528c3+='\x20';if(this[_0x54fffd(0x435)][_0x54fffd(0x2ab)]>0x0)_0x4528c3+=_0x54fffd(0x245)[_0x54fffd(0x2c2)](this[_0x54fffd(0x435)][_0x54fffd(0x2ab)]);return _0x4528c3;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x26c)]=function(_0x7a9a8,_0xe03cfc,_0x5277dd){const _0x2ca4c1=_0x1149b0,_0x5c01ee=_0x2ca4c1(0x4e9);if(this[_0x2ca4c1(0x435)][_0x2ca4c1(0x2e0)]<=0x0&&!this[_0x2ca4c1(0x4f1)][_0x5c01ee])return![];const _0x5e9854=this['getItemEffectsTpRecoveryLabel']();this['drawItemKeyData'](_0x5e9854,_0x7a9a8,_0xe03cfc,_0x5277dd,!![]);const _0x303cba=this[_0x2ca4c1(0x53c)]();return this[_0x2ca4c1(0x3e5)](ColorManager['powerUpColor']()),this[_0x2ca4c1(0x316)](_0x303cba,_0x7a9a8,_0xe03cfc,_0x5277dd,![],_0x2ca4c1(0x21c)),this[_0x2ca4c1(0x43e)](_0x7a9a8,_0xe03cfc,_0x5277dd),this[_0x2ca4c1(0x289)](),!![];},Window_ShopStatus['prototype'][_0x1149b0(0x1a5)]=function(){const _0x4c0d8e=_0x1149b0,_0x4279b1=VisuMZ[_0x4c0d8e(0x2f6)]['Settings']['StatusWindow']['LabelRecoverTP'];return _0x4279b1[_0x4c0d8e(0x2c2)](TextManager['tp']);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x53c)]=function(){const _0x3dcac7=_0x1149b0,_0x11d31b=_0x3dcac7(0x4e9);if(this[_0x3dcac7(0x4f1)][_0x11d31b])return this['_customItemInfo'][_0x11d31b];let _0x168a84='';return _0x168a84+='+%1'[_0x3dcac7(0x2c2)](this['_itemData'][_0x3dcac7(0x2e0)]),_0x168a84;},Window_ShopStatus['prototype'][_0x1149b0(0x31f)]=function(_0x3edf28,_0x2c6e52,_0x57ed2b){const _0x441b05=_0x1149b0,_0xc79ede=_0x441b05(0x4f5);if(this['_itemData']['selfTP']===0x0&&!this['_customItemInfo'][_0xc79ede])return![];const _0x393c35=this['getItemEffectsSelfTpGainLabel']();this[_0x441b05(0x316)](_0x393c35,_0x3edf28,_0x2c6e52,_0x57ed2b,!![]);const _0x10f848=this[_0x441b05(0x19a)]();return this[_0x441b05(0x435)][_0x441b05(0x49b)]>0x0?this[_0x441b05(0x3e5)](ColorManager[_0x441b05(0x2d3)]()):this[_0x441b05(0x3e5)](ColorManager[_0x441b05(0x32c)]()),this[_0x441b05(0x316)](_0x10f848,_0x3edf28,_0x2c6e52,_0x57ed2b,![],_0x441b05(0x21c)),this['drawItemDarkRect'](_0x3edf28,_0x2c6e52,_0x57ed2b),this[_0x441b05(0x289)](),!![];},Window_ShopStatus['prototype'][_0x1149b0(0x159)]=function(){const _0x51bb85=_0x1149b0,_0xb46dd0=VisuMZ['ItemsEquipsCore'][_0x51bb85(0x3ad)][_0x51bb85(0x1c9)]['LabelSelfGainTP'];return _0xb46dd0['format'](TextManager['tp']);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x19a)]=function(){const _0x5ef67d=_0x1149b0,_0x5e3b9c=_0x5ef67d(0x4f5);if(this[_0x5ef67d(0x4f1)][_0x5e3b9c])return this[_0x5ef67d(0x4f1)][_0x5e3b9c];let _0x45d40e='';return this[_0x5ef67d(0x435)]['selfTP']>0x0?_0x45d40e+=_0x5ef67d(0x245)[_0x5ef67d(0x2c2)](this[_0x5ef67d(0x435)]['selfTP']):_0x45d40e+='%1'[_0x5ef67d(0x2c2)](this[_0x5ef67d(0x435)][_0x5ef67d(0x49b)]),_0x45d40e;},Window_ShopStatus['prototype'][_0x1149b0(0x563)]=function(_0x543331,_0x236f7e,_0x134cf2){const _0x4b6f94=_0x1149b0,_0x251e5b=_0x4b6f94(0x2ce);if(this['_itemData'][_0x4b6f94(0x336)]>=0x0&&this[_0x4b6f94(0x435)][_0x4b6f94(0x3bf)]>=0x0&&!this[_0x4b6f94(0x4f1)][_0x251e5b])return![];const _0x295301=this[_0x4b6f94(0x4cd)]();this[_0x4b6f94(0x316)](_0x295301,_0x543331,_0x236f7e,_0x134cf2,!![]);const _0x1de9b5=this[_0x4b6f94(0x2b3)]();return this[_0x4b6f94(0x3e5)](ColorManager[_0x4b6f94(0x3aa)](0x0)),this[_0x4b6f94(0x316)](_0x1de9b5,_0x543331,_0x236f7e,_0x134cf2,![],_0x4b6f94(0x21c)),this[_0x4b6f94(0x43e)](_0x543331,_0x236f7e,_0x134cf2),this['resetFontSettings'](),!![];},Window_ShopStatus['prototype']['getItemEffectsHpDamageLabel']=function(){const _0x346bee=_0x1149b0,_0x32b039=VisuMZ[_0x346bee(0x2f6)][_0x346bee(0x3ad)][_0x346bee(0x1c9)]['LabelDamageHP'];return _0x32b039[_0x346bee(0x2c2)](TextManager['hp']);},Window_ShopStatus[_0x1149b0(0x491)]['getItemEffectsHpDamageText']=function(){const _0x325b68=_0x1149b0,_0xd465c1='HP\x20DAMAGE';if(this['_customItemInfo'][_0xd465c1])return this[_0x325b68(0x4f1)][_0xd465c1];let _0x102c1d='';if(this[_0x325b68(0x435)]['rateHP']<0x0)_0x102c1d+=_0x325b68(0x331)[_0x325b68(0x2c2)](Math[_0x325b68(0x271)](this[_0x325b68(0x435)]['rateHP']*0x64));if(this[_0x325b68(0x435)]['rateHP']<0x0&&this[_0x325b68(0x435)][_0x325b68(0x3bf)]<0x0)_0x102c1d+='\x20';if(this['_itemData']['flatHP']<0x0)_0x102c1d+='%1'[_0x325b68(0x2c2)](this[_0x325b68(0x435)][_0x325b68(0x3bf)]);return _0x102c1d;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x3df)]=function(_0x49b0ed,_0x461b23,_0x1217cb){const _0x37f5d4=_0x1149b0,_0x4a7fea=_0x37f5d4(0x1a1);if(this['_itemData'][_0x37f5d4(0x472)]>=0x0&&this[_0x37f5d4(0x435)][_0x37f5d4(0x2ab)]>=0x0&&!this[_0x37f5d4(0x4f1)][_0x4a7fea])return![];const _0x46defd=this[_0x37f5d4(0x356)]();this['drawItemKeyData'](_0x46defd,_0x49b0ed,_0x461b23,_0x1217cb,!![]);const _0x4f71a0=this['getItemEffectsMpDamageText']();return this[_0x37f5d4(0x3e5)](ColorManager[_0x37f5d4(0x3aa)](0x2)),this[_0x37f5d4(0x316)](_0x4f71a0,_0x49b0ed,_0x461b23,_0x1217cb,![],_0x37f5d4(0x21c)),this[_0x37f5d4(0x43e)](_0x49b0ed,_0x461b23,_0x1217cb),this[_0x37f5d4(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x356)]=function(){const _0x2f7bd8=_0x1149b0,_0x4fe24a=VisuMZ['ItemsEquipsCore'][_0x2f7bd8(0x3ad)][_0x2f7bd8(0x1c9)][_0x2f7bd8(0x246)];return _0x4fe24a[_0x2f7bd8(0x2c2)](TextManager['mp']);},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x30d)]=function(){const _0x16366e=_0x1149b0,_0x10d0fc=_0x16366e(0x1a1);if(this[_0x16366e(0x4f1)][_0x10d0fc])return this[_0x16366e(0x4f1)][_0x10d0fc];let _0x34a2e0='';if(this[_0x16366e(0x435)][_0x16366e(0x472)]<0x0)_0x34a2e0+=_0x16366e(0x331)[_0x16366e(0x2c2)](Math[_0x16366e(0x271)](this['_itemData'][_0x16366e(0x472)]*0x64));if(this[_0x16366e(0x435)][_0x16366e(0x472)]<0x0&&this[_0x16366e(0x435)]['flatMP']<0x0)_0x34a2e0+='\x20';if(this[_0x16366e(0x435)]['flatMP']<0x0)_0x34a2e0+='%1'[_0x16366e(0x2c2)](this[_0x16366e(0x435)][_0x16366e(0x2ab)]);return _0x34a2e0;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x24c)]=function(_0x43aeb2,_0x6e2250,_0x3d9aa7){const _0x3638df=_0x1149b0,_0x2de87b=_0x3638df(0x169);if(this[_0x3638df(0x435)]['gainTP']>=0x0&&!this[_0x3638df(0x4f1)][_0x2de87b])return![];const _0x461545=this[_0x3638df(0x22a)]();this[_0x3638df(0x316)](_0x461545,_0x43aeb2,_0x6e2250,_0x3d9aa7,!![]);const _0x2b8323=this[_0x3638df(0x164)]();return this['changeTextColor'](ColorManager['powerDownColor']()),this[_0x3638df(0x316)](_0x2b8323,_0x43aeb2,_0x6e2250,_0x3d9aa7,![],'right'),this['drawItemDarkRect'](_0x43aeb2,_0x6e2250,_0x3d9aa7),this['resetFontSettings'](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x22a)]=function(){const _0x52a303=_0x1149b0,_0x4d7323=VisuMZ[_0x52a303(0x2f6)][_0x52a303(0x3ad)][_0x52a303(0x1c9)]['LabelDamageTP'];return _0x4d7323[_0x52a303(0x2c2)](TextManager['tp']);},Window_ShopStatus[_0x1149b0(0x491)]['getItemEffectsTpDamageText']=function(){const _0x5652aa=_0x1149b0,_0x4921e1=_0x5652aa(0x169);if(this[_0x5652aa(0x4f1)][_0x4921e1])return this['_customItemInfo'][_0x4921e1];let _0x275d99='';return _0x275d99+='%1'[_0x5652aa(0x2c2)](this[_0x5652aa(0x435)][_0x5652aa(0x2e0)]),_0x275d99;},Window_ShopStatus[_0x1149b0(0x491)]['drawItemEffectsAddedStatesBuffs']=function(_0x577999,_0x19acaa,_0x140bf5){const _0x416f76=_0x1149b0,_0x1a1db2=_0x416f76(0x38d);if(!this[_0x416f76(0x435)][_0x416f76(0x520)]&&!this[_0x416f76(0x4f1)][_0x1a1db2])return![];const _0x5496d1=this[_0x416f76(0x258)]();if(_0x5496d1[_0x416f76(0x16d)]<=0x0)return![];const _0x27034f=this[_0x416f76(0x32b)]();return this['drawItemKeyData'](_0x27034f,_0x577999,_0x19acaa,_0x140bf5,!![]),this[_0x416f76(0x316)](_0x5496d1,_0x577999,_0x19acaa,_0x140bf5,![],_0x416f76(0x21c)),this['drawItemDarkRect'](_0x577999,_0x19acaa,_0x140bf5),this[_0x416f76(0x289)](),!![];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x32b)]=function(){const _0x4afb98=_0x1149b0;return VisuMZ[_0x4afb98(0x2f6)][_0x4afb98(0x3ad)][_0x4afb98(0x1c9)][_0x4afb98(0x2d6)];},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x258)]=function(){const _0x57aa18=_0x1149b0,_0xb769cb=_0x57aa18(0x38d);if(this[_0x57aa18(0x4f1)][_0xb769cb])return this[_0x57aa18(0x4f1)][_0xb769cb];let _0x52e344='',_0x5cbee8=0x0;const _0x1ee568=0x8;for(const _0x589ba7 of this['_itemData'][_0x57aa18(0x532)]){const _0x5921fb=$dataStates[_0x589ba7];if(_0x5921fb&&_0x5921fb[_0x57aa18(0x236)]>0x0){_0x52e344+=_0x57aa18(0x354)[_0x57aa18(0x2c2)](_0x5921fb[_0x57aa18(0x236)]),_0x5cbee8++;if(_0x5cbee8>=_0x1ee568)return _0x52e344;}}for(let _0x20e815=0x0;_0x20e815<this[_0x57aa18(0x435)][_0x57aa18(0x51e)][_0x57aa18(0x16d)];_0x20e815++){const _0x3102c5=this[_0x57aa18(0x435)][_0x57aa18(0x51e)][_0x20e815],_0x2831b3=Game_BattlerBase[_0x57aa18(0x491)][_0x57aa18(0x46e)](_0x3102c5,_0x20e815);if(_0x2831b3>0x0){_0x52e344+=_0x57aa18(0x354)[_0x57aa18(0x2c2)](_0x2831b3),_0x5cbee8++;if(_0x5cbee8>=_0x1ee568)return _0x52e344;}}return _0x52e344;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x545)]=function(_0x41a5c0,_0x374be5,_0x2ed9ce){const _0x2b5a90=_0x1149b0,_0x299b1d=_0x2b5a90(0x1d4);if(!this[_0x2b5a90(0x435)][_0x2b5a90(0x555)]&&!this['_customItemInfo'][_0x299b1d])return![];const _0x3281c3=this[_0x2b5a90(0x2b0)]();this['drawItemKeyData'](_0x3281c3,_0x41a5c0,_0x374be5,_0x2ed9ce,!![]);const _0x30e5a5=this[_0x2b5a90(0x28f)]();return this[_0x2b5a90(0x316)](_0x30e5a5,_0x41a5c0,_0x374be5,_0x2ed9ce,![],_0x2b5a90(0x21c)),this['drawItemDarkRect'](_0x41a5c0,_0x374be5,_0x2ed9ce),this[_0x2b5a90(0x289)](),!![];},Window_ShopStatus['prototype']['getItemEffectsRemovedStatesBuffsLabel']=function(){const _0x1b5261=_0x1149b0;return VisuMZ['ItemsEquipsCore'][_0x1b5261(0x3ad)][_0x1b5261(0x1c9)]['LabelRemove'];},Window_ShopStatus[_0x1149b0(0x491)]['getItemEffectsRemovedStatesBuffsText']=function(){const _0xe9a4df=_0x1149b0,_0x4b523c='REMOVED\x20EFFECTS';if(this[_0xe9a4df(0x4f1)][_0x4b523c])return this['_customItemInfo'][_0x4b523c];let _0x192ce0='',_0x5c0055=0x0;const _0x38498a=VisuMZ[_0xe9a4df(0x2f6)][_0xe9a4df(0x3ad)]['StatusWindow'][_0xe9a4df(0x199)];for(const _0x46165e of this[_0xe9a4df(0x435)][_0xe9a4df(0x24d)]){const _0x41a9a9=$dataStates[_0x46165e];if(_0x41a9a9&&_0x41a9a9[_0xe9a4df(0x236)]>0x0){_0x192ce0+=_0xe9a4df(0x354)[_0xe9a4df(0x2c2)](_0x41a9a9[_0xe9a4df(0x236)]),_0x5c0055++;if(_0x5c0055>=_0x38498a)return _0x192ce0;}}for(let _0x34423f=0x0;_0x34423f<this[_0xe9a4df(0x435)][_0xe9a4df(0x3c3)][_0xe9a4df(0x16d)];_0x34423f++){const _0x3f5b4e=this[_0xe9a4df(0x435)][_0xe9a4df(0x3c3)][_0x34423f],_0x19828f=Game_BattlerBase['prototype']['buffIconIndex'](0x1,_0x3f5b4e);if(_0x19828f>0x0){_0x192ce0+=_0xe9a4df(0x354)[_0xe9a4df(0x2c2)](_0x19828f),_0x5c0055++;if(_0x5c0055>=_0x38498a)return _0x192ce0;}}for(let _0x53e53d=0x0;_0x53e53d<this[_0xe9a4df(0x435)][_0xe9a4df(0x3db)][_0xe9a4df(0x16d)];_0x53e53d++){const _0x22ceae=this['_itemData'][_0xe9a4df(0x3db)][_0x53e53d],_0x61bf65=Game_BattlerBase['prototype'][_0xe9a4df(0x46e)](-0x1,_0x22ceae);if(_0x61bf65>0x0){_0x192ce0+=_0xe9a4df(0x354)['format'](_0x61bf65),_0x5c0055++;if(_0x5c0055>=_0x38498a)return _0x192ce0;}}return _0x192ce0;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x367)]=function(_0x4838c7,_0x461688,_0x6885ff){const _0x26a520=_0x1149b0;if(this['_item'][_0x26a520(0x1a6)][_0x26a520(0x1f4)](/<CUSTOM STATUS INFO>\s*([\s\S]*)\s*<\/CUSTOM STATUS INFO>/i)){const _0x2de18b=String(RegExp['$1'])[_0x26a520(0x3a2)](/[\r\n]+/);for(const _0x54dd79 of _0x2de18b){if(_0x54dd79[_0x26a520(0x1f4)](/(.*):[ ](.*)/i)){const _0x38d65c=String(RegExp['$1'])[_0x26a520(0x36f)](),_0x4330f9=String(RegExp['$2'])[_0x26a520(0x36f)]();this['drawItemCustomEntryLine'](_0x38d65c,_0x4330f9,_0x4838c7,_0x461688,_0x6885ff),_0x461688+=this[_0x26a520(0x1b8)]();}}}return this[_0x26a520(0x289)](),_0x461688;},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x14b)]=function(_0x11c704,_0x5edf75,_0x2f9020,_0xc7bda4,_0x7a21aa){const _0x27c59b=_0x1149b0;this[_0x27c59b(0x316)](_0x11c704,_0x2f9020,_0xc7bda4,_0x7a21aa,!![]),this[_0x27c59b(0x316)](_0x5edf75,_0x2f9020,_0xc7bda4,_0x7a21aa,![],_0x27c59b(0x21c)),this['drawItemDarkRect'](_0x2f9020,_0xc7bda4,_0x7a21aa),this['resetFontSettings']();},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x323)]=function(){const _0x308de3=_0x1149b0;if(!this[_0x308de3(0x219)])return;const _0x57c17e=this[_0x308de3(0x219)]['note'],_0x1b5746=/<SHOP (?:PICTURE|IMAGE|PICTURE NAME|PICTURE FILENAME|IMAGE NAME|IMAGE FILENAME):[ ](.*)>/gi,_0x51957b=_0x57c17e['match'](_0x1b5746);if(_0x51957b)for(const _0x357370 of _0x51957b){_0x357370[_0x308de3(0x1f4)](_0x1b5746);const _0x13b49=String(RegExp['$1'])['trim']()||'';if(_0x13b49==='')continue;const _0x1c9d71=ImageManager[_0x308de3(0x45e)](_0x13b49);_0x1c9d71[_0x308de3(0x233)](this[_0x308de3(0x44c)][_0x308de3(0x1be)](this,_0x1c9d71,this[_0x308de3(0x219)]));}},Window_ShopStatus[_0x1149b0(0x491)][_0x1149b0(0x44c)]=function(_0x2316cb,_0x518ed2){const _0x5ec6f4=_0x1149b0;if(this[_0x5ec6f4(0x219)]!==_0x518ed2)return;if(!_0x2316cb)return;if(_0x2316cb['width']<=0x0||_0x2316cb['height']<=0x0)return;const _0x1ec547=_0x518ed2[_0x5ec6f4(0x1a6)];let _0x562d75=_0x5ec6f4(0x1e7);_0x1ec547['match'](/<SHOP (?:PICTURE|IMAGE) LAYER:[ ]FOREGROUND>/i)&&(_0x562d75=_0x5ec6f4(0x312));const _0x386a7b=_0x562d75===_0x5ec6f4(0x1e7)?this[_0x5ec6f4(0x23d)]:this[_0x5ec6f4(0x482)];let _0x190577=this[_0x5ec6f4(0x18a)],_0x29d4f1=this[_0x5ec6f4(0x4c0)];_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) MAX WIDTH:[ ](\d+)>/i)&&(_0x190577=Number(RegExp['$1']));_0x1ec547['match'](/<SHOP (?:PICTURE|IMAGE) MAX HEIGHT:[ ](\d+)>/i)&&(_0x29d4f1=Number(RegExp['$1']));_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) MAX DIMENSIONS:[ ](\d+),[ ]*(\d+)>/i)&&(_0x190577=Number(RegExp['$1']),_0x29d4f1=Number(RegExp['$2']));const _0x29b47e=Math[_0x5ec6f4(0x2fd)](0x1,_0x190577/_0x2316cb[_0x5ec6f4(0x241)],_0x29d4f1/_0x2316cb[_0x5ec6f4(0x1d3)]);let _0x45c98c=0x0,_0x482c60=0x0,_0x29b49c=Math[_0x5ec6f4(0x271)](_0x2316cb[_0x5ec6f4(0x241)]*_0x29b47e),_0x54d99f=Math['floor'](_0x2316cb[_0x5ec6f4(0x1d3)]*_0x29b47e),_0x484d53=_0x5ec6f4(0x2e8);_0x1ec547['match'](/<SHOP (?:PICTURE|IMAGE) (?:ALIGN|ALIGNMENT):[ ](LEFT|CENTER|RIGHT)>/i)&&(_0x484d53=String(RegExp['$1'])[_0x5ec6f4(0x536)]()['trim']());if(_0x484d53===_0x5ec6f4(0x423))_0x45c98c=0x0;else _0x484d53===_0x5ec6f4(0x2e8)?_0x45c98c=Math[_0x5ec6f4(0x2d7)]((this[_0x5ec6f4(0x18a)]-_0x29b49c)/0x2):_0x45c98c=this[_0x5ec6f4(0x18a)]-_0x29b49c;let _0x251a15='middle';_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) POSITION:[ ](TOP|MIDDLE|BOTTOM)>/i)&&(_0x251a15=String(RegExp['$1'])['toLowerCase']()[_0x5ec6f4(0x36f)]());if(_0x251a15===_0x5ec6f4(0x155))_0x482c60=0x0;else _0x251a15===_0x5ec6f4(0x4a6)?_0x482c60=Math[_0x5ec6f4(0x2d7)]((this[_0x5ec6f4(0x4c0)]-_0x54d99f)/0x2):_0x482c60=this[_0x5ec6f4(0x4c0)]-_0x54d99f;_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) OFFSET X:[ ]([\+\-]\d+)>/i)&&(_0x45c98c+=Number(RegExp['$1']));_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) OFFSET Y:[ ]([\+\-]\d+)>/i)&&(_0x482c60+=Number(RegExp['$1']));_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) OFFSET:[ ]([\+\-]\d+),[ ]*([\+\-]\d+)>/i)&&(_0x45c98c+=Number(RegExp['$1']),_0x482c60+=Number(RegExp['$2']));let _0x2f395f=0xff;if(_0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)>/i))_0x2f395f=Number(RegExp['$1']);else _0x1ec547[_0x5ec6f4(0x1f4)](/<SHOP (?:PICTURE|IMAGE) OPACITY:[ ](\d+)([%％])>/i)&&(_0x2f395f=Math[_0x5ec6f4(0x2d7)](Number(RegExp['$1'])*0.01*0xff)[_0x5ec6f4(0x1d0)](0x0,0xff));_0x386a7b[_0x5ec6f4(0x514)]=_0x2f395f,_0x386a7b[_0x5ec6f4(0x1b0)](_0x2316cb,0x0,0x0,_0x2316cb[_0x5ec6f4(0x241)],_0x2316cb[_0x5ec6f4(0x1d3)],_0x45c98c,_0x482c60,_0x29b49c,_0x54d99f),_0x386a7b[_0x5ec6f4(0x514)]=0xff;},VisuMZ[_0x1149b0(0x2f6)][_0x1149b0(0x40f)]=function(_0x336758){const _0x3eeb3f=_0x1149b0;if(_0x336758===null||typeof _0x336758!==_0x3eeb3f(0x353))return _0x336758;const _0x4ddab2=Array['isArray'](_0x336758)?[]:Object[_0x3eeb3f(0x381)](Object[_0x3eeb3f(0x4a3)](_0x336758));for(const _0x1e7355 in _0x336758){Object['prototype']['hasOwnProperty']['call'](_0x336758,_0x1e7355)&&(_0x4ddab2[_0x1e7355]=typeof _0x336758[_0x1e7355]===_0x3eeb3f(0x353)&&_0x336758[_0x1e7355]!==null?VisuMZ[_0x3eeb3f(0x2f6)][_0x3eeb3f(0x40f)](_0x336758[_0x1e7355]):_0x336758[_0x1e7355]);}return _0x4ddab2;};