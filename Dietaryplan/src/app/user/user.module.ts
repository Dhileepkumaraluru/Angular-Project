import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MenubarComponent } from './menubar/menubar.component';
import { MaterialModule } from '../material/material.module';
import { DietplanComponent } from './dietplan/dietplan.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { ItemsComponent } from './home/items/items.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TypefilterPipe } from '../pipes/typefilter.pipe';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './home/details/details.component';
import { DiettypeComponent } from './dietplan/diettype/diettype.component';
import { DietdetailsComponent } from './dietplan/dietdetails/dietdetails.component';
import { FormcardComponent } from './forum/formcard/formcard.component';
import { ForumresponseComponent } from './forum/forumresponse/forumresponse.component';
import { FeedbackBoxComponent } from './create/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './create/feedback-form/feedback-form.component';
import { CreatedietComponent } from './creatediet/creatediet.component';


@NgModule({
  declarations: [
    MenubarComponent,
    HomeComponent,
    DietplanComponent,
    CreateComponent,
    ForumComponent,
    ItemsComponent,
    TypefilterPipe,
    DetailsComponent,
    DiettypeComponent,
    DietdetailsComponent,
    FormcardComponent,
    ForumresponseComponent,
    FeedbackBoxComponent,
    FeedbackFormComponent,
    CreatedietComponent
    
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  
  ],
  exports:[
    HomeComponent,
    MenubarComponent,
    
  ]
})
export class UserModule { }
