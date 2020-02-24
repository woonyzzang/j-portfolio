import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentController } from './Development.controller';

describe('DevelopmentController', () => {
    let component: DevelopmentController;
    let fixture: ComponentFixture<DevelopmentController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DevelopmentController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DevelopmentController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
