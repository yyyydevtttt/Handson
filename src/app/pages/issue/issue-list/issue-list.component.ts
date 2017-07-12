import { Component, OnInit } from '@angular/core';

import { Issue } from '../issue';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  private issues: Issue[];

  constructor (
    private issueService: IssueService
  ) {}

  ngOnInit() {
    this.issueService.getList()
      .then(response => this.issues = response)
      .catch(error => console.log(error));
  }

  public onDelete(index: number): void {
    this.issueService.delete(index)
      .catch(error => console.log(error));
  }

}
