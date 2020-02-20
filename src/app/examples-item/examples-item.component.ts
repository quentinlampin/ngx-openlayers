import { Component, OnInit } from '@angular/core';
import { examplesList } from '../example-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examples-item',
  template: `
    <div class="example-info" *ngIf="exampleInfo">
      <span class="title">{{ exampleInfo.title }}</span> <span class="description">{{ exampleInfo.description }}</span>
      <div *ngIf="exampleInfo.openLayersLink" class="open-layers-link">
        <a [href]="exampleInfo.openLayersLink" target="_blank"> {{ exampleInfo.openLayersLink }} </a>
      </div>
    </div>
    <div class="example">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .example-info {
        flex: 0 1 auto;
        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        font-family: Roboto, Arial, sans-serif;
      }

      .example-info .title {
        font-family: Roboto, sans-serif;
        margin-top: 0px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 25px;
        font-weight: 700;
        padding-bottom: 0.5rem;
      }
      .example-info .description {
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        padding-bottom: 0.5rem;
      }
      .example-info .open-layers-link a {
        margin-bottom: 0px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
      }

      .example {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class ExamplesItemComponent implements OnInit {
  constructor(private router: Router) {}
  exampleInfo;
  ngOnInit() {
    this.exampleInfo = examplesList.find((item) => this.router.url.includes(item.routerLink));
  }
}
