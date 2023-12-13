import {Routes} from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [{
  title: "Login",
  path: "login",
  component: LoginComponent
},
  {
    title: "Register",
    path: "register",
    component: RegisterComponent
  },
  {
    title: "Home",
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard]
  }
];
