import { Component, OnInit, Input} from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura: number; //para la anchura de la imagen,viene el padre
  @Input('etiquetas') captions: boolean;
  constructor() { 

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
  }

}
