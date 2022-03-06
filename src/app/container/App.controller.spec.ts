import { TestBed } from '@angular/core/testing';

import { AppController } from './App.controller';

describe('AppController', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [
                AppController
            ],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppController);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    // it(`should have as title 'j-portfolio'`, () => {
    //   const fixture = TestBed.createComponent(AppController);
    //   const app = fixture.componentInstance;
    //   expect(app.title).toEqual('j-portfolio');
    // });

    // it('should render title', () => {
    //     const fixture = TestBed.createComponent(AppController);
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLElement;
    //     expect(compiled.querySelector('.content span').textContent).toContain('j-portfolio app is running!');
    // });
});
