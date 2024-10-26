import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { toArray } from 'rxjs/operators';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faInbox, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import DevelopmentService, { IDevelopmentList } from '@services/development/Development.service';

@Component({
    selector: 'app-development',
    templateUrl: './development.view.html',
    styleUrls: ['./development.view.scss']
})
export class DevelopmentController implements OnInit {
    faInbox = faInbox as IconProp;
    faExternalLinkAlt = faExternalLinkAlt as IconProp;

    // public devs;
    // public uis;
    public devs$: Observable<IDevelopmentList[]>; // R&D 개발 리스트
    public uis$: Observable<IDevelopmentList[]>; // UI 리스트

    constructor(
        private developmentService: DevelopmentService
    ) {
        // this.devs = this.developmentService.getDevs;
        // this.uis = this.developmentService.getUIs;
        this.devs$ = from(this.developmentService.getDevs).pipe(toArray());
        this.uis$ = from(this.developmentService.getUIs).pipe(toArray());
    }

    ngOnInit(): void {}
}
