//=============================================================================
// IndividualSceneBGM+.js
//----------------------------------------------------------------------------
// © 2020-2024 wingly-Icoration. All Right Reserved.
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
// Made with OpenAI Chat-GPT.
// https://openai.com/chatgpt
//----------------------------------------------------------------------------
// [Version History]～更新履歴～
// 1.0.0 2024/05/15 初版
//=============================================================================*/
/*:
 * @plugindesc 【wingly-Icoration】 [Tire 5] [Ver,1.0.0] [IndividualSceneBGM+] 
 * @author ﾜｲ式会社wingly Chat-GPT
 * @target MZ
 * @url https://raw.githubusercontent.com/0623wingly/RMMZ-Plugin/Tire5/WinglyMZ_5_IndividualSceneBGM+.js
 * @base WinglyMZ_4_IndividualSceneBGM
 * @orederAfter WinglyMZ_4_IndividualSceneBGM
 *
 * @help
 *
 * WinglyプラグインNo.1-2
 * 各シーンに専用のBGMを複数設定することが出来ます。
 * こちらは他者プラグイン対応拡張版です。
 * オリジナルIndividualSceneBGM.jsが必要です。
 * オリジナルIndividualSceneBGM.jsの下に配置してください。
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                                  Tire 5
 * ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * このプラグインのTireは５です。Tire5は「スタンドアロン」のプラグイン群です。
 * 通常どこに配置しても問題はありませんが、最下層に配置することを勧めます。
 * ----------------------------------------------------------------------------
 * 
 * ============================================================================
 *                                  機能
 * ============================================================================
 * オリジナルプラグイン「IndividualSceneBGM.js」のアドオンです。
 * 以下の２個のシーンに、追加で専用のBGMを複数設定することが出来ます。
 * このプラグインは他者製プラグインのシーンのBGMを設定するだけで、
 * 再生などの処理は行われません。ご注意ください。
 * ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
 * ・「Scene_CreditsPage」クレジット画面  ※VisuMZ_4_CreditsPage
 * ・「Scene_PatchNotes」パッチノート画面　※VisuMZ_4_PatchNotes
 * ----------------------------------------------------------------------------
 * 具体的な設定方法や仕様に関してはオリジナルのヘルプを参照してください。
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
 * 1.0.0 2024/05/16 初版リリース
 * ----------------------------------------------------------------------------
 * @command pushScene
 * @text 指定のSceneに遷移
 * @desc 指定のSceneに遷移します。
 *
 * @arg sceneName
 * @text 遷移するScene
 * @desc 遷移するSceneを選択してください。
 * @type select
 * @option [トリアコンタン]ゲーム内用語辞典※SceneGlossary
 * @value Scene_Glossary
 * @option [トリアコンタン]サウンドテスト画面※SceneSoundTest
 * @value Scene_SoundTest
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
 * @option [トリアコンタン]ゲーム内用語辞典※SceneGlossary
 * @value Scene_Glossary
 * @option [トリアコンタン]サウンドテスト画面※SceneSoundTest
 * @value Scene_SoundTest
 * 
 * @param GlossaryBGMSettings
 * @text Scene_Glossary再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param SoundTestBGMSettings
 * @text Scene_SoundTest再生BGM
 * @type struct<SceneBGMSettings>
 * 
 * @param creditsPageBGMSettings
 * @text Scene_CrditsPage再生BGM
 * @type struct<SceneBGMSettings>
 *
 * @param patchNotesBGMSettings
 * @text Scene_PatchNotes再生BGM
 * @type struct<SceneBGMSettings>
 *
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