import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesController } from './Features.controller';

describe('FeaturesController', () => {
    let component: FeaturesController;
    let fixture: ComponentFixture<FeaturesController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FeaturesController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeaturesController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
