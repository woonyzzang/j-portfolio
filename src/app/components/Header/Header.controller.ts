import { Component, OnInit } from '@angular/core';
import { from, fromEvent, Observable, of, Subject } from 'rxjs';
import { map, switchMap, toArray, pluck, filter, takeUntil } from 'rxjs/operators';
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

    private unsubscribe$ = new Subject<void>();

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

        // setTimeout(() => window.scrollTo(0, 0), 0);
        // setTimeout(() => window.scrollTo({top: 0, behavior: 'smooth'}), 0);
        const promise = new Promise<void>((resolve) => {
            setTimeout(() => {
                window.scrollTo(0, 0);
                resolve();
            }, 0);
        });

        // IOS > safari 에서 스크롤 도중 클릭 시 화면 제대로 노출 되지 않는 이슈 대체 방안
        promise
            .then(() => {
                if (location?.hash) {
                    setTimeout(() => {
                        const $container = document.querySelector('#container');

                        // console.log(document.querySelector(location.hash).getBoundingClientRect().top); // offset().top
                        // console.log((<HTMLAnchorElement>document.querySelector(location.hash)).offsetTop); // position().top
                        $container.scrollTo(0, (<HTMLAnchorElement>document.querySelector(location.hash)).offsetTop);
                    }, 100);
                }
            });
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
    ngOnInit(): void {
        const hasLocationHash$: Observable<boolean> = of(location.hash).pipe(
            map((hash: string) => hash.trim().length > 0)
        );

        // url 다이렉트로 접근 시 대응 (http://localhost:4200/#hash)
        hasLocationHash$.pipe(
            filter((hasHash: boolean) => hasHash),
            switchMap(_ => (
                of('.swipe', '#gnb', '.util', '#portfolio').pipe(
                    map((selector: string) => (document.querySelector(selector)))
                )
            ))
        ).subscribe((el: HTMLElement) => {
            el.classList.add('v1');
        });

        hasLocationHash$.pipe(
            filter((hasHash: boolean) => hasHash),
            switchMap(() => this.gnbMenus$),
            map((gnbMenus) => gnbMenus.find((menu) => `#${menu.name}` === location.hash) || null),
            filter((menu) => menu !== null)
        )
        .subscribe((menu) => {
            const $container = document.querySelector('#container');

            $container.scrollTo(0, (<HTMLAnchorElement>document.querySelector(location.hash)).offsetTop);
        });

        // 해시가 변경될 때마다 gnbMenus 업데이트
        // 선택 메뉴 aria-current="page" 속성 활성화
        fromEvent(window, 'hashchange').pipe(
            takeUntil(this.unsubscribe$), // 컴포넌트가 파괴될 때 구독 해제
            switchMap(() => this.gnbMenus$), // 메뉴 데이터에 접근
            map((gnbMenus) => (
                gnbMenus.map((menu) => ({
                    ...menu,
                    selected: `#${menu.name}` === location.hash // selected 상태 업데이트
                }))
            ))
        ).subscribe((gnbMenus) => {
            this.gnbMenus$ = from([gnbMenus]); // 업데이트된 메뉴 배열로 설정
        });
    }

    ngOnDestroy() {
        this.unsubscribe$.next(); // 컴포넌트 파괴 시 구독 해제
        this.unsubscribe$.complete();
    }
}
