import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faPhoneSquareAlt, faLeaf, faInfoCircle, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.view.html',
    styleUrls: ['./footer.view.scss']
})
export class FooterController implements OnInit {
    faEnvelope = faEnvelope as IconProp;
    faPhoneSquareAlt = faPhoneSquareAlt as IconProp;
    faLeaf = faLeaf as IconProp;
    faInfoCircle = faInfoCircle as IconProp;
    faMapMarkerAlt = faMapMarkerAlt as IconProp;

    constructor() {}

    ngOnInit(): void {}
}
