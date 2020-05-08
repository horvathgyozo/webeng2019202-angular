import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { IssueEditComponent } from './issue-edit/issue-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    MainPageComponent,
    IssueDetailComponent,
    IssueFormComponent,
    StatusFilterComponent,
    IssueEditComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
