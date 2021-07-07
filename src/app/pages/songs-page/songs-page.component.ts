import { FetchService } from 'src/app/shared/services/fetch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs-page',
  templateUrl: './songs-page.component.html',
  styleUrls: ['./songs-page.component.scss'],
})
export class SongsPageComponent implements OnInit {
  songs: any[] = [];
  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getSongs().subscribe((songsData: any) => {
      console.log(songsData);
      this.songs = songsData;
    });
  }
}
