import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/models/joke';
import { DataServiceService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'pjk-liked-jokes',
  templateUrl: './liked-jokes.component.html',
  styleUrls: ['./liked-jokes.component.scss']
})
export class LikedJokesComponent implements OnInit {

  liked : IJoke[] = [];

  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getLiked().subscribe( data => this.liked = data)
  }

}
