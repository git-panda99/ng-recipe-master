import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthGuard } from 'src/app/auth/shared/guard/auth.guard';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit{
  @Output() closeSidenav = new EventEmitter<void>();

  constructor(private authService: AuthService, public authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.authService.SignOut();
  }

}
