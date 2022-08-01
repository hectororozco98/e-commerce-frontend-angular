
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtToken } from 'src/app/models/jwtToken';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  jwtTokenService: JwtTokenService;
  router: Router;
  token: JwtToken = new JwtToken('');

  changePasswordForm = new FormGroup({
    password: new FormControl('')
  })

  constructor(jwtTokenService: JwtTokenService, router: Router, private route: ActivatedRoute) {
    this.jwtTokenService = jwtTokenService;
    this.router = router;
    // get the token when user navigates here

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // console.log(params); // { orderby: "price" }
        this.token = params['token'];
        console.log(this.token);

      }
      );
  }



  createChangePassword(): void {
    this.jwtTokenService.createChangePassword(this.token, this.changePasswordForm.get('password')?.value).subscribe(
      (result) => {
        console.log(result);
      }, (err) => console.log(err)
    );
  }

}
