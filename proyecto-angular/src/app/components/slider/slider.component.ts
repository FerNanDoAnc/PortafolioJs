import { Component, OnInit } from '@angular/core';

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","yellow")
                 .css("height","50px");
    });

    //llamamos al bxslider del jquery
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: false,
      slideWidth: 400
    }); 
  }

}
