import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { CONSTANTS } from '../constants';
import { SnackBarComponent } from './snack-bar.component';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  callSnackBar(text: string): void {
    const snackBarRef: MatSnackBarRef<SnackBarComponent> = this.snackBar.openFromComponent(SnackBarComponent, {
      data: text,
      duration: CONSTANTS.DURATION_IN_SECONDS * 500,
    });

    const snackBarRefSubscriber: Subscription = snackBarRef.afterDismissed().subscribe(() => {
      snackBarRefSubscriber.unsubscribe();
      window.location.reload();
    })
  }
}
