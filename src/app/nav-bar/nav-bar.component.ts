import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  barra:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  click(){

    
  if(this.barra){
        this.barra=false;
  }else{
      this.barra=true;

  }

  }
}
