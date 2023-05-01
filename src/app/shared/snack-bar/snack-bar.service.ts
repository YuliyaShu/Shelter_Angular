import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CONSTANTS } from '../constants';
import { SnackBarComponent } from './snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private snackBar: MatSnackBar) { }

  callSnackBar(text: string) {
    const snackBarRef = this.snackBar.openFromComponent(SnackBarComponent, {
      data: text,
      duration: CONSTANTS.DURATION_IN_SECONDS * 500,
    });

    const snackBarRefSubscriber = snackBarRef.afterDismissed().subscribe(() => {
      this.snackBar.dismiss();
      snackBarRefSubscriber.unsubscribe();
      window.location.reload();
    })
  }
}
