import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss']
})
export class AppController implements OnInit {
    faHome = faHome;

    ngOnInit(): void {
        // 가로 스크롤 제거
        // $('#wrap .home').addClass('v1');
        document.querySelector('#wrap .home').classList.add('v1');

        const hash = location.hash;
        // const sectionOffsetTop = [
        //     $('#features').offset().top,
        //     $('#licenses').offset().top,
        //     $('#technique').offset().top,
        //     $('#workbench').offset().top,
        //     $('#portfolio').offset().top,
        //     $('#development').offset().top,
        //     $('#wiki').offset().top,
        //     $('#blog').offset().top
        // ];
        const sectionOffsetTop = [
            (document.querySelector('#features') as HTMLElement).offsetTop,
            (document.querySelector('#licenses') as HTMLElement).offsetTop,
            (document.querySelector('#technique') as HTMLElement).offsetTop,
            (document.querySelector('#workbench') as HTMLElement).offsetTop,
            (document.querySelector('#portfolio') as HTMLElement).offsetTop,
            (document.querySelector('#development') as HTMLElement).offsetTop,
            (document.querySelector('#wiki') as HTMLElement).offsetTop,
            (document.querySelector('#blog') as HTMLElement).offsetTop
        ];
        // const $container = $('#container');
        const $container = document.querySelector('#container');

        if (hash) {
            // $('#gnb, #wrap .swipe, #portfolio').addClass('v1');
            const $sections = document.querySelectorAll('#wrap .swipe, #gnb, #portfolio');

            $sections.forEach((section) => section.classList.add('v1'));

            switch (hash) {
                case '#features':
                    // $container.scrollTop(sectionOffsetTop[0]);
                    $container.scrollTop = sectionOffsetTop[0];
                    break;
                case '#licenses':
                    // $container.scrollTop(sectionOffsetTop[1]);
                    $container.scrollTop = sectionOffsetTop[1];
                    break;
                case '#technique':
                    // $container.scrollTop(sectionOffsetTop[2]);
                    $container.scrollTop = sectionOffsetTop[2];
                    break;
                case '#workbench':
                    // $container.scrollTop(sectionOffsetTop[3]);
                    $container.scrollTop = sectionOffsetTop[3];
                    break;
                case '#portfolio':
                    // $container.scrollTop(sectionOffsetTop[4]);
                    $container.scrollTop = sectionOffsetTop[4];
                    break;
                case '#development':
                    // $container.scrollTop(sectionOffsetTop[5]);
                    $container.scrollTop = sectionOffsetTop[5];
                    break;
                case '#wiki':
                    // $container.scrollTop(sectionOffsetTop[6]);
                    $container.scrollTop = sectionOffsetTop[6];
                    break;
                case '#blog':
                    // $container.scrollTop(sectionOffsetTop[7]);
                    $container.scrollTop = sectionOffsetTop[7];
                    break;
            }
        }
    }
}
