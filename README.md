# J Portfolio Client
> J 포트폴리오 <http://j-portfolio.herokuapp.com/>

## Angular SASS 설치
`node-sass` 패키지 모듈을 설치한다.
- <https://github.com/sass/node-sass>
``` bash
$ npm i -D node-sass
```

## Angular SASS 설정
`angular.json` 파일의 `.css` 부분을 `.scss`로 수정한다.
``` json
...
"styles": [
    "src/styles.scss"
],
...
```

scss 의 `@import` 구문을 사용을 할려면 `angular.json` 파일에 `stylePreprocessorOptions` 과 `includePaths` 를 추가한다. (원하는 경로 설정)
``` json
...
"styles": [
    "src/styles.scss"
],
"stylePreprocessorOptions": {
    "includePaths": [
        "src/scss"
    ]
},
...
```

## Angular Fontawesome 설치
`angular-fontawesome` 패키지 모듈을 설치한다.
- <https://github.com/FortAwesome/angular-fontawesome>

아이콘 검색은 <https://fontawesome.com/icons> 에서 확인
``` bash
$ npm i -S @fortawesome/fontawesome-svg-core
$ npm i -S @fortawesome/free-solid-svg-icons
$ npm i -S @fortawesome/angular-fontawesome
```

## Angular Custom Component 파일 네이밍 사용
기본적으로 angular는 컴포넌트 파일명을 변경하면 에러가 발생한다.

`tslint.json` 파일의 `rules` 안에 `component-class-suffix` 를 수정한다.
``` json
"rules": {
    ...
    "component-class-suffix": [true, "Component", "Controller", "View"],
    ...
}
```

### Angular 컴포넌트 생성
``` bash
$ ng g component {이름}
```

### Angular JSDoc 주석 사용
기본적으로 angular는 JSDoc 주석 패턴을 사용하면 에러가 발생한다.

`tslint.json` 파일의 `rules` 안에 `no-redundant-jsdoc` 를 수정한다.
``` json
"rules": {
    ...
    "no-redundant-jsdoc": true
    ...
}
```

### Angular import 구문 절대경로 사용
`tsconfig.app.json` 파일의 `compilerOptions` 의 `baseUrl` 을 추가한다.

- <https://stove99.github.io/javascript/2019/10/10/use-alias-path-in-typescropt/>
``` json
"compilerOptions": {
    ...
    "baseUrl": "./"
    ...
}
```

`tsconfig.json` 파일의 `compilerOptions` 의 `paths` 을 추가하고 필요한 것들을 선언한다.
``` json
"compilerOptions": {
    "baseUrl": "./",
    "paths": {
        "@app/*": ["src/app/*"],
        "@container/*": ["src/app/container/*"],
        "@components/*": ["src/app/components/*"],
        "@services/*": ["src/app/services/*"],
        "@libs/*": ["src/app/libs/*"],
        "@env/*": ["src/environments/*"],
        "@assets/*": ["src/assets/*"]
    },
    ...
}
```

### Angular jQuery 설치
`jquery` 패키지 모듈을 설치한다.
- <https://poiemaweb.com/angular-integrate-jquery-plugin>
``` bash
$ npm i -S jquery
```

### Angular jQuery 타입 정의 파일 설치
코드 에디터의 인텔리센스 기능을 사용하기 위해 jQuery 타입 정의 파일을 설치한다.

설치된 타입 정의 파일은 `node_modules/@types` 폴더에 설치되고 타입스크립트 컴파일러는 타입 정의 파일을 자동 반영한다.
``` bash
$ npm i -D @types/jquery
```

### Angular jQuery ReferenceError: jQuery is not defined 에러 대응
`import * as $ from 'jquery';` 선언 후 기존 jquery 플러그인 연동시 `jQuery is not defined` 에러가 나면 사용한다.
(`import * as $ from 'jquery';`) 는 삭제

`angular.json` 파일의 `scripts` 부분에 `jquery`를 추가한다.
(이 방식을 사용하면 index.html에 jQuery가 포함되므로 jQuery를 사용할 구성 요소 내에서 되도록 임포트하는 방식을 사용하도록 한다.)
``` json
"scripts": [
    "./node_modules/jquery/dist/jquery.min.js"
]
```

플러그인 관련 css 스타일은 `angular.json` 파일의 `styles` 부분에 추가한다.
``` json
"styles": [
    "src/styles.css",
    "./node_modules/slick-carousel/slick/slick.css",
    "./node_modules/slick-carousel/slick/slick-theme.css"
],
```

### Heroku에 Angular 9 앱을 배포하는 방법
- <https://medium.com/better-programming/how-to-deploy-your-angular-9-app-to-heroku-in-minutes-51d171c2f0d>
- <https://github.com/klement97/angular-heroku>

`express` 패키지를 설치한다.
``` bash
$ npm i -S express
```

`server.js` 파일을 생성 후 `angular.json` 파일의 `architect` > `build` > `options` > `outputPath` 경로의 싱크 확인 후 `<name-on-package.json>` 에 경로를 맵핑한다.
``` javascript
...
app.use(express.static(’./dist/<name-on-package.json>’));

app.get(’/*’, function(req, res) {
    res.sendFile(’index.html’, {root: 'dist/<name-on-package.json>/’}
);
...
```

실제 `server.js` 코드는 아래와 같다.

**server.js**
``` javascript
const express = require('express');

const app = express();

app.use(express.static('./dist/j-portfolio'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/j-portfolio/'}),
);

app.listen(process.env.PORT || 8080);
```

`package.json` 파일의 `scripts` > `start` 코드를 수정한다.
``` json
...
"scripts": {
    "ng": "ng",
    "__start__": "ng serve", # 원본
    "start": "node server", # 추가
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
},
...
```

`npm build` 명령어로 컴파일 하고 `npm start` 명령어로 로컬서버 실행 후 `127.0.0.1:8080` url 로 접속해서 확인해본다.
