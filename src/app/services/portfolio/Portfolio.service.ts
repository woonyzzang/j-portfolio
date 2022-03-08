import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import BaseRepository from '@repositorys/Base.repository';
import PortfolioModel from '@models/Portfolio.model';

@Injectable({
    providedIn: 'root'
})
export default class PortfolioService {
    constructor(private baseRepository: BaseRepository) {}

    get gePortfolioData(): Observable<PortfolioModel[]> {
        return this.baseRepository.getJSON('portfolio.json');
    }
}
