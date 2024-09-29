import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonMenu, IonMenuButton, IonList, IonItem, IonText, IonInput, IonIcon } from '@ionic/angular/standalone'; // Agregar IonIcon
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonButton,
    IonMenu,
    IonMenuButton,
    IonList,
    IonItem,
    IonText,
    IonInput,
    IonIcon,  
    RouterModule
  ],
})
export class HomePage {
  constructor() {}
}
