import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonMenuButton, IonList, IonItem, IonSearchbar, IonLabel, IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
  standalone: true,
  imports: [
    IonHeader,IonToolbar,IonTitle,IonContent,IonCard,IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButtons,
    IonButton,IonMenuButton,
    IonList,
    IonItem,
    IonSearchbar,
    IonLabel,IonIcon, RouterModule,CommonModule,FormsModule
  ]
})
export class EmpleadosPage implements OnInit {

  empleados = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María González' },
    { nombre: 'Carlos Fernández' }
  ];

  filteredEmpleados = [...this.empleados];
  empleadoSeleccionado: any;

  constructor() {}

  ngOnInit() {}

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredEmpleados = this.empleados.filter(empleado => empleado.nombre.toLowerCase().includes(query));
  }

  seleccionarEmpleado(empleado: any) {
    this.empleadoSeleccionado = empleado;
  }

  eliminarEmpleado(empleado: any) {
    this.empleados = this.empleados.filter(e => e !== empleado);
    this.filteredEmpleados = this.filteredEmpleados.filter(e => e !== empleado);
    if (this.empleadoSeleccionado === empleado) {
      this.empleadoSeleccionado = null;
    }
  }
}
