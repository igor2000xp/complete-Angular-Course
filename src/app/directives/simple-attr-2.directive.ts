import { Directive,OnInit,ElementRef,Renderer2, RendererStyleFlags2, HostListener } from '@angular/core';

@Directive({
  selector: '[appSimpleAttr2]'
})
export class SimpleAttr2Directive implements OnInit {

  constructor(
    private el:ElementRef,
    private renderer:Renderer2
  ) { }

  @HostListener('click') onclick(){
   this.modifyIt();
  }

  @HostListener('mouseover') mouseover(eventData:Event){
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor','blue')
    console.log(event)
  }

  modifyIt(){
      /// STYLE
      const flags = RendererStyleFlags2.DashCase | RendererStyleFlags2.Important;
      this.renderer.setStyle(this.el.nativeElement,'color','red', flags);

      // CLASS
      this.renderer.addClass(this.el.nativeElement,'wild')

      // ADD A CHILD
      const div = this.renderer.createElement('div');
      const text = this.renderer.createText('- i am a child');

      this.renderer.appendChild(div, text);
      this.renderer.appendChild( this.el.nativeElement,div);

      // set attribute
      this.renderer.setAttribute(this.el.nativeElement,'aria-hidden','true')
  }

  ngOnInit(){


  }

}
