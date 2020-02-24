import { Component, OnInit } from '@angular/core';
import { faFileArchive, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-wiki',
    templateUrl: './wiki.view.html',
    styleUrls: ['./wiki.view.scss']
})
export class WikiController implements OnInit {
    faFileArchive = faFileArchive;
    faCheckSquare = faCheckSquare;

    constructor() {}

    ngOnInit(): void {}
}
