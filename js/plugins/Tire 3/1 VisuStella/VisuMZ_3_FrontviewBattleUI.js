//=============================================================================
// VisuStella MZ - Frontview Battle UI
// VisuMZ_3_FrontviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_FrontviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.FrontviewBattleUI = VisuMZ.FrontviewBattleUI || {};
VisuMZ.FrontviewBattleUI.version = 1.12;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.12] [FrontviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Frontview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The plugin creates a more dedicated frontview Battle UI for RPG Maker MZ.
 * Design elements are made to be more visible and elegant at the same time,
 * while utilizing various effects like minor flashes and shaking to depict
 * changes like damage, recovery, and more. The in-battle command windows are
 * slightly altered to give a better feel while also providing enough room for
 * battle portraits to be used.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Frontview Battle UI" or "frontview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * The status UI elements appear at the bottom of the screen while providing
 *   portrait support from the side.
 * * Different portraits can be used for different types of skills or items.
 * * Lots of customization options to the adjust the status UI.
 * * The frontview UI can also be used on the map as a HUD.
 * * Despite this plugin being called "Frontview UI", it can also be used with
 *   sideview if the user decides to.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_0_CoreEngine
 * * VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
 *
 * ============================================================================
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_ItemsEquipsCore
 *
 * Those using the Items and Equips Core plugin can have the Shop Status Window
 * be displayed during battle to show information regarding the skills/items
 * selected during input.
 *
 * ---
 *
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
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
 * === Portrait-Related Notetags ===
 * 
 * ---
 * 
 * <Battle Portrait: filename>
 *
 * - Used for: Actor Notetag
 * - Sets the battle portrait image for the actor to 'filename'.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 * - This will override any menu images used for battle only.
 * 
 * ---
 *
 * <Frontview UI Portraits>
 *  key: filename
 *  key: filename
 *  key: filename
 * </Frontview UI Portraits>
 *
 * - Used for: Actor Notetags
 * - Allows varying portraits to be displayed when certain 'key' elements are
 *   selected or used.
 * - Replace 'key' with a setting from the following (without the quotes):
 *   - When performing actions (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - "Item" - When actor uses an item.
 *     - "Friendly" - When actor performs an action that targets allies.
 *     - "Certain Hit" - When actor uses an action that is Certain Hit type.
 *     - "Physical" - When actor uses an action that is Physical hit type.
 *     - "Magical" - When actor uses an action that is Magical hit type.
 *     - "Opponent" - When actor performs an action that targets enemies.
 *     - "Magic" - When actor performs a magic-type skill.
 *     - "Skill" - When actor performs a general skill.
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 *   - When choosing during input (priority from top to bottom):
 *     - The exact name of the skill or item being used.
 *     - The 'symbol' used for the command item.
 *       - "Attack", "Guard", "Skill", "Item", "Escape", "AutoBattle"
 *       - "Brave" - From VisuMZ_2_BattleSystemBTB
 *       - "Formation" - From VisuMZ_2_PartySystem
 *       - "WeaponSwap" - From VisuMZ_2_WeaponSwapSystem
 *       - "Boost" - From VisuMZ_3_BoostAction
 *       - "CombatLog" - From VisuMZ_4_CombatLog
 *     - "Normal" - Everything else.
 *     - "Default" - Everything else.
 * - Replace 'filename' with a picture found within your game project's
 *   img/pictures/ folder. Filenames are case sensitive. Leave out the filename
 *   extension from the notetag.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Show Frontview UI>
 * <Hide Frontview UI>
 *
 * - Used for: Map Notetags
 * - Show or hide the Frontview Battle UI when entering this specific map.
 * - The visibility can be changed via Plugin Command.
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
 * === Map UI Plugin Commands ===
 * 
 * ---
 *
 * Map UI: Text Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Text Popup (Party)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Text:
 *   - What text do you wish to display?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Actor)
 * - Creates a custom text popup on the Frontview UI on map scene.
 * - Targets specific actors.
 *
 *   Actor ID(s):
 *   - Select the ID(s) of the actor(s) you want to target.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 *
 * Map UI: Variable Popup (Party)
 * - Creates a variable data popup on the Frontview UI on map scene.
 * - Targets party index. Index values start at 0.
 *
 *   Party Index(es):
 *   - Which party index to target?
 *   - Index values start at 0.
 *
 *   Variable ID:
 *   - Get data from which variable to display as a popup?
 *
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 *
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 *
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Map Frontview UI Visibility
 * - Sets the visibility of the Frontview UI on the map scene.
 * - Requires the battle layout to be Frontview UI.
 *
 *   Visible?:
 *   - Sets visibility of the Frontview UI on current map scene.
 *   - Requires the battle layout to be Frontview UI.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status UI Settings Settings
 * ============================================================================
 *
 * Settings that alter the Status UI elements.
 *
 * ---
 *
 * Position
 * 
 *   Distance Buffer:
 *   - How many pixels of buffer range is there between status UI elements?
 * 
 *   Graphics Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   UI Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 *
 * Graphics > Background
 * 
 *   Show?:
 *   - This is the back image displayed for the graphics set.
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered background, pick a graphic
 *     from the /img/system/ folder.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Graphic
 * 
 *   Show?:
 *   - This is the face image displayed for the graphics set.
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 * ---
 * 
 * Graphics > Face Mask
 * 
 *   Use?:
 *   - Use a mask for the face graphic?
 * 
 *   Filename:
 *   - If you don't want to use the pre-rendered face mask, pick a mask from
 *     the /img/system/ folder.
 * 
 *   Render:
 * 
 *     Distance Shift:
 *     - Determines the distance shift for the pre-rendered triangle.
 * 
 *     Color 1:
 *     Color 2:
 *     - Use #rrggbb for custom color.
 *     - Check your color here: https://htmlcolorcodes.com/
 * 
 *     Vertical Gradient:
 *     - Use a vertical gradient or a horizontal gradient?
 * 
 * ---
 * 
 * UI > Name
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > HP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > MP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TP Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > TPG Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > State Icon
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > State Overlay
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Brave Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 * 
 * UI > Break Shields
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 *
 * ---
 * 
 * UI > Boost Points
 * 
 *   Show?:
 *   - Show this element?
 * 
 *   Angle: 
 *   - What angle should this element be displayed at?
 * 
 *   Offset
 *   - How many pixels to offset the x/y position?
 *   - X: Negative: left. Positive: right.
 *   - Y: Negative: up. Positive: down.
 * 
 *   Scale:
 *   - What scale should this element be displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Effects > Active Shift
 * 
 *   X Distance:
 *   - If an actor is the active battler, shift x value.
 *   - Negative: left. Positive: right.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 *   Y Distance:
 *   - If an actor is the active battler, shift y value.
 *   - Negative: up. Positive: down.
 * 
 *     Shift Speed:
 *     - How many pixels should be shifted each frame?
 *     - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Damage Shake
 * 
 *   Enable?:
 *   - Enable shake effects when taking HP damage?
 * 
 *   Duration:
 *   - How many frames should this effect last?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Effects > Misc
 * 
 *   Opacity Speed:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 * 
 *   Move Duration:
 *   - How many frames does it take to move?
 *   - 60 frames = 1 second.
 * 
 * ---
 * 
 * Tint Colors
 * 
 *   Tint Duration:
 *   - How many frames do damage tints last?
 *   - 60 frames = 1 second.
 * 
 *   Selected:
 *   Inputting:
 *   HP Damage:
 *   HP Healing:
 *   MP Damage:
 *   MP Healing:
 *   TP Damage:
 *   TP Healing:
 *   - Tint color used for specific conditions.
 *   - Format: [Red, Green, Blue, Alpha]
 * 
 * ---
 * 
 * Tone Colors
 * 
 *   Dead Tone:
 *   Dying Tone:
 *   - Tone color used for dead/dying actors.
 *   - Format: [Red, Green, Blue, Gray]
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Portrait Settings
 * ============================================================================
 *
 * Settings for in-battle portraits.
 *
 * ---
 *
 * Properties
 * 
 *   Flip Horizontally?:
 *   - Flip portraits horizontally?
 * 
 *   Horizontal Rate:
 *   - At what percentage of the screen should portraits show up?
 *   - 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * 
 *   Portrait Scale:
 *   - At what scale are the portraits displayed at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 *
 * ---
 *
 * Entrance Settings
 * 
 *   Enter Offset X:
 *   - How many pixels to offset the entrance point?
 *   - Negative: left. Positive: right.
 * 
 *   Enter Duration:
 *   - How many frames does it take to enter?
 *   - 60 frames = 1 second.
 *
 * ---
 *
 * Opacity Settings
 * 
 *   Action Fade Out:
 *   - How many frames to fade out portraits on action portraits?
 *   - 60 frames = 1 second. Use 0 to disable.
 * 
 *   Targeting Opacity:
 *   - What opacity should be used when targeting actors/enemies?
 *   - Use numbers from 0 to 255.
 * 
 *   Targeting Opacity:
 *   - How fast does fade in/out work?
 *   - Lower is slower. Higher is faster.
 *
 * ---
 *
 * Frontview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * Sideview Settings
 * 
 *   Show During Input?:
 *   - Show portraits during input phase?
 * 
 *   Show During Action?:
 *   - Show portraits during actions?
 * 
 *   Target Actor Fade?:
 *   - Fade when targeting actors?
 * 
 *   Target Enemy Fade?:
 *   - Fade when targeting enemies?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Scene Settings
 * ============================================================================
 *
 * Settings for the battle scene.
 *
 * ---
 *
 * General
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 * 
 *   Command Help Window?:
 *   - Show the Help Window for Actor Command Window and Party Command Window?
 * 
 *   Edge Buffer:
 *   - How many pixels of buffer room should there be from the screen edge?
 * 
 *   Max Rows:
 *   - What is the maximum number of displayed rows for battle windows?
 * 
 *   Window Scale:
 *   - What scale should windows appear at?
 *   - 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * 
 *   Show Cancel Button?:
 *   - Show/hide the cancel button in battle?
 * 
 *   Show Shop Status?:
 *   - Show/hide the shop status window in battle?
 *   - Requires VisuMZ_1_ItemsEquipsCore!
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 * 
 *     Move Center?:
 *     - Move the status UI from the initial position to the center?
 * 
 *   Actor Command Window:
 *   Party Command Window:
 *   Item Window:
 *   Skill Window:
 *   - Determines the location of the specified window in battle.
 *
 * ---
 *
 * Animation Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Base Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * Stack Offset
 * 
 *   Offset X:
 *   - How many pixels to offset the x position?
 *   - Negative: left. Positive: right.
 * 
 *   Offset Y:
 *   - How many pixels to offset the y position?
 *   - Negative: up. Positive: down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Offsets the battler sprite positions when using Frontview Battle UI with
 * frontview ONLY. Does NOT apply to Sideview.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Frontview Battle UI with
 *     frontview ONLY.
 *   - NOT applied for Sideview.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battle Window Settings
 * ============================================================================
 *
 * Settings that alter the window settings in-battle.
 *
 * ---
 *
 * Window Widths
 * 
 *   Command Windows:
 *   Action Windows:
 *   - Type in the numeric value you want this width to be.
 *   - Otherwise, type "auto" to let the plugin adjust them.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Map Scene Settings
 * ============================================================================
 *
 * Settings for the map scene.
 *
 * ---
 *
 * General
 * 
 *   Show UI on Map?:
 *   - Show the frontview UI on the map by default?
 *   - Does NOT work with other battle layouts.
 * 
 *   Compact Width?:
 *   - Make the status area more compact or have it extend the full width of
 *     the screen?
 *
 * ---
 *
 * Position
 * 
 *   Initial UI Position:
 *   - Determines the initial position of the status UI.
 *
 * ---
 *
 * Fading
 * 
 *   Close Minimum Opacity:
 *   - Minimum opacity when the player is too close to the status window on the
 *     map screen.
 *
 * ---
 * 
 * Scaling
 * 
 *   Scale Ratio:
 *   - What is the scaling for this UI on the map scene?
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
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Irina
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.12: September 19, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Arisu:
 * *** Parameters > Window Settings > Window Widths > Command Windows
 * *** Parameters > Window Settings > Window Widths > Action Windows
 * **** Type in the numeric value you want this width to be.
 * **** Otherwise, type "auto" to let the plugin adjust them.
 * 
 * Version 1.11: July 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where on the map scene so that State Tooltips no longer
 *    appear if the Frontview Battle UI is not visible. Fix made by Olivia.
 * ** Fixed a bug where after turning off map visibility, State Tooltips didn't
 *    work properly in battle. Fix made by Olivia.
 * 
 * Version 1.10: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where in frontview, actor sprites temporarily appear
 *    when being damaged with certain plugin combinations.
 * * Feature Update!
 * ** The process of entering battle from the map will no longer cause the
 *    Frontview UI on the map to enter and exit out of transparency. Update
 *    made by Arisu.
 * 
 * Version 1.09: September 14, 2023
 * * Bug Fixes!
 * ** Fixed a crash that would occur if no face graphics are used. Fix made
 *    by Irina.
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_AutoSkillTriggers.
 * ** Added better compatibility with VisuMZ_3_StateTooltips.
 * 
 * Version 1.08: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a bug where the Break Shield icon is not showing. Fix by Olivia.
 * ** Fixed a bug where the touch hit box did not take into account the
 *    graphical offsets. Fix made by Olivia.
 * 
 * Version 1.07: July 13, 2023
 * * Feature Update!
 * ** When used together with VisuMZ_4_MultiLayerHpGauge, any visible enemy HP
 *    gauges will push down windows on a higher stack like item windows, skill
 *    windows, etc. in order to not obscure each other. Update by Olivia.
 * 
 * Version 1.06: June 15, 2023
 * * Bug Fixes!
 * ** If enemies are to go before an actor in battle, the animation will not
 *    play in the correct position. This should now be fixed. Fix by Olivia.
 * 
 * Version 1.05: March 16, 2023
 * * Bug Fixes!
 * ** Fixed a visual issue with long actor names being cut off on the last
 *    letter. Fix made by Arisu.
 * 
 * Version 1.04: January 19, 2023
 * * Bug Fixes!
 * ** Fixed a bug that would crash if you only have VisuMZ_1_ItemsEquipsCore
 *    installed but not the VisuMZ_1_SkillsStatesCore.
 * ** Fade Out event command will now hide the Frontview Battle UI on the map
 *    scene. This will not happen during battle. Fix made by Irina.
 * ** Fixed a bug that prevented the face sprites from being clickable when it
 *    came to selecting an actor as a target for items and skills in frontview.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** "Extra Features" section updated for "VisuMZ_1_ItemsEquipsCore"
 * *** Changed to the following:
 * **** Those using the Items and Equips Core plugin can have the Shop Status
 *      Window be displayed during battle to show information regarding the
 *      items selected during input. If you want this to appear for skills,
 *      too, make sure you also have VisuMZ_1_SkillsStatesCore installed.
 * 
 * Version 1.03: December 15, 2022
 * * Bug Fixes!
 * ** TPB battle systems with less than max characters should no longer crash
 *    the game. Fix made by Irina.
 * * Compatibility Update!
 * ** Now works properly with Combat Log and doesn't cause an extra window to
 *    appear suddenly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameters added by Olivia and sponsored by AndyL.
 * *** Plugin Parameters > Battler Offset Settings
 * **** Offsets the battler sprite positions when using Frontview Battle UI
 *      with frontview ONLY. Does NOT apply for Sideview.
 * *** Plugin Parameters > Map Scene Settings > Scale Ratio
 * **** What is the scaling for this UI on the map scene?
 * 
 * Version 1.02: November 24, 2022
 * * Bug Fixes!
 * ** During the map phase, active up shift no longer occurs. Fix by Irina.
 * 
 * Version 1.01: November 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Irina and sponsored by AndyL:
 * *** Plugin Parameters > Battle Scene Settings > Command Help Window?
 * **** Show the Help Window for Actor Command Window and Party Command Window?
 *
 * Version 1.00 Official Release Date: December 5, 2022
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
 * @command MapUICustomTextActor
 * @text Map UI: Text Popup (Actor)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomTextParty
 * @text Map UI: Text Popup (Party)
 * @desc Creates a custom text popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Text:str
 * @text Text
 * @desc What text do you wish to display?
 * @default Text
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableActor
 * @text Map UI: Variable Popup (Actor)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets specific actors.
 *
 * @arg ActorIDs:arraynum
 * @text Actor ID(s)
 * @type actor[]
 * @desc Select the ID(s) of the actor(s) you want to target.
 * @default ["1"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MapUICustomVariableParty
 * @text Map UI: Variable Popup (Party)
 * @desc Creates a variable data popup on the Frontview UI on map scene.
 * Targets party index. Index values start at 0.
 *
 * @arg Index:arraynum
 * @text Party Index(es)
 * @type number[]
 * @desc Which party index to target?
 * Index values start at 0.
 * @default ["0"]
 * 
 * @arg Variable:num
 * @text Variable ID
 * @type variable
 * @desc Get data from which variable to display as a popup?
 * @default 1
 * 
 * @arg TextColor:str
 * @text Text Color
 * @parent Text:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default #ffffff
 *
 * @arg FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @arg FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_System
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemMapUiVisibility
 * @text System: Map Frontview UI Visibility
 * @desc Sets the visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 *
 * @arg Visible:eval
 * @text Visible?
 * @type boolean
 * @on Visible
 * @off Hidden
 * @desc Sets visibility of the Frontview UI on current map scene.
 * Requires the battle layout to be Frontview UI.
 * @default true
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
 * @param FrontviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param StatusUI:struct
 * @text Status UI Settings
 * @type struct<StatusUI>
 * @desc Settings that alter the Status UI elements.
 * @default {"Position":"","DistanceBuffer:num":"32","GraphicsOffset":"","GraphicsOffsetX:num":"+0","GraphicsOffsetY:num":"-128","UiOffset":"","UiOffsetX:num":"+0","UiOffsetY:num":"-128","Graphics":"","GraphicsBackground":"","GraphicsBackgroundShow:eval":"true","GraphicsBackgroundFilename:str":"","GraphicsBackgroundOffset":"","GraphicsBackgroundOffsetX:num":"+0","GraphicsBackgroundOffsetY:num":"+0","GraphicsFaceMaskFilename:str":"","GraphicsFace":"","GraphicsFaceShow:eval":"true","GraphicsFaceOffset":"","GraphicsFaceOffsetX:num":"+0","GraphicsFaceOffsetY:num":"+0","GraphicsFaceMask":"","GraphicsFaceMaskUse:eval":"true","GraphicsFaceMaskRender":"","GraphicsFaceMaskShift:num":"48","GraphicsFaceMaskColor1:str":"#00aeef","GraphicsFaceMaskColor2:str":"#000000","GraphicsFaceMaskVertGradient:eval":"true","UI":"","UI_Name":"","UI_Name_Show:eval":"true","UI_Name_Angle:num":"18","UI_Name_Offset":"","UI_Name_OffsetX:num":"-8","UI_Name_OffsetY:num":"-60","UI_Name_Scale:num":"0.80","UI_HpGauge":"","UI_HpGauge_Show:eval":"true","UI_HpGauge_Angle:num":"18","UI_HpGauge_Offset":"","UI_HpGauge_OffsetX:num":"-8","UI_HpGauge_OffsetY:num":"+48","UI_HpGauge_Scale:num":"0.80","UI_MpGauge":"","UI_MpGauge_Show:eval":"true","UI_MpGauge_Angle:num":"18","UI_MpGauge_Offset":"","UI_MpGauge_OffsetX:num":"-20","UI_MpGauge_OffsetY:num":"72","UI_MpGauge_Scale:num":"0.80","UI_TpGauge":"","UI_TpGauge_Show:eval":"true","UI_TpGauge_Angle:num":"18","UI_TpGauge_Offset":"","UI_TpGauge_OffsetX:num":"-32","UI_TpGauge_OffsetY:num":"+96","UI_TpGauge_Scale:num":"0.80","UI_TpbGauge":"","UI_TpbGauge_Show:eval":"true","UI_TpbGauge_Angle:num":"18","UI_TpbGauge_Offset":"","UI_TpbGauge_OffsetX:num":"-61","UI_TpbGauge_OffsetY:num":"-36","UI_TpbGauge_Scale:num":"0.80","UI_StatesIcon":"","UI_StatesIcon_Show:eval":"true","UI_StatesIcon_Offset":"","UI_StatesIcon_OffsetX:num":"-52","UI_StatesIcon_OffsetY:num":"92","UI_StatesOverlay":"","UI_StatesOverlay_Show:eval":"true","UI_StatesOverlay_Offset":"","UI_StatesOverlay_OffsetX:num":"+0","UI_StatesOverlay_OffsetY:num":"+0","UI_AggroGauge":"","UI_AggroGauge_Show:eval":"true","UI_AggroGauge_Angle:num":"72","UI_AggroGauge_Offset":"","UI_AggroGauge_OffsetX:num":"-88","UI_AggroGauge_OffsetY:num":"+60","UI_AggroGauge_Scale:num":"0.6","UI_BravePoints":"","UI_BravePoints_Show:eval":"true","UI_BravePoints_Offset":"","UI_BravePoints_OffsetX:num":"+72","UI_BravePoints_OffsetY:num":"-36","UI_BravePoints_Scale:num":"1.0","UI_BreakShields":"","UI_BreakShields_Show:eval":"true","UI_BreakShields_Offset":"","UI_BreakShields_OffsetX:num":"-52","UI_BreakShields_OffsetY:num":"+60","UI_BoostPoints":"","UI_BoostPoints_Show:eval":"true","UI_BoostPoints_Angle:num":"-45","UI_BoostPoints_Offset":"","UI_BoostPoints_OffsetX:num":"+24","UI_BoostPoints_OffsetY:num":"-45","UI_BoostPoints_Scale:num":"0.80","Effects":"","ActiveShift":"","ActiveShiftX:num":"+0","ActiveShiftXSpeed:num":"2","ActiveShiftY:num":"-24","ActiveShiftYSpeed:num":"2","DamageShake":"","DamageShakeEnabled:eval":"true","DamageShakeDuration:num":"24","OpacitySpeed:num":"16","MoveDuration:num":"24","TintColors":"","DamageDuration:num":"60","Selected:eval":"[255, 255, 255, 64]","Inputting:eval":"[0, 255, 255, 64]","HpDamage:eval":"[255, 0, 0, 128]","HpHealing:eval":"[0, 255, 128, 128]","MpDamage:eval":"[128, 0, 255, 128]","MpHealing:eval":"[0, 128, 255, 128]","TpDamage:eval":"[128, 255, 0, 32]","TpHealing:eval":"[0, 255, 0, 32]","ToneColors":"","DeadTone:eval":"[0, 0, 0, 255]","DyingTone:eval":"[0, -64, -64, 64]"}
 *
 * @param Portrait:struct
 * @text Portrait Settings
 * @type struct<Portrait>
 * @desc Settings for in-battle portraits.
 * @default {"Properties":"","HorzRate:num":"0.85","Scale:num":"1.0","Entrance":"","EnterOffset:num":"+64","EnterDuration:num":"20","Fade":"","ActionFadeOut:num":"20","TargetOpacity:num":"64","OpacitySpeed:num":"16","Frontview":"","HorzFlip:eval":"false","FrontviewInput:eval":"true","FrontviewSubject:eval":"true","FrontviewTargetActor:eval":"false","FrontviewTargetEnemy:eval":"true","Sideview":"","SideviewInput:eval":"true","SideviewSubject:eval":"false","SideviewTargetActor:eval":"true","SideviewTargetEnemy:eval":"false"}
 *
 * @param Battle:struct
 * @text Battle Scene Settings
 * @type struct<Battle>
 * @desc Settings for the battle scene.
 * @default {"General":"","CompactWidth:eval":"true","EdgeBuffer:num":"60","MaxRows:num":"8","WindowScale:num":"0.75","ShowCancelButton:eval":"false","ShowShopStatus:eval":"true","Position":"","InitialUiPosition:str":"right","MoveCenter:eval":"true","Window_ActorCommand:str":"left","Window_PartyCommand:str":"left","Window_ItemList_Pos:str":"left","Window_SkillList_Pos:str":"left","AniOffset":"","AniOffsetX:num":"+0","AniOffsetY:num":"+32","BaseOffset":"","BaseOffsetX:num":"+0","BaseOffsetY:num":"+18","StackOffset":"","StackOffsetX:num":"+16","StackOffsetY:num":"+16"}
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @parent Battle:struct
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Frontview Battle UI with frontview ONLY. NOT Sideview.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"-96"}
 *
 * @param Window:struct
 * @text Battle Window Settings
 * @parent Battle:struct
 * @type struct<Window>
 * @desc Settings that alter the window settings in-battle.
 * @default {"WindowWidth":"","CommandWindows:str":"auto","ItemWindows:str":"auto"}
 *
 * @param Map:struct
 * @text Map Scene Settings
 * @type struct<Map>
 * @desc Settings for the map scene.
 * @default {"General":"","ShowUiOnMap:eval":"true","CompactWidth:eval":"true","Position":"","InitialUiPosition:str":"left","Fading":"","MinProxOpacity:num":"128","Scaling":"","Scale:num":"1.0"}
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
 * Status UI Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusUI:
 *
 * @param Position
 *
 * @param DistanceBuffer:num
 * @text Distance Buffer
 * @parent Position
 * @type number
 * @min 0
 * @desc How many pixels of buffer range is there between status UI elements?
 * @default 32
 *
 * @param GraphicsOffset
 * @text Graphics Offset
 * @parent Position
 *
 * @param GraphicsOffsetX:num
 * @text Offset X
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsOffsetY:num
 * @text Offset Y
 * @parent GraphicsOffset
 * @desc How many pixels to offset the graphics y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param UiOffset
 * @text UI Offset
 * @parent Position
 *
 * @param UiOffsetX:num
 * @text Offset X
 * @parent UiOffset
 * @desc How many pixels to offset the UI x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UiOffsetY:num
 * @text Offset Y
 * @parent UiOffset
 * @desc How many pixels to offset the UI y position?
 * Negative: up. Positive: down.
 * @default -128
 *
 * @param Graphics
 * @text Graphics
 *
 * @param GraphicsBackground
 * @text Background
 * @parent Graphics
 *
 * @param GraphicsBackgroundShow:eval
 * @text Show?
 * @parent GraphicsBackground
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the back image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsBackgroundFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered background,
 * pick a graphic from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsBackgroundOffset
 * @text Offset
 * @parent GraphicsBackground
 *
 * @param GraphicsBackgroundOffsetX:num
 * @text Offset X
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsBackgroundOffsetY:num
 * @text Offset Y
 * @parent GraphicsBackgroundOffset
 * @desc How many pixels to offset the background y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFace
 * @text Face Graphic
 * @parent Graphics
 *
 * @param GraphicsFaceShow:eval
 * @text Show?
 * @parent GraphicsFace
 * @type boolean
 * @on Show
 * @off Hide
 * @desc This is the face image displayed for the graphics set.
 * @default true
 *
 * @param GraphicsFaceOffset
 * @text Offset
 * @parent GraphicsFace
 *
 * @param GraphicsFaceOffsetX:num
 * @text Offset X
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param GraphicsFaceOffsetY:num
 * @text Offset Y
 * @parent GraphicsFaceOffset
 * @desc How many pixels to offset the face y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param GraphicsFaceMask
 * @text Face Mask
 * @parent Graphics
 *
 * @param GraphicsFaceMaskUse:eval
 * @text Use?
 * @parent GraphicsFaceMask
 * @type boolean
 * @on Use
 * @off Don't Use
 * @desc Use a mask for the face graphic?
 * @default true
 *
 * @param GraphicsFaceMaskFilename:str
 * @text Filename
 * @parent GraphicsBackground
 * @type file
 * @dir img/system/
 * @require 1
 * @desc If you don't want to use the pre-rendered face mask,
 * pick a mask from the /img/system/ folder.
 * @default 
 *
 * @param GraphicsFaceMaskRender
 * @text Render
 * @parent GraphicsFaceMask
 *
 * @param GraphicsFaceMaskShift:num
 * @text Distance Shift
 * @parent GraphicsFaceMaskRender
 * @desc Determines the distance shift for the pre-rendered triangle.
 * @default 48
 *
 * @param GraphicsFaceMaskColor1:str
 * @text Color 1
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #00aeef
 *
 * @param GraphicsFaceMaskColor2:str
 * @text Color 2
 * @parent GraphicsFaceMaskRender
 * @desc Use #rrggbb for custom color.
 * Check your color here: https://htmlcolorcodes.com/
 * @default #000000
 *
 * @param GraphicsFaceMaskVertGradient:eval
 * @text Vertical Gradient
 * @parent GraphicsFaceMaskRender
 * @type boolean
 * @on Vertical Gradient
 * @off Horizontal Gradient
 * @desc Use a vertical gradient or a horizontal gradient?
 * @default true
 *
 * @param UI
 * @text UI
 *
 * @param UI_Name
 * @text Name
 * @parent UI
 *
 * @param UI_Name_Show:eval
 * @text Show?
 * @parent UI_Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_Name_Angle:num
 * @text Angle
 * @parent UI_Name
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_Name_Offset
 * @text Offset
 * @parent UI_Name
 *
 * @param UI_Name_OffsetX:num
 * @text Offset X
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_Name_OffsetY:num
 * @text Offset Y
 * @parent UI_Name_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -60
 *
 * @param UI_Name_Scale:num
 * @text Scale
 * @parent UI_Name
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_HpGauge
 * @text HP Gauge
 * @parent UI
 *
 * @param UI_HpGauge_Show:eval
 * @text Show?
 * @parent UI_HpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_HpGauge_Angle:num
 * @text Angle
 * @parent UI_HpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_HpGauge_Offset
 * @text Offset
 * @parent UI_HpGauge
 *
 * @param UI_HpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -8
 *
 * @param UI_HpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_HpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +48
 *
 * @param UI_HpGauge_Scale:num
 * @text Scale
 * @parent UI_HpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_MpGauge
 * @text MP Gauge
 * @parent UI
 *
 * @param UI_MpGauge_Show:eval
 * @text Show?
 * @parent UI_MpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_MpGauge_Angle:num
 * @text Angle
 * @parent UI_MpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_MpGauge_Offset
 * @text Offset
 * @parent UI_MpGauge
 *
 * @param UI_MpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -20
 *
 * @param UI_MpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_MpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 72
 *
 * @param UI_MpGauge_Scale:num
 * @text Scale
 * @parent UI_MpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpGauge
 * @text TP Gauge
 * @parent UI
 *
 * @param UI_TpGauge_Show:eval
 * @text Show?
 * @parent UI_TpGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpGauge_Angle:num
 * @text Angle
 * @parent UI_TpGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpGauge_Offset
 * @text Offset
 * @parent UI_TpGauge
 *
 * @param UI_TpGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -32
 *
 * @param UI_TpGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +96
 *
 * @param UI_TpGauge_Scale:num
 * @text Scale
 * @parent UI_TpGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_TpbGauge
 * @text TPB/ATB Gauge
 * @parent UI
 *
 * @param UI_TpbGauge_Show:eval
 * @text Show?
 * @parent UI_TpbGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_TpbGauge_Angle:num
 * @text Angle
 * @parent UI_TpbGauge
 * @desc What angle should this element be displayed at?
 * @default 18
 *
 * @param UI_TpbGauge_Offset
 * @text Offset
 * @parent UI_TpbGauge
 *
 * @param UI_TpbGauge_OffsetX:num
 * @text Offset X
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -61
 *
 * @param UI_TpbGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_TpbGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_TpbGauge_Scale:num
 * @text Scale
 * @parent UI_TpbGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 *
 * @param UI_StatesIcon
 * @text State Icon
 * @parent UI
 *
 * @param UI_StatesIcon_Show:eval
 * @text Show?
 * @parent UI_StatesIcon
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesIcon_Offset
 * @text Offset
 * @parent UI_StatesIcon
 *
 * @param UI_StatesIcon_OffsetX:num
 * @text Offset X
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_StatesIcon_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesIcon_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default 92
 *
 * @param UI_StatesOverlay
 * @text State Overlay
 * @parent UI
 *
 * @param UI_StatesOverlay_Show:eval
 * @text Show?
 * @parent UI_StatesOverlay
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_StatesOverlay_Offset
 * @text Offset
 * @parent UI_StatesOverlay
 *
 * @param UI_StatesOverlay_OffsetX:num
 * @text Offset X
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param UI_StatesOverlay_OffsetY:num
 * @text Offset Y
 * @parent UI_StatesOverlay_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +0
 *
 * @param UI_AggroGauge
 * @text Aggro Gauge
 * @parent UI
 *
 * @param UI_AggroGauge_Show:eval
 * @text Show?
 * @parent UI_AggroGauge
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_AggroGauge_Angle:num
 * @text Angle
 * @parent UI_AggroGauge
 * @desc What angle should this element be displayed at?
 * @default 72
 *
 * @param UI_AggroGauge_Offset
 * @text Offset
 * @parent UI_AggroGauge
 *
 * @param UI_AggroGauge_OffsetX:num
 * @text Offset X
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -88
 *
 * @param UI_AggroGauge_OffsetY:num
 * @text Offset Y
 * @parent UI_AggroGauge_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_AggroGauge_Scale:num
 * @text Scale
 * @parent UI_AggroGauge
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.6
 *
 * @param UI_BravePoints
 * @text Brave Points
 * @parent UI
 *
 * @param UI_BravePoints_Show:eval
 * @text Show?
 * @parent UI_BravePoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BravePoints_Offset
 * @text Offset
 * @parent UI_BravePoints
 *
 * @param UI_BravePoints_OffsetX:num
 * @text Offset X
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +72
 *
 * @param UI_BravePoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BravePoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -36
 *
 * @param UI_BravePoints_Scale:num
 * @text Scale
 * @parent UI_BravePoints
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param UI_BreakShields
 * @text Break Shields
 * @parent UI
 *
 * @param UI_BreakShields_Show:eval
 * @text Show?
 * @parent UI_BreakShields
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BreakShields_Offset
 * @text Offset
 * @parent UI_BreakShields
 *
 * @param UI_BreakShields_OffsetX:num
 * @text Offset X
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default -52
 *
 * @param UI_BreakShields_OffsetY:num
 * @text Offset Y
 * @parent UI_BreakShields_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default +60
 *
 * @param UI_BoostPoints
 * @text Boost Points
 * @parent UI
 *
 * @param UI_BoostPoints_Show:eval
 * @text Show?
 * @parent UI_BoostPoints
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this element?
 * @default true
 *
 * @param UI_BoostPoints_Angle:num
 * @text Angle
 * @parent UI_BoostPoints
 * @desc What angle should this element be displayed at?
 * @default -45
 *
 * @param UI_BoostPoints_Offset
 * @text Offset
 * @parent UI_BoostPoints
 *
 * @param UI_BoostPoints_OffsetX:num
 * @text Offset X
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the x position?
 * Negative: left. Positive: right.
 * @default +24
 *
 * @param UI_BoostPoints_OffsetY:num
 * @text Offset Y
 * @parent UI_BoostPoints_Offset
 * @desc How many pixels to offset the y position?
 * Negative: up. Positive: down.
 * @default -45
 *
 * @param UI_BoostPoints_Scale:num
 * @text Scale
 * @parent UI_Scale
 * @desc What scale should this element be displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.80
 * 
 * @param Effects
 *
 * @param ActiveShift
 * @text Active Shift
 * @parent Effects
 *
 * @param ActiveShiftX:num
 * @text X Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift x value.
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param ActiveShiftXSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftX:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param ActiveShiftY:num
 * @text Y Distance
 * @parent ActiveShift
 * @desc If an actor is the active battler, shift y value.
 * Negative: up. Positive: down.
 * @default -24
 *
 * @param ActiveShiftYSpeed:num
 * @text Shift Speed
 * @parent ActiveShiftY:num
 * @type number
 * @min 1
 * @desc How many pixels should be shifted each frame?
 * 60 frames = 1 second.
 * @default 2
 *
 * @param DamageShake
 * @text Damage Shake
 * @parent Effects
 *
 * @param DamageShakeEnabled:eval
 * @text Enable?
 * @parent DamageShake
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable shake effects when taking HP damage?
 * @default true
 *
 * @param DamageShakeDuration:num
 * @text Duration
 * @parent DamageShake
 * @type number
 * @min 1
 * @desc How many frames should this effect last?
 * 60 frames = 1 second.
 * @default 24
 *
 * @param OpacitySpeed:num
 * @text Opacity Speed
 * @parent Effects
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param MoveDuration:num
 * @text Move Duration
 * @parent Effects
 * @desc How many frames does it take to move?
 * 60 frames = 1 second.
 * @default 24
 * 
 * @param TintColors
 * @text Tint Colors
 *
 * @param DamageDuration:num
 * @text Tint Duration
 * @parent TintColors
 * @desc How many frames do damage tints last?
 * 60 frames = 1 second.
 * @default 60
 *
 * @param Selected:eval
 * @text Selected
 * @parent TintColors
 * @desc Tint color used for selected actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 255, 255, 64]
 *
 * @param Inputting:eval
 * @text Inputting
 * @parent TintColors
 * @desc Tint color used for inputting actors.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 255, 64]
 *
 * @param HpDamage:eval
 * @text HP Damage
 * @parent TintColors
 * @desc Tint color used for HP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [255, 0, 0, 128]
 *
 * @param HpHealing:eval
 * @text HP Healing
 * @parent TintColors
 * @desc Tint color used for HP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 128, 128]
 *
 * @param MpDamage:eval
 * @text MP Damage
 * @parent TintColors
 * @desc Tint color used for MP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 0, 255, 128]
 *
 * @param MpHealing:eval
 * @text MP Healing
 * @parent TintColors
 * @desc Tint color used for MP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 128, 255, 128]
 *
 * @param TpDamage:eval
 * @text TP Damage
 * @parent TintColors
 * @desc Tint color used for TP Damage.
 * Format: [Red, Green, Blue, Alpha]
 * @default [128, 255, 0, 32]
 *
 * @param TpHealing:eval
 * @text TP Healing
 * @parent TintColors
 * @desc Tint color used for TP Healing.
 * Format: [Red, Green, Blue, Alpha]
 * @default [0, 255, 0, 32]
 * 
 * @param ToneColors
 * @text Tone Colors
 *
 * @param DeadTone:eval
 * @text Dead Tone
 * @parent ToneColors
 * @desc Tone color used for dead actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 255]
 *
 * @param DyingTone:eval
 * @text Dying Tone
 * @parent ToneColors
 * @desc Tone color used for dying actors.
 * Format: [Red, Green, Blue, Gray]
 * @default [0, -64, -64, 64]
 *
 */
