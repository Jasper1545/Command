var gemConfig = [
    { id: "gem_0", attack: 10, strength: 10, agility: 10, intelligence: 10, endurance: 10 },
    { id: "gem_1", attack: 20, strength: 20, agility: 20, intelligence: 20, endurance: 20 },
    { id: "gem_2", attack: 30, strength: 30, agility: 30, intelligence: 30, endurance: 30 }
];
var GemProperty = (function () {
    function GemProperty(id, attack, strength, agility, intelligence, endurance) {
        this.configId = "";
        this.basic_Attack = 0;
        this.basic_Strength = 0;
        this.basic_Agility = 0;
        this.basic_Intelligence = 0;
        this.basic_Endurance = 0;
        this.configId = id;
        this.basic_Attack = attack;
        this.basic_Strength = strength;
        this.basic_Agility = agility;
        this.basic_Intelligence = intelligence;
        this.basic_Endurance = endurance;
    }
    var d = __define,c=GemProperty,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return GemProperty;
}());
egret.registerClass(GemProperty,'GemProperty');
var Gem = (function () {
    function Gem(type) {
        this.property = new GemProperty(gemConfig[type].id, gemConfig[type].attack, gemConfig[type].strength, gemConfig[type].agility, gemConfig[type].intelligence, gemConfig[type].endurance);
    }
    var d = __define,c=Gem,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.property.fightPower;
            return result;
        }
    );
    d(p, "attack"
        ,function () {
            return this.property.basic_Attack;
        }
    );
    d(p, "strength"
        ,function () {
            return this.property.basic_Strength;
        }
    );
    d(p, "agility"
        ,function () {
            return this.property.basic_Agility;
        }
    );
    d(p, "intelligence"
        ,function () {
            return this.property.basic_Intelligence;
        }
    );
    d(p, "endurance"
        ,function () {
            return this.property.basic_Endurance;
        }
    );
    return Gem;
}());
egret.registerClass(Gem,'Gem');
//# sourceMappingURL=Gem.js.map