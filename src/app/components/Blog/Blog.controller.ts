import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.view.html',
    styleUrls: ['./blog.view.scss']
})
export class BlogController implements OnInit {
    faNewspaper = faNewspaper;

    constructor() {}

    ngOnInit(): void {}
}