/* ----------------------------------------------------------------------------
 * Portrait Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Portrait:
 *
 * @param Properties
 *
 * @param HorzFlip:eval
 * @text Flip Horizontally?
 * @parent Frontview
 * @type boolean
 * @on Flip
 * @off Don't Flip
 * @desc Flip portraits horizontally?
 * @default false
 *
 * @param HorzRate:num
 * @text Horizontal Rate
 * @parent Properties
 * @desc At what percentage of the screen should portraits show up?
 * 0.0 = Left, 0.5 = Center, 1.0 = Right.
 * @default 0.85
 *
 * @param Scale:num
 * @text Portrait Scale
 * @parent Properties
 * @desc At what scale are the portraits displayed at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 1.0
 *
 * @param Entrance
 * @text Entrance Settings
 *
 * @param EnterOffset:num
 * @text Enter Offset X
 * @parent Entrance
 * @desc How many pixels to offset the entrance point?
 * Negative: left. Positive: right.
 * @default +64
 *
 * @param EnterDuration:num
 * @text Enter Duration
 * @parent Entrance
 * @desc How many frames does it take to enter?
 * 60 frames = 1 second.
 * @default 20
 *
 * @param Fade
 * @text Opacity Settings
 *
 * @param ActionFadeOut:num
 * @text Action Fade Out
 * @parent Fade
 * @desc How many frames to fade out portraits on action portraits?
 * 60 frames = 1 second. Use 0 to disable.
 * @default 20
 *
 * @param TargetOpacity:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc What opacity should be used when targeting actors/enemies?
 * Use numbers from 0 to 255.
 * @default 64
 *
 * @param OpacitySpeed:num
 * @text Targeting Opacity
 * @parent Fade
 * @desc How fast does fade in/out work?
 * Lower is slower. Higher is faster.
 * @default 16
 *
 * @param Frontview
 * @text Frontview Settings
 *
 * @param FrontviewInput:eval
 * @text Show During Input?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param FrontviewSubject:eval
 * @text Show During Action?
 * @parent Frontview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default true
 *
 * @param FrontviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default false
 *
 * @param FrontviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Frontview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default true
 *
 * @param Sideview
 * @text Sideview Settings
 *
 * @param SideviewInput:eval
 * @text Show During Input?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during input phase?
 * @default true
 *
 * @param SideviewSubject:eval
 * @text Show During Action?
 * @parent Sideview
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show portraits during actions?
 * @default false
 *
 * @param SideviewTargetActor:eval
 * @text Target Actor Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting actors?
 * @default true
 *
 * @param SideviewTargetEnemy:eval
 * @text Target Enemy Fade?
 * @parent Sideview
 * @type boolean
 * @on Fade
 * @off Don't Fade
 * @desc Fade when targeting enemies?
 * @default false
 *
 */
/* ----------------------------------------------------------------------------
 * Battle Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battle:
 *
 * @param General
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 *
 * @param CommandHelpWindow:eval
 * @text Command Help Window?
 * @parent General
 * @type boolean
 * @on Show Help Window
 * @off Hide Help Window
 * @desc Show the Help Window for Actor Command Window and Party Command Window?
 * @default false
 *
 * @param EdgeBuffer:num
 * @text Edge Buffer
 * @parent General
 * @type number
 * @desc How many pixels of buffer room should there be from the screen edge?
 * @default 60
 *
 * @param MaxRows:num
 * @text Max Rows
 * @parent General
 * @type number
 * @min 1
 * @desc What is the maximum number of displayed rows for battle windows?
 * @default 8
 *
 * @param WindowScale:num
 * @text Window Scale
 * @parent General
 * @desc What scale should windows appear at?
 * 0.0 = 0%, 0.5 = 50%, 1.0 = 100%
 * @default 0.75
 *
 * @param ShowCancelButton:eval
 * @text Show Cancel Button?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the cancel button in battle?
 * @default false
 *
 * @param ShowShopStatus:eval
 * @text Show Shop Status?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show/hide the shop status window in battle?
 * Requires VisuMZ_1_ItemsEquipsCore!
 * @default true
 *
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default right
 *
 * @param MoveCenter:eval
 * @text Move Center?
 * @parent InitialUiPosition:str
 * @type boolean
 * @on Move
 * @off Stay
 * @desc Move the status UI from the initial position to the center?
 * @default true
 *
 * @param Window_ActorCommand:str
 * @text Actor Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the actor command window in battle.
 * @default left
 *
 * @param Window_PartyCommand:str
 * @text Party Command Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the party command window in battle.
 * @default left
 *
 * @param Window_ItemList_Pos:str
 * @text Item Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the item window in battle.
 * @default left
 *
 * @param Window_SkillList_Pos:str
 * @text Skill Window
 * @parent Position
 * @type select
 * @option left
 * @option right
 * @desc Determines the location of the skill window in battle.
 * @default left
 *
 * @param AniOffset
 * @text Animation Offset
 *
 * @param AniOffsetX:num
 * @text Offset X
 * @parent AniOffset
 * @desc How many pixels to offset the animation x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param AniOffsetY:num
 * @text Offset Y
 * @parent AniOffset
 * @desc How many pixels to offset the animation y position?
 * Negative: up. Positive: down.
 * @default +32
 *
 * @param BaseOffset
 * @text Base Offset
 *
 * @param BaseOffsetX:num
 * @text Offset X
 * @parent BaseOffset
 * @desc How many pixels to offset the base x position?
 * Negative: left. Positive: right.
 * @default +0
 *
 * @param BaseOffsetY:num
 * @text Offset Y
 * @parent BaseOffset
 * @desc How many pixels to offset the base y position?
 * Negative: up. Positive: down.
 * @default +18
 *
 * @param StackOffset
 * @text Stack Offset
 *
 * @param StackOffsetX:num
 * @text Offset X
 * @parent StackOffset
 * @desc How many pixels to offset the stack x position?
 * Negative: left. Positive: right.
 * @default +16
 *
 * @param StackOffsetY:num
 * @text Offset Y
 * @parent StackOffset
 * @desc How many pixels to offset the stack y position?
 * Negative: up. Positive: down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Frontview Battle UI with frontview ONLY. NOT applied for Sideview.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default -96
 *
 */
/* ----------------------------------------------------------------------------
 * Map Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Map:
 *
 * @param General
 *
 * @param ShowUiOnMap:eval
 * @text Show UI on Map?
 * @parent General
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the frontview UI on the map by default?
 * Does NOT work with other battle layouts.
 * @default true
 *
 * @param CompactWidth:eval
 * @text Compact Width?
 * @parent General
 * @type boolean
 * @on Compact
 * @off Full Width
 * @desc Make the status area more compact or have it extend the full width of the screen?
 * @default true
 * 
 * @param Position
 *
 * @param InitialUiPosition:str
 * @text Initial UI Position
 * @parent Position
 * @type select
 * @option left
 * @option center
 * @option right
 * @desc Determines the initial position of the status UI.
 * @default left
 *
 * @param Fading
 *
 * @param MinProxOpacity:num
 * @text Close Minimum Opacity
 * @parent Fading
 * @type number
 * @min 0
 * @desc Minimum opacity when the player is too close to the
 * status window on the map screen.
 * @default 128
 *
 * @param Scaling
 *
 * @param Scale:num
 * @text Scale Ratio
 * @parent Scaling
 * @desc What is the scaling for this UI on the map scene?
 * @default 1.0
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 *
 * @param WindowWidth
 * @text Window Widths
 *
 * @param CommandWindows:str
 * @text Command Windows
 * @parent WindowWidth
 * @desc Type in the numeric value you want this width to be.
 * Otherwise, type "auto" to let the plugin adjust them.
 * @default auto
 *
 * @param ItemWindows:str
 * @text Action Windows
 * @parent WindowWidth
 * @desc Type in the numeric value you want this width to be.
 * Otherwise, type "auto" to let the plugin adjust them.
 * @default auto
 *
 */
//=============================================================================

