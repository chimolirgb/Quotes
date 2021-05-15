import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'We become what we think about'},
    {id:2,name:'If not us, who? If not now, when?'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
