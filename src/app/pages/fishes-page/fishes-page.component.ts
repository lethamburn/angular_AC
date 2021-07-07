import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/shared/services/fetch.service';

@Component({
  selector: 'app-fishes-page',
  templateUrl: './fishes-page.component.html',
  styleUrls: ['./fishes-page.component.scss'],
})
export class FishesPageComponent implements OnInit {
  fishes: any[] = [];

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getFishes().subscribe((fishesData: any) => {
      console.log(fishesData);
      this.fishes = fishesData;
    });
  }
}
