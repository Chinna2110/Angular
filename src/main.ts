import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// interface User {
//   name: string;
//   age: number;
// }


// export class App1Module {
  
//   user : User = {
//     name: 'RIoRIo',
//     age: 22
//   }
// }


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
