class Scrabble {
  constructor(input) {
    this.input = input ? input.toUpperCase() : '';
  }

  score() {
    let score = 0;

    for (let i = 0; i < this.input.length; i++) {
      let character = this.input[i];

      switch (character) {
        case 'A':
        case 'E':
        case 'I':
        case 'O':
        case 'U':
        case 'L':
        case 'N':
        case 'R':
        case 'S':
        case 'T':
          score += 1;
          break;
        case 'D':
        case 'G':
          score += 2;
          break;
        case 'B':
        case 'C':
        case 'M':
        case 'P':
          score += 3;
          break;
        case 'F':
        case 'H':
        case 'V':
        case 'W':
        case 'Y':
          score += 4;
          break;
        case 'K':
          score += 5;
          break;
        case 'J':
        case 'X':
          score += 8;
          break;
        case 'Q':
        case 'Z':
          score += 10;
          break;
      }

      // THIS BELOW IS A BETTER VERSION
      // const characterValues = {
      //   'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      //   'D': 2, 'G': 2,
      //   'B': 3, 'C': 3, 'M': 3, 'P': 3,
      //   'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      //   'K': 5,
      //   'J': 8, 'X': 8,
      //   'Q': 10, 'Z': 10
      // }

      // for (let i = 0; i < this.word.legth; i++){
      //   const character = this.word[i];
      //   score += characterValues[character] || 0;
      // }
    }
    return score;
  }
}

export default Scrabble;

