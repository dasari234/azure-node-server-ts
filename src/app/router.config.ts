import {Routes} from '@angular/router';
import { AzureInfraComponent } from './azure-infra/azure-infra.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routesConfig:Routes = [
    {
        path: 'azure-infra',
        component: AzureInfraComponent,
        pathMatch: 'full'
    },
    { 
        path: '',
        component: MainContentComponent,
    },
    { path: '**', component: PageNotFoundComponent }
];