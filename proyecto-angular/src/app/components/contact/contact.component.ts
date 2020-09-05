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
  public captions: boolean;
  public autor: any;

  constructor() { 
    this.captions=true;
  }

  ngOnInit(): void {
  }
  cargarSlider(){
      this.anchuraToSlider=false;
      setTimeout(() =>{
        this.anchuraToSlider=this.widthSlider;
      },0.1);
  }
  resetearSlider(){
    this.anchuraToSlider=false;
  }
  getAutor(event){
    this.autor=event; //guradar los datos del evento en el autor
  }
}
