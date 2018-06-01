import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-save',
  templateUrl: './job-save.component.html',
  styleUrls: ['./job-save.component.scss']
})
export class JobSaveComponent implements OnInit {
  modelPostDate;
  modelAppliedDate;

  constructor() { }

  ngOnInit() {
  }

}
