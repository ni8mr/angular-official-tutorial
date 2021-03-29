import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from "rxjs/observable/of";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Hero } from './hero';
import { MessageService } from "./message.service";

@Injectable()
export class HeroService {
  private heroUrl = 'api/heroes';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes():  Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>(this.heroUrl)
  }

  getHero(id: Number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
