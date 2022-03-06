import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LicensesController } from './Licenses.controller';

describe('LicensesController', () => {
    let component: LicensesController;
    let fixture: ComponentFixture<LicensesController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                Ng2SearchPipeModule
            ],
            declarations: [LicensesController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LicensesController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
