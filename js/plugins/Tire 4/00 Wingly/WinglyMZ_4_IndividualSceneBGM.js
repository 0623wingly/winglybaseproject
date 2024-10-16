//=============================================================================
// IndividualSceneBGM.js
//----------------------------------------------------------------------------
// © 2020-2024 wingly-Icoration. All Right Reserved.
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// Made with OpenAI Chat-GPT.
// https://openai.com/chatgpt
//----------------------------------------------------------------------------
// [Version History]～更新履歴～
// α0.0.0 メニュー画面BGMの再生機能定義
// α0.1.0 メニュー画面BGMの再生位置保持機能定義
// α0.1.1 プラグインコマンドでメニュー画面BGM保持設定を変更できるよう定義
// α0.2.0 対応シーンBGMの再生機能定義
// α0.2.1 対応シーン離脱時にAスロをレジュームするように定義
// 1.0.0 2024/10/16 完成
//=============================================================================*/
/*:
 * @plugindesc 【wingly-Icoration】 [Tire 4] [Ver,1.0.0] [IndividualSceneBGM] 
 * @author ﾜｲ式会社wingly Chat-GPT
 * @target MZ
 * @url https://raw.githubusercontent.com/0623wingly/RMMZ-Plugin/Tire4/WinglyMZ_4_IndividualSceneBGM.js
 *
 * @help
 * WinglyプラグインNo.1
 * 各シーンに専用のBGMを複数設定することが出来ます。
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                                  Tire 4
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * このプラグインのTireは４です。Tire４は「機能拡張・補助」のプラグイン群です。
 * 他のプラグインとの競合に注意し、Tire３より下Tire５より上に配置してください。
 * ----------------------------------------------------------------------------
 * 
 * ============================================================================
 *                                  機能
 * ============================================================================
 * 以下の１１個のシーンに、専用のBGMを複数設定することが出来ます。
 * ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
 * ・「Scene_Menu」メニュー画面  
 * ・「Scene_Item」アイテム画面
 * ・「Scene_Skill」スキル画面  
 * ・「Scene_Equip」装備画面  
 * ・「Scene_Status」ステータス画面  
 * ・「Scene_Options」オプション画面  
 * ・「Scene_Save」セーブ画面  
 * ・「Scene_load」ロード画面  
 * ・「Scene_gameEnd」ゲーム終了画面  
 * ・「Scene_shop」ショップ画面 
 * ・「Scene_name」名前入力画面  
 * ----------------------------------------------------------------------------
 * ◎プラグインパラメータ
 * バインドされた変数の値に応じてBGMは動的に変化します。 
 * バインドされていない場合はリストの一番上,１番目に設定されたBGMが再生されます。
 * バインドした変数の値が０なら通常通り、リストの１番目のBGMが再生され、
 * バインドした変数の値が１ならリスト２番目、２なら３番目のBGMというように、
 * ＜変数の値＋１＞番目に指定されているBGMが再生されます。
 *
 * 具体的なBGMの設定方法を示します。
 * ここでは例としてメニュー画面に専用のBGMを追加します。
 * まずはプラグインマネージャーを開き、「Scene_Menu再生BGM」を開いてください。
 * もしメニュー画面に複数のBGMを指定し動的に変化させたい場合は、
 * 「バインドする変数のID」の項目を開き
 * バインド(結びつけ)させる変数を指定してください。
 * 動的に変化させる必要がない場合、BGMを複数指定しない場合は、
 * 何も指定しなくて大丈夫です。(0にしてください。)
 * 続いて再生するBGMを指定します。「再生するBGMリスト」を開いてください。
 * 空白の部分をクリックしてBGMを指定してください。
 * audio/bgmのフォルダが参照されます。必要に応じてピッチなどを変更してください。
 * なおデフォルトは[音量:100][ピッチ:100][位相:0]となります。
 * 今設定したリスト一番上のBGMがデフォルトで再生されるBGMです。
 * 追加したい場合は同様に空白の部分をクリックしBGMを指定してください。
 * 今リスト２番目に設定したBGMはバインドした変数の値が
 * １に変化した場合に再生されるものです。
 * BGMはいくつでも指定することが出来ます。
 * 順番の入れ替えも簡単に行うことが出来ます。
 * デフォルトのBGMを変更したくなった場合に活用してください。
 * その他の項目、セーブ画面などについても同様に指定してください。
 * 
 * ◎プラグインコマンド
 * 「pushScene」
 * 指定のシーンに遷移するだけのコマンドです。
 * イベントコマンドに存在しない以下のSceneに対応しています。
 * ・「Scene_Item」アイテム画面
 * ・「Scene_Skill」スキル画面  
 * ・「Scene_Equip」装備画面  
 * ・「Scene_Status」ステータス画面  
 * ・「Scene_Options」オプション画面   
 * ・「Scene_load」ロード画面  
 * ・「Scene_gameEnd」ゲーム終了画面  
 *
 * ・「Scene_shop」ショップ画面 
 * ・「Scene_name」名前入力画面
 * の二つに関しては、そのほかの設定が必要になるため対応していません。
 * 
 * 「pushScenewithArg」
 * 上記同様ですが、引数を渡して遷移することができるため、
 * 複数のBGMを設定している場合は便利です。
 * [index]の項目で、再生したいBGM番号を入力します。
 * もし指定のシーンに変数がバインドされてない場合は、無視されます。
 * [isValuekeep]の項目で、変数の値を変化させたままにするのかを選択できます。
 * ONの場合は変数の値が上書きされ、以降また変更しない限り
 * そのインデックスのBGMが再生されます。
 * OFFの場合はこのコマンドによる遷移時のみ、設定された
 * インデックスのBGMが再生され、シーン終了時に元に戻されます。
 * なお、メニューはその性質上対応していません。
 * 
 * 「isMenuBGMkeep」
 * パラメータで設定できる、メニュー画面BGM保持設定を上書きすることができます。
 * こちらでの設定が優先され、パラメータでONにしていても、
 * このプラグインコマンドでOFFにした場合、OFFになります。
 * ----------------------------------------------------------------------------
 * 
 * %&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&
 *                                  注意事項
 * &%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%&%
 * このプラグインはChat-GPT君が作成してくれたものです。
 * 僕はただ彼に依頼しただけで下のコードには一切手を付けていません。
 * むしろ理解出来ません。僕が分かるのは何が行われているのかということだけです。
 * ----------------------------------------------------------------------------
 *
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 *                                  利用規約
 * \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 * なし。どうぞご自由に。お好きにお使いください。
 * ゲームジャンル問わず。無断改変、再配布、などなど諸々可能です。
 * 一切の制限がありません。このプラグインはもう既にあなたのものです。
 * ----------------------------------------------------------------------------
 *  
 * ############################################################################
 * [Version History]～更新履歴～
 * ############################################################################
 * 1.0.0 2024/10/16 初版リリース
 * ----------------------------------------------------------------------------
 * 
 * @command pushScene
 * @text 指定のSceneに遷移
 * @desc 指定のSceneに遷移します。
 *
 * @arg sceneName
 * @text 遷移するScene
 * @desc 遷移するSceneを選択してください。
 * @value Scene_Menu
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_GameEnd
 *
 * @command pushScenewithArg
 * @text 引数を渡して指定のSceneに遷移
 * @desc 引数を渡して指定のSceneに遷移します。
 * 
 * @arg index
 * @text 変数の値
 * @desc 遷移先のSceneの変数の値を指定してください。<br>変数がバインドされてない場合無視されます。
 * @type number
 * @min 0
 * 
 * @arg isValuekeep
 * @text 変数の値の保持
 * @desc ONの場合は変数の値が上書きされ、OFFなら上書きされません。<br>デフォルトはONです。
 * @type boolean
 * @default true
 * @on 上書き
 * @off 一時的
 *
 * @arg sceneName
 * @text 遷移するScene
 * @desc 遷移するSceneを選択してください。
 * @type select
 * @option アイテム
 * @value Scene_Item
 * @option スキル
 * @value Scene_Skill
 * @option 装備
 * @value Scene_Equip
 * @option ステータス
 * @value Scene_Status
 * @option オプション
 * @value Scene_Options
 * @option セーブ
 * @value Scene_Save
 * @option ロード
 * @value Scene_Load
 * @option ゲーム終了
 * @value Scene_GameEnd
 * 
 * @command MenuBGMkeepOption
 * @text メニュー画面BGM保持設定変更
 * @desc メニュー画面BGMを保持するかどうかを設定できます。<br>パラメーターでの設定より優先されます。
 * 
 * @arg isMenuBGMkeep
 * @text メニュー画面BGM保持
 * @desc メニュー画面BGMを保持するかどうかを設定できます。<br>デフォルトはTrueです。
 * @type boolean
 * @default true
 * @on 維持
 * @off リセット
 * 
 * @param titleBGMSettings
 * @text Scene_Title再生BGM
 * @desc タイトル画面で再生するBGMを設定してください。
 * @type struct<SceneBGMSettings>
 * 
 * @param menuBGMSettings
 * @text Scene_Menu再生BGM
 * @desc メニュー画面で再生するBGMを設定してください。
 * @type struct<SceneBGMSettings>
 *
 * @param isMenuBGMkeep
 * @text メニュー画面BGM保持
 * @desc Trueなら再生位置が維持されます。Falseなら維持しません。<br>デフォルトはTrueです。
 * @type boolean
 * @default true
 * @on 維持
 * @off リセット
 *
 * @param itemBGMSettings
 * @text Scene_Item再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param skillBGMSettings
 * @text Scene_Skill再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param equipBGMSettings
 * @text Scene_Equip再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param statusBGMSettings
 * @text Scene_Status再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param optionsBGMSettings
 * @text Scene_Options再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param saveBGMSettings
 * @text Scene_Save再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param loadBGMSettings
 * @text Scene_Load再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param gameEndBGMSettings
 * @text Scene_GameEnd再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param shopBGMSettings
 * @text Scene_Shop再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param nameBGMSettings
 * @text Scene_Name再生BGM
 * @type struct<SceneBGMSettings>
 *
 */

