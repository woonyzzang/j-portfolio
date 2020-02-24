import { Component, OnInit } from '@angular/core';
import { faInbox, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import DevelopmentService from '@services/development/Development.service';

@Component({
    selector: 'app-development',
    templateUrl: './development.view.html',
    styleUrls: ['./development.view.scss']
})
export class DevelopmentController implements OnInit {
    faInbox = faInbox;
    faExternalLinkAlt = faExternalLinkAlt;

    public devs;
    public uis;

    constructor(private developmentService: DevelopmentService) {
        this.devs = this.developmentService.getDevs;
        this.uis = this.developmentService.getUIs;
    }

    ngOnInit(): void {}
}
