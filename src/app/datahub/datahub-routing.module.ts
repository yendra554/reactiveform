import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path:'datahub/home' , component: HomeComponent},
  { path:'datahub/create' , component: CreateComponent},
  { path:'datahub/edit/:id' , component: EditComponent},
  { path:'datahub/about' , component: AboutComponent},
  { path:'datahub/contact' , component: ContactComponent},
  { path:'datahub/resume' , component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatahubRoutingModule { }
