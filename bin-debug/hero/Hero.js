var heroConfig = [
    { id: "hero_0", name: "A", attack: 12, strength: 15, agility: 12, intelligence: 10, endurance: 12 },
    { id: "hero_1", name: "B", attack: 15, strength: 10, agility: 10, intelligence: 40, endurance: 7 }
];
var HeroProperty = (function () {
    function HeroProperty(id, name, attack_Grow, strength_Grow, agility_Grow, intelligence_Grow, endurance_Grow) {
        this.configId = "";
        this.name = "";
        this.level = 1;
        this.attack_Grow = 0;
        this.strength_Grow = 0;
        this.agility_Grow = 0;
        this.intelligence_Grow = 0;
        this.endurance_Grow = 0;
        this.configId = id;
        this.name = name;
        this.attack_Grow = attack_Grow;
        this.strength_Grow = strength_Grow;
        this.agility_Grow = agility_Grow;
        this.intelligence_Grow = intelligence_Grow;
        this.endurance_Grow = endurance_Grow;
    }
    var d = __define,c=HeroProperty,p=c.prototype;
    p.levelup = function () {
        this.level++;
    };
    d(p, "basic_Attack"
        ,function () {
            return this.level * this.attack_Grow;
        }
    );
    d(p, "basic_Strength"
        ,function () {
            return this.level * this.strength_Grow;
        }
    );
    d(p, "basic_Agility"
        ,function () {
            return this.level * this.agility_Grow;
        }
    );
    d(p, "basic_Intelligence"
        ,function () {
            return this.level * this.intelligence_Grow;
        }
    );
    d(p, "basic_Endurance"
        ,function () {
            return this.level * this.endurance_Grow;
        }
    );
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return HeroProperty;
}());
egret.registerClass(HeroProperty,'HeroProperty');
var Hero = (function () {
    function Hero(type) {
        this.dirtyFlag = true;
        this.isInTeam = false;
        this.equipments = [];
        this.property = new HeroProperty(heroConfig[type].id, heroConfig[type].name, heroConfig[type].attack, heroConfig[type].strength, heroConfig[type].agility, heroConfig[type].intelligence, heroConfig[type].endurance);
    }
    var d = __define,c=Hero,p=c.prototype;
    p.setInTeam = function (status) {
        this.isInTeam = status;
    };
    p.equip = function (equipment) {
        this.equipments.push(equipment);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.fightPower;
            });
            result += this.property.fightPower;
            return result;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.attack;
            });
            result += this.property.basic_Attack;
            return result;
        }
    );
    d(p, "strength"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.strength;
            });
            result += this.property.basic_Strength;
            return result;
        }
    );
    d(p, "agility"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.agility;
            });
            result += this.property.basic_Agility;
            return result;
        }
    );
    d(p, "intelligence"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.intelligence;
            });
            result += this.property.basic_Intelligence;
            return result;
        }
    );
    d(p, "endurance"
        ,function () {
            var result = 0;
            this.equipments.forEach(function (equipment) {
                result += equipment.endurance;
            });
            result += this.property.basic_Endurance;
            return result;
        }
    );
    d(p, "maxHp"
        ,function () {
            return this.endurance * 50;
        }
    );
    d(p, "maxMp"
        ,function () {
            return this.intelligence * 40;
        }
    );
    return Hero;
}());
egret.registerClass(Hero,'Hero');
//# sourceMappingURL=Hero.js.map