import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PortfolioController } from './Portfolio.controller';

describe('PortfolioController', () => {
    let component: PortfolioController;
    let fixture: ComponentFixture<PortfolioController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [PortfolioController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
