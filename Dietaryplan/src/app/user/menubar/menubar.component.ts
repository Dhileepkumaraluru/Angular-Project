import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private router:Router,private ar:ActivatedRoute) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['home'],{relativeTo:this.ar})
  }
  dietplan(){
this.router.navigate(['Dietplan'],{relativeTo:this.ar})
  }
  create(){
    this.router.navigate(['Create'],{relativeTo:this.ar})
  }
  forum(){
    this.router.navigate(['Forum'],{relativeTo:this.ar})
  }
  Creatediet(){
    this.router.navigate(['Creatediet'],{relativeTo:this.ar})
  }
   logout() { this.router.navigate(['/login']); }

}
