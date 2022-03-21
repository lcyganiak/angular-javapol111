import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import {NavComponent} from '../nav/nav.component'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: any[] = [{
    name: 'item1',
    url: '/item1'
  },{
    name: 'item2',
    url: '/item2'
  },{
    name: 'item3',
    url: '/item3'
  },]


  ngOnInit(): void {

  }
  
}
