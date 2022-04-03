import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCreditCard, faBuilding, faCalendar } from '@fortawesome/free-solid-svg-icons';

import LicensesService from '@services/licenses/Licenses.service';
import LicensesModel from '@models/Licenses.model';

@Component({
    selector: 'app-licenses',
    templateUrl: './licenses.view.html',
    styleUrls: ['./licenses.view.scss']
})
export class LicensesController implements OnInit {
    faCreditCard = faCreditCard as IconProp;
    faBuilding = faBuilding as IconProp;
    faCalendar = faCalendar as IconProp;

    // public licensesModel: LicensesModel[]; // 라이센스 모델
    public licensesModel$: Observable<LicensesModel[]>; // 라이센스 모델
    public dateFilter: string; // 라이센스 날짜 필터

    constructor(
        private licensesService: LicensesService
    ) {
        this.dateFilter = '';
    }

    ngOnInit(): void {
        // this.licensesService.getLicensesData.then((res) => {
        //     this.licensesModel = res;
        // });

        // this.licensesService.getLicensesData.subscribe((licenses: LicensesModel[]) => {
        //     this.licensesModel = licenses;
        // });

        this.licensesModel$ = this.licensesService.getLicensesData;
    }
}
