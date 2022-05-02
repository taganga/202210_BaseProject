import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})

export class CafeListComponent implements OnInit {


  totalTipoCafeArabico:number=0;
  totalTipoCafeBlend:number=0;
  logoCafe:string="assets/cafebanner.PNG";
  cafes: Array<Cafe> = [];
  constructor(private cafeService: CafeService) { }


  getTipoCafe(): void {
    this.cafeService.getTipoCafe().subscribe((cafes) => {
      this.cafes = cafes;
      this.totalTipoCafeBlend=cafes.filter((cafe) => cafe.tipo === "Blend").length;//cafes.filter(item => item.nombre.toString().toUpperCase() === 'Blend'.toUpperCase()).length;
      this.totalTipoCafeArabico=cafes.filter(t=>t.tipo ==='Café de Origen').length;
    });

  }

  ngOnInit() {

    this.getTipoCafe();
  }

}



