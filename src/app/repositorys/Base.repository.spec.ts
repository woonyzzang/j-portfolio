import { TestBed } from '@angular/core/testing';

import BaseRepository from './Base.repository';

describe('BaseRepository', () => {
    let service: BaseRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BaseRepository);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
