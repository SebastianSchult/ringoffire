export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
  
    constructor() {
      for (let i = 1; i < 14; i++) {
        this.stack.push('ace_' + i);
        this.stack.push('clubs_' + i);
        this.stack.push('diamonds_' + i);
        this.stack.push('hearts_' + i);
      }
  
      this.shuffle(this.stack);
    }
  
    shuffle(array: string[]): void { // Typangabe für den Parameter hinzugefügt
      let currentIndex = array.length;
  
      // Solange noch Elemente zum Mischen übrig sind...
      while (currentIndex != 0) {
        // Wähle ein verbleibendes Element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // Und tausche es mit dem aktuellen Element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
    }
  }
  