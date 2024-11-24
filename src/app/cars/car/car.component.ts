import { Component, OnInit ,ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarComponent implements OnInit {
  // name: string = 'Ford';
  // model: string = 'Nova';
  // color: string = 'Black';
  @Input('carElements') carValues:{ name:string,model: string,color:string } ;

  constructor() {

  }

  getTheColor(color: string) {
    if ( color !== 'default') {
      this.carValues.color = color;
      return this.carValues.color;
    }
    return this.carValues.color = 'Black';
  }


  ngOnInit() {
  }

}
