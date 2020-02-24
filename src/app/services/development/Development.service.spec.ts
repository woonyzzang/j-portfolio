import { TestBed } from '@angular/core/testing';

import DevelopmentService from './Development.service';

describe('DevelopmentService', () => {
    let service: DevelopmentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DevelopmentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
