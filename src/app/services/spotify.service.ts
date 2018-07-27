import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  album: any[] = [];
  token: string = 'Bearer BQCiLdocB9GSLNvL0EbGtDl7xR9tNvQK7illcu6cEitd750k0uPvYuSx6NLMYWnnEHxYv1ZwcNu3DG5RoMw';
  
  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': this.token
    }); 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  searchArtist(artist:string){
    const headers = new HttpHeaders({
      'Authorization': this.token
    }); 
    return this.http.get(`https://api.spotify.com/v1/search?q=${artist}&type=artist`, { headers });
  }

}
