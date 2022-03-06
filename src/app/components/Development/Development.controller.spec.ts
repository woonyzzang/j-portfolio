import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopmentController } from './Development.controller';

describe('DevelopmentController', () => {
    let component: DevelopmentController;
    let fixture: ComponentFixture<DevelopmentController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [DevelopmentController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevelopmentController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
