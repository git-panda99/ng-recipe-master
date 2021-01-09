import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/shared/services/auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  
  isAdmin(): number{
    return this.authService.userData.email.localeCompare(new String("paula.ciorba@gmail.com"));
  }

}
