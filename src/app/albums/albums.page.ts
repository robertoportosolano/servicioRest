import { Component, OnInit } from '@angular/core';
import { AlbumService } from "src/app/pages/album.service";
import { Observable } from "rxjs";
@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {
   results: Observable<any>;
  constructor(public AS:AlbumService) {
      this.results= this.AS.getAlbums();
   }

  ngOnInit() {
  }

}
