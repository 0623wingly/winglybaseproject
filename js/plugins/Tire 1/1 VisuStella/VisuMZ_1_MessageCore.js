//=============================================================================
// VisuStella MZ - Message Core
// VisuMZ_1_MessageCore.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_1_MessageCore = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageCore = VisuMZ.MessageCore || {};
VisuMZ.MessageCore.version = 1.51;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 1] [Version 1.51] [MessageCore]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Core_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Core plugin extends and builds upon the message functionality of
 * RPG Maker MZ and allows you, the game dev, to customize the workflow for
 * your game's message system.
 *
 * Features include all (but not limited to) the following:
 *
 * * Control over general message settings.
 * * Auto-Color key words and/or database entries.
 * * Increases the text codes available to perform newer functions/effects.
 * * Ability for you to implement custom Text Code actions.
 * * Ability for you to implement custom Text code string replacements.
 * * Invoke a macro system to speed up the dev process.
 * * Add a Text Speed option to the Options menu.
 * * Add the ever so useful Word Wrap to your message system.
 * * Extend the choice selection process to your liking.
 * * The ability to enable/disable as well as show/hide certain choices.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 * 
 * Dim Background Extension
 * 
 * Before, when using the Dim Background as a part of a Show Text event, its
 * size is only the same as the message window's width itself. This looked
 * really ugly because it had hard edges cutting off while gradients are seen
 * elsewhere. To make it look better, we extended the dimmed background to span
 * the width of the screen instead.
 * 
 * ---
 * 
 * Extended Messages
 * 
 * If you decide to expand the size of the message window to allow for more
 * rows to be displayed, you can type in the data for them by chaining together
 * Show Message events. They will take data from each other and display them in
 * the same message window as long as there are enough rows.
 * 
 * ---
 *
 * Extended Choice Lists
 * 
 * Choice lists can be extended by just chaining one Choice List event after
 * the other in succession along the same indentation. They do not extend if
 * there is any event other than a Choice List option between them on the same
 * indentation level.
 *
 * ---
 *
 * ============================================================================
 * Text Language Information
 * ============================================================================
 *
 * As of Message Core version 1.46, Text Language has been added. 
 * 
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 *
 * ---
 * 
 * === How to Enable Switching ===
 * 
 * Text Language is NOT enabled by default. Here's what you have to do:
 * 
 * #1. Open up the Message Core's Plugin Parameters
 * #2. Plugin Parameters > Text Language Settings > Enable Switching?
 * #3. Change the "Enable Switching?" parameter setting to "true".
 * #4. Adjust any other settings as needed.
 * #5. Save the Plugin Parameter changes.
 * #6. Save your game.
 * 
 * Now, it's time to get the CSV file that will contain all of the text used to
 * translate your game's script.
 * 
 * #1. Play test your game. Make sure Play test mode is NOT disabled.
 * #2. A popup will appear asking to create a language CSV file.
 * #3. Click "OK" and let the plugin do its thing.
 * #4. The project's /data/ folder will appear with Language.csv made.
 * #5. The plugin will then ask you to restart your game.
 * 
 * '''IMPORTANT!''' The separator used for the CSV file must be a semicolon (;)
 * and not a comma (,) as to reduce the amount of punctuation conflicts. Keep
 * this in mind as most CSV editors will default to comma (,) instead of the
 * semicolon (;) for their separator.
 * 
 * ---
 * 
 * === How to Edit the Language CSV ===
 * 
 * The Language CSV is structured as a normal CSV file would be, which also
 * means it can be modified in programs like Microsoft Excel or Google Sheets.
 * We recommend using either of those programs to modify the text.
 * 
 * We do not recommend modifying the CSV file in programs like notepad directly
 * due to the way certain things like commas (,) are handled and how easy it is
 * to be error-prone.
 * 
 * The table will appear something like this at first:
 * 
 *     Key        English    Chinese    Japanese     Korean
 *     Greeting   Hello      你好       こんにちは    안녕하세요
 *     Farewell   Good-bye   再见       さようなら    안녕히
 *     Wow        Wow        哇         ワオ          와우
 * 
 * The "Key" column refers to the reference key used to determine which lines
 * will be inserted into the text. The columns with the languages will utilize
 * the respective phrases for that language.
 * 
 * You can remove columns containing languages that you aren't planning to
 * translate for your game.
 * 
 * ---
 * 
 * === Things to Keep in Mind ===
 * 
 * When adding text to the CSV file via the spreadsheet editor (Excel or Google
 * Sheets), there's a few things to keep in mind.
 * 
 * ---
 * 
 * ==== Line Breaks ====
 * 
 * When you want to insert line breaks into the translated phrases, use the
 * <br> text code. This is best used for text that is to be transferred into
 * the message window or help window.
 * 
 * ==== Text Codes ====
 * 
 * Text codes like \C[2] can be inserted normally. However, they only work in
 * windows that support text codes, such as the message window or help window.
 * Otherwise, the text codes will not transfer over properly.
 * 
 * ==== Semicolons ====
 * 
 * Due to the nature of the CSV file, we used the semicolon (;) as the
 * separator. As such, semicolons should not be used in the text entries.
 * Though some sentences will work with the semicolon, not all of them will. If
 * you do want to use a semicolon, use the text code <semicolon> instead.
 * 
 *   Example:
 * 
 *   "The pancakes were delicious<semicolon> they were fluffy and sweet."
 * 
 * Other variations of the semicolon text code are <semi> and <semi-colon>.
 * The <semicolon> text code and variants only work with the Language CSV and
 * are ignored otherwise when typed in a regular message box entry.
 * 
 * ---
 * 
 * ==== Macros and Language Switches ====
 * 
 * For those using both text macros and text language switches, macros will be
 * converted to text before language switches as it allows for better text
 * transitions that way.
 * 
 * ---
 * 
 * === How to Use the Reference Keys ===
 * 
 * Remember the "Key" column and the reference keys? Those are used to
 * determine which lines will be inserted into the text for the message window
 * and just about any other window. However, there's a specific way these keys
 * must be used in order for them to work.
 * 
 * The "text code" format works like this. Use any of the following:
 * 
 *   \tl{keyName}
 *   \translate{keyName}
 *   \loc{keyName}
 *   \locale{keyName}
 *   \localize{keyName}
 * 
 * or for those coming from different translation plugins but want to switch
 * over to the VisuStella MZ Message Core's translation system:
 * 
 *   ${keyName}
 * 
 * For example, to use one of the default keys made with the Language CSV:
 * 
 *   \tl{Greeting}
 * 
 * This will yield "Hello" in English, "你好" in Chinese, "こんにちは" in
 * Japanese, and "안녕하세요" in Korean.
 * 
 * Key names are not case sensitive and any trailing spaces will be removed
 * from them in order to make sure the CSV table is stable to reference any
 * translated text from.
 * 
 * You can insert these language "text codes" into item names, skill names,
 * etc. as well as system entries like for Attack, Defense, etc.
 * 
 * ---
 * 
 * === Naming Weapon Types, Armor Types, Equip Types, Item Categories ===
 * 
 * You might have noticed that if you've decided to use \tl{keyName} for weapon
 * or other database types, other parts of the game will error out. Don't
 * worry, for these, you don't have to change the currently used database name.
 * Go straight to the CSV and insert in a new key for that particular database
 * name. For example, the equip type "Accessory" will use "Accessory" as the
 * automatic key to look for a translated phrase. If there isn't any in the CSV
 * file, then the default database text entry will be used.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. Some of
 * these are original text codes provided by RPG Maker MZ, while others are
 * new text codes added through this plugin. You may even add your own text
 * codes through the plugin parameters.
 *
 * === RPG Maker MZ Text Codes ===
 *
 * The following are text codes that come with RPG Maker MZ. These text codes
 * cannot be edited through the Plugin Parameters.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \V[x]                Replaced by the value of variable 'x'.
 * \N[x]                Replaced by the name of actor 'x'.
 * \P[x]                Replaced by the name of party member 'x'.
 * \C[x]                Draw the subsequent text with window skin color 'x'.
 * \I[x]                Draw icon 'x'.
 *
 * \PX[x]               Moves text x position to 'x'.
 * \PY[x]               Moves text y position to 'y'.
 *
 * \G                   Replaced by the currency unit.
 *
 * \{                   Increase the text font size by one step.
 * \}                   Decrease the text font size by one step.
 * \FS[x]               Changes the text font size to 'x'.
 *
 * \\                   Replaced by the backslash character.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \$                   Opens the gold window.
 * \.                   Waits a 1/4 second.
 * \|                   Waits a full second.
 * \!                   Waits for button input.
 * \>                   Display remaining text on same line all at once.
 * \<                   Cancel the effect that displays text all at once.
 * \^                   Do not wait for input after displaying text to move on.
 *
 * ---
 *
 * === Message Core Hard-Coded Text Codes ===
 *
 * The following text codes are hard-coded into VisuStella MZ Message Core's
 * code. These text codes cannot be edited through the Plugin Parameters.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <b>                  Makes subsequent text bold.
 * </b>                 Removes bold from subsequent text.
 * <i>                  Makes subsequent text italic.
 * </i>                 Removes italic from subsequent text.
 * 
 * <left>               Makes subsequent text left-aligned. *Note1*
 * </left>              Removes left-alignment for subsequent text.
 * <center>             Makes subsequent text center-aligned. *Note1*
 * </center>            Removes center-alignment for subsequent text.
 * <right>              Makes subsequent text right-aligned. *Note1*
 * </right>             Removes right-alignment for subsequent text.
 *
 * Note1: Use at line-start. Does not work with Word Wrap.
 *
 * <ColorLock>          Text codes can't change text color for subsequent text.
 * </ColorLock>         Removes Color Lock property.
 *
 * <WordWrap>           Enables Word Wrap for this window. *Note2*
 * </WordWrap>          Disables Word Wrap for this window. *Note2*
 * <br>                 Adds a line break. Requires Word Wrap enabled.
 * <line break>         Adds a line break. Requires Word Wrap enabled.
 *
 * Note2: Some windows cannot use Word Wrap such as the Choice Window.
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 *
 * \picture<x>          Draws picture x (filename) at current text position.
 * \CenterPicture<x>    Draws picture x (filename) centered at the window.
 *
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * <Caps>               Makes all text after this capitalized.
 *                      Turns off other auto-text case modes.
 *                      ie: "hello world" becomes "HELLO WORLD"
 * </Caps>              Turns off auto text-casing effects.
 * 
 * <Upper>              Makes the first letter of any word after a space to be
 *                      capitalized. Other letters are left alone.
 *                      Turns off other auto-text case modes.
 *                      ie. "old mcDonald" becomes "Old McDonald"
 * </Upper>             Turns off auto text-casing effects.
 * 
 * <Lower>              Makes all text after this lowercase.
 *                      Turns off other auto-text case modes.
 *                      ie: "THE QUICK BROWN FOX" becomes "the quick brown fox"
 * </Lower>             Turns off auto text-casing effects.
 * 
 * <Alt>                Makes all text after this alternate between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Hello" becomes "HeLlO"
 * </Alt>               Turns off auto text-casing effects.
 * 
 * <Chaos>              Makes all text after this randomize between uppercase
 *                      and lowercase. Turns off other auto-text case modes.
 *                      ie: "Wassup" becomes "waSsUP" or "WasSuP"
 * </Chaos>             Turns off auto text-casing effects.
 * 
 * **Clarity:** In case you're wondering, the text codes </Caps>, </Upper>,
 * </Lower>, </Alt>, and </Chaos> all do the same thing and can be used
 * interchangeably with each other. For example, you can do this:
 * <Caps>hello world</Lower> and it would still accomplish the same effect, but
 * you won't do that because you're not a monster of a developer.
 * 
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \CommonEvent[x]      Runs common event x when text code is reached.
 * \Wait[x]             Makes the message wait x frames before continuing.
 * 
 * <Next Page>          Ends the current message page at this line. This is
 *                      used for messages when rows are at 5 or above and the
 *                      message lines don't match the amount. This is used to
 *                      prevent grabbing message windows from following message
 *                      events. Any lines following <Next Page> in the same
 *                      message event will be ignored.
 * 
 * <Auto>               Resizes message window dimensions to fit text. *Note3*
 * <Auto Width>         Resizes message window width to fit text. *Note3*
 * <Auto Height>        Resizes message window height to fit text. *Note3*
 * 
 * <Auto Actor: x>      Resizes message window and positions it over actor x
 *                      sprite's head. *Note3*
 * <Auto Party: x>      Resizes message window and positions it over party
 *                      member x sprite's head. *Note3*
 * <Auto Player>        Map-Only. Resizes message window and positions it over
 *                      the player sprite's head. *Note3*
 * <Auto Event: x>      Map-Only. Resizes message window and positions it over
 *                      event x sprite's head. *Note3*
 * <Auto Enemy: x>      Battle-Only. Resizes message window and positions it
 *                      over enemy x sprite's head. *Note3*
 *
 * Note3: Upon using these text codes, the message window's settings will be
 * reset for the upcoming message. These effects do not work with Word Wrap.
 *
 * ---
 *
 * ----------------------------   ---------------------------------------------
 * Text Code                      Effect (Battle Only)
 * ----------------------------   ---------------------------------------------
 * <Current Battle Target>        Replaces text code with the current target of
 *                                an action in battle.
 * <Current Battle User>          Replaces text code with the currently active
 *                                user in battle.
 * <Current Battle Action>        Replaces text code with the current battle
 *                                action's name with an icon in front.
 * <Current Battle Action Name>   Replaces text code with the current battle
 *                                action's name without an icon.
 * 
 * If there is no battle, no target, no user, or no action, then the text code
 * will just be replaced with no text.
 * 
 * These text codes are NOT recommended to be used inside of Help Descriptions.
 * They are best used with "Show Text" event commands.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Effect (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * <Show>                         Choice is always shown.
 * <Show Switch: x>               Choice shown if switch x is ON.
 * <Show Switches: x,x,x>         Choice shown if the x switches are all ON.
 * <Show All Switches: x,x,x>     Choice shown if the x switches are all ON.
 * <Show Any Switches: x,x,x>     Choice shown if any of x switches are ON.
 *
 * <Hide>                         Choice is always hidden.
 * <Hide Switch: x>               Choice hidden if switch x is ON.
 * <Hide Switches: x,x,x>         Choice hidden if the x switches are all ON.
 * <Hide All Switches: x,x,x>     Choice hidden if the x switches are all ON.
 * <Hide Any Switches: x,x,x>     Choice hidden if any of x switches are ON.
 *
 * <Enable>                       Choice is always enabled.
 * <Enable Switch: x>             Choice enabled if switch x is ON.
 * <Enable Switches: x,x,x>       Choice enabled if the x switches are all ON.
 * <Enable All Switches: x,x,x>   Choice enabled if the x switches are all ON.
 * <Enable Any Switches: x,x,x>   Choice enabled if any of x switches are ON.
 *
 * <Disable>                      Choice is always disabled.
 * <Disable Switch: x>            Choice disabled if switch x is ON.
 * <Disable Switches: x,x,x>      Choice disabled if the x switches are all ON.
 * <Disable All Switches: x,x,x>  Choice disabled if the x switches are all ON.
 * <Disable Any Switches: x,x,x>  Choice disabled if any of x switches are ON.
 * 
 * <Choice Width: x>              Sets the minimum text area width to x.
 *                                Applies to whole choice window.
 * <Choice Indent: x>             Sets the indent to x value. Applies to
 *                                current choice selection only.
 * 
 * <BgColor: x>                   Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' text color. This
 *                                will be combined with a fading
 * <BgColor: x,y>                 Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to 'x' to 'y' gradient
 *                                text color.
 * <BgColor: #rrggbb>             Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' color using
 *                                hex color values.
 * <BgColor: #rrggbb, #rrggbb>    Requires VisuMZ_0_CoreEngine! Sets background
 *                                color of this choice to '#rrggbb' gradient
 *                                using hex color values.
 * 
 * <Help> text </Help>            Makes a help window appear and have it show
 *                                'text' in its contents. The help window will
 *                                disappear if no text is displayed.
 * 
 * <Shuffle>                      Shuffles the order of all choices. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 * <Shuffle: x>                   Shuffles the order of all choices and only
 *                                x number of them will appear. Any cancel
 *                                shortcuts other than "Branch" will be undone.
 *                                Hidden choices do not count towards x number.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Background Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <BgImg: filename>              Creates a background image from img/pictures/
 *                                stretched across the choice rectangle.
 * <BgImg LowerLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <BgImg LowerCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <BgImg LowerRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <BgImg MidLeft: filename>      Creates a background image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <BgImg Center: filename>       Creates a background image from img/pictures/
 *                                scaled to the center of choice rect.
 * <BgImg MidRight: filename>     Creates a background image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <BgImg UpperLeft: filename>    Creates a background image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <BgImg UpperCenter: filename>  Creates a background image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <BgImg UpperRight: filename>   Creates a background image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <BgImg: filename> text code variants, even if the background
 * image is smaller than the choice contents, it will overscale to match its
 * choice rectangle dimensions.
 * 
 * *Note:* Using a background image will clear the dimmed background rectangle
 * that is normally behind each selectable choice.
 * 
 * *Note:* Each choice can only have one background image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the background will appear behind the select cursor.
 *
 * ---
 *
 * -----------------------------  ---------------------------------------------
 * Text Code                      Foreground Effects (Choice Window Only)
 * -----------------------------  ---------------------------------------------
 * 
 * <FgImg: filename>              Creates a foreground image from img/pictures/
 *                                stretched across the choice rectangle.
 * <FgImg LowerLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the lower left of choice rect.
 * <FgImg LowerCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the lower center of choice rect.
 * <FgImg LowerRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the lower right of choice rect.
 * <FgImg MidLeft: filename>      Creates a foreground image from img/pictures/
 *                                scaled to the middle left of choice rect.
 * <FgImg Center: filename>       Creates a foreground image from img/pictures/
 *                                scaled to the center of choice rect.
 * <FgImg MidRight: filename>     Creates a foreground image from img/pictures/
 *                                scaled to the middle right of choice rect.
 * <FgImg UpperLeft: filename>    Creates a foreground image from img/pictures/
 *                                scaled to the upper left of choice rect.
 * <FgImg UpperCenter: filename>  Creates a foreground image from img/pictures/
 *                                scaled to the upper center of choice rect.
 * <FgImg UpperRight: filename>   Creates a foreground image from img/pictures/
 *                                scaled to the upper right of choice rect.
 * 
 * *Note:* For the <FgImg: filename> text code variants, unlike the background
 * variant, the foreground image will not overscale past its original size.
 * Instead, it will maintain its original size or be smaller, so long as it can
 * be scaled to exist within the choice rectangle unless it is intended to be
 * stretched by using the <FgImg: filename> variant.
 * 
 * *Note:* Text is then written on top of the foreground image.
 * 
 * *Note:* Each choice can only have one foreground image but can use a
 * combination of one background and one foreground image.
 * 
 * *Note:* Images in the foreground will appear behind the select cursor.
 *
 * ---
 *
 * -----------------  ---------------------------------------------------------
 * Text Code          Effect (Name Window Only)
 * -----------------  ---------------------------------------------------------
 * <Left>             Positions the name box window to the left.
 * <Center>           Positions the name box window to the center.
 * <Right>            Positions the name box window to the right.
 * <Position: x>      Replace 'x' with a number from 0 to 10. This positions
 *                    the name box window on the screen relative to the
 *                    position of the value 'x' represents.
 * \NormalBG          Changes background type of window to normal type.
 * \DimBG             Changes background type of window to dim type.
 * \TransparentBG     Changes background type of window to transparent type.
 *
 * ---
 * 
 * -------------------------------   ------------------------------------------
 * Text Code                         Effect (Message Window Only)
 * -------------------------------   ------------------------------------------
 * 
 * <Position: x, y, width, height>   Forces the message window to exact listed
 *                                   coordinates and dimensions. Replace each
 *                                   of the arguments with numbers. *Note*
 * 
 * <Coordinates: x, y>               Forces the message window to the exact
 *                                   listed coordinates. Replace each of the
 *                                   arguments with numbers. *Note*
 * 
 * <Dimensions: width, height>       Forces the message window size to the
 *                                   exact listed dimensions. Replace each of
 *                                   the arguments with numbers. *Note*
 * 
 * <Offset: +x, +y>                  Quickly adjust the message window offset
 * <Offset: -x, -y>                  values to the x and y amounts. The values
 * <Offset: +x, -y>                  will replace the previous offset settings
 * <Offset: -x, +y>                  if there were any.
 * 
 * *NOTE* These text codes do not work with Word Wrap.
 * 
 * ---
 * 
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Requires VisuMZ_0_CoreEngine)
 * ------------------   -------------------------------------------------------
 * <Up Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Left Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Right Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Down Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * <Ok Button>          Display's VisuMZ_0_CoreEngine's button assist text.
 * <Cancel Button>      Display's VisuMZ_0_CoreEngine's button assist text.
 * <Shift Button>       Display's VisuMZ_0_CoreEngine's button assist text.
 * <Menu Button>        Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Up Button>     Display's VisuMZ_0_CoreEngine's button assist text.
 * <Page Down Button>   Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * ---
 * 
 * === Random Text Pool ===
 * 
 * <RNG> text1 | text2 | text3 </RNG>
 * 
 * Using the above text code format in a Show Message entry, you can get a
 * random result out of the various inserted texts. Use "|" (without quotes) as
 * a separator between text entries. You can have unlimited entries. The result
 * will have any excess white space trimmed.
 * 
 * This text code cannot be inserted into a macro and parsed properly.
 * 
 * ---
 *
 * === Message Core Customizable Text Codes ===
 *
 * The following text codes can be altered through the Message Core's various
 * Plugin Parameters to adjust replacements and actions.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Global)
 * ------------------   -------------------------------------------------------
 * \Class[x]            Draws class x's icon (if have) and name.
 * \ClassName[x]        Draws class x's name only.
 *
 * \Skill[x]            Draws skill x's icon (if have) and name.
 * \SkillName[x]        Draws skill x's name only.
 *
 * \Item[x]             Draws item x's icon (if have) and name.
 * \ItemName[x]         Draws item x's name only.
 * \ItemQuantity[x]     Inserts the number of item x's owned by the party.
 *
 * \Weapon[x]           Draws weapon x's icon (if have) and name.
 * \WeaponName[x]       Draws weapon x's name only.
 * \WeaponQuantity[x]   Inserts the number of weapon x's owned by the party.
 *
 * \Armor[x]            Draws armor x's icon (if have) and name.
 * \ArmorName[x]        Draws armor x's name only.
 * \ArmorQuantity[x]    Inserts the number of armor x's owned by the party.
 *
 * \LastGainObj         Draws the icon + name of the last party-gained object.
 * \LastGainObjName     Draws the name of the last party-gained object.
 * \LastGainObjQuantity Inserts the quantity of the last party-gained object.
 *
 * \State[x]            Draws state x's icon (if have) and name.
 * \StateName[x]        Draws state x's name only.
 *
 * \Enemy[x]            Draws enemy x's icon (if have) and name.
 * \EnemyName[x]        Draws enemy x's name only.
 *
 * \Troop[x]            Draws troop x's icon (if have) and name.
 * \TroopName[x]        Draws troop x's name only.
 *
 * \TroopMember[x]      Draws troop member x's icon (if have) and name. *Note1*
 * \TroopNameMember[x]  Draws troop member x's name only. *Note1*
 * 
 * Note1: Only works in battle.
 *
 * \NormalBG            Changes background type of window to normal type.
 * \DimBG               Changes background type of window to dim type.
 * \TransparentBG       Changes background type of window to transparent type.
 *
 * \FontChange<x>       Changes font face to x font name.
 * \ResetFont           Resets font settings.
 *
 * \ResetColor          Resets color settings.
 * \HexColor<x>         Changes text color to x hex color (ie. #123abc).
 * \OutlineColor[x]     Changes outline color to text color x.
 * \OutlineHexColor<x>  Changes outline color to x hex color (ie. #123abc).
 * \OutlineWidth[x]     Changes outline width to x thickness.
 * 
 * \WindowMoveTo<?>     Moves window to exact coordinates. *Note2*
 * \WindowMoveBy<?>     Moves window by relative values. *Note2*
 * \WindowReset         Resets window position to original position.
 *
 * Note2: Replace '?' with the following format:
 *   targetX, targetY, targetWidth, targetHeight, duration, easingType
 *   Only targetX and targetY are required arguments. These will only alter the
 *   window dimensions when the text has arrived at that point. They will not
 *   alter the window preemptively. This is not used as a window positioner.
 *   Use the <Position: x, y, width, height> text code for that.
 *
 * ---
 *
 * ------------------   -------------------------------------------------------
 * Text Code            Effect (Message Window Only)
 * ------------------   -------------------------------------------------------
 * \ActorFace[x]        Inserts actor x's face into the Message Window.
 * \PartyFace[x]        Inserts party member x's face into the Message Window.
 * \ChangeFace<x,y>     Changes message face to x filename, y index.
 * \FaceIndex[x]        Changes message face index to x.
 *
 * \TextDelay[x]        Sets delay in frames between characters to x frames.
 * 
 * Note: These text codes only work with the Message Window. Keep in mind that
 *   even if some windows might look like the Message Window, it may not
 *   necessarily be one.
 * 
 * ---
 * 
 * As these text codes can be added, removed, and/or altered, their functions
 * may or may not be the same depending on how you've altered them. VisuStella
 * is not responsible for any errors caused by changes made to pre-made text
 * codes nor any new text codes they did not make.
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
 * === Message Plugin Commands ===
 * 
 * ---
 *
 * Message: Properties
 *   Change the various properties of the Message Window.
 *
 *   Rows:
 *   - Change the number of Message Window rows.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Width: 
 *   - Change the Message Window width in pixels.
 *   - Leave at 0 to keep it unchanged.
 *
 *   Word Wrap:
 *   - Enable or disable Word Wrap for the Message Window?
 *
 * ---
 * 
 * Message: X/Y Offsets
 * - Change the X and Y Offsets of the Message Window.
 * - The offset value(s) will be saved and stored.
 * 
 *   Offset X:
 *   - Offset Message Window horizontally.
 *   - Negative: Left; Positive: Right
 *   - Message Window coordinates are still restricted via clamping.
 * 
 *   Offset Y:
 *   - Offset Message Window vertically.
 *   - Negative: Up; Positive: Down
 *   - Message Window coordinates are still restricted via clamping.
 * 
 * ---
 * 
 * === Choice Plugin Commands ===
 * 
 * ---
 * 
 * Choices: Distance
 * - Change the distance from choice window to the message window.
 * 
 *   Distance:
 *   - Change distance between the choice and message windows.
 *   - Default distance is 0.
 *   - Use negative to center align with remaining space.
 * 
 * ---
 *
 * Choices: Properties
 * - Change the properties found in the Show Choices event command.
 *
 *   Line Height:
 *   - Change the line height for the show choices.
 *   - Leave at 0 to keep this unchanged.
 * 
 *   Minimum Choice Width:
 *   - What is the minimum width size for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of choice rows to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Max Columns:
 *   - Maximum number of choice columns to be displayed.
 *   - Leave at 0 to keep this unchanged.
 *
 *   Text Alignment:
 *   - Text alignment for Show Choice window.
 *
 * ---
 * 
 * === Select Plugin Commands ===
 * 
 * ---
 * 
 * Select: Weapon
 * - Opens the Event Select Item Window to let the player pick a weapon to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected weapon.
 *   - It will result in 0 otherwise.
 * 
 *   Weapon Type ID:
 *   - Reduce all the weapons to a specific weapon type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Armor
 * - Opens the Event Select Item Window to let the player pick an armor to
 *   choose from.
 * - Can be opened while the Message Window is open.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected armor.
 *   - It will result in 0 otherwise.
 * 
 *   Armor Type ID:
 *   - Reduce all the armors to a specific armor type.
 *   - Leave at 0 to not use filters.
 * 
 *   Equip Type ID:
 *   - Reduce all the armors to a specific equip type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * Select: Skill
 * - Opens the Event Select Item Window to let the player pick a skill to
 *   choose from.
 * - Requires VisuMZ_1_SkillsStatesCore!
 * - Can be opened while the Message Window is open.
 * - Skills will not be listed if they are hidden by the actor.
 * - Skills will not be listed if the actor lacks access to their Skill Type.
 * 
 *   Variable ID:
 *   - This variable will be used to record the ID of the selected skill.
 *   - It will result in 0 otherwise.
 * 
 *   Actor ID:
 *   - Select an actor to get the skill list from.
 *   - Use 0 to select from the party leader.
 * 
 *   Skill Type ID:
 *   - Reduce all the skills to a specific skill type.
 *   - Leave at 0 to not use filters.
 * 
 * ---
 * 
 * === Picture Plugin Commands ===
 * 
 * ---
 * 
 * Picture: Change Text
 * - Change text for target picture(s) to show.
 * - You may use text codes.
 * - Text will adapt to picture's properties.
 * - Settings will be erased if picture is erased.
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to set text to.
 * 
 *   Padding:
 *   - How much padding from the sides should there be?
 * 
 *   Text:
 * 
 *     Upper Left:
 *     Upper Center:
 *     Upper Right:
 *     Middle Left:
 *     Middle Center:
 *     Middle Right:
 *     Lower Left:
 *     Lower Center:
 *     Lower Right:
 *     - The text that's aligned to this picture's side.
 *     - You may use text codes.
 * 
 * ---
 * 
 * Picture: Erase Text
 * - Erase all text for target picture(s).
 * 
 *   Picture ID(s):
 *   - The ID(s) of the picture(s) to erase text for.
 * 
 * ---
 * 
 * Picture: Refresh Text
 * - Refreshes the text used for all on-screen pictures.
 * - To be used if any dynamic text codes are updated like \n[x].
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings involving the message system. These settings range from
 * adjust how the Message Window looks to more intricate settings like how
 * some of the default text codes work.
 *
 * ---
 *
 * Message Window
 *
 *   Default Rows:
 *   - Default number of rows to display for the Message Window.
 *
 *   Default Width:
 *   - Default Message Window width in pixels.
 *
 *   Fast Forward Key:
 *   - This is the key used for fast forwarding messages.
 *   - WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 *
 *   Text Delay:
 *   - How many frames to wait between characters drawn?
 *   - Use 0 for instant.
 * 
 *   Offset X:
 *   Offset Y:
 *   - Offset Message Window horizontally or vertically.
 *   - Horizontal: Left; Positive: Right
 *   - Veritcal: Negative: Up; Positive: Down
 * 
 *   Stretch Dimmed BG:
 *   - Stretch dimmed window background to fit the whole screen.
 * 
 *   Default Outline Width:
 *   - Changes the default outline width to this many pixels thick.
 * 
 *   Each Message Start:
 *   Each Message End:
 *   - This is text that is added at the start/end of each message.
 *   - You may use text codes.
 *   - Keep in mind that if a message extends to a different page (due to word
 *     wrap, excess lines, etc), that does not mean the starting text will
 *     be added to where the next page begins or the ending text will be added
 *     where the previous page ends.
 *   - Can be used for things like adding "<center>" to the start of each 
 *     message without having to type it every time.
 *
 * ---
 *
 * Name Box Window
 *
 *   Default Color:
 *   - Default color for the Name Box Window's text.
 *
 *   Offset X:
 *   - How much to offset the name box window X by
 *     (as long as it doesn't go offscreen).
 *
 *   Offset Y:
 *   - How much to offset the name box window Y by
 *     (as long as it doesn't go offscreen).
 *
 * ---
 *
 * Choice List Window
 *
 *   Line Height:
 *   - What is the default line height for Show Choices?
 * 
 *   Minimum Choice Width:
 *   - What is the minimum choice width for each choice?
 *   - 96 is the default width.
 *
 *   Max Rows:
 *   - Maximum number of rows to visibly display?
 *
 *   Max Columns:
 *   - Maximum number of columns to visibly display?
 *
 *   Text Alignment:
 *   - Default alignment for Show Choice window.
 *
 * ---
 *
 * Default Text Codes
 *
 *   Relative \PX \PY:
 *   - Make \PX[x] and \PY[x] adjust relative starting position than
 *     exact coordinates.
 *
 *   \{ Maximum:
 *   - Determine the maximum size that \{ can reach.
 *
 *   \} Minimum:
 *   - Determine the minimum size that \} can reach.
 *
 *   \{ Change \}
 *   - How much does \{ and \} change font size by?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Auto-Color Settings
 * ============================================================================
 *
 * For certain windows such as the Message Window, Help Window, and Choice
 * Window, Auto-Color is enabled to automatically highlight and color certain
 * database entries, keywords, and just about anything you, the game dev, wants
 * to be automatically colored. This is done to avoid typing out \C[6]Jack\C[0]
 * every time Jack's name is written out as it will be automatically colored in
 * those specific windows.
 *
 * The Plugin Parameters will give you full reign over which database entries
 * and keywords you want to be automatically colored as long as they follow a
 * few rules:
 * 
 * -----------------
 * Auto-Color Rules:
 * -----------------
 *
 * 1. Database names and keywords are case sensitive.
 *    This means if "Potion" is a marked keyword, typing out "potion" will not
 *    prompt the auto-color to highlight "potion". You must add the lowercase
 *    version of the word into the keyword list if you want it to count.
 *
 * 2. Database names and keywords are exact size (for Roman languages)
 *    This means if "Potion" is a marked keyword, typing out "potions" will not
 *    prompt the auto-color to highlight "potions". You must type out all of
 *    the variations of the words you want affected into the keyword list to
 *    prompt the auto-color highlight.
 * 
 *    This does not apply to Japanese, Korean, or Chinese languages.
 *
 * 3. Possessive cases and other language symbols aren't counted.
 *    Symbols such as periods, commas, quotes, parentheses, and similar symbols
 *    do no count towards Rule 2. This means if "Potion" is a marked keyword,
 *    the typing out "(Potion)" will still highlight the "Potion" part of the
 *    word according to the auto-color.
 * 
 * 4. Names with special characters like !, ?, [, ], etc. will be ignored.
 *    These cause conflicts with how auto-colors are detected.
 *
 * ---
 *
 * Database Highlighting
 *
 *   Actors:
 *   Classes:
 *   Skills:
 *   Items:
 *   Weapons:
 *   Armors:
 *   Enemies:
 *   States:
 *   - Any usage of a the selected database entry's name is auto-colored with
 *     the text code number.
 *   - Use 0 to not auto-color.
 *
 * ---
 *
 * Word Highlighting
 *
 *   \C[x]: Color
 *   - These are lists of all the words that will be automatically colored with
 *     the x text color.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Custom Font Manager
 * ============================================================================
 *
 * Custom fonts that aren't the message or number fonts cannot be used without
 * registration. If you try to use custom fonts in RPG Maker MZ without
 * registering their font family first, you will find out that they will not
 * work. These plugin parameters allow you to register your game's custom fonts
 * here.
 * 
 * ---
 * 
 * Settings:
 * 
 *   Font Family:
 *   - This will be what's used by RPG Maker MZ and plugins to reference this
 *     specific font.
 *   - NO filename extensions!
 * 
 *   Filename:
 *   - What is the filename of the custom font you would like to use?
 *   - Located inside the project's "fonts" folder.
 * 
 * ---
 * 
 * Examples:
 * 
 *   Font Family: WildWords
 *   Filename: WildWords-Regular.ttf
 * 
 * How you would use this in other plugins as a preface to the font face or
 * font family would be to use "WildWords" as the font face/family name. Then
 * RPG Maker MZ will use its own innate FontManager to refer that to the
 * "WildWords-Regular.ttf" file found in the game's "fonts" folder.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Actions
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * performing actions. These actions can be done through each JavaScript or by
 * a common event (if it is used in the Message Window). Adequate knowledge of
 * both is recommended before attempting to modify and/or add new Text Code
 * Actions to the Plugin Parameters.
 *
 * Each of the Text Code Actions are formatted in such a way:
 *
 * ---
 *
 * Text Code Action
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   Common Event:
 *   - Select a common event to run when this text code is used in a message.
 *
 *   JS: Action:
 *   - JavaScript code used to perform an action when this text code appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Code Replacements
 * ============================================================================
 *
 * Text codes are used for one of two things: performing actions or replacing
 * themselves with text data. This Plugin Parameter will focus on the aspect of
 * replacing the text codes with text data. Text data can be replaced with
 * an exact exchange of text or dynamically through JavaScript. Adding a new
 * Text Code Replacement is done through the Plugin Parameters.
 *
 * Each of the Text Code Replacements are formatted in such a way:
 *
 * ---
 *
 * Text Code Replacement
 *
 *   Match:
 *   - This is what needs to be matched in order for this text code to work.
 *   - This is the primary text marker after the \ in a text code.
 *   - In \N[x], this would be the 'N'.
 *
 *   Type:
 *   - The type of parameter to obtain (none, number, or string).
 *   - This is the way the text code determines the condition type.
 *   - In \N[x], this would be the '[x]'.
 *
 *   STR: Text:
 *   - The text that will appear if this match appears.
 *     If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     match appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Macros
 * ============================================================================
 *
 * Text macros are used in similar fashion to text codes replacements to
 * replace themselves with text data. The primary difference is that macros are
 * made in a different format with no conditional argument modifiers (ie the
 * [x] that follows a text code).
 *
 * To use a text macro, type in the matching keyword between two [brackets] and
 * it will be replaced by the string data or run the JavaScript code found in
 * the Plugin Parameter settings.
 *
 * For example, if you have the text macro "Leader", made to return the party
 * leader's name, you can type in [Leader] in the Message Window and it will be
 * replaced with the party leader's name. The output can also output text codes
 * into the resulting text.
 * 
 * This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 * Use the method stated before with the brackets to [MacroName] instead.
 *
 * Each of the Text Macros are formatted in such a way:
 *
 * ---
 *
 * Text Macro
 *
 *   Match:
 *   - This is what needs to be matched in order for this macro to work.
 *   - In [Leader], this would be the 'Leader' text.
 *
 *   STR: Text:
 *   - The replacement text that will appear from the macro.
 *   - If this has a value, ignore the JS: Text version.
 *
 *   JS: Text:
 *   - JavaScript code used to determine the text that will appear if this
 *     macro appears.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Language Settings
 * ============================================================================
 *
 * The "Text Language" feature allows your players to switch between different
 * languages for your game to allow people from around the globe to enjoy what
 * story you have to tell.
 * 
 * Disclaimers: This is not an automatic translation tool. Translations made
 * through the "Text Language" feature of the VisuStella MZ Message Core
 * will require manual input by the game developer.
 * 
 * See the "Text Language Information" for more information.
 *
 * ---
 * 
 * Main Settings:
 * 
 *   Enable Switching?:
 *   - Enable language switching settings for this plugin?
 * 
 *   CSV Filename:
 *   - What is the filename of the CSV file to read from?
 *   - Located within the project's /data/ folder.
 * 
 * ---
 * 
 * Options:
 * 
 *   Add Option?:
 *   - Add the 'Text Language' option to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Option Name:
 *   - Command name of the option.
 * 
 * ---
 * 
 * Languages:
 * 
 *   Default Language:
 *   - What is the default language used for this game?
 * 
 *   Supported Languages:
 *   - What are all the supported languages supported by this game's
 *     script?
 *   - Remove any that aren't translated.
 * 
 * ---
 * 
 * Language Names:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - How does this language appear in the in-game options?
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Fonts
 * ============================================================================
 *
 * Different default fonts used for different languages. This allows different
 * stylistic choices to be made for different languages in case the current
 * font you're using doesn't have support for other language types.
 * 
 * Keep in mind that players can override this with Options Core if they select
 * a text option other than 'Default' for the 'Text Font' option.
 * 
 * Make sure any new custom fonts used for different languages are registered
 * with the 'Custom Font Manager' found in this plugin's Plugin Parameters.
 *
 * ---
 * 
 * Languages:
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - What font face is used for this language?
 *   - Make sure it is registered under Custom Font Manager.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Language Images
 * ============================================================================
 *
 * Allows different images to be used when different languages are used. This
 * is for images that have text on it that you want to appear in different
 * languages based on the text language selected by the player.
 * 
 * There are two ways this works:
 * 
 *   #1: Folder Name
 *   - The name of the folder containing those images will be named something
 *     like "Scrolls[XX]"
 *   - When a different language is picked, like English, it can reference
 *     the 'Scrolls[EN]' folder instead. If Japanese is used, it can refer to
 *     the 'Scrolls[JP]' folder as well.
 *   - The text used to replace the [XX] in the folder name can be determined
 *     in the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 * 
 *   #2: Filename
 *   - The filename of the image to be translated can be named something like
 *     ReidProfile[XX].png
 *   - When a different language is picked, like English, it will reference the
 *     'ReidProfile[EN].png' image instead. For Japanese, it will reference the
 *     'ReidProfile[JP].png' as well.
 *   - The text used to replace the [XX] in the filename can be determined in
 *     the Plugin Parameters.
 *     - Make sure you change the settings for each language you wish to use to
 *       have translated images for.
 *
 * ---
 * 
 * Settings
 * 
 *   Convert Default?
 *   - ON: Default language uses converted marker.
 *   - OFF: Default languages uses [XX] as marker.
 * 
 * Here's an explanation of what this does:
 * 
 *   - The default language picked is English and the player has English picked
 *     as their desired language.
 *   - If the "Convert Default?" Plugin Parameter is ON, then 'ReidProfile[XX]'
 *     will reference and look for the 'ReidProfile[EN]' image.
 *   - If the "Convert Default?" Plugin Parameter is OFF, 'ReidProfile[XX]' is
 *     then used for the English language instead of 'ReidProfile[EN]'.
 *     - This is to avoid duplicate images and save on file space.
 *   - The reasoning behind the [XX] is that there needs to be an anchor image
 *     used for the RPG Maker MZ client in order to have something to reference
 *     before branching out to different languages.
 * 
 * ---
 * 
 * Languages 
 * 
 *   Bengali:
 *   Chinese (Simplified):
 *   Chinese (Traditional):
 *   Czech:
 *   Danish:
 *   Dutch:
 *   English:
 *   Finnish:
 *   French:
 *   German:
 *   Greek:
 *   Hindi:
 *   Hungarian:
 *   Indonesian:
 *   Italian:
 *   Japanese:
 *   Korean:
 *   Norwegian:
 *   Polish:
 *   Portuguese:
 *   Romanian:
 *   Russian:
 *   Slovak:
 *   Spanish:
 *   Swedish:
 *   Tamil:
 *   Thai:
 *   Turkish:
 *   - This text will replace [XX] with in image folder names and filenames
 *     when this language is selected.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Text Speed Option Settings
 * ============================================================================
 *
 * Modern RPG's on the market have the option to adjust the message speed rate
 * for players. These Plugin Parameters allow you to add that option to the
 * Options Menu as well.
 *
 * ---
 *
 * Text Speed Option Settings
 *
 *   Add Option?:
 *   - Add the 'Text Speed' option to the Options menu?
 *
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 *
 *   Option Name:
 *   - Command name of the option.
 *
 *   Default Value:
 *   - 1 - 10, slowest to fastest.
 *   - 11 is instant value.
 *
 *   Instant Speed:
 *   - Text to show "instant" text.
 *
 * ---
 * 
 * ============================================================================
 * Plugin Parameters: Word Wrap Settings
 * ============================================================================
 *
 * Word wrap is a property that will cause any overflowing text to wrap around
 * and move into the next line. This property can only be enabled inside text
 * that accept text codes, such as the Message Window and Help Window. However,
 * word wrap is disabled for the Choice Window due to the nature of the Choice
 * Window's base properties.
 *
 * Word wrap can be enabled or disabled in three ways. One is by using the text
 * code <WordWrap> to enable it or </WordWrap> to disable it. The second method
 * is by enabling it with the Plugin Command: 'Message: Properties'. The third
 * method is by enabling it by default with the Plugin Parameters.
 * 
 * Word wrap only supports left-to-right alphabetical languages that utilize
 * spaces.
 * 
 * Word Wrap also cannot be used together with <left>, <center>, or <right> and
 * will disable itself if text alignment text codes are detected.
 * 
 * As of the v1.44 update, some Asian languages such as Chinese and Japanese
 * are now supported for word wrap. Korean language is only supported if spaces
 * are used.
 * 
 * ---
 *
 * Enable Word Wrap
 *
 *   Message Window:
 *   - Automatically enable Word Wrap for this window?
 *
 *   Help Window:
 *   - Automatically enable Word Wrap for this window?
 *
 * ---
 *
 * Rules
 *
 *   Link Break -> Space:
 *   - Convert manually placed (non tagged) line breaks with spaces?
 *   - Line breaks must be inserted using the <br> text code.
 *
 *   Tight Wrap:
 *   - If a face graphic is present in a message, word wrap will be tighter.
 * 
 *   End Padding:
 *   - Add extra padding to your window to make text wrap further away from the
 *     end of the window.
 *   - This will default to 0.
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
 * Version 1.51: October 17, 2024
 * * Bug Fixes!
 * ** Fixed a bug where \LastGainObj text code did not work with text language
 *    key codes. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added note to Text Language Information > How to Enable Switching
 * *** IMPORTANT! The separator used for the CSV file must be a semicolon (;)
 *     and not a comma (,) as to reduce the amount of punctuation conflicts.
 *     Keep this in mind as most CSV editors will default to comma (,) instead
 *     of the semicolon (;) for their separator.
 * ** Added note to Text Language Information > Naming Weapon Types, etc:
 * *** You might have noticed that if you've decided to use \tl{keyName} for
 *     weapon or other database types, other parts of the game will error out.
 *     Don't worry, for these, you don't have to change the currently used
 *     database name. Go straight to the CSV and insert in a new key for that
 *     particular database name. For example, the equip type "Accessory" will
 *     use "Accessory" as the automatic key to look for a translated phrase. If
 *     there isn't any in the CSV file, then the default database text entry
 *     will be used.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Parameters > Text Language Settings > Language Fonts
 * **** Different default fonts used for different languages. This allows
 *      different stylistic choices to be made for different languages in case
 *      the current font you're using doesn't have support for other language
 *      types.
 * **** Keep in mind that players can override this with Options Core if they
 *      select a text option other than 'Default' for the 'Text Font' option.
 * **** Make sure any new custom fonts used for different languages are
 *      registered with the 'Custom Font Manager' found in this plugin's Plugin
 *      Parameters.
 * *** Parameters > Text Language Settings > Language Images
 * **** Allows different images to be used when different languages are used.
 *      This is for images that have text on it that you want to appear in
 *      different languages based on the text language selected by the player.
 * 
 * Version 1.50: July 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina:
 * *** <Caps> </Caps>
 * *** <Upper> </Upper>
 * *** <Lower> </Lower>
 * **** Auto-text case textcodes will automatically adjust text inserted
 *      between them to respectively be completely capitalized, first-letter
 *      capitalized, or completely lowercase.
 * **** More information in the help file.
 * *** <Alt> </Alt>
 * **** Alternates between uppercase and lowercase for letters.
 * *** <Chaos> </Chaos>
 * **** Randomly uses uppercase and lowercase for letters.
 * 
 * 
 * Version 1.49: May 16, 2024
 * * Bug Fixes!
 * ** Fixed a problem where using text codes to get database object names did
 *    not apply translated text.
 * * Documentation Update!
 * ** Added note for Message Window Only text code effects:
 * *** These text codes only work with the Message Window. Keep in mind that
 *     even if some windows might look like the Message Window, it may not
 *     necessarily be one.
 * * Feature Update!
 * ** Added a failsafe for when Choice List Window doesn't have any viable
 *    options (due to being hidden or disabled). Update made by Irina.
 * ** Added a failsafe for Language CSV when empty rows are added.
 * ** Updated some default Text Code actions in order to make sure they're only
 *    used by the Message Window and not anything else. Update made by Irina.
 * 
 * Version 1.48: April 18, 2024
 * * Bug Fixes!
 * ** Added fail safe for help description checks parsing from objects without
 *    help descriptions normally. Fix made by Irina.
 * 
 * Version 1.47: February 15, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > Custom Font Manager
 * **** Register custom fonts here.
 * **** Custom fonts that aren't the message or number fonts cannot be used
 *      without registration.
 * **** See help file for more information.
 * 
 * Version 1.46: January 18, 2024
 * * Bug Fixes!
 * ** Fixed a bug where script calls used to create message choices would not
 *    work properly. Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** Text Language Switching added by Irina:
 * *** Plugin Parameters > Text Language Settings
 * **** The "Text Language" feature allows your players to switch between
 *      different languages for your game to allow people from around the globe
 *      to enjoy what story you have to tell.
 * **** Disclaimers: This is not an automatic translation tool. Translations
 *      made through the "Text Language" feature of the VisuStella MZ Message
 *      Core will require manual input by the game developer.
 * **** Read more about it in detail within the "Text Language Information"
 *      section in the help file.
 * ** New Plugin Parameter added by Irina:
 * *** Choices: Distance
 * **** Change the distance from choice window to the message window.
 * ** New parameter added to Plugin Command "Choices: Properties" by Irina:
 * *** Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Plugin Parameter for "Message Window" added by Irina:
 * *** Parameters > Message Window: Choice List Window> Minimum Choice Width
 * **** What is the minimum width size for each choice?
 * ** New Text Codes for Choice Window added by Irina:
 * *** <BgImg: filename> and variants
 * *** <FgImg: filename> and variants
 * **** These text codes allow adding a background or foreground image to a
 *      choice rectangle in stretched/scaled size.
 * 
 * Version 1.45: December 14, 2023
 * * Bug Fixes!
 * ** Punctuation was, for some reason, excluded when using Wordwrap with
 *    Japanese and Chinese languages. This should be fixed now. Fixed by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added clarity to the <left>, <center>, and <right> being unable to be
 *    used together with word wrap.
 * *** Word Wrap also cannot be used together with <left>, <center>, or <right>
 *     and will disable itself if text alignment text codes are detected.
 * * Feature Update!
 * ** Wordwrap <br> now works properly with Japanese and Chinese languages.
 * * New Features!
 * ** New Plugin Parameters added by Irina:
 * *** Plugin Parameters > General Settings > Each Message Start
 * *** Plugin Parameters > General Settings > Each Message End
 * **** This is text that is added at the start/end of each message.
 * **** Keep in mind that if a message extends to a different page (due to word
 *      wrap, excess lines, etc), that does not mean the starting text will
 *      be added to where the next page begins or the ending text will be added
 *      where the previous page ends.
 * **** Can be used for things like adding "<center>" to the start of each 
 *      message without having to type it every time.
 * 
 * Version 1.44: October 12, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Updated "Plugin Parameters: Word Wrap Settings" section:
 * *** As of the v1.44 update, some Asian languages such as Chinese and
 *     Japanese are now supported for word wrap. Korean language is only
 *     supported if spaces are used.
 * * Feature Update!
 * ** Word Wrap is now supported for Japanese and Chinese languages.
 * ** Feature updated by Irina and sponsored by AndyL.
 * * New Features!
 * ** New text codes added by Irina for "Show Choices" event command.
 * *** <Shuffle>
 * **** Shuffles the order of all choices. Any cancel shortcuts other than
 *      "Branch" will be undone.
 * *** <Shuffle: x>
 * **** Shuffles the order of all choices and only x number of them appear. Any
 *      cancel shortcuts other than "Branch" will be undone. Hidden choices do
 *      not count towards x number.
 * 
 * Version 1.43: April 13, 2023
 * * Compatibility Update!
 * ** Fixed incompatibilities with auto message positioning with the Map Zoom
 *    plugin. Update made by Irina.
 * 
 * Version 1.42: March 16, 2023
 * * Bug Fixes!
 * ** Fixed some text codes that would capture way too much data than intended.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text code added by Irina for Show Choice Window only:
 * *** <Help> text </Help>
 * **** Makes a help window appear and have it show 'text' in its contents.
 * **** The help window will disappear if no text is displayed.
 * ** New Plugin Commands added by Arisu:
 * *** Select: Weapon
 * *** Select: Armor
 * *** Select: Skill
 * **** Opens the Event Select Item Window to let the player pick a weapon,
 *      armor, or skill to choose from. The selected object will have its ID
 *      recorded in a variable. These can be opened while the Message Window is
 *      opened just like the event "Select Item".
 * 
 * Version 1.41: December 15, 2022
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New text codes added by Irina!
 * *** For the Choice Window Only text codes:
 * **** <BgColor: x>
 * **** <BgColor: x, y>
 * **** <BgColor: #rrggbb>
 * **** <BgColor: #rrggbb, #rrggbb>
 * ***** Requires VisuMZ_0_CoreEngine! Sets the background color of this choice
 *       to 'x' text color, 'x' to 'y' gradient text color, or using '#rrggbb'
 *       hex color values.
 * 
 * Version 1.40: November 3, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New text code added by Irina:
 * *** <RNG> text1 | text2 | text3 </RNG>
 * **** Using the above text code format in a Show Message entry, you can get a
 *      random result out of the various inserted texts. Use "|" (without
 *      quotes) as a separator between text entries. You can have unlimited
 *      entries. The result will have any excess white space trimmed.
 * **** This text code cannot be inserted into a macro and parsed properly.
 * 
 * Version 1.39: September 22, 2022
 * * Bug Fixes!
 * ** Macros now support quotes (' and ") in the STR: Text. Fix made by Irina.
 * 
 * Version 1.38: July 21, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.37: June 9, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * Feature Update!
 * ** Picture texts with \v[x] text codes are now updated automatically.
 * ** This is the only dynamic text code that updates this way for optimization
 *    purposes and to prevent overabundant CPU usage.
 * ** Everything else will require the new Plugin Command.
 * * New Features!
 * ** New Plugin Command added by Irina:
 * *** Picture: Refresh Text
 * **** Refreshes the text used for all on-screen pictures.
 * **** To be used if any dynamic text codes are updated like \n[x].
 * * New Features!
 * ** New text codes added by Arisu and sponsored by
 *    ImGonnaPutMyGameOnXboxAndYouCantStopMe:
 * *** <Up Button>, <Left Button>, <Right Button>, <Down Button>
 * *** <Ok Button>, <Cancel Button>, <Shift Button>, <Menu Button>
 * *** <Page Up Button>, <Page Down Button>
 * **** Display's VisuMZ_0_CoreEngine's button assist text.
 * 
 * Version 1.36: April 7, 2022
 * * Feature Update!
 * ** Auto size related text codes should now automatically disable word wrap
 *    effects as they should have before. Update made by Irina.
 * 
 * Version 1.35: March 31, 2022
 * * Bug Fixes!
 * ** Bug fixed where if autosizing is used and it goes from a message that is
 *    shorter to longer, an extra key press is needed. This should no longer be
 *    the case. Fix made by Irina.
 * 
 * Version 1.34: February 24, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Choice Window Text Codes made by Irina and sponsored by AndyL:
 * *** <Choice Width: x>
 * **** Sets the minimum text area width to x. Applies to whole choice window.
 * *** <Choice Indent: x>
 * **** Sets the indent to x value. Applies to current choice selection only.
 * 
 * Version 1.33: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Commands added by Irina:
 * *** Picture: Change Text
 * **** This new plugin command allows you to place text on top of pictures
 *      (usually in the form of empty pages or cards) to function as stationary
 *      or other uses. Text codes are allowed.
 * **** Text codes are supported.
 * *** Picture: Erase Text
 * **** Removes text from target picture(s).
 * 
 * Version 1.32: January 20, 2022
 * * Bug Fixes!
 * ** Extra Show Choice notetags will now be properly hidden. Fix by Irina.
 * * Compatibility Update!
 * ** Self Switches are now made compatible with work with Show Choices. Update
 *    made by Irina.
 * 
 * Version 1.31: December 9, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New hard-coded message-only text code added by Irina:
 * *** <Next Page>
 * **** Ends the current message page at this line. This is used for messages
 *      when rows are at 5 or above and the message lines don't match the
 *      amount. This is used to prevent grabbing message windows from following
 *      message events. Any lines following <Next Page> in the same message
 *      event will be ignored.
 * 
 * Version 1.30: November 11, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Help file updated for removed "Center Window X" bit.
 * * Feature Update!
 * ** Message: Properties now has "Center Window X?" removed
 * *** Changes will now be automatically centered.
 * *** This change is made for the new Plugin Command added for offsets which
 *     more or less replaces them.
 * * New Features!
 * ** New Plugin Command added by Irina and sponsored by Puddor:
 * *** Message: X/Y Offsets
 * **** Change the X and Y Offsets of the Message Window.
 * **** The offset value(s) will be saved and stored.
 * ** New Plugin Parameters added by Irina and sponsored by Puddor:
 * *** Plugin Parameters > General Settings > Message Window > Offset X
 * *** Plugin Parameters > General Settings > Message Window > Offset Y
 * **** Allows you to offset the horizontal and/or vertical positions of the
 *      message window accordingly.
 * ** New Text Codes added by Irina and sponsored by Puddor:
 * *** <Offset: +x, +y>
 * *** <Offset: -x, -y>
 * *** <Offset: +x, -y>
 * *** <Offset: -x, +y>
 * **** Quickly adjust the message window offset values to the x and y amounts.
 *      The values will replace the previous offset settings if there were any.
 * 
 * Version 1.29: October 21, 2021
 * * Feature Update
 * ** Word Wrap flags are now properly adjusted when converting macros and
 *    adding bypasses towards regular messages. Update by Irina.
 * 
 * Version 1.28: October 14, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.27: October 7, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.26: September 3, 2021
 * * Bug Fixes!
 * ** Macros should now work properly with any \x<n> based text codes.
 *    Fix made by Irina.
 * 
 * Version 1.25: August 27, 2021
 * * Feature Update!
 * ** Macros should now work with the <WordWrap> text code. Update by Irina.
 * 
 * Version 1.24: August 20, 2021
 * * Feature Update!
 * ** Macros should now work with window placement and resize options.
 *    Update made by Irina.
 * ** Macros should now work with choice-related enable and visibility options.
 *    Update made by Irina.
 * 
 * Version 1.23: July 16, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Word Wrap Settings > End Padding
 * **** Add extra padding to your window to make text wrap further away from
 *      the end of the window. This will default to 0.
 * 
 * Version 1.22: July 2, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Text Codes added by Irina and sponsored by AndyL:
 * *** <Current Battle Target>
 * *** <Current Battle User>
 * **** Replaces the text code with the current target or current user's name
 *      in-battle. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * *** <Current Battle Action>
 * *** <Current Battle Action Name>
 * **** Replaces the text code with the current battle action's name with the
 *      icon or without it respectively. Otherwise, returns nothing.
 * **** Not recommended to be used inside of Help Descriptions. They are best
 *      used with "Show Text" event commands.
 * 
 * Version 1.21: June 4, 2021
 * * Documentation Update!
 * ** Added extra note to the new <Position: x, y, width, height> text codes
 *    that they do not work with Word Wrap.
 * * Feature Update!
 * ** Added fail safe for preventing Common Events that don't exist from being
 *    ran at all by the Message Window. Added by Arisu.
 * 
 * Version 1.20: May 28, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added additional clarity for \WindowMoveTo<?> and \WindowMoveBy<?> and
 *    \WindowReset text codes with "Note 2".
 * *** Replace '?' with the following format: targetX, targetY, targetWidth,
 *     targetHeight, duration, easingType. Only targetX and targetY are
 *     required arguments. These will only alter the window dimensions when the
 *     text has arrived at that point. They will not alter the window
 *     preemptively. This is not used as a window positioner. Use the
 *     <Position: x, y, width, height> text code for that.
 * * New Features!
 * ** New hard-coded text codes added for Message Window Only. Added by Irina.
 * *** <Position: x, y, width, height>
 * *** <Coordinates: x, y>
 * *** <Dimensions: width, height>
 * 
 * Version 1.19: May 14, 2021
 * * Feature Updates!
 * ** <br> line breaks can now be used by Show Choices. Make sure that there is
 *    enough room to contain the text through Plugin Commands. Update by Irina.
 * 
 * Version 1.18: April 30, 2021
 * * Bug Fixes!
 * ** Moving windows with 0 duration via text code should now instantly move
 *    the windows to the desired location with no delay. Fix made by Olivia.
 * 
 * Version 1.17: April 9, 2021
 * * Feature Update!
 * ** <Auto> text codes for message windows will round up calculations for the
 *    message width to the nearest even number for better calculations.
 * 
 * Version 1.16: April 2, 2021
 * * Bug Fixes!
 * ** \CommonEvent[x] text code will no longer run upon message window size
 *    calculation. Fix made by Arisu.
 * * Documentation Update!
 * ** Added further clarification for "Text Macros" section.
 * *** This does NOT work with \MacroName as it did with Yanfly Engine Plugins.
 *     Use the method stated before with the brackets to [MacroName] instead.
 * 
 * Version 1.15: March 5, 2021
 * * Bug Fixes!
 * ** Hidden choices by switches will no longer count towards the maximum line
 *    count for Show Choice options. Fix made by Irina.
 * 
 * Version 1.14: February 12, 2021
 * * Bug Fixes!
 * ** Auto positioned messages in battle will no longer cover the battler in
 *    question. Fix made by Irina.
 * 
 * Version 1.13: February 5, 2021
 * * Bug Fixes!
 * ** Choice List Window with a dimmed background should now have a more
 *    consistent sized dim sprite. Fix made by Irina.
 * 
 * Version 1.12: January 22, 2021
 * * Feature Update!
 * ** Name Box Window Default Color is now disabled by default to 0 because
 *    users do not understand why their names are showing up yellow and did not
 *    bother reading the documentation. If users want this feature turned on,
 *    they will have to do it manually from now on. Update made by Irina.
 * 
 * Version 1.11: January 15, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.10: January 8, 2021
 * * Bug Fixes!
 * ** <Auto Actor: x> and <Auto Party: x> text codes should now work properly.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Auto Color Plugin Parameters now have their default settings set to 0.
 *    This is due to an influx of "bug reports" from users who do not
 *    understand how this feature works, and the VisuStella team has decided it
 *    is better for the feature to default to an inactive state until users
 *    decide to search and utilize it themselves. Update made by Irina.
 * 
 * Version 1.09: January 1, 2021
 * * Feature Update!
 * ** Auto-color no longer applies to database names that are only numbers.
 *    Auto-color entries that are only numbers will also be ignored. This is to
 *    prevent breaking the text code parsing. Update made by Yanfly.
 * 
 * Version 1.08: November 15, 2020
 * * Documentation Update!
 * ** Some text codes left for the Name Box Window have been accidentally left
 *    out. These text codes allow for the positioning of the Name Box Window.
 *    Also, added to this section are the \NormalBG, \DimBG, and \TransparentBG
 *    text codes since people have been asking for how to change the name box
 *    window's background, but have skimmed over those text codes in different
 *    sections of the help file.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.07: November 8, 2020
 * * Bug Fixes!
 * ** When using auto size functions, the message pause symbol will no longer
 *    appear semi-transparent the whole time. Fix made by Irina.
 * 
 * Version 1.06: October 25, 2020
 * * Documentation Update!
 * ** Added a warning message to the Fast Forward Key plugin parameter:
 * *** WARNING: If this key is the same as the dash button, this will clear out
 *     any held down inputs upon triggering an event  to prevent players from
 *     skipping potentially useful information stored in messages. If you do
 *     not want the input to be cleared, use a different key.
 * ** Updated help file for new features.
 * * Feature Update!
 * ** The default Fast Forward Key setting has now been changed from "Shift" to
 *    "Page Down". Change made by Yanfly
 * * New Feature!
 * ** New Plugin Parameter added by Irina.
 * *** Plugin Parameters > General > Default Outline Width
 * **** Changes the default outline width to this many pixels thick.
 * 
 * Version 1.06: September 27, 2020
 * * Bug Fixes!
 * ** Setting an actor's autocolor will now disable it from \N[x] and \P[x]
 *    text codes. Fix made by Irina.
 * 
 * Version 1.05: September 20, 2020
 * * Bug Fixes!
 * ** Auto Position text codes not place positions properly if the screen width
 *    and height differ from the box width and box height. Fix made by Irina.
 * 
 * Version 1.04: September 13, 2020
 * * Bug Fixes!
 * ** Word wrap no longer affects specific battle messages. Fix made by Irina.
 * ** Word wrap now updates properly after using the 'Message: Properties'
 *    Plugin Command. Fix made by Arisu.
 * 
 * Version 1.03: September 6, 2020
 * * Bug Fixes!
 * ** Autoplacement of the name box window now takes its offset Y setting into
 *    account before sending it to the bottom of the message window. Fix made
 *    by Yanfly.
 * ** Added automatic feature setting to turn off word wrap when using the
 *    auto-size and auto-position text codes. This is because the auto-size and
 *    auto-position effects don't work properly with Word Wrap based on how
 *    they both clash when adjusting the window settings. Fix made by Irina.
 * ** New message pages after auto-sizing no longer put out empty messages.
 *    Fix made by Irina and Shiro.
 * * Documentation Update!
 * ** Extended the note for auto-size and auto-position text codes to include
 *    that they do not work with Word Wrap. Added by Irina.
 * 
 * Version 1.02: August 30, 2020
 * * New Features!
 * ** Added new hard-coded text codes for auto-sizing and auto-positioning:
 * *** <Auto>, <Auto Width>, <Auto Height>
 * *** <Auto Actor: x>, <Auto Party: x>, <Auto Enemy: x>
 * *** <Auto Player>, <Auto Actor: x>, <Auto Party: x>, <Auto Event: x>
 * **** New features added by Irina.
 * 
 * Version 1.01: August 23, 2020
 * * Bug Fixes!
 * ** </Wordwrap> now works.
 * ** \ActorFace[x] text code now fixed.
 * *** Users updating from version 1.00 will need to fix this problem by either
 *     removing the plugin from the Plugin Manager list and reinstalling it, or
 *     going to Plugin Parameters > Text Code Replacements > ActorFace >
 *     JS: Text > and changing "$gameActors.actor(1)" to
 *     "$gameActors.actor(actorId)"
 * ** Actors with empty names would cause auto hightlight problems. Fixed!
 * ** Auto-colors now ignore names with special characters like !, ?, [, ], and
 *    so on.
 * ** Line break spacing fixed.
 * * New Features!
 * ** Wordwrap now works with <left>, <center> and <right> alignment tags.
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
 * @command MessageWindowProperties
 * @text Message: Properties
 * @desc Change the various properties of the Message Window.
 *
 * @arg Rows:num
 * @text Rows
 * @type number
 * @min 0
 * @desc Change the number of Message Window rows.
 * Leave at 0 to keep it unchanged.
 * @default 4
 *
 * @arg Width:num
 * @text Width
 * @type number
 * @min 0
 * @desc Change the Message Window width in pixels.
 * Leave at 0 to keep it unchanged.
 * @default 816
 *
 * @arg WordWrap:str
 * @text Word Wrap
 * @type select
 * @option No Change
 * @value No Change
 * @option Enable
 * @value true
 * @option Disable
 * @value false
 * @desc Enable or disable Word Wrap for the Message Window?
 * @default No Change
 *
 * @ --------------------------------------------------------------------------
 *
 * @command MessageWindowXyOffsets
 * @text Message: X/Y Offsets
 * @desc Change the X and Y Offsets of the Message Window.
 * The offset value(s) will be saved and stored.
 *
 * @arg OffsetX:eval
 * @text Offset X
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @arg OffsetY:eval
 * @text Offset Y
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Choice
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowDistance
 * @text Choices: Distance
 * @desc Change the distance from choice window to the message window.
 *
 * @arg Distance:eval
 * @text Distance
 * @desc Change distance between the choice and message windows.
 * Default distance is 0. Use negative to center align.
 * @default +0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ChoiceWindowProperties
 * @text Choices: Properties
 * @desc Change the properties found in the Show Choices event command.
 *
 * @arg LineHeight:num
 * @text Choice Line Height
 * @type number
 * @min 0
 * @desc Change the line height for the show choices.
 * Leave at 0 to keep this unchanged.
 * @default 36
 *
 * @arg MinWidth:num
 * @text Minimum Choice Width
 * @type number
 * @min 0
 * @desc What is the minimum width size for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @arg MaxRows:num
 * @text Max Rows
 * @type number
 * @min 0
 * @desc Maximum number of choice rows to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 8
 *
 * @arg MaxCols:num
 * @text Max Columns
 * @type number
 * @min 0
 * @desc Maximum number of choice columns to be displayed.
 * Leave at 0 to keep this unchanged.
 * @default 1
 *
 * @arg TextAlign:str
 * @text Text Alignment
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Text alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Select
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectWeapon
 * @text Select: Weapon
 * @desc Opens the Event Select Item Window to let the player
 * pick a weapon to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected weapon. It will result in 0 otherwise.
 * @default 1
 *
 * @arg WeaponTypeID:num
 * @text Weapon Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the weapons to a specific weapon type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectArmor
 * @text Select: Armor
 * @desc Opens the Event Select Item Window to let the player
 * pick an armor to choose from.
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected armor. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ArmorTypeID:num
 * @text Armor Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific armor type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @arg EquipTypeID:num
 * @text Equip Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the armors to a specific equip type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SelectSkill
 * @text Select: Skill
 * @desc Opens the Event Select Item Window to let the player
 * pick a skill to choose from. Requires VisuMZ_1_SkillsStatesCore!
 *
 * @arg VariableID:num
 * @text Variable ID
 * @type number
 * @min 0
 * @desc This variable will be used to record the ID of the
 * selected skill. It will result in 0 otherwise.
 * @default 1
 *
 * @arg ActorID:num
 * @text Actor ID
 * @type actor
 * @desc Select an actor to get the skill list from.
 * Use 0 to select from the party leader.
 * @default 0
 *
 * @arg SkillTypeID:num
 * @text Skill Type ID
 * @type number
 * @min 0
 * @max 100
 * @desc Reduce all the skills to a specific skill type.
 * Leave at 0 to not use filters.
 * @default 0
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Picture
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextChange
 * @text Picture: Change Text
 * @desc Change text for target picture(s) to show.
 * You may use text codes.
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to set text to.
 * @default ["1"]
 *
 * @arg Padding:eval
 * @text Padding
 * @parent PictureIDs:arraynum
 * @desc How much padding from the sides should there be?
 * @default $gameSystem.windowPadding()
 * 
 * @arg Text
 *
 * @arg upperleft:json
 * @text Upper Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg up:json
 * @text Upper Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg upperright:json
 * @text Upper Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg left:json
 * @text Middle Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg center:json
 * @text Middle Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg right:json
 * @text Middle Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerleft:json
 * @text Lower Left
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg down:json
 * @text Lower Center
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @arg lowerright:json
 * @text Lower Right
 * @parent Text
 * @type note
 * @desc The text that's aligned to this picture's side.
 * You may use text codes.
 * @default ""
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextErase
 * @text Picture: Erase Text
 * @desc Erase all text for target picture(s).
 *
 * @arg PictureIDs:arraynum
 * @text Picture ID(s)
 * @type number[]
 * @min 1
 * @max 100
 * @desc The ID(s) of the picture(s) to erase text for.
 * @default ["1"]
 *
 * @ --------------------------------------------------------------------------
 *
 * @command PictureTextRefresh
 * @text Picture: Refresh Text
 * @desc Refreshes the text used for all on-screen pictures.
 * To be used if any dynamic text codes are updated like \n[x].
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
 * @param MessageCore
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings involving the message system.
 * @default {"MessageWindow":"","MessageRows:num":"4","MessageWidth:num":"816","FastForwardKey:str":"pagedown","MessageTextDelay:num":"1","StretchDimmedBg:eval":"true","DefaultOutlineWidth:num":"3","NameBoxWindow":"","NameBoxWindowDefaultColor:num":"0","NameBoxWindowOffsetX:num":"0","NameBoxWindowOffsetY:num":"0","ChoiceListWindow":"","ChoiceWindowLineHeight:num":"36","ChoiceWindowMaxRows:num":"8","ChoiceWindowMaxCols:num":"1","ChoiceWindowTextAlign:str":"default","DefaultTextCodes":"","RelativePXPY:eval":"true","FontBiggerCap:eval":"108","FontSmallerCap:eval":"12","FontChangeValue:eval":"12"}
 *
 * @param AutoColor:struct
 * @text Auto-Color Settings
 * @type struct<AutoColor>
 * @desc Automatically color certain keywords a specific way.
 * @default {"DatabaseHighlighting":"","Actors:str":"0","Classes:str":"0","Skills:str":"0","Items:str":"0","Weapons:str":"0","Armors:str":"0","Enemies:str":"0","States:str":"0","WordHighlighting":"","TextColor1:arraystr":"[]","TextColor2:arraystr":"[]","TextColor3:arraystr":"[]","TextColor4:arraystr":"[]","TextColor5:arraystr":"[]","TextColor6:arraystr":"[]","TextColor7:arraystr":"[]","TextColor8:arraystr":"[]","TextColor9:arraystr":"[]","TextColor10:arraystr":"[]","TextColor11:arraystr":"[]","TextColor12:arraystr":"[]","TextColor13:arraystr":"[]","TextColor14:arraystr":"[]","TextColor15:arraystr":"[]","TextColor16:arraystr":"[]","TextColor17:arraystr":"[]","TextColor18:arraystr":"[]","TextColor19:arraystr":"[]","TextColor20:arraystr":"[]","TextColor21:arraystr":"[]","TextColor22:arraystr":"[]","TextColor23:arraystr":"[]","TextColor24:arraystr":"[]","TextColor25:arraystr":"[]","TextColor26:arraystr":"[]","TextColor27:arraystr":"[]","TextColor28:arraystr":"[]","TextColor29:arraystr":"[]","TextColor30:arraystr":"[]","TextColor31:arraystr":"[]"}
 *
 * @param CustomFonts:arraystruct
 * @text Custom Font Manager
 * @type struct<CustomFont>[]
 * @desc Register custom fonts here. Custom fonts that aren't the
 * message or number fonts cannot be used without this.
 * @default []
 *
 * @param TextCodeActions:arraystruct
 * @text Text Code Actions
 * @type struct<TextCodeAction>[]
 * @desc Text codes that perform actions.
 * @default ["{\"Match:str\":\"ChangeFace\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = data[0].trim();\\\\n        const index = parseInt(data[1] || '0');\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"FaceIndex\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing) {\\\\n        const filename = $gameMessage.faceName();\\\\n        $gameMessage.setFaceImage(filename, index);\\\\n        this.loadMessageFace();\\\\n        const rtl = $gameMessage.isRTL();\\\\n        const width = ImageManager.faceWidth;\\\\n        const height = this.innerHeight;\\\\n        const x = rtl ? this.innerWidth - width - 4 : 4;\\\\n        this.contents.clearRect(x, 0, width, height);\\\\n        this._faceBitmap.addLoadListener(this.drawMessageFace.bind(this));\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"TextDelay\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst delay = this.obtainEscapeParam(textState);\\\\nif (this instanceof Window_Message) {\\\\n    if (textState.drawing && this.constructor === Window_Message) {\\\\n        this.setTextDelay(delay);\\\\n    }\\\\n}\\\"\"}","{\"Match:str\":\"NormalBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(0);\\\\n}\\\"\"}","{\"Match:str\":\"DimBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(1);\\\\n}\\\"\"}","{\"Match:str\":\"TransparentBG\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    this.setBackgroundType(2);\\\\n}\\\"\"}","{\"Match:str\":\"FontChange\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst fontName = this.obtainEscapeString(textState);\\\\nthis.contents.fontFace = fontName;\\\"\"}","{\"Match:str\":\"ResetFont\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetFontSettings();\\\"\"}","{\"Match:str\":\"ResetColor\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"this.resetTextColor();\\\"\"}","{\"Match:str\":\"HexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeTextColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineColor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst colorIndex = this.obtainEscapeParam(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(ColorManager.textColor(colorIndex));\\\\n}\\\"\"}","{\"Match:str\":\"OutlineHexColor\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst hexColor = this.obtainEscapeString(textState);\\\\nif (!this.isColorLocked() && textState.drawing) {\\\\n    this.changeOutlineColor(hexColor);\\\\n}\\\"\"}","{\"Match:str\":\"OutlineWidth\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst width = this.obtainEscapeParam(textState);\\\\nif (textState.drawing) {\\\\n    this.contents.outlineWidth = width;\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveTo\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : this.x;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : this.y;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : this.width;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : this.height;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveTo(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowMoveBy\",\"Type:str\":\"\\\\<(.*?)\\\\>\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst data = this.obtainEscapeString(textState).split(',');\\\\nif (textState.drawing) {\\\\n    const x = !!data[0] ? Number(data[0].trim()) : 0;\\\\n    const y = !!data[1] ? Number(data[1].trim()) : 0;\\\\n    const width = !!data[2] ? Number(data[2].trim()) : 0;\\\\n    const height = !!data[3] ? Number(data[3].trim()) : 0;\\\\n    const duration = !!data[4] ? Number(data[4].trim()) : 20;\\\\n    const easingType = !!data[5] ? data[5].trim() : 0;\\\\n    this.moveBy(x, y, width, height, duration, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"WindowReset\",\"Type:str\":\"\",\"CommonEvent:num\":\"0\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nif (textState.drawing) {\\\\n    const frames = 20;\\\\n    const easingType = 0;\\\\n    this.resetRect(frames, easingType);\\\\n}\\\"\"}","{\"Match:str\":\"heart\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"CommonEvent:num\":\"3\",\"ActionJS:func\":\"\\\"const textState = arguments[0];\\\\nconst index = this.obtainEscapeParam(textState);\\\"\"}"]
 *
 * @param TextCodeReplace:arraystruct
 * @text Text Code Replacements
 * @type struct<TextCodeReplace>[]
 * @desc Text codes that replace themselves with text.
 * @default ["{\"Match:str\":\"ActorFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const actorId = parseInt(arguments[1]);\\\\nconst actor = $gameActors.actor(actorId);\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"PartyFace\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const index = parseInt(arguments[1]) - 1;\\\\nconst actor = $gameParty.members()[index];\\\\nif (this.constructor === Window_Message && actor) {\\\\n    $gameMessage.setFaceImage(\\\\n        actor.faceName(),\\\\n        actor.faceIndex()\\\\n    );\\\\n}\\\\nreturn '';\\\"\"}","{\"Match:str\":\"Class\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ClassIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ClassName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataClasses;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Skill\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"SkillIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"SkillName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataSkills;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Item\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ItemName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ItemQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataItems;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Weapon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"WeaponName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"WeaponQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataWeapons;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"Armor\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"ArmorName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"ArmorQuantity\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataArmors;\\\\nconst id = parseInt(arguments[1]);\\\\nreturn $gameParty.numItems(database[id]);\\\"\"}","{\"Match:str\":\"State\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"StateIcon\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst obj = database[id];\\\\nconst icon = obj ? (obj.iconIndex || 0) : 0;\\\\nreturn icon ? '\\\\\\\\x1bI[%1]'.format(icon) : '';\\\"\"}","{\"Match:str\":\"StateName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataStates;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"LastGainObj\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = true;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjIcon\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectIcon();\\\"\"}","{\"Match:str\":\"LastGainObjName\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const icon = false;\\\\nreturn this.lastGainedObjectName(icon);\\\"\"}","{\"Match:str\":\"LastGainObjQuantity\",\"Type:str\":\"\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"return this.lastGainedObjectQuantity();\\\"\"}","{\"Match:str\":\"Enemy\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"EnemyName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataEnemies;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"Troop\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"const database = $dataTroops;\\\\nconst id = parseInt(arguments[1]);\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMember\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = true;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}","{\"Match:str\":\"TroopMemberName\",\"Type:str\":\"\\\\[(\\\\d+)\\\\]\",\"TextStr:str\":\"Undefined\",\"TextJS:func\":\"\\\"if (!$gameParty.inBattle()) return \\\\\\\"\\\\\\\";\\\\nconst index = (parseInt(arguments[1]) - 1) || 0;\\\\nconst member = $gameTroop.members()[index];\\\\nconst database = $dataEnemies;\\\\nconst id = member ? member.enemyId() : 0;\\\\nconst icon = false;\\\\nreturn this.databaseObjectName(database, id, icon);\\\"\"}"]
 *
 * @param TextMacros:arraystruct
 * @text Text Code Macros
 * @type struct<TextMacro>[]
 * @desc Macros that are used to quickly write batches of text.
 * Format style: [MacroName]
 * @default ["{\"Match:str\":\"Example Macro\",\"TextStr:str\":\"This is the text that will be displayed when you type [Example Macro].\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}","{\"Match:str\":\"Leader\",\"TextStr:str\":\"\\\\P[1]\",\"TextJS:func\":\"\\\"return 'Text';\\\"\"}"]
 *
 * @param Localization:struct
 * @text Text Language Settings
 * @type struct<Localization>
 * @desc Text Language settings for this plugin.
 * @default {"Main":"","Enable:eval":"false","CsvFilename:str":"Languages.csv","Options":"","AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Language","Localized":"","DefaultLocale:str":"English","Languages:arraystr":"[\"Bengali\",\"Chinese(Simplified)\",\"Chinese(Traditional)\",\"Czech\",\"Danish\",\"Dutch\",\"English\",\"Finnish\",\"French\",\"German\",\"Greek\",\"Hindi\",\"Hungarian\",\"Indonesian\",\"Italian\",\"Japanese\",\"Korean\",\"Norwegian\",\"Polish\",\"Portuguese\",\"Romanian\",\"Russian\",\"Slovak\",\"Spanish\",\"Swedish\",\"Tamil\",\"Thai\",\"Turkish\"]","LangNames":"","Bengali:str":"বাংলা","Chinese(Simplified):str":"简体中文","Chinese(Traditional):str":"繁體中文","Czech:str":"Čeština","Danish:str":"Dansk","Dutch:str":"Nederlands","English:str":"English","Finnish:str":"Suomi","French:str":"Français","German:str":"Deutsch","Greek:str":"Ελληνικά","Hindi:str":"हिन्दी","Hungarian:str":"Magyar","Indonesian:str":"Bahasa Indo","Italian:str":"Italiano","Japanese:str":"日本語","Korean:str":"한국어","Norwegian:str":"Norsk","Polish:str":"Polski","Portuguese:str":"Português","Romanian:str":"Română","Russian:str":"Русский","Slovak:str":"Slovenčina","Spanish:str":"Español","Swedish:str":"Svenska","Tamil:str":"தமிழ்","Thai:str":"ไทย","Turkish:str":"Türkçe"}
 *
 * @param LanguageFonts:struct
 * @text Language Fonts
 * @parent Localization:struct
 * @type struct<LanguageFonts>
 * @desc Different default fonts used for different languages.
 * Players can override this with Options Core.
 * @default {"Bengali:str":"rmmz-mainfont","Chinese(Simplified):str":"rmmz-mainfont","Chinese(Traditional):str":"rmmz-mainfont","Czech:str":"rmmz-mainfont","Danish:str":"rmmz-mainfont","Dutch:str":"rmmz-mainfont","English:str":"rmmz-mainfont","Finnish:str":"rmmz-mainfont","French:str":"rmmz-mainfont","German:str":"rmmz-mainfont","Greek:str":"rmmz-mainfont","Hindi:str":"rmmz-mainfont","Hungarian:str":"rmmz-mainfont","Indonesian:str":"rmmz-mainfont","Italian:str":"rmmz-mainfont","Japanese:str":"rmmz-mainfont","Korean:str":"rmmz-mainfont","Norwegian:str":"rmmz-mainfont","Polish:str":"rmmz-mainfont","Portuguese:str":"rmmz-mainfont","Romanian:str":"rmmz-mainfont","Russian:str":"rmmz-mainfont","Slovak:str":"rmmz-mainfont","Spanish:str":"rmmz-mainfont","Swedish:str":"rmmz-mainfont","Tamil:str":"rmmz-mainfont","Thai:str":"rmmz-mainfont","Turkish:str":"rmmz-mainfont"}
 *
 * @param LanguageImages:struct
 * @text Language Images
 * @parent Localization:struct
 * @type struct<LanguageImages>
 * @desc Allows different images to be used when different
 * languages are used. See help for more information.
 * @default {"ConvertDefault:eval":"false","Languages":"","Bengali:str":"[XX]","Chinese(Simplified):str":"[XX]","Chinese(Traditional):str":"[XX]","Czech:str":"[XX]","Danish:str":"[XX]","Dutch:str":"[XX]","English:str":"[XX]","Finnish:str":"[XX]","French:str":"[XX]","German:str":"[XX]","Greek:str":"[XX]","Hindi:str":"[XX]","Hungarian:str":"[XX]","Indonesian:str":"[XX]","Italian:str":"[XX]","Japanese:str":"[XX]","Korean:str":"[XX]","Norwegian:str":"[XX]","Polish:str":"[XX]","Portuguese:str":"[XX]","Romanian:str":"[XX]","Russian:str":"[XX]","Slovak:str":"[XX]","Spanish:str":"[XX]","Swedish:str":"[XX]","Tamil:str":"[XX]","Thai:str":"[XX]","Turkish:str":"[XX]"}
 *
 * @param TextSpeed:struct
 * @text Text Speed Option Settings
 * @type struct<TextSpeed>
 * @desc Text Speed Options Menu settings.
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","Name:str":"Text Speed","Default:num":"10","Instant:str":"Instant"}
 *
 * @param WordWrap:struct
 * @text Word Wrap Settings
 * @type struct<WordWrap>
 * @desc Settings involving Word Wrap.
 * @default {"EnableWordWrap":"","MessageWindow:eval":"false","HelpWindow:eval":"false","Rules":"","LineBreakSpace:eval":"true","TightWrap:eval":"false","EndPadding:num":"0"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param MessageWindow
 * @text Message Window
 *
 * @param MessageRows:num
 * @text Default Rows
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default number of rows to display for the Message Window.
 * @default 4
 *
 * @param MessageWidth:num
 * @text Default Width
 * @parent MessageWindow
 * @type num
 * @min 1
 * @desc Default Message Window width in pixels.
 * @default 816
 *
 * @param FastForwardKey:str
 * @text Fast Forward Key
 * @parent MessageWindow
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for fast forwarding messages.
 * @default pagedown
 *
 * @param MessageTextDelay:num
 * @text Text Delay
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc How many frames to wait between characters drawn?
 * Use 0 for instant.
 * @default 1
 *
 * @param MsgWindowOffsetX:num
 * @text Offset X
 * @parent MessageWindow
 * @desc Offset Message Window horizontally.
 * Negative: Left; Positive: Right
 * @default +0
 *
 * @param MsgWindowOffsetY:num
 * @text Offset Y
 * @parent MessageWindow
 * @desc Offset Message Window vertically.
 * Negative: Up; Positive: Down
 * @default +0
 *
 * @param StretchDimmedBg:eval
 * @text Stretch Dimmed BG
 * @parent MessageWindow
 * @type boolean
 * @on Stretch
 * @off Don't
 * @desc Stretch dimmed window background to fit the whole screen.
 * @default true
 *
 * @param DefaultOutlineWidth:num
 * @text Default Outline Width
 * @parent MessageWindow
 * @type number
 * @min 0
 * @desc Changes the default outline width to this many pixels thick.
 * @default 3
 *
 * @param EachMessageStart:json
 * @text Each Message Start
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the start of each message.
 * You may use text codes.
 * @default ""
 *
 * @param EachMessageEnd:json
 * @text Each Message End
 * @parent MessageWindow
 * @type note
 * @desc This is text that is added at the end of each message.
 * You may use text codes.
 * @default ""
 *
 * @param NameBoxWindow
 * @text Name Box Window
 *
 * @param NameBoxWindowDefaultColor:num
 * @text Default Color
 * @parent NameBoxWindow
 * @min 0
 * @max 31
 * @desc Default color for the Name Box Window's text.
 * @default 0
 *
 * @param NameBoxWindowOffsetX:num
 * @text Offset X
 * @parent NameBoxWindow
 * @desc How much to offset the name box window X by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param NameBoxWindowOffsetY:num
 * @text Offset Y
 * @parent NameBoxWindow
 * @desc How much to offset the name box window Y by (as long as it doesn't go offscreen).
 * @default +0
 *
 * @param ChoiceListWindow
 * @text Choice List Window
 *
 * @param ChoiceWindowLineHeight:num
 * @text Line Height
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc What is the default line height for Show Choices?
 * @default 36
 *
 * @param ChoiceWindowMinWidth:num
 * @text Minimum Choice Width
 * @parent ChoiceListWindow
 * @type number
 * @min 0
 * @desc What is the minimum choice width for each choice?
 * 96 is the default width.
 * @default 96
 *
 * @param ChoiceWindowMaxRows:num
 * @text Max Rows
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of rows to visibly display?
 * @default 8
 *
 * @param ChoiceWindowMaxCols:num
 * @text Max Columns
 * @parent ChoiceListWindow
 * @type number
 * @min 1
 * @desc Maximum number of columns to visibly display?
 * @default 1
 *
 * @param ChoiceWindowTextAlign:str
 * @text Text Alignment
 * @parent ChoiceListWindow
 * @type select
 * @option Default
 * @value default
 * @option Left
 * @value left
 * @option Center
 * @value center
 * @option Right
 * @value right
 * @desc Default alignment for Show Choice window.
 * @default rmmz-mainfont
 *
 * @param DefaultTextCodes
 * @text Default Text Codes
 *
 * @param RelativePXPY:eval
 * @text Relative \PX \PY
 * @parent DefaultTextCodes
 * @type boolean
 * @on Better
 * @off Normal
 * @desc Make \PX[x] and \PY[x] adjust relative starting position than exact coordinates.
 * @default true
 *
 * @param FontBiggerCap:eval
 * @text \{ Maximum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the maximum size that \{ can reach.
 * @default 108
 *
 * @param FontSmallerCap:eval
 * @text \} Minimum
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc Determine the minimum size that \} can reach.
 * @default 12
 *
 * @param FontChangeValue:eval
 * @text \{ Change \}
 * @parent DefaultTextCodes
 * @type number
 * @min 1
 * @desc How much does \{ and \} change font size by?
 * @default 12
 *
 */
/* ----------------------------------------------------------------------------
 * Auto Color Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~AutoColor:
 *
 * @param DatabaseHighlighting
 * @text Database Highlighting
 *
 * @param Actors:str
 * @text Actors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Actor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Classes:str
 * @text Classes
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Class's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Skills:str
 * @text Skills
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Skill's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Items:str
 * @text Items
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Item's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Weapons:str
 * @text Weapons
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a Weapon's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Armors:str
 * @text Armors
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Armor's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param Enemies:str
 * @text Enemies
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of an Enemy's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param States:str
 * @text States
 * @parent DatabaseHighlighting
 * @type number
 * @min 0
 * @max 31
 * @desc Any usage of a State's name is given this text color.
 * Use 0 to not auto-color.
 * @default 0
 *
 * @param WordHighlighting
 * @text Word Highlighting
 *
 * @param TextColor1:arraystr
 * @text \C[1]: Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor2:arraystr
 * @text \C[2]: Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor3:arraystr
 * @text \C[3]: Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor4:arraystr
 * @text \C[4]: Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor5:arraystr
 * @text \C[5]: Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor6:arraystr
 * @text \C[6]: Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor7:arraystr
 * @text \C[7]: Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor8:arraystr
 * @text \C[8]: Light Gray
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor9:arraystr
 * @text \C[9]: Dark Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor10:arraystr
 * @text \C[10]: Dark Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor11:arraystr
 * @text \C[11]: Dark Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor12:arraystr
 * @text \C[12]: Dark Sky Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor13:arraystr
 * @text \C[13]: Dark Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor14:arraystr
 * @text \C[14]: Solid Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor15:arraystr
 * @text \C[15]: Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor16:arraystr
 * @text \C[16]: System Blue
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor17:arraystr
 * @text \C[17]: Crisis Yellow
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor18:arraystr
 * @text \C[18]: Dead Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor19:arraystr
 * @text \C[19]: Outline Black
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor20:arraystr
 * @text \C[20]: HP Orange 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor21:arraystr
 * @text \C[21]: HP Orange 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor22:arraystr
 * @text \C[22]: MP Blue 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor23:arraystr
 * @text \C[23]: MP Blue 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor24:arraystr
 * @text \C[24]: Param Up Green
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor25:arraystr
 * @text \C[25]: Param Down Red
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor26:arraystr
 * @text \C[26]: System Purple
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor27:arraystr
 * @text \C[27]: System Pink
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor28:arraystr
 * @text \C[28]: TP Green 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor29:arraystr
 * @text \C[29]: TP Green 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor30:arraystr
 * @text \C[30]: EXP Purple 1
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 * @param TextColor31:arraystr
 * @text \C[31]: EXP Purple 2
 * @parent WordHighlighting
 * @type string[]
 * @desc A list of all the words that will be automatically colored with this text color.
 * @default []
 *
 */
/* ----------------------------------------------------------------------------
 * Custom Font Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~CustomFont:
 *
 * @param FontFamily:str
 * @text Font Family
 * @desc This will be what's used by RPG Maker MZ and plugins to
 * reference this specific font. NO filename extensions!
 * @default Unnamed
 *
 * @param Filename:str
 * @text Filename
 * @desc What is the filename of the font you would like to use?
 * Located inside the project's "fonts" folder.
 * @default Unnamed.ttf
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Actions
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeAction:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param CommonEvent:num
 * @text Common Event
 * @type common_event
 * @desc Select a common event to run when this text code is used in a message.
 * @default 0
 *
 * @param ActionJS:func
 * @text JS: Action
 * @type note
 * @desc JavaScript code used to perform an action when this text code appears.
 * @default "const textState = arguments[0];"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Code Replacements
 * ----------------------------------------------------------------------------
 */
/*~struct~TextCodeReplace:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this text code to work.
 * @default Key
 *
 * @param Type:str
 * @text Type
 * @type select
 * @option none
 * @value 
 * @option [x] (number)
 * @value \[(\d+)\]
 * @option <x> (string)
 * @value \<(.*?)\>
 * @desc The type of parameter to obtain (none, number, or string).
 * @default 
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The text that will appear if this match appears.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this match appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Text Macro
 * ----------------------------------------------------------------------------
 */
/*~struct~TextMacro:
 *
 * @param Match:str
 * @text Match
 * @desc This is what needs to be matched in order for this macro to work.
 * @default Key
 *
 * @param TextStr:str
 * @text STR: Text
 * @desc The replacement text that will appear from the macro.
 * If this has a value, ignore the JS: Text version.
 * @default Undefined
 *
 * @param TextJS:func
 * @text JS: Text
 * @type note
 * @desc JavaScript code used to determine the text that will appear if this macro appears.
 * @default "return 'Text';"
 *
 */
/* ----------------------------------------------------------------------------
 * Localization Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Localization:
 *
 * @param Main
 * @text Main Settings
 *
 * @param Enable:eval
 * @text Enable Switching?
 * @parent Main
 * @type boolean
 * @on Enable
 * @off Don't
 * @desc Enable language switching settings for this plugin?
 * @default false
 *
 * @param CsvFilename:str
 * @text CSV Filename
 * @parent Main
 * @desc What is the filename of the CSV file to read from?
 * Located within the project's /data/ folder.
 * @default Languages.csv
 *
 * @param Options
 * @text Options
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Language' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @parent Options
 * @desc Command name of the option.
 * @default Text Language
 *
 * @param Localized
 * @text Languages
 *
 * @param DefaultLocale:str
 * @text Default Language
 * @parent Localized
 * @type select
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What is the default language used for this game?
 * @default English
 *
 * @param Languages:arraystr
 * @text Supported Languages
 * @parent Localized
 * @type select[]
 * @option Bengali
 * @option Chinese(Simplified)
 * @option Chinese(Traditional)
 * @option Czech
 * @option Danish
 * @option Dutch
 * @option English
 * @option Finnish
 * @option French
 * @option German
 * @option Greek
 * @option Hindi
 * @option Hungarian
 * @option Indonesian
 * @option Italian
 * @option Japanese
 * @option Korean
 * @option Norwegian
 * @option Polish
 * @option Portuguese
 * @option Romanian
 * @option Russian
 * @option Slovak
 * @option Spanish
 * @option Swedish
 * @option Tamil
 * @option Thai
 * @option Turkish
 * @desc What are all the supported languages supported by this
 * game's script? Remove any that aren't translated.
 * @default ["Bengali","Chinese(Simplified)","Chinese(Traditional)","Czech","Danish","Dutch","English","Finnish","French","German","Greek","Hindi","Hungarian","Indonesian","Italian","Japanese","Korean","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Spanish","Swedish","Tamil","Thai","Turkish"]
 *
 * @param LangNames
 * @text Language Names
 *
 * @param Bengali:str
 * @text Bengali
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default বাংলা
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 简体中文
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 繁體中文
 * 
 * @param Czech:str
 * @text Czech
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Čeština
 * 
 * @param Danish:str
 * @text Danish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Dansk
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Nederlands
 * 
 * @param English:str
 * @text English
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default English
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Suomi
 * 
 * @param French:str
 * @text French
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Français
 * 
 * @param German:str
 * @text German
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Deutsch
 * 
 * @param Greek:str
 * @text Greek
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Ελληνικά
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default हिन्दी
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Magyar
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Bahasa Indo
 * 
 * @param Italian:str
 * @text Italian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Italiano
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 日本語
 * 
 * @param Korean:str
 * @text Korean
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default 한국어
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Norsk
 * 
 * @param Polish:str
 * @text Polish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Polski
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Português
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Română
 * 
 * @param Russian:str
 * @text Russian
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Русский
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Slovenčina
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Español
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Svenska
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default தமிழ்
 * 
 * @param Thai:str
 * @text Thai
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default ไทย
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent LangNames
 * @desc How does this language appear in the in-game options?
 * @default Türkçe
 *
 */
/* ----------------------------------------------------------------------------
 * Language Fonts Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageFonts:
 *
 * @param Bengali:str
 * @text Bengali
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Czech:str
 * @text Czech
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Danish:str
 * @text Danish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Dutch:str
 * @text Dutch
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param English:str
 * @text English
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Finnish:str
 * @text Finnish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param French:str
 * @text French
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param German:str
 * @text German
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Greek:str
 * @text Greek
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hindi:str
 * @text Hindi
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Italian:str
 * @text Italian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Japanese:str
 * @text Japanese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Korean:str
 * @text Korean
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Polish:str
 * @text Polish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Romanian:str
 * @text Romanian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Russian:str
 * @text Russian
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Slovak:str
 * @text Slovak
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Spanish:str
 * @text Spanish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Swedish:str
 * @text Swedish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Tamil:str
 * @text Tamil
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Thai:str
 * @text Thai
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 * 
 * @param Turkish:str
 * @text Turkish
 * @desc What font face is used for this language?
 * Make sure it is registered under Custom Font Manager.
 * @default rmmz-mainfont
 *
 */
/* ----------------------------------------------------------------------------
 * Language Images Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~LanguageImages:
 *
 * @param ConvertDefault:eval
 * @text Convert Default?
 * @type boolean
 * @on Convert
 * @off Don't
 * @desc ON: Default language uses converted marker.
 * OFF: Default languages uses [XX] as marker.
 * @default false
 *
 * @param Languages
 * @text Languages
 *
 * @param Bengali:str
 * @text Bengali
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Simplified):str
 * @text Chinese (Simplified)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Chinese(Traditional):str
 * @text Chinese (Traditional)
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Czech:str
 * @text Czech
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Danish:str
 * @text Danish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Dutch:str
 * @text Dutch
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param English:str
 * @text English
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Finnish:str
 * @text Finnish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param French:str
 * @text French
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param German:str
 * @text German
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Greek:str
 * @text Greek
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hindi:str
 * @text Hindi
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Hungarian:str
 * @text Hungarian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Indonesian:str
 * @text Indonesian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Italian:str
 * @text Italian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Japanese:str
 * @text Japanese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Korean:str
 * @text Korean
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Norwegian:str
 * @text Norwegian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Polish:str
 * @text Polish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Portuguese:str
 * @text Portuguese
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Romanian:str
 * @text Romanian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Russian:str
 * @text Russian
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Slovak:str
 * @text Slovak
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Spanish:str
 * @text Spanish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Swedish:str
 * @text Swedish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Tamil:str
 * @text Tamil
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Thai:str
 * @text Thai
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 * 
 * @param Turkish:str
 * @text Turkish
 * @parent Languages
 * @desc This text will replace [XX] with in image folder names
 * and filenames when this language is selected.
 * @default [XX]
 *
 */
/* ----------------------------------------------------------------------------
 * Text Speed Options Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~TextSpeed:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the 'Text Speed' option to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param Name:str
 * @text Option Name
 * @desc Command name of the option.
 * @default Text Speed
 *
 * @param Default:num
 * @text Default Value
 * @type number
 * @min 1
 * @max 11
 * @desc 1 - 10, slowest to fastest.
 * 11 is instant value.
 * @default 10
 *
 * @param Instant:str
 * @text Instant Speed
 * @desc Text to show "instant" text.
 * @default Instant
 *
 */
/* ----------------------------------------------------------------------------
 * Word Wrap Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~WordWrap:
 *
 * @param EnableWordWrap
 * @text Enable Word Wrap
 *
 * @param MessageWindow:eval
 * @text Message Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param HelpWindow:eval
 * @text Help Window
 * @parent EnableWordWrap
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Automatically enable Word Wrap for this window?
 * @default false
 *
 * @param Rules
 * @text Rules
 *
 * @param LineBreakSpace:eval
 * @text Link Break -> Space
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Convert manually placed (non tagged) line breaks with spaces?
 * @default true
 *
 * @param TightWrap:eval
 * @text Tight Wrap
 * @parent Rules
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc If a face graphic is present in a message, word wrap will be tighter.
 * @default false
 *
 * @param EndPadding:num
 * @text End Padding
 * @parent Rules
 * @type number
 * @desc Add extra padding to your window to make text wrap further away from the end of the window.
 * @default 0
 *
 */
//=============================================================================

const _0x40e911=_0xd8f1;(function(_0x1d0cee,_0x1c738a){const _0x247291=_0xd8f1,_0x32804a=_0x1d0cee();while(!![]){try{const _0x42442c=parseInt(_0x247291(0x194))/0x1*(-parseInt(_0x247291(0x2da))/0x2)+-parseInt(_0x247291(0x3c6))/0x3*(parseInt(_0x247291(0x3e9))/0x4)+parseInt(_0x247291(0x36c))/0x5*(-parseInt(_0x247291(0x2a7))/0x6)+parseInt(_0x247291(0x210))/0x7*(-parseInt(_0x247291(0x48a))/0x8)+parseInt(_0x247291(0x141))/0x9+-parseInt(_0x247291(0x282))/0xa+-parseInt(_0x247291(0x4cc))/0xb*(-parseInt(_0x247291(0x264))/0xc);if(_0x42442c===_0x1c738a)break;else _0x32804a['push'](_0x32804a['shift']());}catch(_0x2371f7){_0x32804a['push'](_0x32804a['shift']());}}}(_0x2670,0xc9d63));function _0x2670(){const _0x3d007b=['_autoPositionTarget','loadPicture','substring','isSkillTypeMatchForUse','isHelpWindowWordWrap','needsNewPage','Adiós','_list','ParseAllNotetags','requestChoiceForegroundImage','obtainGold','upleft','_pictures','ARRAYNUM','\x5c%1','_messageOffsetY','pagedown','grey','MessageWindowXyOffsets','_moveTargetX','4895225eCCPlR','SWITCHES','ARRAYFUNC','setChoiceListMaxColumns','battleActionName','show','MsgWindowOffsetX','Game_Map_updateEvents','Game_Map_setupEvents','getMessageWindowXyOffsets','registerCommand','getMessageWindowRows','Match','ParseLocalizationCsv','processFsTextCode','launchMessageCommonEvent','outputHeight','paintOpacity','_messageOffsetX','setChoiceMessageDistance','setPictureText','clampPlacementPosition','process_VisuMZ_MessageCore_AutoColor','changeVolume','itemChoiceEtypeId','convertLockColorsEscapeCharacters','Settings','\x1bC[%1]%2\x1bPREVCOLOR[0]','makeCommandListShuffle','downleft','changeChoiceBackgroundColor','Hello','windowX','Window_ItemList_drawItemNumber','width','_itemChoiceEtypeId','Window_ChoiceList_updatePlacement','lower\x20right','_lastGainedItemData','Window_Message_needsNewPage','middleright','ওহে','convertButtonAssistText','addChoiceDistance','processAutoSize','_showFast','Languages.csv','Hola','Classes','#f26c4f','upper-center','Ciao','_textColorStack','isVolumeSymbol','eraseAllPictureTexts','setupItemChoice','requestChoiceBackgroundImage','processCustomWait','parameters','_interpreter','ActorID','item','Window_Base_textSizeEx','setMessageWindowWidth','NUM','synchronizeNameBox','filename','DataManager_loadDatabase','PictureIDs','call','isPressed','Game_Party_gainItem','moveTo','boxWidth','\x1bi[%1]%2','CsvFilename','messagePositionReset','Γειά\x20σου','MaxRows','data/','CreateAutoColorFor','close','middleleft','\x1bITALIC[0]','ParseItemNotetags','lastGainedObjectName','victory','command101','itemChoiceActor','\x1bCASING[5]','210uTFnUI','_itemChoiceWtypeId','AddOption','log','isContinuePrepareShowTextCommands','வணக்கம்','ChoiceWindowMaxRows','ShuffleArray','add','preConvertEscapeCharacters','blt','fontSize','_pictureTextBuffer','min','DefaultOutlineWidth','updateXyOffsets','</CENTER>','down-right','bitmap','สวัสดี','German','callCancelHandler','exec','VisuMZ_3_ActSeqCamera','in\x20order\x20for\x20VisuMZ_1_MessageCore\x20to\x20work.','WRAPJPBREAK','</I>','getColor','yellow','makeFontBigger','maxCols','lower\x20left','StretchDimmedBg','Window_Message_newPage','Scene_Boot_onDatabaseLoaded','1264PVBsGi','round','drawBackPicture','GET','map\x20event','Filename','convertFontSettingsEscapeCharacters','quantity','Bitmap_drawTextTopAligned','setupNumInput','NonSupportedTextCodes','EachMessageStart','</B>','Would\x20you\x20like\x20the\x20plugin\x20to\x20create\x20the\x20base\x20CSV\x20file?\x0a\x0a','down-left','gradientFillRect','choiceCancelType','<LINE\x20BREAK>','Farewell','choiceListHelpWindowRect','SplitJpCnCharacters','skill','Olá','안녕히\x20가세요','ConvertTextAutoColorRegExpFriendly','choiceAlignText','Game_Screen_clearPictures','loadMessageFace','_macroBypassWordWrap','outlineWidth','FUNC','TextAlign','updateDimensions','Window_Message_processEscapeCharacter','default','createLocalizationCsvFile','process_VisuMZ_MessageCore_TextMacros','ARRAYSTRUCT','drawText','itemChoiceItypeId','hasPictureText',')))','setTextAlignment','Cześć','convertCasingEscapeCharacters','AutoColor','code','Languages','</RIGHT>','choiceDistance','down','%1,\x20does\x20not\x20support\x20attempted\x20text\x20code\x20usage.','upper\x20center','prepareForcedPositionEscapeCharacters','Items','down\x20right','isOptionValid','TextMacros','\x1bCASING[2]','Game_Map_refresh','returnPreservedFontSettings','TextJS','setupEvents','stringify','UNDEFINED!','SelectArmor','loadGameFonts','Game_System_initialize','processAutoColorWords','processCommonEvent','open','Type','RelativePXPY','Wauw','prepareShowTextFollowups','resetRect','Good-bye','_moveDuration','DISABLE','battle\x20party','lower-right','getPreservedFontSettings','statusText','Game_Party_initialize','isItem','makeItemList','setMessageWindowRows','</LEFT>','members','_textAlignment','filter','test','overrideMimeType','FontChangeValue','open\x20.\x5cdata','drawPictureTextZone','drawTextTopAligned','exit','NameBoxWindowOffsetY','clearFlags','onLocalizationXhrError','Key','\x1bITALIC[1]','every','getLastPluginCommandInterpreter','ParseArmorNotetags','isWordWrapEnabled','_maxShuffleChoices','itemBackColor1','addGeneralOptions','processFailsafeChoice','weapon','openness','setWaitMode','_itemChoiceVariableId','parseLocalizedText','process_VisuMZ_MessageCore_TextCodes_Replace','event','updateBitmap','textCodeResult','convertNewPageTextStateMacros','commandSymbol','CSV\x20file\x20has\x20not\x20been\x20made.\x0a','prototype','Game_Interpreter_setupChoices','map\x20party','PREVCOLOR','join','maxLines','_textCasing','Wow','rtl','DefaultLocale','maxShuffleChoices','map\x20player','_moveTargetHeight','JSON','_scriptCall','start','resizePictureText','updateTransform','Game_Map_initialize','processMessageCoreEscapeActions','onChoice','Turkish','#fbaf5d','[XX]','Please\x20restart\x20the\x20game.','addCommand','maxChoiceWidth','obtainEscapeString','\x1bCOLORLOCK[1]','isVisuMzLocalizationEnabled','ParseSkillNotetags','setLastGainedItemData','_forcedPosition','attachPictureText','setPictureTextBuffer','Skills','updateForcedPlacement','replace','8UgxHnm','levelUp','isBreakShowTextCommands','getChoiceListMaxRows','dirname','Wah','EVAL','TextCodeActions','registerResetRect','command357','activate','name','makeFontSmaller','#acacac','postFlushTextState','autoPositionOffsetX','</WORDWRAP>','applyMoveEasing','பிரியாவிடை','ConvertParams','_choiceIndexArray','updateBackground','drawChoiceLocationImage','setChoiceListMinChoiceWidth','Width','\x1bCASING[0]','messageWordWrap','_pictureTextRefresh','convertVariableEscapeCharacters','setChoiceListTextAlign','updateEvents','addMessageCoreLocalizationCommand','addedWidth','messageWindowRect','parse','loadCustomFontsMessageCore','_commonEventId','Actors','_textDelay','processPyTextCode','onDatabaseLoaded','La\x20revedere','anchorPictureText','Αντίο','\x1bWrapJpBreak[0]','type','padding','defeat','\x1bI[%1]','setWeaponChoice','#c69c6d','windowWidth','MessageWindow','isPlaytest','applyDatabaseAutoColor','left','_choices','resetWordWrap','Window_MessageLog','_itemChoiceItypeId','Tot\x20ziens','BOLD','textSpeed','VisuMZ_4_ExtraEnemyDrops\x20needs\x20to\x20be\x20updated\x20','purple','_MessageCoreSettings','6015933zlOlFQ','Uau','[0]','fontBold','Window_Base_processNewLine','_autoColorActorNames','iconIndex','requestPictureTextRefresh','Weapons','#6dcff6','ParseWeaponNotetags','floor','true','dimColor2','application/csv','Swedish','updateMove','Enemies','Window_Message_updatePlacement','Japanese','_subject','বিদায়','height','postConvertEscapeCharacters','isTriggered','textWidth','onerror','isInputting','path','visible','trim','textSizeEx','_choiceListHelpWindow','currentCommand','anchor','getChoiceMessageDistance','midleft','_colorLock','messageCoreLocalization','Slovak','scale','format','applyChoiceHelpDescriptions','_textMacroFound','resetFontSettings','_texts','selectDefault','States','#ffffff','actorSlotName','Scene_Options_maxCommands','WAIT','buffer','processActorNameAutoColorChanges','createContents','General','\x1bCASING[4]','parseChoiceText','obtainItem','Arrivederci','updateHelp','updateMessageCommonEvents','choiceTextAlign','messageWidth','_autoSizeRegexp','TEXTALIGNMENT','instantTextSpeed','updateAutoPosition','WRAPBREAK','clearActorNameAutoColor','includes','PictureTextRefresh','itemChoiceStypeId','requestPictureTextRefreshAll','advanced','battleTargetName','setMessageWindowWordWrap','Hej','processPreviousColor','textSizeExWordWrap','Window_Message_clearFlags','14482107zRlvBu','upperleft','partyMemberName','MessageRows','choices','_itemChoiceActorId','child_process','prepareShowTextPluginCommandFollowups','_choiceCancelType','isSkill','NameBoxWindowOffsetX','isAutoColorAffected','deactivate','isSceneBattle','EquipTypeID','Sprite_Picture_updateBitmap','_pictureTextCache','Window_Base_processEscapeCharacter','ParseClassNotetags','textFont','Rows','shift','drawSkillCost','updateOffsetPosition','getLanguageAt','easeIn','ParseEnemyNotetags','setHelpWindowWordWrap','getPictureTextBuffer','messageCoreWindowX','addContinuousShowTextCommands','ChoiceWindowMinWidth','startY','Window_Options_statusText','enabled','obtainExp','getRandomTextFromPool','WORD_WRAP_PADDING','gray','Default','Window_Options_isVolumeSymbol','Window_NameBox_refresh','itemChoiceActorId','<WORDWRAP>','upperright','textColor','nextEventCode','etypeId','onNewPageMessageCore','version','STR','outlineColor','_centerMessageWindow','lower-left','right','ConfigManager_makeData','STRUCT','convertTextMacros','outLineColor','battleUserName','MESSAGE_CORE_PLUGIN_NAME','_choiceListWindow','_itemChoiceStypeId','followers','itemChoiceWtypeId','_relativePosition','indent','innerWidth','Привет','setSkillChoice','CustomFonts','callOkHandler','processPxTextCode','ActionJS','openLocalizationFolder','<RIGHT>','createChoiceListHelpWindow','faceWidth','Localization','French','drawItemContents','onLocalizationXhrLoad','upper\x20right','1wSEEph','commandName','Salut','move','LanguageFonts','\x1bTEXTALIGNMENT[1]','drawTextEx','ARRAYSTR','list','drawing','You\x20do\x20not\x20have\x20a\x20language\x20CSV\x20set\x20up.\x0a','textCodeCheck','getLastGainedItemData','fontItalic','lowerright','blue','getConfigValue','unnamed','drawPictureText','#ffc8e0','clearCommandList','startWait','initialize','down\x20center','getPictureTextData','upper\x20left','onProcessCharacter','message','Hei','boxHeight','Game_Interpreter_PluginCommand','process_VisuMZ_MessageCore_TextCodes_Action','contents','moveBy','SortObjectByKeyLength','addExtraShowChoices','#7cc576','Merhaba','getTextAlignment','choiceIndexArray','isWeapon','index','placeCancelButton','_index','ParseStateNotetags','Window_ChoiceList_windowX','systemColor','adjustShowChoiceExtension','zoomScale','_moveEasingType','TextSpeed','ParseAddedText','addedHeight','actor','convertBackslashCharacters','_scene','itemRectWithPadding','setChoices','addWindow','English','status','mainFontFace','SHOW','Finnish','convertChoiceMacros','findTargetSprite','_pictureText','_currentAutoSize','_moveTargetY','violet','convertHardcodedEscapeReplacements','windowPadding','processWrapBreak','FontSmallerCap','itemChoiceAtypeId','안녕하세요','prepareAutoSizeEscapeCharacters','Sbohem','_moveTargetWidth','processFontChangeItalic','\x1bCOLORLOCK[0]','Window_ChoiceList_callCancelHandler','map\x20actor','Ha\x20det','MessageWindowProperties','<I>','changeValue','_action','Hejdå','String_format','contentsHeight','makeCommandList','random','CENTERPICTURE','getChoiceListMinChoiceWidth','ஆஹா','isRTL','addContinuousShowChoices','outputWidth','getLanguageName','updateRelativePosition','setupChoices','Tamil','VisuMZ_1_EventsMoveCore','start\x20.\x5cdata','getLocalizedText','switchOutTextForLocalization','CSV\x20file\x20cannot\x20be\x20created.\x0aPlease\x20enter\x20Playtest\x20mode.\x0a','lowerleft','Chinese(Traditional)','push','load','Vau','stretchDimmerSprite','updatePictureText','processTextAlignmentChange','atypeId','createTextState','CreateAutoColorRegExpLists','VisuMZ_0_CoreEngine','ANY','Window_Options_addGeneralOptions','SkillTypeID','processCharacter','280483YbvQDa','return\x20\x27','setup','Window_ChoiceList','Au\x20revoir','match','loadLocalization','Auf\x20Wiedersehen','isColorLocked','return\x200','processEscapeCharacter','convertMessageCoreEscapeReplacements','description','midright','_spriteset','lower\x20center','setMessageWindowXyOffsets','contentsBack','Window_Base_initialize','<%1>','initTextAlignement','COLORLOCK','resetTextColor','addMessageCoreTextSpeedCommand','Window_NameBox_updatePlacement','itemRect','maxCommands','AddAutoColor','FontBiggerCap','Undefined','helpWordWrap','Polish','isClosed','_messagePositionReset','setWordWrap','Korean','_helpWindow','Enable','_choiceHelpDescriptions','constructor','faceName','calcMoveEasing','setSpeakerName','addWrapBreakAfterPunctuation','drawMessageFace','normalColor','isChoiceWindow','itemPadding','_lastAltCase','processFontChangeBold','needsPictureTextRefresh','ArmorTypeID','_messageCommonEvents','midcenter','PictureTextErase','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','CSV\x20file\x20is\x20now\x20created\x20and\x20stored\x20in\x20data\x20folder.\x0a','getChoiceListTextAlign','Szia','COMMONEVENT','getInputButtonString','getChoiceListLineHeight','yes','Window_Base_update','_data','ConfigManager_applyData','inputtingAction','Window_Command_addCommand','updateNameBoxMove','battle\x20enemy','processTextAlignmentX','getChoiceIndent','defaultColor','MinWidth','obtainEscapeParam','<B>','setRelativePosition','drawBackCenteredPicture','makeDeepCopy','こんにちは','Window_Options_changeVolume','choiceLineHeight','setTextDelay','_itemChoiceAtypeId','60gEArPe','SelectSkill','WeaponTypeID','escapeStart','registerActorNameAutoColorChanges','updateOverlappingY','ChoiceWindowTextAlign','isCommandEnabled','white','mainFontSize','_lastPluginCommandInterpreter','messageRows','isMessageWindowWordWrap','convertTextAlignmentEscapeCharacters','calcWindowHeight','center','Game_System_mainFontFace','realPictureId','follower','textSizeExTextAlignment','loadBitmap','setArmorChoice','addLoadListener','Game_Message_setChoices','initMessageCore','max','clear','choicePositionType','slice','black','9786490ICHAwu','Window_Base_processAllText','WordWrap','up\x20center','convertButtonAssistEscapeCharacters','getPictureText','easeInOut','isArmor','isOpen','refreshDimmerBitmap','choice','terminateMessage','<COLORLOCK>','erasePicture','map','addMessageCommonEvent','battle\x20actor','currentExt','processControlCharacter','getStartingChoiceWidth','remove','split','_target','down-center','হ্যালো','setColorLock','\x1bCASING[1]','ChoiceWindowDistance','TextStr','newPage','MessageTextDelay','drawItemNumber','up-left','ChoiceWindowProperties','EndPadding','isSceneMap','_wholeMoveDuration','6BbZOki','clearRect','_targets','adjustShowChoiceCancel','clearAllPictureTexts','#707070','Viszontlátásra','randomInt','changeVisuMzTextLocale','unshift','anyPictureTextChanges','lineHeight','changeTextColor','processAllText','choiceRows','Hallo','_autoSizeCheck','Window_Help_refresh','_textDelayCount','equipSlots','makeData','textSizeExRaw','Czech','#fff799','autoPositionOffsetY','Dutch','visuMzTextLocaleStatusText','setLastPluginCommandInterpreter','convertShowChoiceEscapeCodes','_eventId','actorName','_pictureId','armor','Do\x20widzenia','down\x20left','_textCasingUpperState','Window_Base_changeTextColor','startX','_wordWrap','Danish','Scene_Message_createChoiceListWindow','AutoColorBypassList','sort','changeTextSpeed','processTextCasing','processNewLine','some','_resetRect','Zbohom','FontFamily','\x1bWrapBreak[0]','2994064UayBpT','updatePlacement','textLocale','lowercenter','<CENTER>','processColorLock','setPositionType','getMessageWindowWidth','lower-center','setChoiceListMaxRows','ARRAYEVAL','_positionType','update','さようなら','isChoiceVisible','choiceCols','Guau','setupShuffleChoices','Halo','processDrawCenteredPicture','\x1bTEXTALIGNMENT','</COLORLOCK>','drawCustomBackgroundColor','orange','createChoiceListWindow','erasePictureTextBuffer','lastGainedObjectIcon','send','addChildAt','setChoiceListLineHeight','Indonesian','clearChoiceHelpDescriptions','Näkemiin','red','TextColor%1','ExtraEnemyDrops','_pictureTextSprite','ceil','messageCoreTextSpeed','hide','Вау','_nameBoxWindow','VariableID','TextCodeReplace','clearPictureTextRefresh','_pictureTextWindow','text','powerUpColor','forEach','processDrawPicture','Armors','Farvel','setText','onload','none','value','Window_Message_synchronizeNameBox','itemHeight','Window_Message_terminateMessage','centered','_pictureTextHeight','drawItem','loadDatabase','processStoredAutoColorChanges','AutoColorRegExp','Bitmap_drawText','canMove','toLowerCase','SelectWeapon','convertBaseEscapeCharacters','registerSelfEvent','\x1bTEXTALIGNMENT[0]','MsgWindowOffsetY','Adeus','itemBackColor2','middlecenter','skills','ImageManager_loadBitmap','convertMessageCoreEscapeActions','indexOf','updateAutoSizePosition','processAutoPosition','_messageWindow','bind','flushTextState','createPictureText','emerge','\x1bBOLD[1]','prepareWordWrapEscapeCharacters','clamp','lastGainedObjectQuantity','setChoiceListHelpWindow','\x1bTEXTALIGNMENT[2]','preemptive','changeOutlineColor','makeCommandListScriptCall','fontFace','Waouh','databaseObjectName','Selamat\x20tinggal','strokeRect','Distance','getChoiceListMaxColumns','Ahoj','prepareShowTextCommand','CheckCompatibility','toUpperCase','_dimmerSprite','NameBoxWindowDefaultColor','length','MessageCore','_pictureTextWidth','CreateAutoColorRegExpListEntries','refresh','upcenter','Vay','Game_Screen_erasePicture','substr','Scene_Boot_loadGameFonts','ChoiceWindowLineHeight','makeSkillList','_indent','<LEFT>','LineHeight','Greek','isChoiceEnabled'];_0x2670=function(){return _0x3d007b;};return _0x2670();}var label=_0x40e911(0x348),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x40e911(0x443)](function(_0x5b2634){const _0x489cb3=_0x40e911;return _0x5b2634[_0x489cb3(0x1d0)]&&_0x5b2634[_0x489cb3(0x21c)][_0x489cb3(0x136)]('['+label+']');})[0x0];function _0xd8f1(_0x9ce38c,_0x54a46b){const _0x2670e6=_0x2670();return _0xd8f1=function(_0xd8f1ac,_0x114d60){_0xd8f1ac=_0xd8f1ac-0x107;let _0x87a2e3=_0x2670e6[_0xd8f1ac];return _0x87a2e3;},_0xd8f1(_0x9ce38c,_0x54a46b);}VisuMZ[label][_0x40e911(0x386)]=VisuMZ[label][_0x40e911(0x386)]||{},VisuMZ[_0x40e911(0x49d)]=function(_0xa5ce7,_0x1484a1){const _0x55b5f2=_0x40e911;for(const _0x1334bc in _0x1484a1){if(_0x1334bc[_0x55b5f2(0x215)](/(.*):(.*)/i)){const _0xac92cf=String(RegExp['$1']),_0x28d50c=String(RegExp['$2'])['toUpperCase']()[_0x55b5f2(0x10e)]();let _0x126661,_0xf72c37,_0x3cd4a2;switch(_0x28d50c){case _0x55b5f2(0x3ac):_0x126661=_0x1484a1[_0x1334bc]!==''?Number(_0x1484a1[_0x1334bc]):0x0;break;case _0x55b5f2(0x365):_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37[_0x55b5f2(0x290)](_0x3cea95=>Number(_0x3cea95));break;case _0x55b5f2(0x490):_0x126661=_0x1484a1[_0x1334bc]!==''?eval(_0x1484a1[_0x1334bc]):null;break;case _0x55b5f2(0x2e4):_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37[_0x55b5f2(0x290)](_0x1413c7=>eval(_0x1413c7));break;case _0x55b5f2(0x471):_0x126661=_0x1484a1[_0x1334bc]!==''?JSON['parse'](_0x1484a1[_0x1334bc]):'';break;case'ARRAYJSON':_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON['parse'](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37[_0x55b5f2(0x290)](_0x35fd99=>JSON[_0x55b5f2(0x4ac)](_0x35fd99));break;case _0x55b5f2(0x407):_0x126661=_0x1484a1[_0x1334bc]!==''?new Function(JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc])):new Function(_0x55b5f2(0x219));break;case _0x55b5f2(0x36e):_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37['map'](_0x4f2963=>new Function(JSON['parse'](_0x4f2963)));break;case _0x55b5f2(0x173):_0x126661=_0x1484a1[_0x1334bc]!==''?String(_0x1484a1[_0x1334bc]):'';break;case _0x55b5f2(0x19b):_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37[_0x55b5f2(0x290)](_0x48e3f5=>String(_0x48e3f5));break;case _0x55b5f2(0x179):_0x3cd4a2=_0x1484a1[_0x1334bc]!==''?JSON[_0x55b5f2(0x4ac)](_0x1484a1[_0x1334bc]):{},_0xa5ce7[_0xac92cf]={},VisuMZ[_0x55b5f2(0x49d)](_0xa5ce7[_0xac92cf],_0x3cd4a2);continue;case _0x55b5f2(0x40e):_0xf72c37=_0x1484a1[_0x1334bc]!==''?JSON['parse'](_0x1484a1[_0x1334bc]):[],_0x126661=_0xf72c37[_0x55b5f2(0x290)](_0x5e8136=>VisuMZ[_0x55b5f2(0x49d)]({},JSON[_0x55b5f2(0x4ac)](_0x5e8136)));break;default:continue;}_0xa5ce7[_0xac92cf]=_0x126661;}}return _0xa5ce7;},(_0x42c5d9=>{const _0x165331=_0x40e911,_0x4a1f6e=_0x42c5d9[_0x165331(0x495)];for(const _0x303a14 of dependencies){if(!Imported[_0x303a14]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'['format'](_0x4a1f6e,_0x303a14)),SceneManager[_0x165331(0x44a)]();break;}}const _0x2c6b30=_0x42c5d9[_0x165331(0x21c)];if(_0x2c6b30[_0x165331(0x215)](/\[Version[ ](.*?)\]/i)){const _0x2e5509=Number(RegExp['$1']);_0x2e5509!==VisuMZ[label][_0x165331(0x172)]&&(alert(_0x165331(0x247)[_0x165331(0x119)](_0x4a1f6e,_0x2e5509)),SceneManager[_0x165331(0x44a)]());}if(_0x2c6b30['match'](/\[Tier[ ](\d+)\]/i)){const _0x53814c=Number(RegExp['$1']);_0x53814c<tier?(alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'['format'](_0x4a1f6e,_0x53814c,tier)),SceneManager[_0x165331(0x44a)]()):tier=Math[_0x165331(0x27d)](_0x53814c,tier);}VisuMZ['ConvertParams'](VisuMZ[label]['Settings'],_0x42c5d9[_0x165331(0x3a6)]);})(pluginData),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x29d),_0x5cde7f=>{const _0x425120=_0x40e911;VisuMZ[_0x425120(0x49d)](_0x5cde7f,_0x5cde7f);const _0x94bc1c=Number(_0x5cde7f[_0x425120(0x33f)])||0x0;$gameSystem[_0x425120(0x37f)](_0x94bc1c);}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x2a3),_0x592d4d=>{const _0x4d2fcc=_0x40e911;VisuMZ[_0x4d2fcc(0x49d)](_0x592d4d,_0x592d4d);const _0x145aa1=_0x592d4d[_0x4d2fcc(0x355)]||$gameSystem[_0x4d2fcc(0x24d)]()||0x1,_0x5cfe8b=_0x592d4d[_0x4d2fcc(0x259)]??0x60,_0x4ff6e9=_0x592d4d[_0x4d2fcc(0x3ba)]||$gameSystem['getChoiceListMaxRows']()||0x1,_0x141a8c=_0x592d4d['MaxCols']||$gameSystem[_0x4d2fcc(0x340)]()||0x1,_0x6cae29=_0x592d4d[_0x4d2fcc(0x408)][_0x4d2fcc(0x31d)]()||'default';$gameSystem[_0x4d2fcc(0x2f7)](_0x145aa1),$gameSystem[_0x4d2fcc(0x4a1)](_0x5cfe8b),$gameSystem[_0x4d2fcc(0x2e3)](_0x4ff6e9),$gameSystem['setChoiceListMaxColumns'](_0x141a8c),$gameSystem['setChoiceListTextAlign'](_0x6cae29);}),PluginManager[_0x40e911(0x376)](pluginData['name'],_0x40e911(0x1e8),_0x2ee5ad=>{const _0x327c7b=_0x40e911;VisuMZ['ConvertParams'](_0x2ee5ad,_0x2ee5ad);const _0x218ddc=_0x2ee5ad[_0x327c7b(0x155)]||$gameSystem[_0x327c7b(0x377)]()||0x1,_0x36eb09=_0x2ee5ad[_0x327c7b(0x4a2)]||$gameSystem[_0x327c7b(0x2e1)]()||0x1;$gameTemp['_centerMessageWindow']=!![];const _0x9b8606=_0x2ee5ad[_0x327c7b(0x284)]['toLowerCase']();$gameSystem[_0x327c7b(0x43f)](_0x218ddc),$gameSystem['setMessageWindowWidth'](_0x36eb09);[_0x327c7b(0x4d8),'false'][_0x327c7b(0x136)](_0x9b8606)&&$gameSystem['setMessageWindowWordWrap'](eval(_0x9b8606));const _0x5399f4=SceneManager[_0x327c7b(0x1cb)][_0x327c7b(0x32c)];_0x5399f4&&(_0x5399f4[_0x327c7b(0x4c3)](),_0x5399f4[_0x327c7b(0x409)](),_0x5399f4[_0x327c7b(0x126)]());}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x36a),_0x447d8a=>{const _0x23300c=_0x40e911;VisuMZ[_0x23300c(0x49d)](_0x447d8a,_0x447d8a),$gameSystem[_0x23300c(0x220)](_0x447d8a['OffsetX'],_0x447d8a['OffsetY']);const _0x2d7651=SceneManager[_0x23300c(0x1cb)][_0x23300c(0x32c)];_0x2d7651&&(_0x2d7651[_0x23300c(0x4c3)](),_0x2d7651[_0x23300c(0x409)](),_0x2d7651['createContents']());}),PluginManager['registerCommand'](pluginData['name'],'SelectWeapon',_0x472138=>{const _0x2dd625=_0x40e911;VisuMZ['ConvertParams'](_0x472138,_0x472138),$gameMessage[_0x2dd625(0x4bb)](_0x472138[_0x2dd625(0x304)]||0x0,_0x472138[_0x2dd625(0x266)]||0x0);const _0x4b9665=$gameTemp['getLastPluginCommandInterpreter']();if(_0x4b9665)_0x4b9665[_0x2dd625(0x45a)](_0x2dd625(0x1af));}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x42a),_0x181ee0=>{const _0x10d00b=_0x40e911;VisuMZ[_0x10d00b(0x49d)](_0x181ee0,_0x181ee0),$gameMessage[_0x10d00b(0x279)](_0x181ee0[_0x10d00b(0x304)]||0x0,_0x181ee0[_0x10d00b(0x243)]||0x0,_0x181ee0[_0x10d00b(0x14f)]||0x0);const _0x2a93f4=$gameTemp[_0x10d00b(0x451)]();if(_0x2a93f4)_0x2a93f4['setWaitMode'](_0x10d00b(0x1af));}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x265),_0x400fc5=>{const _0x32fe6f=_0x40e911;VisuMZ[_0x32fe6f(0x49d)](_0x400fc5,_0x400fc5),$gameMessage['setSkillChoice'](_0x400fc5[_0x32fe6f(0x304)]||0x0,_0x400fc5[_0x32fe6f(0x3a8)]||0x0,_0x400fc5[_0x32fe6f(0x20e)]||0x0);const _0x4ff3c9=$gameTemp[_0x32fe6f(0x451)]();if(_0x4ff3c9)_0x4ff3c9[_0x32fe6f(0x45a)](_0x32fe6f(0x1af));}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],'PictureTextChange',_0x2adbf2=>{const _0x19d4bb=_0x40e911;VisuMZ[_0x19d4bb(0x49d)](_0x2adbf2,_0x2adbf2);const _0x107e01=_0x2adbf2[_0x19d4bb(0x3b0)]||[],_0x3229fd=_0x2adbf2['Padding']||0x0,_0x1dfba0=[_0x19d4bb(0x142),'up',_0x19d4bb(0x16d),'left',_0x19d4bb(0x273),'right',_0x19d4bb(0x200),_0x19d4bb(0x41b),'lowerright'];for(const _0x299f78 of _0x107e01){$gameScreen[_0x19d4bb(0x486)](_0x299f78,_0x3229fd);for(const _0x1e979c of _0x1dfba0){if(_0x2adbf2[_0x1e979c]===undefined)continue;$gameScreen[_0x19d4bb(0x380)](_0x299f78,_0x2adbf2[_0x1e979c],_0x1e979c);}}}),PluginManager['registerCommand'](pluginData[_0x40e911(0x495)],_0x40e911(0x246),_0x2e58ed=>{const _0x4a5ebd=_0x40e911;VisuMZ[_0x4a5ebd(0x49d)](_0x2e58ed,_0x2e58ed);const _0x23bff8=_0x2e58ed[_0x4a5ebd(0x3b0)]||[];for(const _0x1b6b5b of _0x23bff8){$gameScreen[_0x4a5ebd(0x3a2)](_0x1b6b5b),$gameScreen[_0x4a5ebd(0x2f3)](_0x1b6b5b);}}),PluginManager[_0x40e911(0x376)](pluginData[_0x40e911(0x495)],_0x40e911(0x137),_0x35e969=>{const _0xd65e76=_0x40e911;$gameScreen[_0xd65e76(0x139)]();}),VisuMZ[_0x40e911(0x348)][_0x40e911(0x3e8)]=Scene_Boot['prototype'][_0x40e911(0x4b2)],Scene_Boot[_0x40e911(0x464)][_0x40e911(0x4b2)]=function(){const _0x595535=_0x40e911;VisuMZ['MessageCore']['Scene_Boot_onDatabaseLoaded'][_0x595535(0x3b1)](this),VisuMZ['MessageCore'][_0x595535(0x343)](),this[_0x595535(0x1b3)](),this[_0x595535(0x45d)](),this[_0x595535(0x40d)](),this[_0x595535(0x382)]();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x343)]=function(){const _0x467c39=_0x40e911;if(Imported['VisuMZ_4_ExtraEnemyDrops']&&VisuMZ[_0x467c39(0x2fd)][_0x467c39(0x172)]<1.09){let _0x180d69='';_0x180d69+=_0x467c39(0x4c9),_0x180d69+=_0x467c39(0x3de),alert(_0x180d69),SceneManager[_0x467c39(0x44a)]();}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x1b6)]=function(_0x333371){const _0x349b8e=_0x40e911,_0x5bd310=VisuMZ[_0x349b8e(0x348)][_0x349b8e(0x386)][_0x333371];_0x5bd310[_0x349b8e(0x2d1)]((_0x4997e7,_0x3a8d0f)=>{const _0x2e86c5=_0x349b8e;if(!_0x4997e7||!_0x3a8d0f)return-0x1;return _0x3a8d0f[_0x2e86c5(0x378)][_0x2e86c5(0x347)]-_0x4997e7[_0x2e86c5(0x378)][_0x2e86c5(0x347)];});},Scene_Boot[_0x40e911(0x464)][_0x40e911(0x1b3)]=function(){const _0x34b4e2=_0x40e911;VisuMZ[_0x34b4e2(0x348)][_0x34b4e2(0x1b6)](_0x34b4e2(0x491));for(const _0x30802c of VisuMZ['MessageCore'][_0x34b4e2(0x386)][_0x34b4e2(0x491)]){_0x30802c['Match']=_0x30802c[_0x34b4e2(0x378)][_0x34b4e2(0x344)](),_0x30802c[_0x34b4e2(0x19f)]=new RegExp('\x1b'+_0x30802c[_0x34b4e2(0x378)],'gi'),_0x30802c[_0x34b4e2(0x460)]='\x1b'+_0x30802c[_0x34b4e2(0x378)];if(_0x30802c['Type']==='')_0x30802c[_0x34b4e2(0x460)]+=_0x34b4e2(0x4ce);}},Scene_Boot[_0x40e911(0x464)]['process_VisuMZ_MessageCore_TextCodes_Replace']=function(){const _0x431fb2=_0x40e911;VisuMZ[_0x431fb2(0x348)][_0x431fb2(0x1b6)](_0x431fb2(0x305));for(const _0x4e0a7e of VisuMZ['MessageCore'][_0x431fb2(0x386)][_0x431fb2(0x305)]){_0x4e0a7e[_0x431fb2(0x19f)]=new RegExp('\x1b'+_0x4e0a7e[_0x431fb2(0x378)]+_0x4e0a7e[_0x431fb2(0x430)],'gi'),_0x4e0a7e[_0x431fb2(0x29e)]!==''&&_0x4e0a7e['TextStr']!==_0x431fb2(0x22d)?_0x4e0a7e[_0x431fb2(0x460)]=new Function(_0x431fb2(0x211)+_0x4e0a7e[_0x431fb2(0x29e)][_0x431fb2(0x489)](/\\/g,'\x1b')+'\x27'):_0x4e0a7e[_0x431fb2(0x460)]=_0x4e0a7e[_0x431fb2(0x426)];}},Scene_Boot[_0x40e911(0x464)]['process_VisuMZ_MessageCore_TextMacros']=function(){const _0x2cfa19=_0x40e911;for(const _0x295372 of VisuMZ[_0x2cfa19(0x348)][_0x2cfa19(0x386)]['TextMacros']){_0x295372[_0x2cfa19(0x19f)]=new RegExp('\x5c['+_0x295372['Match']+'\x5c]','gi');if(_0x295372[_0x2cfa19(0x29e)]!==''&&_0x295372[_0x2cfa19(0x29e)]!=='Undefined'){let _0x19d563=_0x295372[_0x2cfa19(0x29e)];_0x19d563=_0x19d563[_0x2cfa19(0x489)](/\\/g,'\x1b'),_0x19d563=_0x19d563[_0x2cfa19(0x489)]('\x27','\x5c\x27'),_0x19d563=_0x19d563['replace']('\x22','\x5c\x22'),_0x295372[_0x2cfa19(0x460)]=new Function(_0x2cfa19(0x211)+_0x19d563+'\x27');}else _0x295372[_0x2cfa19(0x460)]=_0x295372[_0x2cfa19(0x426)];}},Scene_Boot[_0x40e911(0x464)]['process_VisuMZ_MessageCore_AutoColor']=function(){const _0x31d79a=_0x40e911,_0x2dc61c=VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x386)]['AutoColor'];!VisuMZ[_0x31d79a(0x360)]&&(VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x22b)]($dataClasses,_0x2dc61c['Classes']),VisuMZ[_0x31d79a(0x348)]['AddAutoColor']($dataSkills,_0x2dc61c['Skills']),VisuMZ['MessageCore']['AddAutoColor']($dataItems,_0x2dc61c['Items']),VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x22b)]($dataWeapons,_0x2dc61c[_0x31d79a(0x4d4)]),VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x22b)]($dataArmors,_0x2dc61c[_0x31d79a(0x30c)]),VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x22b)]($dataEnemies,_0x2dc61c[_0x31d79a(0x4dd)]),VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x22b)]($dataStates,_0x2dc61c[_0x31d79a(0x11f)])),VisuMZ[_0x31d79a(0x348)][_0x31d79a(0x20a)]();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x2d0)]=['V','N','P','C','I','PX','PY','G','{','}','<','>','FS','\x5c','$','.','|','!','<','>','^',_0x40e911(0x25b),_0x40e911(0x3f5),_0x40e911(0x1e9),_0x40e911(0x3e0),_0x40e911(0x354),_0x40e911(0x440),_0x40e911(0x2de),_0x40e911(0x3d6),_0x40e911(0x18c),_0x40e911(0x419),_0x40e911(0x28e),_0x40e911(0x2ef),'(((',_0x40e911(0x412),_0x40e911(0x16c),_0x40e911(0x49a),'<BR>',_0x40e911(0x3fa),'PICTURE',_0x40e911(0x1f1),_0x40e911(0x24b),_0x40e911(0x123),_0x40e911(0x1d2),'HIDE','ENABLE',_0x40e911(0x437),'SWITCH',_0x40e911(0x36d),'ALL',_0x40e911(0x20c)],VisuMZ[_0x40e911(0x348)][_0x40e911(0x22b)]=function(_0x18859d,_0x4d0bad){const _0x8cf613=_0x40e911;if(_0x4d0bad<=0x0)return;const _0x49552c=_0x18859d;for(const _0x160035 of _0x49552c){if(!_0x160035)continue;VisuMZ['MessageCore'][_0x8cf613(0x3bc)](_0x160035,_0x4d0bad);}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x20a)]=function(){const _0x24d9fd=_0x40e911;VisuMZ['MessageCore'][_0x24d9fd(0x31a)]=[];for(let _0x1b11c7=0x1;_0x1b11c7<=0x1f;_0x1b11c7++){const _0x58eb28=_0x24d9fd(0x2fc)[_0x24d9fd(0x119)](_0x1b11c7),_0x5d3e66=VisuMZ[_0x24d9fd(0x348)][_0x24d9fd(0x386)]['AutoColor'][_0x58eb28];_0x5d3e66[_0x24d9fd(0x2d1)]((_0x3d5e11,_0x104427)=>{if(!_0x3d5e11||!_0x104427)return-0x1;return _0x104427['length']-_0x3d5e11['length'];}),this['CreateAutoColorRegExpListEntries'](_0x5d3e66,_0x1b11c7);}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x34a)]=function(_0x3e3ebe,_0x2e95ce){const _0x16737d=_0x40e911;for(const _0x3e912e of _0x3e3ebe){if(_0x3e912e['length']<=0x0)continue;if(/^\d+$/[_0x16737d(0x444)](_0x3e912e))continue;let _0x3b7c04=VisuMZ[_0x16737d(0x348)]['ConvertTextAutoColorRegExpFriendly'](_0x3e912e);if(_0x3e912e[_0x16737d(0x215)](/[\u3000-\u303F]|[\u3040-\u309F]|[\u30A0-\u30FF]|[\uFF00-\uFFEF]|[\u4E00-\u9FAF]|[\u2605-\u2606]|[\u2190-\u2195]|\u203B/g))var _0x8c1423=new RegExp(_0x3b7c04,'i');else var _0x8c1423=new RegExp('\x5cb'+_0x3b7c04+'\x5cb','g');VisuMZ[_0x16737d(0x348)][_0x16737d(0x31a)][_0x16737d(0x202)]([_0x8c1423,_0x16737d(0x387)[_0x16737d(0x119)](_0x2e95ce,_0x3e912e)]);}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x401)]=function(_0x2316a4){const _0x2ac67b=_0x40e911;return _0x2316a4=_0x2316a4[_0x2ac67b(0x489)](/(\W)/gi,(_0x160eb6,_0x4313ea)=>_0x2ac67b(0x366)[_0x2ac67b(0x119)](_0x4313ea)),_0x2316a4;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x153)]=VisuMZ[_0x40e911(0x153)],VisuMZ[_0x40e911(0x153)]=function(_0x28cdeb){const _0x53ca8f=_0x40e911;VisuMZ['MessageCore'][_0x53ca8f(0x153)][_0x53ca8f(0x3b1)](this,_0x28cdeb);const _0x583320=VisuMZ[_0x53ca8f(0x348)][_0x53ca8f(0x386)]['AutoColor'];VisuMZ[_0x53ca8f(0x348)][_0x53ca8f(0x3bc)](_0x28cdeb,_0x583320['Classes']);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x482)]=VisuMZ[_0x40e911(0x482)],VisuMZ[_0x40e911(0x482)]=function(_0x17619c){const _0x3e6b6a=_0x40e911;VisuMZ[_0x3e6b6a(0x348)][_0x3e6b6a(0x482)][_0x3e6b6a(0x3b1)](this,_0x17619c);const _0x25136a=VisuMZ[_0x3e6b6a(0x348)][_0x3e6b6a(0x386)][_0x3e6b6a(0x416)];VisuMZ[_0x3e6b6a(0x348)][_0x3e6b6a(0x3bc)](_0x17619c,_0x25136a[_0x3e6b6a(0x487)]);},0x7,VisuMZ[_0x40e911(0x348)][_0x40e911(0x3c0)]=VisuMZ[_0x40e911(0x3c0)],VisuMZ['ParseItemNotetags']=function(_0x50c4df){const _0x39910d=_0x40e911;VisuMZ['MessageCore'][_0x39910d(0x3c0)][_0x39910d(0x3b1)](this,_0x50c4df);const _0x282197=VisuMZ[_0x39910d(0x348)][_0x39910d(0x386)][_0x39910d(0x416)];VisuMZ['MessageCore'][_0x39910d(0x3bc)](_0x50c4df,_0x282197[_0x39910d(0x41f)]);},VisuMZ['MessageCore'][_0x40e911(0x4d6)]=VisuMZ[_0x40e911(0x4d6)],VisuMZ[_0x40e911(0x4d6)]=function(_0x3d0700){const _0x57c441=_0x40e911;VisuMZ[_0x57c441(0x348)][_0x57c441(0x4d6)][_0x57c441(0x3b1)](this,_0x3d0700);const _0x1dab72=VisuMZ[_0x57c441(0x348)][_0x57c441(0x386)][_0x57c441(0x416)];VisuMZ['MessageCore'][_0x57c441(0x3bc)](_0x3d0700,_0x1dab72['Weapons']);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x452)]=VisuMZ[_0x40e911(0x452)],VisuMZ[_0x40e911(0x452)]=function(_0x15a7ce){const _0x11f98b=_0x40e911;VisuMZ[_0x11f98b(0x348)][_0x11f98b(0x452)][_0x11f98b(0x3b1)](this,_0x15a7ce);const _0x5cd6fb=VisuMZ[_0x11f98b(0x348)][_0x11f98b(0x386)]['AutoColor'];VisuMZ[_0x11f98b(0x348)][_0x11f98b(0x3bc)](_0x15a7ce,_0x5cd6fb[_0x11f98b(0x30c)]);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x15b)]=VisuMZ[_0x40e911(0x15b)],VisuMZ[_0x40e911(0x15b)]=function(_0x2aaedd){const _0x5ede09=_0x40e911;VisuMZ[_0x5ede09(0x348)][_0x5ede09(0x15b)][_0x5ede09(0x3b1)](this,_0x2aaedd);const _0x41438d=VisuMZ['MessageCore'][_0x5ede09(0x386)]['AutoColor'];VisuMZ[_0x5ede09(0x348)]['CreateAutoColorFor'](_0x2aaedd,_0x41438d[_0x5ede09(0x4dd)]);},VisuMZ['MessageCore'][_0x40e911(0x1c0)]=VisuMZ[_0x40e911(0x1c0)],VisuMZ[_0x40e911(0x1c0)]=function(_0x56be29){const _0x5962a1=_0x40e911;VisuMZ[_0x5962a1(0x348)]['ParseStateNotetags']['call'](this,_0x56be29);const _0x235437=VisuMZ[_0x5962a1(0x348)][_0x5962a1(0x386)][_0x5962a1(0x416)];VisuMZ[_0x5962a1(0x348)][_0x5962a1(0x3bc)](_0x56be29,_0x235437['States']);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3bc)]=function(_0x4ea362,_0x380f2e){const _0x5b2a68=_0x40e911;if(_0x380f2e<=0x0)return;const _0x38a70f=VisuMZ[_0x5b2a68(0x348)][_0x5b2a68(0x386)]['AutoColor']['TextColor'+_0x380f2e];let _0x5e6871=_0x4ea362[_0x5b2a68(0x495)][_0x5b2a68(0x10e)]();if(/^\d+$/[_0x5b2a68(0x444)](_0x5e6871))return;if(VisuMZ['MessageCore'][_0x5b2a68(0x2d0)]['includes'](_0x5e6871[_0x5b2a68(0x344)]()))return;_0x5e6871=_0x5e6871[_0x5b2a68(0x489)](/\\I\[(\d+)\]/gi,''),_0x5e6871=_0x5e6871[_0x5b2a68(0x489)](/\x1bI\[(\d+)\]/gi,'');if(_0x5e6871[_0x5b2a68(0x347)]<=0x0)return;if(_0x5e6871[_0x5b2a68(0x215)](/-----/i))return;_0x38a70f[_0x5b2a68(0x202)](_0x5e6871);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x350)]=Scene_Boot[_0x40e911(0x464)]['loadGameFonts'],Scene_Boot[_0x40e911(0x464)][_0x40e911(0x42b)]=function(){const _0x5b4bc7=_0x40e911;VisuMZ[_0x5b4bc7(0x348)][_0x5b4bc7(0x350)]['call'](this),this[_0x5b4bc7(0x4ad)]();},Scene_Boot['prototype'][_0x40e911(0x4ad)]=function(){const _0x439c09=_0x40e911,_0x321201=VisuMZ['MessageCore'][_0x439c09(0x386)][_0x439c09(0x187)]||[];for(const _0x5345c2 of _0x321201){if(!_0x5345c2)continue;const _0x3ff876=_0x5345c2[_0x439c09(0x2d8)];if(_0x3ff876['trim']()==='')continue;if(_0x3ff876[_0x439c09(0x31d)]()[_0x439c09(0x10e)]()===_0x439c09(0x1a5))continue;const _0x692d9e=_0x5345c2[_0x439c09(0x3ee)];if(_0x692d9e==='Unnamed.ttf')continue;FontManager[_0x439c09(0x203)](_0x3ff876,_0x692d9e);}},VisuMZ['MessageCore']['DataManager_loadDatabase']=DataManager[_0x40e911(0x318)],DataManager[_0x40e911(0x318)]=function(){const _0x48da9b=_0x40e911;VisuMZ['MessageCore'][_0x48da9b(0x3af)][_0x48da9b(0x3b1)](this),this['loadLocalization']();},DataManager[_0x40e911(0x216)]=function(){const _0x24e2ef=_0x40e911;if(!TextManager[_0x24e2ef(0x481)]())return;const _0x17a92b=VisuMZ[_0x24e2ef(0x348)]['Settings'][_0x24e2ef(0x18f)],_0x14b1a6=_0x17a92b[_0x24e2ef(0x3b7)]||'';if(!_0x14b1a6)return;const _0x2df867='$dataLocalization',_0x1ba5d1=new XMLHttpRequest(),_0x21dbd0=_0x24e2ef(0x3bb)+_0x14b1a6;window[_0x2df867]=null,_0x1ba5d1[_0x24e2ef(0x42f)](_0x24e2ef(0x3ec),_0x21dbd0),_0x1ba5d1[_0x24e2ef(0x445)](_0x24e2ef(0x4da)),_0x1ba5d1[_0x24e2ef(0x30f)]=()=>this[_0x24e2ef(0x192)](_0x1ba5d1,_0x2df867),_0x1ba5d1[_0x24e2ef(0x10a)]=()=>this[_0x24e2ef(0x44d)](),_0x1ba5d1[_0x24e2ef(0x2f5)]();},DataManager['onLocalizationXhrLoad']=function(_0x137443,_0x3bacd6){const _0x1b2cc4=_0x40e911;if(_0x137443[_0x1b2cc4(0x1d0)]>=0x190)return;const _0x174a7a=_0x137443['responseText'];window[_0x3bacd6]=VisuMZ[_0x1b2cc4(0x348)][_0x1b2cc4(0x379)](_0x174a7a);},VisuMZ['MessageCore'][_0x40e911(0x379)]=function(_0x43b291){const _0x3d1628=_0x40e911,_0x51830f=_0x43b291[_0x3d1628(0x297)]('\x0a'),_0x27f493=_0x51830f[0x0]['split'](';'),_0x856de={};return _0x51830f[_0x3d1628(0x280)](0x1)[_0x3d1628(0x30a)](_0x3e28f1=>{const _0x462916=_0x3d1628;let _0xe3900a=[],_0x92d0d2='',_0x3ac594=![];for(let _0x4f208d=0x0;_0x4f208d<_0x3e28f1[_0x462916(0x347)];_0x4f208d++){let _0x233f57=_0x3e28f1[_0x4f208d];if(_0x233f57==='\x22')_0x3ac594&&_0x3e28f1[_0x4f208d+0x1]==='\x22'?(_0x92d0d2+=_0x233f57,_0x4f208d++):_0x3ac594=!_0x3ac594;else _0x233f57===';'&&!_0x3ac594?(_0xe3900a[_0x462916(0x202)](_0x92d0d2),_0x92d0d2=''):_0x92d0d2+=_0x233f57;}if(_0x92d0d2)_0xe3900a['push'](_0x92d0d2);if(!_0xe3900a[0x0])_0xe3900a[0x0]='';const _0x5e74a6=_0xe3900a[0x0][_0x462916(0x489)](/^"|"$/g,'')[_0x462916(0x31d)]()[_0x462916(0x10e)]();_0x856de[_0x5e74a6]=_0x27f493['slice'](0x1)['reduce']((_0x39ba9a,_0x17a1a2,_0x195c0c)=>{const _0xb24baf=_0x462916;return _0x39ba9a[_0x17a1a2]=(_0xe3900a[_0x195c0c+0x1]||'')[_0xb24baf(0x489)](/^"|"$/g,''),_0x39ba9a;},{});}),_0x856de;},DataManager[_0x40e911(0x44d)]=function(){const _0x58830a=_0x40e911;let _0x526e14='';_0x526e14+=_0x58830a(0x19e),_0x526e14+=_0x58830a(0x3f6),confirm(_0x526e14)?Utils[_0x58830a(0x421)](_0x58830a(0x444))?(_0x526e14=_0x58830a(0x248),alert(_0x526e14),this[_0x58830a(0x40c)](),this[_0x58830a(0x18b)](),_0x526e14=''):_0x526e14=_0x58830a(0x1ff):_0x526e14=_0x58830a(0x463),_0x526e14+=_0x58830a(0x47c),alert(_0x526e14),SceneManager[_0x58830a(0x44a)]();},DataManager[_0x40e911(0x40c)]=function(){const _0x35808d=_0x40e911,_0x388880=[_0x35808d(0x44e),'English','Bengali','Chinese(Simplified)',_0x35808d(0x201),_0x35808d(0x2bd),_0x35808d(0x2ce),_0x35808d(0x2c0),_0x35808d(0x1d3),_0x35808d(0x190),_0x35808d(0x3da),_0x35808d(0x356),'Hindi','Hungarian',_0x35808d(0x2f8),'Italian',_0x35808d(0x4df),_0x35808d(0x233),'Norwegian',_0x35808d(0x22f),'Portuguese','Romanian','Russian',_0x35808d(0x117),'Spanish',_0x35808d(0x4db),_0x35808d(0x1fa),'Thai',_0x35808d(0x479)],_0x1bdda0=['Greeting',_0x35808d(0x38b),_0x35808d(0x29a),'你好','你好',_0x35808d(0x341),'Hej',_0x35808d(0x2b6),'Hei','Bonjour',_0x35808d(0x2b6),_0x35808d(0x3b9),'नमस्ते',_0x35808d(0x24a),_0x35808d(0x2ec),_0x35808d(0x39f),_0x35808d(0x25f),_0x35808d(0x1df),_0x35808d(0x1b0),_0x35808d(0x414),_0x35808d(0x3ff),_0x35808d(0x196),_0x35808d(0x185),'Ahoj',_0x35808d(0x39b),_0x35808d(0x13d),_0x35808d(0x3cb),_0x35808d(0x3d9),_0x35808d(0x1b9)],_0x266c50=[_0x35808d(0x3fb),_0x35808d(0x435),_0x35808d(0x4e1),'再见','再見',_0x35808d(0x1e1),_0x35808d(0x30d),_0x35808d(0x4c6),_0x35808d(0x2fa),_0x35808d(0x214),_0x35808d(0x217),_0x35808d(0x4b5),'अलविदा',_0x35808d(0x2ad),_0x35808d(0x33d),_0x35808d(0x12b),_0x35808d(0x2e7),_0x35808d(0x400),_0x35808d(0x1e7),_0x35808d(0x2c8),_0x35808d(0x323),_0x35808d(0x4b3),'До\x20свидания',_0x35808d(0x2d7),_0x35808d(0x35e),_0x35808d(0x1ec),_0x35808d(0x49c),'ลาก่อน','Hoşça\x20kal'],_0x1323af=['Wow',_0x35808d(0x46b),_0x35808d(0x395),'哇','哇','Ó','Wow',_0x35808d(0x432),_0x35808d(0x204),_0x35808d(0x33b),'Wow','Ουάου','वाह','Hűha',_0x35808d(0x48f),_0x35808d(0x46b),'ワオ','와우','Oi','O',_0x35808d(0x4cd),'Uau',_0x35808d(0x302),'Ó',_0x35808d(0x2ea),'Oj',_0x35808d(0x1f3),'ว้าว',_0x35808d(0x34d)],_0xe86694=[_0x388880,_0x1bdda0,_0x266c50,_0x1323af],_0x2220fa=_0xe86694[_0x35808d(0x290)](_0x4f788c=>_0x4f788c[_0x35808d(0x468)](';'))[_0x35808d(0x468)]('\x0a'),_0x1847bf=VisuMZ[_0x35808d(0x348)][_0x35808d(0x386)]['Localization'],_0x3bbe77=_0x1847bf[_0x35808d(0x3b7)]||_0x35808d(0x39a),_0x180d96=require(_0x35808d(0x10c)),_0x4a7e72=_0x180d96[_0x35808d(0x48e)](process['mainModule'][_0x35808d(0x3ae)]),_0x278382=_0x180d96['join'](_0x4a7e72,_0x35808d(0x3bb)),_0x25913d=_0x278382+_0x3bbe77,_0x14aa38=require('fs');return _0x14aa38['writeFileSync'](_0x25913d,_0x2220fa),_0x25913d;},DataManager[_0x40e911(0x18b)]=function(){const _0x2caa6a=_0x40e911,{exec:_0x1370f1}=require(_0x2caa6a(0x147));_0x1370f1(_0x2caa6a(0x1fc)),_0x1370f1(_0x2caa6a(0x447));},VisuMZ['MessageCore'][_0x40e911(0x327)]=ImageManager[_0x40e911(0x278)],ImageManager['loadBitmap']=function(_0x412f17,_0x121f32){const _0x251392=_0x40e911;if(ConfigManager[_0x251392(0x2dc)]!==undefined){const _0x44c1b0=VisuMZ[_0x251392(0x348)][_0x251392(0x386)]['Localization']||{},_0x33ae2e=_0x44c1b0[_0x251392(0x46d)]||_0x251392(0x1cf),_0x3777cb=VisuMZ['MessageCore'][_0x251392(0x386)]['LanguageImages']||{},_0x2f73f0=ConfigManager[_0x251392(0x2dc)]||_0x33ae2e;if(_0x2f73f0===_0x33ae2e&&!_0x3777cb['ConvertDefault']){}else{const _0x129a71=_0x3777cb[_0x2f73f0]||_0x251392(0x47b);_0x412f17&&_0x412f17['match'](/\[XX\]/g)&&console[_0x251392(0x3c9)](_0x412f17,_0x121f32),_0x121f32&&_0x121f32[_0x251392(0x215)](/\[XX\]/g)&&(_0x121f32=_0x121f32[_0x251392(0x489)](/\[XX\]/g,_0x129a71));}}return VisuMZ[_0x251392(0x348)]['ImageManager_loadBitmap'][_0x251392(0x3b1)](this,_0x412f17,_0x121f32);},SceneManager[_0x40e911(0x14e)]=function(){const _0x2d286e=_0x40e911;return this[_0x2d286e(0x1cb)]&&this['_scene'][_0x2d286e(0x237)]===Scene_Battle;},SceneManager[_0x40e911(0x2a5)]=function(){const _0x342e19=_0x40e911;return this[_0x342e19(0x1cb)]&&this[_0x342e19(0x1cb)]['constructor']===Scene_Map;},ConfigManager['textLocale']=VisuMZ[_0x40e911(0x348)][_0x40e911(0x386)][_0x40e911(0x18f)][_0x40e911(0x46d)]||_0x40e911(0x1cf),ConfigManager[_0x40e911(0x4c8)]=VisuMZ[_0x40e911(0x348)][_0x40e911(0x386)][_0x40e911(0x1c6)][_0x40e911(0x168)],VisuMZ[_0x40e911(0x348)]['ConfigManager_makeData']=ConfigManager[_0x40e911(0x2bb)],ConfigManager[_0x40e911(0x2bb)]=function(){const _0x2d71f7=_0x40e911,_0x469031=VisuMZ[_0x2d71f7(0x348)][_0x2d71f7(0x178)][_0x2d71f7(0x3b1)](this);return TextManager['isVisuMzLocalizationEnabled']()&&(_0x469031['textLocale']=this[_0x2d71f7(0x2dc)]),_0x469031['textSpeed']=this[_0x2d71f7(0x4c8)],_0x469031;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x251)]=ConfigManager['applyData'],ConfigManager['applyData']=function(_0x4bbf3a){const _0x21ac3a=_0x40e911;VisuMZ[_0x21ac3a(0x348)]['ConfigManager_applyData'][_0x21ac3a(0x3b1)](this,_0x4bbf3a),TextManager[_0x21ac3a(0x481)]()&&(_0x21ac3a(0x2dc)in _0x4bbf3a?this[_0x21ac3a(0x2dc)]=String(_0x4bbf3a[_0x21ac3a(0x2dc)]):this[_0x21ac3a(0x2dc)]=VisuMZ[_0x21ac3a(0x348)][_0x21ac3a(0x386)][_0x21ac3a(0x18f)][_0x21ac3a(0x46d)]||_0x21ac3a(0x1cf)),_0x21ac3a(0x4c8)in _0x4bbf3a?this[_0x21ac3a(0x4c8)]=Number(_0x4bbf3a[_0x21ac3a(0x4c8)])[_0x21ac3a(0x333)](0x1,0xb):this[_0x21ac3a(0x4c8)]=VisuMZ[_0x21ac3a(0x348)][_0x21ac3a(0x386)][_0x21ac3a(0x1c6)]['Default'];},TextManager[_0x40e911(0x116)]=VisuMZ[_0x40e911(0x348)][_0x40e911(0x386)]['Localization']['Name'],TextManager[_0x40e911(0x300)]=VisuMZ['MessageCore'][_0x40e911(0x386)][_0x40e911(0x1c6)]['Name'],TextManager[_0x40e911(0x132)]=VisuMZ[_0x40e911(0x348)][_0x40e911(0x386)][_0x40e911(0x1c6)]['Instant'],VisuMZ['MessageCore']['TextManager_message']=TextManager[_0x40e911(0x1af)],TextManager[_0x40e911(0x1af)]=function(_0x1ac749){const _0x3ea216=_0x40e911,_0x51d2a8=[_0x3ea216(0x48b),_0x3ea216(0x330),_0x3ea216(0x337),'surprise',_0x3ea216(0x3c2),_0x3ea216(0x4b9),_0x3ea216(0x267),_0x3ea216(0x164),_0x3ea216(0x362),_0x3ea216(0x12a)];let _0x49b979=VisuMZ[_0x3ea216(0x348)]['TextManager_message'][_0x3ea216(0x3b1)](this,_0x1ac749);return _0x51d2a8[_0x3ea216(0x136)](_0x1ac749)&&(_0x49b979=_0x3ea216(0x49a)+_0x49b979),_0x49b979;},TextManager[_0x40e911(0x481)]=function(){const _0x3a89f6=_0x40e911;return VisuMZ[_0x3a89f6(0x348)][_0x3a89f6(0x386)][_0x3a89f6(0x18f)][_0x3a89f6(0x235)];},TextManager['parseLocalizedText']=function(_0x2d6fc1){const _0x5a3afa=_0x40e911;if(!this['isVisuMzLocalizationEnabled']())return _0x2d6fc1;return _0x2d6fc1=String(_0x2d6fc1)['replace'](/\$(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x38f900,_0x18e646)=>this[_0x5a3afa(0x1fd)](String(_0x18e646))),_0x2d6fc1=String(_0x2d6fc1)['replace'](/\\(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0xd16f08,_0x314bce)=>this[_0x5a3afa(0x1fd)](String(_0x314bce))),_0x2d6fc1=String(_0x2d6fc1)[_0x5a3afa(0x489)](/\x1b(?:KEY|TL|TRANSLATE|LOC|LOCALIZE|LOCALE)(?:\[|\<|\{)(.*?)(?:\]|\>|\})/gi,(_0x439902,_0x9aaf52)=>this[_0x5a3afa(0x1fd)](String(_0x9aaf52))),_0x2d6fc1;},TextManager['getLocalizedText']=function(_0x247b32){const _0x2bcf02=_0x40e911;if(!$dataLocalization)return'';const _0xb8f73a=$dataLocalization[_0x247b32[_0x2bcf02(0x31d)]()[_0x2bcf02(0x10e)]()];if(!_0xb8f73a)return;const _0x1a8070=ConfigManager[_0x2bcf02(0x2dc)]||_0x2bcf02(0x1cf);let _0x107824=_0xb8f73a[_0x1a8070]||'UNDEFINED!';return _0x107824=_0x107824[_0x2bcf02(0x489)](/\\/g,'\x1b'),_0x107824=_0x107824[_0x2bcf02(0x489)](/<SEMI(?:|-COLON|COLON)>/gi,';'),_0x107824;},TextManager[_0x40e911(0x1f7)]=function(_0x5ba6cc){const _0x44df43=_0x40e911;return VisuMZ[_0x44df43(0x348)][_0x44df43(0x386)][_0x44df43(0x18f)][_0x5ba6cc]||'';},TextManager['getCurrentLanguage']=function(){const _0x5a3dc4=ConfigManager['textLocale']||'English';return this['getLanguageName'](_0x5a3dc4);},TextManager[_0x40e911(0x159)]=function(_0x153c54){const _0x2ae023=_0x40e911,_0x53b602=VisuMZ['MessageCore'][_0x2ae023(0x386)][_0x2ae023(0x18f)][_0x2ae023(0x418)]||[];let _0x4138b3=_0x53b602['indexOf'](ConfigManager[_0x2ae023(0x2dc)]||_0x2ae023(0x1cf));_0x4138b3+=_0x153c54;const _0xc47f8e=_0x53b602[_0x4138b3]||'';return this[_0x2ae023(0x1f7)](_0xc47f8e);},VisuMZ[_0x40e911(0x348)]['Game_System_mainFontFace']=Game_System[_0x40e911(0x464)][_0x40e911(0x1d1)],Game_System['prototype']['mainFontFace']=function(){const _0x263e60=_0x40e911;let _0x388259=VisuMZ[_0x263e60(0x348)][_0x263e60(0x274)][_0x263e60(0x3b1)](this);if(ConfigManager&&ConfigManager['textFont']!==undefined&&ConfigManager[_0x263e60(0x154)]>0x0)return _0x388259;else{const _0x6571c9=ConfigManager['textLocale']||_0x263e60(0x1cf),_0x200405=VisuMZ[_0x263e60(0x348)][_0x263e60(0x386)][_0x263e60(0x198)];return _0x200405[_0x6571c9]!==undefined&&(_0x388259=_0x200405[_0x6571c9]+',\x20'+$dataSystem[_0x263e60(0x13a)]['fallbackFonts']),_0x388259;}},VisuMZ[_0x40e911(0x348)]['Window_Command_addCommand']=Window_Command[_0x40e911(0x464)][_0x40e911(0x47d)],Window_Command[_0x40e911(0x464)][_0x40e911(0x47d)]=function(_0x925017,_0x52cab4,_0x29f6e6,_0x2a0b63){const _0x4a635e=_0x40e911;if(TextManager[_0x4a635e(0x45c)]&&TextManager[_0x4a635e(0x481)]()){const _0x2d0673=_0x925017[_0x4a635e(0x31d)]()['trim']();if($dataLocalization[_0x2d0673]&&_0x2d0673['length']>0x0){const _0xa76373=ConfigManager[_0x4a635e(0x2dc)]||'English';_0x925017=$dataLocalization[_0x2d0673][_0xa76373]||_0x4a635e(0x429);}}VisuMZ[_0x4a635e(0x348)][_0x4a635e(0x253)][_0x4a635e(0x3b1)](this,_0x925017,_0x52cab4,_0x29f6e6,_0x2a0b63);},Window_StatusBase[_0x40e911(0x464)][_0x40e911(0x121)]=function(_0x593eab,_0xed9926){const _0x58ea90=_0x40e911,_0x1635d2=_0x593eab[_0x58ea90(0x2ba)]();let _0x4c2bdb=$dataSystem['equipTypes'][_0x1635d2[_0xed9926]];if(TextManager[_0x58ea90(0x45c)]){const _0x1c3ed7=_0x4c2bdb[_0x58ea90(0x31d)]()[_0x58ea90(0x10e)]();if(TextManager[_0x58ea90(0x481)]()&&$dataLocalization[_0x1c3ed7]){const _0x539f1c=ConfigManager[_0x58ea90(0x2dc)]||_0x58ea90(0x1cf);_0x4c2bdb=$dataLocalization[_0x1c3ed7][_0x539f1c]||_0x58ea90(0x429);}}return _0x4c2bdb;},Game_Temp[_0x40e911(0x464)][_0x40e911(0x2c2)]=function(_0x3e21ad){this['_lastPluginCommandInterpreter']=_0x3e21ad;},Game_Temp['prototype']['getLastPluginCommandInterpreter']=function(){const _0x2099d1=_0x40e911;return this[_0x2099d1(0x26e)];},VisuMZ[_0x40e911(0x348)]['Game_Interpreter_PluginCommand']=Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x493)],Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x493)]=function(_0x2c88a5){const _0x4ab89d=_0x40e911;return $gameTemp[_0x4ab89d(0x2c2)](this),VisuMZ[_0x4ab89d(0x348)][_0x4ab89d(0x1b2)][_0x4ab89d(0x3b1)](this,_0x2c88a5);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x42c)]=Game_System['prototype'][_0x40e911(0x1aa)],Game_System[_0x40e911(0x464)][_0x40e911(0x1aa)]=function(){const _0x58df30=_0x40e911;VisuMZ[_0x58df30(0x348)]['Game_System_initialize'][_0x58df30(0x3b1)](this),this[_0x58df30(0x27c)]();},Game_System[_0x40e911(0x464)][_0x40e911(0x27c)]=function(){const _0x3633d4=_0x40e911,_0x119014=VisuMZ[_0x3633d4(0x348)][_0x3633d4(0x386)]['General'],_0x3af53b=VisuMZ[_0x3633d4(0x348)][_0x3633d4(0x386)]['WordWrap'];this[_0x3633d4(0x4cb)]={'messageRows':_0x119014[_0x3633d4(0x144)],'messageWidth':_0x119014['MessageWidth'],'messageWordWrap':_0x3af53b[_0x3633d4(0x4be)],'helpWordWrap':_0x3af53b['HelpWindow'],'choiceLineHeight':_0x119014[_0x3633d4(0x351)],'choiceMinWidth':_0x119014[_0x3633d4(0x160)]??0x60,'choiceRows':_0x119014[_0x3633d4(0x3cc)],'choiceCols':_0x119014['ChoiceWindowMaxCols'],'choiceTextAlign':_0x119014[_0x3633d4(0x26a)],'choiceDistance':0x0},this['_messageOffsetX']===undefined&&(this[_0x3633d4(0x37e)]=_0x119014[_0x3633d4(0x372)],this[_0x3633d4(0x367)]=_0x119014[_0x3633d4(0x322)]);},Game_System[_0x40e911(0x464)]['getMessageWindowRows']=function(){const _0x43afb3=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x43afb3(0x27c)]();if(this[_0x43afb3(0x4cb)][_0x43afb3(0x26f)]===undefined)this[_0x43afb3(0x27c)]();return this['_MessageCoreSettings']['messageRows'];},Game_System[_0x40e911(0x464)][_0x40e911(0x43f)]=function(_0x3bf95c){const _0x3d5a47=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x3d5a47(0x27c)]();if(this[_0x3d5a47(0x4cb)][_0x3d5a47(0x26f)]===undefined)this[_0x3d5a47(0x27c)]();this['_MessageCoreSettings'][_0x3d5a47(0x26f)]=_0x3bf95c||0x1;},Game_System[_0x40e911(0x464)][_0x40e911(0x2e1)]=function(){const _0x1299c0=_0x40e911;if(this[_0x1299c0(0x4cb)]===undefined)this[_0x1299c0(0x27c)]();if(this[_0x1299c0(0x4cb)][_0x1299c0(0x12f)]===undefined)this[_0x1299c0(0x27c)]();return this[_0x1299c0(0x4cb)][_0x1299c0(0x12f)];},Game_System['prototype'][_0x40e911(0x3ab)]=function(_0x599d1f){const _0x4eb578=_0x40e911;if(this[_0x4eb578(0x4cb)]===undefined)this[_0x4eb578(0x27c)]();if(this[_0x4eb578(0x4cb)][_0x4eb578(0x12f)]===undefined)this[_0x4eb578(0x27c)]();_0x599d1f=Math[_0x4eb578(0x2ff)](_0x599d1f);if(_0x599d1f%0x2!==0x0)_0x599d1f+=0x1;this['_MessageCoreSettings'][_0x4eb578(0x12f)]=_0x599d1f||0x2;},Game_System[_0x40e911(0x464)][_0x40e911(0x270)]=function(){const _0x5574ce=_0x40e911;if(this[_0x5574ce(0x4cb)]===undefined)this[_0x5574ce(0x27c)]();if(this[_0x5574ce(0x4cb)][_0x5574ce(0x4a4)]===undefined)this[_0x5574ce(0x27c)]();return this[_0x5574ce(0x4cb)][_0x5574ce(0x4a4)];},Game_System[_0x40e911(0x464)][_0x40e911(0x13c)]=function(_0x4d59be){const _0xf77e2d=_0x40e911;if(this[_0xf77e2d(0x4cb)]===undefined)this[_0xf77e2d(0x27c)]();if(this[_0xf77e2d(0x4cb)][_0xf77e2d(0x4a4)]===undefined)this[_0xf77e2d(0x27c)]();this[_0xf77e2d(0x4cb)][_0xf77e2d(0x4a4)]=_0x4d59be;},Game_System[_0x40e911(0x464)][_0x40e911(0x375)]=function(){const _0xe2bb0e=_0x40e911;if(this[_0xe2bb0e(0x37e)]===undefined){const _0x5278bc=VisuMZ['MessageCore']['Settings']['General'];this['_messageOffsetX']=_0x5278bc['MsgWindowOffsetX'],this[_0xe2bb0e(0x367)]=_0x5278bc[_0xe2bb0e(0x322)];}return{'x':this[_0xe2bb0e(0x37e)]||0x0,'y':this[_0xe2bb0e(0x367)]||0x0};},Game_System['prototype'][_0x40e911(0x220)]=function(_0x299dbe,_0x24dfb8){const _0x1481c8=_0x40e911;if(this[_0x1481c8(0x4cb)]===undefined)this[_0x1481c8(0x27c)]();this[_0x1481c8(0x37e)]=_0x299dbe,this[_0x1481c8(0x367)]=_0x24dfb8;},Game_System['prototype'][_0x40e911(0x35c)]=function(){const _0xcc13b=_0x40e911;if(this[_0xcc13b(0x4cb)]===undefined)this[_0xcc13b(0x27c)]();if(this[_0xcc13b(0x4cb)][_0xcc13b(0x22e)]===undefined)this[_0xcc13b(0x27c)]();return this[_0xcc13b(0x4cb)][_0xcc13b(0x22e)];},Game_System['prototype'][_0x40e911(0x15c)]=function(_0x7edf66){const _0x53df32=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x53df32(0x27c)]();if(this[_0x53df32(0x4cb)][_0x53df32(0x22e)]===undefined)this[_0x53df32(0x27c)]();this['_MessageCoreSettings'][_0x53df32(0x22e)]=_0x7edf66;},Game_System['prototype'][_0x40e911(0x24d)]=function(){const _0x1e4bc3=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x1e4bc3(0x27c)]();if(this[_0x1e4bc3(0x4cb)][_0x1e4bc3(0x261)]===undefined)this[_0x1e4bc3(0x27c)]();return this['_MessageCoreSettings'][_0x1e4bc3(0x261)];},Game_System['prototype']['setChoiceListLineHeight']=function(_0x3e85f2){const _0x47344c=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x47344c(0x27c)]();if(this[_0x47344c(0x4cb)][_0x47344c(0x261)]===undefined)this[_0x47344c(0x27c)]();this[_0x47344c(0x4cb)]['choiceLineHeight']=_0x3e85f2||0x1;},Game_System[_0x40e911(0x464)][_0x40e911(0x1f2)]=function(){const _0x27be0f=_0x40e911;if(this[_0x27be0f(0x4cb)]===undefined)this[_0x27be0f(0x27c)]();return this[_0x27be0f(0x4cb)]['choiceMinWidth']??0x60;},Game_System[_0x40e911(0x464)][_0x40e911(0x4a1)]=function(_0xbbf9e8){const _0x98e8e8=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x98e8e8(0x27c)]();this[_0x98e8e8(0x4cb)]['choiceMinWidth']=_0xbbf9e8||0x0;},Game_System[_0x40e911(0x464)][_0x40e911(0x48d)]=function(){const _0x42ec5a=_0x40e911;if(this[_0x42ec5a(0x4cb)]===undefined)this[_0x42ec5a(0x27c)]();if(this[_0x42ec5a(0x4cb)]['choiceRows']===undefined)this[_0x42ec5a(0x27c)]();return this['_MessageCoreSettings'][_0x42ec5a(0x2b5)];},Game_System[_0x40e911(0x464)][_0x40e911(0x2e3)]=function(_0x579df1){const _0x2fd385=_0x40e911;if(this[_0x2fd385(0x4cb)]===undefined)this['initMessageCore']();if(this['_MessageCoreSettings'][_0x2fd385(0x2b5)]===undefined)this[_0x2fd385(0x27c)]();this['_MessageCoreSettings'][_0x2fd385(0x2b5)]=_0x579df1||0x1;},Game_System[_0x40e911(0x464)]['getChoiceListMaxColumns']=function(){const _0x266da2=_0x40e911;if(this[_0x266da2(0x4cb)]===undefined)this['initMessageCore']();if(this[_0x266da2(0x4cb)][_0x266da2(0x2e9)]===undefined)this[_0x266da2(0x27c)]();return this[_0x266da2(0x4cb)][_0x266da2(0x2e9)];},Game_System[_0x40e911(0x464)][_0x40e911(0x36f)]=function(_0x2ea3b5){const _0x305b00=_0x40e911;if(this['_MessageCoreSettings']===undefined)this[_0x305b00(0x27c)]();if(this[_0x305b00(0x4cb)][_0x305b00(0x2e9)]===undefined)this[_0x305b00(0x27c)]();this[_0x305b00(0x4cb)][_0x305b00(0x2e9)]=_0x2ea3b5||0x1;},Game_System[_0x40e911(0x464)]['getChoiceListTextAlign']=function(){const _0x1a2508=_0x40e911;if(this[_0x1a2508(0x4cb)]===undefined)this[_0x1a2508(0x27c)]();if(this[_0x1a2508(0x4cb)][_0x1a2508(0x12e)]===undefined)this[_0x1a2508(0x27c)]();return this[_0x1a2508(0x4cb)][_0x1a2508(0x12e)];},Game_System['prototype'][_0x40e911(0x4a7)]=function(_0x57ba3b){const _0x673d7=_0x40e911;if(this[_0x673d7(0x4cb)]===undefined)this[_0x673d7(0x27c)]();if(this['_MessageCoreSettings'][_0x673d7(0x12e)]===undefined)this[_0x673d7(0x27c)]();this[_0x673d7(0x4cb)][_0x673d7(0x12e)]=_0x57ba3b[_0x673d7(0x31d)]();},Game_System[_0x40e911(0x464)][_0x40e911(0x113)]=function(){const _0x11000b=_0x40e911;if(this[_0x11000b(0x4cb)]===undefined)this['initMessageCore']();return this['_MessageCoreSettings'][_0x11000b(0x41a)]||0x0;},Game_System[_0x40e911(0x464)][_0x40e911(0x37f)]=function(_0xc41bf0){const _0x3e31d6=_0x40e911;if(this[_0x3e31d6(0x4cb)]===undefined)this['initMessageCore']();this[_0x3e31d6(0x4cb)][_0x3e31d6(0x41a)]=_0xc41bf0||0x0;},Game_Message[_0x40e911(0x464)][_0x40e911(0x4bb)]=function(_0x4d68f8,_0x1b1c22){const _0x3fd978=_0x40e911;this[_0x3fd978(0x45b)]=_0x4d68f8,this[_0x3fd978(0x4c5)]=_0x3fd978(0x458),this['_itemChoiceWtypeId']=_0x1b1c22,this[_0x3fd978(0x38f)]=0x0;},Game_Message[_0x40e911(0x464)][_0x40e911(0x181)]=function(){const _0x29804c=_0x40e911;return this[_0x29804c(0x3c7)]||0x0;},Game_Message['prototype'][_0x40e911(0x279)]=function(_0x43e981,_0x4f9932,_0x3ec499){const _0x173d65=_0x40e911;this[_0x173d65(0x45b)]=_0x43e981,this[_0x173d65(0x4c5)]=_0x173d65(0x2c7),this[_0x173d65(0x263)]=_0x4f9932,this[_0x173d65(0x38f)]=_0x3ec499;},Game_Message[_0x40e911(0x464)][_0x40e911(0x1de)]=function(){const _0x1290dc=_0x40e911;return this[_0x1290dc(0x263)]||0x0;},Game_Message[_0x40e911(0x464)]['itemChoiceEtypeId']=function(){return this['_itemChoiceEtypeId']||0x0;},Game_Message[_0x40e911(0x464)][_0x40e911(0x186)]=function(_0x10c62f,_0x1d91cb,_0x102db6){const _0x95f001=_0x40e911;this[_0x95f001(0x45b)]=_0x10c62f,this[_0x95f001(0x4c5)]='skill',this[_0x95f001(0x146)]=_0x1d91cb,this['_itemChoiceStypeId']=_0x102db6;},Game_Message[_0x40e911(0x464)][_0x40e911(0x16b)]=function(){const _0x1bb641=_0x40e911;return this[_0x1bb641(0x146)]||0x0;},Game_Message['prototype'][_0x40e911(0x3c4)]=function(){const _0x188624=_0x40e911;return $gameActors[_0x188624(0x1c9)](this[_0x188624(0x16b)]())||$gameParty['leader']()||null;},Game_Message['prototype']['itemChoiceStypeId']=function(){const _0x55a997=_0x40e911;return this[_0x55a997(0x17f)]||0x0;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x27b)]=Game_Message['prototype'][_0x40e911(0x1cd)],Game_Message[_0x40e911(0x464)][_0x40e911(0x1cd)]=function(_0x260bf3,_0x58de7a,_0x56a302){const _0x57f051=_0x40e911;this[_0x57f051(0x472)]=!![],VisuMZ[_0x57f051(0x348)][_0x57f051(0x27b)][_0x57f051(0x3b1)](this,_0x260bf3,_0x58de7a,_0x56a302);},Game_Message[_0x40e911(0x464)]['setupShuffleChoices']=function(){const _0xb31c3c=_0x40e911;this[_0xb31c3c(0x472)]=![],this[_0xb31c3c(0x49e)]=[];const _0x1679f0=this[_0xb31c3c(0x4c2)][_0xb31c3c(0x347)];this[_0xb31c3c(0x454)]=_0x1679f0;let _0x359efb=![];for(let _0x35a067=0x0;_0x35a067<_0x1679f0;_0x35a067++){let _0x4a9451=this[_0xb31c3c(0x4c2)][_0x35a067];_0x4a9451['match'](/<SHUFFLE>/gi)&&(_0x359efb=!![],_0x4a9451=_0x4a9451[_0xb31c3c(0x489)](/<SHUFFLE>/gi,'')),_0x4a9451[_0xb31c3c(0x215)](/<SHUFFLE:[ ](\d+)>/gi)&&(_0x359efb=!![],this[_0xb31c3c(0x454)]=Math[_0xb31c3c(0x3d3)](Number(RegExp['$1']),this[_0xb31c3c(0x454)]),_0x4a9451=_0x4a9451[_0xb31c3c(0x489)](/<SHUFFLE:[ ](\d+)>/gi,'')),_0x4a9451[_0xb31c3c(0x215)](/<SHUFFLE: VAR[ ](\d+)>/gi)&&(_0x359efb=!![],this[_0xb31c3c(0x454)]=Math[_0xb31c3c(0x3d3)]($gameVariables[_0xb31c3c(0x311)](Number(RegExp['$1']))||0x1,this['_maxShuffleChoices']),_0x4a9451=_0x4a9451[_0xb31c3c(0x489)](/<SHUFFLE:[ ]VAR (\d+)>/gi,'')),this[_0xb31c3c(0x49e)][_0xb31c3c(0x202)](_0x35a067),this[_0xb31c3c(0x4c2)][_0x35a067]=_0x4a9451;}if(_0x359efb){this[_0xb31c3c(0x49e)]=VisuMZ[_0xb31c3c(0x348)][_0xb31c3c(0x3cd)](this[_0xb31c3c(0x49e)]);if(this[_0xb31c3c(0x3f9)]()!==-0x2)this[_0xb31c3c(0x149)]=-0x1;}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3cd)]=function(_0x10752c){const _0x5d8d36=_0x40e911;var _0x359f5c,_0x5ae006,_0x2b4254;for(_0x2b4254=_0x10752c[_0x5d8d36(0x347)]-0x1;_0x2b4254>0x0;_0x2b4254--){_0x359f5c=Math['floor'](Math[_0x5d8d36(0x1f0)]()*(_0x2b4254+0x1)),_0x5ae006=_0x10752c[_0x2b4254],_0x10752c[_0x2b4254]=_0x10752c[_0x359f5c],_0x10752c[_0x359f5c]=_0x5ae006;}return _0x10752c;},Game_Message[_0x40e911(0x464)][_0x40e911(0x1bb)]=function(){const _0xc061aa=_0x40e911;if(!this['_choiceIndexArray'])this[_0xc061aa(0x2eb)]();return this[_0xc061aa(0x49e)];},Game_Message[_0x40e911(0x464)][_0x40e911(0x46e)]=function(){const _0x467f67=_0x40e911;if(this['_maxShuffleChoices']===undefined)this[_0x467f67(0x2eb)]();return this['_maxShuffleChoices'];},VisuMZ[_0x40e911(0x348)]['Game_Screen_clearPictures']=Game_Screen[_0x40e911(0x464)]['clearPictures'],Game_Screen['prototype']['clearPictures']=function(){const _0x1ce77a=_0x40e911;VisuMZ[_0x1ce77a(0x348)][_0x1ce77a(0x403)][_0x1ce77a(0x3b1)](this),this['clearAllPictureTexts']();},Game_Screen['prototype'][_0x40e911(0x2ab)]=function(){const _0x51dd1b=_0x40e911;this[_0x51dd1b(0x1d6)]=[],this[_0x51dd1b(0x3d2)]=[],this[_0x51dd1b(0x4a5)]=[];},Game_Screen[_0x40e911(0x464)]['getPictureTextData']=function(_0x33bd70){const _0x535cc2=_0x40e911;if(this[_0x535cc2(0x1d6)]===undefined)this[_0x535cc2(0x2ab)]();const _0x1a733b=this[_0x535cc2(0x275)](_0x33bd70);return this[_0x535cc2(0x1d6)][_0x1a733b]=this['_pictureText'][_0x1a733b]||{},this[_0x535cc2(0x1d6)][_0x1a733b];},Game_Screen[_0x40e911(0x464)]['getPictureText']=function(_0x339fc8,_0x2f49b9){const _0x21005e=_0x40e911;return _0x2f49b9=_0x2f49b9['toLowerCase']()['trim'](),this[_0x21005e(0x1ac)](_0x339fc8)[_0x2f49b9]||'';},Game_Screen[_0x40e911(0x464)]['setPictureText']=function(_0x252fea,_0x4cf4cb,_0x39e378){const _0x10f964=_0x40e911;_0x39e378=_0x39e378['toLowerCase']()[_0x10f964(0x10e)](),this[_0x10f964(0x1ac)](_0x252fea)[_0x39e378]=_0x4cf4cb||'',this[_0x10f964(0x4d3)](_0x252fea,!![]);},Game_Screen[_0x40e911(0x464)][_0x40e911(0x3a2)]=function(_0x24c4d6){const _0x5ea693=_0x40e911;if(this[_0x5ea693(0x1d6)]===undefined)this[_0x5ea693(0x2ab)]();const _0x458fc9=this[_0x5ea693(0x275)](_0x24c4d6);this[_0x5ea693(0x1d6)][_0x458fc9]=null,this[_0x5ea693(0x4d3)](_0x24c4d6,!![]);},Game_Screen[_0x40e911(0x464)]['getPictureTextBuffer']=function(_0x473952){const _0x1faa71=_0x40e911;if(this[_0x1faa71(0x1d6)]===undefined)this[_0x1faa71(0x2ab)]();const _0x3a1310=this['realPictureId'](_0x473952);return this[_0x1faa71(0x3d2)][_0x3a1310]||0x0;},Game_Screen[_0x40e911(0x464)][_0x40e911(0x486)]=function(_0x457358,_0x14574b){const _0x30e1b0=_0x40e911;if(this[_0x30e1b0(0x1d6)]===undefined)this[_0x30e1b0(0x2ab)]();const _0x44f31b=this[_0x30e1b0(0x275)](_0x457358);this['_pictureTextBuffer'][_0x44f31b]=Math['max'](0x0,_0x14574b);},Game_Screen[_0x40e911(0x464)]['erasePictureTextBuffer']=function(_0x2ca2e1){const _0x27c3f4=_0x40e911;if(this[_0x27c3f4(0x1d6)]===undefined)this[_0x27c3f4(0x2ab)]();const _0x3b703b=this[_0x27c3f4(0x275)](_0x2ca2e1);this[_0x27c3f4(0x3d2)][_0x3b703b]=undefined;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x34e)]=Game_Screen[_0x40e911(0x464)][_0x40e911(0x28f)],Game_Screen[_0x40e911(0x464)]['erasePicture']=function(_0xf56f51){const _0x1d8d36=_0x40e911;VisuMZ[_0x1d8d36(0x348)][_0x1d8d36(0x34e)][_0x1d8d36(0x3b1)](this,_0xf56f51),this['eraseAllPictureTexts'](_0xf56f51),this[_0x1d8d36(0x2f3)](_0xf56f51),this[_0x1d8d36(0x4d3)](_0xf56f51,!![]);},Game_Screen[_0x40e911(0x464)][_0x40e911(0x139)]=function(){const _0x4fb3ac=_0x40e911;for(const _0x11c803 of this[_0x4fb3ac(0x364)]){if(_0x11c803){let _0xdd7e3a=this['_pictures'][_0x4fb3ac(0x329)](_0x11c803);this[_0x4fb3ac(0x4d3)](_0xdd7e3a);}}},Game_Screen[_0x40e911(0x464)]['requestPictureTextRefresh']=function(_0x534497,_0x54a9e1){const _0x18e66b=_0x40e911;this[_0x18e66b(0x4a5)]=this[_0x18e66b(0x4a5)]||[],(this[_0x18e66b(0x411)](_0x534497)||_0x54a9e1)&&this[_0x18e66b(0x4a5)]['push'](_0x534497);},Game_Screen[_0x40e911(0x464)][_0x40e911(0x242)]=function(_0x435269){const _0x3795cf=_0x40e911;return this[_0x3795cf(0x4a5)]=this['_pictureTextRefresh']||[],this['_pictureTextRefresh'][_0x3795cf(0x136)](_0x435269);},Game_Screen[_0x40e911(0x464)][_0x40e911(0x306)]=function(_0x336006){const _0x3d31f3=_0x40e911;this[_0x3d31f3(0x4a5)]=this[_0x3d31f3(0x4a5)]||[],this[_0x3d31f3(0x4a5)]['remove'](_0x336006);},Game_Screen[_0x40e911(0x464)][_0x40e911(0x411)]=function(_0x1490a9){const _0x42e5c7=_0x40e911,_0x4eefdb=[_0x42e5c7(0x142),'up',_0x42e5c7(0x16d),'left',_0x42e5c7(0x273),_0x42e5c7(0x177),_0x42e5c7(0x200),_0x42e5c7(0x41b),_0x42e5c7(0x1a2)];return _0x4eefdb['some'](_0x5b514f=>this[_0x42e5c7(0x287)](_0x1490a9,_0x5b514f)!=='');},VisuMZ[_0x40e911(0x348)][_0x40e911(0x43c)]=Game_Party[_0x40e911(0x464)][_0x40e911(0x1aa)],Game_Party[_0x40e911(0x464)][_0x40e911(0x1aa)]=function(){const _0x288c1a=_0x40e911;VisuMZ[_0x288c1a(0x348)][_0x288c1a(0x43c)][_0x288c1a(0x3b1)](this),this['initMessageCore']();},Game_Party['prototype'][_0x40e911(0x27c)]=function(){this['_lastGainedItemData']={'type':0x0,'id':0x0,'quantity':0x0};},Game_Party[_0x40e911(0x464)][_0x40e911(0x1a0)]=function(){const _0x3db503=_0x40e911;if(this[_0x3db503(0x392)]===undefined)this[_0x3db503(0x27c)]();return this[_0x3db503(0x392)];},Game_Party[_0x40e911(0x464)][_0x40e911(0x483)]=function(_0x31ab16,_0x43bf7c){const _0x3a1ffd=_0x40e911;if(this[_0x3a1ffd(0x392)]===undefined)this[_0x3a1ffd(0x27c)]();if(!_0x31ab16)return;if(DataManager[_0x3a1ffd(0x43d)](_0x31ab16))this[_0x3a1ffd(0x392)][_0x3a1ffd(0x4b7)]=0x0;else{if(DataManager['isWeapon'](_0x31ab16))this['_lastGainedItemData']['type']=0x1;else DataManager['isArmor'](_0x31ab16)&&(this[_0x3a1ffd(0x392)][_0x3a1ffd(0x4b7)]=0x2);}this[_0x3a1ffd(0x392)]['id']=_0x31ab16['id'],this[_0x3a1ffd(0x392)][_0x3a1ffd(0x3f0)]=_0x43bf7c;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3b3)]=Game_Party[_0x40e911(0x464)]['gainItem'],Game_Party[_0x40e911(0x464)]['gainItem']=function(_0x5d51b2,_0x3e1632,_0x1588c5){const _0x16dda2=_0x40e911;VisuMZ[_0x16dda2(0x348)]['Game_Party_gainItem'][_0x16dda2(0x3b1)](this,_0x5d51b2,_0x3e1632,_0x1588c5),_0x3e1632>0x0&&this[_0x16dda2(0x483)](_0x5d51b2,_0x3e1632);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x476)]=Game_Map[_0x40e911(0x464)]['initialize'],Game_Map['prototype'][_0x40e911(0x1aa)]=function(){const _0x7d7989=_0x40e911;VisuMZ['MessageCore'][_0x7d7989(0x476)]['call'](this),this[_0x7d7989(0x244)]=[];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x374)]=Game_Map[_0x40e911(0x464)][_0x40e911(0x427)],Game_Map[_0x40e911(0x464)][_0x40e911(0x427)]=function(){const _0x1835f=_0x40e911;VisuMZ[_0x1835f(0x348)][_0x1835f(0x374)]['call'](this),this['_messageCommonEvents']=[];},VisuMZ['MessageCore']['Game_Map_updateEvents']=Game_Map[_0x40e911(0x464)]['updateEvents'],Game_Map[_0x40e911(0x464)][_0x40e911(0x4a8)]=function(){const _0x4cf9bb=_0x40e911;VisuMZ[_0x4cf9bb(0x348)][_0x4cf9bb(0x373)][_0x4cf9bb(0x3b1)](this),this[_0x4cf9bb(0x12d)]();},Game_Map[_0x40e911(0x464)][_0x40e911(0x291)]=function(_0x4deb05){const _0x39ffa6=_0x40e911;if(!$dataCommonEvents[_0x4deb05])return;this[_0x39ffa6(0x244)]=this['_messageCommonEvents']||[];const _0xc2d53e=this[_0x39ffa6(0x3a7)]['_eventId'],_0x336715=new Game_MessageCommonEvent(_0x4deb05,_0xc2d53e);this[_0x39ffa6(0x244)][_0x39ffa6(0x202)](_0x336715);},Game_Map[_0x40e911(0x464)][_0x40e911(0x12d)]=function(){const _0x4b9f32=_0x40e911;this[_0x4b9f32(0x244)]=this['_messageCommonEvents']||[];for(const _0x4732f3 of this['_messageCommonEvents']){!_0x4732f3[_0x4b9f32(0x3a7)]?this[_0x4b9f32(0x244)][_0x4b9f32(0x296)](_0x4732f3):_0x4732f3['update']();}},VisuMZ['MessageCore']['Game_Map_refresh']=Game_Map['prototype'][_0x40e911(0x34b)],Game_Map['prototype']['refresh']=function(){const _0x3e299b=_0x40e911;VisuMZ['MessageCore'][_0x3e299b(0x424)]['call'](this),$gameScreen[_0x3e299b(0x139)]();},Game_Interpreter['MESSAGE_CORE_PLUGIN_NAME']=pluginData[_0x40e911(0x495)],Game_Interpreter['prototype'][_0x40e911(0x3c3)]=function(_0x1d5a33){const _0xa80eab=_0x40e911;if($gameMessage['isBusy']())return![];return this['prepareShowTextCommand'](_0x1d5a33),this[_0xa80eab(0x15f)](_0x1d5a33),this[_0xa80eab(0x433)](_0x1d5a33),this[_0xa80eab(0x45a)](_0xa80eab(0x1af)),!![];},Game_Interpreter['prototype'][_0x40e911(0x342)]=function(_0x22c42d){const _0x3e4bb4=_0x40e911;$gameMessage['setFaceImage'](_0x22c42d[0x0],_0x22c42d[0x1]),$gameMessage['setBackground'](_0x22c42d[0x2]),$gameMessage[_0x3e4bb4(0x2e0)](_0x22c42d[0x3]),$gameMessage[_0x3e4bb4(0x23a)](_0x22c42d[0x4]);},Game_Interpreter[_0x40e911(0x464)]['addContinuousShowTextCommands']=function(_0x3eec43){const _0x366247=_0x40e911;while(this['isContinuePrepareShowTextCommands']()){this[_0x366247(0x1bf)]++;if(this[_0x366247(0x111)]()[_0x366247(0x417)]===0x191){let _0x1d55b4=this[_0x366247(0x111)]()['parameters'][0x0];_0x1d55b4=VisuMZ[_0x366247(0x348)]['ParseAddedText'](_0x1d55b4),$gameMessage[_0x366247(0x3ce)](_0x1d55b4);}if(this[_0x366247(0x48c)]())break;}},Game_Interpreter['prototype'][_0x40e911(0x3ca)]=function(){const _0x5d174d=_0x40e911;return this['nextEventCode']()===0x65&&$gameSystem[_0x5d174d(0x377)]()>0x4?!![]:this[_0x5d174d(0x16f)]()===0x191;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x1c7)]=function(_0x502bec){const _0x165219=_0x40e911,_0x58a5d6=VisuMZ['MessageCore']['Settings'][_0x165219(0x127)];return _0x502bec=(_0x58a5d6[_0x165219(0x3f4)]||'')+_0x502bec+(_0x58a5d6['EachMessageEnd']||''),_0x502bec=_0x502bec[_0x165219(0x489)](/<(?:NEXT PAGE|NEXTPAGE)>/gi,''),_0x502bec=_0x502bec[_0x165219(0x489)](/<(?:RNG|RAND|RANDOM)>(.*?)<\/(?:RNG|RAND|RANDOM)>/gi,(_0xd80e25,_0x47c56a)=>this['getRandomTextFromPool'](_0x47c56a)),_0x502bec;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x165)]=function(_0xd1f0c1){const _0x3160a6=_0x40e911,_0x1e781b=_0xd1f0c1[_0x3160a6(0x297)]('|')[_0x3160a6(0x290)](_0x8ea584=>_0x8ea584[_0x3160a6(0x10e)]())[_0x3160a6(0x296)]('')['remove'](null);return _0x1e781b[Math[_0x3160a6(0x2ae)](_0x1e781b[_0x3160a6(0x347)])];},Game_Interpreter['prototype'][_0x40e911(0x48c)]=function(){const _0x1a34d5=_0x40e911;if(this[_0x1a34d5(0x111)]()&&this[_0x1a34d5(0x111)]()['parameters'][0x0][_0x1a34d5(0x215)](/<(?:NEXT PAGE|NEXTPAGE)>/gi))return!![];return $gameMessage[_0x1a34d5(0x11d)][_0x1a34d5(0x347)]>=$gameSystem[_0x1a34d5(0x377)]()&&this[_0x1a34d5(0x16f)]()!==0x191;},Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x433)]=function(_0x55f037){const _0x4ab412=_0x40e911;switch(this['nextEventCode']()){case 0x66:this['_index']++,this[_0x4ab412(0x1f9)](this[_0x4ab412(0x111)]()[_0x4ab412(0x3a6)]);break;case 0x67:this[_0x4ab412(0x1bf)]++,this[_0x4ab412(0x3f2)](this[_0x4ab412(0x111)]()[_0x4ab412(0x3a6)]);break;case 0x68:this[_0x4ab412(0x1bf)]++,this[_0x4ab412(0x3a3)](this[_0x4ab412(0x111)]()['parameters']);break;case 0x165:const _0x109500=this[_0x4ab412(0x35f)][this[_0x4ab412(0x1bf)]+0x1],_0x200084=_0x109500['parameters'];_0x200084[0x0]===Game_Interpreter[_0x4ab412(0x17d)]&&this[_0x4ab412(0x148)](_0x200084);break;}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x465)]=Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x1f9)],Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x1f9)]=function(_0x12222f){const _0x5e24b8=_0x40e911;_0x12222f=this[_0x5e24b8(0x1f5)](),VisuMZ[_0x5e24b8(0x348)][_0x5e24b8(0x465)][_0x5e24b8(0x3b1)](this,_0x12222f),$gameMessage[_0x5e24b8(0x2eb)]();},Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x1f5)]=function(){const _0x359464=_0x40e911,_0x46dbfc=this[_0x359464(0x1bf)],_0x54fd8e=[];let _0x38c8aa=0x0;this[_0x359464(0x1bf)]++;while(this[_0x359464(0x1bf)]<this['_list']['length']){if(this['currentCommand']()[_0x359464(0x183)]===this[_0x359464(0x353)]){if(this[_0x359464(0x111)]()[_0x359464(0x417)]===0x194&&this[_0x359464(0x16f)]()!==0x66)break;else{if(this[_0x359464(0x111)]()[_0x359464(0x417)]===0x66)this[_0x359464(0x1c3)](_0x38c8aa,this[_0x359464(0x111)](),_0x46dbfc),this[_0x359464(0x1bf)]-=0x2;else this['currentCommand']()[_0x359464(0x417)]===0x192&&(this['currentCommand']()[_0x359464(0x3a6)][0x0]=_0x38c8aa,_0x38c8aa++);}}this[_0x359464(0x1bf)]++;}return this[_0x359464(0x1bf)]=_0x46dbfc,this['currentCommand']()[_0x359464(0x3a6)];},Game_Interpreter[_0x40e911(0x464)]['adjustShowChoiceExtension']=function(_0x1b614d,_0x2118a4,_0x27a729){const _0x3c7623=_0x40e911;this['adjustShowChoiceDefault'](_0x1b614d,_0x2118a4,_0x27a729),this[_0x3c7623(0x2aa)](_0x1b614d,_0x2118a4,_0x27a729),this[_0x3c7623(0x1b7)](_0x2118a4,_0x27a729);},Game_Interpreter[_0x40e911(0x464)]['adjustShowChoiceDefault']=function(_0xb6e234,_0x1af3ae,_0x103259){const _0x4edf06=_0x40e911;if(_0x1af3ae['parameters'][0x2]<0x0)return;const _0x120614=_0x1af3ae[_0x4edf06(0x3a6)][0x2]+_0xb6e234;this[_0x4edf06(0x35f)][_0x103259][_0x4edf06(0x3a6)][0x2]=_0x120614;},Game_Interpreter[_0x40e911(0x464)]['adjustShowChoiceCancel']=function(_0x3ddfc7,_0x4e1980,_0x3764da){const _0x3d8e10=_0x40e911;if(_0x4e1980[_0x3d8e10(0x3a6)][0x1]>=0x0){var _0x84ee98=_0x4e1980[_0x3d8e10(0x3a6)][0x1]+_0x3ddfc7;this[_0x3d8e10(0x35f)][_0x3764da][_0x3d8e10(0x3a6)][0x1]=_0x84ee98;}else _0x4e1980['parameters'][0x1]===-0x2&&(this[_0x3d8e10(0x35f)][_0x3764da][_0x3d8e10(0x3a6)][0x1]=_0x4e1980[_0x3d8e10(0x3a6)][0x1]);},Game_Interpreter[_0x40e911(0x464)]['addExtraShowChoices']=function(_0x2ef184,_0xaceb46){const _0xbbe596=_0x40e911;for(const _0x1601bc of _0x2ef184[_0xbbe596(0x3a6)][0x0]){this['_list'][_0xaceb46]['parameters'][0x0][_0xbbe596(0x202)](_0x1601bc);}this['_list']['splice'](this[_0xbbe596(0x1bf)]-0x1,0x2);},Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x148)]=function(_0x58b7af){const _0x24b031=_0x40e911,_0x3b9841=_0x58b7af[0x1];if(_0x3b9841===_0x24b031(0x31e))this[_0x24b031(0x1bf)]++,this['setWeaponChoice'](_0x58b7af);else{if(_0x3b9841===_0x24b031(0x42a))this[_0x24b031(0x1bf)]++,this[_0x24b031(0x279)](_0x58b7af);else _0x3b9841===_0x24b031(0x265)&&Imported['VisuMZ_1_SkillsStatesCore']&&(this[_0x24b031(0x1bf)]++,this['setSkillChoice'](_0x58b7af));}},Game_Interpreter[_0x40e911(0x464)][_0x40e911(0x4bb)]=function(_0x2c0573){const _0x1c9c50=_0x40e911,_0x78b97=JSON[_0x1c9c50(0x4ac)](JSON[_0x1c9c50(0x428)](_0x2c0573[0x3]));VisuMZ['ConvertParams'](_0x78b97,_0x78b97),$gameMessage[_0x1c9c50(0x4bb)](_0x78b97[_0x1c9c50(0x304)]||0x0,_0x78b97[_0x1c9c50(0x266)]||0x0);},Game_Interpreter[_0x40e911(0x464)]['setArmorChoice']=function(_0x46cbdf){const _0x41ba74=_0x40e911,_0x17abd9=JSON[_0x41ba74(0x4ac)](JSON[_0x41ba74(0x428)](_0x46cbdf[0x3]));VisuMZ[_0x41ba74(0x49d)](_0x17abd9,_0x17abd9),$gameMessage[_0x41ba74(0x279)](_0x17abd9[_0x41ba74(0x304)]||0x0,_0x17abd9['ArmorTypeID']||0x0,_0x17abd9[_0x41ba74(0x14f)]||0x0);},Game_Interpreter['prototype'][_0x40e911(0x186)]=function(_0x27f68d){const _0x37b865=_0x40e911,_0x350ff2=JSON['parse'](JSON[_0x37b865(0x428)](_0x27f68d[0x3]));VisuMZ[_0x37b865(0x49d)](_0x350ff2,_0x350ff2),$gameMessage[_0x37b865(0x186)](_0x350ff2[_0x37b865(0x304)]||0x0,_0x350ff2[_0x37b865(0x3a8)]||0x0,_0x350ff2[_0x37b865(0x20e)]||0x0);};function Game_MessageCommonEvent(){const _0x37a646=_0x40e911;this[_0x37a646(0x1aa)](...arguments);}Game_MessageCommonEvent[_0x40e911(0x464)]['initialize']=function(_0x176015,_0x3fd39f){const _0x4e83b6=_0x40e911;this[_0x4e83b6(0x4ae)]=_0x176015,this[_0x4e83b6(0x2c4)]=_0x3fd39f||0x0,this['refresh']();},Game_MessageCommonEvent['prototype'][_0x40e911(0x45e)]=function(){const _0x5f07ff=_0x40e911;return $dataCommonEvents[this[_0x5f07ff(0x4ae)]];},Game_MessageCommonEvent[_0x40e911(0x464)][_0x40e911(0x19c)]=function(){const _0x331b13=_0x40e911;return this['event']()[_0x331b13(0x19c)];},Game_MessageCommonEvent[_0x40e911(0x464)]['refresh']=function(){const _0x245a75=_0x40e911;this['_interpreter']=new Game_Interpreter(),this[_0x245a75(0x3a7)][_0x245a75(0x212)](this[_0x245a75(0x19c)](),this[_0x245a75(0x2c4)]);},Game_MessageCommonEvent[_0x40e911(0x464)][_0x40e911(0x2e6)]=function(){const _0x242ad2=_0x40e911;this[_0x242ad2(0x3a7)]&&(this[_0x242ad2(0x3a7)]['isRunning']()?this[_0x242ad2(0x3a7)]['update']():this[_0x242ad2(0x27e)]());},Game_MessageCommonEvent[_0x40e911(0x464)][_0x40e911(0x27e)]=function(){const _0xc5dd58=_0x40e911;this[_0xc5dd58(0x3a7)]=null;},Scene_Message[_0x40e911(0x464)][_0x40e911(0x4ab)]=function(){const _0x149b79=_0x40e911,_0x146d67=Math[_0x149b79(0x3d3)](Graphics[_0x149b79(0x38e)],$gameSystem[_0x149b79(0x2e1)]()),_0x142ef5=$gameSystem[_0x149b79(0x377)](),_0x593189=this[_0x149b79(0x272)](_0x142ef5,![]),_0x3c6309=(Graphics[_0x149b79(0x3b5)]-_0x146d67)/0x2,_0x3e16f3=0x0;return new Rectangle(_0x3c6309,_0x3e16f3,_0x146d67,_0x593189);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x2cf)]=Scene_Message['prototype'][_0x40e911(0x2f2)],Scene_Message[_0x40e911(0x464)]['createChoiceListWindow']=function(){const _0x3af4bd=_0x40e911;VisuMZ['MessageCore'][_0x3af4bd(0x2cf)][_0x3af4bd(0x3b1)](this),this[_0x3af4bd(0x18d)]();},Scene_Message[_0x40e911(0x464)][_0x40e911(0x18d)]=function(){const _0x5ba63c=_0x40e911,_0x478353=this[_0x5ba63c(0x3fc)](),_0xc3252=new Window_Help(_0x478353);_0xc3252[_0x5ba63c(0x301)](),this[_0x5ba63c(0x17e)]['setHelpWindow'](_0xc3252),this['_messageWindow'][_0x5ba63c(0x335)](_0xc3252),this[_0x5ba63c(0x1ce)](_0xc3252),this['_choiceListHelpWindow']=_0xc3252;},Scene_Message[_0x40e911(0x464)][_0x40e911(0x3fc)]=function(){const _0x4e7755=_0x40e911,_0x10577a=0x0,_0x27291b=0x0,_0x3a9807=Graphics[_0x4e7755(0x3b5)],_0x5ca57c=this[_0x4e7755(0x272)](0x2,![]);return new Rectangle(_0x10577a,_0x27291b,_0x3a9807,_0x5ca57c);},Window_Message['prototype'][_0x40e911(0x335)]=function(_0xc9aa4f){const _0x432fa8=_0x40e911;this[_0x432fa8(0x110)]=_0xc9aa4f;},Window_Message[_0x40e911(0x464)]['updateChoiceListHelpWindowPlacement']=function(){const _0x2b6f5b=_0x40e911;if(!this[_0x2b6f5b(0x110)])return;const _0xbd5dfa=this[_0x2b6f5b(0x110)];_0xbd5dfa&&(_0xbd5dfa['y']=this['y']>0x0?0x0:Graphics[_0x2b6f5b(0x1b1)]-_0xbd5dfa['height']);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x122)]=Scene_Options[_0x40e911(0x464)]['maxCommands'],Scene_Options[_0x40e911(0x464)][_0x40e911(0x22a)]=function(){const _0x2fe870=_0x40e911;let _0x4de82c=VisuMZ[_0x2fe870(0x348)][_0x2fe870(0x122)][_0x2fe870(0x3b1)](this);const _0xc04421=VisuMZ['MessageCore'][_0x2fe870(0x386)];if(_0xc04421['TextSpeed']['AdjustRect']){_0xc04421[_0x2fe870(0x18f)]['AddOption']&&TextManager[_0x2fe870(0x481)]()&&_0x4de82c++;if(_0xc04421[_0x2fe870(0x1c6)][_0x2fe870(0x3c8)])_0x4de82c++;}return _0x4de82c;},VisuMZ['MessageCore'][_0x40e911(0x150)]=Sprite_Picture['prototype'][_0x40e911(0x45f)],Sprite_Picture[_0x40e911(0x464)]['updateBitmap']=function(){const _0x2208c6=_0x40e911;VisuMZ[_0x2208c6(0x348)][_0x2208c6(0x150)][_0x2208c6(0x3b1)](this),this[_0x2208c6(0x32f)]();},VisuMZ[_0x40e911(0x348)]['Sprite_Picture_update']=Sprite_Picture['prototype'][_0x40e911(0x2e6)],Sprite_Picture['prototype'][_0x40e911(0x2e6)]=function(){const _0x3832da=_0x40e911;VisuMZ[_0x3832da(0x348)]['Sprite_Picture_update']['call'](this),this[_0x3832da(0x206)]();},Sprite_Picture[_0x40e911(0x464)][_0x40e911(0x206)]=function(){const _0xdd707a=_0x40e911;if(!this[_0xdd707a(0x10d)])return;this[_0xdd707a(0x474)](),this[_0xdd707a(0x4b4)](),this['drawPictureText'](),this[_0xdd707a(0x485)]();},Sprite_Picture[_0x40e911(0x464)][_0x40e911(0x32f)]=function(){const _0x3f41ad=_0x40e911;if(this[_0x3f41ad(0x307)])return;if(this['_pictureTextSprite'])return;const _0x3fb326=new Rectangle(0x0,0x0,0x0,0x0);this[_0x3f41ad(0x307)]=new Window_Base(_0x3fb326),this[_0x3f41ad(0x307)][_0x3f41ad(0x4b8)]=0x0,this[_0x3f41ad(0x2fe)]=new Sprite(),this[_0x3f41ad(0x2f6)](this['_pictureTextSprite'],0x0),this[_0x3f41ad(0x349)]=0x0,this['_pictureTextHeight']=0x0,this[_0x3f41ad(0x151)]={};},Sprite_Picture['prototype'][_0x40e911(0x474)]=function(){const _0x48ef20=_0x40e911;if(!this[_0x48ef20(0x307)])return;if(this['_pictureTextWidth']===this[_0x48ef20(0x38e)]&&this[_0x48ef20(0x316)]===this[_0x48ef20(0x4e2)])return;this[_0x48ef20(0x349)]=this['width'],this[_0x48ef20(0x316)]=this[_0x48ef20(0x4e2)],this['_pictureTextCache']={},this[_0x48ef20(0x307)][_0x48ef20(0x197)](0x0,0x0,this[_0x48ef20(0x38e)],this[_0x48ef20(0x4e2)]);},Sprite_Picture[_0x40e911(0x464)][_0x40e911(0x4b4)]=function(){const _0x53ff5b=_0x40e911;if(!this[_0x53ff5b(0x2fe)])return;this[_0x53ff5b(0x2fe)][_0x53ff5b(0x112)]['x']=this[_0x53ff5b(0x112)]['x'],this[_0x53ff5b(0x2fe)][_0x53ff5b(0x112)]['y']=this[_0x53ff5b(0x112)]['y'];},Sprite_Picture['prototype'][_0x40e911(0x1a6)]=function(){const _0x211703=_0x40e911;if(!this[_0x211703(0x307)])return;if(!this[_0x211703(0x2b1)]())return;const _0xa7ff56=[_0x211703(0x142),'up',_0x211703(0x16d),_0x211703(0x4c1),_0x211703(0x273),_0x211703(0x177),'lowerleft','down',_0x211703(0x1a2)];this[_0x211703(0x307)]['createContents']();for(const _0x595460 of _0xa7ff56){this['drawPictureTextZone'](_0x595460);}},Sprite_Picture['prototype'][_0x40e911(0x2b1)]=function(){const _0x5d0092=_0x40e911;if($gameScreen[_0x5d0092(0x242)](this[_0x5d0092(0x2c6)]))return!![];const _0x577f28=[_0x5d0092(0x142),'up',_0x5d0092(0x16d),_0x5d0092(0x4c1),_0x5d0092(0x273),_0x5d0092(0x177),_0x5d0092(0x200),'down',_0x5d0092(0x1a2)];for(const _0x1673ea of _0x577f28){const _0x17c2ab=$gameScreen['getPictureText'](this['_pictureId'],_0x1673ea);if(this['_pictureTextCache'][_0x1673ea]===_0x17c2ab)continue;return!![];}return![];},Sprite_Picture[_0x40e911(0x464)][_0x40e911(0x448)]=function(_0x4b313b){const _0xad346a=_0x40e911;$gameScreen['clearPictureTextRefresh'](this['_pictureId']);const _0x43a849=$gameScreen[_0xad346a(0x287)](this['_pictureId'],_0x4b313b);this[_0xad346a(0x151)][_0x4b313b]=_0x43a849;const _0x238ddb=this['_pictureTextWindow'][_0xad346a(0x10f)](_0x43a849);let _0xb4190d=$gameScreen[_0xad346a(0x15d)](this[_0xad346a(0x2c6)]),_0x48a5e1=_0xb4190d,_0x3fb79a=_0xb4190d;if(['up',_0xad346a(0x273),'down']['includes'](_0x4b313b))_0x48a5e1=Math[_0xad346a(0x4d7)]((this[_0xad346a(0x38e)]-_0x238ddb['width'])/0x2);else[_0xad346a(0x16d),_0xad346a(0x177),_0xad346a(0x1a2)][_0xad346a(0x136)](_0x4b313b)&&(_0x48a5e1=Math['floor'](this['width']-_0x238ddb[_0xad346a(0x38e)]-_0xb4190d));if([_0xad346a(0x4c1),_0xad346a(0x273),_0xad346a(0x177)]['includes'](_0x4b313b))_0x3fb79a=Math[_0xad346a(0x4d7)]((this[_0xad346a(0x4e2)]-_0x238ddb[_0xad346a(0x4e2)])/0x2);else['lowerleft',_0xad346a(0x41b),_0xad346a(0x1a2)][_0xad346a(0x136)](_0x4b313b)&&(_0x3fb79a=Math[_0xad346a(0x4d7)](this[_0xad346a(0x4e2)]-_0x238ddb[_0xad346a(0x4e2)]-_0xb4190d));this[_0xad346a(0x307)][_0xad346a(0x19a)](_0x43a849,_0x48a5e1,_0x3fb79a);},Sprite_Picture[_0x40e911(0x464)][_0x40e911(0x485)]=function(){const _0x579168=_0x40e911;if(!this[_0x579168(0x307)])return;if(!this[_0x579168(0x2fe)])return;this[_0x579168(0x2fe)][_0x579168(0x3d8)]=this[_0x579168(0x307)][_0x579168(0x1b4)];},VisuMZ[_0x40e911(0x348)]['Window_Base_initialize']=Window_Base[_0x40e911(0x464)][_0x40e911(0x1aa)],Window_Base[_0x40e911(0x464)][_0x40e911(0x1aa)]=function(_0x372ebf){const _0x35cb07=_0x40e911;this[_0x35cb07(0x27c)](_0x372ebf),VisuMZ[_0x35cb07(0x348)][_0x35cb07(0x222)]['call'](this,_0x372ebf);},Window_Base['prototype'][_0x40e911(0x27c)]=function(_0x381e27){const _0x34f4aa=_0x40e911;this[_0x34f4aa(0x224)](),this[_0x34f4aa(0x4c3)](),this[_0x34f4aa(0x492)](_0x381e27);},Window_Base['prototype'][_0x40e911(0x224)]=function(){const _0x2bb1c2=_0x40e911;this[_0x2bb1c2(0x413)]('default');},Window_Base[_0x40e911(0x464)][_0x40e911(0x413)]=function(_0x2ea18e){const _0x43c74d=_0x40e911;this[_0x43c74d(0x442)]=_0x2ea18e;},Window_Base[_0x40e911(0x464)]['getTextAlignment']=function(){const _0x15df1d=_0x40e911;return this[_0x15df1d(0x442)];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3aa)]=Window_Base['prototype'][_0x40e911(0x10f)],Window_Base[_0x40e911(0x464)][_0x40e911(0x10f)]=function(_0x33c9b4){const _0x3bff28=_0x40e911;return this['resetWordWrap'](),VisuMZ[_0x3bff28(0x348)][_0x3bff28(0x3aa)][_0x3bff28(0x3b1)](this,_0x33c9b4);},Window_Base[_0x40e911(0x464)][_0x40e911(0x2bc)]=function(_0x27f171){const _0x5c72ef=_0x40e911;return VisuMZ['MessageCore'][_0x5c72ef(0x3aa)][_0x5c72ef(0x3b1)](this,_0x27f171);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x283)]=Window_Base[_0x40e911(0x464)][_0x40e911(0x2b4)],Window_Base[_0x40e911(0x464)][_0x40e911(0x2b4)]=function(_0x293325){const _0x5774eb=_0x40e911;VisuMZ['MessageCore'][_0x5774eb(0x283)]['call'](this,_0x293325);if(_0x293325[_0x5774eb(0x19d)])this[_0x5774eb(0x413)](_0x5774eb(0x40b));},Window_Base[_0x40e911(0x464)]['resetWordWrap']=function(){const _0x24b96d=_0x40e911;this[_0x24b96d(0x232)](![]);},Window_Base[_0x40e911(0x464)]['isWordWrapEnabled']=function(){const _0x630f65=_0x40e911;return this[_0x630f65(0x2cd)];},Window_Base['prototype'][_0x40e911(0x232)]=function(_0x45a581){const _0x36ae94=_0x40e911;return this[_0x36ae94(0x2cd)]=_0x45a581,'';},Window_Base[_0x40e911(0x464)][_0x40e911(0x492)]=function(_0x513b0e){const _0x58c952=_0x40e911;this[_0x58c952(0x2d6)]=JsonEx[_0x58c952(0x25e)](_0x513b0e);},Window_Base[_0x40e911(0x464)][_0x40e911(0x11c)]=function(){const _0x5b88c4=_0x40e911;this[_0x5b88c4(0x1b4)][_0x5b88c4(0x33a)]=$gameSystem[_0x5b88c4(0x1d1)](),this['contents'][_0x5b88c4(0x3d1)]=$gameSystem[_0x5b88c4(0x26d)](),this[_0x5b88c4(0x1b4)][_0x5b88c4(0x4cf)]=![],this[_0x5b88c4(0x1b4)][_0x5b88c4(0x1a1)]=![],this['_textCasing']=0x0,this['_textCasingUpperState']=!![],this[_0x5b88c4(0x226)]();},Window_Base[_0x40e911(0x464)]['resetTextColor']=function(){const _0x455329=_0x40e911;this[_0x455329(0x2b3)](ColorManager[_0x455329(0x23d)]()),this[_0x455329(0x338)](ColorManager[_0x455329(0x174)]());const _0x14730a=VisuMZ[_0x455329(0x348)][_0x455329(0x386)]['General'];_0x14730a['DefaultOutlineWidth']===undefined&&(_0x14730a[_0x455329(0x3d4)]=0x3),this[_0x455329(0x1b4)][_0x455329(0x406)]=_0x14730a['DefaultOutlineWidth'],this[_0x455329(0x29b)](![]);},Window_Base[_0x40e911(0x464)]['setColorLock']=function(_0x37993d){const _0x53e884=_0x40e911;this[_0x53e884(0x115)]=_0x37993d;},Window_Base['prototype'][_0x40e911(0x218)]=function(){const _0x5000f0=_0x40e911;return this[_0x5000f0(0x115)];},Window_Base[_0x40e911(0x464)][_0x40e911(0x14c)]=function(){return![];},Window_Base[_0x40e911(0x464)][_0x40e911(0x43a)]=function(){const _0x17e420=_0x40e911,_0x2425f1=['fontFace',_0x17e420(0x3d1),_0x17e420(0x4cf),_0x17e420(0x1a1),'textColor',_0x17e420(0x17b),_0x17e420(0x406),_0x17e420(0x37d)];let _0x61d296={};for(const _0x2be210 of _0x2425f1){_0x61d296[_0x2be210]=this[_0x17e420(0x1b4)][_0x2be210];}return _0x61d296;},Window_Base[_0x40e911(0x464)][_0x40e911(0x425)]=function(_0x311d66){const _0x1b7470=_0x40e911;for(const _0xb41320 in _0x311d66){this[_0x1b7470(0x1b4)][_0xb41320]=_0x311d66[_0xb41320];}},VisuMZ[_0x40e911(0x348)][_0x40e911(0x24f)]=Window_Base['prototype'][_0x40e911(0x2e6)],Window_Base[_0x40e911(0x464)]['update']=function(){const _0x2200d0=_0x40e911;VisuMZ[_0x2200d0(0x348)][_0x2200d0(0x24f)][_0x2200d0(0x3b1)](this),this[_0x2200d0(0x4dc)]();},Window_Base['prototype'][_0x40e911(0x31c)]=function(){return![];},Window_Base[_0x40e911(0x464)][_0x40e911(0x4dc)]=function(){const _0x38541c=_0x40e911;this[_0x38541c(0x436)]>0x0&&(this[_0x38541c(0x31c)]()&&(this['x']=this[_0x38541c(0x49b)](this['x'],this['_moveTargetX']),this['y']=this[_0x38541c(0x49b)](this['y'],this[_0x38541c(0x1d8)]),this['width']=this[_0x38541c(0x49b)](this[_0x38541c(0x38e)],this[_0x38541c(0x1e2)]),this[_0x38541c(0x4e2)]=this[_0x38541c(0x49b)](this['height'],this[_0x38541c(0x470)]),this[_0x38541c(0x381)]()),this[_0x38541c(0x436)]--);},Window_Base[_0x40e911(0x464)][_0x40e911(0x381)]=function(_0x1aabff,_0x2da6ec){const _0x33a55e=_0x40e911;!_0x1aabff&&(this[_0x33a55e(0x38e)]=Math[_0x33a55e(0x3d3)](this[_0x33a55e(0x38e)],Graphics['width']),this['height']=Math['min'](this['height'],Graphics[_0x33a55e(0x4e2)]));if(!_0x2da6ec){const _0x30db43=-(Math['floor'](Graphics[_0x33a55e(0x38e)]-Graphics[_0x33a55e(0x3b5)])/0x2),_0x35a371=_0x30db43+Graphics[_0x33a55e(0x38e)]-this[_0x33a55e(0x38e)],_0xac2d3a=-(Math['floor'](Graphics[_0x33a55e(0x4e2)]-Graphics[_0x33a55e(0x1b1)])/0x2),_0x7e14bc=_0xac2d3a+Graphics[_0x33a55e(0x4e2)]-this['height'];this['x']=this['x'][_0x33a55e(0x333)](_0x30db43,_0x35a371),this['y']=this['y'][_0x33a55e(0x333)](_0xac2d3a,_0x7e14bc);}},Window_Base[_0x40e911(0x464)][_0x40e911(0x49b)]=function(_0x54aff8,_0x267c5c){const _0x475431=_0x40e911,_0x2d75b2=this[_0x475431(0x436)],_0x2dbfd5=this[_0x475431(0x2a6)],_0x2e6602=this[_0x475431(0x239)]((_0x2dbfd5-_0x2d75b2)/_0x2dbfd5),_0x43e94f=this[_0x475431(0x239)]((_0x2dbfd5-_0x2d75b2+0x1)/_0x2dbfd5),_0xb92bc=(_0x54aff8-_0x267c5c*_0x2e6602)/(0x1-_0x2e6602);return _0xb92bc+(_0x267c5c-_0xb92bc)*_0x43e94f;},Window_Base['prototype'][_0x40e911(0x239)]=function(_0x37ce99){const _0x5aa39a=_0x40e911,_0x589272=0x2;switch(this[_0x5aa39a(0x1c5)]){case 0x0:return _0x37ce99;case 0x1:return this[_0x5aa39a(0x15a)](_0x37ce99,_0x589272);case 0x2:return this['easeOut'](_0x37ce99,_0x589272);case 0x3:return this[_0x5aa39a(0x288)](_0x37ce99,_0x589272);default:return Imported[_0x5aa39a(0x20b)]?VisuMZ[_0x5aa39a(0x49b)](_0x37ce99,this[_0x5aa39a(0x1c5)]):_0x37ce99;}},Window_Base[_0x40e911(0x464)][_0x40e911(0x3b4)]=function(_0x5af83b,_0x250eeb,_0xb92567,_0x4f10b0,_0x420e75,_0x4c7592){const _0x5b43c2=_0x40e911;this[_0x5b43c2(0x36b)]=_0x5af83b,this[_0x5b43c2(0x1d8)]=_0x250eeb,this['_moveTargetWidth']=_0xb92567||this[_0x5b43c2(0x38e)],this['_moveTargetHeight']=_0x4f10b0||this[_0x5b43c2(0x4e2)],this[_0x5b43c2(0x436)]=_0x420e75||0x1;if(this[_0x5b43c2(0x436)]<=0x0)this[_0x5b43c2(0x436)]=0x1;this[_0x5b43c2(0x2a6)]=this[_0x5b43c2(0x436)],this[_0x5b43c2(0x1c5)]=_0x4c7592||0x0;if(_0x420e75<=0x0)this[_0x5b43c2(0x4dc)]();},Window_Base['prototype'][_0x40e911(0x1b5)]=function(_0x566841,_0x54bb6d,_0x2cf4bf,_0x13758b,_0x56412b,_0x5ecb30){const _0x1f2dcb=_0x40e911;this['_moveTargetX']=this['x']+_0x566841,this[_0x1f2dcb(0x1d8)]=this['y']+_0x54bb6d,this[_0x1f2dcb(0x1e2)]=this['width']+(_0x2cf4bf||0x0),this[_0x1f2dcb(0x470)]=this['height']+(_0x13758b||0x0),this[_0x1f2dcb(0x436)]=_0x56412b||0x1;if(this[_0x1f2dcb(0x436)]<=0x0)this[_0x1f2dcb(0x436)]=0x1;this[_0x1f2dcb(0x2a6)]=this[_0x1f2dcb(0x436)],this[_0x1f2dcb(0x1c5)]=_0x5ecb30||0x0;if(_0x56412b<=0x0)this[_0x1f2dcb(0x4dc)]();},Window_Base[_0x40e911(0x464)]['resetRect']=function(_0x442130,_0x557dce){const _0x5e826a=_0x40e911;this['moveTo'](this[_0x5e826a(0x2d6)]['x'],this[_0x5e826a(0x2d6)]['y'],this[_0x5e826a(0x2d6)][_0x5e826a(0x38e)],this['_resetRect']['height'],_0x442130,_0x557dce);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x2cb)]=Window_Base['prototype']['changeTextColor'],Window_Base[_0x40e911(0x464)][_0x40e911(0x2b3)]=function(_0x4119c7){const _0x60600d=_0x40e911;if(this[_0x60600d(0x218)]())return;_0x4119c7=_0x4119c7[_0x60600d(0x489)](/\,/g,''),this[_0x60600d(0x3a0)]=this[_0x60600d(0x3a0)]||[],this[_0x60600d(0x3a0)][_0x60600d(0x2b0)](this['contents'][_0x60600d(0x16e)]),VisuMZ[_0x60600d(0x348)]['Window_Base_changeTextColor'][_0x60600d(0x3b1)](this,_0x4119c7);},Window_Base[_0x40e911(0x464)][_0x40e911(0x13e)]=function(_0x29216d){const _0x2a5839=_0x40e911;this[_0x2a5839(0x25a)](_0x29216d);if(this[_0x2a5839(0x218)]())return;_0x29216d[_0x2a5839(0x19d)]&&(this[_0x2a5839(0x3a0)]=this[_0x2a5839(0x3a0)]||[],this[_0x2a5839(0x1b4)][_0x2a5839(0x16e)]=this[_0x2a5839(0x3a0)][_0x2a5839(0x156)]()||ColorManager[_0x2a5839(0x23d)]());},Window_Base[_0x40e911(0x464)]['convertEscapeCharacters']=function(_0x5844ce){const _0x13362f=_0x40e911;return _0x5844ce=this[_0x13362f(0x17a)](_0x5844ce),_0x5844ce=this[_0x13362f(0x1ca)](_0x5844ce),_0x5844ce=this[_0x13362f(0x4a6)](_0x5844ce),_0x5844ce=this[_0x13362f(0x286)](_0x5844ce),_0x5844ce=this['preConvertEscapeCharacters'](_0x5844ce),_0x5844ce=this[_0x13362f(0x2c3)](_0x5844ce),_0x5844ce=this[_0x13362f(0x3ef)](_0x5844ce),_0x5844ce=this[_0x13362f(0x271)](_0x5844ce),_0x5844ce=this[_0x13362f(0x385)](_0x5844ce),_0x5844ce=this[_0x13362f(0x415)](_0x5844ce),_0x5844ce=this['convertBaseEscapeCharacters'](_0x5844ce),_0x5844ce=this[_0x13362f(0x1da)](_0x5844ce),_0x5844ce=this['convertMessageCoreEscapeActions'](_0x5844ce),_0x5844ce=this[_0x13362f(0x21b)](_0x5844ce),_0x5844ce=this[_0x13362f(0x107)](_0x5844ce),_0x5844ce=this['convertVariableEscapeCharacters'](_0x5844ce),_0x5844ce=this['processAutoColorWords'](_0x5844ce),_0x5844ce=this[_0x13362f(0x332)](_0x5844ce),_0x5844ce;},Window_Base[_0x40e911(0x464)][_0x40e911(0x17a)]=function(_0x33e543){const _0xf52048=_0x40e911;this['_textMacroFound']=![];for(const _0x2f381c of VisuMZ[_0xf52048(0x348)][_0xf52048(0x386)][_0xf52048(0x422)]){_0x33e543&&_0x33e543['match'](_0x2f381c[_0xf52048(0x19f)])&&(this['_textMacroFound']=!![],_0x33e543=_0x33e543[_0xf52048(0x489)](_0x2f381c['textCodeCheck'],_0x2f381c[_0xf52048(0x460)][_0xf52048(0x32d)](this)));}return _0x33e543||'';},Window_Base[_0x40e911(0x464)][_0x40e911(0x1ca)]=function(_0x3feed3){const _0x53c924=_0x40e911;return _0x3feed3=_0x3feed3[_0x53c924(0x489)](/\\/g,'\x1b'),_0x3feed3=_0x3feed3[_0x53c924(0x489)](/\x1b\x1b/g,'\x5c'),_0x3feed3;},Window_Base[_0x40e911(0x464)][_0x40e911(0x4a6)]=function(_0x118271){const _0x3ed6a5=_0x40e911;for(;;){if(_0x118271[_0x3ed6a5(0x215)](/\\V\[(\d+)\]/gi))_0x118271=_0x118271[_0x3ed6a5(0x489)](/\\V\[(\d+)\]/gi,(_0x5f204b,_0x3890c2)=>this[_0x3ed6a5(0x1ca)](String($gameVariables[_0x3ed6a5(0x311)](parseInt(_0x3890c2)))));else{if(_0x118271[_0x3ed6a5(0x215)](/\x1bV\[(\d+)\]/gi))_0x118271=_0x118271['replace'](/\x1bV\[(\d+)\]/gi,(_0x4d207f,_0x18ed65)=>this[_0x3ed6a5(0x1ca)](String($gameVariables['value'](parseInt(_0x18ed65)))));else break;}}return _0x118271;},Window_Base[_0x40e911(0x464)]['convertButtonAssistEscapeCharacters']=function(_0xbb4e0){const _0x415a44=_0x40e911;return Imported[_0x415a44(0x20b)]&&(_0xbb4e0=_0xbb4e0['replace'](/<Up (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)]('up')),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Left (?:KEY|BUTTON)>/gi,this['convertButtonAssistText'](_0x415a44(0x4c1))),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Right (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)](_0x415a44(0x177))),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Down (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)](_0x415a44(0x41b))),_0xbb4e0=_0xbb4e0['replace'](/<Ok (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)]('ok')),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Cancel (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('cancel')),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Menu (?:KEY|BUTTON)>/gi,this['convertButtonAssistText']('menu')),_0xbb4e0=_0xbb4e0[_0x415a44(0x489)](/<Shift (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)](_0x415a44(0x156))),_0xbb4e0=_0xbb4e0['replace'](/<(?:PAGEUP|PAGE UP) (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)]('pageup')),_0xbb4e0=_0xbb4e0['replace'](/<(?:PAGEDOWN|PAGEDN|PAGE DOWN) (?:KEY|BUTTON)>/gi,this[_0x415a44(0x396)](_0x415a44(0x368)))),_0xbb4e0;},Window_Base[_0x40e911(0x464)][_0x40e911(0x396)]=function(_0x4ff8b5){const _0x24e346=_0x40e911;let _0x3b79a6=TextManager[_0x24e346(0x24c)](_0x4ff8b5)||'';return _0x3b79a6=this[_0x24e346(0x1ca)](_0x3b79a6),_0x3b79a6=this[_0x24e346(0x4a6)](_0x3b79a6),_0x3b79a6[_0x24e346(0x10e)]();},Window_Base[_0x40e911(0x464)][_0x40e911(0x3cf)]=function(_0x18f32c){const _0x550283=_0x40e911;return _0x18f32c=this[_0x550283(0x1fe)](_0x18f32c),this[_0x550283(0x268)](),_0x18f32c;},Window_Base[_0x40e911(0x464)][_0x40e911(0x1fe)]=function(_0x339b6d){return _0x339b6d=TextManager['parseLocalizedText'](_0x339b6d),_0x339b6d;},VisuMZ['MessageCore'][_0x40e911(0x1ed)]=String['prototype'][_0x40e911(0x119)],String[_0x40e911(0x464)]['format']=function(){const _0x5afb91=_0x40e911;let _0xdb005f=this;return _0xdb005f=TextManager[_0x5afb91(0x45c)](_0xdb005f),VisuMZ[_0x5afb91(0x348)][_0x5afb91(0x1ed)]['apply'](_0xdb005f,arguments);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x31b)]=Bitmap[_0x40e911(0x464)][_0x40e911(0x40f)],Bitmap[_0x40e911(0x464)][_0x40e911(0x40f)]=function(_0x323e,_0xa51d89,_0x25f7a9,_0x280d48,_0xe9cd5,_0x30609e){const _0x5bd688=_0x40e911;_0x323e=TextManager[_0x5bd688(0x45c)](_0x323e),VisuMZ[_0x5bd688(0x348)][_0x5bd688(0x31b)]['call'](this,_0x323e,_0xa51d89,_0x25f7a9,_0x280d48,_0xe9cd5,_0x30609e);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3f1)]=Bitmap[_0x40e911(0x464)][_0x40e911(0x449)],Bitmap[_0x40e911(0x464)][_0x40e911(0x449)]=function(_0x1b91e9,_0x3baa2d,_0x5a3c45,_0x359fd6,_0x102971,_0x5f33e8){const _0x222d39=_0x40e911;_0x1b91e9=TextManager['parseLocalizedText'](_0x1b91e9),VisuMZ[_0x222d39(0x348)][_0x222d39(0x3f1)]['call'](this,_0x1b91e9,_0x3baa2d,_0x5a3c45,_0x359fd6,_0x102971,_0x5f33e8);},Window_Base[_0x40e911(0x464)]['postConvertEscapeCharacters']=function(_0x40a902){return _0x40a902;},Window_Base['prototype'][_0x40e911(0x2c3)]=function(_0x1ccff0){const _0x49a88f=_0x40e911;return this['isChoiceWindow']()&&(_0x1ccff0=_0x1ccff0['replace'](/<(?:SHOW|HIDE|DISABLE|ENABLE)>/gi,''),_0x1ccff0=_0x1ccff0[_0x49a88f(0x489)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x1ccff0=_0x1ccff0[_0x49a88f(0x489)](/<(?:SHOW|HIDE|DISABLE|ENABLE)[ ](?:ALL|ANY)[ ](?:SWITCH|SWITCHES):[ ](.*?)>/gi,''),_0x1ccff0=_0x1ccff0['replace'](/<CHOICE WIDTH:[ ](\d+)>/gi,''),_0x1ccff0=_0x1ccff0['replace'](/<CHOICE INDENT:[ ](\d+)>/gi,''),_0x1ccff0=_0x1ccff0[_0x49a88f(0x489)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi,''),_0x1ccff0=_0x1ccff0['replace'](/<(?:FG|BG)(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/gi,''),_0x1ccff0=_0x1ccff0[_0x49a88f(0x489)](/<(?:FG|BG)(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/gi,'')),_0x1ccff0;},Window_Base[_0x40e911(0x464)][_0x40e911(0x23e)]=function(){const _0x246119=_0x40e911,_0x46d773=[_0x246119(0x213),_0x246119(0x4c4)];return _0x46d773['includes'](this[_0x246119(0x237)][_0x246119(0x495)]);},Window_Base['prototype']['convertFontSettingsEscapeCharacters']=function(_0x8b0b58){const _0x1542ad=_0x40e911;return _0x8b0b58=_0x8b0b58[_0x1542ad(0x489)](/<B>/gi,_0x1542ad(0x331)),_0x8b0b58=_0x8b0b58[_0x1542ad(0x489)](/<\/B>/gi,'\x1bBOLD[0]'),_0x8b0b58=_0x8b0b58[_0x1542ad(0x489)](/<I>/gi,_0x1542ad(0x44f)),_0x8b0b58=_0x8b0b58[_0x1542ad(0x489)](/<\/I>/gi,_0x1542ad(0x3bf)),_0x8b0b58;},Window_Base[_0x40e911(0x464)][_0x40e911(0x271)]=function(_0x3807d7){const _0x5be822=_0x40e911;return _0x3807d7=_0x3807d7[_0x5be822(0x489)](/<LEFT>/gi,_0x5be822(0x199)),_0x3807d7=_0x3807d7[_0x5be822(0x489)](/<\/LEFT>/gi,'\x1bTEXTALIGNMENT[0]'),_0x3807d7=_0x3807d7[_0x5be822(0x489)](/<CENTER>/gi,_0x5be822(0x336)),_0x3807d7=_0x3807d7[_0x5be822(0x489)](/<\/CENTER>/gi,_0x5be822(0x321)),_0x3807d7=_0x3807d7[_0x5be822(0x489)](/<RIGHT>/gi,'\x1bTEXTALIGNMENT[3]'),_0x3807d7=_0x3807d7[_0x5be822(0x489)](/<\/RIGHT>/gi,_0x5be822(0x321)),_0x3807d7;},Window_Base['prototype'][_0x40e911(0x385)]=function(_0x2d194c){const _0x298e29=_0x40e911;return _0x2d194c=_0x2d194c['replace'](/<COLORLOCK>/gi,_0x298e29(0x480)),_0x2d194c=_0x2d194c['replace'](/<\/COLORLOCK>/gi,'\x1bCOLORLOCK[0]'),_0x2d194c=_0x2d194c[_0x298e29(0x489)](/\(\(\(/gi,_0x298e29(0x480)),_0x2d194c=_0x2d194c['replace'](/\)\)\)/gi,_0x298e29(0x1e4)),_0x2d194c;},Window_Base[_0x40e911(0x464)][_0x40e911(0x415)]=function(_0x4796eb){const _0x27018b=_0x40e911;return _0x4796eb=_0x4796eb['replace'](/<(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x27018b(0x29c)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<\/(?:LC|LOWERCASE|LOWER CASE|LOWER)>/gi,_0x27018b(0x4a3)),_0x4796eb=_0x4796eb['replace'](/<(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x27018b(0x423)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<\/(?:UC|UPPERCASE|UPPER CASE|UPPER)>/gi,_0x27018b(0x4a3)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,'\x1bCASING[3]'),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<\/(?:CAPS|CAPSLOCK|CAPS LOCK|CAP)>/gi,_0x27018b(0x4a3)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x27018b(0x128)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<\/(?:ALT|ALTERNATE|ALT CASE)>/gi,_0x27018b(0x4a3)),_0x4796eb=_0x4796eb[_0x27018b(0x489)](/<(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,_0x27018b(0x3c5)),_0x4796eb=_0x4796eb['replace'](/<\/(?:CHAOS|CHAOSCASE|CHAOS CASE)>/gi,'\x1bCASING[0]'),_0x4796eb;},Window_Base['prototype'][_0x40e911(0x31f)]=function(_0x2fd9dc){const _0x4d5c54=_0x40e911;return _0x2fd9dc=_0x2fd9dc[_0x4d5c54(0x489)](/\x1bN\[(\d+)\]/gi,(_0x1a9df2,_0x2f455b)=>this['actorName'](parseInt(_0x2f455b))),_0x2fd9dc=_0x2fd9dc[_0x4d5c54(0x489)](/\x1bP\[(\d+)\]/gi,(_0x1f798a,_0x35ad00)=>this['partyMemberName'](parseInt(_0x35ad00))),_0x2fd9dc=_0x2fd9dc[_0x4d5c54(0x489)](/\x1bG/gi,TextManager['currencyUnit']),_0x2fd9dc;},Window_Base[_0x40e911(0x464)][_0x40e911(0x1da)]=function(_0x1c2052){const _0x21adaf=_0x40e911;return _0x1c2052=_0x1c2052['replace'](/\<(?:BATTLE|CURRENT BATTLE) TARGET\>/gi,this[_0x21adaf(0x13b)]()),_0x1c2052=_0x1c2052[_0x21adaf(0x489)](/\<(?:BATTLE|CURRENT BATTLE) (?:USER|SUBJECT)\>/gi,this[_0x21adaf(0x17c)]()),_0x1c2052=_0x1c2052[_0x21adaf(0x489)](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION)\>/gi,this[_0x21adaf(0x370)](!![])),_0x1c2052=_0x1c2052['replace'](/\<(?:BATTLE|CURRENT BATTLE) (?:ITEM|SKILL|ACTION) NAME\>/gi,this['battleActionName'](![])),_0x1c2052;},Window_Base[_0x40e911(0x464)][_0x40e911(0x13b)]=function(){const _0x546bc3=_0x40e911;if(!SceneManager[_0x546bc3(0x14e)]())return'';if(BattleManager[_0x546bc3(0x298)])return BattleManager[_0x546bc3(0x298)][_0x546bc3(0x495)]();if(BattleManager[_0x546bc3(0x2a9)][0x0])return BattleManager['_targets'][0x0][_0x546bc3(0x495)]();return'';},Window_Base[_0x40e911(0x464)][_0x40e911(0x17c)]=function(){const _0x4baf9f=_0x40e911;if(!SceneManager[_0x4baf9f(0x14e)]())return'';let _0x33071a=null;return _0x33071a=BattleManager[_0x4baf9f(0x4e0)],!_0x33071a&&BattleManager[_0x4baf9f(0x10b)]()&&(_0x33071a=BattleManager['actor']()),_0x33071a?_0x33071a[_0x4baf9f(0x495)]():'';},Window_Base[_0x40e911(0x464)]['battleActionName']=function(_0x187071){const _0x24a3ae=_0x40e911;if(!SceneManager[_0x24a3ae(0x14e)]())return'';let _0x675960=BattleManager[_0x24a3ae(0x1eb)]||null;!_0x675960&&BattleManager['isInputting']()&&(_0x675960=BattleManager[_0x24a3ae(0x252)]());if(_0x675960&&_0x675960[_0x24a3ae(0x3a9)]()){let _0x543079='';if(_0x187071)_0x543079+=_0x24a3ae(0x4ba)[_0x24a3ae(0x119)](_0x675960[_0x24a3ae(0x3a9)]()[_0x24a3ae(0x4d2)]);return _0x543079+=_0x675960[_0x24a3ae(0x3a9)]()[_0x24a3ae(0x495)],_0x543079;}return'';},Window_Base['prototype'][_0x40e911(0x328)]=function(_0x42ee0a){const _0x1f0b41=_0x40e911;for(const _0x521921 of VisuMZ[_0x1f0b41(0x348)][_0x1f0b41(0x386)][_0x1f0b41(0x491)]){_0x42ee0a[_0x1f0b41(0x215)](_0x521921[_0x1f0b41(0x19f)])&&(_0x42ee0a=_0x42ee0a[_0x1f0b41(0x489)](_0x521921['textCodeCheck'],_0x521921[_0x1f0b41(0x460)]),_0x42ee0a=this['convertVariableEscapeCharacters'](_0x42ee0a));}return _0x42ee0a;},Window_Base[_0x40e911(0x464)][_0x40e911(0x21b)]=function(_0xd71218){const _0x29185a=_0x40e911;for(const _0x13891d of VisuMZ['MessageCore'][_0x29185a(0x386)][_0x29185a(0x305)]){_0xd71218[_0x29185a(0x215)](_0x13891d[_0x29185a(0x19f)])&&(_0xd71218=_0xd71218['replace'](_0x13891d[_0x29185a(0x19f)],_0x13891d[_0x29185a(0x460)][_0x29185a(0x32d)](this)),_0xd71218=this['convertVariableEscapeCharacters'](_0xd71218));}return _0xd71218;},Window_Base[_0x40e911(0x464)][_0x40e911(0x2c5)]=function(_0x361001){const _0x2e8811=_0x40e911,_0x5d662c=_0x361001>=0x1?$gameActors[_0x2e8811(0x1c9)](_0x361001):null,_0x186e96=_0x5d662c?_0x5d662c[_0x2e8811(0x495)]():'',_0x1554a4=Number(VisuMZ[_0x2e8811(0x348)]['Settings'][_0x2e8811(0x416)][_0x2e8811(0x4af)]);return this[_0x2e8811(0x14c)]()&&_0x1554a4!==0x0?_0x2e8811(0x387)[_0x2e8811(0x119)](_0x1554a4,_0x186e96):_0x186e96;},Window_Base['prototype'][_0x40e911(0x143)]=function(_0x48cec4){const _0xfd3047=_0x40e911,_0xe4ef78=_0x48cec4>=0x1?$gameParty[_0xfd3047(0x441)]()[_0x48cec4-0x1]:null,_0x1acc7e=_0xe4ef78?_0xe4ef78[_0xfd3047(0x495)]():'',_0x58bdbe=Number(VisuMZ[_0xfd3047(0x348)][_0xfd3047(0x386)][_0xfd3047(0x416)][_0xfd3047(0x4af)]);return this['isAutoColorAffected']()&&_0x58bdbe!==0x0?_0xfd3047(0x387)[_0xfd3047(0x119)](_0x58bdbe,_0x1acc7e):_0x1acc7e;},Window_Base[_0x40e911(0x464)][_0x40e911(0x42d)]=function(_0x8d592a){const _0xdf6bd=_0x40e911;return this[_0xdf6bd(0x14c)]()&&(_0x8d592a=this[_0xdf6bd(0x319)](_0x8d592a),_0x8d592a=this[_0xdf6bd(0x125)](_0x8d592a)),_0x8d592a;},Window_Base[_0x40e911(0x464)][_0x40e911(0x319)]=function(_0x16e3df){const _0x1583a8=_0x40e911;for(autoColor of VisuMZ[_0x1583a8(0x348)]['AutoColorRegExp']){_0x16e3df=_0x16e3df[_0x1583a8(0x489)](autoColor[0x0],autoColor[0x1]);}return _0x16e3df;},Window_Base['prototype'][_0x40e911(0x135)]=function(){const _0x23fd29=_0x40e911;this[_0x23fd29(0x4d1)]=[];},Window_Base[_0x40e911(0x464)][_0x40e911(0x268)]=function(){const _0x5982fd=_0x40e911;this['clearActorNameAutoColor']();const _0x44a732=VisuMZ[_0x5982fd(0x348)][_0x5982fd(0x386)][_0x5982fd(0x416)],_0x1e8f87=_0x44a732[_0x5982fd(0x4af)];if(_0x1e8f87<=0x0)return;for(const _0x4782e2 of $gameActors[_0x5982fd(0x250)]){if(!_0x4782e2)continue;const _0x1b0263=_0x4782e2['name']();if(_0x1b0263[_0x5982fd(0x10e)]()[_0x5982fd(0x347)]<=0x0)continue;if(/^\d+$/[_0x5982fd(0x444)](_0x1b0263))continue;if(_0x1b0263[_0x5982fd(0x215)](/-----/i))continue;let _0x3f797d=VisuMZ['MessageCore'][_0x5982fd(0x401)](_0x1b0263);const _0x325101=new RegExp('\x5cb'+_0x3f797d+'\x5cb','g'),_0xee349f=_0x5982fd(0x387)[_0x5982fd(0x119)](_0x1e8f87,_0x1b0263);this[_0x5982fd(0x4d1)]['push']([_0x325101,_0xee349f]);}},Window_Base[_0x40e911(0x464)][_0x40e911(0x125)]=function(_0x47ca1){const _0x12d6d0=_0x40e911;this[_0x12d6d0(0x4d1)]===undefined&&this[_0x12d6d0(0x268)]();for(autoColor of this[_0x12d6d0(0x4d1)]){_0x47ca1=_0x47ca1['replace'](autoColor[0x0],autoColor[0x1]);}return _0x47ca1;},Window_Base[_0x40e911(0x464)][_0x40e911(0x33c)]=function(_0x161955,_0x143e85,_0x5975f4){const _0x75782c=_0x40e911;if(!_0x161955)return'';const _0x2a35a2=_0x161955[_0x143e85];let _0x54d660='';if(_0x2a35a2&&_0x5975f4&&_0x2a35a2[_0x75782c(0x4d2)]){const _0x3f5fd6=_0x75782c(0x3b6);_0x54d660=_0x3f5fd6[_0x75782c(0x119)](_0x2a35a2[_0x75782c(0x4d2)],_0x2a35a2[_0x75782c(0x495)]);}else _0x2a35a2?_0x54d660=_0x2a35a2[_0x75782c(0x495)]:_0x54d660='';return _0x54d660=TextManager[_0x75782c(0x45c)](_0x54d660),this['isAutoColorAffected']()&&(_0x54d660=this[_0x75782c(0x4c0)](_0x54d660,_0x161955)),_0x54d660;},Window_Base[_0x40e911(0x464)][_0x40e911(0x2f4)]=function(){const _0x509906=_0x40e911,_0x36f7d6=$gameParty[_0x509906(0x1a0)]();if(_0x36f7d6['id']<0x0)return'';let _0x5e071c=null;if(_0x36f7d6['type']===0x0)_0x5e071c=$dataItems[_0x36f7d6['id']];if(_0x36f7d6[_0x509906(0x4b7)]===0x1)_0x5e071c=$dataWeapons[_0x36f7d6['id']];if(_0x36f7d6[_0x509906(0x4b7)]===0x2)_0x5e071c=$dataArmors[_0x36f7d6['id']];if(!_0x5e071c)return'';return'\x1bi[%1]'[_0x509906(0x119)](_0x5e071c['iconIndex']);},Window_Base[_0x40e911(0x464)][_0x40e911(0x3c1)]=function(_0x33cd61){const _0x3a595e=_0x40e911,_0x4dc48c=$gameParty['getLastGainedItemData']();if(_0x4dc48c['id']<0x0)return'';let _0x162086=null;if(_0x4dc48c['type']===0x0)_0x162086=$dataItems[_0x4dc48c['id']];if(_0x4dc48c['type']===0x1)_0x162086=$dataWeapons[_0x4dc48c['id']];if(_0x4dc48c['type']===0x2)_0x162086=$dataArmors[_0x4dc48c['id']];if(!_0x162086)return'';let _0x2085d4=_0x162086['name']||'';return TextManager['isVisuMzLocalizationEnabled']()&&(_0x2085d4=TextManager[_0x3a595e(0x45c)](_0x2085d4)),_0x33cd61?_0x3a595e(0x3b6)[_0x3a595e(0x119)](_0x162086[_0x3a595e(0x4d2)],_0x2085d4):_0x2085d4;},Window_Base[_0x40e911(0x464)][_0x40e911(0x334)]=function(){const _0x1c1d99=_0x40e911,_0x5c74e2=$gameParty[_0x1c1d99(0x1a0)]();if(_0x5c74e2['id']<=0x0)return'';return _0x5c74e2[_0x1c1d99(0x3f0)];},Window_Base[_0x40e911(0x464)][_0x40e911(0x4c0)]=function(_0x3590d3,_0x15c1ae){const _0x151888=_0x40e911,_0x298037=VisuMZ[_0x151888(0x348)][_0x151888(0x386)]['AutoColor'];let _0x3f8ce7=0x0;if(_0x15c1ae===$dataActors)_0x3f8ce7=_0x298037[_0x151888(0x4af)];if(_0x15c1ae===$dataClasses)_0x3f8ce7=_0x298037[_0x151888(0x39c)];if(_0x15c1ae===$dataSkills)_0x3f8ce7=_0x298037[_0x151888(0x487)];if(_0x15c1ae===$dataItems)_0x3f8ce7=_0x298037[_0x151888(0x41f)];if(_0x15c1ae===$dataWeapons)_0x3f8ce7=_0x298037[_0x151888(0x4d4)];if(_0x15c1ae===$dataArmors)_0x3f8ce7=_0x298037[_0x151888(0x30c)];if(_0x15c1ae===$dataEnemies)_0x3f8ce7=_0x298037[_0x151888(0x4dd)];if(_0x15c1ae===$dataStates)_0x3f8ce7=_0x298037[_0x151888(0x11f)];return _0x3f8ce7>0x0&&(_0x3590d3=_0x151888(0x387)[_0x151888(0x119)](_0x3f8ce7,_0x3590d3)),_0x3590d3;},Window_Base['prototype'][_0x40e911(0x332)]=function(_0x519c1d){const _0x5d5fb5=_0x40e911;if(_0x519c1d[_0x5d5fb5(0x136)]('\x1bTEXTALIGNMENT'))return this[_0x5d5fb5(0x232)](![]),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:WORDWRAP|WORD WRAP)>/gi,''),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<\/(?:NOWORDWRAP|NO WORD WRAP)>/gi,''),_0x519c1d;_0x519c1d=_0x519c1d['replace'](/<(?:WORDWRAP|WORD WRAP)>/gi,(_0x2068c1,_0x2ccfd9)=>this['setWordWrap'](!![])),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:NOWORDWRAP|NO WORD WRAP)>/gi,(_0x2c8b33,_0x22815e)=>this[_0x5d5fb5(0x232)](![])),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<\/(?:WORDWRAP|WORD WRAP)>/gi,(_0x3efc43,_0x26f90e)=>this[_0x5d5fb5(0x232)](![]));if(_0x519c1d[_0x5d5fb5(0x215)](Window_Message[_0x5d5fb5(0x130)]))this[_0x5d5fb5(0x232)](![]);else _0x519c1d[_0x5d5fb5(0x215)](Window_Message['_autoPosRegExp'])&&this[_0x5d5fb5(0x232)](![]);if(!this[_0x5d5fb5(0x453)]())return _0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a'),_0x519c1d;if(_0x519c1d[_0x5d5fb5(0x347)]<=0x0)return _0x519c1d;return _0x519c1d[_0x5d5fb5(0x215)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)&&(_0x519c1d=VisuMZ[_0x5d5fb5(0x348)]['SplitJpCnCharacters'](_0x519c1d)[_0x5d5fb5(0x468)]('')),VisuMZ[_0x5d5fb5(0x348)][_0x5d5fb5(0x386)][_0x5d5fb5(0x284)]['LineBreakSpace']?(_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/[\n\r]+/g,'\x20'),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x20\x0a')):(_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/[\n\r]+/g,''),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x0a')),_0x519c1d=this[_0x5d5fb5(0x23b)](_0x519c1d),_0x519c1d=_0x519c1d[_0x5d5fb5(0x297)]('\x20')[_0x5d5fb5(0x468)](_0x5d5fb5(0x2d9)),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x519c1d=_0x519c1d[_0x5d5fb5(0x489)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x519c1d;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3fd)]=function(_0x41cdf8){const _0x1a3af9=_0x40e911;let _0x38b01d=[],_0x14ff9c='';while(_0x41cdf8[_0x1a3af9(0x347)]>0x0){const _0x5849e7=_0x41cdf8['charAt'](0x0);_0x41cdf8=_0x41cdf8[_0x1a3af9(0x280)](0x1),_0x5849e7[_0x1a3af9(0x215)](/[\u3040-\u30FF\u4E00-\u9FFF]/g)?(_0x14ff9c[_0x1a3af9(0x347)]>0x0&&(_0x38b01d['push'](_0x14ff9c),_0x14ff9c=''),_0x38b01d[_0x1a3af9(0x202)](_0x5849e7+_0x1a3af9(0x4b6))):_0x14ff9c+=_0x5849e7;}return _0x14ff9c[_0x1a3af9(0x347)]>0x0&&(_0x38b01d['push'](_0x14ff9c),_0x14ff9c=''),_0x38b01d;},Window_Base[_0x40e911(0x464)][_0x40e911(0x23b)]=function(_0x16a31f){return _0x16a31f;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x4d0)]=Window_Base[_0x40e911(0x464)]['processNewLine'],Window_Base[_0x40e911(0x464)][_0x40e911(0x2d4)]=function(_0x4e14c2){const _0x24e03c=_0x40e911;VisuMZ[_0x24e03c(0x348)][_0x24e03c(0x4d0)][_0x24e03c(0x3b1)](this,_0x4e14c2),this[_0x24e03c(0x256)](_0x4e14c2);},Window_Base[_0x40e911(0x464)]['processCharacter']=function(_0x2887b1){const _0x2fa52b=_0x40e911;let _0x1e4e87=_0x2887b1[_0x2fa52b(0x308)][_0x2887b1[_0x2fa52b(0x1bd)]++];if(_0x1e4e87['charCodeAt'](0x0)<0x20)this[_0x2fa52b(0x32e)](_0x2887b1),this[_0x2fa52b(0x294)](_0x2887b1,_0x1e4e87);else{if(this['_textCasing']===0x1)_0x1e4e87=_0x1e4e87['toLowerCase']();if(this[_0x2fa52b(0x46a)]===0x2){if(this[_0x2fa52b(0x2ca)])_0x1e4e87=_0x1e4e87[_0x2fa52b(0x344)]();this[_0x2fa52b(0x2ca)]=/\s/[_0x2fa52b(0x444)](_0x1e4e87);}if(this[_0x2fa52b(0x46a)]===0x3)_0x1e4e87=_0x1e4e87[_0x2fa52b(0x344)]();this[_0x2fa52b(0x46a)]===0x4&&(_0x1e4e87=this[_0x2fa52b(0x240)]?_0x1e4e87[_0x2fa52b(0x344)]():_0x1e4e87[_0x2fa52b(0x31d)](),this[_0x2fa52b(0x240)]=!this[_0x2fa52b(0x240)]),this['_textCasing']===0x5&&(_0x1e4e87=Math['random']()<0.5?_0x1e4e87[_0x2fa52b(0x344)]():_0x1e4e87[_0x2fa52b(0x31d)]()),_0x2887b1[_0x2fa52b(0x124)]+=_0x1e4e87;}},VisuMZ[_0x40e911(0x348)]['Window_Base_processControlCharacter']=Window_Base[_0x40e911(0x464)][_0x40e911(0x294)],Window_Base[_0x40e911(0x464)][_0x40e911(0x294)]=function(_0x143819,_0x1dd8f7){const _0x970406=_0x40e911;VisuMZ['MessageCore']['Window_Base_processControlCharacter'][_0x970406(0x3b1)](this,_0x143819,_0x1dd8f7);if(_0x1dd8f7===_0x970406(0x2d9))this[_0x970406(0x1dc)](_0x143819);else _0x1dd8f7===_0x970406(0x4b6)&&this[_0x970406(0x1dc)](_0x143819,!![]);},Window_Base['prototype'][_0x40e911(0x47f)]=function(_0x2fc4d5){const _0x3d17b6=_0x40e911;var _0x2d4a83=/^\<(.*?)\>/[_0x3d17b6(0x3dc)](_0x2fc4d5[_0x3d17b6(0x308)][_0x3d17b6(0x280)](_0x2fc4d5['index']));return _0x2d4a83?(_0x2fc4d5[_0x3d17b6(0x1bd)]+=_0x2d4a83[0x0][_0x3d17b6(0x347)],String(_0x2d4a83[0x0][_0x3d17b6(0x280)](0x1,_0x2d4a83[0x0][_0x3d17b6(0x347)]-0x1))):'';},VisuMZ[_0x40e911(0x348)][_0x40e911(0x152)]=Window_Base[_0x40e911(0x464)][_0x40e911(0x21a)],Window_Base[_0x40e911(0x464)][_0x40e911(0x21a)]=function(_0x158ed9,_0x3ddd1c){const _0x5ed4e5=_0x40e911;switch(_0x158ed9){case'C':_0x3ddd1c[_0x5ed4e5(0x19d)]?VisuMZ[_0x5ed4e5(0x348)]['Window_Base_processEscapeCharacter'][_0x5ed4e5(0x3b1)](this,_0x158ed9,_0x3ddd1c):this['obtainEscapeParam'](_0x3ddd1c);break;case'I':case'{':case'}':VisuMZ['MessageCore'][_0x5ed4e5(0x152)][_0x5ed4e5(0x3b1)](this,_0x158ed9,_0x3ddd1c);break;case'FS':this['processFsTextCode'](_0x3ddd1c);break;case'PX':this[_0x5ed4e5(0x189)](_0x3ddd1c);break;case'PY':this['processPyTextCode'](_0x3ddd1c);break;case _0x5ed4e5(0x4c7):this['processFontChangeBold'](this[_0x5ed4e5(0x25a)](_0x3ddd1c));break;case'CASING':this['processTextCasing'](_0x3ddd1c);break;case _0x5ed4e5(0x1f1):this[_0x5ed4e5(0x2ed)](_0x3ddd1c);break;case _0x5ed4e5(0x225):this['processColorLock'](_0x3ddd1c);break;case _0x5ed4e5(0x24b):this[_0x5ed4e5(0x42e)](_0x3ddd1c);break;case'ITALIC':this[_0x5ed4e5(0x1e3)](this[_0x5ed4e5(0x25a)](_0x3ddd1c));break;case'PICTURE':this[_0x5ed4e5(0x30b)](_0x3ddd1c);break;case _0x5ed4e5(0x467):this[_0x5ed4e5(0x13e)](_0x3ddd1c);break;case _0x5ed4e5(0x131):this['processTextAlignmentChange'](_0x3ddd1c);break;case _0x5ed4e5(0x123):this[_0x5ed4e5(0x3a5)](_0x3ddd1c);break;case _0x5ed4e5(0x134):this[_0x5ed4e5(0x1dc)](_0x3ddd1c);break;case _0x5ed4e5(0x3df):this[_0x5ed4e5(0x1dc)](_0x3ddd1c,!![]);break;default:this[_0x5ed4e5(0x477)](_0x158ed9,_0x3ddd1c);}},Window_Base['prototype']['processMessageCoreEscapeActions']=function(_0x416520,_0x74b5f8){const _0x248953=_0x40e911;for(const _0x2532f6 of VisuMZ[_0x248953(0x348)][_0x248953(0x386)][_0x248953(0x491)]){if(_0x2532f6[_0x248953(0x378)]===_0x416520){if(_0x2532f6[_0x248953(0x430)]==='')this[_0x248953(0x25a)](_0x74b5f8);_0x2532f6[_0x248953(0x18a)][_0x248953(0x3b1)](this,_0x74b5f8);if(this[_0x248953(0x237)]===Window_Message){const _0x138959=_0x2532f6['CommonEvent']||0x0;if(_0x138959>0x0)this['launchMessageCommonEvent'](_0x138959);}}}},Window_Base[_0x40e911(0x464)][_0x40e911(0x3e3)]=function(){const _0x3c44ea=_0x40e911;this[_0x3c44ea(0x1b4)][_0x3c44ea(0x3d1)]+=VisuMZ[_0x3c44ea(0x348)][_0x3c44ea(0x386)][_0x3c44ea(0x127)]['FontChangeValue'],this[_0x3c44ea(0x1b4)][_0x3c44ea(0x3d1)]=Math['min'](this[_0x3c44ea(0x1b4)][_0x3c44ea(0x3d1)],VisuMZ[_0x3c44ea(0x348)][_0x3c44ea(0x386)][_0x3c44ea(0x127)][_0x3c44ea(0x22c)]);},Window_Base[_0x40e911(0x464)][_0x40e911(0x496)]=function(){const _0x295462=_0x40e911;this[_0x295462(0x1b4)][_0x295462(0x3d1)]-=VisuMZ[_0x295462(0x348)][_0x295462(0x386)][_0x295462(0x127)][_0x295462(0x446)],this[_0x295462(0x1b4)][_0x295462(0x3d1)]=Math[_0x295462(0x27d)](this['contents'][_0x295462(0x3d1)],VisuMZ[_0x295462(0x348)][_0x295462(0x386)]['General'][_0x295462(0x1dd)]);},Window_Base['prototype'][_0x40e911(0x37a)]=function(_0x54b082){const _0x25d3c1=_0x40e911,_0x184e74=this[_0x25d3c1(0x25a)](_0x54b082);this[_0x25d3c1(0x1b4)][_0x25d3c1(0x3d1)]=_0x184e74[_0x25d3c1(0x333)](VisuMZ['MessageCore'][_0x25d3c1(0x386)][_0x25d3c1(0x127)][_0x25d3c1(0x1dd)],VisuMZ[_0x25d3c1(0x348)][_0x25d3c1(0x386)][_0x25d3c1(0x127)][_0x25d3c1(0x22c)]);},Window_Base[_0x40e911(0x464)]['maxFontSizeInLine']=function(_0x5846c8){const _0x314c66=_0x40e911;let _0xc506f7=this[_0x314c66(0x1b4)]['fontSize'];const _0x333b30=/\x1b({|}|FS)(\[(\d+)])?/gi;for(;;){const _0xa3435c=_0x333b30[_0x314c66(0x3dc)](_0x5846c8);if(!_0xa3435c)break;const _0x42d032=String(_0xa3435c[0x1])[_0x314c66(0x344)]();if(_0x42d032==='{')this[_0x314c66(0x3e3)]();else{if(_0x42d032==='}')this[_0x314c66(0x496)]();else _0x42d032==='FS'&&(this[_0x314c66(0x1b4)][_0x314c66(0x3d1)]=parseInt(_0xa3435c[0x3])[_0x314c66(0x333)](VisuMZ[_0x314c66(0x348)][_0x314c66(0x386)][_0x314c66(0x127)][_0x314c66(0x1dd)],VisuMZ[_0x314c66(0x348)]['Settings'][_0x314c66(0x127)][_0x314c66(0x22c)]));}this['contents'][_0x314c66(0x3d1)]>_0xc506f7&&(_0xc506f7=this['contents'][_0x314c66(0x3d1)]);}return _0xc506f7;},Window_Base[_0x40e911(0x464)][_0x40e911(0x189)]=function(_0x311c9c){const _0x2c1818=_0x40e911;_0x311c9c['x']=this[_0x2c1818(0x25a)](_0x311c9c),VisuMZ[_0x2c1818(0x348)][_0x2c1818(0x386)][_0x2c1818(0x127)][_0x2c1818(0x431)]&&(_0x311c9c['x']+=_0x311c9c[_0x2c1818(0x2cc)]);},Window_Base[_0x40e911(0x464)][_0x40e911(0x4b1)]=function(_0x51400d){const _0x89814=_0x40e911;_0x51400d['y']=this[_0x89814(0x25a)](_0x51400d),VisuMZ['MessageCore'][_0x89814(0x386)]['General'][_0x89814(0x431)]&&(_0x51400d['y']+=_0x51400d[_0x89814(0x161)]);},Window_Base[_0x40e911(0x464)][_0x40e911(0x241)]=function(_0x5a37f0){const _0x241281=_0x40e911;this['contents'][_0x241281(0x4cf)]=!!_0x5a37f0;},Window_Base[_0x40e911(0x464)][_0x40e911(0x1e3)]=function(_0x19a29a){const _0x2b2291=_0x40e911;this[_0x2b2291(0x1b4)][_0x2b2291(0x1a1)]=!!_0x19a29a;},Window_Base[_0x40e911(0x464)][_0x40e911(0x207)]=function(_0x29365f){const _0x587ed5=_0x40e911,_0x3f1c76=this['obtainEscapeParam'](_0x29365f);if(!_0x29365f['drawing'])return;switch(_0x3f1c76){case 0x0:this[_0x587ed5(0x413)](_0x587ed5(0x40b));return;case 0x1:this[_0x587ed5(0x413)]('left');break;case 0x2:this[_0x587ed5(0x413)](_0x587ed5(0x273));break;case 0x3:this[_0x587ed5(0x413)]('right');break;}this[_0x587ed5(0x256)](_0x29365f);},Window_Base[_0x40e911(0x464)][_0x40e911(0x256)]=function(_0x1dbdbf){const _0xa0ee6=_0x40e911;if(!_0x1dbdbf[_0xa0ee6(0x19d)])return;if(_0x1dbdbf[_0xa0ee6(0x46c)])return;if(this[_0xa0ee6(0x1ba)]()===_0xa0ee6(0x40b))return;let _0x880603=_0x1dbdbf[_0xa0ee6(0x308)][_0xa0ee6(0x329)](_0xa0ee6(0x2ee),_0x1dbdbf['index']+0x1),_0x458835=_0x1dbdbf[_0xa0ee6(0x308)]['indexOf']('\x0a',_0x1dbdbf[_0xa0ee6(0x1bd)]+0x1);if(_0x880603<0x0)_0x880603=_0x1dbdbf[_0xa0ee6(0x308)]['length']+0x1;if(_0x458835>0x0)_0x880603=Math[_0xa0ee6(0x3d3)](_0x880603,_0x458835);const _0x5eda63=_0x1dbdbf[_0xa0ee6(0x308)]['substring'](_0x1dbdbf[_0xa0ee6(0x1bd)],_0x880603),_0x2d19b1=this[_0xa0ee6(0x277)](_0x5eda63)[_0xa0ee6(0x38e)],_0x2cc292=_0x1dbdbf[_0xa0ee6(0x38e)]||this[_0xa0ee6(0x184)]-0x8,_0x4ac9d1=this[_0xa0ee6(0x237)]===Window_Message&&$gameMessage[_0xa0ee6(0x238)]()!=='';switch(this[_0xa0ee6(0x1ba)]()){case'left':_0x1dbdbf['x']=_0x1dbdbf[_0xa0ee6(0x2cc)];break;case _0xa0ee6(0x273):_0x1dbdbf['x']=_0x1dbdbf[_0xa0ee6(0x2cc)],_0x1dbdbf['x']+=Math[_0xa0ee6(0x4d7)]((_0x2cc292-_0x2d19b1)/0x2);_0x4ac9d1&&(_0x1dbdbf['x']-=_0x1dbdbf[_0xa0ee6(0x2cc)]/0x2);break;case _0xa0ee6(0x177):_0x1dbdbf['x']=_0x2cc292-_0x2d19b1+_0x1dbdbf[_0xa0ee6(0x2cc)];_0x4ac9d1&&(_0x1dbdbf['x']-=_0x1dbdbf[_0xa0ee6(0x2cc)]);break;}},Window_Base[_0x40e911(0x464)][_0x40e911(0x277)]=function(_0xd9746b){const _0xbdcea7=_0x40e911;_0xd9746b=_0xd9746b[_0xbdcea7(0x489)](/\x1b!/g,''),_0xd9746b=_0xd9746b[_0xbdcea7(0x489)](/\x1b\|/g,''),_0xd9746b=_0xd9746b[_0xbdcea7(0x489)](/\x1b\./g,'');const _0x188b63=this[_0xbdcea7(0x209)](_0xd9746b,0x0,0x0,0x0),_0x14aada=this[_0xbdcea7(0x43a)]();return _0x188b63[_0xbdcea7(0x19d)]=![],this['processAllText'](_0x188b63),this[_0xbdcea7(0x425)](_0x14aada),{'width':_0x188b63[_0xbdcea7(0x1f6)],'height':_0x188b63[_0xbdcea7(0x37c)]};},Window_Base[_0x40e911(0x166)]=VisuMZ['MessageCore'][_0x40e911(0x386)][_0x40e911(0x284)][_0x40e911(0x2a4)]||0x0,Window_Base['prototype'][_0x40e911(0x1dc)]=function(_0x2db8f8,_0x58edc6){const _0x346013=_0x40e911,_0x493857=(_0x2db8f8[_0x346013(0x46c)]?-0x1:0x1)*this[_0x346013(0x109)]('\x20');if(!_0x58edc6)_0x2db8f8['x']+=_0x493857;if(this[_0x346013(0x25a)](_0x2db8f8)>0x0&&!_0x58edc6)_0x2db8f8['x']+=_0x493857;if(_0x2db8f8[_0x346013(0x46c)])return;let _0x3feab0;_0x58edc6?_0x3feab0=_0x2db8f8['text'][_0x346013(0x329)]('\x1bWrapJpBreak[0]',_0x2db8f8[_0x346013(0x1bd)]+0x1):_0x3feab0=_0x2db8f8['text'][_0x346013(0x329)]('\x1bWrapBreak[0]',_0x2db8f8[_0x346013(0x1bd)]+0x1);let _0x5bcd3e=_0x2db8f8[_0x346013(0x308)]['indexOf']('\x0a',_0x2db8f8[_0x346013(0x1bd)]+0x1);if(_0x3feab0<0x0)_0x3feab0=_0x2db8f8[_0x346013(0x308)][_0x346013(0x347)]+0x1;if(_0x5bcd3e>0x0)_0x3feab0=Math[_0x346013(0x3d3)](_0x3feab0,_0x5bcd3e);const _0x442b8c=_0x2db8f8[_0x346013(0x308)][_0x346013(0x35a)](_0x2db8f8['index'],_0x3feab0),_0xb8f674=this['textSizeExWordWrap'](_0x442b8c)[_0x346013(0x38e)];let _0x103687=_0x2db8f8['width']||this['innerWidth'];_0x103687-=Window_Base[_0x346013(0x166)];if(this['constructor']===Window_Message){const _0x52f020=$gameMessage[_0x346013(0x238)]()===''?0x0:ImageManager['faceWidth']+0x14;_0x103687-=_0x52f020,VisuMZ['MessageCore'][_0x346013(0x386)]['WordWrap']['TightWrap']&&(_0x103687-=_0x52f020);}let _0x5866a2=![];_0x2db8f8['x']+_0xb8f674>_0x2db8f8[_0x346013(0x2cc)]+_0x103687&&(_0x5866a2=!![]),_0xb8f674===0x0&&(_0x5866a2=![]),_0x5866a2&&(_0x2db8f8[_0x346013(0x308)]=_0x2db8f8[_0x346013(0x308)][_0x346013(0x280)](0x0,_0x2db8f8[_0x346013(0x1bd)])+'\x0a'+_0x2db8f8[_0x346013(0x308)][_0x346013(0x34f)](_0x2db8f8['index']));},Window_Base[_0x40e911(0x464)][_0x40e911(0x13f)]=function(_0x40e73c){const _0x106caa=_0x40e911,_0x99b47b=this['createTextState'](_0x40e73c,0x0,0x0,0x0),_0x2348c7=this['getPreservedFontSettings']();return _0x99b47b[_0x106caa(0x19d)]=![],this[_0x106caa(0x232)](![]),this[_0x106caa(0x2b4)](_0x99b47b),this['setWordWrap'](!![]),this[_0x106caa(0x425)](_0x2348c7),{'width':_0x99b47b[_0x106caa(0x1f6)],'height':_0x99b47b[_0x106caa(0x37c)]};},Window_Base[_0x40e911(0x464)][_0x40e911(0x42e)]=function(_0x573f0){const _0x166ce9=_0x40e911;return this[_0x166ce9(0x25a)](_0x573f0);},Window_Base[_0x40e911(0x464)][_0x40e911(0x30b)]=function(_0x1d229f){const _0x11508f=_0x40e911,_0x5f1d0c=this[_0x11508f(0x47f)](_0x1d229f)[_0x11508f(0x297)](',');if(!_0x1d229f['drawing'])return;const _0x4da0b8=_0x5f1d0c[0x0][_0x11508f(0x10e)](),_0x48fc0a=_0x5f1d0c[0x1]||0x0,_0x1b18bd=_0x5f1d0c[0x2]||0x0,_0x569e88=ImageManager[_0x11508f(0x359)](_0x4da0b8),_0x1669c4=this[_0x11508f(0x1b4)]['paintOpacity'];_0x569e88['addLoadListener'](this[_0x11508f(0x3eb)][_0x11508f(0x32d)](this,_0x569e88,_0x1d229f['x'],_0x1d229f['y'],_0x48fc0a,_0x1b18bd,_0x1669c4));},Window_Base[_0x40e911(0x464)][_0x40e911(0x3eb)]=function(_0x50282a,_0x54dc3e,_0x233ba5,_0x536ddd,_0x4d3d22,_0xab1682){const _0x8b3416=_0x40e911;_0x536ddd=_0x536ddd||_0x50282a[_0x8b3416(0x38e)],_0x4d3d22=_0x4d3d22||_0x50282a[_0x8b3416(0x4e2)],this[_0x8b3416(0x221)][_0x8b3416(0x37d)]=_0xab1682,this[_0x8b3416(0x221)][_0x8b3416(0x3d0)](_0x50282a,0x0,0x0,_0x50282a[_0x8b3416(0x38e)],_0x50282a[_0x8b3416(0x4e2)],_0x54dc3e,_0x233ba5,_0x536ddd,_0x4d3d22),this[_0x8b3416(0x221)][_0x8b3416(0x37d)]=0xff;},Window_Base[_0x40e911(0x464)][_0x40e911(0x2ed)]=function(_0x2a97b8){const _0x4a5f1a=_0x40e911,_0x36bbd8=this[_0x4a5f1a(0x47f)](_0x2a97b8)['split'](',');if(!_0x2a97b8[_0x4a5f1a(0x19d)])return;const _0x4b785e=_0x36bbd8[0x0]['trim'](),_0x58e605=ImageManager[_0x4a5f1a(0x359)](_0x4b785e),_0x34708c=JsonEx[_0x4a5f1a(0x25e)](_0x2a97b8),_0x15f990=this[_0x4a5f1a(0x1b4)][_0x4a5f1a(0x37d)];_0x58e605[_0x4a5f1a(0x27a)](this[_0x4a5f1a(0x25d)][_0x4a5f1a(0x32d)](this,_0x58e605,_0x34708c,_0x15f990));},Window_Base[_0x40e911(0x464)]['drawBackCenteredPicture']=function(_0x541130,_0x1938a0,_0x23f532){const _0x534e61=_0x40e911,_0x1a2102=_0x1938a0['width']||this['innerWidth'],_0x52b92d=this[_0x534e61(0x1bf)]!==undefined?this[_0x534e61(0x313)]():this['innerHeight'],_0x3683bf=_0x1a2102/_0x541130[_0x534e61(0x38e)],_0x56b772=_0x52b92d/_0x541130[_0x534e61(0x4e2)],_0x2ffca7=Math['min'](_0x3683bf,_0x56b772,0x1),_0x1cb620=this[_0x534e61(0x1bf)]!==undefined?(this[_0x534e61(0x1cc)](0x0)['height']-this[_0x534e61(0x2b2)]())/0x2:0x0,_0x26c3f4=_0x541130[_0x534e61(0x38e)]*_0x2ffca7,_0x4baf71=_0x541130['height']*_0x2ffca7,_0x118a6e=Math['floor']((_0x1a2102-_0x26c3f4)/0x2)+_0x1938a0[_0x534e61(0x2cc)],_0x3e7284=Math[_0x534e61(0x4d7)]((_0x52b92d-_0x4baf71)/0x2)+_0x1938a0[_0x534e61(0x161)]-_0x1cb620*0x2;this[_0x534e61(0x221)][_0x534e61(0x37d)]=_0x23f532,this[_0x534e61(0x221)][_0x534e61(0x3d0)](_0x541130,0x0,0x0,_0x541130[_0x534e61(0x38e)],_0x541130['height'],_0x118a6e,_0x3e7284,_0x26c3f4,_0x4baf71),this[_0x534e61(0x221)][_0x534e61(0x37d)]=0xff;},Window_Base[_0x40e911(0x464)][_0x40e911(0x2df)]=function(_0x5bff27){const _0x343afc=_0x40e911,_0x43a6d0=this[_0x343afc(0x25a)](_0x5bff27);if(_0x5bff27['drawing'])this[_0x343afc(0x29b)](_0x43a6d0>0x0);},Window_Base[_0x40e911(0x464)][_0x40e911(0x3a5)]=function(_0xbdffef){const _0x4e5cf9=_0x40e911,_0xb3efcd=this['obtainEscapeParam'](_0xbdffef);this[_0x4e5cf9(0x237)]===Window_Message&&_0xbdffef[_0x4e5cf9(0x19d)]&&this[_0x4e5cf9(0x1a9)](_0xb3efcd);},Window_Base[_0x40e911(0x464)][_0x40e911(0x2d3)]=function(_0x40c403){const _0xee12ac=_0x40e911;this[_0xee12ac(0x46a)]=this[_0xee12ac(0x25a)](_0x40c403),this[_0xee12ac(0x2ca)]=!![],this[_0xee12ac(0x240)]=!![];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3f3)]=function(_0x278de8){const _0x409163=_0x40e911;if($gameTemp[_0x409163(0x4bf)]()){let _0x51e344=_0x409163(0x41c)[_0x409163(0x119)](_0x278de8[_0x409163(0x237)][_0x409163(0x495)]);alert(_0x51e344),SceneManager[_0x409163(0x44a)]();}},Window_Base['prototype'][_0x40e911(0x404)]=function(){const _0x42b29d=_0x40e911;VisuMZ[_0x42b29d(0x348)]['NonSupportedTextCodes'](this);},Window_Base[_0x40e911(0x464)][_0x40e911(0x23c)]=function(){const _0x3ba370=_0x40e911;VisuMZ[_0x3ba370(0x348)]['NonSupportedTextCodes'](this);},Window_Base[_0x40e911(0x464)][_0x40e911(0x262)]=function(){const _0x5f06be=_0x40e911;VisuMZ[_0x5f06be(0x348)][_0x5f06be(0x3f3)](this);},Window_Help['prototype'][_0x40e911(0x4c3)]=function(){const _0x3a97c6=_0x40e911;this['setWordWrap']($gameSystem[_0x3a97c6(0x35c)]());},Window_Help['prototype'][_0x40e911(0x14c)]=function(){return!![];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x2b8)]=Window_Help[_0x40e911(0x464)]['refresh'],Window_Help['prototype'][_0x40e911(0x34b)]=function(){const _0x5ee9de=_0x40e911;this[_0x5ee9de(0x135)](),VisuMZ[_0x5ee9de(0x348)][_0x5ee9de(0x2b8)][_0x5ee9de(0x3b1)](this),this['resetWordWrap']();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x20d)]=Window_Options[_0x40e911(0x464)][_0x40e911(0x456)],Window_Options[_0x40e911(0x464)]['addGeneralOptions']=function(){const _0x5b142a=_0x40e911;VisuMZ[_0x5b142a(0x348)][_0x5b142a(0x20d)][_0x5b142a(0x3b1)](this),this['addMessageCoreCommands']();},Window_Options[_0x40e911(0x464)]['addMessageCoreCommands']=function(){const _0x44c192=_0x40e911;VisuMZ['MessageCore']['Settings'][_0x44c192(0x18f)]['AddOption']&&TextManager[_0x44c192(0x481)]()&&this['addMessageCoreLocalizationCommand'](),VisuMZ[_0x44c192(0x348)][_0x44c192(0x386)]['TextSpeed'][_0x44c192(0x3c8)]&&this[_0x44c192(0x227)]();},Window_Options[_0x40e911(0x464)][_0x40e911(0x4a9)]=function(){const _0x4c39ca=_0x40e911,_0x1a99eb=TextManager[_0x4c39ca(0x116)],_0x15160f=_0x4c39ca(0x2dc);this[_0x4c39ca(0x47d)](_0x1a99eb,_0x15160f);},Window_Options[_0x40e911(0x464)]['addMessageCoreTextSpeedCommand']=function(){const _0x560c1b=_0x40e911,_0x584b34=TextManager[_0x560c1b(0x300)],_0x3059d2=_0x560c1b(0x4c8);this[_0x560c1b(0x47d)](_0x584b34,_0x3059d2);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x162)]=Window_Options[_0x40e911(0x464)][_0x40e911(0x43b)],Window_Options[_0x40e911(0x464)][_0x40e911(0x43b)]=function(_0x16a44f){const _0x3445b5=_0x40e911,_0x5db474=this[_0x3445b5(0x462)](_0x16a44f);if(_0x5db474==='textLocale')return this[_0x3445b5(0x2c1)]();if(_0x5db474==='textSpeed')return this['textSpeedStatusText']();return VisuMZ[_0x3445b5(0x348)][_0x3445b5(0x162)]['call'](this,_0x16a44f);},Window_Options['prototype'][_0x40e911(0x2c1)]=function(){const _0xf5b201=_0x40e911,_0x34ccd6=ConfigManager[_0xf5b201(0x2dc)];return TextManager[_0xf5b201(0x1f7)](_0x34ccd6);},Window_Options[_0x40e911(0x464)]['textSpeedStatusText']=function(){const _0x2d773b=_0x40e911,_0x206ca6=this[_0x2d773b(0x1a4)](_0x2d773b(0x4c8));return _0x206ca6>0xa?TextManager['instantTextSpeed']:_0x206ca6;},VisuMZ[_0x40e911(0x348)]['Window_Options_isVolumeSymbol']=Window_Options[_0x40e911(0x464)]['isVolumeSymbol'],Window_Options['prototype'][_0x40e911(0x3a1)]=function(_0x24e703){const _0x920877=_0x40e911;if(_0x24e703===_0x920877(0x2dc))return!![];if(_0x24e703==='textSpeed')return!![];return VisuMZ[_0x920877(0x348)][_0x920877(0x169)][_0x920877(0x3b1)](this,_0x24e703);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x260)]=Window_Options[_0x40e911(0x464)][_0x40e911(0x383)],Window_Options['prototype'][_0x40e911(0x383)]=function(_0x727a1,_0x4f074f,_0x2a903d){const _0x44250b=_0x40e911;if(_0x727a1===_0x44250b(0x2dc))return this['changeVisuMzTextLocale'](_0x4f074f,_0x2a903d);if(_0x727a1===_0x44250b(0x4c8))return this['changeTextSpeed'](_0x727a1,_0x4f074f,_0x2a903d);VisuMZ[_0x44250b(0x348)][_0x44250b(0x260)][_0x44250b(0x3b1)](this,_0x727a1,_0x4f074f,_0x2a903d);},Window_Options[_0x40e911(0x464)][_0x40e911(0x2af)]=function(_0x47f8c8,_0x46edfd){const _0x1aaa4c=_0x40e911,_0xc2e9aa=VisuMZ[_0x1aaa4c(0x348)][_0x1aaa4c(0x386)]['Localization'][_0x1aaa4c(0x418)]||[],_0x1941d6=ConfigManager[_0x1aaa4c(0x2dc)];let _0x18229a=_0xc2e9aa[_0x1aaa4c(0x329)](_0x1941d6);_0x18229a+=_0x47f8c8?0x1:-0x1;if(_0x18229a>=_0xc2e9aa['length'])_0x18229a=_0x46edfd?0x0:_0xc2e9aa[_0x1aaa4c(0x347)]-0x1;if(_0x18229a<0x0)_0x18229a=_0x46edfd?_0xc2e9aa[_0x1aaa4c(0x347)]-0x1:0x0;this[_0x1aaa4c(0x1ea)](_0x1aaa4c(0x2dc),_0xc2e9aa[_0x18229a]);},Window_Options[_0x40e911(0x464)][_0x40e911(0x2d2)]=function(_0x275449,_0x4c51e1,_0xb6b282){const _0x415655=_0x40e911,_0x4ccc75=this[_0x415655(0x1a4)](_0x275449),_0xd686f8=0x1,_0x3f0f29=_0x4ccc75+(_0x4c51e1?_0xd686f8:-_0xd686f8);_0x3f0f29>0xb&&_0xb6b282?this['changeValue'](_0x275449,0x1):this[_0x415655(0x1ea)](_0x275449,_0x3f0f29[_0x415655(0x333)](0x1,0xb));},Window_Message['prototype'][_0x40e911(0x1ee)]=function(){const _0x30f095=_0x40e911;let _0x18bf7e=Window_Base[_0x30f095(0x464)][_0x30f095(0x1ee)][_0x30f095(0x3b1)](this);return _0x18bf7e-=this[_0x30f095(0x1c8)](),_0x18bf7e;},Window_Message[_0x40e911(0x464)]['refreshDimmerBitmap']=function(){const _0xb54a45=_0x40e911;Window_Base[_0xb54a45(0x464)][_0xb54a45(0x28b)][_0xb54a45(0x3b1)](this),VisuMZ['MessageCore'][_0xb54a45(0x386)][_0xb54a45(0x127)][_0xb54a45(0x3e6)]&&this[_0xb54a45(0x205)]();},Window_Message['prototype'][_0x40e911(0x205)]=function(){const _0x28cb61=_0x40e911;this[_0x28cb61(0x345)]['x']=Math[_0x28cb61(0x3ea)](this[_0x28cb61(0x38e)]/0x2),this[_0x28cb61(0x345)][_0x28cb61(0x112)]['x']=0.5,this[_0x28cb61(0x345)]['scale']['x']=Graphics['width'];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x140)]=Window_Message[_0x40e911(0x464)][_0x40e911(0x44c)],Window_Message[_0x40e911(0x464)][_0x40e911(0x44c)]=function(){const _0x3b0467=_0x40e911;VisuMZ[_0x3b0467(0x348)]['Window_Message_clearFlags'][_0x3b0467(0x3b1)](this),this[_0x3b0467(0x135)](),this[_0x3b0467(0x4c3)](),this[_0x3b0467(0x29b)](![]),this[_0x3b0467(0x413)]('default'),this['setTextDelay'](VisuMZ[_0x3b0467(0x348)][_0x3b0467(0x386)]['General'][_0x3b0467(0x2a0)]);},Window_Message['prototype']['resetWordWrap']=function(){const _0x546a8e=_0x40e911;this[_0x546a8e(0x232)]($gameSystem[_0x546a8e(0x270)]());},Window_Message['prototype'][_0x40e911(0x14c)]=function(){return!![];},Window_Message['prototype'][_0x40e911(0x262)]=function(_0x59e532){const _0x20eb01=_0x40e911,_0x37a971=0xb-ConfigManager[_0x20eb01(0x4c8)];_0x59e532=Math[_0x20eb01(0x3ea)](_0x59e532*_0x37a971),this[_0x20eb01(0x2b9)]=_0x59e532,this[_0x20eb01(0x4b0)]=_0x59e532;},VisuMZ[_0x40e911(0x348)]['Window_Message_isTriggered']=Window_Message[_0x40e911(0x464)][_0x40e911(0x108)],Window_Message['prototype']['isTriggered']=function(){const _0xf3c9b3=_0x40e911;return VisuMZ[_0xf3c9b3(0x348)]['Window_Message_isTriggered'][_0xf3c9b3(0x3b1)](this)||Input[_0xf3c9b3(0x3b2)](VisuMZ[_0xf3c9b3(0x348)][_0xf3c9b3(0x386)][_0xf3c9b3(0x127)]['FastForwardKey']);},VisuMZ['MessageCore'][_0x40e911(0x4de)]=Window_Message['prototype'][_0x40e911(0x2db)],Window_Message[_0x40e911(0x464)][_0x40e911(0x2db)]=function(){const _0x23e95a=_0x40e911;let _0x35fbf1=this['y'];this['x']=Math[_0x23e95a(0x3ea)]((Graphics[_0x23e95a(0x3b5)]-this[_0x23e95a(0x38e)])/0x2),VisuMZ[_0x23e95a(0x348)][_0x23e95a(0x4de)][_0x23e95a(0x3b1)](this);if(this[_0x23e95a(0x358)])this['y']=_0x35fbf1;this[_0x23e95a(0x3d5)](),this[_0x23e95a(0x488)](),this['clampPlacementPosition'](),this['updateChoiceListHelpWindowPlacement']();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x3e7)]=Window_Message['prototype'][_0x40e911(0x29f)],Window_Message['prototype'][_0x40e911(0x29f)]=function(_0x403a9a){const _0x4c234f=_0x40e911;this[_0x4c234f(0x461)](_0x403a9a),this[_0x4c234f(0x171)](_0x403a9a),VisuMZ[_0x4c234f(0x348)][_0x4c234f(0x3e7)][_0x4c234f(0x3b1)](this,_0x403a9a),this[_0x4c234f(0x126)]();},Window_Message[_0x40e911(0x464)][_0x40e911(0x461)]=function(_0x374024){const _0x2e3804=_0x40e911;if(!_0x374024)return;this[_0x2e3804(0x405)]=![],_0x374024['text']=this[_0x2e3804(0x17a)](_0x374024[_0x2e3804(0x308)]),this[_0x2e3804(0x11b)]&&(_0x374024['text']=this['prepareWordWrapEscapeCharacters'](_0x374024[_0x2e3804(0x308)]),this[_0x2e3804(0x405)]=!![]);},Window_Message[_0x40e911(0x464)][_0x40e911(0x332)]=function(_0x1f7f6a){const _0x1dd974=_0x40e911;if(this['_macroBypassWordWrap'])return _0x1f7f6a;return Window_Base['prototype'][_0x1dd974(0x332)][_0x1dd974(0x3b1)](this,_0x1f7f6a);},Window_Message[_0x40e911(0x464)][_0x40e911(0x171)]=function(_0x44cc29){const _0x2ee0b1=_0x40e911;this[_0x2ee0b1(0x41e)](_0x44cc29),this[_0x2ee0b1(0x1e0)](_0x44cc29),this[_0x2ee0b1(0x409)]();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x314)]=Window_Message[_0x40e911(0x464)][_0x40e911(0x28d)],Window_Message['prototype']['terminateMessage']=function(){const _0x53bd94=_0x40e911;VisuMZ[_0x53bd94(0x348)][_0x53bd94(0x314)][_0x53bd94(0x3b1)](this),this[_0x53bd94(0x44c)]();if(this[_0x53bd94(0x231)])this[_0x53bd94(0x3b8)]();},Window_Message[_0x40e911(0x464)]['updateDimensions']=function(){const _0x35646b=_0x40e911;this[_0x35646b(0x38e)]=$gameSystem[_0x35646b(0x2e1)]()+this[_0x35646b(0x4aa)]();;this[_0x35646b(0x38e)]=Math[_0x35646b(0x3d3)](Graphics[_0x35646b(0x38e)],this[_0x35646b(0x38e)]);const _0x493651=$gameSystem[_0x35646b(0x377)]();this[_0x35646b(0x4e2)]=SceneManager[_0x35646b(0x1cb)][_0x35646b(0x272)](_0x493651,![])+this[_0x35646b(0x1c8)](),this[_0x35646b(0x4e2)]=Math[_0x35646b(0x3d3)](Graphics[_0x35646b(0x4e2)],this['height']);if($gameTemp[_0x35646b(0x175)])this['resetPositionX']();},Window_Message[_0x40e911(0x464)][_0x40e911(0x4aa)]=function(){return 0x0;},Window_Message[_0x40e911(0x464)][_0x40e911(0x1c8)]=function(){return 0x0;},Window_Message[_0x40e911(0x464)]['resetPositionX']=function(){const _0x4b4af6=_0x40e911;this['x']=(Graphics[_0x4b4af6(0x3b5)]-this['width'])/0x2,$gameTemp[_0x4b4af6(0x175)]=undefined,this[_0x4b4af6(0x381)]();},Window_Message['prototype'][_0x40e911(0x4dc)]=function(){const _0x175cec=_0x40e911,_0x584388={'x':this['x'],'y':this['y']};Window_Base['prototype'][_0x175cec(0x4dc)][_0x175cec(0x3b1)](this),this[_0x175cec(0x254)](_0x584388);},Window_Message['prototype'][_0x40e911(0x31c)]=function(){return!![];},Window_Message[_0x40e911(0x464)][_0x40e911(0x254)]=function(_0x566af5){const _0x534e47=_0x40e911;this[_0x534e47(0x303)]&&(this['_nameBoxWindow']['x']+=this['x']-_0x566af5['x'],this[_0x534e47(0x303)]['y']+=this['y']-_0x566af5['y']);},Window_Message['prototype'][_0x40e911(0x434)]=function(_0x379a3a,_0x3cbab3){const _0x2f892a=_0x40e911;this[_0x2f892a(0x3b4)](this['_resetRect']['x'],this[_0x2f892a(0x2e5)]*(Graphics[_0x2f892a(0x1b1)]-this['height'])/0x2,this[_0x2f892a(0x2d6)][_0x2f892a(0x38e)],this[_0x2f892a(0x2d6)][_0x2f892a(0x4e2)],_0x379a3a,_0x3cbab3);},Window_Message[_0x40e911(0x464)]['processCommonEvent']=function(_0x4accaf){const _0x654a0a=_0x40e911,_0x52a211=Window_Base[_0x654a0a(0x464)][_0x654a0a(0x42e)]['call'](this,_0x4accaf);_0x4accaf[_0x654a0a(0x19d)]&&this[_0x654a0a(0x37b)](_0x52a211);},Window_Message['prototype'][_0x40e911(0x37b)]=function(_0x3f54c6){const _0x17ac87=_0x40e911;if($gameParty['inBattle']()){}else $gameMap[_0x17ac87(0x291)](_0x3f54c6);},Window_Message[_0x40e911(0x464)][_0x40e911(0x20f)]=function(_0x2aab24){const _0x2f49a7=_0x40e911;this[_0x2f49a7(0x2b9)]--,this[_0x2f49a7(0x2b9)]<=0x0&&(this[_0x2f49a7(0x1ae)](_0x2aab24),Window_Base[_0x2f49a7(0x464)][_0x2f49a7(0x20f)][_0x2f49a7(0x3b1)](this,_0x2aab24));},Window_Message[_0x40e911(0x464)][_0x40e911(0x1ae)]=function(_0x3586ce){const _0x3d3c65=_0x40e911;this[_0x3d3c65(0x2b9)]=this[_0x3d3c65(0x4b0)];if(this['_textDelay']<=0x0)this[_0x3d3c65(0x399)]=!![];},VisuMZ[_0x40e911(0x348)][_0x40e911(0x40a)]=Window_Message[_0x40e911(0x464)][_0x40e911(0x21a)],Window_Message[_0x40e911(0x464)]['processEscapeCharacter']=function(_0x3d6f27,_0x39aa40){const _0x50714a=_0x40e911;!_0x39aa40[_0x50714a(0x19d)]?Window_Base[_0x50714a(0x464)][_0x50714a(0x21a)][_0x50714a(0x3b1)](this,_0x3d6f27,_0x39aa40):VisuMZ[_0x50714a(0x348)][_0x50714a(0x40a)][_0x50714a(0x3b1)](this,_0x3d6f27,_0x39aa40);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x393)]=Window_Message[_0x40e911(0x464)][_0x40e911(0x35d)],Window_Message['prototype'][_0x40e911(0x35d)]=function(_0x582ab3){const _0x2c1cdb=_0x40e911;if(this[_0x2c1cdb(0x1d7)])return![];return VisuMZ[_0x2c1cdb(0x348)]['Window_Message_needsNewPage'][_0x2c1cdb(0x3b1)](this,_0x582ab3);},Window_Message[_0x40e911(0x464)][_0x40e911(0x41e)]=function(_0x3ef6e5){const _0x1a81da=_0x40e911;let _0x1b71dc=_0x3ef6e5['text'];this[_0x1a81da(0x484)]={};if(this['isWordWrapEnabled']())return _0x1b71dc;_0x1b71dc=_0x1b71dc[_0x1a81da(0x489)](/<POSITION:[ ]*(.*?)>/gi,(_0xfcbae8,_0x40cd43)=>{const _0xaef866=_0x1a81da,_0x558222=_0x40cd43['split'](',')[_0xaef866(0x290)](_0x17a60b=>Number(_0x17a60b)||0x0);if(_0x558222[0x0]!==undefined)this[_0xaef866(0x484)]['x']=Number(_0x558222[0x0]);if(_0x558222[0x1]!==undefined)this[_0xaef866(0x484)]['y']=Number(_0x558222[0x1]);if(_0x558222[0x2]!==undefined)this[_0xaef866(0x484)][_0xaef866(0x38e)]=Number(_0x558222[0x2]);if(_0x558222[0x3]!==undefined)this[_0xaef866(0x484)][_0xaef866(0x4e2)]=Number(_0x558222[0x3]);return'';}),_0x1b71dc=_0x1b71dc['replace'](/<COORDINATES:[ ]*(.*?)>/gi,(_0x10bd0e,_0xb3e04d)=>{const _0x28b65b=_0x1a81da,_0x63d57d=_0xb3e04d[_0x28b65b(0x297)](',')[_0x28b65b(0x290)](_0x376873=>Number(_0x376873)||0x0);if(_0x63d57d[0x0]!==undefined)this[_0x28b65b(0x484)]['x']=Number(_0x63d57d[0x0]);if(_0x63d57d[0x1]!==undefined)this[_0x28b65b(0x484)]['y']=Number(_0x63d57d[0x1]);return'';}),_0x1b71dc=_0x1b71dc[_0x1a81da(0x489)](/<DIMENSIONS:[ ]*(.*?)>/gi,(_0x1786da,_0xb6dbf5)=>{const _0x545784=_0x1a81da,_0x240012=_0xb6dbf5['split'](',')[_0x545784(0x290)](_0xc774ff=>Number(_0xc774ff)||0x0);if(_0x240012[0x0]!==undefined)this[_0x545784(0x484)][_0x545784(0x38e)]=Number(_0x240012[0x2]);if(_0x240012[0x1]!==undefined)this['_forcedPosition'][_0x545784(0x4e2)]=Number(_0x240012[0x3]);return'';}),_0x1b71dc=_0x1b71dc[_0x1a81da(0x489)](/<OFFSET:[ ]*(.*?)>/gi,(_0x670bf7,_0x1c41fb)=>{const _0x13c9cb=_0x1a81da,_0x2a93f1=_0x1c41fb[_0x13c9cb(0x297)](',')['map'](_0x382fbe=>Number(_0x382fbe)||0x0);let _0x12ad8f=_0x2a93f1[0x0]||0x0,_0x16cf58=_0x2a93f1[0x1]||0x0;return $gameSystem['setMessageWindowXyOffsets'](_0x12ad8f,_0x16cf58),'';}),_0x3ef6e5[_0x1a81da(0x308)]=_0x1b71dc;},Window_Message['prototype'][_0x40e911(0x3d5)]=function(){const _0x115ccb=_0x40e911,_0x457630=$gameSystem[_0x115ccb(0x375)]();this['x']+=_0x457630['x'],this['y']+=_0x457630['y'];},Window_Message['prototype']['updateForcedPlacement']=function(){const _0x2abbf3=_0x40e911;this[_0x2abbf3(0x484)]=this[_0x2abbf3(0x484)]||{};const _0xdb2dcd=['x','y',_0x2abbf3(0x38e),'height'];for(const _0x4d09a6 of _0xdb2dcd){this[_0x2abbf3(0x484)][_0x4d09a6]!==undefined&&(this[_0x4d09a6]=Number(this[_0x2abbf3(0x484)][_0x4d09a6]));}},Window_Message[_0x40e911(0x464)][_0x40e911(0x1e0)]=function(_0x4e337b){const _0x58265b=_0x40e911;this[_0x58265b(0x1d7)]=![];let _0x120a4c=_0x4e337b[_0x58265b(0x308)];_0x120a4c=_0x120a4c['replace'](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,()=>{const _0x5a6113=_0x58265b;return this[_0x5a6113(0x398)](_0x120a4c,!![],!![]),this['processAutoPosition']('none'),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,()=>{const _0xb34c6c=_0x58265b;return this[_0xb34c6c(0x398)](_0x120a4c,!![],![]),this[_0xb34c6c(0x32b)]('none'),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi,()=>{const _0x185a1f=_0x58265b;return this[_0x185a1f(0x398)](_0x120a4c,![],!![]),this[_0x185a1f(0x32b)](_0x185a1f(0x310)),'';});if(SceneManager[_0x58265b(0x14e)]())_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x1a096c,_0x3c650a)=>{const _0x45bef4=_0x58265b;return this[_0x45bef4(0x398)](_0x120a4c,!![],!![]),this[_0x45bef4(0x32b)](_0x45bef4(0x292),Number(_0x3c650a)||0x1),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3dac17,_0x4503e7)=>{const _0x279601=_0x58265b;return this[_0x279601(0x398)](_0x120a4c,!![],!![]),this[_0x279601(0x32b)]('battle\x20party',Number(_0x4503e7)||0x0),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi,(_0x5e40fb,_0x5b63fc)=>{const _0x46a09f=_0x58265b;return this[_0x46a09f(0x398)](_0x120a4c,!![],!![]),this[_0x46a09f(0x32b)]('battle\x20enemy',Number(_0x5b63fc)||0x0),'';});else SceneManager[_0x58265b(0x2a5)]()&&(_0x120a4c=_0x120a4c['replace'](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,(_0x4189ab,_0x33073a)=>{const _0x28bb3c=_0x58265b;return this['processAutoSize'](_0x120a4c,!![],!![]),this[_0x28bb3c(0x32b)]('map\x20player',0x0),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,(_0x18ae3a,_0x2495fc)=>{const _0x372e6c=_0x58265b;return this[_0x372e6c(0x398)](_0x120a4c,!![],!![]),this[_0x372e6c(0x32b)](_0x372e6c(0x1e6),Number(_0x2495fc)||0x1),'';}),_0x120a4c=_0x120a4c['replace'](/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,(_0x3dd4ea,_0x47adf9)=>{const _0x224ad8=_0x58265b;return this[_0x224ad8(0x398)](_0x120a4c,!![],!![]),this['processAutoPosition'](_0x224ad8(0x466),Number(_0x47adf9)||0x0),'';}),_0x120a4c=_0x120a4c[_0x58265b(0x489)](/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi,(_0x41a330,_0x1a7493)=>{const _0x1baff3=_0x58265b;return this[_0x1baff3(0x398)](_0x120a4c,!![],!![]),this[_0x1baff3(0x32b)](_0x1baff3(0x3ed),Number(_0x1a7493)||0x0),'';}));_0x4e337b['text']=_0x120a4c;},Window_Message[_0x40e911(0x130)]=/<(?:AUTO|AUTOSIZE|AUTO SIZE|AUTOWIDTH|AUTO WIDTH|AUTOHEIGHT|AUTO HEIGHT|AUTOPLAYER|AUTO PLAYER)>/gi,Window_Message['_autoPosRegExp']=/<(?:AUTOPARTY|AUTO PARTY|AUTOPLAYER|AUTO PLAYER|AUTOEVENT|AUTO EVENT|AUTOENEMY|AUTO ENEMY|AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,Window_Message[_0x40e911(0x464)][_0x40e911(0x398)]=function(_0x5222d4,_0x41c6b2,_0x2c0d0e){const _0x81ed65=_0x40e911;_0x5222d4=_0x5222d4[_0x81ed65(0x489)](Window_Message[_0x81ed65(0x130)],''),_0x5222d4=_0x5222d4['replace'](Window_Message['_autoPosRegExp'],''),this[_0x81ed65(0x2b7)]=!![],this[_0x81ed65(0x1d7)]=!![],this[_0x81ed65(0x232)](![]);const _0x1db064=this[_0x81ed65(0x2bc)](_0x5222d4);if(_0x41c6b2){let _0x23b94b=_0x1db064[_0x81ed65(0x38e)]+$gameSystem[_0x81ed65(0x1db)]()*0x2+0x6;const _0x79e669=$gameMessage['faceName']()!=='',_0x3b9dc5=ImageManager[_0x81ed65(0x18e)],_0x2cac9f=0x14;_0x23b94b+=_0x79e669?_0x3b9dc5+_0x2cac9f:0x4;if(_0x23b94b%0x2!==0x0)_0x23b94b+=0x1;$gameSystem['setMessageWindowWidth'](_0x23b94b);}if(_0x2c0d0e){let _0x127d5c=Math['ceil'](_0x1db064['height']/this[_0x81ed65(0x2b2)]());$gameSystem['setMessageWindowRows'](_0x127d5c);}this[_0x81ed65(0x32a)](),this['_refreshPauseSign'](),this[_0x81ed65(0x2b7)]=![],this[_0x81ed65(0x231)]=!![];},Window_Message[_0x40e911(0x464)][_0x40e911(0x32a)]=function(){const _0x87bd0f=_0x40e911;this[_0x87bd0f(0x409)](),this[_0x87bd0f(0x2db)](),this['resetPositionX'](),this[_0x87bd0f(0x475)](),this[_0x87bd0f(0x1b4)][_0x87bd0f(0x27e)](),this[_0x87bd0f(0x126)]();},Window_Message[_0x40e911(0x464)]['processAutoPosition']=function(_0x22993a,_0x15d1a5){const _0x524f6d=_0x40e911;switch(_0x22993a[_0x524f6d(0x31d)]()[_0x524f6d(0x10e)]()){case _0x524f6d(0x292):this['_autoPositionTarget']=$gameActors[_0x524f6d(0x1c9)](_0x15d1a5);break;case _0x524f6d(0x438):this[_0x524f6d(0x358)]=$gameParty['members']()[_0x15d1a5-0x1];break;case _0x524f6d(0x255):this[_0x524f6d(0x358)]=$gameTroop[_0x524f6d(0x441)]()[_0x15d1a5-0x1];break;case _0x524f6d(0x46f):this['_autoPositionTarget']=$gamePlayer;break;case'map\x20actor':const _0x4f7c90=$gameActors['actor'](_0x15d1a5)['index']();_0x4f7c90===0x0?this[_0x524f6d(0x358)]=$gamePlayer:this[_0x524f6d(0x358)]=$gamePlayer[_0x524f6d(0x180)]()[_0x524f6d(0x276)](_0x4f7c90-0x1);break;case _0x524f6d(0x466):_0x15d1a5===0x1?this[_0x524f6d(0x358)]=$gamePlayer:this['_autoPositionTarget']=$gamePlayer[_0x524f6d(0x180)]()[_0x524f6d(0x276)](_0x15d1a5-0x2);break;case _0x524f6d(0x3ed):this['_autoPositionTarget']=$gameMap['event'](_0x15d1a5);break;}this[_0x524f6d(0x358)]&&this[_0x524f6d(0x133)]();},VisuMZ[_0x40e911(0x348)][_0x40e911(0x312)]=Window_Message[_0x40e911(0x464)]['synchronizeNameBox'],Window_Message['prototype'][_0x40e911(0x3ad)]=function(){const _0xc2f087=_0x40e911;this[_0xc2f087(0x133)](),VisuMZ[_0xc2f087(0x348)]['Window_Message_synchronizeNameBox']['call'](this);},Window_Message[_0x40e911(0x464)]['updateAutoPosition']=function(){const _0x5b7e74=_0x40e911;if(!this[_0x5b7e74(0x358)])return;const _0x12a1a5=SceneManager[_0x5b7e74(0x1cb)];if(!_0x12a1a5)return;const _0xbbc8b7=_0x12a1a5[_0x5b7e74(0x21e)];if(!_0xbbc8b7)return;const _0x80473a=_0xbbc8b7[_0x5b7e74(0x1d5)](this[_0x5b7e74(0x358)]);if(!_0x80473a)return;let _0x42d50f=_0x80473a['x'];if(SceneManager[_0x5b7e74(0x2a5)]())_0x42d50f*=$gameScreen['zoomScale']();else{if(SceneManager[_0x5b7e74(0x14e)]()&&Imported[_0x5b7e74(0x3dd)]){let _0x15a55e=_0x80473a['x']-Graphics[_0x5b7e74(0x3b5)]*_0xbbc8b7[_0x5b7e74(0x112)]['x'];_0x42d50f+=_0x15a55e*(_0xbbc8b7[_0x5b7e74(0x118)]['x']-0x1);}}_0x42d50f-=this[_0x5b7e74(0x38e)]/0x2,_0x42d50f-=(Graphics[_0x5b7e74(0x38e)]-Graphics[_0x5b7e74(0x3b5)])/0x2,_0x42d50f+=this[_0x5b7e74(0x499)]();let _0x425972=_0x80473a['y'];if(SceneManager[_0x5b7e74(0x2a5)]())_0x425972-=_0x80473a[_0x5b7e74(0x4e2)]+0x8,_0x425972*=$gameScreen[_0x5b7e74(0x1c4)](),_0x425972-=this[_0x5b7e74(0x4e2)]*$gameScreen[_0x5b7e74(0x1c4)]();else{if(SceneManager[_0x5b7e74(0x14e)]()&&Imported[_0x5b7e74(0x3dd)]){let _0x366884=_0x80473a[_0x5b7e74(0x4e2)]*_0xbbc8b7[_0x5b7e74(0x118)]['y'];_0x425972-=this[_0x5b7e74(0x4e2)]*_0xbbc8b7[_0x5b7e74(0x118)]['y']+_0x366884+0x8;let _0x181c3b=_0x80473a['y']-Graphics[_0x5b7e74(0x1b1)]*_0xbbc8b7[_0x5b7e74(0x112)]['y'];_0x425972+=_0x181c3b*(_0xbbc8b7[_0x5b7e74(0x118)]['y']-0x1);}else _0x425972-=_0x80473a['height']+0x8,_0x425972-=this[_0x5b7e74(0x4e2)];}_0x425972-=(Graphics['height']-Graphics[_0x5b7e74(0x1b1)])/0x2,_0x425972+=this['autoPositionOffsetY']();const _0x22cf68=$gameSystem[_0x5b7e74(0x375)]();_0x42d50f+=_0x22cf68['x'],_0x425972+=_0x22cf68['y'],this['x']=Math[_0x5b7e74(0x3ea)](_0x42d50f),this['y']=Math[_0x5b7e74(0x3ea)](_0x425972),this[_0x5b7e74(0x381)](!![],![]),this[_0x5b7e74(0x484)]=this['_forcedPosition']||{},this['_forcedPosition']['x']=this['x'],this[_0x5b7e74(0x484)]['y']=this['y'],this['_forcedPosition'][_0x5b7e74(0x38e)]=this['width'],this[_0x5b7e74(0x484)][_0x5b7e74(0x4e2)]=this[_0x5b7e74(0x4e2)],this[_0x5b7e74(0x303)][_0x5b7e74(0x2db)]();},Window_Message['prototype'][_0x40e911(0x499)]=function(){return 0x0;},Window_Message[_0x40e911(0x464)][_0x40e911(0x2bf)]=function(){return 0x0;},Window_Message[_0x40e911(0x464)][_0x40e911(0x3b8)]=function(){const _0x50b0c3=_0x40e911;this[_0x50b0c3(0x231)]=![],this[_0x50b0c3(0x358)]=undefined,$gameSystem[_0x50b0c3(0x27c)](),this['updateAutoSizePosition'](),this[_0x50b0c3(0x459)]=0x0;},Window_Message[_0x40e911(0x464)][_0x40e911(0x3cf)]=function(_0x2f1a91){const _0x356d2c=_0x40e911;return Window_Base[_0x356d2c(0x464)]['preConvertEscapeCharacters'][_0x356d2c(0x3b1)](this,_0x2f1a91);},Window_Message[_0x40e911(0x464)][_0x40e911(0x107)]=function(_0x2c7b7b){const _0x3e834d=_0x40e911;return Window_Base[_0x3e834d(0x464)]['postConvertEscapeCharacters']['call'](this,_0x2c7b7b);},Window_Message[_0x40e911(0x464)][_0x40e911(0x32e)]=function(_0x408470){const _0x264264=_0x40e911;this['preFlushTextState'](_0x408470),Window_Base['prototype'][_0x264264(0x32e)][_0x264264(0x3b1)](this,_0x408470),this[_0x264264(0x498)](_0x408470);},Window_Message[_0x40e911(0x464)]['preFlushTextState']=function(_0x56c380){},Window_Message[_0x40e911(0x464)][_0x40e911(0x498)]=function(_0x4842bb){},Window_NameBox[_0x40e911(0x464)][_0x40e911(0x14c)]=function(){return![];},Window_NameBox[_0x40e911(0x464)][_0x40e911(0x226)]=function(){const _0x42409f=_0x40e911;Window_Base[_0x42409f(0x464)][_0x42409f(0x226)][_0x42409f(0x3b1)](this),this['changeTextColor'](this[_0x42409f(0x258)]());},Window_NameBox['prototype']['defaultColor']=function(){const _0x29afa8=_0x40e911,_0x237522=VisuMZ[_0x29afa8(0x348)]['Settings'][_0x29afa8(0x127)][_0x29afa8(0x346)];return ColorManager[_0x29afa8(0x16e)](_0x237522);},VisuMZ[_0x40e911(0x348)]['Window_NameBox_updatePlacement']=Window_NameBox['prototype']['updatePlacement'],Window_NameBox['prototype']['updatePlacement']=function(){const _0x388d67=_0x40e911;VisuMZ[_0x388d67(0x348)][_0x388d67(0x228)][_0x388d67(0x3b1)](this),this['updateRelativePosition'](),this['updateOffsetPosition'](),this[_0x388d67(0x381)](),this[_0x388d67(0x269)]();},Window_NameBox[_0x40e911(0x464)][_0x40e911(0x3cf)]=function(_0x471c7a){const _0x3abb34=_0x40e911;return _0x471c7a=_0x471c7a['replace'](/<LEFT>/gi,this['setRelativePosition']['bind'](this,0x0)),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<CENTER>/gi,this[_0x3abb34(0x25c)][_0x3abb34(0x32d)](this,0x5)),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<RIGHT>/gi,this[_0x3abb34(0x25c)][_0x3abb34(0x32d)](this,0xa)),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<POSITION:[ ](\d+)>/gi,(_0x21110e,_0x2124cc)=>this[_0x3abb34(0x25c)](parseInt(_0x2124cc))),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<\/LEFT>/gi,''),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<\/CENTER>/gi,''),_0x471c7a=_0x471c7a[_0x3abb34(0x489)](/<\/RIGHT>/gi,''),_0x471c7a=_0x471c7a[_0x3abb34(0x10e)](),Window_Base[_0x3abb34(0x464)][_0x3abb34(0x3cf)][_0x3abb34(0x3b1)](this,_0x471c7a);},Window_NameBox[_0x40e911(0x464)][_0x40e911(0x25c)]=function(_0x5ecf8b){return this['_relativePosition']=_0x5ecf8b,'';},Window_NameBox['prototype'][_0x40e911(0x1f8)]=function(){const _0x56947c=_0x40e911;if($gameMessage[_0x56947c(0x1f4)]())return;this[_0x56947c(0x182)]=this['_relativePosition']||0x0;const _0x440e24=this[_0x56947c(0x32c)],_0x37e710=Math[_0x56947c(0x4d7)](_0x440e24['width']*this['_relativePosition']/0xa);this['x']=_0x440e24['x']+_0x37e710-Math['floor'](this[_0x56947c(0x38e)]/0x2),this['x']=this['x'][_0x56947c(0x333)](_0x440e24['x'],_0x440e24['x']+_0x440e24['width']-this[_0x56947c(0x38e)]);},Window_NameBox[_0x40e911(0x464)][_0x40e911(0x158)]=function(){const _0x201a69=_0x40e911;if($gameMessage[_0x201a69(0x1f4)]())return;this[_0x201a69(0x182)]=this[_0x201a69(0x182)]||0x0;const _0x5783bb=VisuMZ[_0x201a69(0x348)][_0x201a69(0x386)][_0x201a69(0x127)][_0x201a69(0x14b)],_0x342123=VisuMZ[_0x201a69(0x348)][_0x201a69(0x386)][_0x201a69(0x127)][_0x201a69(0x44b)],_0x473028=(0x5-this[_0x201a69(0x182)])/0x5;this['x']+=Math[_0x201a69(0x4d7)](_0x5783bb*_0x473028),this['y']+=_0x342123;},Window_NameBox[_0x40e911(0x464)]['updateOverlappingY']=function(){const _0x6dfccd=_0x40e911,_0x4b8458=this[_0x6dfccd(0x32c)],_0x37d49a=_0x4b8458['y'],_0x4afe9e=VisuMZ[_0x6dfccd(0x348)][_0x6dfccd(0x386)]['General'][_0x6dfccd(0x44b)];_0x37d49a>this['y']&&_0x37d49a<this['y']+this['height']-_0x4afe9e&&(this['y']=_0x4b8458['y']+_0x4b8458['height']);},VisuMZ[_0x40e911(0x348)][_0x40e911(0x16a)]=Window_NameBox[_0x40e911(0x464)][_0x40e911(0x34b)],Window_NameBox['prototype'][_0x40e911(0x34b)]=function(){const _0x493445=_0x40e911;this[_0x493445(0x182)]=0x0,VisuMZ[_0x493445(0x348)][_0x493445(0x16a)][_0x493445(0x3b1)](this);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x453)]=function(){return![];},Window_ChoiceList[_0x40e911(0x464)]['isAutoColorAffected']=function(){return!![];},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x313)]=function(){return $gameSystem['getChoiceListLineHeight']()+0x8;},Window_ChoiceList['prototype'][_0x40e911(0x3e4)]=function(){const _0xf8e21a=_0x40e911;return $gameSystem[_0xf8e21a(0x340)]();},Window_ChoiceList['prototype'][_0x40e911(0x473)]=function(){const _0x4104ec=_0x40e911;this['refresh'](),this[_0x4104ec(0x11e)](),this[_0x4104ec(0x42f)](),this[_0x4104ec(0x494)](),this[_0x4104ec(0x457)]();},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x188)]=function(){const _0x53ecad=_0x40e911;$gameMessage[_0x53ecad(0x478)](this[_0x53ecad(0x293)]()),this[_0x53ecad(0x32c)][_0x53ecad(0x28d)](),this[_0x53ecad(0x3bd)](),this[_0x53ecad(0x234)]&&(this['_helpWindow'][_0x53ecad(0x27e)](),this[_0x53ecad(0x234)]['hide']());},VisuMZ[_0x40e911(0x348)][_0x40e911(0x1e5)]=Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x3db)],Window_ChoiceList[_0x40e911(0x464)]['callCancelHandler']=function(){const _0x1dc8c6=_0x40e911;VisuMZ[_0x1dc8c6(0x348)][_0x1dc8c6(0x1e5)]['call'](this),this['_helpWindow']&&(this['_helpWindow'][_0x1dc8c6(0x27e)](),this[_0x1dc8c6(0x234)]['hide']());},Window_ChoiceList['prototype']['refresh']=function(){const _0xd2a80f=_0x40e911;this[_0xd2a80f(0x1a8)](),this[_0xd2a80f(0x1ef)](),this[_0xd2a80f(0x32c)]&&(this[_0xd2a80f(0x2db)](),this['placeCancelButton']()),this[_0xd2a80f(0x126)](),this[_0xd2a80f(0x49f)](),this[_0xd2a80f(0x28b)](),Window_Selectable[_0xd2a80f(0x464)]['refresh'][_0xd2a80f(0x3b1)](this);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x1ef)]=function(){const _0x58bc72=_0x40e911;$gameMessage['_scriptCall']?this[_0x58bc72(0x339)]():this[_0x58bc72(0x388)](),this[_0x58bc72(0x2f9)](),this[_0x58bc72(0x11a)]();},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x339)]=function(){const _0x48d473=_0x40e911,_0x391d8c=$gameMessage[_0x48d473(0x145)]();let _0x472d9e=0x0;for(let _0x34e10e of _0x391d8c){_0x34e10e=this[_0x48d473(0x1d4)](_0x34e10e);if(this[_0x48d473(0x2e8)](_0x34e10e)){const _0x13ec00=this['parseChoiceText'](_0x34e10e),_0x459f3e=this[_0x48d473(0x357)](_0x34e10e);this['addCommand'](_0x13ec00,'choice',_0x459f3e,_0x472d9e);}_0x472d9e++;}},Window_ChoiceList['prototype'][_0x40e911(0x388)]=function(){const _0x509581=_0x40e911,_0x168cb3=$gameMessage[_0x509581(0x145)](),_0x2503fe=$gameMessage['choiceIndexArray'](),_0x515336=$gameMessage[_0x509581(0x46e)](),_0x37b196=_0x168cb3[_0x509581(0x347)];let _0x2d77f1=0x0;for(let _0x2a4eed=0x0;_0x2a4eed<_0x37b196;_0x2a4eed++){if(this[_0x509581(0x35f)][_0x509581(0x347)]>=_0x515336)break;const _0xc03472=_0x2503fe[_0x2a4eed];let _0x102c82=_0x168cb3[_0xc03472];if(_0x102c82===undefined)continue;_0x102c82=this[_0x509581(0x1d4)](_0x102c82);if(this[_0x509581(0x2e8)](_0x102c82)){const _0x531745=this['parseChoiceText'](_0x102c82),_0x552125=this['isChoiceEnabled'](_0x102c82);this['addCommand'](_0x531745,_0x509581(0x28c),_0x552125,_0xc03472);}_0x2d77f1++;}},Window_ChoiceList[_0x40e911(0x464)]['convertChoiceMacros']=function(_0x3fff8f){const _0x583e22=_0x40e911;return Window_Base[_0x583e22(0x464)][_0x583e22(0x17a)][_0x583e22(0x3b1)](this,_0x3fff8f);},Window_ChoiceList[_0x40e911(0x464)]['isChoiceVisible']=function(_0x16c795){const _0x4692e6=_0x40e911;if(Imported['VisuMZ_1_EventsMoveCore'])$gameMessage[_0x4692e6(0x320)]();if(_0x16c795[_0x4692e6(0x215)](/<HIDE>/i))return![];if(_0x16c795['match'](/<SHOW>/i))return!![];if(_0x16c795[_0x4692e6(0x215)](/<SHOW[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x22bb45=RegExp['$1'][_0x4692e6(0x297)](',')[_0x4692e6(0x290)](_0xe11db1=>Number(_0xe11db1)||0x0);if(_0x22bb45[_0x4692e6(0x2d5)](_0x102dea=>!$gameSwitches[_0x4692e6(0x311)](_0x102dea)))return![];}if(_0x16c795[_0x4692e6(0x215)](/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x421e27=RegExp['$1'][_0x4692e6(0x297)](',')['map'](_0x38531c=>Number(_0x38531c)||0x0);if(_0x421e27[_0x4692e6(0x450)](_0x286bec=>!$gameSwitches[_0x4692e6(0x311)](_0x286bec)))return![];}if(_0x16c795['match'](/<HIDE[ ](?:|ALL )(?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4ba3cd=RegExp['$1'][_0x4692e6(0x297)](',')[_0x4692e6(0x290)](_0x34ac1f=>Number(_0x34ac1f)||0x0);if(_0x4ba3cd[_0x4692e6(0x450)](_0x252756=>$gameSwitches[_0x4692e6(0x311)](_0x252756)))return![];}if(_0x16c795['match'](/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4b4701=RegExp['$1']['split'](',')[_0x4692e6(0x290)](_0xcd434=>Number(_0xcd434)||0x0);if(_0x4b4701[_0x4692e6(0x2d5)](_0x2cfa5f=>$gameSwitches['value'](_0x2cfa5f)))return![];}return!![];},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x129)]=function(_0x1108da){const _0xe9d3a0=_0x40e911;let _0x5860ba=_0x1108da;return _0x5860ba=_0x5860ba[_0xe9d3a0(0x489)](/<(?:BR|LINEBREAK)>/gi,'\x0a'),_0x5860ba=_0x5860ba[_0xe9d3a0(0x489)](/<LINE\x1bWrapBreak[0]BREAK>/gi,'\x0a'),_0x5860ba;},Window_ChoiceList['prototype'][_0x40e911(0x357)]=function(_0x1487d1){const _0x109853=_0x40e911;if(Imported[_0x109853(0x1fb)])$gameMessage['registerSelfEvent']();if(_0x1487d1[_0x109853(0x215)](/<DISABLE>/i))return![];if(_0x1487d1[_0x109853(0x215)](/<ENABLE>/i))return!![];if(_0x1487d1[_0x109853(0x215)](/<ENABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x31dd80=RegExp['$1'][_0x109853(0x297)](',')[_0x109853(0x290)](_0x26148f=>Number(_0x26148f)||0x0);if(_0x31dd80[_0x109853(0x2d5)](_0xc982f0=>!$gameSwitches['value'](_0xc982f0)))return![];}if(_0x1487d1[_0x109853(0x215)](/<ENABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x55804c=RegExp['$1']['split'](',')[_0x109853(0x290)](_0x50277d=>Number(_0x50277d)||0x0);if(_0x55804c[_0x109853(0x450)](_0x188816=>!$gameSwitches[_0x109853(0x311)](_0x188816)))return![];}if(_0x1487d1['match'](/<DISABLE[ ](?:|ALL )(?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x4a0b82=RegExp['$1'][_0x109853(0x297)](',')[_0x109853(0x290)](_0x3922ee=>Number(_0x3922ee)||0x0);if(_0x4a0b82['every'](_0x5159a3=>$gameSwitches[_0x109853(0x311)](_0x5159a3)))return![];}if(_0x1487d1[_0x109853(0x215)](/<DISABLE ANY[ ](?:SWITCH|SWITCHES):[ ](.*?)>/i)){const _0x2f77c2=RegExp['$1'][_0x109853(0x297)](',')[_0x109853(0x290)](_0x17135b=>Number(_0x17135b)||0x0);if(_0x2f77c2[_0x109853(0x2d5)](_0x4f4de1=>$gameSwitches[_0x109853(0x311)](_0x4f4de1)))return![];}return!![];},Window_ChoiceList['prototype'][_0x40e911(0x2f9)]=function(){const _0x5c85b2=_0x40e911;this[_0x5c85b2(0x236)]={},this[_0x5c85b2(0x234)]&&(this[_0x5c85b2(0x234)][_0x5c85b2(0x27e)](),this['_helpWindow']['hide']());},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x11a)]=function(){const _0x2a146f=_0x40e911,_0x14543e=/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i;for(const _0x4f7e41 of this[_0x2a146f(0x35f)]){if(!_0x4f7e41)continue;const _0xd9f79=this[_0x2a146f(0x35f)][_0x2a146f(0x329)](_0x4f7e41);if(_0x4f7e41[_0x2a146f(0x495)][_0x2a146f(0x215)](_0x14543e)){const _0x3c2e5f=String(RegExp['$1']);this[_0x2a146f(0x236)][_0xd9f79]=_0x3c2e5f[_0x2a146f(0x10e)](),_0x4f7e41[_0x2a146f(0x495)]=_0x4f7e41[_0x2a146f(0x495)][_0x2a146f(0x489)](_0x14543e,'')[_0x2a146f(0x10e)]();}else this[_0x2a146f(0x236)][_0xd9f79]='';}},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x457)]=function(){const _0xcaf846=_0x40e911;if(this[_0xcaf846(0x35f)][_0xcaf846(0x2d5)](_0x4e2c1d=>_0x4e2c1d[_0xcaf846(0x163)]))return;this[_0xcaf846(0x14d)](),this[_0xcaf846(0x3bd)](),$gameMessage[_0xcaf846(0x4c2)]=[],this[_0xcaf846(0x32c)][_0xcaf846(0x28a)]()&&this[_0xcaf846(0x32c)]['startPause']();},VisuMZ[_0x40e911(0x348)]['Window_ChoiceList_updatePlacement']=Window_ChoiceList[_0x40e911(0x464)]['updatePlacement'],Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x2db)]=function(){const _0x408a5b=_0x40e911;VisuMZ[_0x408a5b(0x348)][_0x408a5b(0x390)][_0x408a5b(0x3b1)](this),this['addChoiceDistance'](),this[_0x408a5b(0x381)]();},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x1be)]=function(){const _0x183a78=_0x40e911;if(!this['_cancelButton'])return;const _0x4cac63=0x8,_0x4b521a=this['_cancelButton'],_0x3afffa=this['x']+this[_0x183a78(0x38e)],_0x7dc3b6=Math['floor']((Graphics[_0x183a78(0x38e)]-Graphics[_0x183a78(0x3b5)])/0x2);_0x3afffa>=Graphics['boxWidth']+_0x7dc3b6-_0x4b521a[_0x183a78(0x38e)]+_0x4cac63?_0x4b521a['x']=-_0x4b521a[_0x183a78(0x38e)]-_0x4cac63:_0x4b521a['x']=this[_0x183a78(0x38e)]+_0x4cac63,_0x4b521a['y']=this['height']/0x2-_0x4b521a[_0x183a78(0x4e2)]/0x2;},VisuMZ[_0x40e911(0x348)][_0x40e911(0x1c1)]=Window_ChoiceList['prototype']['windowX'],Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x38c)]=function(){const _0x414366=_0x40e911;return this[_0x414366(0x32c)]?this['messageCoreWindowX']():VisuMZ['MessageCore'][_0x414366(0x1c1)][_0x414366(0x3b1)](this);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x15e)]=function(){const _0x2cd883=_0x40e911,_0x5d74cd=$gameMessage[_0x2cd883(0x27f)]();if(_0x5d74cd===0x1)return(Graphics[_0x2cd883(0x3b5)]-this[_0x2cd883(0x4bd)]())/0x2;else return _0x5d74cd===0x2?this['_messageWindow']['x']+this[_0x2cd883(0x32c)]['width']-this[_0x2cd883(0x4bd)]():this[_0x2cd883(0x32c)]['x'];},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x4bd)]=function(){const _0x33d69b=_0x40e911,_0x59f8d2=(this[_0x33d69b(0x47e)]()+this['colSpacing']())*this[_0x33d69b(0x3e4)]()+this[_0x33d69b(0x4b8)]*0x2;return Math[_0x33d69b(0x3d3)](_0x59f8d2,Graphics[_0x33d69b(0x38e)]);},Window_ChoiceList[_0x40e911(0x464)]['numVisibleRows']=function(){const _0x25d98b=_0x40e911,_0x1e69e0=$gameMessage[_0x25d98b(0x145)]()[_0x25d98b(0x290)](_0x3722ee=>this[_0x25d98b(0x1d4)](_0x3722ee))[_0x25d98b(0x443)](_0x35430c=>this['isChoiceVisible'](_0x35430c));let _0x1327c9=Math[_0x25d98b(0x2ff)](_0x1e69e0[_0x25d98b(0x347)]/this[_0x25d98b(0x3e4)]());if(!$gameMessage[_0x25d98b(0x472)]){const _0x36b5ec=$gameMessage[_0x25d98b(0x46e)]();_0x1327c9=Math[_0x25d98b(0x2ff)](Math[_0x25d98b(0x3d3)](_0x36b5ec,_0x1e69e0[_0x25d98b(0x347)])/this[_0x25d98b(0x3e4)]());}return Math[_0x25d98b(0x27d)](0x1,Math[_0x25d98b(0x3d3)](_0x1327c9,this[_0x25d98b(0x469)]()));},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x469)]=function(){const _0x546771=_0x40e911,_0x3746fd=this[_0x546771(0x32c)],_0x829a39=_0x3746fd?_0x3746fd['y']:0x0,_0x13f225=_0x3746fd?_0x3746fd[_0x546771(0x4e2)]:0x0,_0x5933e1=Graphics[_0x546771(0x1b1)]/0x2;return _0x829a39<_0x5933e1&&_0x829a39+_0x13f225>_0x5933e1?0x4:$gameSystem['getChoiceListMaxRows']();},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x47e)]=function(){const _0x4ad93e=_0x40e911;let _0x111df0=this['getStartingChoiceWidth']();for(const _0x3ced10 of this[_0x4ad93e(0x35f)]){const _0x81392c=_0x3ced10[_0x4ad93e(0x495)],_0x141dc6=this[_0x4ad93e(0x257)](_0x81392c),_0x14f6da=this['textSizeEx'](_0x81392c)[_0x4ad93e(0x38e)]+_0x141dc6,_0x53b5cb=Math['ceil'](_0x14f6da)+this[_0x4ad93e(0x23f)]()*0x2;_0x111df0=Math[_0x4ad93e(0x27d)](_0x111df0,_0x53b5cb);}return _0x111df0;},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x295)]=function(){const _0x1b74a3=_0x40e911;let _0x2850d5=$gameSystem[_0x1b74a3(0x1f2)]();const _0x6182cf=$gameMessage[_0x1b74a3(0x145)]();for(const _0x230051 of _0x6182cf){_0x230051['match'](/<CHOICE WIDTH:[ ](\d+)>/gi)&&(_0x2850d5=Math['max'](_0x2850d5,Number(RegExp['$1'])));}return Math[_0x1b74a3(0x27d)](_0x2850d5,0x1);},Window_ChoiceList['prototype'][_0x40e911(0x397)]=function(){const _0x24a6cf=_0x40e911,_0x3669a1=$gameSystem[_0x24a6cf(0x113)]()||0x0,_0x1c6ced=this[_0x24a6cf(0x32c)]['y'],_0xd2e172=this['_messageWindow'][_0x24a6cf(0x4e2)],_0x45c57e=this[_0x24a6cf(0x32c)][_0x24a6cf(0x303)],_0x447046=_0x45c57e[_0x24a6cf(0x459)]>0x0&&_0x45c57e[_0x24a6cf(0x38e)]>0x0,_0x2e8987=_0x447046?_0x45c57e[_0x24a6cf(0x4e2)]:0x0;if(_0x3669a1<0x0&&(this[_0x24a6cf(0x32c)][_0x24a6cf(0x230)]()||this[_0x24a6cf(0x32c)]['isClosing']()))this['y']=Math[_0x24a6cf(0x3ea)]((Graphics[_0x24a6cf(0x1b1)]-this[_0x24a6cf(0x4e2)])/0x2);else{if(_0x1c6ced>=Graphics[_0x24a6cf(0x1b1)]/0x2)_0x3669a1>=0x0?this['y']-=_0x3669a1:this['y']=Math['floor']((_0x1c6ced-this[_0x24a6cf(0x4e2)]-_0x2e8987)/0x2);else{if(_0x3669a1>=0x0)this['y']+=_0x3669a1;else{const _0x17149b=Graphics[_0x24a6cf(0x1b1)]-(_0x1c6ced+_0xd2e172+_0x2e8987);this['y']+=Math['floor']((_0x17149b-this[_0x24a6cf(0x4e2)])/0x2)+_0x2e8987;}}}},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x317)]=function(_0x4fc443){const _0x157f4c=_0x40e911,_0x375d99=this['requestChoiceForegroundImage'](_0x4fc443);if(_0x375d99){const _0x1244e5=ImageManager['loadPicture'](_0x375d99),_0x20044c=this[_0x157f4c(0x402)](),_0x31784d=_0x20044c+this[_0x157f4c(0x195)](_0x4fc443),_0x40906e=this[_0x157f4c(0x1cc)](_0x4fc443);_0x1244e5['addLoadListener'](this[_0x157f4c(0x4a0)][_0x157f4c(0x32d)](this,_0x4fc443,!![],_0x31784d,_0x40906e,_0x1244e5));return;}this[_0x157f4c(0x191)](_0x4fc443);},Window_ChoiceList[_0x40e911(0x464)]['drawItemContents']=function(_0x505f19){const _0x374cea=_0x40e911,_0x6d8f25=this[_0x374cea(0x1cc)](_0x505f19),_0x470071=this[_0x374cea(0x402)](),_0x4457f4=_0x470071+this['commandName'](_0x505f19);this['changePaintOpacity'](this[_0x374cea(0x26b)](_0x505f19));const _0x365a31=this['textSizeEx'](_0x4457f4)[_0x374cea(0x4e2)],_0xab4492=_0x6d8f25['x']+this[_0x374cea(0x257)](_0x4457f4),_0x5e1051=Math[_0x374cea(0x27d)](_0x6d8f25['y'],_0x6d8f25['y']+Math[_0x374cea(0x3ea)]((_0x6d8f25[_0x374cea(0x4e2)]-_0x365a31)/0x2));this[_0x374cea(0x19a)](_0x4457f4,_0xab4492,_0x5e1051,_0x6d8f25['width']),this[_0x374cea(0x38a)](_0x505f19),this[_0x374cea(0x3a4)](_0x505f19,_0x4457f4,_0x6d8f25);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x402)]=function(){const _0x2810de=_0x40e911;return $gameSystem[_0x2810de(0x249)]()!==_0x2810de(0x40b)?_0x2810de(0x223)['format']($gameSystem[_0x2810de(0x249)]()):'';},Window_ChoiceList[_0x40e911(0x464)]['getChoiceIndent']=function(_0x6d5453){const _0x577599=_0x40e911;let _0x43e28f=0x0;return _0x6d5453[_0x577599(0x215)](/<(?:CHOICE|CHOICE |)INDENT:[ ](\d+)>/gi)&&(_0x43e28f=Number(RegExp['$1'])),_0x43e28f;},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x38a)]=function(_0xc0f077){const _0xd2a35d=_0x40e911;if(!Imported[_0xd2a35d(0x20b)])return;const _0x13cedb=this[_0xd2a35d(0x195)](_0xc0f077);let _0x1cb6f9=![],_0x151bb6=![],_0x5c46f0=ColorManager['itemBackColor1'](),_0x4a30f8=ColorManager[_0xd2a35d(0x324)]();if(_0x13cedb['match'](/<(?:BGCOLOR|BG COLOR):[ ](.*?),(.*?)>/gi))_0x5c46f0=ColorManager[_0xd2a35d(0x3e1)](RegExp['$1'])[_0xd2a35d(0x10e)](),_0x4a30f8=ColorManager[_0xd2a35d(0x3e1)](RegExp['$2'])[_0xd2a35d(0x10e)](),_0x1cb6f9=!![];else{if(_0x13cedb['match'](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi)){let _0x768235=String(RegExp['$1'])[_0xd2a35d(0x31d)]()['trim']();switch(_0x768235){case _0xd2a35d(0x2fb):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x39d),_0x151bb6=!![];break;case _0xd2a35d(0x2f1):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x47a),_0x151bb6=!![];break;case _0xd2a35d(0x3e2):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x2be),_0x151bb6=!![];break;case'green':_0x5c46f0=_0x4a30f8=_0xd2a35d(0x1b8),_0x151bb6=!![];break;case _0xd2a35d(0x1a3):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x4d5),_0x151bb6=!![];break;case _0xd2a35d(0x4ca):case _0xd2a35d(0x1d9):_0x5c46f0=_0x4a30f8='#a186be',_0x151bb6=!![];break;case'brown':_0x5c46f0=_0x4a30f8=_0xd2a35d(0x4bc),_0x151bb6=!![];break;case'pink':_0x5c46f0=_0x4a30f8=_0xd2a35d(0x1a7),_0x151bb6=!![];break;case _0xd2a35d(0x26c):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x120),_0x151bb6=!![];break;case _0xd2a35d(0x167):case _0xd2a35d(0x369):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x497),_0x151bb6=!![];break;case _0xd2a35d(0x281):_0x5c46f0=_0x4a30f8=_0xd2a35d(0x2ac),_0x151bb6=!![];break;case _0xd2a35d(0x24e):_0x5c46f0=_0x4a30f8=ColorManager[_0xd2a35d(0x309)](),_0x151bb6=!![];break;case'no':_0x5c46f0=_0x4a30f8=ColorManager['powerDownColor'](),_0x151bb6=!![];break;case'system':_0x5c46f0=_0x4a30f8=ColorManager[_0xd2a35d(0x1c2)](),_0x151bb6=!![];break;case'crisis':_0x5c46f0=_0x4a30f8=ColorManager['crisisColor'](),_0x151bb6=!![];break;default:_0x5c46f0=_0x4a30f8=ColorManager[_0xd2a35d(0x3e1)](_0x768235),_0x151bb6=!![];break;}_0x1cb6f9=!![];}}if(!_0x1cb6f9)return;const _0xdf9d2=this[_0xd2a35d(0x229)](_0xc0f077);this['contentsBack'][_0xd2a35d(0x2a8)](_0xdf9d2['x'],_0xdf9d2['y'],_0xdf9d2[_0xd2a35d(0x38e)],_0xdf9d2['height']),this[_0xd2a35d(0x2f0)](_0xdf9d2,_0x5c46f0,_0x4a30f8,_0x151bb6);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x2f0)]=function(_0x2809fe,_0x5baaea,_0x103313,_0x1e4e69){const _0x424588=_0x40e911,_0x20b0c3=ColorManager[_0x424588(0x455)](),_0x4b7d40=ColorManager[_0x424588(0x4d9)](),_0x2ee743=_0x5baaea??ColorManager['itemBackColor1'](),_0x641eca=_0x103313??_0x5baaea,_0x46abea=_0x2809fe['x'],_0x1bfffd=_0x2809fe['y'],_0x2c77f8=_0x2809fe['width'],_0xce3e64=_0x2809fe[_0x424588(0x4e2)];this[_0x424588(0x221)][_0x424588(0x3f8)](_0x46abea,_0x1bfffd,_0x2c77f8,_0xce3e64,_0x2ee743,_0x641eca,!![]),_0x1e4e69&&this[_0x424588(0x221)]['gradientFillRect'](_0x46abea,_0x1bfffd,_0x2c77f8,_0xce3e64,_0x20b0c3,_0x641eca,!![]),this['contentsBack'][_0x424588(0x33e)](_0x46abea,_0x1bfffd,_0x2c77f8,_0xce3e64,_0x20b0c3);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x361)]=function(_0x1c9d78){const _0x4422c4=_0x40e911,_0x36370b=this['choiceAlignText'](),_0x4a9bae=_0x36370b+this[_0x4422c4(0x195)](_0x1c9d78);let _0x2f873e='';if(_0x4a9bae[_0x4422c4(0x215)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x2f873e=String(RegExp['$1'])[_0x4422c4(0x10e)]();else _0x4a9bae[_0x4422c4(0x215)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x2f873e=String(RegExp['$2'])[_0x4422c4(0x10e)]());return _0x2f873e;},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x3a4)]=function(_0x3a8750,_0x3c1f8a,_0x5ebb86){const _0x23d788=_0x40e911;let _0x4077b6='';if(_0x3c1f8a[_0x23d788(0x215)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i))_0x4077b6=String(RegExp['$1'])['trim']();else _0x3c1f8a[_0x23d788(0x215)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x4077b6=String(RegExp['$2'])[_0x23d788(0x10e)]());if(_0x4077b6){const _0x40a9f2=ImageManager[_0x23d788(0x359)](_0x4077b6);_0x40a9f2[_0x23d788(0x27a)](this[_0x23d788(0x4a0)][_0x23d788(0x32d)](this,_0x3a8750,![],_0x3c1f8a,_0x5ebb86,_0x40a9f2));}},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x4a0)]=function(_0x20c6fe,_0x42f616,_0xe5b0e4,_0x2d1709,_0x4ae676){const _0x460b51=_0x40e911,_0x1055eb=this[_0x460b51(0x402)](),_0x565f0d=_0x1055eb+this['commandName'](_0x20c6fe);if(_0xe5b0e4!==_0x565f0d)return;const _0x26ef5a=this[_0x460b51(0x1cc)](_0x20c6fe);if(['x','y','width',_0x460b51(0x4e2)][_0x460b51(0x2d5)](_0x2f3057=>_0x26ef5a[_0x2f3057]!==_0x2d1709[_0x2f3057]))return;let _0x2ebb2a=0x0,_0x2493bf='';if(_0x42f616&&_0x565f0d[_0x460b51(0x215)](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE):[ ](.*?)>/i)){}else{if(_0x42f616&&_0x565f0d[_0x460b51(0x215)](/<FG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i))_0x2493bf=String(RegExp['$1'])[_0x460b51(0x31d)]()[_0x460b51(0x10e)]();else!_0x42f616&&_0x565f0d['match'](/<BG(?:| )(?:IMG|IMAGE|PIC|PICTURE)[ ]*(.*?):[ ](.*?)>/i)&&(_0x2493bf=String(RegExp['$1'])[_0x460b51(0x31d)]()['trim']());}switch(_0x2493bf){case _0x460b51(0x200):case _0x460b51(0x176):case _0x460b51(0x3e5):case _0x460b51(0x389):case _0x460b51(0x3f7):case _0x460b51(0x2c9):case'1':_0x2ebb2a=0x1;break;case _0x460b51(0x2dd):case _0x460b51(0x2e2):case _0x460b51(0x21f):case'downcenter':case _0x460b51(0x299):case _0x460b51(0x1ab):case _0x460b51(0x41b):case'2':_0x2ebb2a=0x2;break;case _0x460b51(0x1a2):case _0x460b51(0x439):case _0x460b51(0x391):case'downright':case _0x460b51(0x3d7):case _0x460b51(0x420):case'3':_0x2ebb2a=0x3;break;case _0x460b51(0x114):case _0x460b51(0x3be):case _0x460b51(0x4c1):case'4':_0x2ebb2a=0x4;break;case _0x460b51(0x245):case _0x460b51(0x325):case _0x460b51(0x273):case _0x460b51(0x315):case'5':_0x2ebb2a=0x5;break;case _0x460b51(0x21d):case _0x460b51(0x394):case _0x460b51(0x177):case'6':_0x2ebb2a=0x6;break;case _0x460b51(0x142):case'upper-left':case _0x460b51(0x1ad):case _0x460b51(0x363):case _0x460b51(0x2a2):case'up\x20left':case'7':_0x2ebb2a=0x7;break;case'uppercenter':case _0x460b51(0x39e):case _0x460b51(0x41d):case _0x460b51(0x34c):case'up-center':case _0x460b51(0x285):case'up':case'8':_0x2ebb2a=0x8;break;case'upperright':case'upper-right':case _0x460b51(0x193):case'upright':case'up-right':case'up\x20right':case'9':_0x2ebb2a=0x9;break;}const _0x51c4f1=_0x42f616?this[_0x460b51(0x1b4)]:this['contentsBack'],_0x682902=this['itemRect'](_0x20c6fe);!_0x42f616&&_0x51c4f1[_0x460b51(0x2a8)](_0x682902['x']-0x1,_0x682902['y']-0x1,_0x682902[_0x460b51(0x38e)]+0x2,_0x682902[_0x460b51(0x4e2)]+0x2);const _0x4a3d40=_0x682902['x']+0x2,_0x4febf5=_0x682902['y']+0x2,_0x4a757e=_0x682902['width']-0x4,_0x30d3e8=_0x682902[_0x460b51(0x4e2)]-0x4,_0x14e3ce=_0x4ae676['width'],_0x563909=_0x4ae676[_0x460b51(0x4e2)];let _0x4285b3=_0x4a3d40,_0x57cb5b=_0x4febf5,_0x107d5f=_0x4a757e,_0xea2ff=_0x30d3e8;const _0x49eae8=_0x4a757e/_0x14e3ce,_0x2c571a=_0x30d3e8/_0x563909;let _0x3cde9b=Math[_0x460b51(0x3d3)](_0x49eae8,_0x2c571a);if(_0x42f616)_0x3cde9b=Math[_0x460b51(0x3d3)](_0x3cde9b,0x1);_0x2ebb2a!==0x0&&(_0x107d5f=Math[_0x460b51(0x3ea)](_0x14e3ce*_0x3cde9b),_0xea2ff=Math['round'](_0x563909*_0x3cde9b));switch(_0x2ebb2a){case 0x1:case 0x4:case 0x7:_0x4285b3=_0x4a3d40;break;case 0x2:case 0x5:case 0x8:_0x4285b3+=Math[_0x460b51(0x3ea)]((_0x4a757e-_0x107d5f)/0x2);break;case 0x3:case 0x6:case 0x9:_0x4285b3+=_0x4a757e-_0x107d5f;break;}switch(_0x2ebb2a){case 0x7:case 0x8:case 0x9:_0x57cb5b=_0x4febf5;break;case 0x4:case 0x5:case 0x6:_0x57cb5b+=Math[_0x460b51(0x3ea)]((_0x30d3e8-_0xea2ff)/0x2);break;case 0x1:case 0x2:case 0x3:_0x57cb5b+=_0x30d3e8-_0xea2ff;break;}_0x51c4f1['blt'](_0x4ae676,0x0,0x0,_0x14e3ce,_0x563909,_0x4285b3,_0x57cb5b,_0x107d5f,_0xea2ff),_0x42f616&&this[_0x460b51(0x191)](_0x20c6fe);},Window_ChoiceList[_0x40e911(0x464)][_0x40e911(0x12c)]=function(){const _0xa8ecae=_0x40e911;this[_0xa8ecae(0x234)]['clear']();if(!this[_0xa8ecae(0x236)])return;const _0x40ca08=this[_0xa8ecae(0x1bd)]();this[_0xa8ecae(0x236)][_0x40ca08]?(this[_0xa8ecae(0x234)][_0xa8ecae(0x30e)](this['_choiceHelpDescriptions'][_0x40ca08]),this['_helpWindow'][_0xa8ecae(0x371)]()):(this[_0xa8ecae(0x234)]['clear'](),this['_helpWindow'][_0xa8ecae(0x301)]());},Window_EventItem[_0x40e911(0x464)]['makeItemList']=function(){const _0xc96c1a=_0x40e911,_0x15871a=$gameMessage[_0xc96c1a(0x410)]();_0x15871a==='skill'&&Imported['VisuMZ_1_SkillsStatesCore']?this[_0xc96c1a(0x352)]():Window_ItemList['prototype'][_0xc96c1a(0x43e)][_0xc96c1a(0x3b1)](this);},Window_EventItem[_0x40e911(0x464)][_0x40e911(0x352)]=function(){const _0x351245=_0x40e911,_0x812887=$gameMessage['itemChoiceActor']();this[_0x351245(0x250)]=_0x812887?_0x812887[_0x351245(0x326)]()[_0x351245(0x443)](_0x4ccdd2=>this[_0x351245(0x136)](_0x4ccdd2)):[],this[_0x351245(0x136)](null)&&this[_0x351245(0x250)][_0x351245(0x202)](null);},VisuMZ[_0x40e911(0x348)]['Window_EventItem_includes']=Window_EventItem[_0x40e911(0x464)][_0x40e911(0x136)],Window_EventItem[_0x40e911(0x464)][_0x40e911(0x136)]=function(_0x5b9b39){const _0x24f74e=_0x40e911,_0x51528a=$gameMessage[_0x24f74e(0x410)]();if(_0x51528a===_0x24f74e(0x458)){if(!DataManager[_0x24f74e(0x1bc)](_0x5b9b39))return![];const _0x1ad451=$gameMessage[_0x24f74e(0x181)]();if(_0x1ad451>0x0){if(_0x5b9b39['wtypeId']!==_0x1ad451)return![];}return!![];}else{if(_0x51528a===_0x24f74e(0x2c7)){if(!DataManager[_0x24f74e(0x289)](_0x5b9b39))return![];const _0xf42ab8=$gameMessage[_0x24f74e(0x1de)]();if(_0xf42ab8>0x0){if(_0x5b9b39[_0x24f74e(0x208)]!==_0xf42ab8)return![];}const _0x3acd1d=$gameMessage[_0x24f74e(0x384)]();if(_0x3acd1d>0x0){if(_0x5b9b39[_0x24f74e(0x170)]!==_0x3acd1d)return![];}return!![];}else{if(_0x51528a===_0x24f74e(0x3fe)){if(!DataManager[_0x24f74e(0x14a)](_0x5b9b39))return![];const _0x25e393=$gameMessage[_0x24f74e(0x3c4)]();if(_0x25e393['isSkillHidden'](_0x5b9b39))return![];if(!_0x25e393[_0x24f74e(0x35b)](_0x5b9b39))return![];const _0x40de4d=$gameMessage[_0x24f74e(0x138)]();if(_0x40de4d>0x0){const _0x3a45af=DataManager['getSkillTypes'](_0x5b9b39);if(!_0x3a45af[_0x24f74e(0x136)](_0x40de4d))return![];}return!![];}else return VisuMZ['MessageCore']['Window_EventItem_includes'][_0x24f74e(0x3b1)](this,_0x5b9b39);}}},VisuMZ[_0x40e911(0x348)]['Window_ItemList_drawItemNumber']=Window_ItemList[_0x40e911(0x464)][_0x40e911(0x2a1)],Window_ItemList[_0x40e911(0x464)][_0x40e911(0x2a1)]=function(_0x1b58f9,_0x2786ed,_0x124421,_0x4ac43b){const _0x8d9bcc=_0x40e911,_0x217fa9=$gameMessage[_0x8d9bcc(0x410)]();if(_0x217fa9===_0x8d9bcc(0x3fe)){const _0x385e62=$gameMessage[_0x8d9bcc(0x3c4)]();this[_0x8d9bcc(0x157)](_0x385e62,_0x1b58f9,_0x2786ed,_0x124421,_0x4ac43b);}else VisuMZ['MessageCore'][_0x8d9bcc(0x38d)][_0x8d9bcc(0x3b1)](this,_0x1b58f9,_0x2786ed,_0x124421,_0x4ac43b);};