import {Component, inject} from '@angular/core';
import {ContainerComponent} from "../../../shared/components/container/container.component";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {ErrorResponse} from "../../../types/ErrorResponse";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    ContainerComponent,
    LogoComponent,
    CommonModule,
    RouterModule
  ],
  providers: [AuthService],
  styleUrl: '../auth.component.css'
})
export class LoginComponent {

  private service = inject(AuthService)
  loading;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router) {
    this.loading = false;
  }

  submitLogin() {
    const {username, password} = this.loginForm.value
    this.loading = true;
    return this.service.login(username ?? "", password ?? "").subscribe({
      error: ({error}: ErrorResponse) => {
        this.loading = false;
        this.loginForm.setErrors({customError: error.message})
        error.errors && error.errors.forEach((e) => {
          this.loginForm.get(e.property)?.setErrors({customError: Object.values(e.constraints)[0]});
        })
      },
      next: async () => {
        this.loading = false;
        await this.router.navigate(['/'])
      }
    })
  }
}
