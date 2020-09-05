import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number; //Compart informacion del padre al hijo:::para la anchura de la imagen,viene el padre
  @Input('etiquetas') captions: boolean;  //vienen del html dl padre en este caso le cambiamos el nomnbre
  @Output() conseguirAutor=new EventEmitter();//Generamos un evento para generar un metodo q sera usado en el padre
  public autor: any;  //se pasara al padre

  constructor() { 
    this.autor ={
      nombre:"Fernando A",
      linkedin:"https://www.linkedin.com/in/fernando-ancajima-85516b164/",
      github:"https://github.com/FerNanDoAnc?tab=repositories"
    };
  }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","gray")
                 .css("height","50px");
    });

    //llamamos al bxslider del jquery
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    }); 
    //lanzador de evento
    //this.conseguirAutor.emit(this.autor);
  }
  //lanzador que emita el evento emit
  lanzar(event){
    this.conseguirAutor.emit(this.autor);

  }

}
