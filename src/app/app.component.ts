import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header><h1 routerLink="/">ngx-openlayer demo</h1></header>
    <div class="main-container"><router-outlet></router-outlet></div>
  `,
  styles: [
    `
      header {
        top: 0;
        height: 75px;
        width: 100%;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        -ms-flex-pack: justify;
        justify-content: space-between;
        z-index: 4;
        background-color: #202124;
        color: #fff;
        font-family: Roboto, sans-serif;
        font-size: 16px;
        opacity: 1;
        box-shadow:
          0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14),
          0 1px 10px 0 rgba(0, 0, 0, 0.12);
      }

      header h1 {
        padding-left: 1rem;
        cursor: pointer;
      }

      .main-container {
        height: calc(100% - 72px);
        background-color: white;
        margin: 0px;
        overflow: auto;
      }
    `,
  ],
})
export class AppComponent {}