const _0x5f47e6=_0x587b;(function(_0x5bcd21,_0x1b3b51){const _0x7bb68c=_0x587b,_0x319201=_0x5bcd21();while(!![]){try{const _0x3176f7=-parseInt(_0x7bb68c(0x2ff))/0x1+-parseInt(_0x7bb68c(0x18e))/0x2+-parseInt(_0x7bb68c(0x173))/0x3+-parseInt(_0x7bb68c(0x186))/0x4+-parseInt(_0x7bb68c(0x34b))/0x5+parseInt(_0x7bb68c(0x2bb))/0x6+-parseInt(_0x7bb68c(0x228))/0x7*(-parseInt(_0x7bb68c(0x170))/0x8);if(_0x3176f7===_0x1b3b51)break;else _0x319201['push'](_0x319201['shift']());}catch(_0x32cd46){_0x319201['push'](_0x319201['shift']());}}}(_0x794d,0x3a42c));var label=_0x5f47e6(0x2ca),tier=tier||0x0,dependencies=['VisuMZ_0_CoreEngine','VisuMZ_1_BattleCore'],pluginData=$plugins[_0x5f47e6(0x306)](function(_0x50c4ec){const _0x3e195e=_0x5f47e6;return _0x50c4ec[_0x3e195e(0x37a)]&&_0x50c4ec[_0x3e195e(0x2c9)][_0x3e195e(0x359)]('['+label+']');})[0x0];VisuMZ[label][_0x5f47e6(0x20b)]=VisuMZ[label][_0x5f47e6(0x20b)]||{},VisuMZ['ConvertParams']=function(_0x3cbc84,_0x186567){const _0x343fa2=_0x5f47e6;for(const _0x1bb5c0 in _0x186567){if(_0x1bb5c0[_0x343fa2(0x437)](/(.*):(.*)/i)){const _0x13cfd8=String(RegExp['$1']),_0x4dadfb=String(RegExp['$2'])[_0x343fa2(0x410)]()[_0x343fa2(0x273)]();let _0xc16789,_0x32e7c1,_0x550569;switch(_0x4dadfb){case'NUM':_0xc16789=_0x186567[_0x1bb5c0]!==''?Number(_0x186567[_0x1bb5c0]):0x0;break;case _0x343fa2(0x383):_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1['map'](_0x5632d2=>Number(_0x5632d2));break;case _0x343fa2(0x1f7):_0xc16789=_0x186567[_0x1bb5c0]!==''?eval(_0x186567[_0x1bb5c0]):null;break;case _0x343fa2(0x1a3):_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1[_0x343fa2(0x3e0)](_0x18bdf=>eval(_0x18bdf));break;case _0x343fa2(0x307):_0xc16789=_0x186567[_0x1bb5c0]!==''?JSON['parse'](_0x186567[_0x1bb5c0]):'';break;case'ARRAYJSON':_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON['parse'](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1[_0x343fa2(0x3e0)](_0x38015e=>JSON['parse'](_0x38015e));break;case _0x343fa2(0x1d0):_0xc16789=_0x186567[_0x1bb5c0]!==''?new Function(JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0])):new Function(_0x343fa2(0x1f1));break;case _0x343fa2(0x19a):_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1[_0x343fa2(0x3e0)](_0x21b1a5=>new Function(JSON['parse'](_0x21b1a5)));break;case'STR':_0xc16789=_0x186567[_0x1bb5c0]!==''?String(_0x186567[_0x1bb5c0]):'';break;case _0x343fa2(0x39e):_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1[_0x343fa2(0x3e0)](_0x3e3f6c=>String(_0x3e3f6c));break;case _0x343fa2(0x40f):_0x550569=_0x186567[_0x1bb5c0]!==''?JSON['parse'](_0x186567[_0x1bb5c0]):{},_0xc16789=VisuMZ['ConvertParams']({},_0x550569);break;case _0x343fa2(0x310):_0x32e7c1=_0x186567[_0x1bb5c0]!==''?JSON[_0x343fa2(0x256)](_0x186567[_0x1bb5c0]):[],_0xc16789=_0x32e7c1[_0x343fa2(0x3e0)](_0xfb452d=>VisuMZ[_0x343fa2(0x388)]({},JSON[_0x343fa2(0x256)](_0xfb452d)));break;default:continue;}_0x3cbc84[_0x13cfd8]=_0xc16789;}}return _0x3cbc84;},(_0x19c820=>{const _0xbd2ecd=_0x5f47e6,_0x4b6864=_0x19c820[_0xbd2ecd(0x418)];for(const _0x45c14b of dependencies){if(!Imported[_0x45c14b]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0xbd2ecd(0x221)](_0x4b6864,_0x45c14b)),SceneManager[_0xbd2ecd(0x35f)]();break;}}const _0x46b6d3=_0x19c820[_0xbd2ecd(0x2c9)];if(_0x46b6d3[_0xbd2ecd(0x437)](/\[Version[ ](.*?)\]/i)){const _0x115cb3=Number(RegExp['$1']);_0x115cb3!==VisuMZ[label][_0xbd2ecd(0x38e)]&&(alert(_0xbd2ecd(0x31b)['format'](_0x4b6864,_0x115cb3)),SceneManager[_0xbd2ecd(0x35f)]());}if(_0x46b6d3['match'](/\[Tier[ ](\d+)\]/i)){const _0x1262e4=Number(RegExp['$1']);_0x1262e4<tier?(alert(_0xbd2ecd(0x197)[_0xbd2ecd(0x221)](_0x4b6864,_0x1262e4,tier)),SceneManager[_0xbd2ecd(0x35f)]()):tier=Math['max'](_0x1262e4,tier);}VisuMZ[_0xbd2ecd(0x388)](VisuMZ[label][_0xbd2ecd(0x20b)],_0x19c820[_0xbd2ecd(0x1ae)]);})(pluginData);if(VisuMZ[_0x5f47e6(0x42e)][_0x5f47e6(0x38e)]<1.7){let text='';text+=_0x5f47e6(0x396),text+=_0x5f47e6(0x36a),alert(text),SceneManager['exit']();}if(VisuMZ[_0x5f47e6(0x179)]['version']<1.7){let text='';text+='VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20',text+=_0x5f47e6(0x36a),alert(text),SceneManager[_0x5f47e6(0x35f)]();}PluginManager[_0x5f47e6(0x435)](pluginData[_0x5f47e6(0x418)],_0x5f47e6(0x22f),_0x2d78dd=>{const _0x59f44a=_0x5f47e6;if(!SceneManager[_0x59f44a(0x38c)]())return;VisuMZ[_0x59f44a(0x388)](_0x2d78dd,_0x2d78dd);const _0x50fcd5=_0x2d78dd[_0x59f44a(0x384)][_0x59f44a(0x3e0)](_0xcdd411=>$gameActors[_0x59f44a(0x361)](Number(_0xcdd411))),_0x459bd9=_0x2d78dd[_0x59f44a(0x3d1)],_0x1aaced={'textColor':ColorManager[_0x59f44a(0x1ad)](_0x2d78dd['TextColor']),'flashColor':_0x2d78dd[_0x59f44a(0x1ab)],'flashDuration':_0x2d78dd[_0x59f44a(0x1b4)]};for(const _0x17083e of _0x50fcd5){if(!_0x17083e)continue;VisuMZ['FrontviewBattleUI']['setupTextPopup'](_0x17083e,_0x459bd9,_0x1aaced);}}),PluginManager[_0x5f47e6(0x435)](pluginData['name'],_0x5f47e6(0x349),_0xc01b76=>{const _0x5d3a14=_0x5f47e6;if(!SceneManager[_0x5d3a14(0x38c)]())return;VisuMZ['ConvertParams'](_0xc01b76,_0xc01b76);const _0x17556c=_0xc01b76['Index'][_0x5d3a14(0x3e0)](_0x35dbad=>$gameParty[_0x5d3a14(0x272)]()[_0x35dbad]),_0x19eab9=_0xc01b76['Text'],_0x1490f4={'textColor':ColorManager[_0x5d3a14(0x1ad)](_0xc01b76[_0x5d3a14(0x1cb)]),'flashColor':_0xc01b76['FlashColor'],'flashDuration':_0xc01b76[_0x5d3a14(0x1b4)]};for(const _0x43e84b of _0x17556c){if(!_0x43e84b)continue;VisuMZ[_0x5d3a14(0x2ca)][_0x5d3a14(0x3cc)](_0x43e84b,_0x19eab9,_0x1490f4);}}),PluginManager[_0x5f47e6(0x435)](pluginData[_0x5f47e6(0x418)],_0x5f47e6(0x252),_0x38a0c1=>{const _0xb4b311=_0x5f47e6;if(!SceneManager['isUsingFrontviewUiLayout']())return;VisuMZ['ConvertParams'](_0x38a0c1,_0x38a0c1);const _0x4eaee8=_0x38a0c1[_0xb4b311(0x384)][_0xb4b311(0x3e0)](_0x2854bd=>$gameActors[_0xb4b311(0x361)](Number(_0x2854bd))),_0x42db71=String($gameVariables[_0xb4b311(0x1a6)](_0x38a0c1['Variable'])),_0x4693f7={'textColor':ColorManager['getColor'](_0x38a0c1[_0xb4b311(0x1cb)]),'flashColor':_0x38a0c1[_0xb4b311(0x1ab)],'flashDuration':_0x38a0c1[_0xb4b311(0x1b4)]};for(const _0x3140c4 of _0x4eaee8){if(!_0x3140c4)continue;VisuMZ['FrontviewBattleUI'][_0xb4b311(0x3cc)](_0x3140c4,_0x42db71,_0x4693f7);}}),PluginManager[_0x5f47e6(0x435)](pluginData[_0x5f47e6(0x418)],_0x5f47e6(0x2b5),_0x431485=>{const _0x2868a1=_0x5f47e6;if(!SceneManager['isUsingFrontviewUiLayout']())return;VisuMZ[_0x2868a1(0x388)](_0x431485,_0x431485);const _0x574467=_0x431485[_0x2868a1(0x430)][_0x2868a1(0x3e0)](_0x2ca067=>$gameParty[_0x2868a1(0x272)]()[_0x2ca067]),_0x2f8875=String($gameVariables[_0x2868a1(0x1a6)](_0x431485[_0x2868a1(0x3a6)])),_0xbd63f1={'textColor':ColorManager[_0x2868a1(0x1ad)](_0x431485['TextColor']),'flashColor':_0x431485['FlashColor'],'flashDuration':_0x431485[_0x2868a1(0x1b4)]};for(const _0x1642ec of _0x574467){if(!_0x1642ec)continue;VisuMZ[_0x2868a1(0x2ca)][_0x2868a1(0x3cc)](_0x1642ec,_0x2f8875,_0xbd63f1);}}),PluginManager['registerCommand'](pluginData[_0x5f47e6(0x418)],_0x5f47e6(0x1aa),_0x905e6b=>{const _0x205212=_0x5f47e6;VisuMZ[_0x205212(0x388)](_0x905e6b,_0x905e6b);const _0x56723e=_0x905e6b[_0x205212(0x436)];$gameSystem[_0x205212(0x24a)](_0x56723e);}),VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2a1)]={'PortraitData':/<(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>\s*([\s\S]*)\s*<\/(?:FV|FRONTVIEW) UI (?:PORTRAIT|PORTRAITS|BUST|BUSTS)>/i,'PortraitLine':/(.*):[ ](.*)/i,'ShowMapBattleStatus':/<SHOW (?:FV|FRONTVIEW) UI>/i,'HideMapBattleStatus':/<HIDE (?:FV|FRONTVIEW) UI>/i},Bitmap['prototype']['drawOutlinePolygon']=function(_0x3d6e03,_0x2729d6,_0x55c5b0,_0x2ac77e,_0x49de75,_0x561e85){const _0x46f028=_0x5f47e6,_0x51967c=this[_0x46f028(0x1c2)];_0x51967c[_0x46f028(0x425)](),_0x51967c[_0x46f028(0x399)](),_0x51967c[_0x46f028(0x22e)](_0x3d6e03[0x0],_0x3d6e03[0x1]);for(var _0x3b4a0d=0x2;_0x3b4a0d<_0x3d6e03['length'];_0x3b4a0d+=0x2){_0x51967c[_0x46f028(0x18c)](_0x3d6e03[_0x3b4a0d],_0x3d6e03[_0x3b4a0d+0x1]);}_0x51967c[_0x46f028(0x18c)](_0x3d6e03[0x0],_0x3d6e03[0x1]),_0x51967c[_0x46f028(0x33f)]=_0x2729d6,_0x51967c[_0x46f028(0x1b5)]=_0x2ac77e,_0x561e85&&_0x51967c['stroke'](),_0x51967c[_0x46f028(0x30d)]=_0x49de75,_0x51967c[_0x46f028(0x17a)]=_0x55c5b0,_0x51967c['fill'](),_0x51967c[_0x46f028(0x30d)]=0x1,_0x51967c[_0x46f028(0x41f)](),this['_baseTexture']['update']();},DataManager[_0x5f47e6(0x264)]=function(_0x33573b,_0x5efda3){const _0x2cd6a6=_0x5f47e6;if(!_0x33573b)return'';if(!_0x33573b[_0x2cd6a6(0x2d6)]())return'';if(!_0x5efda3)return'';const _0x1f1cb9=this['getFrontviewUiPortraitData'](_0x33573b);for(const _0x18bf0b of _0x5efda3){const _0x394652=_0x18bf0b[_0x2cd6a6(0x410)]()[_0x2cd6a6(0x273)]();if(_0x1f1cb9[_0x394652])return _0x1f1cb9[_0x394652];}return _0x33573b[_0x2cd6a6(0x39b)]()||'';},DataManager[_0x5f47e6(0x34f)]=function(_0x324b13){const _0x39cc59=_0x5f47e6;if(!_0x324b13)return{};const _0x559f6a=_0x324b13[_0x39cc59(0x2b3)]();this[_0x39cc59(0x233)]=this['_frontviewUiPortraitData']||{};if(this[_0x39cc59(0x233)][_0x559f6a]!==undefined)return this['_frontviewUiPortraitData'][_0x559f6a];const _0x129fc5=_0x324b13[_0x39cc59(0x361)]()[_0x39cc59(0x23f)]||'',_0x26e318=VisuMZ[_0x39cc59(0x2ca)][_0x39cc59(0x2a1)],_0x57f5f0=_0x26e318[_0x39cc59(0x253)],_0x2c8571=_0x26e318[_0x39cc59(0x25b)],_0x5a13b5={};if(_0x129fc5['match'](_0x57f5f0)){const _0x75db9d=String(RegExp['$1'])[_0x39cc59(0x273)]()[_0x39cc59(0x1e6)](/[\r\n]+/);for(const _0x22f839 of _0x75db9d){if(_0x22f839[_0x39cc59(0x437)](_0x2c8571)){const _0x73eb80=String(RegExp['$1'])['toUpperCase']()[_0x39cc59(0x273)](),_0x16eb6e=String(RegExp['$2'])['trim']();_0x5a13b5[_0x73eb80]=_0x16eb6e;}}}return this[_0x39cc59(0x233)][_0x559f6a]=_0x5a13b5,this[_0x39cc59(0x233)][_0x559f6a];},ImageManager[_0x5f47e6(0x29f)]=function(){const _0x4df64b=_0x5f47e6;if(this['_frontviewBattleUiBackgroundRender'])return this[_0x4df64b(0x3c6)];const _0x2297a8=ImageManager['faceWidth'],_0x17d282=ImageManager['faceHeight'],_0x50b999=0x1,_0x59234d=new Bitmap(_0x2297a8,_0x17d282),_0xe02473=[_0x2297a8/0x2,_0x50b999,_0x50b999,_0x17d282/0x2,_0x2297a8/0x2,_0x17d282-_0x50b999,_0x2297a8+_0x50b999,_0x17d282/0x2],_0x3caed4='#ffffff',_0x2a86ac=ColorManager[_0x4df64b(0x248)]();return _0x59234d[_0x4df64b(0x293)](_0xe02473,_0x3caed4,_0x2a86ac,_0x50b999,0x1,!![]),_0x59234d['_customModified']=![],this['_frontviewBattleUiBackgroundRender']=_0x59234d,this[_0x4df64b(0x3c6)];},ImageManager['frontviewBattleUiFaceMaskRender']=function(){const _0x166995=_0x5f47e6;if(this['_frontviewBattleUiFaceMaskRender'])return this[_0x166995(0x38f)];const _0x3b2531=ImageManager['faceWidth'],_0x5c739b=ImageManager[_0x166995(0x1e5)],_0x5a8649=0x0,_0x3b0d73=Sprite_FvUiStatus[_0x166995(0x2a3)][_0x166995(0x3b9)],_0x223993=new Bitmap(_0x3b2531,_0x5c739b),_0x59f0a1=[_0x3b0d73,_0x5a8649,_0x5a8649,_0x5c739b-_0x5a8649,_0x3b2531-_0x5a8649,_0x5c739b-_0x3b0d73],_0x24433a=_0x166995(0x347),_0x506680=_0x166995(0x347);return _0x223993[_0x166995(0x293)](_0x59f0a1,_0x24433a,_0x506680,_0x5a8649,0x1,!![]),_0x223993[_0x166995(0x1fe)]=![],this[_0x166995(0x38f)]=_0x223993,this[_0x166995(0x38f)];},SceneManager[_0x5f47e6(0x343)]=function(){const _0x27dc8e=_0x5f47e6;return this[_0x27dc8e(0x355)]&&this[_0x27dc8e(0x355)][_0x27dc8e(0x258)]===Scene_Battle;},SceneManager['isSceneMap']=function(){const _0x48e0e6=_0x5f47e6;return this['_scene']&&this[_0x48e0e6(0x355)][_0x48e0e6(0x258)]===Scene_Map;},SceneManager[_0x5f47e6(0x38c)]=function(){const _0x3bd688=_0x5f47e6;return SceneManager[_0x3bd688(0x424)]()&&VisuMZ[_0x3bd688(0x179)][_0x3bd688(0x20b)][_0x3bd688(0x403)]['Style']['toLowerCase']()[_0x3bd688(0x273)]()===VisuMZ[_0x3bd688(0x2ca)][_0x3bd688(0x412)];},VisuMZ[_0x5f47e6(0x2ca)]['BATTLE_LAYOUT']=_0x5f47e6(0x2d0),BattleManager[_0x5f47e6(0x38c)]=function(){const _0x44913a=_0x5f47e6;return SceneManager[_0x44913a(0x343)]()&&SceneManager['_scene'][_0x44913a(0x3c0)]()===VisuMZ[_0x44913a(0x2ca)]['BATTLE_LAYOUT'];},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x443)]=Game_System[_0x5f47e6(0x41c)]['initialize'],Game_System[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(){const _0x3d24e3=_0x5f47e6;VisuMZ[_0x3d24e3(0x2ca)]['Game_System_initialize'][_0x3d24e3(0x2ad)](this),this[_0x3d24e3(0x39f)]();},Game_System[_0x5f47e6(0x41c)][_0x5f47e6(0x39f)]=function(){const _0x37816e=_0x5f47e6;this[_0x37816e(0x3f7)]=Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI'][_0x37816e(0x201)];},Game_System[_0x5f47e6(0x41c)][_0x5f47e6(0x3af)]=function(){const _0x13d613=_0x5f47e6;if(this[_0x13d613(0x3f7)]===undefined)this[_0x13d613(0x39f)]();return this[_0x13d613(0x3f7)];},Game_System[_0x5f47e6(0x41c)][_0x5f47e6(0x24a)]=function(_0x23c4cf){const _0x169af7=_0x5f47e6;if(this[_0x169af7(0x3f7)]===undefined)this[_0x169af7(0x39f)]();this[_0x169af7(0x3f7)]=_0x23c4cf;},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x269)]=Game_Map[_0x5f47e6(0x41c)][_0x5f47e6(0x265)],Game_Map['prototype'][_0x5f47e6(0x265)]=function(_0x1d1393){const _0x71be67=_0x5f47e6;VisuMZ[_0x71be67(0x2ca)][_0x71be67(0x269)][_0x71be67(0x2ad)](this,_0x1d1393),this[_0x71be67(0x1c1)]();},Game_Map[_0x5f47e6(0x41c)][_0x5f47e6(0x1c1)]=function(){const _0x1cb7da=_0x5f47e6,_0x3396e9=VisuMZ[_0x1cb7da(0x2ca)][_0x1cb7da(0x2a1)],_0x10c9c2=$dataMap?$dataMap['note']||'':'';if(_0x10c9c2[_0x1cb7da(0x437)](_0x3396e9[_0x1cb7da(0x2d8)]))$gameSystem[_0x1cb7da(0x24a)](!![]);else{if(_0x10c9c2[_0x1cb7da(0x437)](_0x3396e9[_0x1cb7da(0x3bf)]))$gameSystem[_0x1cb7da(0x24a)](![]);else{const _0x45350=Window_FrontviewUiMapBattleStatus[_0x1cb7da(0x378)][_0x1cb7da(0x201)];$gameSystem['setFrontviewBattleUiMapVisible'](_0x45350);}}},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3f1)]=Game_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x299)],Game_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x299)]=function(_0x2d7607){const _0x17d772=_0x5f47e6;VisuMZ[_0x17d772(0x2ca)][_0x17d772(0x3f1)]['call'](this,_0x2d7607),this[_0x17d772(0x2d6)]()&&SceneManager[_0x17d772(0x38c)]()&&VisuMZ[_0x17d772(0x2ca)][_0x17d772(0x25f)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x32c)]=Game_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x31d)],Game_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x31d)]=function(_0x53571b){const _0x4e0f95=_0x5f47e6;VisuMZ[_0x4e0f95(0x2ca)][_0x4e0f95(0x32c)][_0x4e0f95(0x2ad)](this,_0x53571b),this[_0x4e0f95(0x2d6)]()&&SceneManager['isUsingFrontviewUiLayout']()&&VisuMZ[_0x4e0f95(0x2ca)][_0x4e0f95(0x25f)](this);},VisuMZ[_0x5f47e6(0x2ca)]['Game_Battler_onAddState']=Game_Battler[_0x5f47e6(0x41c)]['onAddState'],Game_Battler['prototype']['onAddState']=function(_0x401d2a){const _0x179974=_0x5f47e6;VisuMZ['FrontviewBattleUI'][_0x179974(0x38d)][_0x179974(0x2ad)](this,_0x401d2a),VisuMZ['FrontviewBattleUI'][_0x179974(0x317)](this,_0x401d2a,!![]);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x398)]=Game_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x26c)],Game_Battler['prototype'][_0x5f47e6(0x26c)]=function(_0x594ec9){const _0x5ec349=_0x5f47e6;if(!this['_die_bypass_visualStateEffects'])VisuMZ['FrontviewBattleUI'][_0x5ec349(0x317)](this,_0x594ec9,![]);VisuMZ[_0x5ec349(0x2ca)][_0x5ec349(0x398)]['call'](this,_0x594ec9);},Game_Player[_0x5f47e6(0x41c)][_0x5f47e6(0x25c)]=function(){const _0x5079ce=_0x5f47e6;if(SceneManager[_0x5079ce(0x424)]()&&SceneManager[_0x5079ce(0x22b)](Scene_Battle))return![];const _0x1b2c08=this[_0x5079ce(0x174)]()*$gameScreen[_0x5079ce(0x1a8)](),_0xbf6707=SceneManager[_0x5079ce(0x355)];if(_0xbf6707){const _0x2df48e=_0xbf6707[_0x5079ce(0x1bf)];if(_0x2df48e&&_0x1b2c08>=_0x2df48e['y'])return!![];}return![];},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x3b1)]=Scene_Map[_0x5f47e6(0x41c)]['createAllWindows'],Scene_Map[_0x5f47e6(0x41c)][_0x5f47e6(0x18a)]=function(){const _0x110988=_0x5f47e6;this['createFrontviewUiBattleStatusWindow'](),VisuMZ[_0x110988(0x2ca)][_0x110988(0x3b1)][_0x110988(0x2ad)](this);},Scene_Map[_0x5f47e6(0x41c)][_0x5f47e6(0x342)]=function(){const _0x15c1e3=_0x5f47e6;if(!Window_FrontviewUiMapBattleStatus[_0x15c1e3(0x41c)][_0x15c1e3(0x3ef)]())return;const _0x14b549=this[_0x15c1e3(0x296)]();this[_0x15c1e3(0x1bf)]=new Window_FrontviewUiMapBattleStatus(_0x14b549),this['addWindow'](this[_0x15c1e3(0x1bf)]);},Scene_Map[_0x5f47e6(0x41c)]['getFrontviewUiBattleStatusWindow']=function(){const _0x240963=_0x5f47e6;let _0x2f114f=Graphics['width'];Window_FrontviewUiMapBattleStatus[_0x240963(0x378)][_0x240963(0x3c2)]&&(_0x2f114f-=0x60*0x2,_0x2f114f<(ImageManager[_0x240963(0x1e2)]+0x40)*$gameParty[_0x240963(0x2e7)]()&&(_0x2f114f=(ImageManager[_0x240963(0x1e2)]+0x40)*$gameParty['maxBattleMembers']()));const _0x23477a=ImageManager[_0x240963(0x1e5)]+Window_Base[_0x240963(0x41c)][_0x240963(0x411)]()*0x2,_0xe9f874=Window_FrontviewUiMapBattleStatus[_0x240963(0x378)][_0x240963(0x328)],_0x161a2d=Math[_0x240963(0x21e)](_0x2f114f*0x1),_0x155242=Math[_0x240963(0x21e)](_0x23477a*_0xe9f874),_0x48b1b5=(Graphics[_0x240963(0x17c)]-_0x161a2d)/0x2,_0x2c1f82=Graphics[_0x240963(0x3ee)]-_0x155242;return new Rectangle(_0x48b1b5,_0x2c1f82,_0x2f114f,_0x23477a);},VisuMZ['FrontviewBattleUI']['Scene_Base_isWindowMaskingEnabled']=Scene_Base[_0x5f47e6(0x41c)]['isWindowMaskingEnabled'],Scene_Base['prototype']['isWindowMaskingEnabled']=function(){const _0x104d30=_0x5f47e6;return BattleManager[_0x104d30(0x38c)]()?![]:VisuMZ['FrontviewBattleUI'][_0x104d30(0x209)][_0x104d30(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x27b)]=Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x1e7)],Scene_Battle[_0x5f47e6(0x41c)]['buttonAreaTop']=function(){const _0xeb136d=_0x5f47e6;return BattleManager[_0xeb136d(0x38c)]()?Window_Base['FRONTVIEW_BATTLE_UI'][_0xeb136d(0x1ed)]?Graphics[_0xeb136d(0x40d)]-this[_0xeb136d(0x2f7)][_0xeb136d(0x3ee)]:Graphics[_0xeb136d(0x40d)]*0xa:VisuMZ[_0xeb136d(0x2ca)][_0xeb136d(0x27b)][_0xeb136d(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x337)]=Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x1f9)],Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x1f9)]=function(){const _0x561bfc=_0x5f47e6;return BattleManager[_0x561bfc(0x38c)]()?this[_0x561bfc(0x190)]():VisuMZ[_0x561bfc(0x2ca)][_0x561bfc(0x337)]['call'](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x409)]=Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x2e6)],Scene_Battle[_0x5f47e6(0x41c)]['actorWindowRect']=function(){const _0x2aca18=_0x5f47e6,_0x49e307=VisuMZ[_0x2aca18(0x2ca)][_0x2aca18(0x409)][_0x2aca18(0x2ad)](this);return BattleManager['isUsingFrontviewUiLayout']()&&(_0x49e307['y']=Graphics[_0x2aca18(0x3ee)]*0xa,_0x49e307['height']=0x0),_0x49e307;},Scene_Battle[_0x5f47e6(0x41c)]['frontviewBattleUiStatusWindowRect']=function(){const _0x4814fa=_0x5f47e6;let _0x71b6de=Graphics[_0x4814fa(0x219)];Window_BattleStatus[_0x4814fa(0x378)][_0x4814fa(0x3c2)]&&(_0x71b6de-=0x60*0x2,_0x71b6de<(ImageManager[_0x4814fa(0x1e2)]+0x40)*$gameParty[_0x4814fa(0x2e7)]()&&(_0x71b6de=(ImageManager[_0x4814fa(0x1e2)]+0x40)*$gameParty[_0x4814fa(0x2e7)]()));const _0x503d7c=ImageManager[_0x4814fa(0x1e5)]+Window_Base['prototype'][_0x4814fa(0x411)]()*0x2,_0x16f61=(Graphics[_0x4814fa(0x17c)]-_0x71b6de)/0x2,_0x53d441=Graphics[_0x4814fa(0x3ee)]-_0x503d7c-this[_0x4814fa(0x325)]['y'];return new Rectangle(_0x16f61,_0x53d441,_0x71b6de,_0x503d7c);},VisuMZ['FrontviewBattleUI']['Scene_Battle_updateStatusWindowPosition']=Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x3aa)],Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x3aa)]=function(){const _0x305df5=_0x5f47e6;BattleManager[_0x305df5(0x38c)]()?this['updateFrontviewBattleUiPositions']():VisuMZ[_0x305df5(0x2ca)][_0x305df5(0x3b7)][_0x305df5(0x2ad)](this);},Scene_Battle[_0x5f47e6(0x41c)]['updateFrontviewBattleUiPositions']=function(){const _0x4913d8=_0x5f47e6;this['_actorWindow'][_0x4913d8(0x184)]&&(this['_actorCommandWindow']['close'](),this['_skillWindow'][_0x4913d8(0x277)](),this[_0x4913d8(0x1ee)][_0x4913d8(0x277)]());this[_0x4913d8(0x275)][_0x4913d8(0x184)]&&(this['_actorCommandWindow'][_0x4913d8(0x277)](),this['_skillWindow'][_0x4913d8(0x277)](),this[_0x4913d8(0x1ee)][_0x4913d8(0x277)]());if(this[_0x4913d8(0x3e2)][_0x4913d8(0x184)])this[_0x4913d8(0x3e2)][_0x4913d8(0x217)]();else this['_actorCommandWindow'][_0x4913d8(0x184)]&&(this['_actorCommandWindow'][_0x4913d8(0x331)]&&this[_0x4913d8(0x1be)]['open']());this[_0x4913d8(0x25e)][_0x4913d8(0x184)]&&(this['_actorCommandWindow'][_0x4913d8(0x217)](),this[_0x4913d8(0x25e)][_0x4913d8(0x217)]()),this[_0x4913d8(0x1ee)][_0x4913d8(0x184)]&&(this[_0x4913d8(0x1be)][_0x4913d8(0x217)](),this[_0x4913d8(0x1ee)][_0x4913d8(0x217)]());},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x33c)]=Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x43b)],Scene_Battle['prototype'][_0x5f47e6(0x43b)]=function(){const _0x41f527=_0x5f47e6;VisuMZ['FrontviewBattleUI']['Scene_Battle_createItemWindow'][_0x41f527(0x2ad)](this),this[_0x41f527(0x429)]();},Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x429)]=function(){const _0x583db4=_0x5f47e6;if(!this['canCreateFrontviewUiShopStatusWindow']())return;const _0x366de9=this[_0x583db4(0x2c6)]();this[_0x583db4(0x363)]=new Window_ShopStatus(_0x366de9),this['_shopStatusWindow'][_0x583db4(0x1cd)](),this[_0x583db4(0x2be)](this['_shopStatusWindow']),this[_0x583db4(0x363)][_0x583db4(0x3ae)](),Imported['VisuMZ_1_SkillsStatesCore']&&this[_0x583db4(0x25e)][_0x583db4(0x239)](this['_shopStatusWindow']),this['_itemWindow']['setStatusWindow'](this[_0x583db4(0x363)]);},Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x28b)]=function(){const _0x3c15a8=_0x5f47e6;if(!BattleManager[_0x3c15a8(0x38c)]())return![];if(!Imported[_0x3c15a8(0x1a4)])return![];return Window_Base[_0x3c15a8(0x378)][_0x3c15a8(0x392)];},Scene_Battle[_0x5f47e6(0x41c)]['frontviewShopStatusWindowRect']=function(){const _0x3741ce=_0x5f47e6,_0x19cbf3=Window_Base[_0x3741ce(0x378)][_0x3741ce(0x314)],_0x216f37=VisuMZ[_0x3741ce(0x375)]['Settings'][_0x3741ce(0x234)]['Width'],_0x350f23=this[_0x3741ce(0x2a2)](_0x19cbf3,!![]),_0x52233d=0x0,_0x170531=0x0;return new Rectangle(_0x52233d,_0x170531,_0x216f37,_0x350f23);},VisuMZ[_0x5f47e6(0x2ca)]['Scene_Battle_createSpriteset']=Scene_Battle[_0x5f47e6(0x41c)]['createSpriteset'],Scene_Battle[_0x5f47e6(0x41c)]['createSpriteset']=function(){const _0x38131e=_0x5f47e6;VisuMZ[_0x38131e(0x2ca)][_0x38131e(0x3d0)][_0x38131e(0x2ad)](this),this['createFrontviewUiBattlePortraits']();},Scene_Battle[_0x5f47e6(0x41c)][_0x5f47e6(0x1ff)]=function(){const _0x2d770f=_0x5f47e6;if(!BattleManager[_0x2d770f(0x38c)]())return;this['_frontviewBattlePortraits']=new Sprite_FvUiController(),this[_0x2d770f(0x208)](this['_frontviewBattlePortraits']);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2b1)]=Sprite_Name[_0x5f47e6(0x41c)][_0x5f47e6(0x1e3)],Sprite_Name[_0x5f47e6(0x41c)][_0x5f47e6(0x1e3)]=function(){const _0x508959=_0x5f47e6;return VisuMZ[_0x508959(0x2ca)][_0x508959(0x2b1)][_0x508959(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)]['Sprite_Name_outlineWidth']=Sprite_Name['prototype'][_0x5f47e6(0x257)],Sprite_Name[_0x5f47e6(0x41c)]['outlineWidth']=function(){const _0x12ddbb=_0x5f47e6;if(BattleManager[_0x12ddbb(0x38c)]())return 0x4;return VisuMZ[_0x12ddbb(0x2ca)]['Sprite_Name_outlineWidth'][_0x12ddbb(0x2ad)](this);},Sprite_Name['prototype'][_0x5f47e6(0x3b2)]=function(){const _0x2d7463=_0x5f47e6,_0x3e9703=this[_0x2d7463(0x418)](),_0x42ef70=this['bitmapWidth'](),_0x297d7a=this[_0x2d7463(0x223)]();this[_0x2d7463(0x34a)](),this[_0x2d7463(0x42f)]['clear'](),this[_0x2d7463(0x42f)][_0x2d7463(0x36e)](_0x3e9703,0x4,0x0,_0x42ef70-0xa,_0x297d7a,_0x2d7463(0x17e));},Sprite_Battler['FRONTVIEW_BATTLE_UI_MOVE_BATTLERS']=VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x326)][_0x5f47e6(0x282)]??!![],Sprite_Battler[_0x5f47e6(0x318)]=VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x326)][_0x5f47e6(0x2fb)]??0x0,Sprite_Battler['FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_Y']=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['Battler'][_0x5f47e6(0x3cd)]??-0x80,VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x338)]=Sprite_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x422)],Sprite_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x422)]=function(_0x3085f4,_0x236cfb){const _0x59beba=_0x5f47e6;this[_0x59beba(0x2c4)]()&&(_0x3085f4+=Sprite_Battler[_0x59beba(0x318)],_0x236cfb+=Sprite_Battler[_0x59beba(0x2f1)]),VisuMZ['FrontviewBattleUI'][_0x59beba(0x338)][_0x59beba(0x2ad)](this,_0x3085f4,_0x236cfb);},Sprite_Battler['prototype'][_0x5f47e6(0x2c4)]=function(){const _0x18777d=_0x5f47e6;if(!BattleManager[_0x18777d(0x38c)]())return![];if($gameSystem['isSideView']())return![];return Sprite_Battler[_0x18777d(0x29e)];},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2bd)]=Sprite_Battler['prototype']['updateVisibility'],Sprite_Battler[_0x5f47e6(0x41c)]['updateVisibility']=function(){const _0x13c796=_0x5f47e6;VisuMZ[_0x13c796(0x2ca)][_0x13c796(0x2bd)]['call'](this),this[_0x13c796(0x2c4)]()&&this[_0x13c796(0x445)]&&this[_0x13c796(0x445)]['isActor']()&&(this[_0x13c796(0x3ad)]=0x0);};function Sprite_FvUiStatus(){const _0xde45bd=_0x5f47e6;this[_0xde45bd(0x352)](...arguments);}function _0x794d(){const _0x6100d=['Window_PartyCommand_makeCommandList','Window_ItemList_maxCols','Window','actorWindowRect','maxBattleMembers','adjustFrontviewUiWidth','CompactWidth','addFaceMaskSprite','addLoadListener','UI_MpGauge_OffsetY','CommandHelpWindow','createTpbGauge','Window_BattleStatus_maxItems','flashDuration','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_Y','Window_PartyCommand_activate','checkShakeContainer','Window_BattleItem_show','frontviewUiLocation','maxItems','_cancelButton','isBTB','BLEND_COLORS','Window_PartyCommand_initialize','OffsetX','createActiveContainer','startMove','_uiContainer','49144JUxPXR','updateActiveContainer','UI_AggroGauge_Angle','frontviewUiPositionX','loadFace','BRAVE_POINTS','faceIndex','filter','JSON','showFrontviewUiShopStatusWindow','_activeAutoFadeOut','Scale','FRIENDLY','updateDamageOpacity','globalAlpha','createHpGauge','battleUIOffsetY','ARRAYSTRUCT','_finishInitMembers','showHelpWindow','drawItemBackground','maxRows','contents','updateNameSprite','StartStatePopup','FRONTVIEW_BATTLE_UI_BATTLER_OFFSET_X','update','_lastHpValue','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','MpDamage','gainMp','_damageSprites','_list','setLastInputLocation','FV_OPACITY_RATE','updatePadding','EdgeBuffer','_flashDuration','_windowLayer','Battler','isPlaying','scale','create','_lastInputFilenameCache','Gauge','Game_Battler_gainMp','gradientFillRect','FV_FADE_SELECT','_subjectContainer','ActiveShiftY','_actor','itemRect','createBitmap','UI_BreakShields_OffsetY','StateTooltips','ACTIVE_AUTO_FADEOUT','Scene_Battle_statusWindowRect','Sprite_Battler_setHome','addDamageSprite','CommandWindows','_shakeDuration','Scene_Battle_createItemWindow','randomInt','StackOffsetX','strokeStyle','_mpGauge','FrontviewTargetEnemy','createFrontviewUiBattleStatusWindow','isSceneBattle','length','_inputContainer','BACKGROUND_FILENAME','#ffffff','OPPONENT','MapUICustomTextParty','setupFont','1588450KycPAW','updateToneFilter','VisuMZ_3_VisualStateEffects','ActiveShiftYSpeed','getFrontviewUiPortraitData','frontviewUiPositionY','_partyIndex','initialize','MoveDuration','SideviewTargetActor','_scene','inputting','TONE_COLORS','createNewSprite','includes','drawBravePoints','DAMAGE_SHAKE','setBackgroundType','isVisualHpGaugeDisplayed','createFvUiTextPopup','exit','overlay','actor','createFrontviewBattleUiSprites','_shopStatusWindow','createGraphicsContainer','activate','createBravePoints','createContainers','UI_TpGauge_Show','FACE_SHOW','in\x20order\x20for\x20VisuMZ_3_FrontviewBattleUI\x20to\x20work.','animationOffset','_fadingOut','_boostPointsSprite','drawTextTopAligned','isClickEnabled','GraphicsBackgroundFilename','addNewSprite','children','initFrontviewBattleUi','push','ItemsEquipsCore','bind','pop','FRONTVIEW_BATTLE_UI','isGuard','status','_backgroundSprite','UI_BreakShields_OffsetX','removeChild','updateGraphics','UI_HpGauge_OffsetY','_tpbGauge','AniOffsetY','FACE_MASK_USE','ARRAYNUM','ActorIDs','PHYSICAL','addDamageSpriteFrontviewBattleUi','SV_MODE_PORTRAITS','ConvertParams','UI_MpGauge_Show','refreshCursor','STATES','isUsingFrontviewUiLayout','Game_Battler_onAddState','version','_frontviewBattleUiFaceMaskRender','isSkill','_faceGraphicIndex','showShopStatus','getCurrentSubjectKeys','UI_BoostPoints_Scale','_lastPredictedBrave','VisuMZ_0_CoreEngine\x20needs\x20to\x20be\x20updated\x20','_lastBravePoints','Game_Battler_onRemoveState','beginPath','index','getBattlePortraitFilename','convertGaugeTypeSkillsStatesCore','brightness','ARRAYSTR','initFrontviewBattleUiMapSettings','UI_AggroGauge_OffsetY','Window_SkillList_initialize','_filename','createContents','subject','VisuMZ_2_BattleSystemATB','Variable','Window_BattleStatus_addDamageSprite','sortFvUiDamageSprites','UiOffsetY','updateStatusWindowPosition','_actorWindow','_lastBraveInputting','opacity','hide','isFrontviewBattleUiMapVisible','_stateOverlaySprite','Scene_Map_createAllWindows','redraw','GraphicsFaceMaskColor2','UI_Name_Scale','CERTAIN\x20HIT','dataFrontviewUiLength','Scene_Battle_updateStatusWindowPosition','VisuMZ_1_SkillsStatesCore','offset','#000000','_bravePointsSprite','Window_BattleStatus_refreshCursor','updateFaceGraphic','addChildAt','HideMapBattleStatus','battleLayoutStyle','updateDamageSprites','compactWidth','Battle','initialFrontviewUiStatusPosition','baseOffset','_frontviewBattleUiBackgroundRender','maxFrontviewUiRows','#00aeef','currentFaceGraphicFilename','center','initFrontviewUiSettings','setupTextPopup','OffsetY','startTurn','GraphicsFaceMaskVertGradient','Scene_Battle_createSpriteset','Text','updateStateIconSprite','color1','UI_Name_Angle','auto','onPress','maxCols','setupIconTextPopup','colSpacing','UI_MpGauge_Scale','frontviewBattleUiFaceMaskRender','EnterDuration','FrontviewInput','UI_TpGauge_OffsetY','createUiSprites','map','FACE_OFFSET','_partyCommandWindow','updateShakeContainer','_lastInputFilename','_lastActor','UI_StatesIcon_OffsetY','WindowScale','createAggroGauge','floor','adjustForFrontviewUi','_battleLayoutStyle','Window_BattleItem_hide','TpDamage','height','canCreateFrontviewBattleUi','createSpriteLayers','Game_Battler_gainHp','updateTpGauge','makeItemList','enabled','Window_SkillList_colSpacing','_breakShieldSprite','_frontviewUiMapVisible','isDying','createGraphics','EnterOffset','Window_ItemList_Pos','_opacityDuration','ShowStatusGauge','createFaceSprite','MaxRows','targetOpacity','updateBreakShieldIcon','_subject','BattleLayout','input','_aggroGauge','isAttack','inBattle','_lastTpValue','Scene_Battle_actorWindowRect','_activeContainer','frontviewUiWidth','MoveCenter','boxHeight','setBlendColor','STRUCT','toUpperCase','lineHeight','BATTLE_LAYOUT','ShowCancelButton','updateFilters','ActiveShiftX','isMagical','_shakeContainer','name','BattleManager_startTurn','DEFAULT','isSelected','prototype','round','clearDamagePopup','restore','MAGIC','createFvUiStateSprite','setHome','vertical','isSceneMap','save','MP_GAUGE','fadeIn','GraphicsOffsetY','createFrontviewUiShopStatusWindow','NAME','min','ItemWindows','_tpGauge','CoreEngine','bitmap','Index','max','adjustFrontviewUiPosition','currentSymbol','Window_BattleStatus_maxCols','registerCommand','Visible','match','select','isStateAffected','drawItemFrontviewBattleUi','createItemWindow','loadFaceSpriteBitmap','TPB_GAUGE','_lastSubjectFilename','Window_ActorCommand_makeCommandList','GRAPHICS_OFFSET','faceName','startOpacity','Game_System_initialize','targetDamageOpacity','_battler','isForFriend','loadSystem','currentInputActor','UI_TpbGauge_OffsetY','_faceGraphicName','location','Window_Base_open','334288YlkDTQ','Aggro','dead','999366lTtsLo','screenY','startingPositionX','BaseOffsetX','allowBoostAction','_flashColor','BattleCore','fillStyle','VisuMZ_3_StateTooltips','boxWidth','_faceSprite','left','HP_GAUGE','frameVisible','createUiContainer','UI_Name_OffsetY','commandHelpWindow','active','ENTER_DURATION','1226296XOFlfN','Window_BattleSkill_show','Window_ActorCommand','DeadTone','createAllWindows','createFvUiDamageSprite','lineTo','applyFaceMaskFilter','471136FLdghe','addBravePointsWindow','frontviewBattleUiStatusWindowRect','Map','updateMpGauge','updateSubjects','updateAggroGauge','click','frameCount','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','UI_StatesOverlay_OffsetX','updateUi','ARRAYFUNC','%1%2','startAction','icon','damageDuration','UI_BravePoints_Scale','frontviewUiStack','BattleManager_startAction','updateBravePoints','ARRAYEVAL','VisuMZ_1_ItemsEquipsCore','createFilters','value','_moveTargetX','zoomScale','stackOffset','SystemMapUiVisibility','FlashColor','openness','getColor','parameters','isTpb','initialPosition','updateStateOverlaySprite','GraphicsBackgroundShow','UI_BreakShields_Show','FlashDuration','lineWidth','checkPosition','centerFrontviewUiSprite','UI_OFFSET','SPRITE_SCALE','TpHealing','hideFrontviewUiShopStatusWindow','UI_BravePoints_OffsetX','isSideView','_actorCommandWindow','_frontviewUiBattleStatusWindow','_cache_battleMembersSize','setupFrontviewUiMapNotetags','_context','_faceMaskSprite','SpriteMaskFilter','ShowShopStatus','FACE_MASK_FILENAME','toLowerCase','Window_ActorCommand_activate','_stateIconSprite','UI_MpGauge_Angle','TextColor','adjustFrontviewUiHeight','initMembersFrontviewUi','updateActiveAutoFadeOut','UI_AggroGauge_OffsetX','FUNC','AggroControlSystem','duration','BACKGROUND_SHOW','Healing','removeDamageSprite','_currentActor','MpHealing','GraphicsFaceMaskUse','DamageShakeDuration','setFrame','StatusUI','item','Window_BattleStatus_initialize','DamageShakeEnabled','hitTest','updateBoostPointsGauge','_graphicsContainer','faceWidth','outlineColor','_hpGauge','faceHeight','split','buttonAreaTop','ACTIVE_SHIFT','UI_BravePoints_OffsetY','UI_TpbGauge_OffsetX','padding','isBreakShieldIconVisible','showCancelButton','_itemWindow','_action','currentInputFilename','return\x200','UI_BoostPoints_Show','setColorTone','stringify','makeCommandList','_duration','EVAL','Window_BattleSkill_hide','statusWindowRect','Portrait','SKILL','addFaceMaskBackground','_maskBackground','_customModified','createFrontviewUiBattlePortraits','getStateTooltipBattler','show','setTouchState','stateColor','fittingHeight','UI_Name_OffsetX','isActorActive','right','addChild','Scene_Base_isWindowMaskingEnabled','clearResult','Settings','setActiveAutoFadeOut','OpacitySpeed','predictedBravePoints','UI_BoostPoints_OffsetX','filters','ENTER_FROM_OFFSET','initMembers','State','_damageContainer','PopupShiftY','isAggroGaugeVisible','open','isBoostPointsGaugeVisible','width','anchor','SPRITE_HORZ_FLIP','HpDamage','SV_FADE_SELECT','ceil','setupVisualStateEffectsPopup','StackOffsetY','format','centerAllFrontViewBattleUiSprites','bitmapHeight','Window_SkillList_maxCols','_nameSprite','PopupShiftX','textColor','217SGxSQR','deathStateId','GraphicsFaceOffsetX','isNextScene','Window_BattleStatus_drawItemBackground','canCreateFrontviewBattleUiSprites','moveTo','MapUICustomTextActor','isPreviousSceneBattleTransitionable','needsBravePointsUpdate','setCursorRect','_frontviewUiPortraitData','StatusWindow','random','color2','Sprite_Battler_isVisualHpGaugeDisplayed','startBlendFlash','setStatusWindow','_opening','%1PopupFmt','createBackgroundSprite','ShowPopups','Erase','note','LOCATION_X','battler','VisuMZ_3_StateTooltips\x20needs\x20to\x20be\x20updated\x20','Window_ActorCommand_initialize','updateContainers','updateEffectsContainer','BattleSystemATB','updateAttachmentSprites','dimColor1','Window_Selectable_itemRect','setFrontviewBattleUiMapVisible','isAnyGridWindowActive','AGGRO_GAUGE','singleSkill','getFrontviewUiSprite','_menuAggroType','isCertainHit','find','MapUICustomVariableActor','PortraitData','Inputting','UI_TpbGauge_Scale','parse','outlineWidth','constructor','moveCenter','angle','PortraitLine','isMapPositionConflictFrontviewUi','createStateOverlaySprite','_skillWindow','StartDamagePopup','START_BUFFER_X','_lastMpValue','SETTINGS','AniOffsetX','getActorFrontviewUiPortrait','setup','isDead','BREAK_SHIELDS','currentSubjectFilename','Game_Map_setup','HorzFlip','onMouseEnterStateTooltips','onRemoveState','FV_FADE_OPACITY','updateProperties','_startingPosition','enemy','_frontviewUiSprites','battleMembers','trim','Window_ItemList_initialize','_enemyWindow','addBravePointsSprite','close','bravePoints','currentSubjectActor','_bravePointsWindow','Scene_Battle_buttonAreaTop','_activeAutoFadeOutDuration','createShakeContainer','OPACITY_RATE','GraphicsFaceMaskColor1','isInputting','TP_GAUGE','Enable','currentFaceGraphicIndex','MAP_CLOSE_PROXIMITY_OPACITY','UI_HpGauge_OffsetX','loadBackgroundSpriteBitmap','FrontviewTargetActor','UI_BravePoints_Show','DistanceBuffer','flashColor','canCreateFrontviewUiShopStatusWindow','addFaceMaskFilter','createBoostPointsGauge','GraphicsOffsetX','_parentWindow','_closing','getCurrentInputKeys','aggroGauge','drawOutlinePolygon','BACKGROUND_OFFSET','Game_Actor_battleUIOffsetY','getFrontviewUiBattleStatusWindow','VisuMZ_2_BattleSystemCTB','visualAtbGauge','gainHp','_faceContainer','IconSet','fadeOutSprites','Window_SkillList_makeItemList','FRONTVIEW_BATTLE_UI_MOVE_BATTLERS','frontviewBattleUiBackgroundRender','Window_BattleStatus_updatePadding','RegExp','calcWindowHeight','FACE_MASK_RENDER','HorzRate','VisuMZ_4_BreakShields','UI_TpbGauge_Angle','Window_ItemList_colSpacing','UI_StatesOverlay_OffsetY','MinProxOpacity','UI_MpGauge_OffsetX','rateY','Window_PartyCommand','call','UI_HpGauge_Angle','optDisplayTp','BOOST_POINTS','Sprite_Name_outlineColor','_faceMaskFilter','actorId','isTpbGaugeVisible','MapUICustomVariableParty','worldVisible','updateOpacity','onMouseEnter','ActiveShiftXSpeed','createTpGauge','1112208lcFgbb','UI_BoostPoints_OffsetY','Sprite_Battler_updateVisibility','addWindow','ActionFadeOut','drawActorBravePoints','BaseOffsetY','VisuMZ_2_AggroControlSystem','addFaceSpriteBase','shouldAdjustForFrontviewUiLayout','targetPositionX','frontviewShopStatusWindowRect','_statusWindow','drawItem','description','FrontviewBattleUI','createBreakShieldIcon','fadeOut','UI_HpGauge_Scale','updatePosition','isBravePointsVisible','frontview_ui','createNameSprite','GraphicsFaceMaskShift','updateBlendColor','createStateIconSprite','isItem','isActor','Window_ItemList_makeItemList','ShowMapBattleStatus','PopupDuration','Window_BattleStatus_drawItem','Damage','_moveDuration','addBackgroundSpriteBase','_opacityTarget','createMpGauge','VisuMZ_3_BoostAction','MOVE_DURATION','VisualStateEffects'];_0x794d=function(){return _0x6100d;};return _0x794d();}Sprite_FvUiStatus[_0x5f47e6(0x41c)]=Object['create'](Sprite_Clickable[_0x5f47e6(0x41c)]),Sprite_FvUiStatus['prototype']['constructor']=Sprite_FvUiStatus,Sprite_FvUiStatus[_0x5f47e6(0x260)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x289)]??0x20,Sprite_FvUiStatus[_0x5f47e6(0x284)]=VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['Map'][_0x5f47e6(0x2a9)]??0x80,Sprite_FvUiStatus['ACTIVE_SHIFT']={'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x415)]??0x0,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x330)]??-0x18,'rateX':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2b9)]??0x2,'rateY':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x34e)]??0x2},Sprite_FvUiStatus[_0x5f47e6(0x35b)]={'enabled':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1de)]??!![],'duration':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1d9)]??0x18},Sprite_FvUiStatus[_0x5f47e6(0x440)]={'x':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x28e)]??0x0,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x428)]??-0x80},Sprite_FvUiStatus['UI_OFFSET']={'x':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['StatusUI']['UiOffsetX']??0x0,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x3a9)]??-0x80},Sprite_FvUiStatus[_0x5f47e6(0x1d3)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1b2)]??!![],(Sprite_FvUiStatus['BACKGROUND_FILENAME']=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x370)]??'',Sprite_FvUiStatus[_0x5f47e6(0x294)]={'x':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['GraphicsBackgroundOffsetX']??0x0,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['GraphicsBackgroundOffsetY']??0x0}),Sprite_FvUiStatus[_0x5f47e6(0x369)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI']['GraphicsFaceShow']??!![],Sprite_FvUiStatus[_0x5f47e6(0x3e1)]={'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x22a)]??0x0,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['GraphicsFaceOffsetY']??0x0},Sprite_FvUiStatus[_0x5f47e6(0x382)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x1d8)]??!![],Sprite_FvUiStatus[_0x5f47e6(0x1c6)]=VisuMZ['FrontviewBattleUI']['Settings']['StatusUI']['GraphicsFaceMaskFilename']??'',Sprite_FvUiStatus[_0x5f47e6(0x2a3)]={'offset':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2d2)]??0x30,'color1':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x27f)]??_0x5f47e6(0x3c8),'color2':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x3b3)]??_0x5f47e6(0x3ba),'vertical':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x3cf)]??!![]},Sprite_FvUiStatus['NAME']={'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['UI_Name_Show']??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x3d4)]??0x12,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x205)]??-0x8,'y':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x182)]??-0x3c},'scale':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x3b4)]??0.8},Sprite_FvUiStatus['HP_GAUGE']={'show':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)]['UI_HpGauge_Show']??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2ae)]??0x12,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x285)]??-0x8,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x37f)]??0x30},'scale':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2cd)]??0.8},Sprite_FvUiStatus[_0x5f47e6(0x426)]={'show':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x389)]??!![],'angle':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1ca)]??0x12,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x2aa)]??-0x14,'y':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x2ec)]??0x48},'scale':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x3da)]??0.8},Sprite_FvUiStatus[_0x5f47e6(0x281)]={'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x368)]??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)]['UI_TpGauge_Angle']??0x12,'offset':{'x':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['UI_TpGauge_OffsetX']??-0x20,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x3de)]??0x60},'scale':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)]['UI_TpGauge_Scale']??0.8},Sprite_FvUiStatus[_0x5f47e6(0x43d)]={'show':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['StatusUI']['UI_TpbGauge_Show']??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2a6)]??0x12,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1ea)]??-0x3d,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x16c)]??-0x24},'scale':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['StatusUI'][_0x5f47e6(0x255)]??0.8},Sprite_FvUiStatus[_0x5f47e6(0x38b)]={'overlay':{'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['UI_StatesOverlay_Show']??!![],'offset':{'x':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x198)]??0x0,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2a8)]??0x0}},'icon':{'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['UI_StatesIcon_Show']??!![],'offset':{'x':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['UI_StatesIcon_OffsetX']??-0x34,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x3e6)]??0x5c}}},Sprite_FvUiStatus['AGGRO_GAUGE']={'show':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['StatusUI']['UI_AggroGauge_Show']??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x301)]??0x48,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x1cf)]??-0x58,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x3a0)]??0x3c},'scale':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)]['UI_AggroGauge_Scale']??0.6},Sprite_FvUiStatus[_0x5f47e6(0x304)]={'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x288)]??!![],'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1bc)]??0x48,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1e9)]??-0x24},'scale':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x19f)]??0x1},Sprite_FvUiStatus[_0x5f47e6(0x267)]={'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1b3)]??!![],'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x37c)]??-0x34,'y':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x334)]??0x3c}},Sprite_FvUiStatus[_0x5f47e6(0x2b0)]={'show':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1f2)]??!![],'angle':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)]['UI_BoostPoints_Angle']??-0x2d,'offset':{'x':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x20f)]??0x18,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x2bc)]??-0x2d},'scale':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x394)]??0.8},Sprite_FvUiStatus[_0x5f47e6(0x27e)]=VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x20d)]??0x10,Sprite_FvUiStatus[_0x5f47e6(0x2e1)]=VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x353)]??0x18,Sprite_FvUiStatus[_0x5f47e6(0x2f9)]={'selected':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI']['Selected']??[0xff,0xff,0xff,0x40],'inputting':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x254)]??[0x0,0xff,0xff,0x40],'damageDuration':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['StatusUI']['DamageDuration']??0x3c,'hpDamage':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['StatusUI'][_0x5f47e6(0x21c)]??[0xff,0x0,0x0,0x80],'hpHealing':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)]['HpHealing']??[0x0,0xff,0x80,0x80],'mpDamage':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x31c)]??[0x80,0x0,0xff,0x80],'mpHealing':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x1d7)]??[0x0,0x80,0xff,0x80],'tpDamage':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['StatusUI'][_0x5f47e6(0x3ed)]??[0x80,0xff,0x0,0x20],'tpHealing':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1db)][_0x5f47e6(0x1ba)]??[0x0,0xff,0x0,0x20]},Sprite_FvUiStatus['TONE_COLORS']={'dead':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1db)][_0x5f47e6(0x189)]??[0x0,0x0,0x0,0xff],'dying':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['StatusUI']['DyingTone']??[0x0,-0x40,-0x40,0x40]},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['initialize']=function(_0xe67bf2,_0x38d9e7,_0x24c60e){const _0x3e96a5=_0x5f47e6;this[_0x3e96a5(0x351)]=_0xe67bf2,this[_0x3e96a5(0x26f)]=_0x38d9e7,this[_0x3e96a5(0x28f)]=_0x24c60e,Sprite_Clickable['prototype'][_0x3e96a5(0x352)]['call'](this),this[_0x3e96a5(0x212)](),this['createSpriteLayers'](),this[_0x3e96a5(0x1a5)](),this[_0x3e96a5(0x2b7)](!![]),SceneManager[_0x3e96a5(0x343)]()&&SceneManager[_0x3e96a5(0x230)]()&&this[_0x3e96a5(0x1b6)](!![]),this['update']();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x212)]=function(){const _0x239da8=_0x5f47e6;this['x']=this[_0x239da8(0x175)](),this['y']=this['_parentWindow'][_0x239da8(0x3ee)],this['anchor']['x']=0.5,this['anchor']['y']=0x1,this[_0x239da8(0x324)]=0x0,this[_0x239da8(0x178)]=[0x0,0x0,0x0,0x0],this[_0x239da8(0x3e5)]=this['actor'](),this['_lastHpValue']=this['actor']()?this[_0x239da8(0x361)]()['hp']:0x0,this[_0x239da8(0x261)]=this['actor']()?this['actor']()['mp']:0x0,this[_0x239da8(0x408)]=this['actor']()?this['actor']()['tp']:0x0,this[_0x239da8(0x33b)]=0x0,this[_0x239da8(0x2dc)]=0x0;},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['startingPositionX']=function(){const _0x9e3e47=_0x5f47e6,_0x36f48e=Sprite_FvUiStatus[_0x9e3e47(0x260)],_0x956452=_0x36f48e+ImageManager[_0x9e3e47(0x1e2)];switch(this['_startingPosition']){case _0x9e3e47(0x17e):return ImageManager[_0x9e3e47(0x1e2)]/0x2+_0x956452*this[_0x9e3e47(0x351)]+_0x36f48e;break;case _0x9e3e47(0x207):return this[_0x9e3e47(0x28f)][_0x9e3e47(0x219)]-ImageManager[_0x9e3e47(0x1e2)]/0x2-_0x956452*($gameParty[_0x9e3e47(0x272)]()[_0x9e3e47(0x344)]-this['_partyIndex']-0x1)-_0x36f48e;break;case'center':const _0x5d873e=this['_partyIndex']+0x1,_0x28cfc5=$gameParty['battleMembers']()[_0x9e3e47(0x344)]+0x1;return this[_0x9e3e47(0x28f)][_0x9e3e47(0x219)]*_0x5d873e/_0x28cfc5;break;}return 0x0;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x361)]=function(){const _0x280a02=_0x5f47e6;return $gameParty[_0x280a02(0x272)]()[this[_0x280a02(0x351)]];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x206)]=function(){const _0x58ce6a=_0x5f47e6;if(!this[_0x58ce6a(0x361)]())return![];if(!$gameParty[_0x58ce6a(0x407)]())return![];return this['actor']()===BattleManager['_subject']||this['actor']()===BattleManager[_0x58ce6a(0x1d6)];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3f0)]=function(){const _0x4e86c1=_0x5f47e6;this[_0x4e86c1(0x367)](),this[_0x4e86c1(0x3f9)](),this[_0x4e86c1(0x3df)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x367)]=function(){const _0x44e2d5=_0x5f47e6;this['createShakeContainer'](),this['createActiveContainer'](),this[_0x44e2d5(0x364)](),this[_0x44e2d5(0x181)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3f9)]=function(){const _0xcda837=_0x5f47e6;this[_0xcda837(0x23c)](),this[_0xcda837(0x3fe)](),this[_0xcda837(0x25d)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['createUiSprites']=function(){const _0x29bf07=_0x5f47e6;this['createBreakShieldIcon'](),this[_0x29bf07(0x2d4)](),this[_0x29bf07(0x3e8)](),this[_0x29bf07(0x2ee)](),this[_0x29bf07(0x2d1)](),this[_0x29bf07(0x28d)](),this[_0x29bf07(0x366)](),this[_0x29bf07(0x2ba)](),this[_0x29bf07(0x2df)](),this[_0x29bf07(0x30e)]();},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x1a5)]=function(){},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x319)]=function(){const _0x381f68=_0x5f47e6;Sprite_Clickable[_0x381f68(0x41c)]['update']['call'](this),this['updateContainers'](),this[_0x381f68(0x37e)](),this[_0x381f68(0x199)](),this[_0x381f68(0x26e)](),this[_0x381f68(0x414)]();},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x244)]=function(){const _0x503f77=_0x5f47e6;this[_0x503f77(0x2f3)](),this['updateShakeContainer'](),this[_0x503f77(0x300)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x37e)]=function(){const _0x82d3ef=_0x5f47e6;this['updateFaceGraphic'](),this[_0x82d3ef(0x1b1)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x199)]=function(){const _0x29277e=_0x5f47e6;this[_0x29277e(0x401)](),this[_0x29277e(0x3d2)](),this[_0x29277e(0x194)](),this['updateTpbGauge'](),this[_0x29277e(0x316)](),this[_0x29277e(0x1e0)](),this[_0x29277e(0x1a2)](),this['updateTpGauge'](),this[_0x29277e(0x192)](),this['updateHpGauge']();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x26e)]=function(){const _0x5888d4=_0x5f47e6;this['updateOpacity'](),this[_0x5888d4(0x1b6)](),this[_0x5888d4(0x2ce)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x414)]=function(){const _0x553346=_0x5f47e6;this[_0x553346(0x2d3)](),this[_0x553346(0x34c)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x27d)]=function(){const _0x584acc=_0x5f47e6;this[_0x584acc(0x417)]=new Sprite(),this['addChild'](this[_0x584acc(0x417)]);},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['checkShakeContainer']=function(){const _0x55a732=_0x5f47e6;if(!Sprite_FvUiStatus[_0x55a732(0x35b)][_0x55a732(0x3f4)])return;if(this[_0x55a732(0x361)]()){this[_0x55a732(0x408)]!==this[_0x55a732(0x361)]()['tp']&&(this[_0x55a732(0x3e5)]===this[_0x55a732(0x361)]()&&this[_0x55a732(0x238)]('tp',this[_0x55a732(0x361)]()['tp']<this[_0x55a732(0x408)]),this['_lastTpValue']=this['actor']()['tp']);this['_lastMpValue']!==this[_0x55a732(0x361)]()['mp']&&(this[_0x55a732(0x3e5)]===this[_0x55a732(0x361)]()&&this[_0x55a732(0x238)]('mp',this['actor']()['mp']<this[_0x55a732(0x261)]),this[_0x55a732(0x261)]=this[_0x55a732(0x361)]()['mp']);if(this['_lastHpValue']!==this[_0x55a732(0x361)]()['hp']){const _0xa1cba5=this[_0x55a732(0x361)]()['hp']<this[_0x55a732(0x31a)]&&this[_0x55a732(0x3e5)]===this[_0x55a732(0x361)]();this[_0x55a732(0x3e5)]===this['actor']()&&this[_0x55a732(0x238)]('hp',_0xa1cba5),this[_0x55a732(0x31a)]=this[_0x55a732(0x361)]()['hp'],_0xa1cba5&&(this[_0x55a732(0x33b)]=Sprite_FvUiStatus[_0x55a732(0x35b)][_0x55a732(0x1d2)]);}this['_lastActor']=this[_0x55a732(0x361)]();}else this[_0x55a732(0x31a)]=0x0,this['_lastMpValue']=0x0,this[_0x55a732(0x408)]=0x0,this['_lastActor']=null;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3e3)]=function(){const _0x4cdba8=_0x5f47e6;if(!Sprite_FvUiStatus[_0x4cdba8(0x35b)]['enabled'])return;if(this[_0x4cdba8(0x33b)]<=0x0)return;this[_0x4cdba8(0x417)]['x']=Math[_0x4cdba8(0x33d)](this['_shakeDuration'])*(Math['random']()<0.5?-0x1:0x1),this['_shakeContainer']['y']=Math[_0x4cdba8(0x33d)](this[_0x4cdba8(0x33b)])*(Math[_0x4cdba8(0x235)]()<0.5?-0x1:0x1),this[_0x4cdba8(0x33b)]--;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2fc)]=function(){const _0x2bd984=_0x5f47e6;this[_0x2bd984(0x40a)]=new Sprite(),this['_shakeContainer'][_0x2bd984(0x208)](this[_0x2bd984(0x40a)]);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x300)]=function(){const _0x353791=_0x5f47e6;if(!this[_0x353791(0x40a)])return;const _0x3e4727=this[_0x353791(0x206)](),_0x5e2f6c=_0x3e4727?Sprite_FvUiStatus[_0x353791(0x1e8)]['x']:0x0,_0x3b8cd9=_0x3e4727?Sprite_FvUiStatus[_0x353791(0x1e8)]['y']:0x0,_0x5a3b80=Sprite_FvUiStatus['ACTIVE_SHIFT']['rateX'],_0x1cf4fe=Sprite_FvUiStatus[_0x353791(0x1e8)][_0x353791(0x2ab)];this[_0x353791(0x40a)]['x']<_0x5e2f6c&&(this[_0x353791(0x40a)]['x']=Math['min'](this[_0x353791(0x40a)]['x']+_0x5a3b80,_0x5e2f6c)),this[_0x353791(0x40a)]['x']>_0x5e2f6c&&(this[_0x353791(0x40a)]['x']=Math['max'](this[_0x353791(0x40a)]['x']-_0x5a3b80,_0x5e2f6c)),this[_0x353791(0x40a)]['y']<_0x3b8cd9&&(this[_0x353791(0x40a)]['y']=Math[_0x353791(0x42b)](this[_0x353791(0x40a)]['y']+_0x1cf4fe,_0x3b8cd9)),this['_activeContainer']['y']>_0x3b8cd9&&(this[_0x353791(0x40a)]['y']=Math[_0x353791(0x431)](this['_activeContainer']['y']-_0x1cf4fe,_0x3b8cd9));},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x364)]=function(){const _0x46a4a8=_0x5f47e6;this[_0x46a4a8(0x1e1)]=new Sprite(),this[_0x46a4a8(0x40a)][_0x46a4a8(0x208)](this[_0x46a4a8(0x1e1)]),this[_0x46a4a8(0x1e1)]['x']=Sprite_FvUiStatus[_0x46a4a8(0x440)]['x'],this[_0x46a4a8(0x1e1)]['y']=Sprite_FvUiStatus[_0x46a4a8(0x440)]['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['createUiContainer']=function(){const _0x5a3b27=_0x5f47e6;this[_0x5a3b27(0x2fe)]=new Sprite(),this['_activeContainer']['addChild'](this['_uiContainer']),this[_0x5a3b27(0x2fe)]['x']=Sprite_FvUiStatus[_0x5a3b27(0x1b8)]['x'],this[_0x5a3b27(0x2fe)]['y']=Sprite_FvUiStatus['UI_OFFSET']['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x23c)]=function(){const _0x56b0fa=_0x5f47e6;this[_0x56b0fa(0x2dd)](),this['loadBackgroundSpriteBitmap']();},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2dd)]=function(){const _0x5c2faf=_0x5f47e6,_0x46729b=new Sprite();this['_backgroundSprite']=_0x46729b,this[_0x5c2faf(0x1e1)][_0x5c2faf(0x208)](_0x46729b),_0x46729b[_0x5c2faf(0x21a)]['x']=0.5,_0x46729b[_0x5c2faf(0x21a)]['y']=0.5,_0x46729b['x']=Sprite_FvUiStatus['BACKGROUND_OFFSET']['x'],_0x46729b['y']=Sprite_FvUiStatus[_0x5c2faf(0x294)]['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x286)]=function(){const _0x2216c1=_0x5f47e6;if(!Sprite_FvUiStatus[_0x2216c1(0x1d3)])return;const _0x17cb7d=Sprite_FvUiStatus[_0x2216c1(0x346)];_0x17cb7d!==''?this[_0x2216c1(0x37b)][_0x2216c1(0x42f)]=ImageManager[_0x2216c1(0x16a)](_0x17cb7d):this[_0x2216c1(0x37b)][_0x2216c1(0x42f)]=ImageManager[_0x2216c1(0x29f)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3fe)]=function(){const _0x179f7e=_0x5f47e6;if(!Sprite_FvUiStatus['FACE_SHOW'])return;this[_0x179f7e(0x29a)]=new Sprite_Clickable(),this['_graphicsContainer'][_0x179f7e(0x208)](this['_faceContainer']),this[_0x179f7e(0x2c3)](),this[_0x179f7e(0x2ea)](),this[_0x179f7e(0x43c)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2c3)]=function(){const _0x1125d8=_0x5f47e6,_0x9524c8=new Sprite();this[_0x1125d8(0x17d)]=_0x9524c8,_0x9524c8[_0x1125d8(0x210)]=_0x9524c8['filters']||[],this[_0x1125d8(0x29a)]['addChild'](_0x9524c8),_0x9524c8['anchor']['x']=0.5,_0x9524c8[_0x1125d8(0x21a)]['y']=0.5,_0x9524c8['x']=Sprite_FvUiStatus[_0x1125d8(0x3e1)]['x'],_0x9524c8['y']=Sprite_FvUiStatus['FACE_OFFSET']['y'];},Sprite_FvUiStatus['prototype']['addFaceMaskSprite']=function(){const _0x2c12fc=_0x5f47e6;if(!Sprite_FvUiStatus['FACE_MASK_USE'])return;this[_0x2c12fc(0x1fc)](),this[_0x2c12fc(0x28c)](),this['applyFaceMaskFilter']();},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['addFaceMaskBackground']=function(){const _0x244578=_0x5f47e6,_0x14eada=new Sprite();this[_0x244578(0x1fd)]=_0x14eada,_0x14eada[_0x244578(0x210)]=_0x14eada[_0x244578(0x210)]||[],this[_0x244578(0x29a)]['addChild'](_0x14eada),this[_0x244578(0x29a)]['addChild'](this['_faceSprite']),_0x14eada[_0x244578(0x21a)]['x']=0.5,_0x14eada['anchor']['y']=0.5,_0x14eada['x']=Sprite_FvUiStatus['FACE_OFFSET']['x'],_0x14eada['y']=Sprite_FvUiStatus[_0x244578(0x3e1)]['y'];const _0x461c8d=ImageManager[_0x244578(0x1e2)],_0x4f1b1e=ImageManager[_0x244578(0x1e5)],_0x551aa1=Sprite_FvUiStatus[_0x244578(0x2a3)][_0x244578(0x3d3)],_0x3493f8=Sprite_FvUiStatus[_0x244578(0x2a3)][_0x244578(0x236)],_0x3f3897=Sprite_FvUiStatus['FACE_MASK_RENDER'][_0x244578(0x423)],_0x292608=new Bitmap(_0x461c8d,_0x4f1b1e);_0x292608[_0x244578(0x32d)](0x0,0x0,_0x461c8d,_0x4f1b1e,_0x551aa1,_0x3493f8,_0x3f3897),_0x14eada[_0x244578(0x42f)]=_0x292608;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x28c)]=function(){const _0x1b4ef0=_0x5f47e6,_0x4f667e=new Sprite();this[_0x1b4ef0(0x1c3)]=_0x4f667e,this[_0x1b4ef0(0x17d)]['addChild'](_0x4f667e),_0x4f667e[_0x1b4ef0(0x21a)]['x']=0.5,_0x4f667e[_0x1b4ef0(0x21a)]['y']=0.5;const _0xd73573=Sprite_FvUiStatus[_0x1b4ef0(0x1c6)];_0xd73573!==''?this[_0x1b4ef0(0x1c3)][_0x1b4ef0(0x42f)]=ImageManager[_0x1b4ef0(0x16a)](Sprite_FvUiStatus['FACE_MASK_FILENAME']):this[_0x1b4ef0(0x1c3)][_0x1b4ef0(0x42f)]=ImageManager[_0x1b4ef0(0x3db)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x18d)]=function(){const _0x32256b=_0x5f47e6;this[_0x32256b(0x2b2)]=new PIXI[(_0x32256b(0x1c4))](this['_faceMaskSprite']),this['_faceSprite']['filters'][_0x32256b(0x374)](this[_0x32256b(0x2b2)]),this[_0x32256b(0x1fd)][_0x32256b(0x210)][_0x32256b(0x374)](this[_0x32256b(0x2b2)]);},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x43c)]=function(){const _0xf3e62d=_0x5f47e6;if(!Sprite_FvUiStatus['FACE_SHOW'])return;const _0x5e9efd=this[_0xf3e62d(0x3c9)](),_0x1664b6=this[_0xf3e62d(0x283)]();this[_0xf3e62d(0x16d)]=_0x5e9efd,this[_0xf3e62d(0x391)]=_0x1664b6,this[_0xf3e62d(0x16d)]!==''?(this[_0xf3e62d(0x17d)][_0xf3e62d(0x42f)]=ImageManager[_0xf3e62d(0x303)](_0x5e9efd),this['updateFaceSpriteFrame']()):(this[_0xf3e62d(0x17d)][_0xf3e62d(0x42f)]=new Bitmap(0x1,0x1),this[_0xf3e62d(0x17d)][_0xf3e62d(0x1da)](0x0,0x0,0x0,0x0));},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['currentFaceGraphicFilename']=function(){const _0x5ae22d=_0x5f47e6;if(!this[_0x5ae22d(0x361)]())return'';return this['actor']()[_0x5ae22d(0x441)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x283)]=function(){const _0x252e62=_0x5f47e6;if(!this[_0x252e62(0x361)]())return 0x0;return this[_0x252e62(0x361)]()[_0x252e62(0x305)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['updateFaceSpriteFrame']=function(){const _0x2e252e=_0x5f47e6,_0x8efc67=this['_faceGraphicIndex'],_0x5e8a9e=ImageManager[_0x2e252e(0x1e2)],_0x3f9a44=ImageManager[_0x2e252e(0x1e5)],_0x414ca3=ImageManager[_0x2e252e(0x1e2)],_0x56aaf5=ImageManager[_0x2e252e(0x1e5)],_0x2a942e=Math[_0x2e252e(0x3e9)](_0x8efc67%0x4*_0x414ca3+(_0x5e8a9e-_0x414ca3)/0x2),_0x51f678=Math[_0x2e252e(0x3e9)](Math[_0x2e252e(0x3e9)](_0x8efc67/0x4)*_0x3f9a44+(_0x3f9a44-_0x56aaf5)/0x2);this['_faceSprite'][_0x2e252e(0x1da)](_0x2a942e,_0x51f678,_0x5e8a9e,_0x3f9a44);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3bd)]=function(){const _0x4e6d01=_0x5f47e6;if(!this[_0x4e6d01(0x17d)])return;if(!Sprite_FvUiStatus[_0x4e6d01(0x369)])return;(this[_0x4e6d01(0x16d)]!==this['currentFaceGraphicFilename']()||this[_0x4e6d01(0x391)]!==this[_0x4e6d01(0x283)]())&&this[_0x4e6d01(0x43c)]();},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x25d)]=function(){const _0x332d89=_0x5f47e6;if(!Sprite_FvUiStatus[_0x332d89(0x38b)]['overlay']['show'])return;const _0x1f4a18=new Sprite_StateOverlay();this[_0x332d89(0x3b0)]=_0x1f4a18,this[_0x332d89(0x1e1)][_0x332d89(0x208)](_0x1f4a18),_0x1f4a18['x']=Sprite_FvUiStatus[_0x332d89(0x38b)][_0x332d89(0x360)][_0x332d89(0x3b9)]['x'],_0x1f4a18['y']=Sprite_FvUiStatus[_0x332d89(0x38b)][_0x332d89(0x360)][_0x332d89(0x3b9)]['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x1b1)]=function(){const _0x3dba7b=_0x5f47e6;if(!this[_0x3dba7b(0x3b0)])return;if(this[_0x3dba7b(0x3b0)][_0x3dba7b(0x445)]===this[_0x3dba7b(0x361)]())return;this[_0x3dba7b(0x3b0)][_0x3dba7b(0x265)](this[_0x3dba7b(0x361)]());},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2cb)]=function(){const _0x32f448=_0x5f47e6;if(!this['isBreakShieldIconVisible']())return;const _0x340232=new Sprite_BreakShieldIcon();this[_0x32f448(0x3f6)]=_0x340232,this[_0x32f448(0x2fe)][_0x32f448(0x208)](_0x340232),_0x340232['x']=Sprite_FvUiStatus['BREAK_SHIELDS']['offset']['x'],_0x340232['y']=Sprite_FvUiStatus[_0x32f448(0x267)][_0x32f448(0x3b9)]['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x1ec)]=function(){const _0xe18cd9=_0x5f47e6;if(!Sprite_FvUiStatus['BREAK_SHIELDS'][_0xe18cd9(0x201)])return![];if(!SceneManager['isSceneBattle']())return![];if(!Imported[_0xe18cd9(0x2a5)])return![];return!![];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x401)]=function(){const _0x504ff6=_0x5f47e6;if(!this[_0x504ff6(0x3f6)])return;if(this['_breakShieldSprite'][_0x504ff6(0x445)]===this[_0x504ff6(0x361)]())return;this[_0x504ff6(0x3f6)][_0x504ff6(0x265)](this['actor'](),![]);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2d4)]=function(){const _0x376bd8=_0x5f47e6;if(!Sprite_FvUiStatus[_0x376bd8(0x38b)][_0x376bd8(0x19d)][_0x376bd8(0x201)])return;const _0x3b4e2a=new Sprite_StateIcon();this[_0x376bd8(0x1c9)]=_0x3b4e2a,this['_uiContainer']['addChild'](_0x3b4e2a),_0x3b4e2a['x']=Sprite_FvUiStatus[_0x376bd8(0x38b)][_0x376bd8(0x19d)]['offset']['x'],_0x3b4e2a['y']=Sprite_FvUiStatus[_0x376bd8(0x38b)][_0x376bd8(0x19d)][_0x376bd8(0x3b9)]['y'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3d2)]=function(){const _0x47ed7c=_0x5f47e6;if(!this['_stateIconSprite'])return;if(this[_0x47ed7c(0x1c9)][_0x47ed7c(0x445)]===this[_0x47ed7c(0x361)]())return;this[_0x47ed7c(0x1c9)][_0x47ed7c(0x265)](this[_0x47ed7c(0x361)]());},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3e8)]=function(){const _0x50319e=_0x5f47e6;if(!this['isAggroGaugeVisible']())return;const _0x11323e=new Sprite_Gauge();this[_0x50319e(0x405)]=_0x11323e,this[_0x50319e(0x2fe)][_0x50319e(0x208)](_0x11323e),_0x11323e['angle']=-Sprite_FvUiStatus[_0x50319e(0x24c)][_0x50319e(0x25a)],_0x11323e['x']=Sprite_FvUiStatus[_0x50319e(0x24c)][_0x50319e(0x3b9)]['x'],_0x11323e['y']=Sprite_FvUiStatus['AGGRO_GAUGE']['offset']['y'],_0x11323e[_0x50319e(0x328)]['x']=Sprite_FvUiStatus['AGGRO_GAUGE'][_0x50319e(0x328)],_0x11323e[_0x50319e(0x328)]['y']=Sprite_FvUiStatus[_0x50319e(0x24c)][_0x50319e(0x328)];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x216)]=function(){const _0x30f8ad=_0x5f47e6;if(!Sprite_FvUiStatus[_0x30f8ad(0x24c)][_0x30f8ad(0x201)])return![];if(!SceneManager[_0x30f8ad(0x343)]())return![];if(!Imported[_0x30f8ad(0x2c2)])return![];return ConfigManager[_0x30f8ad(0x292)]&&VisuMZ[_0x30f8ad(0x1d1)]['Settings'][_0x30f8ad(0x171)]['StatusGauge'];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x194)]=function(){const _0x3e6637=_0x5f47e6;if(!this[_0x3e6637(0x405)])return;if(this['_aggroGauge'][_0x3e6637(0x445)]===this[_0x3e6637(0x361)]())return;this['_aggroGauge'][_0x3e6637(0x24f)]=!![],this[_0x3e6637(0x405)][_0x3e6637(0x265)](this['actor'](),'aggro');},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2ee)]=function(){const _0x4e759b=_0x5f47e6;if(!this['isTpbGaugeVisible']())return;const _0x4e9fdb=new Sprite_Gauge();this[_0x4e759b(0x380)]=_0x4e9fdb,this[_0x4e759b(0x2fe)][_0x4e759b(0x208)](_0x4e9fdb),_0x4e9fdb[_0x4e759b(0x25a)]=-Sprite_FvUiStatus['TPB_GAUGE'][_0x4e759b(0x25a)],_0x4e9fdb['x']=Sprite_FvUiStatus[_0x4e759b(0x43d)][_0x4e759b(0x3b9)]['x'],_0x4e9fdb['y']=Sprite_FvUiStatus[_0x4e759b(0x43d)][_0x4e759b(0x3b9)]['y'],_0x4e9fdb[_0x4e759b(0x328)]['x']=Sprite_FvUiStatus[_0x4e759b(0x43d)]['scale'],_0x4e9fdb['scale']['y']=Sprite_FvUiStatus[_0x4e759b(0x43d)]['scale'];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2b4)]=function(){const _0x3cb345=_0x5f47e6;if(!Sprite_FvUiStatus[_0x3cb345(0x43d)][_0x3cb345(0x201)])return![];if(!SceneManager['isSceneBattle']())return![];if(!BattleManager[_0x3cb345(0x1af)]())return![];if(Imported[_0x3cb345(0x3a5)]){if(!VisuMZ[_0x3cb345(0x246)][_0x3cb345(0x20b)][_0x3cb345(0x32b)][_0x3cb345(0x3fd)])return![];if(!ConfigManager[_0x3cb345(0x298)])return![];}if(Imported[_0x3cb345(0x297)]&&BattleManager['isCTB']())return![];return!![];},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['updateTpbGauge']=function(){const _0x1e7e97=_0x5f47e6;if(!this[_0x1e7e97(0x380)])return;if(this[_0x1e7e97(0x380)][_0x1e7e97(0x445)]===this['actor']())return;if(!this[_0x1e7e97(0x361)]())return;this[_0x1e7e97(0x380)][_0x1e7e97(0x265)](this[_0x1e7e97(0x361)](),'time');},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2d1)]=function(){const _0x4edde6=_0x5f47e6;if(!Sprite_FvUiStatus[_0x4edde6(0x42a)][_0x4edde6(0x201)])return;const _0x5b5152=new Sprite_Name();this[_0x4edde6(0x225)]=_0x5b5152,this[_0x4edde6(0x2fe)]['addChild'](_0x5b5152),_0x5b5152[_0x4edde6(0x21a)]['x']=0.5,_0x5b5152[_0x4edde6(0x25a)]=-Sprite_FvUiStatus[_0x4edde6(0x42a)][_0x4edde6(0x25a)],_0x5b5152['x']=Sprite_FvUiStatus['NAME']['offset']['x'],_0x5b5152['y']=Sprite_FvUiStatus[_0x4edde6(0x42a)][_0x4edde6(0x3b9)]['y'],_0x5b5152['scale']['x']=Sprite_FvUiStatus[_0x4edde6(0x42a)]['scale'],_0x5b5152[_0x4edde6(0x328)]['y']=Sprite_FvUiStatus[_0x4edde6(0x42a)][_0x4edde6(0x328)];},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['updateNameSprite']=function(){const _0x20f389=_0x5f47e6;if(!this[_0x20f389(0x225)])return;if(this[_0x20f389(0x225)][_0x20f389(0x445)]===this['actor']())return;this[_0x20f389(0x225)][_0x20f389(0x265)](this[_0x20f389(0x361)]());},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['createBoostPointsGauge']=function(){const _0x23f2e2=_0x5f47e6;if(!this[_0x23f2e2(0x218)]())return;const _0x1cdb64=new Sprite_BoostContainer();this[_0x23f2e2(0x36d)]=_0x1cdb64,this['_uiContainer'][_0x23f2e2(0x208)](_0x1cdb64),_0x1cdb64[_0x23f2e2(0x25a)]=-Sprite_FvUiStatus[_0x23f2e2(0x2b0)][_0x23f2e2(0x25a)],_0x1cdb64['x']=Sprite_FvUiStatus[_0x23f2e2(0x2b0)]['offset']['x'],_0x1cdb64['y']=Sprite_FvUiStatus['BOOST_POINTS']['offset']['y'],_0x1cdb64[_0x23f2e2(0x328)]['x']*=Sprite_FvUiStatus[_0x23f2e2(0x2b0)][_0x23f2e2(0x328)],_0x1cdb64[_0x23f2e2(0x328)]['y']*=Sprite_FvUiStatus[_0x23f2e2(0x2b0)][_0x23f2e2(0x328)];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x218)]=function(){const _0x5ec11c=_0x5f47e6;if(!Sprite_FvUiStatus['BOOST_POINTS'][_0x5ec11c(0x201)])return![];if(!SceneManager[_0x5ec11c(0x343)]())return![];if(!Imported[_0x5ec11c(0x2e0)])return![];return BattleManager[_0x5ec11c(0x177)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x1e0)]=function(){const _0x7a58d7=_0x5f47e6;if(!this[_0x7a58d7(0x36d)])return;if(this['_boostPointsSprite'][_0x7a58d7(0x445)]===this[_0x7a58d7(0x361)]())return;this[_0x7a58d7(0x36d)][_0x7a58d7(0x265)](this['actor']()),this['_boostPointsSprite_battler']=this[_0x7a58d7(0x361)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['createBravePoints']=function(){const _0x221d67=_0x5f47e6;if(!this[_0x221d67(0x2cf)]())return;this[_0x221d67(0x276)](),this[_0x221d67(0x18f)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x276)]=function(){const _0x3f25c9=_0x5f47e6,_0x22bcc1=new Sprite();this['_bravePointsSprite']=_0x22bcc1,this[_0x3f25c9(0x2fe)][_0x3f25c9(0x208)](_0x22bcc1),_0x22bcc1[_0x3f25c9(0x21a)]['x']=0.5,_0x22bcc1['anchor']['y']=0.5,_0x22bcc1['x']=Sprite_FvUiStatus[_0x3f25c9(0x304)][_0x3f25c9(0x3b9)]['x'],_0x22bcc1['y']=Sprite_FvUiStatus[_0x3f25c9(0x304)][_0x3f25c9(0x3b9)]['y'],_0x22bcc1['scale']['x']*=Sprite_FvUiStatus[_0x3f25c9(0x304)][_0x3f25c9(0x328)],_0x22bcc1['scale']['y']*=Sprite_FvUiStatus[_0x3f25c9(0x304)][_0x3f25c9(0x328)],_0x22bcc1['visible']=![];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x18f)]=function(){const _0x2716d5=_0x5f47e6,_0x320179=new Rectangle(0x0,0x0,ImageManager[_0x2716d5(0x1e2)],Window_Base[_0x2716d5(0x41c)][_0x2716d5(0x204)](0x1));this['_bravePointsWindow']=new Window_Base(_0x320179),this[_0x2716d5(0x3ac)]=undefined,this[_0x2716d5(0x397)]=-0x64,this[_0x2716d5(0x395)]=-0x64;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2cf)]=function(){const _0x23dab2=_0x5f47e6;if(!Sprite_FvUiStatus[_0x23dab2(0x304)][_0x23dab2(0x201)])return![];if(!SceneManager[_0x23dab2(0x343)]())return![];if(!Imported['VisuMZ_2_BattleSystemBTB'])return![];return BattleManager[_0x23dab2(0x2f8)]();},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x1a2)]=function(){const _0x49bd01=_0x5f47e6;if(!this[_0x49bd01(0x3bb)])return;if(this[_0x49bd01(0x361)]())this[_0x49bd01(0x231)]()&&this[_0x49bd01(0x35a)](),this[_0x49bd01(0x3bb)]['visible']=!![];else this[_0x49bd01(0x397)]!==0x0&&(this[_0x49bd01(0x3bb)]['visible']=![],this[_0x49bd01(0x397)]=0x0);},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['needsBravePointsUpdate']=function(){const _0x41ab21=_0x5f47e6;if(this[_0x41ab21(0x397)]!==this[_0x41ab21(0x361)]()['bravePoints']())return!![];if(this[_0x41ab21(0x395)]!==this['actor']()[_0x41ab21(0x20e)]())return!![];if(this['_lastBraveInputting']!==BattleManager['isInputting']())return!![];return![];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x35a)]=function(){const _0x25bd30=_0x5f47e6;if(!this[_0x25bd30(0x27a)])return;this[_0x25bd30(0x397)]=this[_0x25bd30(0x361)]()[_0x25bd30(0x278)](),this[_0x25bd30(0x395)]=this['actor']()[_0x25bd30(0x20e)](),this['_lastBraveInputting']=BattleManager[_0x25bd30(0x280)]();const _0x11bf8c=ImageManager[_0x25bd30(0x1e2)],_0x4feca4=this[_0x25bd30(0x27a)][_0x25bd30(0x411)]();this[_0x25bd30(0x27a)][_0x25bd30(0x315)]['clear'](),this[_0x25bd30(0x27a)][_0x25bd30(0x2c0)](this[_0x25bd30(0x361)](),0x0,0x0,_0x11bf8c,_0x4feca4,'left'),this[_0x25bd30(0x3bb)]['bitmap']=this[_0x25bd30(0x27a)]['contents'];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x30e)]=function(){const _0x1430ae=_0x5f47e6;if(!Sprite_FvUiStatus[_0x1430ae(0x17f)][_0x1430ae(0x201)])return;const _0xc52d38=new Sprite_Gauge();this[_0x1430ae(0x1e4)]=_0xc52d38,this[_0x1430ae(0x2fe)][_0x1430ae(0x208)](_0xc52d38),_0xc52d38[_0x1430ae(0x25a)]=-Sprite_FvUiStatus[_0x1430ae(0x17f)][_0x1430ae(0x25a)],_0xc52d38['x']=Sprite_FvUiStatus[_0x1430ae(0x17f)]['offset']['x'],_0xc52d38['y']=Sprite_FvUiStatus[_0x1430ae(0x17f)]['offset']['y'],_0xc52d38['scale']['x']=Sprite_FvUiStatus['HP_GAUGE'][_0x1430ae(0x328)],_0xc52d38[_0x1430ae(0x328)]['y']=Sprite_FvUiStatus[_0x1430ae(0x17f)][_0x1430ae(0x328)];},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['updateHpGauge']=function(){const _0x1fcc0c=_0x5f47e6;if(!this[_0x1fcc0c(0x1e4)])return;if(this['_hpGauge'][_0x1fcc0c(0x445)]===this[_0x1fcc0c(0x361)]())return;let _0x34f07d='hp';Imported[_0x1fcc0c(0x3b8)]&&this[_0x1fcc0c(0x361)]()&&(_0x34f07d=Window_StatusBase['prototype'][_0x1fcc0c(0x39c)](this[_0x1fcc0c(0x361)](),_0x34f07d)),this[_0x1fcc0c(0x1e4)][_0x1fcc0c(0x265)](this[_0x1fcc0c(0x361)](),_0x34f07d);},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2df)]=function(){const _0x32345a=_0x5f47e6;if(!Sprite_FvUiStatus['MP_GAUGE'][_0x32345a(0x201)])return;const _0x4b3c74=new Sprite_Gauge();this[_0x32345a(0x340)]=_0x4b3c74,this['_uiContainer'][_0x32345a(0x208)](_0x4b3c74),_0x4b3c74[_0x32345a(0x25a)]=-Sprite_FvUiStatus[_0x32345a(0x426)][_0x32345a(0x25a)],_0x4b3c74['x']=Sprite_FvUiStatus['MP_GAUGE'][_0x32345a(0x3b9)]['x'],_0x4b3c74['y']=Sprite_FvUiStatus[_0x32345a(0x426)][_0x32345a(0x3b9)]['y'],_0x4b3c74[_0x32345a(0x328)]['x']=Sprite_FvUiStatus[_0x32345a(0x426)][_0x32345a(0x328)],_0x4b3c74[_0x32345a(0x328)]['y']=Sprite_FvUiStatus[_0x32345a(0x426)][_0x32345a(0x328)];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x192)]=function(){const _0x7fbf9d=_0x5f47e6;if(!this[_0x7fbf9d(0x340)])return;if(this['_mpGauge'][_0x7fbf9d(0x445)]===this[_0x7fbf9d(0x361)]())return;let _0xcc2061='mp';Imported[_0x7fbf9d(0x3b8)]&&this[_0x7fbf9d(0x361)]()&&(_0xcc2061=Window_StatusBase[_0x7fbf9d(0x41c)]['convertGaugeTypeSkillsStatesCore'](this[_0x7fbf9d(0x361)](),_0xcc2061)),this[_0x7fbf9d(0x340)][_0x7fbf9d(0x265)](this[_0x7fbf9d(0x361)](),_0xcc2061);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2ba)]=function(){const _0x480082=_0x5f47e6;if(!Sprite_FvUiStatus[_0x480082(0x281)][_0x480082(0x201)])return;if(!$dataSystem[_0x480082(0x2af)])return;const _0x24c060=new Sprite_Gauge();this[_0x480082(0x42d)]=_0x24c060,this['_uiContainer'][_0x480082(0x208)](_0x24c060),_0x24c060[_0x480082(0x25a)]=-Sprite_FvUiStatus['TP_GAUGE'][_0x480082(0x25a)],_0x24c060['x']=Sprite_FvUiStatus[_0x480082(0x281)][_0x480082(0x3b9)]['x'],_0x24c060['y']=Sprite_FvUiStatus[_0x480082(0x281)][_0x480082(0x3b9)]['y'],_0x24c060[_0x480082(0x328)]['x']=Sprite_FvUiStatus[_0x480082(0x281)]['scale'],_0x24c060[_0x480082(0x328)]['y']=Sprite_FvUiStatus[_0x480082(0x281)][_0x480082(0x328)];},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3f2)]=function(){const _0x4a0c8a=_0x5f47e6;if(!this[_0x4a0c8a(0x42d)])return;if(this[_0x4a0c8a(0x42d)][_0x4a0c8a(0x445)]===this[_0x4a0c8a(0x361)]())return;let _0x587b00='tp';Imported[_0x4a0c8a(0x3b8)]&&this[_0x4a0c8a(0x361)]()&&(_0x587b00=Window_StatusBase[_0x4a0c8a(0x41c)][_0x4a0c8a(0x39c)](this['actor'](),_0x587b00)),this[_0x4a0c8a(0x42d)][_0x4a0c8a(0x265)](this[_0x4a0c8a(0x361)](),_0x587b00);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2b7)]=function(_0x1877e3){const _0x3342e7=_0x5f47e6,_0x82eb55=this[_0x3342e7(0x400)]();if(_0x1877e3){this[_0x3342e7(0x3ad)]=_0x82eb55;return;}else{const _0x1894b1=Sprite_FvUiStatus[_0x3342e7(0x27e)];if(this[_0x3342e7(0x3ad)]>_0x82eb55)this[_0x3342e7(0x3ad)]=Math['max'](this[_0x3342e7(0x3ad)]-_0x1894b1,_0x82eb55);else this[_0x3342e7(0x3ad)]<_0x82eb55&&(this[_0x3342e7(0x3ad)]=Math[_0x3342e7(0x42b)](this['opacity']+_0x1894b1,_0x82eb55));}},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['targetOpacity']=function(){const _0x263dee=_0x5f47e6;if(!this[_0x263dee(0x361)]())return 0x0;if(SceneManager[_0x263dee(0x424)]()){if($gameScreen[_0x263dee(0x39d)]()<0xff)return 0x0;if(!$gameSystem[_0x263dee(0x3af)]())return 0x0;if($gamePlayer[_0x263dee(0x25c)]())return Sprite_FvUiStatus[_0x263dee(0x284)];}if(this[_0x263dee(0x361)]()['isDead']())return 0xff;return 0xff;},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x1b6)]=function(_0x3ed0da){const _0x20e128=_0x5f47e6;if(this['_cache_battleMembersSize']===$gameParty['battleMembers']()[_0x20e128(0x344)])return;if(SceneManager[_0x20e128(0x424)]())_0x3ed0da=!![];this[_0x20e128(0x1c0)]=$gameParty[_0x20e128(0x272)]()[_0x20e128(0x344)],this[_0x20e128(0x2dc)]=_0x3ed0da?0x1:Sprite_FvUiStatus[_0x20e128(0x2e1)];if(_0x3ed0da)this[_0x20e128(0x2ce)]();},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2ce)]=function(){const _0x4c3a63=_0x5f47e6;if(this[_0x4c3a63(0x2dc)]<=0x0)return;const _0x14b1ae=this[_0x4c3a63(0x2dc)],_0x454682=this[_0x4c3a63(0x2c5)]();this['x']=(this['x']*(_0x14b1ae-0x1)+_0x454682)/_0x14b1ae,this[_0x4c3a63(0x2dc)]--,this[_0x4c3a63(0x2dc)]<=0x0&&(this['x']=_0x454682);},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2c5)]=function(){const _0x5cc2b5=_0x5f47e6;let _0x285c72=0x0;const _0x2facd8=SceneManager['isSceneBattle']()?Window_BattleStatus[_0x5cc2b5(0x378)]['moveCenter']:Window_FrontviewUiMapBattleStatus[_0x5cc2b5(0x378)][_0x5cc2b5(0x259)];if(_0x2facd8){const _0x23ce5d=this[_0x5cc2b5(0x351)]+0x1,_0x19f662=$gameParty[_0x5cc2b5(0x272)]()['length']+0x1;_0x285c72=this[_0x5cc2b5(0x28f)][_0x5cc2b5(0x219)]*_0x23ce5d/_0x19f662;}else _0x285c72=this[_0x5cc2b5(0x175)]();return Math[_0x5cc2b5(0x21e)](_0x285c72);},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2d3)]=function(){const _0xf10fe7=_0x5f47e6;if(!this[_0xf10fe7(0x361)]())return;const _0x235f29=Sprite_FvUiStatus[_0xf10fe7(0x2f9)],_0x41a0fb=this[_0xf10fe7(0x29a)];if(!_0x41a0fb)return;const _0x3bef26=Graphics[_0xf10fe7(0x196)]%0x1e<0xf,_0x4a7bde=SceneManager[_0xf10fe7(0x355)][_0xf10fe7(0x3ab)]&&SceneManager[_0xf10fe7(0x355)]['_actorWindow']['active']||SceneManager[_0xf10fe7(0x355)][_0xf10fe7(0x275)]&&SceneManager[_0xf10fe7(0x355)]['_enemyWindow'][_0xf10fe7(0x184)]||_0x3bef26;if(SceneManager[_0xf10fe7(0x343)]()&&this[_0xf10fe7(0x361)]()[_0xf10fe7(0x41b)]()&&_0x3bef26)_0x41a0fb[_0xf10fe7(0x40e)](_0x235f29['selected']);else{if(SceneManager[_0xf10fe7(0x343)]()&&this[_0xf10fe7(0x361)]()===BattleManager['_currentActor']&&_0x4a7bde)_0x41a0fb[_0xf10fe7(0x40e)](_0x235f29[_0xf10fe7(0x356)]);else{if(this['_flashDuration']>0x0){const _0x3dbefd=this[_0xf10fe7(0x324)];this[_0xf10fe7(0x178)][0x3]*=(_0x3dbefd-0x1)/_0x3dbefd,_0x41a0fb[_0xf10fe7(0x40e)](this['_flashColor']);}else _0x41a0fb[_0xf10fe7(0x40e)]([0x0,0x0,0x0,0x0]);}}this['_flashDuration']--;},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x238)]=function(_0x198042,_0x183081){const _0x57dd07=_0x5f47e6,_0x5793d5=Sprite_FvUiStatus[_0x57dd07(0x2f9)],_0x2c07c8=_0x57dd07(0x19b)[_0x57dd07(0x221)](_0x198042,_0x183081?_0x57dd07(0x2db):_0x57dd07(0x1d4)),_0x302519=_0x5793d5[_0x2c07c8];if(_0x302519[0x3]===0x0)return;this[_0x57dd07(0x178)]=JSON['parse'](JSON[_0x57dd07(0x1f4)](_0x302519)),this[_0x57dd07(0x324)]=_0x5793d5[_0x57dd07(0x19e)];},Sprite_FvUiStatus['prototype']['updateToneFilter']=function(){const _0x2ed3db=_0x5f47e6;if(!this[_0x2ed3db(0x361)]())return;const _0x496eb0=Sprite_FvUiStatus[_0x2ed3db(0x357)],_0x24dd74=this['_faceContainer'];if(!_0x24dd74)return;const _0x59c109=Graphics[_0x2ed3db(0x196)]%0x1e<0xf,_0x192760=SceneManager[_0x2ed3db(0x355)]['_actorWindow']&&SceneManager['_scene'][_0x2ed3db(0x3ab)][_0x2ed3db(0x184)]||SceneManager[_0x2ed3db(0x355)]['_enemyWindow']&&SceneManager['_scene'][_0x2ed3db(0x275)]['active']||_0x59c109;if(SceneManager[_0x2ed3db(0x343)]()&&this['actor']()===BattleManager['_currentActor']&&_0x192760)_0x24dd74[_0x2ed3db(0x1f3)]([0x0,0x0,0x0,0x0]);else{if(this[_0x2ed3db(0x361)]()[_0x2ed3db(0x266)]())_0x24dd74[_0x2ed3db(0x1f3)](_0x496eb0[_0x2ed3db(0x172)]);else this[_0x2ed3db(0x361)]()[_0x2ed3db(0x3f8)]()?_0x24dd74['setColorTone'](_0x496eb0['dying']):_0x24dd74[_0x2ed3db(0x1f3)]([0x0,0x0,0x0,0x0]);}},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x36f)]=function(){const _0x3f11a0=_0x5f47e6;return this[_0x3f11a0(0x2b6)];},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x1df)]=function(_0x5577c0,_0x2bd6ac){const _0x3210e3=_0x5f47e6,_0x11b972=Sprite_FvUiStatus[_0x3210e3(0x440)],_0x9bf68d=new Rectangle(-this[_0x3210e3(0x21a)]['x']*ImageManager[_0x3210e3(0x1e2)]+_0x11b972['x'],-this[_0x3210e3(0x21a)]['y']*ImageManager[_0x3210e3(0x1e5)]+_0x11b972['y']/0x2,ImageManager[_0x3210e3(0x1e2)],ImageManager[_0x3210e3(0x1e5)]);return _0x9bf68d['contains'](_0x5577c0,_0x2bd6ac);},Sprite_FvUiStatus['prototype'][_0x5f47e6(0x2b8)]=function(){const _0x224052=_0x5f47e6;$gameTemp[_0x224052(0x202)](this[_0x224052(0x361)](),_0x224052(0x438));if(Imported[_0x224052(0x17b)]){if(SceneManager[_0x224052(0x424)]()&&!$gameSystem[_0x224052(0x3af)]())return;if(VisuMZ[_0x224052(0x335)][_0x224052(0x38e)]<1.06){let _0x119cdb='';_0x119cdb+=_0x224052(0x242),_0x119cdb+=_0x224052(0x36a),alert(_0x119cdb),SceneManager['exit']();}this[_0x224052(0x26b)]();}},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3d6)]=function(){const _0x53c7a1=_0x5f47e6;$gameTemp[_0x53c7a1(0x202)](this[_0x53c7a1(0x361)](),'select');},Sprite_FvUiStatus[_0x5f47e6(0x41c)]['onClick']=function(){const _0x4ee2b7=_0x5f47e6;$gameTemp[_0x4ee2b7(0x202)](this['actor'](),_0x4ee2b7(0x195));},Sprite_FvUiStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x200)]=function(){const _0x2312de=_0x5f47e6;return this[_0x2312de(0x361)]();};function Sprite_FvUiController(){this['initialize'](...arguments);}Sprite_FvUiController[_0x5f47e6(0x41c)]=Object['create'](Sprite['prototype']),Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x258)]=Sprite_FvUiController,Sprite_FvUiController[_0x5f47e6(0x240)]=VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1fa)][_0x5f47e6(0x2a4)]??0.85,Sprite_FvUiController[_0x5f47e6(0x26d)]=VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x1fa)]['TargetOpacity']??0x40,Sprite_FvUiController[_0x5f47e6(0x321)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)]['OpacitySpeed']??0x10,Sprite_FvUiController['FV_MODE_PORTRAITS']={'input':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)][_0x5f47e6(0x3dd)]??!![],'subject':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['Portrait']['FrontviewSubject']??!![]},Sprite_FvUiController[_0x5f47e6(0x32e)]={'actor':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)][_0x5f47e6(0x287)]??![],'enemy':VisuMZ[_0x5f47e6(0x2ca)]['Settings']['Portrait'][_0x5f47e6(0x341)]??!![]},Sprite_FvUiController[_0x5f47e6(0x387)]={'input':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)]['SideviewInput']??!![],'subject':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)]['SideviewSubject']??![]},Sprite_FvUiController[_0x5f47e6(0x21d)]={'actor':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)][_0x5f47e6(0x354)]??!![],'enemy':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)]['SideviewTargetEnemy']??![]},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(){const _0x435403=_0x5f47e6;Sprite[_0x435403(0x41c)][_0x435403(0x352)][_0x435403(0x2ad)](this),this[_0x435403(0x212)](),this[_0x435403(0x367)]();},Sprite_FvUiController[_0x5f47e6(0x41c)]['initMembers']=function(){const _0x3f2c95=_0x5f47e6;this['x']=Math[_0x3f2c95(0x41d)](Graphics[_0x3f2c95(0x219)]*Sprite_FvUiController[_0x3f2c95(0x240)]),this['y']=Graphics['height'],this[_0x3f2c95(0x43e)]='',this['_lastInputFilename']='',this[_0x3f2c95(0x32a)]='';},Sprite_FvUiController['prototype']['createContainers']=function(){const _0x5e06f9=_0x5f47e6;this['_subjectContainer']=new Sprite(),this['addChild'](this[_0x5e06f9(0x32f)]),this[_0x5e06f9(0x345)]=new Sprite(),this[_0x5e06f9(0x208)](this[_0x5e06f9(0x345)]);},Sprite_FvUiController['prototype']['createNewSprite']=function(_0x112a91){const _0xe73343=_0x5f47e6;this['fadeOutSprites'](_0x112a91),this[_0xe73343(0x371)](_0x112a91);},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x29c)]=function(_0x5741c7){const _0x3a376d=_0x5f47e6,_0xd0fd24=_0x5741c7?this[_0x3a376d(0x32f)]:this['_inputContainer'];if(!_0xd0fd24)return;const _0x21d9f6=[];for(const _0x30957b of _0xd0fd24['children']){if(!_0x30957b)continue;if(_0x30957b[_0x3a376d(0x36c)]&&_0x30957b[_0x3a376d(0x3ad)]<=0x0)_0x21d9f6[_0x3a376d(0x374)](_0x30957b);if(_0x30957b[_0x3a376d(0x2cc)])_0x30957b[_0x3a376d(0x2cc)]();}while(_0x21d9f6[_0x3a376d(0x344)]>0x0){const _0x3361ab=_0x21d9f6[_0x3a376d(0x377)]();_0xd0fd24[_0x3a376d(0x37d)](_0x3361ab);}},Sprite_FvUiController[_0x5f47e6(0x41c)]['addNewSprite']=function(_0x503d18){const _0x327e5e=_0x5f47e6,_0x575ece=$gameSystem[_0x327e5e(0x1bd)]()?Sprite_FvUiController[_0x327e5e(0x387)]:Sprite_FvUiController['FV_MODE_PORTRAITS'];if(_0x503d18&&!_0x575ece[_0x327e5e(0x3a4)])return;if(!_0x503d18&&!_0x575ece[_0x327e5e(0x404)])return;const _0x6b816a=_0x503d18?this[_0x327e5e(0x32f)]:this[_0x327e5e(0x345)];if(!_0x6b816a)return;const _0x269684=_0x503d18?this[_0x327e5e(0x268)]():this['currentInputFilename']();if(_0x269684==='')return;const _0x5f195f=new Sprite_FvUiPortrait(_0x269684);_0x6b816a[_0x327e5e(0x208)](_0x5f195f),_0x503d18&&(_0x5f195f[_0x327e5e(0x20c)](),this['currentSubjectFilename']()===this[_0x327e5e(0x32a)]&&this['setSwapLastInputSpriteMoment'](_0x5f195f));},Sprite_FvUiController[_0x5f47e6(0x41c)]['setSwapLastInputSpriteMoment']=function(_0x54734d){const _0x26d9f2=_0x5f47e6;_0x54734d['x']=0x0;const _0xf181c4=this['_inputContainer'][_0x26d9f2(0x372)][0x0],_0x5a47c7=_0xf181c4?_0xf181c4[_0x26d9f2(0x3ad)]:0x0;_0x54734d[_0x26d9f2(0x3ad)]=_0x5a47c7,_0xf181c4&&(_0xf181c4[_0x26d9f2(0x442)](0x0,0x1),_0xf181c4['opacity']=0x0);},Sprite_FvUiController['prototype']['update']=function(){const _0x5ab7fa=_0x5f47e6;Sprite[_0x5ab7fa(0x41c)][_0x5ab7fa(0x319)][_0x5ab7fa(0x2ad)](this),this[_0x5ab7fa(0x193)](),this['updateInputs'](),this[_0x5ab7fa(0x2b7)]();},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x193)]=function(){const _0x18875b=_0x5f47e6;this['_lastSubjectFilename']!==this[_0x18875b(0x268)]()&&(this[_0x18875b(0x43e)]=this['currentSubjectFilename'](),this['createNewSprite'](!![]));},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x279)]=function(){const _0xca3553=_0x5f47e6;if(BattleManager[_0xca3553(0x280)]()){if(!BattleManager[_0xca3553(0x1af)]())return null;if(Imported[_0xca3553(0x297)]&&BattleManager['isCTB']())return null;}return BattleManager[_0xca3553(0x402)];},Sprite_FvUiController[_0x5f47e6(0x41c)]['currentSubjectFilename']=function(){const _0x20552f=_0x5f47e6,_0xd6e0c2=this[_0x20552f(0x279)](),_0x5df116=this[_0x20552f(0x393)]();return DataManager[_0x20552f(0x264)](_0xd6e0c2,_0x5df116);},Sprite_FvUiController[_0x5f47e6(0x41c)]['getCurrentSubjectKeys']=function(){const _0x520611=_0x5f47e6,_0x229d14=[],_0x2236ca=this['currentSubjectActor']();if(_0x2236ca&&BattleManager[_0x520611(0x1ef)]){const _0x392c2a=BattleManager['_action'];if(_0x392c2a){if(_0x392c2a['item']())_0x229d14[_0x520611(0x374)](_0x392c2a[_0x520611(0x1dc)]()[_0x520611(0x418)]);if(_0x392c2a[_0x520611(0x2d5)]())_0x229d14[_0x520611(0x374)]('ITEM');if(_0x392c2a[_0x520611(0x169)]())_0x229d14['push'](_0x520611(0x30b));if(_0x392c2a[_0x520611(0x250)]())_0x229d14[_0x520611(0x374)](_0x520611(0x3b5));if(_0x392c2a['isPhysical']())_0x229d14['push'](_0x520611(0x385));if(_0x392c2a[_0x520611(0x416)]())_0x229d14[_0x520611(0x374)]('MAGICAL');if(_0x392c2a['isForOpponent']())_0x229d14['push'](_0x520611(0x348));if(!_0x392c2a[_0x520611(0x406)]()&&!_0x392c2a[_0x520611(0x379)]()){if(_0x392c2a['isMagicSkill']())_0x229d14['push'](_0x520611(0x420));if(_0x392c2a[_0x520611(0x390)]())_0x229d14[_0x520611(0x374)](_0x520611(0x1fb));}}}return _0x229d14['push']('NORMAL'),_0x229d14[_0x520611(0x374)]('DEFAULT'),_0x229d14;},Sprite_FvUiController['prototype']['updateInputs']=function(){const _0x19329a=_0x5f47e6;this['_lastInputFilename']!==this[_0x19329a(0x1f0)]()&&(this[_0x19329a(0x3e4)]=this[_0x19329a(0x1f0)](),this[_0x19329a(0x3e4)]!==''&&(this[_0x19329a(0x32a)]=this[_0x19329a(0x3e4)]),this[_0x19329a(0x358)](![]));},Sprite_FvUiController[_0x5f47e6(0x41c)]['currentInputActor']=function(){const _0x29e478=_0x5f47e6;return BattleManager[_0x29e478(0x1d6)];},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x1f0)]=function(){const _0xec4db1=_0x5f47e6,_0x178638=this[_0xec4db1(0x16b)](),_0x338553=this[_0xec4db1(0x291)]();return DataManager[_0xec4db1(0x264)](_0x178638,_0x338553);},Sprite_FvUiController['prototype'][_0x5f47e6(0x291)]=function(){const _0x590e0a=_0x5f47e6,_0x410aba=[],_0x10087a=this['currentInputActor']();if(_0x10087a){const _0x46542f=SceneManager[_0x590e0a(0x355)];if(_0x46542f){const _0x3aa59e=_0x46542f[_0x590e0a(0x1be)][_0x590e0a(0x433)]();if(_0x3aa59e!==''){if(_0x3aa59e===_0x590e0a(0x24d)){const _0xfa9da3=_0x46542f[_0x590e0a(0x1be)]['currentExt'](),_0x35cae4=$dataSkills[_0xfa9da3][_0x590e0a(0x418)];if(_0x35cae4)_0x410aba[_0x590e0a(0x374)](_0x35cae4);}else _0x3aa59e&&_0x410aba[_0x590e0a(0x374)](_0x3aa59e);}}}return _0x410aba[_0x590e0a(0x374)]('NORMAL'),_0x410aba[_0x590e0a(0x374)](_0x590e0a(0x41a)),_0x410aba;},Sprite_FvUiController[_0x5f47e6(0x41c)][_0x5f47e6(0x2b7)]=function(){const _0x2c2515=_0x5f47e6,_0x50070c=this['targetOpacity'](),_0x31565e=Sprite_FvUiController[_0x2c2515(0x321)],_0x5ecd3c=[this[_0x2c2515(0x345)],this[_0x2c2515(0x32f)]];for(const _0x4d2317 of _0x5ecd3c){if(_0x4d2317[_0x2c2515(0x3ad)]>_0x50070c)_0x4d2317[_0x2c2515(0x3ad)]=Math[_0x2c2515(0x431)](_0x4d2317[_0x2c2515(0x3ad)]-_0x31565e,_0x50070c);else _0x4d2317[_0x2c2515(0x3ad)]<_0x50070c&&(_0x4d2317[_0x2c2515(0x3ad)]=Math[_0x2c2515(0x42b)](_0x4d2317['opacity']+_0x31565e,_0x50070c));}},Sprite_FvUiController[_0x5f47e6(0x41c)]['targetOpacity']=function(){const _0x30c1c6=_0x5f47e6,_0xd19dcc=$gameSystem[_0x30c1c6(0x1bd)]()?Sprite_FvUiController[_0x30c1c6(0x32e)]:Sprite_FvUiController[_0x30c1c6(0x21d)],_0x12ea6f=SceneManager['_scene'];if(!_0x12ea6f)return;const _0x5e93c1=Sprite_FvUiController[_0x30c1c6(0x26d)];if(_0x12ea6f['isGridWindowActive']&&_0x12ea6f[_0x30c1c6(0x24b)]())return 0x0;if(_0x12ea6f['_actorWindow']&&_0x12ea6f[_0x30c1c6(0x3ab)][_0x30c1c6(0x184)])return _0xd19dcc[_0x30c1c6(0x361)]?0xff:_0x5e93c1;else{if(_0x12ea6f['_enemyWindow']&&_0x12ea6f[_0x30c1c6(0x275)]['active'])return _0xd19dcc[_0x30c1c6(0x270)]?0xff:_0x5e93c1;}return 0xff;};function _0x587b(_0x43d1e9,_0x33a030){const _0x794d05=_0x794d();return _0x587b=function(_0x587b70,_0x357083){_0x587b70=_0x587b70-0x169;let _0x2dc95a=_0x794d05[_0x587b70];return _0x2dc95a;},_0x587b(_0x43d1e9,_0x33a030);}function Sprite_FvUiPortrait(){const _0x46cd1b=_0x5f47e6;this[_0x46cd1b(0x352)](...arguments);}Sprite_FvUiPortrait[_0x5f47e6(0x41c)]=Object[_0x5f47e6(0x329)](Sprite[_0x5f47e6(0x41c)]),Sprite_FvUiPortrait['prototype']['constructor']=Sprite_FvUiPortrait,Sprite_FvUiPortrait[_0x5f47e6(0x211)]=VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)][_0x5f47e6(0x3fa)]??0x40,Sprite_FvUiPortrait[_0x5f47e6(0x185)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x1fa)][_0x5f47e6(0x3dc)]??0x14,Sprite_FvUiPortrait[_0x5f47e6(0x1b9)]=VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1fa)][_0x5f47e6(0x30a)]??0x1,Sprite_FvUiPortrait['SPRITE_HORZ_FLIP']=VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x1fa)][_0x5f47e6(0x26a)]??![],Sprite_FvUiPortrait[_0x5f47e6(0x336)]=VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['Portrait'][_0x5f47e6(0x2bf)]??0x3c,Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(_0x10bb7e){const _0x5c205d=_0x5f47e6;this[_0x5c205d(0x3a2)]=_0x10bb7e,Sprite[_0x5c205d(0x41c)][_0x5c205d(0x352)][_0x5c205d(0x2ad)](this),this['initMembers'](),this[_0x5c205d(0x333)]();},Sprite_FvUiPortrait[_0x5f47e6(0x41c)]['initMembers']=function(){const _0x528377=_0x5f47e6;this[_0x528377(0x311)]=!![],this['x']=Sprite_FvUiPortrait['ENTER_FROM_OFFSET'],this['y']=0x0,this[_0x528377(0x3ad)]=0x0,this[_0x528377(0x21a)]['x']=0.5,this[_0x528377(0x21a)]['y']=0x1,this['scale']['x']=Sprite_FvUiPortrait[_0x528377(0x1b9)],this['scale']['y']=Sprite_FvUiPortrait[_0x528377(0x1b9)],Sprite_FvUiPortrait[_0x528377(0x21b)]&&(this[_0x528377(0x328)]['x']*=-0x1),this[_0x528377(0x309)]=![],this['_activeAutoFadeOutDuration']=0x0;},Sprite_FvUiPortrait['prototype']['createBitmap']=function(){const _0x561b68=_0x5f47e6;this[_0x561b68(0x42f)]=ImageManager['loadPicture'](this['_filename']),this[_0x561b68(0x42f)][_0x561b68(0x2eb)](this[_0x561b68(0x427)][_0x561b68(0x376)](this));},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x427)]=function(){const _0x3dc134=_0x5f47e6;if(this['_fadingIn'])return;this['_fadingIn']=!![];const _0x42b715=Sprite_FvUiPortrait['ENTER_DURATION'];this['startMove'](0x0,_0x42b715),this[_0x3dc134(0x442)](0xff,_0x42b715);},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x2cc)]=function(){const _0x3a840e=_0x5f47e6;if(this[_0x3a840e(0x36c)])return;this['_fadingOut']=!![];const _0x4cbdf6=Sprite_FvUiPortrait[_0x3a840e(0x185)];this['startMove'](0x0,_0x4cbdf6),this[_0x3a840e(0x442)](0x0,_0x4cbdf6);},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x2fd)]=function(_0x851d18,_0x36716f){const _0x20e6e2=_0x5f47e6;this[_0x20e6e2(0x1a7)]=_0x851d18,this[_0x20e6e2(0x2dc)]=_0x36716f;},Sprite_FvUiPortrait[_0x5f47e6(0x41c)]['startOpacity']=function(_0x1cb608,_0x1dee25){const _0xf70367=_0x5f47e6;this[_0xf70367(0x2de)]=_0x1cb608,this[_0xf70367(0x3fc)]=_0x1dee25;},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x20c)]=function(){const _0x27f806=_0x5f47e6;if(Sprite_FvUiPortrait['ACTIVE_AUTO_FADEOUT']<=0x0)return;this[_0x27f806(0x309)]=!![];},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x320)]=function(_0x405339){this['x']=0x0,this['opacity']=_0x405339;},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x319)]=function(){const _0x28e48a=_0x5f47e6;Sprite[_0x28e48a(0x41c)][_0x28e48a(0x319)][_0x28e48a(0x2ad)](this);if(!this[_0x28e48a(0x311)])return;this[_0x28e48a(0x2ce)](),this[_0x28e48a(0x2b7)](),this[_0x28e48a(0x1ce)]();},Sprite_FvUiPortrait[_0x5f47e6(0x41c)][_0x5f47e6(0x2ce)]=function(){const _0x4dc4bc=_0x5f47e6;if(!this['_moveDuration'])return;if(this['_moveDuration']<=0x0)return;const _0x2762ab=this[_0x4dc4bc(0x2dc)];this['x']=(this['x']*(_0x2762ab-0x1)+this['_moveTargetX'])/_0x2762ab,this[_0x4dc4bc(0x2dc)]--,this[_0x4dc4bc(0x2dc)]<=0x0&&(this['x']=this[_0x4dc4bc(0x1a7)],this[_0x4dc4bc(0x309)]&&(this[_0x4dc4bc(0x27c)]=Sprite_FvUiPortrait['ACTIVE_AUTO_FADEOUT']));},Sprite_FvUiPortrait['prototype'][_0x5f47e6(0x2b7)]=function(){const _0x15190a=_0x5f47e6;if(!this['_opacityDuration'])return;if(this[_0x15190a(0x3fc)]<=0x0)return;const _0x48b699=this['_opacityDuration'];this['opacity']=(this['opacity']*(_0x48b699-0x1)+this['_opacityTarget'])/_0x48b699,this[_0x15190a(0x3fc)]--,this[_0x15190a(0x3fc)]<=0x0&&(this['opacity']=this['_opacityTarget']);},Sprite_FvUiPortrait['prototype']['updateActiveAutoFadeOut']=function(){const _0x195c37=_0x5f47e6;if(!this[_0x195c37(0x27c)])return;if(this[_0x195c37(0x27c)]<=0x0)return;this[_0x195c37(0x27c)]--,this[_0x195c37(0x27c)]<=0x0&&this[_0x195c37(0x2cc)]();},Window_Base[_0x5f47e6(0x378)]={'maxRows':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)]['Battle'][_0x5f47e6(0x3ff)]??0x8,'edgeBuffer':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x323)]??0x3c,'scale':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['Battle'][_0x5f47e6(0x3e7)]??0.75,'baseOffset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x176)]??0x0,'y':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x3c3)][_0x5f47e6(0x2c1)]??0x12},'stackOffset':{'x':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x33e)]??0x10,'y':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x3c3)][_0x5f47e6(0x220)]??0x10},'showCancelButton':VisuMZ['FrontviewBattleUI']['Settings'][_0x5f47e6(0x3c3)][_0x5f47e6(0x413)]??![],'showShopStatus':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x1c5)]??!![]},Window_Base[_0x5f47e6(0x41c)]['initMembersFrontviewUi']=function(){const _0x4fa0f9=_0x5f47e6;if(!this[_0x4fa0f9(0x38c)]())return;this[_0x4fa0f9(0x328)]['x']=Window_Base[_0x4fa0f9(0x378)][_0x4fa0f9(0x328)],this[_0x4fa0f9(0x328)]['y']=Window_Base[_0x4fa0f9(0x378)]['scale'];},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x38c)]=function(){const _0x2caf26=_0x5f47e6;return BattleManager[_0x2caf26(0x38c)]();},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x3ea)]=function(){const _0x245ba1=_0x5f47e6;this[_0x245ba1(0x2e8)](),this['adjustFrontviewUiHeight'](),this[_0x245ba1(0x432)]();},Window_Base[_0x5f47e6(0x41c)]['adjustFrontviewUiWidth']=function(){const _0x1ce367=_0x5f47e6;if(!this[_0x1ce367(0x38c)]())return;const _0x5ab804=this[_0x1ce367(0x219)];this[_0x1ce367(0x219)]=this['frontviewUiWidth'](),_0x5ab804!==this[_0x1ce367(0x219)]&&this[_0x1ce367(0x3a3)]();},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x40b)]=function(){const _0x499dfd=_0x5f47e6;return Math['max'](Math[_0x499dfd(0x21e)](Graphics['width']/0x3),0xf0);},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x1cc)]=function(){const _0x16b11c=_0x5f47e6;if(!this[_0x16b11c(0x38c)]())return;const _0x9a2fe2=this['height'],_0x2bcdda=Math[_0x16b11c(0x431)](this[_0x16b11c(0x3b6)](),0x1),_0x57579f=this[_0x16b11c(0x204)](_0x2bcdda),_0x18ad04=this[_0x16b11c(0x204)](this[_0x16b11c(0x3c7)]());this[_0x16b11c(0x3ee)]=Math[_0x16b11c(0x42b)](_0x57579f,_0x18ad04),_0x9a2fe2!==this[_0x16b11c(0x3ee)]&&this[_0x16b11c(0x3a3)]();},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x3b6)]=function(){const _0x5c4c65=_0x5f47e6;if(this['_data'])return this['_data'][_0x5c4c65(0x344)];if(this['_list'])return this[_0x5c4c65(0x31f)][_0x5c4c65(0x344)];return 0x4;},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x3c7)]=function(){const _0x259dd7=_0x5f47e6;return Window_Base[_0x259dd7(0x378)][_0x259dd7(0x314)];},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x432)]=function(){const _0x2096d6=_0x5f47e6;if(!this[_0x2096d6(0x38c)]())return;this['x']=Math[_0x2096d6(0x21e)](this[_0x2096d6(0x302)]()),this['y']=Math[_0x2096d6(0x3e9)](this[_0x2096d6(0x350)]());},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x1a0)]=function(){return 0x0;},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x2f5)]=function(){return'center';},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x302)]=function(){const _0x2cfc0d=_0x5f47e6,_0x4762a4=this['frontviewUiLocation'](),_0x39ef0a=this[_0x2cfc0d(0x219)]*this['scale']['x'],_0x2e837d=Window_Base['FRONTVIEW_BATTLE_UI']['edgeBuffer'];let _0x4bf166=0x0;if(_0x4762a4===_0x2cfc0d(0x3ca))_0x4bf166=(Graphics['boxWidth']-_0x39ef0a)/0x2,this['_statusWindow']&&(_0x4bf166-=Math[_0x2cfc0d(0x3e9)](this['_statusWindow']['width']*this[_0x2cfc0d(0x328)]['x']*0.5));else{if(_0x4762a4===_0x2cfc0d(0x207))_0x4bf166=Graphics[_0x2cfc0d(0x17c)]-_0x39ef0a-_0x2e837d,_0x4bf166-=this[_0x2cfc0d(0x1a0)]()*Window_Base[_0x2cfc0d(0x378)][_0x2cfc0d(0x1a9)]['x'],this['_statusWindow']&&(_0x4bf166-=Math['floor'](this[_0x2cfc0d(0x2c7)][_0x2cfc0d(0x219)]*this[_0x2cfc0d(0x328)]['x']));else _0x4762a4==='left'&&(_0x4bf166=_0x2e837d,_0x4bf166+=this['frontviewUiStack']()*Window_Base[_0x2cfc0d(0x378)]['stackOffset']['x']);}return _0x4bf166+=Window_Base[_0x2cfc0d(0x378)][_0x2cfc0d(0x3c5)]['x'],_0x4bf166;},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x350)]=function(){const _0x399fdd=_0x5f47e6;let _0x5509ec=Graphics['height']-SceneManager[_0x399fdd(0x355)][_0x399fdd(0x2c7)][_0x399fdd(0x3ee)];const _0x53581f=this[_0x399fdd(0x204)](this[_0x399fdd(0x3c7)]());return _0x5509ec-=_0x53581f*this[_0x399fdd(0x328)]['y'],_0x5509ec/=0x2,_0x5509ec+=this[_0x399fdd(0x1a0)]()*Window_Base[_0x399fdd(0x378)][_0x399fdd(0x1a9)]['y'],_0x5509ec+=Window_Base[_0x399fdd(0x378)][_0x399fdd(0x3c5)]['y'],Imported['VisuMZ_4_MultiLayerHpGauge']&&$gameTroop['totalVisibleMultiLayerHpGauges']()>0x0&&(this[_0x399fdd(0x1a0)]()>0x0&&(_0x5509ec+=Math[_0x399fdd(0x41d)](Sprite_MultiLayerHpContainer[_0x399fdd(0x262)]['faceSize']*0x2/0x3))),_0x5509ec;},Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x308)]=function(){const _0x54086e=_0x5f47e6;if(!this['_statusWindow'])return;this[_0x54086e(0x2c7)][_0x54086e(0x201)](),this[_0x54086e(0x2c7)]['x']=Math['ceil'](this['x']+this[_0x54086e(0x219)]*this[_0x54086e(0x328)]['x']),this[_0x54086e(0x2c7)]['y']=this['y'],this[_0x54086e(0x2c7)]['x']+this['_statusWindow']['width']*this[_0x54086e(0x328)]['x']>Graphics[_0x54086e(0x17c)]&&(this['_statusWindow']['x']=Graphics['boxWidth']-this[_0x54086e(0x2c7)][_0x54086e(0x219)]*this[_0x54086e(0x328)]['x'],this['_statusWindow']['y']+=Window_Base[_0x54086e(0x378)][_0x54086e(0x1a9)]['y']);},Window_Base[_0x5f47e6(0x41c)]['hideFrontviewUiShopStatusWindow']=function(){const _0x20dba0=_0x5f47e6;if(!this[_0x20dba0(0x2c7)])return;this[_0x20dba0(0x2c7)][_0x20dba0(0x3ae)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x16f)]=Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x217)],Window_Base[_0x5f47e6(0x41c)]['open']=function(){const _0x46e418=_0x5f47e6;VisuMZ[_0x46e418(0x2ca)][_0x46e418(0x16f)][_0x46e418(0x2ad)](this),this[_0x46e418(0x23a)]&&BattleManager[_0x46e418(0x38c)]()&&this[_0x46e418(0x2c7)]&&(this[_0x46e418(0x2c7)]['openness']=this[_0x46e418(0x1ac)],this[_0x46e418(0x2c7)][_0x46e418(0x217)]());},VisuMZ['FrontviewBattleUI']['Window_Base_close']=Window_Base[_0x5f47e6(0x41c)]['close'],Window_Base[_0x5f47e6(0x41c)][_0x5f47e6(0x277)]=function(){const _0x217390=_0x5f47e6;VisuMZ[_0x217390(0x2ca)]['Window_Base_close']['call'](this),this[_0x217390(0x290)]&&BattleManager[_0x217390(0x38c)]()&&this[_0x217390(0x2c7)]&&(this[_0x217390(0x2c7)][_0x217390(0x1ac)]=this[_0x217390(0x1ac)],this[_0x217390(0x2c7)][_0x217390(0x277)]());},Window_ItemList[_0x5f47e6(0x378)]={'location':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['Battle'][_0x5f47e6(0x3fb)]??_0x5f47e6(0x17e)},VisuMZ[_0x5f47e6(0x2ca)]['Window_ItemList_initialize']=Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x352)],Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(_0x5d2de0){const _0x254b6f=_0x5f47e6;VisuMZ['FrontviewBattleUI'][_0x254b6f(0x274)]['call'](this,_0x5d2de0),this[_0x254b6f(0x1cd)]();},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x2e4)]=Window_ItemList['prototype'][_0x5f47e6(0x3d7)],Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x3d7)]=function(){const _0x15327c=_0x5f47e6;return this['isUsingFrontviewUiLayout']()?0x1:VisuMZ['FrontviewBattleUI'][_0x15327c(0x2e4)][_0x15327c(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2a7)]=Window_ItemList[_0x5f47e6(0x41c)]['colSpacing'],Window_ItemList[_0x5f47e6(0x41c)]['colSpacing']=function(){const _0x34f333=_0x5f47e6;return this[_0x34f333(0x38c)]()?0x0:VisuMZ['FrontviewBattleUI']['Window_ItemList_colSpacing'][_0x34f333(0x2ad)](this);},Window_ItemList[_0x5f47e6(0x41c)]['frontviewUiWidth']=function(){const _0x946ee2=_0x5f47e6;return Math[_0x946ee2(0x21e)](Graphics['width']/0x2);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2d7)]=Window_ItemList[_0x5f47e6(0x41c)]['makeItemList'],Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x3f3)]=function(){const _0x4c9525=_0x5f47e6;VisuMZ[_0x4c9525(0x2ca)]['Window_ItemList_makeItemList']['call'](this),this['adjustForFrontviewUi']();},Window_ItemList[_0x5f47e6(0x41c)]['frontviewUiLocation']=function(){const _0x3f21e6=_0x5f47e6;return Window_ItemList[_0x3f21e6(0x378)][_0x3f21e6(0x16e)];},Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x1a0)]=function(){return 0x1;},Window_ItemList[_0x5f47e6(0x41c)][_0x5f47e6(0x40b)]=function(){const _0x1e023f=_0x5f47e6,_0x49ffc7=VisuMZ[_0x1e023f(0x2ca)][_0x1e023f(0x20b)][_0x1e023f(0x2e5)],_0x2a54d5=_0x49ffc7[_0x1e023f(0x42c)];return _0x2a54d5===_0x1e023f(0x3d5)||_0x2a54d5===undefined?Window_Base[_0x1e023f(0x41c)][_0x1e023f(0x40b)][_0x1e023f(0x2ad)](this):Math[_0x1e023f(0x21e)](Number(_0x49ffc7['ItemWindows'])/this[_0x1e023f(0x328)]['x']);},Window_SkillList[_0x5f47e6(0x378)]={'location':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)]['Window_SkillList_Pos']??_0x5f47e6(0x17e)},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3a1)]=Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x352)],Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(_0x5b7fcb){const _0x42bf56=_0x5f47e6;VisuMZ[_0x42bf56(0x2ca)][_0x42bf56(0x3a1)][_0x42bf56(0x2ad)](this,_0x5b7fcb),this[_0x42bf56(0x1cd)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x224)]=Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x3d7)],Window_SkillList[_0x5f47e6(0x41c)]['maxCols']=function(){const _0x38702f=_0x5f47e6;return this[_0x38702f(0x38c)]()?0x1:VisuMZ[_0x38702f(0x2ca)][_0x38702f(0x224)][_0x38702f(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3f5)]=Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x3d9)],Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x3d9)]=function(){const _0x31b037=_0x5f47e6;return this[_0x31b037(0x38c)]()?0x0:VisuMZ['FrontviewBattleUI']['Window_SkillList_colSpacing'][_0x31b037(0x2ad)](this);},Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x40b)]=function(){const _0x3a64c=_0x5f47e6;return Math[_0x3a64c(0x21e)](Graphics['width']/0x2);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x29d)]=Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x3f3)],Window_SkillList[_0x5f47e6(0x41c)]['makeItemList']=function(){const _0xae5cfd=_0x5f47e6;VisuMZ[_0xae5cfd(0x2ca)]['Window_SkillList_makeItemList'][_0xae5cfd(0x2ad)](this),this['adjustForFrontviewUi']();},Window_SkillList[_0x5f47e6(0x41c)]['frontviewUiLocation']=function(){const _0x4efefe=_0x5f47e6;return Window_SkillList['FRONTVIEW_BATTLE_UI'][_0x4efefe(0x16e)];},Window_SkillList['prototype'][_0x5f47e6(0x1a0)]=function(){return 0x1;},Window_SkillList[_0x5f47e6(0x41c)][_0x5f47e6(0x40b)]=function(){const _0x1cf4f9=_0x5f47e6,_0x2e0689=VisuMZ[_0x1cf4f9(0x2ca)][_0x1cf4f9(0x20b)][_0x1cf4f9(0x2e5)],_0xc04783=_0x2e0689[_0x1cf4f9(0x42c)];return _0xc04783===_0x1cf4f9(0x3d5)||_0xc04783===undefined?Window_Base[_0x1cf4f9(0x41c)][_0x1cf4f9(0x40b)][_0x1cf4f9(0x2ad)](this):Math['ceil'](Number(_0x2e0689[_0x1cf4f9(0x42c)])/this[_0x1cf4f9(0x328)]['x']);},VisuMZ['FrontviewBattleUI']['Window_BattleSkill_show']=Window_BattleSkill[_0x5f47e6(0x41c)][_0x5f47e6(0x201)],Window_BattleSkill['prototype'][_0x5f47e6(0x201)]=function(){const _0x5c5daf=_0x5f47e6;VisuMZ[_0x5c5daf(0x2ca)][_0x5c5daf(0x187)][_0x5c5daf(0x2ad)](this),this[_0x5c5daf(0x308)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x1f8)]=Window_BattleSkill[_0x5f47e6(0x41c)][_0x5f47e6(0x3ae)],Window_BattleSkill['prototype']['hide']=function(){const _0x45b004=_0x5f47e6;VisuMZ[_0x45b004(0x2ca)][_0x45b004(0x1f8)][_0x45b004(0x2ad)](this),this[_0x45b004(0x1bb)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2f4)]=Window_BattleItem[_0x5f47e6(0x41c)][_0x5f47e6(0x201)],Window_BattleItem[_0x5f47e6(0x41c)][_0x5f47e6(0x201)]=function(){const _0x19cb9a=_0x5f47e6;VisuMZ[_0x19cb9a(0x2ca)][_0x19cb9a(0x2f4)][_0x19cb9a(0x2ad)](this),this['showFrontviewUiShopStatusWindow']();},VisuMZ['FrontviewBattleUI']['Window_BattleItem_hide']=Window_BattleItem['prototype'][_0x5f47e6(0x3ae)],Window_BattleItem[_0x5f47e6(0x41c)][_0x5f47e6(0x3ae)]=function(){const _0x5046d9=_0x5f47e6;VisuMZ['FrontviewBattleUI'][_0x5046d9(0x3ec)][_0x5046d9(0x2ad)](this),this['hideFrontviewUiShopStatusWindow']();},Window_PartyCommand['FRONTVIEW_BATTLE_UI']={'location':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x2ac)]??_0x5f47e6(0x17e)},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2fa)]=Window_PartyCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x352)],Window_PartyCommand[_0x5f47e6(0x41c)]['initialize']=function(_0x530c54){const _0x380634=_0x5f47e6;VisuMZ[_0x380634(0x2ca)][_0x380634(0x2fa)]['call'](this,_0x530c54),this[_0x380634(0x1cd)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x2e3)]=Window_PartyCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x1f5)],Window_PartyCommand['prototype'][_0x5f47e6(0x1f5)]=function(){const _0x3ea748=_0x5f47e6;VisuMZ[_0x3ea748(0x2ca)]['Window_PartyCommand_makeCommandList']['call'](this),this[_0x3ea748(0x3ea)]();},Window_PartyCommand['prototype'][_0x5f47e6(0x2f5)]=function(){const _0x6a0d3=_0x5f47e6;return Window_PartyCommand[_0x6a0d3(0x378)][_0x6a0d3(0x16e)];},VisuMZ['FrontviewBattleUI']['Window_PartyCommand_activate']=Window_PartyCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x365)],Window_PartyCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x365)]=function(){const _0x1085af=_0x5f47e6;VisuMZ[_0x1085af(0x2ca)][_0x1085af(0x2f2)][_0x1085af(0x2ad)](this),BattleManager[_0x1085af(0x38c)]()&&Window_BattleStatus[_0x1085af(0x378)][_0x1085af(0x183)]&&this[_0x1085af(0x312)]();},Window_PartyCommand['prototype'][_0x5f47e6(0x40b)]=function(){const _0x2fb482=_0x5f47e6,_0xac9ca9=VisuMZ[_0x2fb482(0x2ca)][_0x2fb482(0x20b)][_0x2fb482(0x2e5)],_0x21f34e=_0xac9ca9[_0x2fb482(0x33a)];return _0x21f34e===_0x2fb482(0x3d5)||_0x21f34e===undefined?Window_Base[_0x2fb482(0x41c)][_0x2fb482(0x40b)]['call'](this):Math['ceil'](Number(_0xac9ca9[_0x2fb482(0x33a)])/this[_0x2fb482(0x328)]['x']);},Window_ActorCommand[_0x5f47e6(0x378)]={'location':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x188)]??_0x5f47e6(0x17e)},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x243)]=Window_ActorCommand['prototype'][_0x5f47e6(0x352)],Window_ActorCommand['prototype']['initialize']=function(_0x4e729a){const _0x13e7d2=_0x5f47e6;VisuMZ['FrontviewBattleUI'][_0x13e7d2(0x243)][_0x13e7d2(0x2ad)](this,_0x4e729a),this['initMembersFrontviewUi']();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x43f)]=Window_ActorCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x1f5)],Window_ActorCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x1f5)]=function(){const _0x226606=_0x5f47e6;VisuMZ[_0x226606(0x2ca)][_0x226606(0x43f)][_0x226606(0x2ad)](this),this[_0x226606(0x3ea)]();},Window_ActorCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x2f5)]=function(){const _0x202635=_0x5f47e6;return Window_ActorCommand[_0x202635(0x378)][_0x202635(0x16e)];},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x1c8)]=Window_ActorCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x365)],Window_ActorCommand['prototype'][_0x5f47e6(0x365)]=function(){const _0x20ced3=_0x5f47e6;VisuMZ[_0x20ced3(0x2ca)]['Window_ActorCommand_activate'][_0x20ced3(0x2ad)](this),BattleManager['isUsingFrontviewUiLayout']()&&Window_BattleStatus[_0x20ced3(0x378)][_0x20ced3(0x183)]&&this[_0x20ced3(0x312)]();},Window_ActorCommand[_0x5f47e6(0x41c)][_0x5f47e6(0x40b)]=function(){const _0x12f069=_0x5f47e6,_0x548329=VisuMZ[_0x12f069(0x2ca)][_0x12f069(0x20b)]['Window'],_0x574af2=_0x548329['CommandWindows'];return _0x574af2===_0x12f069(0x3d5)||_0x574af2===undefined?Window_Base[_0x12f069(0x41c)][_0x12f069(0x40b)]['call'](this):Math[_0x12f069(0x21e)](Number(_0x548329['CommandWindows'])/this[_0x12f069(0x328)]['x']);},Window_BattleStatus[_0x5f47e6(0x378)]={'animationOffset':{'x':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x3c3)][_0x5f47e6(0x263)]??0x0,'y':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x381)]??0x20},'compactWidth':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x2e9)]??!![],'commandHelpWindow':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x3c3)][_0x5f47e6(0x2ed)]??![],'initialPosition':VisuMZ[_0x5f47e6(0x2ca)]['Settings'][_0x5f47e6(0x3c3)]['InitialUiPosition']??_0x5f47e6(0x207),'moveCenter':VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x20b)]['Battle'][_0x5f47e6(0x40c)]??!![]},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x1dd)]=Window_BattleStatus[_0x5f47e6(0x41c)]['initialize'],Window_BattleStatus[_0x5f47e6(0x41c)]['initialize']=function(_0x418953){const _0x37d37e=_0x5f47e6;VisuMZ[_0x37d37e(0x2ca)][_0x37d37e(0x1dd)]['call'](this,_0x418953),this[_0x37d37e(0x3ef)]()&&(this['initFrontviewBattleUi'](),this[_0x37d37e(0x362)](),this[_0x37d37e(0x222)]());},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3ef)]=function(){const _0x2bff83=_0x5f47e6;return BattleManager[_0x2bff83(0x38c)]();},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x373)]=function(){const _0x3f1cbc=_0x5f47e6;this[_0x3f1cbc(0x35c)](0x2),this[_0x3f1cbc(0x180)]=![];},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x434)]=Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3d7)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3d7)]=function(){const _0x2ea55b=_0x5f47e6;return BattleManager[_0x2ea55b(0x38c)]()?$gameParty[_0x2ea55b(0x272)]()['length']:VisuMZ[_0x2ea55b(0x2ca)]['Window_BattleStatus_maxCols'][_0x2ea55b(0x2ad)](this);},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x2ef)]=Window_BattleStatus['prototype'][_0x5f47e6(0x2f6)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2f6)]=function(){const _0x4a0944=_0x5f47e6;return BattleManager['isUsingFrontviewUiLayout']()?$gameParty[_0x4a0944(0x272)]()[_0x4a0944(0x344)]:VisuMZ[_0x4a0944(0x2ca)][_0x4a0944(0x2ef)]['call'](this);},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x2a0)]=Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x322)],Window_BattleStatus['prototype'][_0x5f47e6(0x322)]=function(){const _0x4820bc=_0x5f47e6;BattleManager[_0x4820bc(0x38c)]()?this[_0x4820bc(0x1eb)]=0x0:VisuMZ['FrontviewBattleUI'][_0x4820bc(0x2a0)][_0x4820bc(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3bc)]=Window_BattleStatus['prototype'][_0x5f47e6(0x38a)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x38a)]=function(){const _0x4e826f=_0x5f47e6;VisuMZ[_0x4e826f(0x2ca)][_0x4e826f(0x3bc)][_0x4e826f(0x2ad)](this),BattleManager[_0x4e826f(0x38c)]()&&this[_0x4e826f(0x232)](0x0,0x0,0x0,0x0);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x249)]=Window_Selectable[_0x5f47e6(0x41c)][_0x5f47e6(0x332)],Window_Selectable['prototype'][_0x5f47e6(0x332)]=function(_0x1df788){const _0x594695=_0x5f47e6;return this[_0x594695(0x258)]===Window_BattleStatus&&BattleManager['isUsingFrontviewUiLayout']()?this['frontviewBattleUiItemRect'](_0x1df788):VisuMZ[_0x594695(0x2ca)][_0x594695(0x249)][_0x594695(0x2ad)](this,_0x1df788);},Window_BattleStatus[_0x5f47e6(0x41c)]['frontviewBattleUiItemRect']=function(_0x1803b3){const _0x389e8a=_0x5f47e6;if(!this[_0x389e8a(0x271)])return VisuMZ[_0x389e8a(0x2ca)]['Window_Selectable_itemRect']['call'](this,_0x1803b3);let _0x279769=Math[_0x389e8a(0x42b)](this[_0x389e8a(0x219)]/this['maxCols'](),ImageManager[_0x389e8a(0x1e2)]),_0x9b69b8=this[_0x389e8a(0x3ee)];const _0xe79348=$gameParty['maxBattleMembers']()-_0x1803b3-0x1;let _0x87122f=Math[_0x389e8a(0x41d)](this[_0x389e8a(0x271)][_0xe79348]['x']-_0x279769/0x2),_0x1e4c2a=0x0;return new Rectangle(_0x87122f,_0x1e4c2a,_0x279769,_0x9b69b8);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x22c)]=Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x313)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x313)]=function(_0x3453fa){const _0x4c107e=_0x5f47e6;if(BattleManager[_0x4c107e(0x38c)]())return;VisuMZ['FrontviewBattleUI'][_0x4c107e(0x22c)][_0x4c107e(0x2ad)](this,_0x3453fa);},VisuMZ['FrontviewBattleUI'][_0x5f47e6(0x2da)]=Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2c8)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x2c8)]=function(_0x2cd3f7){const _0x15a763=_0x5f47e6;BattleManager[_0x15a763(0x38c)]()?this[_0x15a763(0x43a)](_0x2cd3f7):VisuMZ[_0x15a763(0x2ca)][_0x15a763(0x2da)][_0x15a763(0x2ad)](this,_0x2cd3f7);},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x43a)]=function(_0x5065f6){const _0x384574=_0x5f47e6;this[_0x384574(0x1b7)](_0x5065f6);},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x1b7)]=function(_0x47afcc){const _0x49507f=_0x5f47e6;if(!SceneManager[_0x49507f(0x343)]())return;if($gameSystem[_0x49507f(0x1bd)]())return;const _0x253cfd=this[_0x49507f(0x361)](_0x47afcc);if(!_0x253cfd)return;const _0xc3a68f=_0x253cfd[_0x49507f(0x241)]();if(!_0xc3a68f)return;const _0x338297=this[_0x49507f(0x24e)](_0x47afcc);if(!_0x338297)return;let _0x43c216=_0x338297['x'],_0x5d372f=this['height']/0x2;_0x43c216+=Window_BattleStatus[_0x49507f(0x378)][_0x49507f(0x36b)]['x'],_0x5d372f+=Window_BattleStatus[_0x49507f(0x378)]['animationOffset']['y'],_0xc3a68f['setHome'](_0x43c216,_0x5d372f),this[_0x49507f(0x3be)](_0xc3a68f,0x1);if($gameSystem[_0x49507f(0x1bd)]())_0xc3a68f[_0x49507f(0x201)]();if(!$gameSystem[_0x49507f(0x1bd)]())_0xc3a68f[_0x49507f(0x3ae)]();if(this['_damageContainer'])this[_0x49507f(0x208)](this[_0x49507f(0x214)]);this[_0x49507f(0x245)](),this[_0x49507f(0x247)]();},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3a7)]=Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x339)],Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x339)]=function(_0x927f19,_0x428ebe){const _0x4ae81d=_0x5f47e6;BattleManager[_0x4ae81d(0x38c)]()&&!$gameSystem[_0x4ae81d(0x1bd)]()?this[_0x4ae81d(0x386)](_0x927f19,_0x428ebe):VisuMZ['FrontviewBattleUI']['Window_BattleStatus_addDamageSprite']['call'](this,_0x927f19,_0x428ebe);},Window_BattleStatus['prototype'][_0x5f47e6(0x386)]=function(_0x3ef305,_0x29e79b){const _0x1cb611=_0x5f47e6;if(!this['_damageContainer'])return;if(!_0x3ef305)return;if(!_0x29e79b)return;const _0x4cdfa4=this[_0x1cb611(0x332)](_0x29e79b[_0x1cb611(0x39a)]()),_0x3bac4e=this[_0x1cb611(0x24e)](_0x29e79b[_0x1cb611(0x39a)]());_0x4cdfa4['x']+=_0x4cdfa4[_0x1cb611(0x219)]/0x2+this[_0x1cb611(0x1eb)],_0x3ef305['x']=_0x3bac4e['x'],_0x3ef305['y']=_0x4cdfa4['y']+_0x4cdfa4[_0x1cb611(0x3ee)]/0x2,this[_0x1cb611(0x214)][_0x1cb611(0x208)](_0x3ef305);},VisuMZ['FrontviewBattleUI']['Game_Actor_battleUIOffsetY']=Game_Actor[_0x5f47e6(0x41c)][_0x5f47e6(0x30f)],Game_Actor[_0x5f47e6(0x41c)][_0x5f47e6(0x30f)]=function(){const _0x11af5a=_0x5f47e6;if(BattleManager[_0x11af5a(0x38c)]()&&!$gameSystem[_0x11af5a(0x1bd)]())return Graphics[_0x11af5a(0x3ee)]*0xa;return VisuMZ[_0x11af5a(0x2ca)][_0x11af5a(0x295)][_0x11af5a(0x2ad)](this);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x237)]=Sprite_Battler[_0x5f47e6(0x41c)]['isVisualHpGaugeDisplayed'],Sprite_Battler[_0x5f47e6(0x41c)][_0x5f47e6(0x35d)]=function(){const _0x2d9419=_0x5f47e6;if(this[_0x2d9419(0x445)]&&this['_battler'][_0x2d9419(0x2d6)]()&&BattleManager['isUsingFrontviewUiLayout']()&&!$gameSystem[_0x2d9419(0x1bd)]())return![];return VisuMZ['FrontviewBattleUI']['Sprite_Battler_isVisualHpGaugeDisplayed'][_0x2d9419(0x2ad)](this);},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x362)]=function(){const _0x3d027a=_0x5f47e6;if(!this[_0x3d027a(0x22d)]())return;this[_0x3d027a(0x271)]=[];let _0x27f552=$gameParty[_0x3d027a(0x2e7)]();const _0x24fd2f=this[_0x3d027a(0x3c4)]();while(_0x27f552-->0x0){const _0x103dbc=new Sprite_FvUiStatus(_0x27f552,_0x24fd2f,this);this['addChild'](_0x103dbc),this[_0x3d027a(0x271)][_0x3d027a(0x374)](_0x103dbc);}},Window_BattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x22d)]=function(){return this['constructor']===Window_BattleStatus;},Window_BattleStatus['prototype'][_0x5f47e6(0x3c4)]=function(){const _0x349c65=_0x5f47e6;return Window_BattleStatus['FRONTVIEW_BATTLE_UI'][_0x349c65(0x1b0)];},Window_BattleStatus['prototype'][_0x5f47e6(0x24e)]=function(_0x5ac50d){const _0x50ae8a=_0x5f47e6;if(!this['_frontviewUiSprites'])return null;return this[_0x50ae8a(0x271)][_0x50ae8a(0x251)](_0x28338c=>_0x28338c[_0x50ae8a(0x351)]===_0x5ac50d);},VisuMZ[_0x5f47e6(0x2ca)]['BattleManager_startTurn']=BattleManager[_0x5f47e6(0x3ce)],BattleManager[_0x5f47e6(0x3ce)]=function(){const _0x515d96=_0x5f47e6;VisuMZ[_0x515d96(0x2ca)][_0x515d96(0x419)]['call'](this);if(BattleManager[_0x515d96(0x38c)]()){const _0x2c0bfa=SceneManager[_0x515d96(0x355)][_0x515d96(0x2c7)];if(!_0x2c0bfa)return;_0x2c0bfa[_0x515d96(0x222)]();}},Window_BattleStatus['prototype'][_0x5f47e6(0x222)]=function(){const _0x13bf4a=_0x5f47e6;if(!this['_frontviewUiSprites'])return null;const _0x5c6e7c=this[_0x13bf4a(0x271)][_0x13bf4a(0x344)];for(let _0x7edca9=0x0;_0x7edca9<_0x5c6e7c;_0x7edca9++){this[_0x13bf4a(0x1b7)](_0x7edca9);}},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x1a1)]=BattleManager[_0x5f47e6(0x19c)],BattleManager[_0x5f47e6(0x19c)]=function(){const _0x21b3ba=_0x5f47e6;if(this[_0x21b3ba(0x38c)]()){const _0xfa135a=SceneManager[_0x21b3ba(0x355)]['_statusWindow'];_0xfa135a&&_0xfa135a[_0x21b3ba(0x222)]();}VisuMZ['FrontviewBattleUI'][_0x21b3ba(0x1a1)][_0x21b3ba(0x2ad)](this);};function Window_FrontviewUiMapBattleStatus(){const _0x44118f=_0x5f47e6;this[_0x44118f(0x352)](...arguments);}Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)]=Object[_0x5f47e6(0x329)](Window_BattleStatus[_0x5f47e6(0x41c)]),Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x258)]=Window_FrontviewUiMapBattleStatus,Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x378)]={'show':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x191)]['ShowUiOnMap']??!![],'compactWidth':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x191)]['CompactWidth']??!![],'initialPosition':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x191)]['InitialUiPosition']??_0x5f47e6(0x17e),'scale':VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x20b)][_0x5f47e6(0x191)]['Scale']??0x1,'moveCenter':![]},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x352)]=function(_0x5038ce){const _0x33a916=_0x5f47e6,_0x5b8f97=Window_FrontviewUiMapBattleStatus['FRONTVIEW_BATTLE_UI'][_0x33a916(0x328)];_0x5038ce[_0x33a916(0x219)]=Math[_0x33a916(0x21e)](_0x5038ce['width']/_0x5b8f97),Window_BattleStatus[_0x33a916(0x41c)]['initialize']['call'](this,_0x5038ce),this['initFrontviewUiSettings'](),this[_0x33a916(0x328)]['x']=this['scale']['y']=Window_FrontviewUiMapBattleStatus[_0x33a916(0x378)][_0x33a916(0x328)];},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3cb)]=function(){const _0x116327=_0x5f47e6;if(!this[_0x116327(0x3ef)]())return;this['openness']=0xff,this[_0x116327(0x31e)]={};},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3ef)]=function(){const _0x50bd2b=_0x5f47e6;return SceneManager[_0x50bd2b(0x38c)]();},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3c0)]=function(){const _0x240740=_0x5f47e6;if(this[_0x240740(0x3eb)])return this[_0x240740(0x3eb)];return this[_0x240740(0x3eb)]=VisuMZ[_0x240740(0x179)]['Settings'][_0x240740(0x403)]['Style'][_0x240740(0x1c7)]()[_0x240740(0x273)](),this[_0x240740(0x3eb)];},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x362)]=function(){const _0x28e4e3=_0x5f47e6;Window_BattleStatus['prototype'][_0x28e4e3(0x362)][_0x28e4e3(0x2ad)](this),this[_0x28e4e3(0x208)](this[_0x28e4e3(0x214)]);},Window_FrontviewUiMapBattleStatus['prototype'][_0x5f47e6(0x22d)]=function(){const _0x501a2c=_0x5f47e6;return this[_0x501a2c(0x3ef)]();},Window_FrontviewUiMapBattleStatus['prototype'][_0x5f47e6(0x2c8)]=function(_0x407340){},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)]['drawItemBackground']=function(_0x3d8718){},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3c4)]=function(){const _0xfa37d0=_0x5f47e6;return Window_FrontviewUiMapBattleStatus[_0xfa37d0(0x378)][_0xfa37d0(0x1b0)];},Window_FrontviewUiMapBattleStatus['prototype'][_0x5f47e6(0x319)]=function(){const _0x5ca9dc=_0x5f47e6;Window_BattleStatus[_0x5ca9dc(0x41c)][_0x5ca9dc(0x319)][_0x5ca9dc(0x2ad)](this),this[_0x5ca9dc(0x3c1)](),this['updateDamageOpacity']();},Window_FrontviewUiMapBattleStatus['prototype']['updateDamageSprites']=function(){const _0xd7c39b=_0x5f47e6;if(!SceneManager[_0xd7c39b(0x38c)]())return;if(!this[_0xd7c39b(0x31e)])return;const _0x1ef8cd=[];for(const _0x5ed81f in this[_0xd7c39b(0x31e)]){const _0x3e9f0a=this[_0xd7c39b(0x31e)][_0x5ed81f];if(_0x3e9f0a)for(const _0x2e1725 of _0x3e9f0a){if(!_0x2e1725)continue;!_0x2e1725[_0xd7c39b(0x327)]()&&(_0x1ef8cd['push'](_0x2e1725),_0x3e9f0a['remove'](_0x2e1725));}}while(_0x1ef8cd[_0xd7c39b(0x344)]>0x0){const _0x75f9f=_0x1ef8cd['pop']();this[_0xd7c39b(0x1d5)](_0x75f9f);}},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x30c)]=function(){const _0x5a5155=_0x5f47e6;this[_0x5a5155(0x214)]&&(this[_0x5a5155(0x214)][_0x5a5155(0x3ad)]=this[_0x5a5155(0x444)]());},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x444)]=function(){const _0x329128=_0x5f47e6;if(!$gameSystem[_0x329128(0x3af)]())return 0x0;if($gamePlayer[_0x329128(0x25c)]())return Sprite_FvUiStatus[_0x329128(0x284)];return 0xff;},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x25f)]=function(_0x37a2ee){const _0x3d48d3=_0x5f47e6;if(!SceneManager[_0x3d48d3(0x38c)]())return;if(!_0x37a2ee)return;const _0x4b6efe=SceneManager['_scene'];if(!_0x4b6efe)return;if(!_0x4b6efe['_frontviewUiBattleStatusWindow'])return;if(SceneManager[_0x3d48d3(0x424)]()&&!$gameSystem[_0x3d48d3(0x3af)]())return;_0x4b6efe[_0x3d48d3(0x1bf)][_0x3d48d3(0x18b)](_0x37a2ee),_0x37a2ee[_0x3d48d3(0x20a)](),_0x37a2ee[_0x3d48d3(0x41e)]();},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x3a8)]=function(_0x3f32bc,_0x1be179){const _0x786a6b=_0x5f47e6,_0xf528fc=VisuMZ['BattleCore'][_0x786a6b(0x20b)]['Damage'];this[_0x786a6b(0x31e)]=this[_0x786a6b(0x31e)]||{},this['_damageSprites'][_0x1be179[_0x786a6b(0x39a)]()]=this[_0x786a6b(0x31e)][_0x1be179[_0x786a6b(0x39a)]()]||[];const _0xfcd89=this['_damageSprites'][_0x1be179[_0x786a6b(0x39a)]()];if(_0xf528fc['NewPopupBottom'])for(const _0x3d4f21 of _0xfcd89){_0x3d4f21['x']+=_0xf528fc[_0x786a6b(0x226)],_0x3d4f21['y']+=_0xf528fc[_0x786a6b(0x215)];}else{const _0x2b4f39=_0xfcd89[_0xfcd89['length']-0x1];_0x2b4f39&&(_0x3f32bc['x']=_0x2b4f39['x']+_0xf528fc[_0x786a6b(0x226)],_0x3f32bc['y']=_0x2b4f39['y']+_0xf528fc[_0x786a6b(0x215)]);}_0xfcd89['push'](_0x3f32bc);},Window_FrontviewUiMapBattleStatus['prototype'][_0x5f47e6(0x18b)]=function(_0x275c3b){const _0x3d924f=_0x5f47e6;if(!this['canCreateFrontviewBattleUi']())return;if(!_0x275c3b)return;if(!$gameParty[_0x3d924f(0x272)]()[_0x3d924f(0x359)](_0x275c3b))return;const _0x5eeeb1=VisuMZ['BattleCore']['Settings'][_0x3d924f(0x2db)],_0x356e3e=new Sprite_Damage();_0x356e3e[_0x3d924f(0x1f6)]=_0x5eeeb1[_0x3d924f(0x2d9)],this[_0x3d924f(0x3a8)](_0x356e3e,_0x275c3b),_0x356e3e[_0x3d924f(0x265)](_0x275c3b),_0x356e3e['setupBattleCore'](_0x275c3b),this[_0x3d924f(0x386)](_0x356e3e,_0x275c3b);},VisuMZ['FrontviewBattleUI']['StartStatePopup']=function(_0x64c95e,_0xb60cc3,_0x19e4bf){const _0x6c172f=_0x5f47e6;if(!Imported[_0x6c172f(0x34d)])return;if(!SceneManager[_0x6c172f(0x38c)]())return;if(!_0x64c95e)return;if(_0xb60cc3===_0x64c95e[_0x6c172f(0x229)]())return;if(_0x19e4bf&&!_0x64c95e[_0x6c172f(0x439)](_0xb60cc3))return;if(!_0x19e4bf&&_0x64c95e[_0x6c172f(0x439)](_0xb60cc3))return;const _0x14e5ac=VisuMZ[_0x6c172f(0x2e2)]['Settings'][_0x6c172f(0x213)],_0x167a81=$dataStates[_0xb60cc3];if(!_0x167a81)return;_0x14e5ac[_0x6c172f(0x23d)]&&!_0x167a81[_0x6c172f(0x23f)][_0x6c172f(0x437)](/<HIDE STATE POPUP>/i)&&this[_0x6c172f(0x21f)](_0x64c95e,_0xb60cc3,_0x19e4bf);},VisuMZ[_0x5f47e6(0x2ca)]['setupVisualStateEffectsPopup']=function(_0x6e89a5,_0x9dc236,_0x2447ed){const _0x355d08=_0x5f47e6,_0x470ad6=VisuMZ[_0x355d08(0x2e2)][_0x355d08(0x20b)][_0x355d08(0x213)],_0x4accda=$dataStates[_0x9dc236];if(!_0x4accda)return;const _0x24cba5=_0x2447ed?'Add':_0x355d08(0x23e),_0x1ebaf5=_0x4accda['iconIndex'];if(_0x1ebaf5<=0x0)return;const _0x30304e=_0x470ad6[_0x355d08(0x23b)[_0x355d08(0x221)](_0x24cba5)];if(_0x30304e[_0x355d08(0x344)]<=0x0)return;let _0x52b2f0=_0x30304e[_0x355d08(0x221)](_0x4accda['name']);const _0x39927c={'textColor':_0x470ad6[_0x355d08(0x1cb)]||0x0,'flashColor':_0x470ad6['FlashColor']||[0x0,0x0,0x0,0x0],'flashDuration':_0x470ad6[_0x355d08(0x1b4)]||0x0};_0x470ad6['MatchTurnCountColor']&&(_0x39927c[_0x355d08(0x227)]=ColorManager[_0x355d08(0x203)](_0x4accda));VisuMZ[_0x355d08(0x2e2)]['customizeStatePopup'](_0x4accda,_0x39927c);const _0xc54f99=ImageManager['loadSystem'](_0x355d08(0x29b));_0xc54f99[_0x355d08(0x2eb)](this[_0x355d08(0x3d8)][_0x355d08(0x376)](this,_0x6e89a5,_0x1ebaf5,_0x52b2f0,_0x39927c));},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3d8)]=function(_0x38f683,_0x2bb482,_0x86e827,_0x45842c){const _0xa0ae04=_0x5f47e6,_0x59c666=SceneManager[_0xa0ae04(0x355)];if(!_0x59c666)return;if(!_0x59c666[_0xa0ae04(0x1bf)])return;_0x59c666[_0xa0ae04(0x1bf)][_0xa0ae04(0x421)](_0x38f683,_0x2bb482,_0x86e827,_0x45842c),_0x38f683[_0xa0ae04(0x20a)](),_0x38f683[_0xa0ae04(0x41e)]();},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x421)]=function(_0x489c3e,_0x30496d,_0x1c5ea6,_0x510cf7){const _0x27aa19=_0x5f47e6;if(!this['canCreateFrontviewBattleUi']())return;if(!_0x489c3e)return;if(!$gameParty[_0x27aa19(0x272)]()[_0x27aa19(0x359)](_0x489c3e))return;const _0x4fdc7e=VisuMZ[_0x27aa19(0x179)]['Settings'][_0x27aa19(0x2db)],_0x1f2792=new Sprite_Damage();_0x1f2792[_0x27aa19(0x1f6)]=_0x4fdc7e[_0x27aa19(0x2d9)],this['sortFvUiDamageSprites'](_0x1f2792,_0x489c3e),_0x1f2792[_0x27aa19(0x3d8)](_0x30496d,_0x1c5ea6,_0x510cf7),this[_0x27aa19(0x386)](_0x1f2792,_0x489c3e);},VisuMZ[_0x5f47e6(0x2ca)][_0x5f47e6(0x3cc)]=function(_0x1042b5,_0x5bb43e,_0x53ed95){const _0x1a1eda=_0x5f47e6;if(!SceneManager['isUsingFrontviewUiLayout']())return;if(!_0x1042b5)return;_0x53ed95=_0x53ed95||{},_0x53ed95[_0x1a1eda(0x227)]=_0x53ed95['textColor']||_0x1a1eda(0x347),_0x53ed95['flashColor']=_0x53ed95[_0x1a1eda(0x28a)]||[0x0,0x0,0x0,0x0],_0x53ed95[_0x1a1eda(0x2f0)]=_0x53ed95['flashDuration']||0x0;const _0x5214ec=SceneManager[_0x1a1eda(0x355)];if(!_0x5214ec)return;if(!_0x5214ec[_0x1a1eda(0x1bf)])return;_0x5214ec[_0x1a1eda(0x1bf)]['createFvUiTextPopup'](_0x1042b5,_0x5bb43e,_0x53ed95);},Window_FrontviewUiMapBattleStatus[_0x5f47e6(0x41c)][_0x5f47e6(0x35e)]=function(_0x660fd6,_0x1cf907,_0x29e981){const _0x1d93f3=_0x5f47e6;if(!this['canCreateFrontviewBattleUi']())return;if(!_0x660fd6)return;if(!$gameParty[_0x1d93f3(0x272)]()[_0x1d93f3(0x359)](_0x660fd6))return;const _0x263f4d=VisuMZ[_0x1d93f3(0x179)]['Settings']['Damage'],_0x3e754f=new Sprite_Damage();_0x3e754f[_0x1d93f3(0x1f6)]=_0x263f4d[_0x1d93f3(0x2d9)],this[_0x1d93f3(0x3a8)](_0x3e754f,_0x660fd6),_0x3e754f[_0x1d93f3(0x3cc)](_0x1cf907,_0x29e981),this[_0x1d93f3(0x386)](_0x3e754f,_0x660fd6);};