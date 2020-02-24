import { TestBed } from '@angular/core/testing';

import WorkbenchService from './Workbench.service';

describe('WorkbenchService', () => {
    let service: WorkbenchService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WorkbenchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
