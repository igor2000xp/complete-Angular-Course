import { Directive, Input, OnInit,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSimpleStr1]'
})
export class SimpleStr1Directive implements OnInit{
  //@Input() a:bppSimpleStr1oolean; // THE VALUE
  @Input() set appSimpleStr1(value: boolean){
    if(value){
      this.viewContainerRew.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRew.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRew: ViewContainerRef
  ) { }

  ngOnInit(){
    // if(this.appSimpleStr1){
    //   this.viewContainerRew.createEmbeddedView(this.templateRef);
    // } else {
    //   this.viewContainerRew.clear();
    // }
  }

}
