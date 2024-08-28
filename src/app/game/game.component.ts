import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit():void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    this.currentCard = this.game.stack.pop();
    console.log('take card');
    console.log(this.currentCard);
    this.pickCardAnimation = true;
  }
  
}
