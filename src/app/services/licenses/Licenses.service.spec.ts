import { TestBed } from '@angular/core/testing';

import LicensesService from './Licenses.service';

describe('LicensesService', () => {
    let service: LicensesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LicensesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
