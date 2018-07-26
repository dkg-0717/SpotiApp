import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  albumes: any[] = [];
  constructor( private spotify: SpotifyService ) { 
      this.spotify.getNewReleases()
      .subscribe(data => {
        this.albumes = data['albums'].items;

        console.log(this.albumes);
      });
  }

}
