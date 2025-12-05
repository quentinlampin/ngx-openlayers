import { Component, OnInit, inject } from '@angular/core';
import { examplesList } from '../example-list';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-examples-item',
  template: `
    @if (exampleInfo) {
      <div class="example-info">
        <span class="title">{{ exampleInfo.title }}</span>
        <span class="description">{{ exampleInfo.description }}</span>
        @if (exampleInfo.openLayersLink) {
          <div class="open-layers-link">
            <a [href]="exampleInfo.openLayersLink" target="_blank"> {{ exampleInfo.openLayersLink }} </a>
          </div>
        }
      </div>
    }
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
  imports: [RouterOutlet],
})
export class ExamplesItemComponent implements OnInit {
  private router = inject(Router);

  exampleInfo;
  ngOnInit(): void {
    this.exampleInfo = examplesList.find((item) => this.router.url.includes(item.routerLink));
  }
}
