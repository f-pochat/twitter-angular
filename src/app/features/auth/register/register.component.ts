import {Component, inject} from '@angular/core';
import {ContainerComponent} from "../../../shared/components/container/container.component";
import {LogoComponent} from "../../../shared/components/logo/logo.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";
import {ErrorResponse} from "../../../types/ErrorResponse";
import {CommonModule} from "@angular/common";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
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
export class RegisterComponent {

  private service = inject(AuthService)
  loading;

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private router: Router) {
    this.loading = false;
  }

  submitRegister() {
    const {username, email, password} = this.registerForm.value
    this.loading = true;
    return this.service.register(username ?? "", email ?? "", password ?? "").subscribe({
      error: ({error}: ErrorResponse) => {
        this.loading = false;
        this.registerForm.setErrors({customError: error.message})
        error.errors && error.errors.forEach((e) => {
          this.registerForm.get(e.property)?.setErrors({customError: Object.values(e.constraints)[0]});
        })
      },
      next: async () => {
        this.loading = false;
        await this.router.navigate(['/'])
      }
    })
  }
}
