import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formData = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    location: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
    suite: new FormControl(''),
    Zipcode: new FormControl(''),
    lat: new FormControl(''),
    lng: new FormControl(''),
    website: new FormControl(''),
    company: new FormControl(''),
    cname: new FormControl(''),
    catchPhrase: new FormControl(''),
    bs: new FormControl('')
  });
  
  constructor(private ds:DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
  
    this.ds.createData(this.formData.value).subscribe({next:(res) =>{
      this.router.navigate(["/datahub/home"]);
    },
    error:(err) =>{
      console.log(err);
    }
  })
  }

}
