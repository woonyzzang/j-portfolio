import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faSyncAlt, faSortNumericDownAlt, faSortNumericUp, faRandom, faThLarge, faAlignJustify, faQuoteLeft, faQuoteRight, faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import '@libs/jquery.mixitup';

import { siblings } from '@utils/dom';
import PortfolioModel from '@models/Portfolio.model';
import PortfolioService from '@services/portfolio/Portfolio.service';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.view.html',
    styleUrls: ['./portfolio.view.scss']
})
export class PortfolioController implements OnInit {
    faSyncAlt = faSyncAlt;
    faSortNumericDownAlt = faSortNumericDownAlt;
    faSortNumericUp = faSortNumericUp;
    faRandom = faRandom;
    faThLarge = faThLarge;
    faAlignJustify = faAlignJustify;
    faQuoteLeft = faQuoteLeft;
    faQuoteRight = faQuoteRight;
    faArrowRight = faArrowRight;
    faClock = faClock;

    public portfolioModel$: PortfolioModel[]; // 포트폴리오 모델

    constructor(private portfolioService: PortfolioService) {}

    /**
     * filterClick
     * @description 포트폴리오 필터 메뉴 클릭 이벤트 핸들러
     * @param {Event} e - 이벤트 객체
     */
    filterClick(e: MouseEvent): void {
        // $(e.target).parent('li').addClass('active').siblings('li').removeClass('active');
        ((e.target as HTMLElement).parentNode as HTMLElement).classList.add('active');
        siblings((e.target as HTMLElement).parentNode as HTMLElement).map((elem) => elem.classList.remove('active'));
    }

    /**
     * sortClick
     * @description 포트폴리오 썸네일형 || 리스트형 보기 클릭 이벤트 핸들러
     * @param {String} btnType - 버튼 타입
     */
    sortClick(btnType: string): void {
        // const $gallery = $('#gallery');
        const $gallery: HTMLElement = document.querySelector('#gallery');

        switch (btnType) {
            case 'list' :
                // $gallery.addClass('list');
                $gallery.classList.add('list');

                break;
            case 'thumb' :
                // $gallery.removeClass('list');
                $gallery.classList.remove('list');

                break;
        }
    }

    /**
     * gallery
     * @description 포트폴리오 클릭 이벤트 핸들러 url 링크
     * @param {Event} e - 이벤트 객체
     */
    gallery(e: MouseEvent): void {
        // if ($(e.target).parent().attr('href') === '#') {}
        if ((e.currentTarget as HTMLElement).getAttribute('href') === '#') {
            e.preventDefault();

            alert('외부에서 접근할 수 없는 프로젝트 입니다.');
        }
    }

    ngOnInit(): void {
        this.portfolioService.gePortfolioData.subscribe((data) => {
            this.portfolioModel$ = data;
        });

        // 필터 초기 메뉴 활성화
        // $('#mfilter').children('li').eq(0).addClass('active');
        (document.querySelector('#mfilter').childNodes[0] as HTMLElement).classList.add('active');

        // 믹스업 플러그인 초기화
        // @ts-ignore
        $('#gallery').mixItUp();
    }
}
