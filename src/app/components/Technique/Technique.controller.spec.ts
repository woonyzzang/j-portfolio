import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechniqueController } from './Technique.controller';

describe('TechniqueController', () => {
    let component: TechniqueController;
    let fixture: ComponentFixture<TechniqueController>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TechniqueController ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TechniqueController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
