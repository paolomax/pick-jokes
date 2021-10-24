import { Component, OnInit } from '@angular/core';
import { IJoke } from 'src/app/models/joke';
import { DataServiceService } from 'src/app/shared/data-service.service';
import { take } from 'rxjs/operators'

@Component({
  selector: 'pjk-current-joke',
  templateUrl: './current-joke.component.html',
  styleUrls: ['./current-joke.component.scss'],
})
export class CurrentJokeComponent implements OnInit {
  currentJoke: IJoke = {
    joke: '',
    liked: true,
  };

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {

    //first iteration instantly
    let subscription = this.dataService.getJoke().pipe(take(1)).subscribe((joke) => {
      if (joke.type === 'single')
        this.currentJoke!.joke = joke.joke as string;
      else {
        this.currentJoke!.joke = ((joke.setup as string) +
          '\n' +
          joke.delivery) as string;
      }
    })

    setInterval(
      () =>
        this.dataService.getJoke().pipe(take(1)).subscribe((joke) => {
          if (joke.type === 'single')
            this.currentJoke!.joke = joke.joke as string;
          else {
            this.currentJoke!.joke = ((joke.setup as string) +
              '\n' +
              joke.delivery) as string;
          }
        }),
      10000
    );
  }
}
