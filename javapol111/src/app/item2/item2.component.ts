import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.scss']
})
export class Item2Component implements OnInit {

  constructor() { }
  name: string = "Generally, we recommend using a button with the data-bs-target attribute. While not recommended from a semantic point of view, you can also use a link with the href attribute" // Jan Maria-rokita
  ngOnInit(): void {
  }

}
