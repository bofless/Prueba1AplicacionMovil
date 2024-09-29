import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonMenu, IonMenuButton, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonGrid, IonRow, IonCol, IonCheckbox, IonChip } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButtons, IonButton, IonMenu, IonMenuButton, IonList, IonItem, IonLabel, IonSelect, IonSelectOption, IonInput, IonGrid, IonRow, IonCol, IonCheckbox, IonChip,
    RouterModule, CommonModule, FormsModule
  ]
})
export class TareasPage implements OnInit {

  tareas = [
    { nombre: 'Tarea 1', fechaLimite: '2024-09-30', completada: false },
    { nombre: 'Tarea 2', fechaLimite: '2024-10-05', completada: true }
  ];

  numeroInformes: number = 2;  // Inicializar la propiedad numeroInformes

  constructor() {}

  ngOnInit() {}

  // Método para eliminar una tarea
  eliminarTarea() {
    // Implementa aquí la lógica de eliminación
    this.tareas.pop();  // Como ejemplo, eliminamos la última tarea
  }

  // Método para agregar una tarea
  agregarTarea() {
    // Implementa aquí la lógica de agregar una nueva tarea
    const nuevaTarea = { nombre: 'Nueva Tarea', fechaLimite: '2024-12-31', completada: false };
    this.tareas.push(nuevaTarea);  // Como ejemplo, agregamos una nueva tarea
  }

  // Método para manejar la entrada de búsqueda (si fuera necesario)
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.tareas = this.tareas.filter(tarea => tarea.nombre.toLowerCase().includes(query));
  }
}
