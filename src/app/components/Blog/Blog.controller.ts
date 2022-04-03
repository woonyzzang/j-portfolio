import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

import HeaderService, { IGnbMenus } from '@services/header/Header.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.view.html',
    styleUrls: ['./blog.view.scss']
})
export class BlogController implements OnInit {
    faNewspaper = faNewspaper as IconProp;

    // public blogMenu: IMenus;
    public blogMenu$: Observable<IGnbMenus>; // 유틸메뉴

    constructor() {
        const headerService = new HeaderService();

        // this.blogMenu = [...headerService.getUtilMenus].find((menu) => menu.name === 'blog');

        this.blogMenu$ = from(headerService.getUtilMenus).pipe(
            filter((menu: IGnbMenus) => menu.name === 'blog')
        );
    }

    ngOnInit(): void {}
}
