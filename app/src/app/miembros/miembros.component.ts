import {Component, OnInit} from '@angular/core';
import miembrosJSON from '../../assets/miembros.json'

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit{
  members:any[] = []

  ngOnInit() {
    for(let i =0;i<miembrosJSON.length;i++){
      this.members.push(miembrosJSON[i])
    }
  }
}
