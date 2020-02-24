import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterController } from './Footer.controller';

describe('FooterController', () => {
    let component: FooterController;
    let fixture: ComponentFixture<FooterController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FooterController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
