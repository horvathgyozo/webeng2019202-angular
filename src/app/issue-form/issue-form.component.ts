import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {

  @Input() issue = new Issue();
  @Output() save = new EventEmitter<Issue>();

  issueForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    status: ['NEW', [Validators.required]],
  });

  get title() { return this.issueForm.get('title'); }
  get description() { return this.issueForm.get('description'); }
  get place() { return this.issueForm.get('place'); }
  get status() { return this.issueForm.get('status'); }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {}

  ngOnChanges() {
    this.issueForm.patchValue(this.issue);
  }

  onSubmit() {
    if (this.issueForm.valid) {
      this.save.emit(this.issueForm.value);
    }
  }

}
