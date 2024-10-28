// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/**
 * TCommonEnvironmentKey
 * @description: 공통 환경 변수 키 정의
 */
type TCommonEnvironmentKey =
  // ### 문서 > HEAD
  | 'TITLE'
  | 'OG_DESCRIPTION'
  | 'GOOGLE_TAG_MANAGER_KEY'
  | 'GOOGLE_SITE_VERIFICATION_KEY';

/**
 * TEnvironmentKey
 * @description: 개별 환경 변수 키 정의
 */
type TEnvironmentKey =
    | 'DOMAIN';

// 모든 키에 대해 readonly string 타입을 적용
type TReadonlyEnvironment = {
  readonly [K in TCommonEnvironmentKey | TEnvironmentKey]: string;
};

/** 환경 변수 타입 정의 */
interface IEnvironment extends TReadonlyEnvironment {
  production: boolean;
}

export const environment = {
  production: false
} as IEnvironment;

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
