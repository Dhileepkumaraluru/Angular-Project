import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailsService } from 'src/app/services/details.service';
@Component({
  selector: 'app-dietdetails',
  templateUrl: './dietdetails.component.html',
  styleUrls: ['./dietdetails.component.css']
})
export class DietdetailsComponent{

  id:any;
  d:any;
  constructor(private ds:DetailsService,private ar:ActivatedRoute) {
    this.ar.params.subscribe(

   {

        next: (params)=>{

         this.id =params['id']

         this.readData()

        },

        error: () => this.id = 0

      }

    )

 }

 readData(){




    this.ds.getDietById(this.id).subscribe({

       next: (data:any)=> this.d=data,

       error: ()=> this.d = {}

    })

 }




}
