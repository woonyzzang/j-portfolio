import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BaseRepository from '@repositorys/Base.repository';

@Injectable({
    providedIn: 'root'
})
export default class PortfolioService {
    constructor(private baseRepository: BaseRepository) {}

    get gePortfolioData(): Observable<any> {
        return this.baseRepository.getJSON('portfolio.json');
    }
}
