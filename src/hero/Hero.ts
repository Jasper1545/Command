var heroConfig = [

	{id:"hero_0",name:"A",attack:12,strength:15,agility:12,intelligence:10,endurance:12},
	{id:"hero_1",name:"B",attack:15,strength:10,agility:10,intelligence:40,endurance:7}

]

class HeroProperty {

	configId:string = "";
	name:string = "";
	level:number = 1;

	attack_Grow:number = 0;
	strength_Grow:number = 0;
	agility_Grow:number = 0;
	intelligence_Grow:number = 0;
	endurance_Grow:number = 0;

	public constructor(id:string,name:string,attack_Grow:number,strength_Grow:number,agility_Grow:number,intelligence_Grow:number,endurance_Grow:number){
		this.configId = id;
		this.name = name;
		this.attack_Grow = attack_Grow;
		this.strength_Grow = strength_Grow;
		this.agility_Grow = agility_Grow;
		this.intelligence_Grow = intelligence_Grow;
		this.endurance_Grow = endurance_Grow;
		
	}

	public levelup():void {
		this.level++;
	}

	get basic_Attack():number {
		return this.level * this.attack_Grow;
	}

	get basic_Strength():number {
		return this.level * this.strength_Grow;
	}

	get basic_Agility():number {
		return this.level * this.agility_Grow;
	}

	get basic_Intelligence():number {
		return this.level * this.intelligence_Grow;
	}

	get basic_Endurance():number {
		return this.level * this.endurance_Grow;
	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}

}

class Hero {

	dirtyFlag:boolean = true;
	property:HeroProperty;
	isInTeam:boolean = false;
	equipments:Equipment[] = [];
    
	public constructor(type:number) {
		this.property = new HeroProperty(heroConfig[type].id,heroConfig[type].name,heroConfig[type].attack,heroConfig[type].strength,
									 heroConfig[type].agility,heroConfig[type].intelligence,
									 heroConfig[type].endurance);
	}

	public setInTeam(status:boolean):void {
		this.isInTeam = status;
	}

	public equip(equipment:Equipment):void {
		this.equipments.push(equipment);
	}

	get fightPower():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.fightPower;
		});
		result += this.property.fightPower;

		return result;
	}

	get attack():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.attack;
		});
		result += this.property.basic_Attack;

		return result;
	}

	get strength():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.strength;
		});
		result += this.property.basic_Strength;

		return result;
	}

	get agility():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.agility;
		});
		result += this.property.basic_Agility;

		return result;
	}

	get intelligence():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.intelligence;
		});
		result += this.property.basic_Intelligence;

		return result;
	}

	get endurance():number {
		var result:number = 0;
		this.equipments.forEach(equipment => {
			result += equipment.endurance;
		});
		result += this.property.basic_Endurance;

		return result;
	}

	get maxHp():number {
		return this.endurance * 50;
	}

	get maxMp():number {
		return this.intelligence * 40;
	}

}