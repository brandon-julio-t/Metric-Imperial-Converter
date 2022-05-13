class GetNumberInteractor {
  constructor(input) {
    this.input = input;
  }

  execute() {
    if (!this.input) return 1;
    if (typeof this.input === 'number') return this.input;

    const isFraction = this.input.includes('/');
    if (isFraction) {
      const split = this.input.split('/');
      
      if (split.length !== 2) {
        throw new Error('invalid number');
      }

      const [left, right] = split.map(Number);
      return left / right;
    }

    return Number(this.input);
  }
}

module.exports = GetNumberInteractor;