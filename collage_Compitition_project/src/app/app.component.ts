import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from './pages/services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'collage_Compitition_project';

  userservice = inject(UserService)
  router = inject(Router)

  onLogoff(){
    localStorage.removeItem("studentId");
    this.userservice.loggedUserId ='';
    this.router.navigateByUrl("/login");
  }

   


}
