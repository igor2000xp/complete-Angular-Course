import { Directive, HostBinding, OnInit, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleAttr3]'
})
export class SimpleAttr3Directive implements OnInit {
  @HostBinding('style.color') elementColor:string;
  @Input() color:string;
  @Input() disabled:boolean;
  @Input() clickable:boolean;
  constructor() { }


  @HostListener('click') onclick(){
    if(this.clickable){
      window.alert('this is clickable!!')
    }
  }

  ngOnInit(){
    if(!this.disabled){
      this.elementColor = this.color
    }

  }
}
