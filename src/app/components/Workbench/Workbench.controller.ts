import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import WorkbenchModel from '@models/Workbench.model';
import WorkbenchService from '@services/workbench/Workbench.service';

@Component({
    selector: 'app-workbench',
    templateUrl: './workbench.view.html',
    styleUrls: ['./Workbench.view.scss']
})
export class WorkbenchController implements OnInit {
    faCalendarAlt = faCalendarAlt;

    // public workbenchData: Array<{project: string; start: string; end: string; role: string; works: {[key: string]: string}; skills: []}>[]; // 워크벤치 json 데이터
    public workbenchModel$: WorkbenchModel[]; // 워크벤치 모델
    public searchText: string; // 워크벤치 검색 필터

    constructor(private workbenchService: WorkbenchService) {
        this.searchText = '';
    }

    ngOnInit(): void {
        this.workbenchService.getWorkbenchData.subscribe((data) => {
            this.workbenchModel$ = data;
        });
    }
}
