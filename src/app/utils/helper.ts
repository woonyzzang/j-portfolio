/**
 * objectKeys
 * @description object 객체의 키값으로 데이터 순회
 * @param {Object} obj - 객체 데이터
 * @returns {Object} 객체 데이터의 키값을 반환
 */
const objectKeys = (obj: object): object => Object.keys(obj);

/**
 * mapKeys
 * @description Map 객체의 키값으로 데이터 순회
 * @param {*} any - 객체 데이터
 * @returns {string[]} 문자열 배열 반환
 */
const mapKeys = (obj: any): string[] => Array.from(obj.keys());

export {
    objectKeys,
    mapKeys
};
