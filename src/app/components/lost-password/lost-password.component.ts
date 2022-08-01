import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lost-password',
  templateUrl: './lost-password.component.html',
  styleUrls: ['./lost-password.component.css']
})
export class LostPasswordComponent implements OnInit {

  authService: AuthService;
  router: Router;

  passwordResetForm = new FormGroup({
    email: new FormControl('')
  })

  constructor(authService: AuthService, router: Router) {
    this.authService = authService;
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.resetPassword(this.passwordResetForm.get('email')?.value).subscribe(
      () => {
        this.router.navigate([''])
      },
      (err) => console.log(err),
      () => this.router.navigate([''])
    );
  }

}
