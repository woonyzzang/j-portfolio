import { Component, OnInit } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
// import * as $ from 'jquery';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-root',
    templateUrl: './app.view.html',
    styleUrls: ['./app.view.scss']
})
export class AppController implements OnInit {
    faHome = faHome as IconProp;

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
        of('#wrap', '.home').pipe(
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
                of('#wrap', '.swipe', '#gnb', '#portfolio').pipe(
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
}
