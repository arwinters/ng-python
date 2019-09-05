import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {PlaybookApiService} from "./playbooks/playbook-api.service";
import {Playbook} from "./playbooks/playbook.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'frontend';
  playbooksListSubs: Subscription;
  playbooksList: Playbook;

  constructor(private playbooksApi: PlaybookApiService) {
  }

  ngOnInit() {
    this.playbooksListSubs = this.playbooksApi
      .getPlaybooks()
      .subscribe(res => {
          this.playbooksList = res;
        },
        console.error
      );
  }

  ngOnDestroy(): void {
    this.playbooksListSubs.unsubscribe();
  }
}
