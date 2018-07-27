import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    this.spotify.searchArtist(termino)
    .subscribe( data => {
      console.log(data);
      this.artistas = data;
    });
  }

}
