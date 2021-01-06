import { TestBed } from '@angular/core/testing';

import { RecipesListService } from './recipes-list.service';

describe('RecipesListService', () => {
  let service: RecipesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
