/**
 * siblings
 * @description 형제 노드 찾기
 * @param {DOMNode} elem - DOM 셀렉터
 */
const siblings = (elem: HTMLElement): HTMLElement[] => [...(elem.parentElement as any).children].filter((node) => (node !== elem));

export {
    siblings
};
