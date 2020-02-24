export default class WorkbenchModel {
    year: number;
    project: [
        {
            title: string;
            start: string;
            end: string;
            role: string;
            works: {
                guide: boolean;
                markup: boolean;
                uidev: boolean;
                frontdev: boolean;
                backdev: boolean;
            };
            skill: [string];
        }
    ];
}
