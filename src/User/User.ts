class User {

	heros:Hero[] = [];
    herointeam:Hero[] = [];

	public constructor() {
	}

	public addHero(hero:Hero):void {
		this.heros.push(hero);
	}

	get heroInTeam():Hero[] {
		var heroInTeam:Hero[] = [];

        for(var i = 0; i < this.heros.length; i++) {
            if(this.heros[i].isInTeam) {
                heroInTeam.push(this.heros[i]);

            }
        }

        return heroInTeam;

	}

	get fightPower():number {

        var result = 0;

        var heros:Hero[] = this.heroInTeam;

        for(var i = 0; i < heros.length; i++) {
            result += heros[i].fightPower;

        }   

        return result;

    }

}