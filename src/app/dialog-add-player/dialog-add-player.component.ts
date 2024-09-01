import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

export interface DialogData {
  animal: string;
}

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrls: ['./dialog-add-player.component.scss'],
})
export class DialogAddPlayerComponent {
  name: string = ''; // The property 'name' to store the entered name

  // Using Angular's inject function for dependency injection
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA); // Injecting dialog data passed to this component

  constructor() {
    // You can use this.data.animal or any other data passed to the dialog
    console.log('Received data:', this.data);
  }

  // Method to close the dialog without passing data
  onNoClick(): void {
    this.dialogRef.close();
  }

  // Method to add the player and pass the entered name back
  addPlayer(): void {
    if (this.name.trim()) {
      this.dialogRef.close(this.name); // Closes dialog and passes the name back to the parent component
    }
  }
}
