import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import { AppRouterModule } from './app.router.module'; // 라우터
import { AppController as AppComponent } from '@container/App.controller';
import {
    HeaderComponent,
    FooterComponent,
    FeaturesComponent,
    LicensesComponent,
    TechniqueComponent,
    WorkbenchComponent,
    PortfolioComponent,
    DevelopmentComponent,
    WikiComponent,
    BlogComponent
} from './components';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FeaturesComponent,
        LicensesComponent,
        TechniqueComponent,
        WorkbenchComponent,
        PortfolioComponent,
        DevelopmentComponent,
        WikiComponent,
        BlogComponent,
        PortfolioComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        Ng2SearchPipeModule,
        FontAwesomeModule
        // AppRouterModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
