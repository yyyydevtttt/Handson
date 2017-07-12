import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { TopComponent } from './top/top.component';
import { IssueModule } from './issue/issue.module';
import { WikiComponent } from './wiki/wiki.component';
import { MarkdownPipe } from './wiki/markdown.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    IssueModule,
    HttpModule
  ],
  declarations: [PagesComponent, TopComponent, WikiComponent, MarkdownPipe],
})
export class PagesModule { }
