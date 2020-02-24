import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensesController } from './Licenses.controller';

describe('LicensesController', () => {
    let component: LicensesController;
    let fixture: ComponentFixture<LicensesController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LicensesController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensesController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
