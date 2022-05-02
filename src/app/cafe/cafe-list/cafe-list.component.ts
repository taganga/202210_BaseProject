import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  cafes: Array<Cafe> = [];
  constructor(private cafeService: CafeService) { }

  getTipoCafe(): void {
    this.cafeService.getTipoCafe().subscribe((cafes) => {
      this.cafes = cafes;
    });
  }

  ngOnInit() {
    this.getTipoCafe();
  }

}



