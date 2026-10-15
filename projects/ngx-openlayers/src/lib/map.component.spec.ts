import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { MapComponent } from './map.component';

describe('MapComponent', () => {
  it('creates', () => {
    const fixture = TestBed.createComponent(MapComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
