import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Issue } from '../issue';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.issue = await this.issueService.getIssue(id);
  }

  async handleDelete() {
    await this.issueService.deleteIssue(this.issue.id);
    this.location.back();
  }

}
