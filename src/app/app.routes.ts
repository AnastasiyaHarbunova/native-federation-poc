import { loadRemoteModule } from "@angular-architects/native-federation";
import { Routes } from '@angular/router';
import { WrapperComponent } from "./wrapper/wrapper.component";

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => loadRemoteModule({
      remoteName: 'angular17-app',
      exposedModule: './Component',
    }).then((m) => m.AppComponent),
  },
  // {
  //   path: 'test',
  //   component: WrapperComponent,
  //   data: {
  //     config: {
  //       remoteName: 'angular17-app',
  //       exposedModule: './web-components',
  //       elementName: 'mfe2-root',
  //     },
  //   },
  // },
];
