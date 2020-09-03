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

  constructor() { }

  ngOnInit(): void {
    $("#logo").click(function(e){
      e.preventDefault();
      $("header").css("background","yellow")
                 .css("height","50px");
    });
  }

}
