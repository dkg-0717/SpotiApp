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
      'Authorization': 'Bearer BQCWxw2iFWFsTN7W8lRKm0oFeK9YGF3-QcyVgh-fwI4RG7b_9Z6xcmL2xe_KjHghf4Sc2HKd9qAqecMvH20'
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

  getTopTracks(id: any) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map( data => data['tracks']));
  }

}
