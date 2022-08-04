import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {


  formCars: any = FormGroup;
  post: any;

  constructor(public authService: AuthService,
    public router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.formGroup = new FormGroup({
    //   'email': new FormControl(null, [Validators.required, Validators.email])
    // });
    this.createFormCars();
  }

  createFormCars(): void {
    this.formCars = this.formBuilder.group({
      brand: ['', Validators.required],
      model: '',
      km: '',
      year: '',
      color: '',
    });
  }

  onSubmit(post: any) {
    console.log('post', this.post = post);
  }

  redirectInfo() {
    this.router.navigate(['dashboard']);
  }

}
