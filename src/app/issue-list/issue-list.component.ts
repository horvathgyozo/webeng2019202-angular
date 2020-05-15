import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [];
  filteredIssues: Issue[] = [];
  status = 'ALL';
  selectedIssue: Issue = null;

  constructor(
    private issueService: IssueService
  ) { }

  async ngOnInit() {
    this.issues = await this.issueService.getIssues();
    this.filterIssue();
  }

  filterIssue() {
    this.filteredIssues = this.status === 'ALL'
      ? this.issues
      : this.issues.filter(issue => issue.status === this.status);
  }

  handleStatusChange(newStatus: string) {
    this.status = newStatus;
    this.filterIssue();
  }

  handleSave(formData) {
    Object.assign(this.selectedIssue, formData);
    this.selectedIssue = null;
  }

}
