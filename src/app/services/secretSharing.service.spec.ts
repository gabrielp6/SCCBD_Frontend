import { TestBed } from '@angular/core/testing';

import { SecretSharingService } from './secretSharing.service';

describe('SecretSharingService', () => {
  let service: SecretSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
