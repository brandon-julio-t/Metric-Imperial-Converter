class ConvertInteractor {
  constructor(number, unit, conversions) {
    this.number = number;
    this.unit = unit;
    this.conversions = conversions;
  }

  execute() {
    return Number(
      (() => {
        const { galToL, lbsToKg, miToKm } = this.conversions;

        switch (this.unit) {
          case 'gal': return this.number * galToL;
          case 'L': return this.number / galToL;
          case 'lbs': return this.number * lbsToKg;
          case 'kg': return this.number / lbsToKg;
          case 'mi': return this.number * miToKm;
          case 'km': return this.number / miToKm;
        }
      })().toFixed(5)
    );
  }
}

module.exports = ConvertInteractor;
