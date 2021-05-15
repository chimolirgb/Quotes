import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'We become what we think about','Author'),
    new Quote(2,'If not us, who? If not now, when?','Author'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
