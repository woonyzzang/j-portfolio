import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import PortfolioService from './Portfolio.service';

describe('PortfolioService', () => {
    let service: PortfolioService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ]
        });
        service = TestBed.inject(PortfolioService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
