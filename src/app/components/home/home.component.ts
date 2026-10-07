import { Component,OnInit ,inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit(): void {
    // Si no hay usuario logueado, lo mandamos al login de inmediato
    if (this.authService.currentUser === null) {
      this.router.navigate(['']);
    }
  }

}
