import { JobService } from './../job.service';
import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { QueryObject } from '../../models/queryObject';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobs: Job[];
  query: QueryObject;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this.query = {
      isSortAscending: true,
      page: 1, 
      pageSize: 5
    };

    this._jobService.getJob(this.query).subscribe(res => {
      this.jobs = res;
    }, error => {
      console.log(error);
    });  
  }
}
