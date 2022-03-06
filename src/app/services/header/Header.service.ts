import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export default class HeaderService {
    private setGnb = new Set<{[key: string]: string}>();
    private setUtil = new Set<{[key: string]: string}>();
    private setResume: {[key: string]: string;};

    get getGnbMenus(): Set<{[key: string]: string}> {
        return this.setGnb
            .add({name: 'features', url: '#features', title: '기능소개'})
            .add({name: 'licenses', url: '#licenses', title: '자격증'})
            .add({name: 'technique', url: '#technique', title: '스킬'})
            .add({name: 'workbench', url: '#workbench', title: '작업내역'})
            .add({name: 'portfolio', url: '#portfolio', title: '포트폴리오'})
            .add({name: 'development', url: '#development', title: 'UI개발'})
            .add({name: 'wiki', url: '#wiki', title: '위키소개'})
            .add({name: 'blog', url: '#blog', title: '블로그소개'});
    }

    get getUtilMenus(): Set<{[key: string]: string}> {
        return this.setUtil
            .add({name: 'introduction', url: 'assets/resume/introduction.html', title: '자기소개'})
            .add({name: 'personality', url: 'assets/resume/personality_type.html', title: '성격유형'})
            .add({name: 'github', url: 'https://github.com/woonyzzang?tab=repositories', title: '깃허브 저장소'})
            .add({name: 'blog', url: 'https://woonyzzang.github.io/', title: '블로그소개'});
    }

    get getResume(): {[key: string]: string} {
        return this.setResume = {name: 'resume', url: 'assets/resume/resume.html', title: '이력서'};
    }
}