/*~struct~SceneBGMSettings:
 * @param variableId
 * @text バインドする変数のID
 * @desc このシーンにバインドさせる変数のIDです。<br>この変数の値に応じてBGMが動的に切り替わります。
 * @type variable
 * @default 0
 *
 * @param bgmList
 * @text 再生するBGMリスト
 * @desc このシーンで再生するBGMのリストです。<br>一番上のBGMがデフォルトで再生されます。
 * @type struct<BGMSetting>[]
 */

/*~struct~BGMSetting:
 * @param fileName
 * @text ファイル名
 * @desc 再生するBGMのファイル名を入力してください。
 * @type file
 * @dir audio/bgm
 * @default
 *
 * @param volume
 * @text 音量
 * @desc 再生するBGMの音量を設定してください。<br>最小値:0/最大値:200
 * @type number
 * @default 100
 * @min 0
 * @max 100
 *
 * @param pitch
 * @text ピッチ
 * @desc 再生するBGMのピッチを設定してください。<br>最小値:50/最大値:200
 * @type number
 * @default 100
 * @min 50
 * @max 200
 *
 * @param pan
 * @text 位相
 * @desc 再生するBGMの位相を設定してください。<br>最小値:-100/最大値:100
 * @type number
 * @default 0
 * @min -100
 * @max 100
 */

