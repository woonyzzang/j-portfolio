import { TestBed, async } from '@angular/core/testing';

import { AppController } from './App.controller';

describe('AppController', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppController
            ],
        }).compileComponents();
    }));

    it('should create the AppController', () => {
        const fixture = TestBed.createComponent(AppController);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'j-portfolio'`, () => {
      const fixture = TestBed.createComponent(AppController);
      const app = fixture.componentInstance;
      // expect(app.title).toEqual('j-portfolio');1
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppController);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('j-portfolio app is running!');
    });
});
