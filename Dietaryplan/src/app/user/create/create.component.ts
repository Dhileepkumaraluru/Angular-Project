
import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { FeedbackService } from 'src/app/services/feedback.service';

import { FeedbackFormComponent } from './feedback-form/feedback-form.component';




@Component({

  selector: 'app-create',

  templateUrl: './create.component.html',

  styleUrls: ['./create.component.css']

})

export class CreateComponent {

  feedbacks:any

 

 

        constructor(private fs:FeedbackService, public dialog: MatDialog)  {

           this.fs.getFeedbacks().subscribe(

              {

                  next : (data:any)=> this.feedbacks =data

              }

           )

        }




        openDialog() {

          this.dialog.open(FeedbackFormComponent)

        }

}





