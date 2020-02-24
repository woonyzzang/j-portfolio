import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhoneSquareAlt, faLeaf, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.view.html',
    styleUrls: ['./footer.view.scss']
})
export class FooterController implements OnInit {
    faEnvelope = faEnvelope;
    faPhoneSquareAlt = faPhoneSquareAlt;
    faLeaf = faLeaf;
    faInfoCircle = faInfoCircle;
    faMapMarkerAlt = faMapMarkerAlt;

    constructor() {}

    ngOnInit(): void {}
}
