import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'We become what we think about','Author',new Date(2021,5,14)),
    new Quote(2,'If not us, who? If not now, when?','Author',new Date(2021,5,15)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index){
    if (isComplete) {

      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){ 
      this.quotes.splice(index,1);
    }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
