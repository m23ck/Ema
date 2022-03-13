import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medewerker } from 'src/app/Medewerker';

@Injectable({
  providedIn: 'root'
})
export class MedewerkersService {

  readonly API_URL = "http://127.0.0.1:4423/medewerkers";
  medewerkers!: Observable<Medewerker[]>;
  medewerker!: Observable<Medewerker>;

  constructor(private http: HttpClient) { }

  getMedewerkers() {
    return this.medewerkers = this.http.get<Medewerker[]>(this.API_URL + '')
  }

  viewMedewerker(id: number) {
    return this.medewerker = this.http.get<Medewerker>(this.API_URL + '/' + id)

  }

  addMedewerker(medewerkerObj: Medewerker){
    return this.http.post(this.API_URL + '', medewerkerObj)
  }

  updateMedewerker(id: number, medewerkerObj: Medewerker){
    return this.http.patch(this.API_URL + '/' + id, medewerkerObj)

  }
}
