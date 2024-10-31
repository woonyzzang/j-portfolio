import {Component, AfterViewInit, OnInit, Renderer2, HostListener} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, of, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// import * as $ from 'jquery';

import { environment } from '@env/environment';
import FastClick from '@libs/fastclick';

@Component({
    selector: 'app-root',
    templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss']
})
export class AppController implements AfterViewInit, OnInit {
    faHome = faHome as IconProp;

    constructor(
        private metaService: Meta,
        private titleService: Title,
        private renderer: Renderer2
    ) {
        // 모바일 디버깅
        if (environment.enableVConsole) {
            this.initVConsole();
        }

        // 스크롤 시 주소창 높이 여백 이슈
        this.setVh();
    }

    /**
     * initVConsole
     * @description vconsole 초기화
     * @private
     */
    private initVConsole() {
        import('vconsole').then(({default: VConsole}) => {
            // 모바일 디바이스에서 키패드에 커맨드 가려지는 이슈로 위치 변경 설정
            new VConsole({
                onReady() {
                    // 커맨드, 필터 입력 필드 위치 상단 이동
                    // const $vcScrollerItems = document.querySelectorAll('.vc-scroller-items')[0];
                    // const $vcScrollerFooter = document.querySelectorAll('.vc-scroller-footer')[0];
                    // const $parentElement = $vcScrollerItems.parentNode;
                    //
                    // $parentElement?.insertBefore($vcScrollerFooter, $vcScrollerItems);

                    // 폰트 사이즈 고정
                    // iOS/Safari 에서 input, select, textarea의 font-size가 16px 보다 작은경우 focus시 자동 확대 이슈 (커맨드 입력창 확대 방지)
                    for (const elem of Array.from(document.querySelectorAll('.vc-cmd-input')) as HTMLInputElement[]) {
                        elem['style'].cssText = `font-size: 16px`;
                    }
                }
            });
        });
    }

    /**
     * setVh
     * @description 브라우저 높이를 기준으로 뷰포트 높이(vh)를 픽셀 단위로 계산
     * @private
     */
    private setVh() {
        const ua = window.navigator.userAgent;
        // const vh = window.innerHeight * 0.01;
        let vh = window.innerHeight * 0.01;

        // KAKAOTALK 인앱 브라우저 경우 예외 처리
        if (ua.includes('KAKAOTALK')) {
            if (window.innerHeight < document.body.clientHeight) {
                vh = document.body.clientHeight * 0.01;
            }
        }

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    /**
     * btnHomeClick
     * @description 홈 바로가기 클릭 이벤트 핸들러
     * @param e
     */
    btnHomeClick(e: MouseEvent) {
        e.preventDefault();

        of('.swipe', '#gnb', '.util', '#portfolio').pipe(
            map((selector: string) => document.querySelector(selector))
        ).subscribe((el: HTMLElement) => {
            el.classList.remove('v1');
            history.pushState(null, document.title, window.location.pathname + window.location.search); // hash 초기화
            setTimeout(() => window.scrollTo(0, 0), 0);
        });
    }

    /**
     * googleTagManagerInit
     * @description 구글 태그 매니저 초기화
     * @private
     */
    private googleTagManagerInit() {
        // 구글 태그 매니저 초기화 코드 head 추가
        const initScript = this.renderer.createElement('script');

        initScript.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${environment.GOOGLE_TAG_MANAGER_KEY}');`;

        this.renderer.appendChild(document.head, initScript);

        // 구글 태그 매니저 (noscript) 초기화 코드 body 추가
        const noscript = this.renderer.createElement('noscript');
        const iframe = this.renderer.createElement('iframe');

        this.renderer.setAttribute(iframe, 'src', `https://www.googletagmanager.com/ns.html?id=${environment.GOOGLE_TAG_MANAGER_KEY}`);
        this.renderer.setAttribute(iframe, 'height', '0');
        this.renderer.setAttribute(iframe, 'width', '0');
        this.renderer.setAttribute(iframe, 'style', 'display:none;visibility:hidden');
        this.renderer.appendChild(noscript, iframe);
        this.renderer.appendChild(document.body, noscript);
    }

    /**
     * googleTagInit
     * @description 구글 태그 (GA4) 초기화
     * @private
     */
    private googleTagInit() {
        // 구글 애널리틱스 스크립트 head 추가
        let script = this.renderer.createElement('script');

        script.async = true;
        script .src = `https://www.googletagmanager.com/gtag/js?id=${environment.GOOGLE_ANALYTICS_KEY}`;

        this.renderer.appendChild(document.head, script);

        // 구글 애널리틱스 초기화 스크립트 head 추가
        const initScript = this.renderer.createElement('script');

        initScript.text = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${environment.GOOGLE_ANALYTICS_KEY}');`;

        this.renderer.appendChild(document.head, initScript);
    }

    /** Host Event */
    // 리사이즈 호스트 이벤트 핸들러
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.setVh();
    }

    /** Life Cycle */
    ngAfterViewInit(): void {
        // 메타 태그 삭제
        // this.metaService.removeTag("name='google-site-verification'");

        // 메타 태그 추가
        // this.metaService.addTags([
        //     {property: 'og:type', content: 'website'},
        //     {property: 'og:title', content: environment.TITLE},
        //     {property: 'og:description', content: environment.OG_DESCRIPTION},
        //     {property: 'og:image', content: `${environment.DOMAIN}/assets/img/og-thumb.png`},
        //     {property: 'og:url', content: environment.DOMAIN}
        // ]);
        // this.metaService.addTag({name: 'google-site-verification', content: environment.GOOGLE_SITE_VERIFICATION_KEY});

        // 메타 태그 업데이트
        // this.metaService.updateTag({property: 'og:title', content: environment.TITLE});
        // this.metaService.updateTag({property: 'og:description', content: environment.OG_DESCRIPTION});
        // this.metaService.updateTag({property: 'og:image', content: `${environment.DOMAIN}/assets/img/og-thumb.png`});
        // this.metaService.updateTag({property: 'og:url', content: environment.DOMAIN});
        // this.metaService.updateTag({name: 'google-site-verification', content: environment.GOOGLE_SITE_VERIFICATION_KEY});


        // 타이틀 태그 설정
        // this.titleService.setTitle('새로운 제목');

        // GTM 초기화
        this.googleTagManagerInit();
        // GA4 초기화
        this.googleTagInit();

        // IOS 더블 탭 확대 이슈 방지
        FastClick.attach(document.body);
    }

    ngOnInit(): void {
        // 가로 스크롤 제거
        of('.home').pipe(
            map((selector: string) => document.querySelector(selector))
        ).subscribe((el: HTMLElement) => {
            el.classList.add('v1');
        });
    }
}
