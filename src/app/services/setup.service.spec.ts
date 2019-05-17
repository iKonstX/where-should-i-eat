import { TestBed } from '@angular/core/testing';

import { SetupService } from './setup.service';

describe('StepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetupService = TestBed.get(SetupService);
    expect(service).toBeTruthy();
  });
});
