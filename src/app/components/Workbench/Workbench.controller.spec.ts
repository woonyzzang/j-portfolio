import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WorkbenchController } from './Workbench.controller';

describe('WorkbenchController', () => {
    let component: WorkbenchController;
    let fixture: ComponentFixture<WorkbenchController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            declarations: [WorkbenchController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkbenchController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
