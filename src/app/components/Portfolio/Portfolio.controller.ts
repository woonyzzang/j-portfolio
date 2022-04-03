import { Component, OnInit } from '@angular/core';
import { iif, Observable, of, Subject } from 'rxjs';
import { filter, map, mergeMap, switchMap } from 'rxjs/operators';
import * as $ from 'jquery';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSyncAlt, faSortNumericDownAlt, faSortNumericUp, faRandom, faThLarge, faAlignJustify, faQuoteLeft, faQuoteRight, faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import '@libs/jquery.mixitup';

import { siblings } from '@utils/dom';
import PortfolioModel from '@models/Portfolio.model';
import PortfolioService from '@services/portfolio/Portfolio.service';

namespace mixitup {
    export class Mixer {}
}

interface JQuery {
    mixItUp(
        container?: Element | string,
        config?: object,
        foreignDoc?: object
    ): mixitup.Mixer;
}

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.view.html',
    styleUrls: ['./portfolio.view.scss']
})
export class PortfolioController implements OnInit {
    faSyncAlt = faSyncAlt as IconProp;
    faSortNumericDownAlt = faSortNumericDownAlt as IconProp;
    faSortNumericUp = faSortNumericUp as IconProp;
    faRandom = faRandom as IconProp;
    faThLarge = faThLarge as IconProp;
    faAlignJustify = faAlignJustify as IconProp;
    faQuoteLeft = faQuoteLeft as IconProp;
    faQuoteRight = faQuoteRight as IconProp;
    faArrowRight = faArrowRight as IconProp;
    faClock = faClock as IconProp;

    // public portfolioModel: PortfolioModel[]; // 포트폴리오 모델
    public portfolioModel$: Observable<PortfolioModel[]>; // 포트폴리오 모델
    public filterMenuAction$ = new Subject<Event>();
    public sortMenuAction$ = new Subject<string>();

    constructor(
        private portfolioService: PortfolioService
    ) {}

    // /**
    //  * filterMenuClick
    //  * @description 포트폴리오 필터 메뉴 클릭 이벤트 핸들러
    //  * @param {Event} e - 이벤트 객체
    //  */
    // filterMenuClick(e: MouseEvent): void {
    //     // $(e.target).parent('li').addClass('active').siblings('li').removeClass('active');
    //     ((e.target as HTMLElement).parentNode as HTMLElement).classList.add('active');
    //     siblings((e.target as HTMLElement).parentNode as HTMLElement).map((elem) => elem.classList.remove('active'));
    // }

    // /**
    //  * sortMenuClick
    //  * @description 포트폴리오 썸네일형 || 리스트형 보기 클릭 이벤트 핸들러
    //  * @param {String} btnType - 버튼 타입
    //  */
    // sortMenuClick(btnType: string): void {
    //     // const $gallery = $('#gallery');
    //     const $gallery: HTMLElement = document.querySelector('#gallery');
    //
    //     switch (btnType) {
    //         case 'list' :
    //             // $gallery.addClass('list');
    //             $gallery.classList.add('list');
    //         break;
    //         case 'thumb' :
    //             // $gallery.removeClass('list');
    //             $gallery.classList.remove('list');
    //         break;
    //     }
    // }

    /**
     * siteGoClick
     * @description 포트폴리오 바로가기 클릭 이벤트 핸들러 url 링크
     * @param {Event} e - 이벤트 객체
     */
    siteGoClick(e: MouseEvent): void {
        // if ($(e.target).parent().attr('href') === '#') {}
        // if ((e.currentTarget as HTMLElement).getAttribute('href') === '#') {
        //     e.preventDefault();
        //
        //     alert('외부에서 접근할 수 없는 프로젝트 입니다.');
        // }

        of(e).pipe(
            map((event: MouseEvent) => (event.currentTarget as HTMLElement).getAttribute('href')),
            filter((href: string) => href === '#'),
            switchMap(() => of(e))
        ).subscribe((event: MouseEvent) => {
            event.preventDefault();
            alert('외부에서 접근할 수 없는 프로젝트 입니다.');
        })
    }

    ngOnInit(): void {
        // this.portfolioService.gePortfolioData.subscribe((portfolio: PortfolioModel[]) => {
        //     this.portfolioModel = portfolio;
        // });

        this.portfolioModel$ = this.portfolioService.gePortfolioData;

        // 필터 초기 메뉴 활성화
        // $('#mfilter').children('li').eq(0).addClass('active');
        // (document.querySelector('#mfilter').childNodes[0] as HTMLElement).classList.add('active');

        of('#mfilter').pipe(
            map((selector: string) => (document.querySelector(selector).childNodes[0] as HTMLElement))
        ).subscribe((elem: HTMLElement) => {
            elem.classList.add('active');
        });

        // 믹스업 플러그인 초기화
        // (<any>$('#gallery')).mixItUp();

        of('#gallery').pipe(
            map((selector: string) => (<any>$(selector)))
        ).subscribe((elem: JQuery) => {
            elem.mixItUp();
        });

        // filterMenuClick
        this.filterMenuAction$.pipe(
            map((event: Event) => (event.target as HTMLElement).parentNode as HTMLElement)
        ).subscribe((elem: HTMLElement) => {
            elem.classList.add('active');
        });

        this.filterMenuAction$.pipe(
            switchMap((event: Event) => siblings((event.target as HTMLElement).parentNode as HTMLElement))
        ).subscribe((elem: HTMLElement) => {
            elem.classList.remove('active');
        });

        // sortMenuClick
        this.sortMenuAction$.pipe(
            mergeMap((btnType: string) => iif(() => btnType === 'list', of('add'), of('remove')))
        ).subscribe((DOMToken: string) => {
            document.querySelector('#gallery').classList[DOMToken]('list');
        });
    }
}