(() => {
    'use strict';

    const pluginName = 'WinglyMZ_4_IndividualSceneBGM';
    const parameters = PluginManager.parameters(pluginName);
    
    let MenuBGMkeep = parameters['isMenuBGMkeep'] === 'true';

    let titleBgm = null;
    let previousBgm = null;
    let menuBgm = null;

    const playedState = 'None';
    let preMenuIndex = null;

    const sceneBgmMapping = {
        'Scene_Item': 'itemBGMSettings',
        'Scene_Skill': 'skillBGMSettings',
        'Scene_Equip': 'equipBGMSettings',
        'Scene_Status': 'statusBGMSettings',
        'Scene_Options': 'optionsBGMSettings',
        'Scene_Save': 'saveBGMSettings',
        'Scene_Load': 'loadBGMSettings',
        'Scene_GameEnd': 'gameEndBGMSettings',
        'Scene_Shop': 'shopBGMSettings',
        'Scene_Name': 'nameBGMSettings'
    };

    const SupportedScene = (sceneName) => sceneBgmMapping[sceneName];
    const ExcludedScene = (sceneName) => ['Scene_Boot', 'Scene_Base', 'Scene_MenuBase', 'Scene_File', 'Scene_Title'].includes(sceneName);
    const UnsupportedScene = (sceneName) => !SupportedScene(sceneName) && !ExcludedScene(sceneName);

    const BScene = (sceneName) => {
        if (!sceneBgmMapping[sceneName]) return false
        const { bgmList, index } = IndividualSceneBGM.setupIndividualSceneBGM(sceneName);
        return bgmList.length === 0 || index < 0 || index >= bgmList.length || !bgmList[index]?.fileName;
    };

//=============================================================================
//BGM保存に関するクラス
//=============================================================================    

    class saveBGMtoSlot { 
        static getpreviousSceneName() {
            // 以前のシーン名を取得
            const previousScene = SceneManager._previousScene;
            
            if (previousScene) {
                return previousScene.constructor.name;
            }
            return 'Unknown';  // 以前のシーンが存在しない場合は 'Unknown' を返す
        }

        static getnextSceneName() {
            // 次のシーン名を取得
            const nextScene = SceneManager._nextScene;
            if (nextScene) {
                return nextScene.constructor.name;
            }
            return 'Unknown';  // 次のシーンがまだ決まっていない場合は 'Unknown' を返す
        }

        static saveBGM() {
            const previousSceneName = this.getpreviousSceneName();
            console.log(previousSceneName);
            if (saveBGMtoSlot.isPlayedState('TScene')) {
                titleBgm = AudioManager.saveBgm();
                console.log("タイトル画面BGMを保存");
                AudioManager.stopBgm();
                return;
            }
            if (UnsupportedScene(previousSceneName)) {
                previousBgm = AudioManager.saveBgm();
                console.log("非対応シーンBGMを保存");
                AudioManager.stopBgm();
                return;
            } 
            else if (BScene(previousSceneName)) {
                switch (this.playedState) {
                    case 'UScene':
                        previousBgm = AudioManager.saveBgm();
                        console.log("非対応シーンBGMを保存fromBScene");
                        break;
                    case 'MScene':
                        menuBgm = AudioManager.saveBgm();
                        console.log("メニュー画面BGMを保存fromBScene");
                        AudioManager.stopBgm();
                        break;
                    default:
                        break;
                }   
            }
        }

        // プレイ状態を設定するための関数
        static setPlayedState(state) {
            this.playedState = state;
        }

        // シーンの状態をチェックする関数
        static isPlayedState(state) {
            return this.playedState === state;
        }

    };

    // Scene_Title の start メソッドをオーバーライド
    const _Scene_Title_start = Scene_Title.prototype.start;
    Scene_Title.prototype.start = function() {
        _Scene_Title_start.call(this);
        saveBGMtoSlot.setPlayedState('TScene');
    };
        
//=============================================================================
//メニューシーンのBGM再生に関するクラス
//=============================================================================

    class MenuSceneBGM {
        static setupMenuSceneBGM () {
            const menubgmSettings = JSON.parse(parameters['menuBGMSettings']);
            const menuvariableId = parseInt(menubgmSettings.variableId, 10) || 0;
            const menubgmList = JSON.parse(menubgmSettings.bgmList).map(bgm => JSON.parse(bgm));
            const menuIndex = $gameVariables.value(menuvariableId);

            return { bgmList: menubgmList, menuIndex: menuIndex };
        }

        static playMenuBGM() {
            if (saveBGMtoSlot.isPlayedState('MScene')) {
                return;
            } 
            const { bgmList, menuIndex } = this.setupMenuSceneBGM();
            if (menuBgm && MenuBGMkeep && preMenuIndex === menuIndex) {
                saveBGMtoSlot.saveBGM();
                AudioManager.replayBgm(menuBgm);
                console.log("メニュー画面BGMをレジューム");
            } else if (menuIndex >= 0 && menuIndex < bgmList.length) {
                const bgm = bgmList[menuIndex];
                if (bgm && bgm.fileName) {
                    saveBGMtoSlot.saveBGM();
                    AudioManager.playBgm({
                        name: bgm.fileName,
                        volume: parseInt(bgm.volume, 10),
                        pitch: parseInt(bgm.pitch, 10),
                        pan: parseInt(bgm.pan, 10)
                    });
                    preMenuIndex = menuIndex;
                    console.log("メニュー画面BGMを再生");
                }
            }
            saveBGMtoSlot.setPlayedState('MScene');
        }
        
        static leaveMenuScene() {
            const nextSceneName = saveBGMtoSlot.getnextSceneName();
            if (saveBGMtoSlot.isPlayedState('MScene') && MenuBGMkeep && !BScene(nextSceneName)) {
                menuBgm = AudioManager.saveBgm();
                console.log("メニュー画面BGMを保存");
                AudioManager.stopBgm();
            }
            if (UnsupportedScene(nextSceneName) && previousBgm) {
                AudioManager.replayBgm(previousBgm);
                console.log("非対応シーンBGMをレジューム");
                saveBGMtoSlot.setPlayedState('UScene');
            }            
        }
    };

    // Scene_Menu の start メソッドをオーバーライドして BGM 再生
    const _Scene_Menu_start = Scene_Menu.prototype.start;
    Scene_Menu.prototype.start = function() {
        _Scene_Menu_start.call(this);
            MenuSceneBGM.playMenuBGM();
    };

    // Scene_Menu の terminate メソッドをオーバーライドして BGM 停止
    const _Scene_Menu_terminate = Scene_Menu.prototype.terminate;
    Scene_Menu.prototype.terminate = function() {
        _Scene_Menu_terminate.call(this);
        MenuSceneBGM.leaveMenuScene();
    };

//=============================================================================
//対応のBGM再生に関するクラス
//=============================================================================

    class IndividualSceneBGM {
        static setupIndividualSceneBGM(sceneName) {
            const bgmSettingsString = parameters[sceneBgmMapping[sceneName]];
            if (!bgmSettingsString) {
                return { bgmList: [], index: -1 };
            }

            const bgmSettings = JSON.parse(bgmSettingsString);
            const variableId = parseInt(bgmSettings.variableId, 10) || 0;
            const bgmList = JSON.parse(bgmSettings.bgmList).map(bgm => JSON.parse(bgm));
            const index = $gameVariables.value(variableId);

            return { bgmList: bgmList, index: index };
        }

        static playIndividualSceneBGM(sceneName) {
            const { bgmList, index } = this.setupIndividualSceneBGM(sceneName);
            if (index >= 0 && index < bgmList.length) {
                const bgm = bgmList[index];
                if (bgm && bgm.fileName) {
                    saveBGMtoSlot.saveBGM();
                    AudioManager.playBgm({
                        name: bgm.fileName,
                        volume: parseInt(bgm.volume, 10),
                        pitch: parseInt(bgm.pitch, 10),
                        pan: parseInt(bgm.pan, 10)
                    });
                    saveBGMtoSlot.setPlayedState('AScene');
                    console.log("対応シーンBGMを再生");
                }
            }
        }

        static leaveIndividualScene() {
            console.log(saveBGMtoSlot.isPlayedState('TScene'));
            if (saveBGMtoSlot.isPlayedState('AScene') && previousBgm) {
                console.log("2");
                const nextSceneName = saveBGMtoSlot.getnextSceneName();
                console.log(nextSceneName);
                if (UnsupportedScene(nextSceneName)) {
                    AudioManager.replayBgm(previousBgm);
                    console.log("非対応シーンBGMをレジューム");
                    saveBGMtoSlot.setPlayedState('UScene');
                    return;
                }
            } else if (saveBGMtoSlot.isPlayedState('TScene') && titleBgm) {
                console.log("3");
                AudioManager.replayBgm(titleBgm);
                console.log("タイトル画面BGMをレジューム");
                saveBGMtoSlot.setPlayedState('TScene');
            }
            console.log("4");
        }
    };

    // Scene_Base の start メソッドをオーバーライドして BGM 再生
    const _Scene_Base_start = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function() {
        _Scene_Base_start.call(this);
        const sceneName = this.constructor.name;
        if (SupportedScene(sceneName)) { 
            IndividualSceneBGM.playIndividualSceneBGM(sceneName);
        }
    };

    // Scene_Base の terminate メソッドをオーバーライドして BGM 停止
    const _Scene_Base_terminate = Scene_Base.prototype.terminate;
    Scene_Base.prototype.terminate = function() {
        _Scene_Base_terminate.call(this);
        const sceneName = this.constructor.name;
        if (SupportedScene(sceneName)) {
            IndividualSceneBGM.leaveIndividualScene(sceneName);
        }
    }

//=============================================================================
// プラグインコマンド
//=============================================================================
    // 指定のシーンへ遷移
    PluginManager.registerCommand(pluginName, "pushScene", args => {
        const sceneName = args.sceneName;
        if (typeof window[sceneName] === 'function') {
            SceneManager.push(window[sceneName]);
        } else {
            console.error(`Invalid Scene: ${sceneName}`);
        }
    });

    PluginManager.registerCommand(pluginName, "pushScenewithArg", args => {
        const sceneName = args.sceneName;
        const index = parseInt(args.index, 10);
        const isValuekeep = args.isValuekeep === "true";
        const bgmSettings = parameters[sceneBgmMapping[sceneName]];
    
        if (bgmSettings) {
            try {
                const parsedBgmSettings = JSON.parse(bgmSettings);
                const variableId = parseInt(parsedBgmSettings.variableId, 10) || 0;
                const originalValue = $gameVariables.value(variableId);

                $gameVariables.setValue(variableId, index);
    
                if (!isValuekeep) {
                    const _SceneManager_pop = SceneManager.pop;
                    SceneManager.pop = function() {
                        _SceneManager_pop.call(this);
                        $gameVariables.setValue(variableId, originalValue);
                    };
                }
            } catch (error) {
                console.error(`Failed to parse BGM settings for scene: ${sceneName}`, error);
            }
        }
    
        if (typeof window[sceneName] === 'function') {
            SceneManager.push(window[sceneName]);
        } else {
            console.error(`Invalid Scene: ${sceneName}`);
        }
    });
    

    // メニュー画面BGMの設定変更
    PluginManager.registerCommand(pluginName, "MenuBGMkeepOption", args => {
        MenuBGMkeep = (args.isMenuBGMkeep === "true");

        if (!MenuBGMkeep) {
            menuBgm = null;
            preMenuIndex = null;
        }
    });

})();