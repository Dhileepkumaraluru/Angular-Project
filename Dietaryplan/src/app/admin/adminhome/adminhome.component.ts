import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product.service';
import { AddproductComponent } from '../addproduct/addproduct.component';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  products: any;
  dataSource: any;
  edit = {
    id: '',
    name: '',
    quantity: '',
    proteins: '',
    dietaryfiber: '',
    fats: '',
    carbs: '',
    type: ''
  };
  displayedColumns: string[] = ['id', 'name', 'type', 'quantity', 'proteins', 'dietaryfiber', 'fats', 'carbs'];

  constructor(public dialog: MatDialog, public ps: ProductService) {}

  ngOnInit() {
    this.ps.getProducts().subscribe({
      next: (data: any) => {
        this.products = data;
        this.dataSource = new MatTableDataSource(this.products);
      },
      error: () => {
        this.products = [];
      }
    });
  }

  openDialog() {
    this.dialog.open(AddproductComponent);
  }
}
