import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WikiController } from './Wiki.controller';

describe('BlogController', () => {
    let component: WikiController;
    let fixture: ComponentFixture<WikiController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WikiController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WikiController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
