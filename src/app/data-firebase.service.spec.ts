import { TestBed, inject } from '@angular/core/testing';

import { DataFirebaseService } from './data-firebase.service';

describe('DataFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFirebaseService]
    });
  });

  it('should be created', inject([DataFirebaseService], (service: DataFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
