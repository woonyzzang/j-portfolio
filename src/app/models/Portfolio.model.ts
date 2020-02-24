export default class PortfolioModel {
    category: string;
    link: string;
    imageUrl: string;
    name: string;
    title: string;
    company: string;
    year: string;
    start: string;
    end: string;
    // techSpec: {
    //     [key: string]: boolean
    // };
    techSpec: {
        access: boolean;
        respon: boolean;
        mobile: boolean;
        html5: boolean;
        css3: boolean;
        jquery: boolean;
    };
}
