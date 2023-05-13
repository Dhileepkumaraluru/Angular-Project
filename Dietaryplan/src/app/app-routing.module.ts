import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './user/home/details/details.component';
import { DietdetailsComponent } from './user/dietplan/dietdetails/dietdetails.component';
import { ForumresponseComponent } from './user/forum/forumresponse/forumresponse.component';
import { ResponsepageComponent } from './admin/addresponse/responsepage/responsepage.component';
import { CreatedietComponent } from './user/creatediet/creatediet.component';



const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"details/:id",component:DetailsComponent},
  {path:"user",
  loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  {path:"admin",loadChildren: 
  () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:"dietdetails/:id",component:DietdetailsComponent},
  {path:"forum/:id",component:ForumresponseComponent},
  {path:"post/:id",component:ForumresponseComponent},
  {path:"Addresponses/:id",component:ResponsepageComponent},
  {path:"Creatediet/:id",component:CreatedietComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
