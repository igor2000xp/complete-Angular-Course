import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css']
})
export class AppComponent implements OnInit {
  artist: string = 'Hendrix';
  show: boolean = true;
  showb: boolean = false;

  coffees:{ style: string, available:string }[] = [
    { style:'Flat white', available: 'yes' },
    { style:'Esperesso', available: 'no' },
    { style:'Capuccino', available: 'yes' },
    { style:'Mochaccino', available: 'no' },
  ]

  items = [
    'yes',
    'no',
    'not sure',
    'maybe'
  ]

  // list = [
  //   { position:1},
  //   { position:2},
  //   { position:3}
  // ]




  styles = {
    'font-size':'20px',
    'color':'pink'
  }

  classes = {
    'class-name1':true,
    'class-name2':true
  }

  constructor(){

  }

  getColor(){
    return 'yellow';
  }

  changeArtist(){
    this.artist = 'Santana';
  }

  ngOnInit(){
    // setTimeout(()=>{
    //   this.show = true;
    // }, 3000)
  }


}

