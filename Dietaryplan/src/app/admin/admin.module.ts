import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuComponent } from './menu/menu.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddresponseComponent } from './addresponse/addresponse.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ResponseboxComponent } from './addresponse/responsebox/responsebox.component';
import { ResponsepageComponent } from './addresponse/responsepage/responsepage.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';



@NgModule({
  declarations: [
    MenuComponent,
    AddproductComponent,
    AddresponseComponent,
    ResponseboxComponent,
    ResponsepageComponent,
    AdminhomeComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule

  ]
})
export class AdminModule { }
