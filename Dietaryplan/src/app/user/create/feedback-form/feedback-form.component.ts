import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  feedbackForm: any;
  types: string[] = ["Dietary Review"]

  constructor(private fb: FormBuilder,private fs: FeedbackService){
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      message: ['', [Validators.required,Validators.minLength(15)]],
      type: ['Dietary Review']
    });
  }

  saveFeedback(){
    var temp:any={
      id: Math.round(Math.random()*10000),
      name: this.feedbackForm.value.name,
      type: this.feedbackForm.value.type,
      message: this.feedbackForm.value.message
    }
    this.fs.postFeedback(temp).subscribe({
      next: data=>{
        alert('Your Feedback is saved')
        location.reload();
      },
      error: error=>alert('Not saved ---some Error')
    });
  }
}
