import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BaseRepository from '@repositorys/Base.repository';
import WorkbenchModel from '@models/Workbench.model';

@Injectable({
    providedIn: 'root'
})
export default class WorkbenchService {
    constructor(private baseRepository: BaseRepository) {}

    get getWorkbenchData(): Observable<WorkbenchModel[]> {
        return this.baseRepository.getJSON('workbench.json');
    }
}
