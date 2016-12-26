var weapenConfig = [
    { id: "weapon_0", name: "SmallSword", attack: 100, strength: 110, agility: 120, intelligence: 130, endurance: 140 },
    { id: "weapon_1", name: "BigSword", attack: 200, strength: 210, agility: 220, intelligence: 230, endurance: 240 }
];
var WeaponProperty = (function (_super) {
    __extends(WeaponProperty, _super);
    function WeaponProperty(id, name, attack, strength, agility, intelligence, endurance) {
        _super.call(this);
        this.type = equipmentType.WEAPON;
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
    var d = __define,c=WeaponProperty,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            var result = 0;
            result = this.basic_Attack + (this.basic_Strength + this.basic_Agility +
                this.basic_Intelligence + this.basic_Intelligence) * 0.5;
            return result;
        }
    );
    return WeaponProperty;
}(Property));
egret.registerClass(WeaponProperty,'WeaponProperty');
var WeaponCache = (function () {
    function WeaponCache() {
        var _this = this;
        this.dirtyFlag = true;
        this.attackCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_1 = desc.get;
                desc.get = function () {
                    return getter_1.apply(this);
                };
                return desc;
            }
        };
        this.fightpowerCache = function (target, propertyName, desc) {
            if (!_this.dirtyFlag) {
                var getter_2 = desc.get;
                desc.get = function () {
                    return getter_2.apply(this);
                };
                return desc;
            }
        };
    }
    var d = __define,c=WeaponCache,p=c.prototype;
    return WeaponCache;
}());
egret.registerClass(WeaponCache,'WeaponCache');
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(type) {
        _super.call(this);
        this.dirtyFlag = true;
        this.gems = [];
        this.property = new WeaponProperty(weapenConfig[type].id, weapenConfig[type].name, weapenConfig[type].attack, weapenConfig[type].strength, weapenConfig[type].agility, weapenConfig[type].intelligence, weapenConfig[type].endurance);
        this.cache = new WeaponCache();
    }
    var d = __define,c=Weapon,p=c.prototype;
    p.addGem = function (gem) {
        this.cache.dirtyFlag = true;
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
    return Weapon;
}(Equipment));
egret.registerClass(Weapon,'Weapon');
//# sourceMappingURL=Weapon.js.map