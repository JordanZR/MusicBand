import {Component, OnInit} from '@angular/core';
import songsJSON from '../../assets/songs.json'
@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit{
  audio = document.createElement("audio");
  songs:any[] = []
  playedSong:string = ""
  playAudio(song:string):void{
    if(this.playedSong != song){
      this.audio.src = song
      this.playedSong = song
    }
    this.audio.play();
  }
  pauseAudio():void{
    this.audio.pause()
  }
  ngOnInit() {
    document.body.appendChild(this.audio);
    for(let i = 0; i<songsJSON.length;i++){
      this.songs.push(songsJSON[i])
    }
  }
}
