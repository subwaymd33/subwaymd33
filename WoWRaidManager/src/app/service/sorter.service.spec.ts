import { TestBed } from '@angular/core/testing';
import { SorterService } from './sorter.service';

describe('RosterService', () => {
  let service: SorterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});