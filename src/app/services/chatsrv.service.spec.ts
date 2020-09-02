import { TestBed } from '@angular/core/testing';

import { ChatsrvService } from './chatsrv.service';

describe('ChatsrvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatsrvService = TestBed.get(ChatsrvService);
    expect(service).toBeTruthy();
  });
});
