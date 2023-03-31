import {Component, OnInit} from '@angular/core';
import merchJSON from '../../assets/merch.json'
@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit{
  merchs:any[] = []
  ngOnInit() {
    for(let i = 0; i<merchJSON.length;i++){
      this.merchs.push(merchJSON[i])
    }
  }
}
