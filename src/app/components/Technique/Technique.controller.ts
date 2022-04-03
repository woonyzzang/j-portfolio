import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

import { mapKeys } from '@utils/helper';
import TechniqueService from '@services/technique/Technique.service';

@Component({
    selector: 'app-technique',
    templateUrl: './technique.view.html',
    styleUrls: ['./technique.view.scss']
})
export class TechniqueController implements OnInit {
    faFileCode = faFileCode as IconProp;

    public techniqueList: Map<string, Set<string>>; // 테크닉 목록

    constructor(
        private techniqueService: TechniqueService
    ) {
        this.techniqueList = this.techniqueService.getTechniqueList;
    }

    getTechKeys(set: Set<string>) {
        return mapKeys(set);
    }

    ngOnInit(): void {}
}
