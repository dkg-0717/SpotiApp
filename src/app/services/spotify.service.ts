import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  album: any[] = [];
  
  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDbEb4uX0_4we659B3FfOvWETsBzSBG9RlUFrGE_LApWUG4bg8DFs00_Uor9aFyKSzoqUDWfddU89ktHB4'
    }); 

    return this.http.get( url, { headers });
  }

  getNewReleases() { 
    return this.getQuery('browse/new-releases?limit=20')
    .pipe(map(data => data['albums'].items));
  }

  searchArtist(artist: string) {
    return this.getQuery(`search?q=${artist}&type=artist&limit=15`)
    .pipe(map(data => data['artists'].items));
  }

  getArtista(id: any) {
    return this.getQuery(`artists/${id}`);
  }

}
