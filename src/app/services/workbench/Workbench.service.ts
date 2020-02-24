import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BaseRepository from '@repositorys/Base.repository';

@Injectable({
    providedIn: 'root'
})
export default class WorkbenchService {
    constructor(private baseRepository: BaseRepository) {}

    get getWorkbenchData(): Observable<any> {
        return this.baseRepository.getJSON('workbench.json');
    }
}
