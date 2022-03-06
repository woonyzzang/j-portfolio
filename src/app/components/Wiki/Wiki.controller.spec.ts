import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WikiController } from './Wiki.controller';

describe('WikiController', () => {
    let component: WikiController;
    let fixture: ComponentFixture<WikiController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [WikiController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WikiController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
