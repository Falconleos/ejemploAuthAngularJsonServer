import { CommonModule } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormBuilder,FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private route = inject(Router);

  loginForm: FormGroup =  this.fb.group({
    username: ['',[Validators.required]],
    password: ['',[Validators.required]]
  });

  errorMessage: string ='';

  onLogin(): void{
    if(this.loginForm.invalid){
      return;
    }

    if(this.loginForm.valid){
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      
      this.authService.login(username, password).subscribe({
        next: (users) => {
          if (users.length > 0) {
            this.authService.currentUser = users[0];
            console.log('Login exitoso:', users[0].name);
            this.route.navigate(['home']);
          } else {
            this.errorMessage = 'Usuario o contraseña incorrectos';
          }
        },
        error: (err) => {
          console.error('Error de conexión con el servidor', err);
          this.errorMessage = 'Ocurrió un error al intentar conectar con el servidor.';
        }
      });

    }
  }

}
