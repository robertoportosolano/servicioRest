import { Component, OnInit } from '@angular/core';
import { AlbumService } from "src/app/pages/album.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
   
  info=null;
  constructor(public As:AlbumService, public Ar:ActivatedRoute) { }

  ngOnInit() {
  let id= this.Ar.snapshot.paramMap.get('id');

  this.As.getDetalle(id).subscribe(result=>{
    this.info= result;

  });

  }

}
