import {Component, OnInit} from '@angular/core';
import galeriaJSON from '../../assets/galeria.json'
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit{
  photos:any[] = []
  principalPhoto:any = {}

  pickImg(photo:any):void{
    for(let i = 0;i<this.photos.length;i++){
      if(photo.img == this.photos[i].img){
        this.photos[i] = this.principalPhoto
      }
    }
    this.principalPhoto = photo
  }
  ngOnInit() {
    for(let i =0;i<galeriaJSON.length;i++){
      this.photos.push(galeriaJSON[i])
    }
    this.principalPhoto = this.photos.pop()
  }
}
