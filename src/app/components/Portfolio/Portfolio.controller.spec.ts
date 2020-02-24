import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioController } from './Portfolio.controller';

describe('PortfolioController', () => {
    let component: PortfolioController;
    let fixture: ComponentFixture<PortfolioController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PortfolioController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PortfolioController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
