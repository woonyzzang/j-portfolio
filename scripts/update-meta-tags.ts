const fs = require('fs');
const path = require('path');
// import * as fs from 'fs';
// import * as path from 'path';

// JSON 환경 변수 파일 읽기
// const envPath = path.join(__dirname, './src/environments/environment.prod.json');
// const environment = JSON.parse(fs.readFileSync(envPath, 'utf-8'));

// TS 환경 변수 파일 읽기
// const { environment } = require('./src/environments/environment.prod.ts');
// import { environment } from '@env/environment.prod';

const indexPath = path.join(__dirname, '../dist/j-portfolio/index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf-8');

// 정규 표현식을 사용하여 <head> 내에 메타 태그 추가
// const metaTags = `
//     <meta property="og:type" content="website">
//     <meta property="og:title" content="${environment.TITLE}">
//     <meta property="og:description" content="${environment.OG_DESCRIPTION}">
//     <meta property="og:image" content="${environment.DOMAIN}/assets/img/og-thumb.png">
//     <meta property="og:url" content="${environment.DOMAIN}">
//     <meta name="google-site-verification" content="${environment.GOOGLE_SITE_VERIFICATION_KEY}">
// `;
const metaTags = `
    <meta property="og:type" content="website">
    <meta property="og:title" content="J Portfolio">
    <meta property="og:description" content="Website Portfolio of a FrontEnd Developer">
    <meta property="og:image" content="https://j-portfolio.koyeb.app/assets/img/og-thumb.png">
    <meta property="og:url" content="https://j-portfolio.koyeb.app">
    <meta name="google-site-verification" content="Vmm5-CK7dEIWxfToPDTUvTkVlaq8PYWrLK-HXl9SG8cv">
`.replace(/^[ \t]+/gm, '').trimStart();

// indexHtml = indexHtml.replace(/<head>([\s\S]*?)<\/head>/, `<head>$1${metaTags}</head>`);
indexHtml = indexHtml.replace(/(<title>[\s\S]*?<\/title>)/, `${metaTags}$1`);

fs.writeFileSync(indexPath, indexHtml);