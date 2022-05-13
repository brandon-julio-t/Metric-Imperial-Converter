class InputNumberUnitSplitter {
  constructor(input) {
    this.input = input;
  }

  execute() {
    if (typeof this.input !== 'string') {
      return { number: this.input };
    }

    const numberRegex = /[0-9\.\/]/g;
    const unitRegex = /[a-z]/gi;

    const numberMatch = this.input.match(numberRegex) || [];
    const number = numberMatch.join('');

    const unitMatch = this.input.match(unitRegex) || [];
    const unit = unitMatch.join('');
    
    return { number, unit };
  }
}

module.exports = InputNumberUnitSplitter;
