import { TestBed } from '@angular/core/testing';

import { ErrorHandler } from './errorhandler.service';

describe('ErrorhandlerService', () => {
  let service: ErrorHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandler);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
