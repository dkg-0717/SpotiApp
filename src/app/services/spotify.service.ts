import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('spotify service listo');
  }

  getNewReleases() {
    
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDbfK_mbI0irY3RVHDpJiGYGPn1fmlzxR1Tk2nP_l5kvmUDGtxBOJVyvn1JDu5mPdpCu6ZpIC3E-QoiT7k'
    }); 

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe( data => {
      console.log(data);
    })
  }

}
