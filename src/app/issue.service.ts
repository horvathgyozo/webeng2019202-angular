import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'place1', status: 'NEW'},
    { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING'},
    { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DOING'},
    { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'DONE'},
  ];

  constructor() { }

  getIssues() {
    return this.issues;
  }

  getIssue(id: number) {
    return this.issues.find(issue => issue.id === id);
  }

  updateIssue(id: number, data) {
    const issue = this.getIssue(id);
    Object.assign(issue, data);
    return issue;
  }
}