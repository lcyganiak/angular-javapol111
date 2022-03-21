import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.scss']
})
export class Item3Component implements OnInit {

  constructor() { }
  title = 'javapol111';
  alt: string = 'To jest ale zdjęcia ';
  firstName: string = 'idzie zima zła'
  number: Array<number> = [1,2,3,4,5,6,7,8,9];

  posts: any = []
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
  //  constructor(PostService: PostService) {

  // }

  addNumber() {
    const nextNumber = this.number.length + 1
   this.number.push(nextNumber)
  }
  delet(num: number) {
    console.log(num)
    this.number =  this.number.filter(item => item !== num)
  }
  bold() {
    document.execCommand('bold', false)
  }
  show() {
    console.log(this.firstName)
  }

  ngOnInit(): void {
  }

}
