import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  standalone: false, // Retained as per your requirement
  templateUrl: './delete-confirmation-dialog-component.component.html',
  styleUrls: ['./delete-confirmation-dialog-component.component.css']
})
export class DeleteConfirmationDialogComponent {

  constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  onConfirm(): void {
    // Close the dialog and return true
    this.dialogRef.close(true);
  }

  onCancel(): void {
    // Close the dialog and return false
    this.dialogRef.close(false);
  }
}
