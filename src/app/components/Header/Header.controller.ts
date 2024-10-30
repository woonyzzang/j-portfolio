import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import {map, switchMap, toArray, pluck, filter} from 'rxjs/operators';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import * as $ from 'jquery';

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
        // setTimeout(() => window.scrollTo(0, 0), 0);

        // of('.swipe', '#gnb', '.util', '#portfolio').pipe(
        //     map((selector: string) => document.querySelector(selector))
        // ).subscribe((el: HTMLElement) => {
        //     el.classList.add('v1');
        // });

        const hasLocationHash$: Observable<boolean> = of(location.hash).pipe(
            map((hash: string) => hash.trim().length > 0)
        );

        hasLocationHash$.pipe(
            filter((hasHash: boolean) => !hasHash),
            switchMap(_ => (
                of('.swipe', '#gnb', '.util', '#portfolio').pipe(
                    map((selector: string) => (document.querySelector(selector)))
                )
            ))
        ).subscribe((el: HTMLElement) => {
            el.classList.add('v1');
        });

        setTimeout(() => {
            window.scrollTo(0, 0);

            setTimeout(() => {
                const $container = document.querySelector('#container');

                $container.scrollTo(0, $container.scrollTop + 1);
            }, 1000);
        }, 0);
        // setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 0);
    }

    /**
     * btnUmenuClick
     * @description 햄버거 메뉴 클릭 이벤트 핸들러
     * @param {Event} e - 이벤트 객체
     */
    btnUmenuClick(e: MouseEvent): void {
        e.preventDefault();

        const _this = e.currentTarget as HTMLSpanElement;

        _this.classList.toggle('active');

        const selector: string | null = _this.closest('.ulinks')?.getAttribute('href');

        of(selector).pipe(
            map((selector: string | null) => selector ? document.querySelector(selector) : null)
            // switchMap((element: HTMLElement | null) => of(element))
        ).subscribe((el: HTMLElement | null) => {
            el?.classList.toggle('active');
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

    /** Life Cycle */
    ngOnInit(): void {}
}
