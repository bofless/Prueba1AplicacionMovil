import { Component } from '@angular/core';  
import { MenuController } from '@ionic/angular';  
import { RouterModule } from '@angular/router';  
import { IonicModule } from '@ionic/angular';  

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html', 
  standalone: true,  
  imports: [
    RouterModule, 
    IonicModule,   
  ],
})
export class AppComponent {
  constructor(private menuCtrl: MenuController) {}

  closeMenu() {
    this.menuCtrl.close();  
  }
}
