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
// 1.0.0 2024// 初版
//=============================================================================*/
/*:
 * @plugindesc 【wingly-Icoration】 [Tire 4] [Ver,1.1.0] [IndividualSceneBGM] 
 * @author ﾜｲ式会社wingly Chat-GPT
 * @target MZ
 * @url https://raw.githubusercontent.com/0623wingly/RMMZ-Plugin/main/IndividualSceneBGM.js
 *
 * @help
 *
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
 * さらに、アドオンプラグイン「IndividualSceneBGM+.js」で
 * 以下の２個のシーンにも、追加で専用のBGMを複数設定することが出来ます。
 * ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
 * ・「Scene_CreditsPage」クレジット画面  ※VisuMZ_4_CreditsPage
 * ・「Scene_PatchNotes」パッチノート画面　※VisuMZ_4_PatchNotes
 * ----------------------------------------------------------------------------
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
 * 1.0.0 2024/05/15 初版リリース
 * 1.1.0 2024/05/15 アドオンプラグイン「IndividualSceneBGM+.js」に対応
 * ----------------------------------------------------------------------------
 *　
 * @param menuBGMSettings
 * @text Scene_Menu再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param isMenuBGMkeep
 * @text メニューBGM保持
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

    const pluginName = 'IndividualSceneBGM';
    const parameters = PluginManager.parameters(pluginName);
    const isMenuBGMkeep = parameters['isMenuBGMkeep'] === 'true';

    // ◎フラグの初期化
    let isInMenuScene = false;  // メニューフラグ（初期値はfalse）
    let previousBgm = null;  // Aスロ：非対応シーン用のBGM保存
    let menuBgm = null;  // Bスロ：メニュー専用のBGM保存スロット
    let currentSceneType = "";  // 現在のシーンタイプ
    let supportedAFlag = false; // 対応Aフラグ

    const sceneBgmMapping = {
        // 対応シーンのマッピング（メニューは含めない）
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

    // シーンタイプを判定する関数
    const getSceneType = (sceneName) => {
        // メニューシーンの場合は個別に判定
        if (sceneName === 'Scene_Menu') {
            const bgmSettings = parameters['menuBGMSettings'];
            const bgmList = bgmSettings ? JSON.parse(bgmSettings).bgmList : null;
            return (bgmList && bgmList.length > 0) ? 'menuA' : 'menuB';
        }
        // 対応シーン（マッピングされているシーン）
        if (sceneBgmMapping[sceneName]) {
            const bgmSettings = parameters[sceneBgmMapping[sceneName]];
            const bgmList = bgmSettings ? JSON.parse(bgmSettings).bgmList : null;
            const variableId = parseInt(JSON.parse(bgmSettings).variableId, 10) || 0;
            const index = $gameVariables.value(variableId) || 0;
            return (bgmList && bgmList.length > index) ? 'supportedA' : 'supportedB';
        }
        // 非対応シーン
        return 'nonSupported';
    };

    // BGMを再生する関数
    const playSceneBgm = (bgmList, variableId) => {
        const index = $gameVariables.value(variableId) || 0;
        if (index >= 0 && index < bgmList.length) {
            const bgm = bgmList[index];
            AudioManager.playBgm({
                name: bgm.fileName,
                volume: bgm.volume,
                pitch: bgm.pitch,
                pan: bgm.pan
            });
            console.log(`Playing BGM: ${bgm.fileName}`);
        } else {
            console.log("No valid BGM to play.");
        }
    };

    // シーンに対応したBGMを再生する
    const setupSceneBGM = (sceneName) => {
        const bgmSettings = parameters[sceneBgmMapping[sceneName]];
        if (bgmSettings) {
            const parsedBgm = JSON.parse(bgmSettings);
            const bgmList = JSON.parse(parsedBgm.bgmList).map(bgm => JSON.parse(bgm));
            const variableId = parseInt(parsedBgm.variableId, 10) || 0;
            playSceneBgm(bgmList, variableId);  // 対応シーンのBGMを再生
        }
    };

    // 現在のBGMをAスロに保存し、BGMを停止する
    const saveAndStopCurrentBgm = () => {
        previousBgm = AudioManager.saveBgm();  // Aスロに保存
        AudioManager.stopBgm();  // BGMを停止
        console.log("Saved current BGM to A slot and stopped BGM.");
    };

    // AスロのBGMをリストアする
    const restoreBgm = () => {
        if (previousBgm) {
            AudioManager.replayBgm(previousBgm);
            console.log(`Restored BGM from A slot: ${previousBgm.name}`);
        }
    };

    // シーン切り替え時にシーンタイプをセットし、対応シーンAでBGMを再生する
    const setSceneType = () => {
        const currentSceneName = SceneManager._scene.constructor.name;
        currentSceneType = getSceneType(currentSceneName);
        console.log(`Current Scene Type: ${currentSceneType}`);

        // 対応シーンAでBGMを再生し、フラグを立てる
        if (currentSceneType === 'supportedA') {
            setupSceneBGM(currentSceneName);
            supportedAFlag = true; // 対応AフラグをONにする
        } else {
            supportedAFlag = false; // 対応AフラグをOFFにする
        }
    };

    // シーン終了時にBGMを停止する処理を追加（非対応シーン・対応シーンA）
    const _Scene_Base_terminate = Scene_Base.prototype.terminate;
    Scene_Base.prototype.terminate = function() {
        if (currentSceneType === 'nonSupported') {
            saveAndStopCurrentBgm();  // 非対応シーン終了時にBGMを保存して停止
        } else if (currentSceneType === 'supportedA') {
            AudioManager.stopBgm();  // 対応シーンA終了時にBGMを停止
            console.log("Stopped BGM for supported A scene.");
        }
        // 対応Aから対応Bに遷移する際にAスロをリストア
        if (currentSceneType === 'supportedB' && supportedAFlag) {
            restoreBgm();  // AスロのBGMをリストア
            console.log("Restoring A slot after transitioning from supported A to supported B.");
        }
        _Scene_Base_terminate.call(this);  // 元の処理を呼び出す
    };

    // Scene_Base の start にシーンタイプのセットとBGM再生を追加
    const _Scene_Base_start = Scene_Base.prototype.start;
    Scene_Base.prototype.start = function() {
        _Scene_Base_start.call(this);
        setSceneType();  // シーンタイプをセットし、必要ならBGMを再生

        // 非対応シーン開始時にAスロリストア
        if (currentSceneType === 'nonSupported') {
            restoreBgm();
        }
    };

})();