import { Component, OnInit } from '@angular/core';
import { faCreditCard, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';

import LicensesModel from '@models/Licenses.model';
import LicensesService from '@services/licenses/Licenses.service';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.view.html',
    styleUrls: ['./licenses.view.scss']
})
export class LicensesController implements OnInit {
    faCreditCard = faCreditCard;
    faBuilding = faBuilding;
    faCalendar = faCalendar;

    public licensesModel$: LicensesModel[]; // 라이센스 모델
    public dateFilter: string; // 라이센스 날짜 필터

    constructor(private licensesService: LicensesService) {
        this.dateFilter = '';
    }

    ngOnInit(): void {
        // this.licensesService.getLicensesData.then((res) => {
        //     this.licensesModel$ = res;
        // });

        this.licensesService.getLicensesData.subscribe((data) => {
            this.licensesModel$ = data;
        });
    }
}
