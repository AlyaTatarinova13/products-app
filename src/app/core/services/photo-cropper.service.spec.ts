import { TestBed } from '@angular/core/testing';

import { PhotoCropperService } from './photo-cropper.service';

describe('PhotoCropperService', () => {
  let service: PhotoCropperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoCropperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
