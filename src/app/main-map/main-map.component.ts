import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.css']
})
export class MainMapComponent implements OnInit {

  zurl="assets/img/Mapa_demo_2_11x60.png";
  pos="50% 50%";
  background_position_x = '50%';
  background_position_y = '50%';

  eo : number = 0;
  ew : number = 0;
  eoy : number = 0;
  eh : number = 0;

   backgroundUrl="assets/img/Agonia.Grid.png"
  
  constructor() { }

  ngOnInit() {
  }

 public myfunction(event : any){
   let element = event.target;
   this.eo = - event.offsetX+10;
   this.ew = element.width
   this.eoy = - event.offsetY+10;
   this.eh = element.height
   this.background_position_x = ''+this.eo *7 +'px';
   this.background_position_y = ''+this.eoy* 7 +'px';
   
 // alert(" eoy:"+eoy+" eh:"+eh);
  }

}
