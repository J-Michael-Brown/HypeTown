import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { songkickKey } from '../api-keys';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SongkickService {
  eventsAndBands: any[]=[];

  constructor(private http: Http) { }

  getLocationIdFromAPI(query: string) {
    return this.http.get(`https://api.songkick.com/api/3.0/search/locations.json?apikey=${songkickKey}&query=${query}`).map((response: Response) => response.json())
  }

  getShowListByCityIdAndDateRangeFromAPI(id, min, max){
    return this.http.get(`https://api.songkick.com/api/3.0/metro_areas/${id}/calendar.json?apikey=${songkickKey}&$min_date=${min}&$max_date=${max}`)
  }

  // findShowsByDate(location: string, minDate: string, maxDate: string) {
  //   return this.getLocationId(location);
  // };
}



  // OLD Method
  // findShowsByDate(location: string, minDate: string, maxDate: string, component) {
  //   this.getLocationId(location).map( (response: Response) => {
  //     this.performancesByLocation( response , minDate , maxDate , component)
  //   });
  // }

  // performancesByLocation( response: Response, min: string, max: string, component) {
  //   const id = response.json().resultsPage.results.location[0].metroArea.id
  //   this.filterByDate(id, min, max).subscribe( (response: Response) => {
  //     this.filterPerformancesOutByShowDates( response.json(), min, max, component);
  //   })
  // }
  //
  // filterPerformancesOutByShowDates(response: any, min: string, max: string, component){
  //   response.resultsPage.results.event.forEach( (show)=> {
  //     if((min<=(show.start.date))&&((show.start.date)<=max)) {
  //       this.eventsAndBands.push(show);
  //     }
  //   });
  //   component.executeOnShows(this.eventsAndBands)
  // }
// }
