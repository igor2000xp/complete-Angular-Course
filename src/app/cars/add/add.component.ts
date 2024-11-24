import {
  Component,
  OnInit,
  EventEmitter,
  Output ,
  Input,
  ContentChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit , AfterContentInit{
  // name: string;
  // model: string;
  // color: string;
  // @Input() getTheDiv:HTMLElement;
  @ContentChild('contentApp',{ static:true }) contentDiv:ElementRef;
  @Output() setTitle = new EventEmitter<{title:string}>();
  @Output('cSub') carSubmitted = new EventEmitter<{ name: string, model: string, color: string}>();
  userData:{ name: string, model: string, color: string}= {
    name:'',
    model:'',
    color:'',
  }

  onSubmitCar(ref){
    this.carSubmitted.emit(this.userData);
    // console.log(ref.value)
  }

  constructor() { }

  ngOnInit() {
    this.setTitle.emit({title:'The super cars'});
    // console.log(this.getTheDiv)\

  }

  ngAfterContentInit(){
    // console.log(this.contentDiv.nativeElement)
  }





  // alertOnClick(event: MouseEvent ) {
  //   console.log(event);
  //   alert(`The user clicked me on x:${event.clientX} and y:${event.clientY}` );
  // }

  // onMouserEnter() {
  //   this.status = 'Enter';
  // }

  // onMouseLeave() {
  //   this.status = 'Leave';
  // }



}
