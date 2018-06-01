import { Company } from './company';
import { Recruiter } from './recruiter';

export interface Job {
    id: String,
    title: String,
    postDate: Date,
    appliedDate: Date,
    url: String,
    isExpired: Boolean,

    company: Company,
    recruiter: Recruiter
}