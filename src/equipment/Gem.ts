var gemConfig = [

	{id:"gem_0",attack:10,strength:10,agility:10,intelligence:10,endurance:10},
	{id:"gem_1",attack:20,strength:20,agility:20,intelligence:20,endurance:20},
	{id:"gem_2",attack:30,strength:30,agility:30,intelligence:30,endurance:30}


]

class GemProperty {

	public configId:string = "";
	public basic_Attack:number = 0;
	public basic_Strength:number = 0;
	public basic_Agility:number = 0;
	public basic_Intelligence:number = 0;
	public basic_Endurance:number = 0;

	public constructor(id:string,attack:number,strength:number,agility:number,intelligence:number,endurance:number){
		
		this.configId = id;
		this.basic_Attack = attack;
		this.basic_Strength = strength;
		this.basic_Agility = agility;
		this.basic_Intelligence = intelligence;
		this.basic_Endurance = endurance;

	}

	get fightPower():number {

		var result = 0;

		result =  this.basic_Attack + (this.basic_Strength + this.basic_Agility + 
									   this.basic_Intelligence + this.basic_Intelligence) * 0.5;

		return result;

	}


}

class Gem {

	public property:GemProperty;

	public constructor(type:number) {

		this.property = new GemProperty(gemConfig[type].id,gemConfig[type].attack,gemConfig[type].strength,
									 gemConfig[type].agility,gemConfig[type].intelligence,
									 gemConfig[type].endurance);

	}

	get fightPower():number {

		var result = 0;

		result =  this.property.fightPower;

		return result;

	}

	get attack():number {
		return this.property.basic_Attack;
	}
	
	get strength():number {
		return this.property.basic_Strength;
	}

	get agility():number {
		return this.property.basic_Agility;
	}

	get intelligence():number {
		return this.property.basic_Intelligence;
	}

	get endurance():number {
		return this.property.basic_Endurance;
	}

}