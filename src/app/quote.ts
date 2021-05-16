export class Quote {
   likevote: any;
    dislikevote(dislikevote: any): void {
     throw new Error('Method not implemented.');
    }
   public showAuthor: boolean;

   constructor(public id: number,public name: string,public author: string, public completeDate: Date){

     this.showAuthor=false;

  }
}
