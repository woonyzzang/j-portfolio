import { TestBed } from '@angular/core/testing';

import TechniqueService from './Technique.service';

describe('TechniqueService', () => {
    let service: TechniqueService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TechniqueService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
