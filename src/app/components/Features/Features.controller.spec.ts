import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FeaturesController } from './Features.controller';

describe('FeaturesController', () => {
    let component: FeaturesController;
    let fixture: ComponentFixture<FeaturesController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [FeaturesController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturesController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
