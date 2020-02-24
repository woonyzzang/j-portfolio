import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BaseRepository from '@repositorys/Base.repository';

@Injectable({
    providedIn: 'root'
})
export default class LicensesService {
    constructor(private baseRepository: BaseRepository) {}

    // get getLicensesData(): Promise<any> {
    //     return this.baseRepository.getJSON('licenses.json');
    // }

    get getLicensesData(): Observable<any> {
        return this.baseRepository.getJSON('licenses.json');
    }
}
