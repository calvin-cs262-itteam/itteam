import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });

  it('should create document'), () => {
    let creation = new DatabaseService('Recipe', true);
    let testRecipeArray = [<[string, any]>['name', 'soup'], <[string, any]>['description', 'yummy'], <[string, any]>['ingredients', ['sauce', 'water']]];

    creation.create(testRecipeArray);


  }
});

