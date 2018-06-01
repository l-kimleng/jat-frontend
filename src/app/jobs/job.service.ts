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
        })
    }
}
