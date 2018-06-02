import { Company } from './company';
import { Recruiter } from './recruiter';

export interface Job {
    id: string,
    title: string,
    postDate: Date,
    appliedDate: Date,
    url: string,
    isExpired: boolean,

    company: Company,
    recruiter: Recruiter
}