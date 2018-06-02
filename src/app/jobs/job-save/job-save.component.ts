import { Component, OnInit } from '@angular/core';
import { Job } from '../../models/job';
import { JobService } from '../job.service';

@Component({
  selector: 'app-job-save',
  templateUrl: './job-save.component.html',
  styleUrls: ['./job-save.component.scss']
})
export class JobSaveComponent implements OnInit {
  modelPostDate: any;
  modelAppliedDate: any;

  job: Job;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.job = {
      id: "",
      title: "",
      postDate: new Date(),
      appliedDate: new Date(),
      url: "",
      isExpired: false,
      company: {
        id: "",
        name: "",
        location: {
          id: "",
          city: "",
          state: "",
          zipCode: ""
        }
      },
      recruiter: {
        id: "",
        name: "",
        title: "",
        company: "",
        phone: ""
      }
    };
  }

  saveJob() {
    this.job.postDate = new Date(this.modelPostDate.year, this.modelPostDate.month, this.modelPostDate.day);
    this.job.appliedDate = new Date(this.modelAppliedDate.year, this.modelAppliedDate.month, this.modelAppliedDate.day);
    this._jobService.createJob(this.job)
      .subscribe(res => {
        this.initForm();
      }, error => {
        console.log(error);
      });
  }
}
