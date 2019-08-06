import { Component, OnInit, Input } from '@angular/core';
import {NewModel} from '../model/newsModel';

@Component({
  selector: 'news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.css']
})
export class NewsContainerComponent implements OnInit {

  @Input() googleRes : NewModel;
  constructor() { }

  ngOnInit() {
    console.log('jadu',this.googleRes);
  }

}