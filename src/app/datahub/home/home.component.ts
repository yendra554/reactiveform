import { Component, OnInit  } from '@angular/core';
import { Data } from '../data';

import {
	NgbCalendar,
	NgbDate,
	NgbDatepickerModule,
	NgbDateStruct,
	NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  street : string | undefined
   allData : any[]=[];
   page: number = 1;
   count: number = 0;
   tableSize: number = 5;
   tableSizes: any = [];
   collectionSize: any =[]
  toDate: any;
  //  fontend =[
  //  {
  //   name: "angular",
  //   details: {
  //     type: "framework",
  //     version: {
  //       current: 8
  //     }
  //   }
    
  //  },
  //  {
  //   name: "angular1",
  //   details: {
  //     type: "frameworka",
  //     version: {
  //       current: 9
  //     }
  //   }
    
  //  }

  //  ]
  
  constructor( private ds: DataService) { }

  ngOnInit(): void {
    this.get();
   
  }


  get(){
    this.ds.getData().subscribe((res) =>{
      this.allData = res
      //console.log(this.allData);
    })

  }
  onDelete(id: number) {
    this.ds.deletePost(id).subscribe(() => {
      this.get();
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.get();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.get();
  }

 
}
