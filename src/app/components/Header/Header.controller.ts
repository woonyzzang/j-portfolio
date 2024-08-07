import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map, toArray, pluck } from 'rxjs/operators';
// import * as $ from 'jquery';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import HeaderService, {IGnbMenus} from '@services/header/Header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.view.html',
    styleUrls: ['./header.view.scss']
})
export class HeaderController implements OnInit {
    faUser = faUser as IconProp;

    // public gnbMenus: Set<IMenus>; // 메인메뉴
    // public utilMenus: Set<IMenus>; // 유틸메뉴
    // public resume: IMenus; // 이력서
    public gnbMenus$: Observable<IGnbMenus[]>; // 메인메뉴
    public utilMenus$: Observable<IGnbMenus[]>; // 유틸메뉴
    public resume$: Observable<IGnbMenus>; // 이력서

    constructor(
        private headerService: HeaderService
    ) {
        // this.gnbMenus = this.headerService.getGnbMenus;
        // this.utilMenus = this.headerService.getUtilMenus;
        // this.resume = this.headerService.getResume;

        this.gnbMenus$ = from(this.headerService.getGnbMenus).pipe(toArray());
        this.utilMenus$ = from(this.headerService.getUtilMenus).pipe(toArray());
        this.resume$ = of(this.headerService.getResume);
    }

    /**
     * resumeClick
     * @description 네비게이션메뉴 클릭 이벤트 핸들러
     */
    navClick(): void {
        // // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
        // const $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');
        //
        // $sections.forEach((section) => section.classList.add('v1'));
        //
        // setTimeout(() => window.scrollTo(0, 0), 0);

        of('#wrap', '.swipe', '#gnb', '#portfolio').pipe(
            map((selector: string) => document.querySelector(selector))
        ).subscribe((el: HTMLElement) => {
            el.classList.add('v1');
            setTimeout(() => window.scrollTo(0, 0), 0);
        });
    }

    /**
     * resumeClick
     * @description 이력서 클릭 이벤트 핸들러
     * @param {Event} e - 이벤트 객체
     */
    resumeClick(e: MouseEvent): void {
        e.preventDefault();

        // // window.open($('#resume').attr('href'), 'resume', 'width=900, height=950');
        // window.open(document.querySelector('#resume').getAttribute('href'), 'resume', 'width=900, height=950');

        of('#resume').pipe(
            map((selector: string) => document.querySelector(selector)),
            pluck('href'),
        ).subscribe((href: string) => {
            window.open(href, 'resume', 'width=900, height=950');
        });
    }

    ngOnInit(): void {}
}
