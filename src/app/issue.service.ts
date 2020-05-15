import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  })
};

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  // private issues: Issue[] = [
  //   { id: 1, title: 'issue1', description: 'desc1', place: 'place1', status: 'NEW'},
  //   { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING'},
  //   { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DOING'},
  //   { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'DONE'},
  // ];

  private issuesUrl = '/api/issues';

  constructor(
    private http: HttpClient
  ) { }

  getIssues() {
    return this.http.get<Issue[]>(this.issuesUrl, httpOptions).toPromise();
  }

  getIssue(id: number) {
    return this.http.get<Issue>(`${this.issuesUrl}/${id}`, httpOptions).toPromise();
  }

  updateIssue(id: number, data) {
    return this.http.put<Issue>(`${this.issuesUrl}/${id}`, data, httpOptions).toPromise();
  }

  addIssue(data) {
    return this.http.post<Issue>(`${this.issuesUrl}`, data, httpOptions).toPromise();
  }

  deleteIssue(id: number) {
    return this.http.delete<Issue>(`${this.issuesUrl}/${id}`, httpOptions).toPromise();
  }
}
