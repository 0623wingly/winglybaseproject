/*:
 * @target MZ
 * @plugindesc Shows the save screen when "New Game" is selected and proceeds to the map afterward.
 * @help This plugin shows the save screen when the "New Game" option is selected from the title screen, and then transitions to the map after the save screen is closed.
 */

(() => {
    // Override the commandNewGame function in Scene_Title
    const _Scene_Title_commandNewGame = Scene_Title.prototype.commandNewGame;
    Scene_Title.prototype.commandNewGame = function() {
        // Setup the new game data but instead of going to map, go to the save scene
        DataManager.setupNewGame();
        this._commandWindow.close();
        // Go to the save scene instead of the map
        SceneManager.goto(Scene_Save);
    };

    // After closing the save screen, proceed to the map
    const _Scene_Save_terminate = Scene_Save.prototype.terminate;
    Scene_Save.prototype.terminate = function() {
        _Scene_Save_terminate.call(this);
        // Proceed to the map after the save screen is closed
        SceneManager.push(Scene_Map);
    };
})();
