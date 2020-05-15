import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { ActivatedRoute, Router } from '@angular/router';
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
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.issue = await this.issueService.getIssue(this.id);
    }
  }

  async handleSave(formData) {
    if (this.id) {
      await this.issueService.updateIssue(this.id, formData);
      this.location.back();
    } else {
      await this.issueService.addIssue(formData);
      this.router.navigate(['issues']);
    }
  }

}
