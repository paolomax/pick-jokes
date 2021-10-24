import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/models/joke';
import { DataServiceService } from 'src/app/shared/data-service.service';

@Component({
  selector: 'pjk-current-joke',
  templateUrl: './current-joke.component.html',
  styleUrls: ['./current-joke.component.scss'],
})
export class CurrentJokeComponent implements OnInit {
  currentJoke : IJoke = {
    joke: '',
    liked: true
  }

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    setInterval(
      () =>
        this.dataService.getJoke().subscribe((joke) => {
          if (joke.type === 'single')
            this.currentJoke!.joke = joke.joke as string;
          else {
            this.currentJoke!.joke = ((joke.setup as string) + ' ' +
              joke.delivery) as string;
          }
          console.log(this.currentJoke?.joke);
        }),
      5000
    );
  }
}
