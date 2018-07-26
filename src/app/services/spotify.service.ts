import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  album: any[] = [];

  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCbxikp2F0TmIPW-wIAKKHdg9di08BEmn33zcl0uXMbytk0PD6Gi55Bug5YUiCHFBuvZebXrGm8eolpm6I'
    }); 

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

}
