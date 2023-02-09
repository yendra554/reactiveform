import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatahubRoutingModule } from './datahub-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { MatTableModule } from '@angular/material/table';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { NgxPaginationModule} from 'ngx-pagination';
import {  NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ResumeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    DatahubRoutingModule,
    MatTableModule ,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    NgxPaginationModule,
    NgbDatepickerModule
  ]
})
export class DatahubModule { }
