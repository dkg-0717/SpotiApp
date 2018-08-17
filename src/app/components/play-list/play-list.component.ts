import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './play-list.component.html',
  styleUrls: ['./play-list.component.css']
})
export class PlayListComponent {

  tracksB: any[] = [];
  tracks: any[] = [];
  cargandoTrack: boolean = false;
  agregandoTrack: boolean = false;
  errorMessage: string;
  error: boolean = false;

  constructor(private spoti: SpotifyService) {
    
   }

   newplayList(cancion) {
      this.agregandoTrack = true;
      this.spoti.getTracks(cancion)
      .subscribe(data => {
        this.cargandoTrack = true;
        this.tracks = data;
      }, (err) => {
        this.error = true;
        this.errorMessage = err.error.error.message;
        console.log(err.error.error.message);
      });
   }

   addTrack(track) {
    this.agregandoTrack = false;
    this.tracksB.push(track);
   }

   deleteTrack(i) {
    this.tracksB.splice(i, 1);
   }

}
