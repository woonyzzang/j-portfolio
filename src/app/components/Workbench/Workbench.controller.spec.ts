import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchController } from './Workbench.controller';

describe('WorkbenchController', () => {
    let component: WorkbenchController;
    let fixture: ComponentFixture<WorkbenchController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WorkbenchController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkbenchController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
