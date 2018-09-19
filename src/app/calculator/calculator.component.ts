import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  inputShow:string = "";

  constructor() {    
  }

  ngOnInit() {
  }

  inputFunction($event){
    var number:string = $event.target.getAttribute('value');
    this.inputShow = this.inputShow + number;
  }
  total(){
    this.inputShow  = math.eval(this.inputShow)
  }
  

}
