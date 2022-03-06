import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import WorkbenchService from './Workbench.service';

describe('WorkbenchService', () => {
    let service: WorkbenchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(WorkbenchService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
