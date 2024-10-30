import {Component, AfterViewInit, OnInit, Renderer2, HostListener} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable, of, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// import * as $ from 'jquery';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
        // this.setVh();
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
                    const $vcScrollerItems = document.querySelectorAll('.vc-scroller-items')[0];
                    const $vcScrollerFooter = document.querySelectorAll('.vc-scroller-footer')[0];
                    const $parentElement = $vcScrollerItems.parentNode;

                    if ($parentElement) {
                        // iOS/Safari 에서 input, select, textarea의 font-size가 16px 보다 작은경우 focus시 자동 확대 이슈 (커맨드 입력창 확대 방지)
                        for (const elem of Array.from(document.querySelectorAll('.vc-cmd-input')) as HTMLInputElement[]) {
                            elem['style'].cssText = `font-size: 16px`;
                        }

                        $parentElement.insertBefore($vcScrollerFooter, $vcScrollerItems);
                    }
                }
            });
        });
    }

    // /**
    //  * setVh
    //  * @description 브라우저 높이를 기준으로 뷰포트 높이(vh)를 픽셀 단위로 계산
    //  * @private
    //  */
    // private setVh() {
    //     const vh = window.innerHeight * 0.01;
    //
    //     document.documentElement.style.setProperty('--vh', `${vh}px`);
    // }

    // /** 리사이즈 이벤트 핸들러 */
    // @HostListener('window:resize', ['$event'])
    // onResize(event) {
    //     this.setVh();
    // }

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

        // GTM 초기화 코드
        const script = this.renderer.createElement('script');

        script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${environment.GOOGLE_TAG_MANAGER_KEY}');`;
        // script.async = true;

        this.renderer.appendChild(document.head, script);

        // GTM (noscript) 초기화 코드
        const noscript = this.renderer.createElement('noscript');
        const iframe = this.renderer.createElement('iframe');

        this.renderer.setAttribute(iframe, 'src', `https://www.googletagmanager.com/ns.html?id=${environment.GOOGLE_TAG_MANAGER_KEY}`);
        this.renderer.setAttribute(iframe, 'height', '0');
        this.renderer.setAttribute(iframe, 'width', '0');
        this.renderer.setAttribute(iframe, 'style', 'display:none;visibility:hidden');
        this.renderer.appendChild(noscript, iframe);
        this.renderer.appendChild(document.body, noscript);

        // IOS 더블 탭 확대 이슈 방지
        FastClick.attach(document.body);
    }

    ngOnInit(): void {
        // // 가로 스크롤 제거
        // // // $('#wrap .home').addClass('v1');
        // // document.querySelector('#wrap .home').classList.add('v1');
        //
        // const hash = location.hash;
        // // const sectionOffsetTop = [
        // //     $('#features').offset().top,
        // //     $('#licenses').offset().top,
        // //     $('#technique').offset().top,
        // //     $('#workbench').offset().top,
        // //     $('#portfolio').offset().top,
        // //     $('#development').offset().top,
        // //     $('#wiki').offset().top,
        // //     $('#blog').offset().top
        // // ];
        // const sectionOffsetTop = [
        //     (document.querySelector('#features') as HTMLElement).offsetTop,
        //     (document.querySelector('#licenses') as HTMLElement).offsetTop,
        //     (document.querySelector('#technique') as HTMLElement).offsetTop,
        //     (document.querySelector('#workbench') as HTMLElement).offsetTop,
        //     (document.querySelector('#portfolio') as HTMLElement).offsetTop,
        //     (document.querySelector('#development') as HTMLElement).offsetTop,
        //     (document.querySelector('#wiki') as HTMLElement).offsetTop,
        //     (document.querySelector('#blog') as HTMLElement).offsetTop
        // ];
        // // const $container = $('#container');
        // const $container = document.querySelector('#container');
        //
        // if (hash) {
        //     // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
        //     const $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');
        //
        //     $sections.forEach((section) => section.classList.add('v1'));
        //
        //     switch (hash) {
        //         case '#features':
        //             // $container.scrollTop(sectionOffsetTop[0]);
        //             $container.scrollTop = sectionOffsetTop[0];
        //         break;
        //         case '#licenses':
        //             // $container.scrollTop(sectionOffsetTop[1]);
        //             $container.scrollTop = sectionOffsetTop[1];
        //         break;
        //         case '#technique':
        //             // $container.scrollTop(sectionOffsetTop[2]);
        //             $container.scrollTop = sectionOffsetTop[2];
        //         break;
        //         case '#workbench':
        //             // $container.scrollTop(sectionOffsetTop[3]);
        //             $container.scrollTop = sectionOffsetTop[3];
        //         break;
        //         case '#portfolio':
        //             // $container.scrollTop(sectionOffsetTop[4]);
        //             $container.scrollTop = sectionOffsetTop[4];
        //         break;
        //         case '#development':
        //             // $container.scrollTop(sectionOffsetTop[5]);
        //             $container.scrollTop = sectionOffsetTop[5];
        //         break;
        //         case '#wiki':
        //             // $container.scrollTop(sectionOffsetTop[6]);
        //             $container.scrollTop = sectionOffsetTop[6];
        //         break;
        //         case '#blog':
        //             // $container.scrollTop(sectionOffsetTop[7]);
        //             $container.scrollTop = sectionOffsetTop[7];
        //         break;
        //     }
        // }

        // 가로 스크롤 제거
        of('.home').pipe(
            map((selector: string) => document.querySelector(selector))
        ).subscribe((el: HTMLElement) => {
            el.classList.add('v1');
        });

        const hasLocationHash$: Observable<boolean> = of(location.hash).pipe(
            map((hash: string) => hash.trim().length > 0)
        );

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
            switchMap(_ => (
                of(
                    (document.querySelector('#features') as HTMLElement),
                    (document.querySelector('#licenses') as HTMLElement),
                    (document.querySelector('#technique') as HTMLElement),
                    (document.querySelector('#workbench') as HTMLElement),
                    (document.querySelector('#portfolio') as HTMLElement),
                    (document.querySelector('#development') as HTMLElement),
                    (document.querySelector('#wiki') as HTMLElement),
                    (document.querySelector('#blog') as HTMLElement)
                )
            )),
            filter((elem: HTMLElement) => location.hash === `#${elem.id}`)
        ).subscribe(({offsetTop}) => {
            document.querySelector('#container').scrollTop = offsetTop;
        });
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
}
