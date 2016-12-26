var monsterConfig = [

	{monsterId:"001",name:"monster1",x:512,y:256,bitMap:"player01_idle_down_png",monsterFightPosX:512,monsterFightPosY:320}

]

class Monster {

	public static _currrntMonstrt:Monster;
	callback:Function;
	__hasBeenCancelled:boolean = false;
	fullProcess:number = 10;
	currentProcess:number = 0;
	scenceService:SceneService;
	monster:egret.Bitmap;
	monsterId:string;
	monsterFightPosX:number;
	monsterFightPosY:number;

	public constructor(monsterId:string,service:SceneService) {
		this.scenceService = service;
		this.monster = new egret.Bitmap();
		var x:number;
		var y:number;

		for(var i=0;i<monsterConfig.length;i++) {
			if(monsterConfig[i].monsterId == monsterId) {
				this.monsterId = monsterId;
				x = monsterConfig[i].x;
				y = monsterConfig[i].y;
				this.monster.texture = RES.getRes(monsterConfig[i].bitMap);
				this.setMonsterPos(monsterConfig[i].x,monsterConfig[i].y);
				this.monsterFightPosX = monsterConfig[i].monsterFightPosX;
				this.monsterFightPosY = monsterConfig[i].monsterFightPosY;

			}
		}

	}

	public setMonsterPos(x:number,y:number) {
		this.monster.x = x;
		this.monster.y = y;
	}

	public static setCurrentMonster(monster:Monster) {
		this._currrntMonstrt = monster;
	}

	public static getCurrentMonster():Monster {
		return this._currrntMonstrt;
	}	

	public showMonster(stage:egret.DisplayObjectContainer) {
		stage.addChild(this.monster);

	}

	public offShowMonster(stage:egret.DisplayObjectContainer) {
		stage.removeChild(this.monster);
		
	}

	public startFight(callback:Function) {
		this.callback = callback;
		console.log("战斗开始");
		this.fighting();

	}

	public stopFight(callback:Function) {
		this.callback = callback;
		console.log("取消战斗");
		this.__hasBeenCancelled = true;
	}

	private fighting() {
		egret.setTimeout(this.checkProcess,this,200);
	}

	private checkProcess() {
		if(this.__hasBeenCancelled){
			this.cancalFight();

		}else {
			this.currentProcess++;
			console.log("战斗进度：" + this.currentProcess + "/" + this.fullProcess);

			if(this.currentProcess == this.fullProcess){
				this.fightEnd();
			}else {
				egret.setTimeout(this.checkProcess,this,200);
			}
		}
	}

	private fightEnd() {
		
		console.log("战斗结束");
		this.scenceService.notify(this.monsterId);
		this.currentProcess = 0;
		this.callback();
	}

	public cancalFight() {
		console.log("战斗取消");
		this.__hasBeenCancelled = false;
		this.callback();
	}

}