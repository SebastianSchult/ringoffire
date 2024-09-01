import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; // Import MatDialog hier hinzufügen
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [
    CommonModule,
    PlayerComponent,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    GameInfoComponent,
  ],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'], // 'styleUrls' statt 'styleUrl' für mehrere SCSS-Dateien
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;

  // Injizieren Sie MatDialog in den Konstruktor
  constructor(private dialog: MatDialog) {
    this.game = new Game();
  }

  ngOnInit(): void {
    this.newGame();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {});

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
    });
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() ?? '';
      this.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);

        this.pickCardAnimation = false;
      }, 1000);
    }
  }
}
