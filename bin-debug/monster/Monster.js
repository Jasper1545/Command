var monsterConfig = [
    { monsterId: "001", name: "monster1", x: 512, y: 256, bitMap: "player01_idle_down_png", monsterFightPosX: 512, monsterFightPosY: 320 }
];
var Monster = (function () {
    function Monster(monsterId, service) {
        this.__hasBeenCancelled = false;
        this.fullProcess = 10;
        this.currentProcess = 0;
        this.scenceService = service;
        this.monster = new egret.Bitmap();
        var x;
        var y;
        for (var i = 0; i < monsterConfig.length; i++) {
            if (monsterConfig[i].monsterId == monsterId) {
                this.monsterId = monsterId;
                x = monsterConfig[i].x;
                y = monsterConfig[i].y;
                this.monster.texture = RES.getRes(monsterConfig[i].bitMap);
                this.setMonsterPos(monsterConfig[i].x, monsterConfig[i].y);
                this.monsterFightPosX = monsterConfig[i].monsterFightPosX;
                this.monsterFightPosY = monsterConfig[i].monsterFightPosY;
            }
        }
    }
    var d = __define,c=Monster,p=c.prototype;
    p.setMonsterPos = function (x, y) {
        this.monster.x = x;
        this.monster.y = y;
    };
    Monster.setCurrentMonster = function (monster) {
        this._currrntMonstrt = monster;
    };
    Monster.getCurrentMonster = function () {
        return this._currrntMonstrt;
    };
    p.showMonster = function (stage) {
        stage.addChild(this.monster);
    };
    p.offShowMonster = function (stage) {
        stage.removeChild(this.monster);
    };
    p.startFight = function (callback) {
        this.callback = callback;
        console.log("战斗开始");
        this.fighting();
    };
    p.stopFight = function (callback) {
        this.callback = callback;
        console.log("取消战斗");
        this.__hasBeenCancelled = true;
    };
    p.fighting = function () {
        egret.setTimeout(this.checkProcess, this, 200);
    };
    p.checkProcess = function () {
        if (this.__hasBeenCancelled) {
            this.cancalFight();
        }
        else {
            this.currentProcess++;
            console.log("战斗进度：" + this.currentProcess + "/" + this.fullProcess);
            if (this.currentProcess == this.fullProcess) {
                this.fightEnd();
            }
            else {
                egret.setTimeout(this.checkProcess, this, 200);
            }
        }
    };
    p.fightEnd = function () {
        console.log("战斗结束");
        this.scenceService.notify(this.monsterId);
        this.currentProcess = 0;
        this.callback();
    };
    p.cancalFight = function () {
        console.log("战斗取消");
        this.__hasBeenCancelled = false;
        this.callback();
    };
    return Monster;
}());
egret.registerClass(Monster,'Monster');
//# sourceMappingURL=Monster.js.map