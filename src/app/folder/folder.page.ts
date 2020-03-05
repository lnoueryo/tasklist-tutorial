import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

// export class FolderPage implements OnInit {
export class FolderPage {
  // public folder: string;
  title = 'タスク登録';
  tasks: { name: string }[] = [
        {name: 'タスク1'},
        {name: 'タスク2'},
        {name: 'タスク3'},
      ];
      task: string;
  // constructor(private activatedRoute: ActivatedRoute) { }
  constructor() { }

  ionViewWillEnter() {
    if ('tasks' in localStorage) {
      this.tasks = JSON.parse(localStorage.tasks);
    }
  }

  addTask() {
    this.tasks.push({
      name: this.task
    });
    localStorage.tasks = JSON.stringify(this.tasks);
    this.task = '';
  }

  // ngOnInit() {
  //   this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  // }

}
