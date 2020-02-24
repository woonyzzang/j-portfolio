import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { faCheckCircle, faCogs, faChartBar, faMobileAlt, faTabletAlt, faLaptop, faArrowsAltH, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '@libs/jquery.coveringBad';

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

        // @ts-ignore
        $('.covered-first').coveringBad({marginX: 0, marginY: 23, setX: 150, setY: 200});
    }
}
