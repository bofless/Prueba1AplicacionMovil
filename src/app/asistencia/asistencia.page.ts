import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButtons, IonButton, IonMenu, 
  IonMenuButton, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonDatetime, IonTextarea, IonSearchbar } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButtons, IonButton, IonMenu, IonMenuButton, 
    IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonDatetime, IonTextarea, IonSearchbar,
    RouterModule, CommonModule, FormsModule
  ]
})
export class AsistenciaPage implements OnInit {

  years: number[] = [];
  empleados = ['María González', 'Juan Pérez', 'Carlos Fernández'];
  filteredEmpleados = [...this.empleados];

  constructor() {}

  ngOnInit() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 2000; year--) {
      this.years.push(year);
    }
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredEmpleados = this.empleados.filter(empleado => empleado.toLowerCase().includes(query));
  }
}
