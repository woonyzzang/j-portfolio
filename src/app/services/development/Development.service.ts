import { Injectable } from '@angular/core';

export interface IDevelopmentList {
    url: string;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export default class DevelopmentService {
    private setDev = new Set<IDevelopmentList>();
    private setUI = new Set<IDevelopmentList>();
    private mapDevelopmentList = new Map<string, Set<IDevelopmentList>>();

    get getDevs(): Set<IDevelopmentList> {
        return this.setDev
            .add({url: 'dev/cms/', name: '#CMS Theme | <HTML5, CSS3>'})
            .add({url: 'dev/listmap/listmap.xml', name: '#Markup Listmap | <HTML5, XML, XSL, CSS2.1, jQuery>'})
            .add({url: 'https://github.com/woonyzzang/j-generator-css3', name: '#J Generator CSS3 | <HTML5, CSS3, jQuery>'})
            .add({url: 'https://github.com/woonyzzang/j-html5-reference', name: '#J HTML5 Open Reference | <HTML5, CSS2.1, Ext.js, jQuery>'})
            .add({url: 'https://github.com/woonyzzang/j-prototype', name: '#J Prototype | <HTML5, CSS3, jQuery>'})
            .add({url: 'https://github.com/woonyzzang/j-draft-design', name: '#J Draft Design Gallery | <HTML5, CSS3, jQuery>'})
            .add({url: 'https://github.com/woonyzzang/j-responsive-design-view', name: '#J Responsive Design View | <HTML5, SCSS, ECMAScript6, React.js>'})
            .add({url: 'https://github.com/woonyzzang/j-memo', name: '#J Memo | <HTML5, Webpack, SCSS, ECMAScript6, React.js, Electron>'})
            .add({url: 'https://github.com/woonyzzang/j-hiworks-mail-notifier', name: '#J Hiworks Notifier | <HTML5, Webpack, Sass, ECMAScript6, Electron>'})
            .add({url: 'https://github.com/woonyzzang/j-core-module', name: '#J Core Module | <Webpack, Babel, ECMAScript6>'})
            .add({url: 'https://github.com/woonyzzang/j-core-editor', name: '#J Core Editor | <HTML5, Webpack, SCSS, ECMAScript6, React.js>'})
            .add({url: 'https://github.com/woonyzzang/j-cheat-sheet-api', name: '#J Cheat Sheet API | <HTML5, Webpack, SCSS, ECMAScript6, Vue.js, Vue-Router, Ant Design Vue>'});
    }

    get getUIs(): Set<IDevelopmentList> {
        return this.setUI
            .add({url: 'http://jsfiddle.net/woonyzzang/2B6hM/', name: 'css3 Graph'})
            .add({url: 'http://jsfiddle.net/woonyzzang/JFEAe/', name: 'checkbox list'})
            .add({url: 'http://jsfiddle.net/woonyzzang/dMVj9/', name: 'slide rolling banner'})
            .add({url: 'http://jsfiddle.net/woonyzzang/A4zVF/', name: 'modal popup'})
            .add({url: 'http://jsfiddle.net/woonyzzang/cmeNj/', name: 'login'})
            .add({url: 'http://jsfiddle.net/woonyzzang/fN2VN/', name: 'comment box'})
            .add({url: 'http://jsfiddle.net/woonyzzang/Afy62/', name: 'calender'})
            .add({url: 'http://jsfiddle.net/woonyzzang/uGJVR/', name: 'paginate'})
            .add({url: 'http://jsfiddle.net/woonyzzang/f47vQ/', name: 'tab list'})
            .add({url: 'http://jsfiddle.net/woonyzzang/XttEt/', name: 'thumbnail list'})
            .add({url: 'http://jsfiddle.net/woonyzzang/8H3DX/', name: 'table form'})
            .add({url: 'http://jsfiddle.net/woonyzzang/Xead3/', name: 'button'})
            .add({url: 'http://jsfiddle.net/woonyzzang/C7QrK/', name: 'tab menu'})
            .add({url: 'http://jsfiddle.net/woonyzzang/qJsqE/', name: 'navigation'})
            .add({url: 'http://jsfiddle.net/woonyzzang/Afy62/', name: 'side menu'});
    }

    get getDevelopmentList(): Map<string, Set<IDevelopmentList>> {
        return this.mapDevelopmentList
            .set('labs', this.getDevs)
            .set('ui', this.getUIs);
    }
}
