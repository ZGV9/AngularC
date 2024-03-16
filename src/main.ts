import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'sweetalert2/src/sweetalert2.scss'


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  