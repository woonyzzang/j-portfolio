import { TestBed } from '@angular/core/testing';

import HeaderService from './Header.service';

describe('HeaderService', () => {
    let service: HeaderService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(HeaderService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
