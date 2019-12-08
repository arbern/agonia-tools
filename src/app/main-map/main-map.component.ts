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
   // 24 px przesuniecia w poziomie, jedno pole to 8px
   // jest 4 krotnie pomniejszony 2 px to 8px
   this.eo = - event.offsetX+6+40;
   this.ew = element.width
   this.eoy = - event.offsetY+40;
   this.eh = element.height
   this.background_position_x = ''+this.eo *8 +'px';
   this.background_position_y = ''+this.eoy* 8 +'px';
   
 // alert(" eoy:"+eoy+" eh:"+eh);
  }

}
