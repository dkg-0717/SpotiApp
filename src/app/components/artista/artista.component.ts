import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  
  topTracks: any[] = [];
  artista: any;
  cargando: boolean = true;
  cargandoTrack: boolean = true;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  getArtista(id: string) {
      this.spotify.getArtista(id)
             .subscribe(data => {
               this.artista = data;
               this.cargando = false;
             });
  }

  getTopTracks(id: string) {
      this.spotify.getTopTracks(id)
             .subscribe(topTracks => {
               this.topTracks = topTracks;
               console.log(this.topTracks);
               this.cargandoTrack = false;
             });
  }
  

}
