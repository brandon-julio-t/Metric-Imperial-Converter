class GetUnitInteractor {
  units = ['gal', 'L', 'mi', 'km', 'lbs', 'kg'];
  
  constructor(input) {
    this.input = input;
  }

  execute() {
    if (!this.input) throw new Error('invalid unit');
    
    const found = this.units.find(unit => {
      return unit.toLowerCase() === this.input.toLowerCase();
    });

    if (!found) throw new Error('invalid unit');
    
    return found;
  }
}

module.exports = GetUnitInteractor;
