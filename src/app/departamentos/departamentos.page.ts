import { Component } from '@angular/core';
import {
  IonCheckbox, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonButtons, IonButton, IonMenu, IonMenuButton, IonList, IonItem, IonSearchbar
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons,
    IonButton, IonMenu, IonMenuButton, IonList, IonItem, RouterModule, CommonModule, FormsModule, IonCheckbox, IonGrid,
    IonRow, IonCol, IonSearchbar
  ]
})
export class DepartamentosPage {

  departamentos = [
    { nombre: 'Recursos Humanos', empleados: 25, gerente: 'Laura Pérez' },
    { nombre: 'Finanzas', empleados: 15, gerente: 'Carlos Rodríguez' },
    { nombre: 'Marketing', empleados: 30, gerente: 'María Gómez' },
    { nombre: 'Desarrollo de Software', empleados: 40, gerente: 'Juan Martínez' }
  ];

  departamentosFiltrados = [...this.departamentos];
  departamentosSeleccionados: any[] = [];

  constructor() {}

  buscarDepartamento(event: any) {
    const query = event.target.value.toLowerCase();
    this.departamentosFiltrados = this.departamentos.filter(departamento =>
      departamento.nombre.toLowerCase().includes(query)
    );
  }

  seleccionarDepartamento(event: any, departamento: any) {
    if (event.detail.checked) {
      this.departamentosSeleccionados.push(departamento);
    } else {
      this.departamentosSeleccionados = this.departamentosSeleccionados.filter(d => d !== departamento);
    }
    console.log('Departamentos seleccionados:', this.departamentosSeleccionados);
  }

  eliminarSeleccionados() {
    this.departamentos = this.departamentos.filter(departamento => !this.departamentosSeleccionados.includes(departamento));
    this.departamentosSeleccionados = [];
    this.departamentosFiltrados = [...this.departamentos];
    console.log('Departamentos restantes:', this.departamentos);
  }

  agregarDepartamento() {}

  editarSeleccionados() {}
}
