import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  id: any;
  name: any;
  type: any;
  image: any;
  carbohydrates: any;
  proteins:any;
  carbs:any;
  dietaryfiber:any;
  fats:any;

  errors: string[] = [];

  constructor(private hs: ProductService) { }

  submit() {
    this.errors = [];

    if (this.name == undefined || this.name.length < 3) {
      this.errors.push("Name should be greater than 3 characters");
    }

    if (this.type == undefined) {
      this.errors.push("type is required");
    }

    if (this.image == undefined) {
      this.errors.push("image is required");
    }
    
    if (this.errors.length == 0) {
      let obj = {
        id: Math.round(Math.random() * 100000),
        name: this.name,
        type: this.type,
        image: this.image,
        carbohydrates: this.carbohydrates,
        proteins:this.proteins,
        carbs:this.carbs,
        dietaryfiber:this.dietaryfiber,
        fats:this.fats,
      };

      this.hs.postProducts(obj).subscribe({
        next: () => {
          alert("Successfully Added. Thank you.");
          this.name = "";
          this.type = "";
          this.image = "";
          this.carbohydrates = "";
          this.proteins="";
          this.carbs="";
          this.dietaryfiber="";
          this.fats="";
        },
        error: () => alert("There is a problem in adding this!")
      });
    }
  }
}
