import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
selector : '[basicHighlightcolor]' //when you wrap [] it is automatically recongized as a attribute in selector without []
}
)
export class BasicHighlightDirective implements OnInit{

constructor( private elementRef : ElementRef){

}
//basically we are getting access to htmlelement<p> and changing the color
ngOnInit(){
this.elementRef.nativeElement.style.backgroundColor = 'green';
}
}
