import { Component, OnInit } from '@angular/core';
import { examplesList } from '../example-list';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-examples-list',
  template: `
    <div class="search">
      <form [formGroup]="form">
        <input type="text" formControlName="term" placeholder="Search"/>
      </form>
    </div>
    <div class="wrapper">
      <div class="example-item" *ngFor="let example of list" [routerLink]="'examples/' + example.routerLink">
        <span class="title">{{example.title}}</span>
        <span class="description">{{example.description}}</span>
        <div *ngIf="example.openLayersLink" class="open-layers-link" (click)="$event.stopPropagation();">
          <a [href]="example.openLayersLink" target="_blank">{{example.openLayersLink}}</a>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .search {
        display: flex;
        justify-content: center;
        padding: 1rem;
      }
      .example-item {
        display: flex;
        flex-direction: column;
        padding: 10px;
        background-color: #f5f5f5;
        height: 140px;
        margin: 10px 0;
        overflow: auto;
        line-height: 1.42857143;
        color: black;
        font-family: Roboto, Arial, sans-serif;
        font-weight: 400;
        cursor: pointer;
      }

      .example-item:hover {
        background-color: #ddd;
      }

      .wrapper {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);
      }

      .title {
        margin-top: 0px;
        color: rgba(0, 0, 0, 0.87);
        font-size: 18px;
        font-weight: 500;
        padding-bottom: 0.5rem;
      }

      .description {
        color: rgba(0, 0, 0, 0.6);
        line-height: 24px;
        padding-bottom: 0.5rem;
      }

      .open-layers-link a {
        margin-bottom: 0px;
        color: rgba(0, 0, 0, 0.6);
        font-size: 12px;
      }
    `,
  ],
})
export class ExamplesListComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  form: FormGroup;
  list = examplesList;
  ngOnInit() {
    this.form = this.fb.group({
      term: '',
    });

    this.form.get('term').valueChanges.subscribe(() => {
      const termValue = this.form.get('term').value.toLowerCase();
      if (!termValue.trim()) {
        this.list = examplesList;
      } else {
        this.list = this.list.filter(
          item =>
            (item.title && item.title.toLowerCase().includes(termValue)) ||
            (item.description && item.description.toLowerCase().includes(termValue))
        );
      }
    });
  }
}
