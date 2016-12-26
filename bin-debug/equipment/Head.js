var headConfig = [
    { id: "head_0", name: "SmallHead", attack: 100, strength: 110, agility: 120, intelligence: 130, endurance: 140 },
    { id: "head_1", name: "BigHead", attack: 200, strength: 210, agility: 220, intelligence: 230, endurance: 240 }
];
var HeadProperty = (function (_super) {
    __extends(HeadProperty, _super);
    function HeadProperty(id, name, attack, strength, agility, intelligence, endurance) {
        _super.call(this);
        this.type = equipmentType.HEAD;
        this.configId = "";
        this.name = "";
        this.basic_Attack = 0;
        this.basic_Strength = 0;
        this.basic_Agility = 0;
        this.basic_Intelligence = 0;
        this.basic_Endurance = 0;
        this.configId = id;
        this.name = name;
        this.basic_Attack = attack;
        this.basic_Strength = strength;
        this.basic_Agility = agility;
        this.basic_Intelligence = intelligence;
        this.basic_Endurance = endurance;
    }
    var d = __define,c=HeadProperty,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return HeadProperty;
}(Property));
egret.registerClass(HeadProperty,'HeadProperty');
var Head = (function (_super) {
    __extends(Head, _super);
    function Head(type) {
        _super.call(this);
        this.dirtyFlag = true;
        this.gems = [];
        this.property = new HeadProperty(headConfig[type].id, headConfig[type].name, headConfig[type].attack, headConfig[type].strength, headConfig[type].agility, headConfig[type].intelligence, headConfig[type].endurance);
    }
    var d = __define,c=Head,p=c.prototype;
    p.addGem = function (gem) {
        this.gems.push(gem);
    };
    d(p, "fightPower"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.fightPower;
            });
            result += this.property.fightPower;
            return result;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.attack;
            });
            result += this.property.basic_Attack;
            return result;
        }
    );
    d(p, "strength"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.strength;
            });
            result += this.property.basic_Strength;
            return result;
        }
    );
    d(p, "agility"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.agility;
            });
            result += this.property.basic_Agility;
            return result;
        }
    );
    d(p, "intelligence"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.intelligence;
            });
            result += this.property.basic_Intelligence;
            return result;
        }
    );
    d(p, "endurance"
        ,function () {
            var result = 0;
            this.gems.forEach(function (gem) {
                result += gem.endurance;
            });
            result += this.property.basic_Endurance;
            return result;
        }
    );
    return Head;
}(Equipment));
egret.registerClass(Head,'Head');
//# sourceMappingURL=Head.js.map