import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class TechniqueService {
    private setFrontend = new Set<string>();
    private setBackend = new Set<string>();
    private setDatebase = new Set<string>();
    private mapTechniqueList = new Map<string, Set<string>>();

    constructor() {}

    get getFrontendSkils(): Set<string> {
        return this.setFrontend
            .add('HTML4.01')
            .add('XHTML1.0')
            .add('HTML5')
            .add('CSS2.1')
            .add('CSS3')
            .add('Less')
            .add('Sass')
            .add('Bootstrap')
            .add('Foundation')
            .add('Flash 2.0 ~ 3.0')
            .add('ECMAScript')
            .add('CoffeeScript')
            .add('TypeScript')
            .add('jQuery')
            .add('jQueryMobile')
            .add('Edge Animate')
            .add('Ext.js')
            .add('Require.js')
            .add('Backbone.js')
            .add('AngularJS')
            .add('Angular')
            .add('Rx.js')
            .add('React.js')
            .add('Vue.js')
            .add('Electron')
            .add('Grunt')
            .add('Gulp')
            .add('Webpack')
            .add('Vite')
            .add('Ionic')
            .add('ReactNative');
    }

    get getBackendSkils(): Set<string> {
        return this.setBackend
            .add('Node.js')
            .add('Express')
            .add('jade')
            .add('ejs')
            .add('Next.js')
            .add('Nuxt.js')
            .add('PHP')
            .add('.Net')
            .add('Blazor')
            .add('Java');
    }

    get getDatebaseSkils(): Set<string> {
        return this.setDatebase
            .add('MongoDB')
            .add('MySQL')
            .add('Oracle')
            .add('H2');
    }

    get getTechniqueList(): Map<string, Set<string>> {
        return this.mapTechniqueList
            .set('frontend', this.getFrontendSkils)
            .set('backend', this.getBackendSkils)
            .set('database', this.getDatebaseSkils);
    }
}
