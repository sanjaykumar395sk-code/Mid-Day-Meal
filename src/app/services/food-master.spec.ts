import { TestBed } from '@angular/core/testing';

import { FoodMaster } from './food-master';

describe('FoodMaster', () => {
  let service: FoodMaster;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodMaster);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
