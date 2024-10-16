/*:
 * @plugindesc Show debug information on map screen with customizable window type
 * @target MZ
 * @help
 * This plugin shows debug information on the map screen.
 * 
 * @param yOffset
 * @text Y Offset
 * @desc The vertical offset for the debug text to avoid overlapping with VisuStella's DataTimeHUD.
 * @default 100
 * @type number
 * 
 * @param fontSize
 * @text Font Size
 * @desc The font size for the debug text.
 * @default 16
 * @type number
 * 
 * @param fontName
 * @text Font Name
 * @desc The font name for the debug text. Include extension if it's in the fonts folder.
 * @default GameFont
 * @type string
 */

(() => {
  const pluginName = "ShowDebugInfoOnMap";
  const parameters = PluginManager.parameters(pluginName);
  const yOffset = Number(parameters['yOffset'] || 100);
  const fontSize = Number(parameters['fontSize'] || 16);
  const fontName = String(parameters['fontName'] || 'GameFont');

  const tilesetModeNames = {
    0: "Field",
    1: "Area",
    2: "VX Compatible"
  };

  let encounterListCache = [];

  class Window_DebugInfo extends Window_Base {
    constructor(rect) {
      super(rect);
      this.opacity = 0;  // 完全透明に設定
      this.contents.fontSize = fontSize;
      this.contents.fontFace = fontName.includes('.') ? `fonts/${fontName}` : fontName;
      this.refresh();
    }

    resetFontSettings() {
      super.resetFontSettings();
      this.contents.fontSize = fontSize;
      this.contents.fontFace = fontName.includes('.') ? `fonts/${fontName}` : fontName;
    }

    update() {
      super.update();
      this.refresh();
    }

    refresh() {
      this.contents.clear();
      const info = this.drawDebugInfo();
      this.adjustWindowSize(info);
    }

    drawDebugInfo() {
      const mapId = $gameMap.mapId();
      const mapName = $gameMap.displayName();
      const mapWidth = $gameMap.width();
      const mapHeight = $gameMap.height();
      const playerX = $gamePlayer.x;
      const playerY = $gamePlayer.y;
      const playerDir = $gamePlayer.direction();
      const displayX = Math.floor($gameMap.displayX());
      const displayY = Math.floor($gameMap.displayY());
      const tileset = $dataTilesets[$gameMap.tilesetId()];
      const tilesetId = $gameMap.tilesetId();
      const tilesetName = tileset.name;
      const tilesetMode = tilesetModeNames[tileset.mode] || "Unknown";

      const frontX = $gameMap.roundXWithDirection(playerX, playerDir);
      const frontY = $gameMap.roundYWithDirection(playerY, playerDir);

      const bgm = AudioManager._currentBgm ? `${AudioManager._currentBgm.name.split('/').pop()},${AudioManager._currentBgm.volume},${AudioManager._currentBgm.pitch},${AudioManager._currentBgm.pan}` : "None";
      const bgs = AudioManager._currentBgs ? `${AudioManager._currentBgs.name.split('/').pop()},${AudioManager._currentBgs.volume},${AudioManager._currentBgs.pitch},${AudioManager._currentBgs.pan}` : "None";

      const battleback = $gameMap.battleback1Name() + "・" + $gameMap.battleback2Name();

      const isBush = $gameMap.isBush(playerX, playerY);
      const isCounter = $gameMap.isCounter(playerX, playerY);
      const isLadder = $gameMap.isLadder(playerX, playerY);
      const isDamageFloor = $gameMap.isDamageFloor(playerX, playerY);

      const frontIsBush = $gameMap.isBush(frontX, frontY);
      const frontIsCounter = $gameMap.isCounter(frontX, frontY);
      const frontIsLadder = $gameMap.isLadder(frontX, frontY);
      const frontIsDamageFloor = $gameMap.isDamageFloor(frontX, frontY);

      const directions = [
        { dir: 2, symbol: '↓' },
        { dir: 4, symbol: '←' },
        { dir: 6, symbol: '→' },
        { dir: 8, symbol: '↑' },
      ];
      let passableInfo = directions.map(d => {
        return $gamePlayer.canPass(playerX, playerY, d.dir) ? d.symbol : `\\c[18]${d.symbol}\\c[0]`;
      }).join(", ");
      passableInfo = `[Passable: ${passableInfo}]`;

      let dashInfo = "<Dash>";
      if ($gameMap.isDashDisabled()) {
        dashInfo = "\\c[18]<Dash>\\c[0]";
      } else if ($gamePlayer.isDashing() && $gamePlayer.isMoving()) {
        dashInfo = "\\c[9]<Dash>\\c[0]";
      }

      const regionId = $gameMap.regionId(playerX, playerY);
      const frontRegionId = $gameMap.regionId(frontX, frontY);
      
      const allRegions = [];
      for (let x = 0; x < mapWidth; x++) {
        for (let y = 0; y < mapHeight; y++) {
          const region = $gameMap.regionId(x, y);
          if (region !== 0 && !allRegions.includes(region)) {
            allRegions.push(region);
          }
        }
      }

      const steps = $gameParty.steps();
      const saveCount = DataManager.savefileInfo() ? DataManager.savefileInfo().length : 0;
      const battleCount = $gameSystem.battleCount();

      let tileInfo = '';
      if (isBush) tileInfo += `\\c[18]<Bush>\\c[0] `;
      else if (frontIsBush) tileInfo += `<Bush> `;
      if (isCounter) tileInfo += `\\c[18]<Counter>\\c[0] `;
      else if (frontIsCounter) tileInfo += `<Counter> `;
      if (isLadder) tileInfo += `\\c[18]<Ladder>\\c[0] `;
      else if (frontIsLadder) tileInfo += `<Ladder> `;
      if (isDamageFloor) tileInfo += `\\c[18]<DamageFloor>\\c[0] `;
      else if (frontIsDamageFloor) tileInfo += `<DamageFloor> `;

      const airship = $gameMap.airship();
      const boat = $gameMap.boat();
      const ship = $gameMap.ship();

      const airshipInfo = airship ? formatVehicleInfo("Airship", airship, mapId, playerX, playerY, frontX, frontY) : "\\c[18]Airship\\c[0]: [No Exist]";
      const boatInfo = boat ? formatVehicleInfo("Boat", boat, mapId, playerX, playerY, frontX, frontY) : "\\c[18]Boat\\c[0]: [No Exist]";
      const shipInfo = ship ? formatVehicleInfo("Ship", ship, mapId, playerX, playerY, frontX, frontY) : "\\c[18]Ship\\c[0]: [No Exist]";

      let battleSystemInfo;
      if ($dataSystem.optBattleScene) {
        battleSystemInfo = "SV - Default Turn Battle";
      } else {
        battleSystemInfo = "FV - Time Progress Battle(Active)";
      }

      const encounterStep = $gameMap.encounterStep();
      const nextEncounterSteps = $gamePlayer._encounterCount;

      if (!encounterListCache.length) {
        encounterListCache = $gameMap.encounterList().map((encounter, index) => {
          const troopName = $dataTroops[encounter.troopId] ? $dataTroops[encounter.troopId].name : "Unknown";
          return {
            index,
            troopName,
            weight: encounter.weight,
            regionSet: encounter.regionSet
          };
        });
      }

      let encounterInfo = `EncounterList: [${encounterListCache.length}] NextEncounterStep: [${nextEncounterSteps < 10 ? `\\c[18]${nextEncounterSteps}\\c[0]` : nextEncounterSteps}]\n`;
      encounterListCache.forEach(encounter => {
        const regionSet = encounter.regionSet.map(region => {
          if (region === frontRegionId) return `\\c[18]${region}\\c[0]`;
          if (region === regionId) return `\\c[9]${region}\\c[0]`;
          return region;
        }).join(", ");
        encounterInfo += `${encounter.index}: {[${encounter.troopName}], weight: ${encounter.weight}, regionSet: [${regionSet}]}\n`;
      });

      let allRegionsInfo = allRegions.map(region => {
        if (region === frontRegionId) return `\\c[18]${region}\\c[0]`;
        if (region === regionId) return `\\c[9]${region}\\c[0]`;
        return region;
      }).join(", ");

      let encounterStepInfo = encounterStep < 10 ? `\\c[18]${encounterStep}\\c[0]` : `${encounterStep}`;

      let info = `ID: ${mapId} Name: [${mapName}] Width: [${mapWidth}] Height: [${mapHeight}]\n`;
      info += `X: [${playerX}] Y: [${playerY}] Dir: [${playerDir}] DisX: [${displayX}] DisY: [${displayY}]\n`;
      info += `TileSet: [${tilesetId}] Name: [${tilesetName}] <${tilesetMode}>\n`;
      info += `BGM: [${bgm}] BGS: [${bgs}] BB: [${battleback}]\n`;
      info += `${tileInfo}${passableInfo} ${dashInfo} Region: [${allRegionsInfo}]\n`;
      info += `Step: [${steps}] SaveTime: [${saveCount}] BattleTime: [${battleCount}]\n`;
      info += `${airshipInfo} ${boatInfo} ${shipInfo}\n`;
      info += "◎Battle\n";
      info += `BattleSystem: [${battleSystemInfo}] EncounterStep: [${encounterStepInfo}]\n`;
      info += encounterInfo;

      this.drawTextEx(info, 0, 0);
      return info;
    }

    adjustWindowSize(info) {
      const lines = info.split('\n');
      const maxLineWidth = lines.reduce((maxWidth, line) => {
        const lineWidth = this.textWidth(line);
        return lineWidth > maxWidth ? lineWidth : maxWidth;
      }, 0);
      const textHeight = lines.length * this.lineHeight();

      this.width = maxLineWidth + this.padding * 2;
      this.height = textHeight + this.padding * 2;
      this.x = 0;  // 画面左に配置
      this.y = yOffset;
    }

    textWidth(text) {
      return this.contents.measureTextWidth(text);
    }
  }

  function formatVehicleInfo(vehicleType, vehicle, currentMapId, playerX, playerY, frontX, frontY) {
    const mapId = vehicle._mapId;
    const x = vehicle.x;
    const y = vehicle.y;
    const isSameMap = mapId === currentMapId;
    const isPlayerNear = (x === playerX && y === playerY) && isSameMap;
    const isInFront = (x === frontX && y === frontY) && isSameMap;
    const colorCodeMap = isSameMap ? "\\c[18]" : "\\c[0]";
    const colorCodeVehicle = isPlayerNear ? "\\c[9]" : isInFront ? "\\c[18]" : "\\c[0]";
    const vehiclePosition = `[${mapId}, ${x}, ${y}]`;
    return `${colorCodeVehicle}${vehicleType}\\c[0]: ${vehiclePosition}`;
  }

  const _Scene_Map_createAllWindows = Scene_Map.prototype.createAllWindows;
  Scene_Map.prototype.createAllWindows = function() {
    _Scene_Map_createAllWindows.call(this);
    const rect = new Rectangle(0, yOffset, Graphics.width, Graphics.height);
    this._debugInfoWindow = new Window_DebugInfo(rect);
    this.addChild(this._debugInfoWindow);
  };

  const _Game_Map_setup = Game_Map.prototype.setup;
  Game_Map.prototype.setup = function(mapId) {
    _Game_Map_setup.call(this, mapId);
    encounterListCache = []; // マップが変更されたときにキャッシュをリセット
  };

})();
