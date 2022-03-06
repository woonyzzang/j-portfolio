import { TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import BaseRepository from './Base.repository';

describe('BaseRepository', () => {
    let service: BaseRepository;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                // RouterTestingModule,
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(BaseRepository);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
