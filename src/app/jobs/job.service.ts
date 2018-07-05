import { JobQueryObject } from './../models/jobQueryObject';
import { Job } from './../models/job';
import { QueryObject } from './../models/queryObject';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobService {

    constructor(private _http: HttpClient) { }

    getJob(query: QueryObject) {
        const token = localStorage.getItem('jat-token');
        return this._http.get<Array<Job>>(`${environment.apiUrl}/api/jobs`, {
            params: new HttpParams ({
                fromObject: {
                   page: `${query.page}`,
                   size: `${query.pageSize}`
                }
            }),
            headers: new HttpHeaders().set('x-auth-token', token)
        });
    }

    deleteJob(id: string) {
        const token = localStorage.getItem('jat-token');
        return this._http.delete(`${environment.apiUrl}/api/jobs/${id}`, {
            headers: new HttpHeaders().set('x-auth-token', token)
        });
    }

    filterJob(jobQuery: JobQueryObject) {
        const token = localStorage.getItem('jat-token');        
        const title = (jobQuery.title === undefined || jobQuery.title === "")? "!2$" : jobQuery.title;
        const company = (jobQuery.company === undefined || jobQuery.company === "") ? "!2$" : jobQuery.company;
        return this._http.get<Array<Job>>(`${environment.apiUrl}/api/jobs/${title+''}/${company+''}`, {
            params: new HttpParams ({
                fromObject: {
                   page: `${jobQuery.query.page}`,
                   size: `${jobQuery.query.pageSize}`
                }
            }),
            headers: new HttpHeaders().set('x-auth-token', token)
        });
    }

    createJob(job: Job) {
        const token = localStorage.getItem('jat-token');
        return this._http.post<Job>(`${environment.apiUrl}/api/jobs`,
            {
                title : job.title,
                postDate : job.postDate,
                appliedDate: job.appliedDate,
                url : job.url,
                isExpired: job.isExpired.toString(),
                company : {
                    name: job.company.name,
                    location: {
                        city: job.company.location.city,
                        state: job.company.location.state,
                        zipCode : job.company.location.zipCode
                    }
                },
                recruiter : {
                    name : job.recruiter.name,
                    phone: job.recruiter.phone,
                    title: job.recruiter.title,
                    company : job.recruiter.company
                }
            },
            {
                headers: new HttpHeaders().set("x-auth-token", token),
                observe: "response"                
            }
        );
    }
}
