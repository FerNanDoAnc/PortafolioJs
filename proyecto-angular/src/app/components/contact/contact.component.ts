import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider:number;
  public anchuraToSlider:any; //para hacer la condicion de la anchura

  constructor() { }

  ngOnInit(): void {
    
  }
  cargarSlider(){
      //this.anchuraToSlider=false;
      this.anchuraToSlider=this.widthSlider
  }

}
