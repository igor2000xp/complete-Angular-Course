import { Component, OnInit, ViewEncapsulation, ViewChild,ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styles: [`
    h2 { color: red}

    .item {
      background: #f4f4f4;
      padding: 20px 0;
      margin-bottom: 10px;
    }

    .tag span {
      color:#00BCD4;
      font-weight: 700;
    }

  `],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent implements OnInit,AfterViewInit {
  contentValue: string = 'content value !!!!';
  @ViewChild('anotherDiv',{ static: true}) anotherDiv: ElementRef;
  @ViewChild('carComponent',{ static:true}) carComponent: Component;
  title: string = '';

  carValues:{ name:string,model: string,color:string }[] = [
    {name:'Ford',model:'Nova',color:'Blue'},
    {name:'Chevy',model:'Nova',color:'Red'},
    {name:'Nissan',model:'Tida',color:'Black'}
  ]


  carWasSubmitted(carData:{ name:string,model: string,color:string }){
    //console.log(carData)
  }

  getTitle(element: {title:string}){
    this.title = element.title
  }

  constructor() { }

  ngOnInit() {
   // console.log(this.anotherDiv.nativeElement)

  }

  ngAfterViewInit(){
    //console.log(this.carComponent.carValues)
  }

}
