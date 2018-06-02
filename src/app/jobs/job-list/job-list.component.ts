import { JobQueryObject } from './../../models/jobQueryObject';
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
  jobQuery: JobQueryObject;
  title: string;
  company: string;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this.query = {
      isSortAscending: true,
      page: 1, 
      pageSize: 5
    };

    this.getJob();
  }

  getJob() {
    this._jobService.getJob(this.query).subscribe(res => {
      this.jobs = res;
    }, error => {
      console.log(error);
    });
  }
  
  search() {
    this.jobQuery = {
      title: this.title,
      company: this.company,
      query: this.query
    };

    this._jobService.filterJob(this.jobQuery).subscribe(res => {
      this.jobs = res;
    }, error => {
      console.log(error)
    });
  }
}
