import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';

export const routes: Routes = [
    {path:'',component:AuthComponent},
    {path:'home',component:HomeComponent},
    {path:'**',redirectTo:''}
];
