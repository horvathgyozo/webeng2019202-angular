import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ActivatedRoute } from '@angular/router';
import { IssueService } from '../issue.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue = new Issue();
  id: number = null;

  constructor(
    private route: ActivatedRoute,
    private issueService: IssueService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.issue = this.issueService.getIssue(id);
  }

  handleSave(formData) {
    this.issueService.updateIssue(this.id, formData);
    this.location.back();
  }

}
