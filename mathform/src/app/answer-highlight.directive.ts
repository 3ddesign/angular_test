import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAnswerHighlight]'
})
export class AnswerHighlightDirective implements OnInit {

  constructor(private el: ElementRef, private controlName: NgControl) { }

  ngOnInit() {
    console.log(this.controlName.control.parent);
  }

}
