import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  task: string = "";

  constructor() {
  }

  ngOnInit() {
  }

  arr: Array<{ id: number, task: string, create_at: any }> = [];

  addTask() {
    let index: Number = this.arr.findIndex(x => x.task == this.task);

    if(this.task == "")  alert("Vui lòng nhập đủ dữ liệu");
    else if (index == -1) this.arr.push({
      id: (new Date()).getTime(),
      task: this.task,
      create_at: new Date()
    });
    else alert("Nội dung task đã tồn tại tại mục thứ " + (+index + 1));
  }

  findIndex(id) {
    let index = this.arr.findIndex(x => x.id == id);
    return index
  }

  deleteTask(id) {
    this.arr.splice(this.findIndex(id), 1);
  }

  editTask(id) {
    let edit = prompt(this.arr[this.findIndex(id)].task);
    if (edit) this.arr[this.findIndex(id)].task = edit;
  }

}
