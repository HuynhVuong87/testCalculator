import { Component, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Inject } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  task: string = "";
  arr: Array<{ id: number, task: string, create_at: any }>

  constructor( @Inject(LOCAL_STORAGE) private storage: WebStorageService) {
    
    if(this.storage.get("task") === undefined){
      this.arr = []
    }else{
      this.arr = this.storage.get("task")
    }
  }

  ngOnInit() {
    
  }

   

  addTask() {
    console.log(this.arr);
    let index: Number = this.arr.findIndex(x => x.task == this.task);

    if (this.task == "") alert("Vui lòng nhập đủ dữ liệu");
    else if (index == -1) {
      this.arr.push({
        id: (new Date()).getTime(),
        task: this.task,
        create_at: new Date()
      });
      this.storage.set("task", this.arr);
      // console.log(this.storage.get("task"));
    } else alert("Nội dung task đã tồn tại tại mục thứ " + (+index + 1));
  }

  findIndex(id) {
    let index = this.arr.findIndex(x => x.id == id);
    return index
  }

  deleteTask(id) {
    this.arr.splice(this.findIndex(id), 1);
    this.storage.set("task", this.arr);
  }

  editTask(id) {
    let edit = prompt("Sửa nội dung task: ", this.arr[this.findIndex(id)].task);
    if (edit) this.arr[this.findIndex(id)].task = edit;
    this.storage.set("task", this.arr);
  }

}
