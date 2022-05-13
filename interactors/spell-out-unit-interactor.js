class SpellOutUnitInteractor {
  unitSpellingMappings = {
    gal: 'gallons',
    L: 'liters',
    mi: 'miles',
    km: 'kilometers',
    lbs: 'pounds',
    kg: 'kilograms',
  };
  
  constructor(unit) {
    this.unit = unit;
  }

  execute() {
    return this.unitSpellingMappings[this.unit];
  }
}

module.exports = SpellOutUnitInteractor;
