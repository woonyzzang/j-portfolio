import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderController } from './Header.controller';

describe('HeaderController', () => {
    let component: HeaderController;
    let fixture: ComponentFixture<HeaderController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
