import { Component, OnInit } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import HeaderService from '@services/header/Header.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.view.html',
    styleUrls: ['./blog.view.scss']
})
export class BlogController implements OnInit {
    faNewspaper = faNewspaper;

    public blogMenu: {[key: string]: string};

    constructor() {
        const headerService = new HeaderService();

        this.blogMenu = [...headerService.getUtilMenus].find((menu) => menu.name === 'blog');
    }

    ngOnInit(): void {}
}
