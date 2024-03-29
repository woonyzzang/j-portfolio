import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogController } from './Blog.controller';

describe('BlogController', () => {
    let component: BlogController;
    let fixture: ComponentFixture<BlogController>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BlogController]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogController);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });
});
