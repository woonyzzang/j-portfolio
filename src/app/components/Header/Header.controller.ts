import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import HeaderService from '@services/header/Header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.view.html',
    styleUrls: ['./header.view.scss']
})
export class HeaderController implements OnInit {
    faUser = faUser;

    public gnbMenus: Set<{[key: string]: string}>; // 메인메뉴
    public utilMenus: Set<{[key: string]: string}>; // 유틸메뉴
    public resume: {[key: string]: string}; // 이력서

    constructor(private headerService: HeaderService) {
        this.gnbMenus = this.headerService.getGnbMenus;
        this.utilMenus = this.headerService.getUtilMenus;
        this.resume = this.headerService.getResume;
    }

    /**
     * resumeClick
     * @description 네비게이션메뉴 클릭 이벤트 핸들러
     */
    navClick(): void {
        // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
        const $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');

        $sections.forEach((section) => section.classList.add('v1'));
    }

    /**
     * resumeClick
     * @description 이력서 클릭 이벤트 핸들러
     * @param {Event} e - 이벤트 객체
     */
    resumeClick(e: MouseEvent): void {
        e.preventDefault();

        // window.open($('#resume').attr('href'), 'resume', 'width=900, height=950');
        window.open(document.querySelector('#resume').getAttribute('href'), 'resume', 'width=900, height=950');
    }

    ngOnInit(): void {}
}
