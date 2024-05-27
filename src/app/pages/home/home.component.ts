import { Component, ViewChild } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-home',
  standalone: true,
  imports:[RegisterComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(RegisterComponent) registerComponent!: RegisterComponent;

  openRegisterModal() {
    this.registerComponent.openModal();
  }
}
