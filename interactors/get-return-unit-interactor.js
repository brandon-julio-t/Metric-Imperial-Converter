class GetReturnUnitInteractor {
  unitMappings = {
    gal: 'L',
    l: 'gal',
    mi: 'km',
    km: 'mi',
    lbs: 'kg',
    kg: 'lbs',
  };
  
  constructor(unit) {
    this.unit = unit;
  }

  execute() {
    return this.unitMappings[this.unit.toLowerCase()];
  }
}

module.exports = GetReturnUnitInteractor;
