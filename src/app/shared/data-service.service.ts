import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IJoke } from '../models/joke';
import { IJokeGet } from '../models/jokeGet';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  liked: IJoke[] = [];
  disliked: IJoke[] = [];

  private likedSubject = new BehaviorSubject<IJoke[]>(this.liked);
  private dislikedSubject = new BehaviorSubject<IJoke[]>(this.disliked);

  constructor(private httpClient: HttpClient) {}

  addLiked(joke: IJoke) {
    //checks if not already present in both arrays
    this.disliked.forEach((element, index, arr) => {
      if (element.joke === joke.joke) arr.splice(index, 1);
    });

    if (!this.liked.find((el) => el.joke === joke.joke)) this.liked.push(joke);
  }

  addDisliked(joke: IJoke) {
    this.liked.forEach((element, index, arr) => {
      if (element.joke === joke.joke) arr.splice(index, 1);
    });
    //checks if not already present in the array
    if (!this.disliked.find((el) => el.joke === joke.joke))
      this.disliked.push(joke);
  }

  getLiked(): Observable<IJoke[]> {
    return this.likedSubject.asObservable();
  }

  getDisliked(): Observable<IJoke[]> {
    return this.dislikedSubject.asObservable();
  }

  getJoke(): Observable<IJokeGet> {
    return this.httpClient.get<IJokeGet>(
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit'
    );
  }
}
