import {
  Input,
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
  @Input() artist: string;
  intrument: string = 'Guitar';
  constructor() {
    console.log('Contructor !!!');
    setTimeout(()=>{
      this.intrument = 'Bass';
    },4000)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges !!!', changes)
  }

  ngOnInit() {
    console.log('ngOnInit !!!')
  }

  ngDoCheck() {
    console.log('ngDoCheck !!!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit !!!')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked !!!')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit !!!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked !!!')
  }

  ngOnDestroy(){
    console.log('DESTROY !!!')
  }

}
