import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TechniqueController } from './Technique.controller';

describe('TechniqueController', () => {
    let component: TechniqueController;
    let fixture: ComponentFixture<TechniqueController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [TechniqueController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TechniqueController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
