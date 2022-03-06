import { Component, OnInit } from '@angular/core';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

import TechniqueService from '@services/technique/Technique.service';

@Component({
    selector: 'app-technique',
    templateUrl: './technique.view.html',
    styleUrls: ['./technique.view.scss']
})
export class TechniqueController implements OnInit {
    faFileCode = faFileCode;

    public techniqueList: Map<string, object>; // 테크닉 목록

    constructor(private techniqueService: TechniqueService) {
        this.techniqueList = this.techniqueService.getTechniqueList;
    }

    getKeys(map: any) {
        return Array.from(map.keys());
    }

    ngOnInit(): void {}
}
