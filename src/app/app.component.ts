import { Component, OnInit } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  randomText='';
  enteredText = ""
  ngOnInit() {
    this.generateRandomText();
  }

  onTypingSencentence(event: Event){
    this.enteredText = (event.target as HTMLInputElement).value
    
  }
  generateRandomText(){
    this.randomText = lorem.sentence();
  }

  compare(randomLetter: string, enteredLetter:string){
    if(!enteredLetter){
      return 'pending';
    }
    else if(randomLetter === enteredLetter){
      return 'success';
    }
    else{
      return 'fail';
    }
  }
}
