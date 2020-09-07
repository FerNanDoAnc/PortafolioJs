import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(public el:ElementRef) {
    
   }
   ngOnInit() {
    var element=this.el.nativeElement;
        element.style.color="orange";
        element.style.padding="20px";
        element.style.marginTop="15px";
        
        element.innerHTML=element.innerText.replace("envianos","puedes enviarnos");
   }
}
 