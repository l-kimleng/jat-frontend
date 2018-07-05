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
  isDisplayMessage: Boolean;
  message: String;
  success: Boolean;

  constructor(private _jobService: JobService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.job = {
      _id: "",
      title: "",
      postDate: new Date(),
      appliedDate: new Date(),
      url: "",
      isExpired: false,
      company: {
        _id: "",
        name: "",
        location: {
          _id: "",
          city: "",
          state: "",
          zipCode: ""
        }
      },
      recruiter: {
        _id: "",
        name: "",
        title: "",
        company: "",
        phone: ""
      }
    };
    this.modelPostDate = null;
    this.modelAppliedDate = null;
  }

  saveJob() {
    this.job.postDate = new Date(this.modelPostDate.year, this.modelPostDate.month - 1, this.modelPostDate.day);
    this.job.appliedDate = new Date(this.modelAppliedDate.year, this.modelAppliedDate.month - 1, this.modelAppliedDate.day);
    this._jobService.createJob(this.job)
      .subscribe(res => {
        this.initForm();
        this.displayMessage({isSuccess: true, msg: "Job applied is saved."});
      }, error => {
        this.displayMessage({isSuccess: false, msg: error.error});
      });
  }

  displayMessage(option: any) {
    this.isDisplayMessage = true;
    this.success = option.isSuccess;
    this.message = option.msg;
    setTimeout(() => {
      this.isDisplayMessage = false;
      this.message = "";
    }, 5000); 
  }

}
