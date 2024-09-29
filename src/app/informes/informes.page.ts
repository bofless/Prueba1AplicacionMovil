import { Component, OnInit } from '@angular/core';
import {IonHeader,
  IonToolbar,IonTitle,IonContent,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonButtons,IonButton,IonMenu,
  IonMenuButton,IonList,IonItem,IonLabel,IonSelect,IonSelectOption,
  IonInput,IonGrid,IonRow,IonCol,IonSearchbar 
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.page.html',
  styleUrls: ['./informes.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButtons,
    IonButton,
    IonMenu,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,            
    IonSelect,           
    IonSelectOption,     
    IonInput,            
    IonGrid,             
    IonRow,              
    IonCol,              
    IonSearchbar,        
    RouterModule,
    CommonModule,
    FormsModule
  ]
})
export class InformesPage implements OnInit {

  empleados = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María García' },
    { nombre: 'Carlos Fernández' }
  ];

  filteredEmpleados = [...this.empleados];

  constructor() {}

  ngOnInit() {}

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.filteredEmpleados = this.empleados.filter(empleado => empleado.nombre.toLowerCase().includes(query));
  }
}
