import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as $ from 'jquery';
import { faCheckCircle, faCogs, faChartBar, faMobileAlt, faTabletAlt, faLaptop, faArrowsAltH, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@libs/jquery.coveringBad';

interface JQuery {
    coveringBad(options: {
        setY?: number; // 20 | Handle's distance from top and bottom
        setX?: number; // 20 | Handle's distance from left and right
        marginX?: number; // 30 | Defulat location for handle from left
        marginY?: number; // 150 | Defulat location for handle from top
        direction?: string // "horizontal" | would be horizontal/vertical
    }): void;
}

@Component({
    selector: 'app-features',
    templateUrl: './features.view.html',
    styleUrls: ['./features.view.scss']
})
export class FeaturesController implements OnInit {
    faCheckCircle = faCheckCircle;
    faCogs = faCogs;
    faChartBar = faChartBar;
    faMobileAlt = faMobileAlt;
    faTabletAlt = faTabletAlt;
    faLaptop = faLaptop;
    faArrowsAltH = faArrowsAltH;
    faChevronLeft = faChevronLeft;
    faChevronRight = faChevronRight;

    constructor() {
        // console.log($);
    }

    ngOnInit(): void {
        // if (!Object.is($, 'undefined')) {
        //     // jQuery is loaded => print the version
        //     alert($.fn.jquery);
        // } else {
        //     // jQuery was not loaded
        //     console.error('No jquery');
        // }

        // (<any>$('.covered-first')).coveringBad({marginX: 0, marginY: 23, setX: 150, setY: 200});

        of('.covered-first').pipe(
            map((selector: string) => (<any>$(selector)))
        ).subscribe((elem: JQuery) => {
            elem.coveringBad({marginX: 0, marginY: 23, setX: 150, setY: 200});
        });
    }
}
