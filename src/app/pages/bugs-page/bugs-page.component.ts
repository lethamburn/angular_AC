import { FetchService } from 'src/app/shared/services/fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bugs-page',
  templateUrl: './bugs-page.component.html',
  styleUrls: ['./bugs-page.component.scss'],
})
export class BugsPageComponent implements OnInit {
  bugs: any[] = [];

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getBugs().subscribe((bugsData: any) => {
      console.log(bugsData);
      this.bugs = bugsData;
    });
  }
}
