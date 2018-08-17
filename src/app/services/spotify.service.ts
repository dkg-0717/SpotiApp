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
      'Authorization': 'Bearer BQDu6aHHZl-sNbQ8PLzEjhx4AGhQ1GDpR0C5erELzcKx60CjWrhPamHqgXUdNJpqaqiZlu0A3AoV6JfQq0E'
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

  login() {
    return this.http.get('http://127.0.0.1:3000/login');
  }

  getUser() {
    return this.getQuery(`users/hyper_dkg-07/playlists`)
    .pipe(map(data => data['items']));
  }

  player() {
    return this.getQuery(`me/player`);
  }

  getTracks(cancion) {
    return this.getQuery(`search?q=${ cancion }&type=track&market=MX`)
               .pipe(map(data => data['tracks'].items));
  }

}
