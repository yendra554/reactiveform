import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dataform: Data =  {
    id: 0,
    name: '',
    mobile: '',
    street: '',
    suite: '',
    city: '',
    Zipcode: '',
    lat: '',
    lng: '',
    website: '',
    cname: '',
    catchPhrase: '',
    bs: '',
    location: '',
    address: '',
    geo: '',
    company: ''
  }
  constructor(private ds: DataService, private router: Router, private ActivatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRouter.paramMap.subscribe((param) =>{
      var id = Number(param.get('id'));
      this.getDataById(id);
    })
  }

  getDataById(id:number){
  this.ds.getDataById(id).subscribe((data) =>{
     this.dataform= data
  })
  }

  updateformdata(){
    this.ds.UpdateData(this.dataform).subscribe({next:(data) =>{
      this.router.navigate(["/datahub/home"])
    },
    error:(err) =>{
             console.log(err);
    }})

   
  }

}
