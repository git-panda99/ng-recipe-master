import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/auth/shared/guard/auth.guard';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService, public authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.SignOut();
    this.isAuth = false;
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

}
