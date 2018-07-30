import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  
  artista: any;

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    this.router.params.subscribe(params => {
      spotify.getArtista(params.id)
             .subscribe(data => {
               console.log(data);
             });
    });
  }
  

}
