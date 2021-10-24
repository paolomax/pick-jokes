import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/models/joke';
import { DataServiceService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'pjk-disliked-jokes',
  templateUrl: './disliked-jokes.component.html',
  styleUrls: ['./disliked-jokes.component.scss']
})
export class DislikedJokesComponent implements OnInit {

  disliked : IJoke[] = [];

  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getDisliked().subscribe( data => this.disliked = data)
  }

  addLiked(j : string) {
    this.dataService.addLiked({joke: j});
  }
}
