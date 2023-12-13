import {Routes} from '@angular/router';
import {LoginComponent} from "./features/auth/login/login.component";
import {RegisterComponent} from "./features/auth/register/register.component";
import {AuthGuard} from "./shared/guards/auth.guard";
import {HomeComponent} from "./features/home/home.component";

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
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    title: "Explore",
    path: "explore",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    title: "Profile",
    path: "profile",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    title: "Messages",
    path: "messages",
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];
