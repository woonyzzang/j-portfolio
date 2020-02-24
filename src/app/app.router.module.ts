import { RouterModule, Routes } from '@angular/router';

import {
    FeaturesComponent,
    LicensesComponent,
    TechniqueComponent,
    WorkbenchComponent,
    PortfolioComponent,
    DevelopmentComponent,
    WikiComponent,
    BlogComponent
} from './components';

const AppRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'}, // 첫 화면
    {path: 'features', component: FeaturesComponent}, // http://localhost:4200/#/features
    {path: 'licenses', component: LicensesComponent},
    {path: 'technique', component: TechniqueComponent},
    {path: 'workbench', component: WorkbenchComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'development', component: DevelopmentComponent},
    {path: 'wiki', component: WikiComponent},
    {path: 'blog', component: BlogComponent},
    {path: '**', redirectTo: '/features', pathMatch: 'full'}, // 잘못된 URL을 사용했을때
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});
