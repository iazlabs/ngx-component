import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CdsModule } from '@cds/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityIcons, uploadCloudIcon } from '@cds/core/icon';
import { NgxDropzoneModule } from '@azlabs/ngx-dropzone';
import { NgxIntlTelInputModule } from '@azlabs/ngx-intl-tel-input';
import { NgxSmartFormModule } from '@azlabs/ngx-smart-form';
import { HttpClientModule } from '@angular/common/http';

ClarityIcons.addIcons(uploadCloudIcon);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CdsModule,
    NgxIntlTelInputModule.forRoot(),
    NgxDropzoneModule.forRoot(),
    NgxSmartFormModule.forRoot({
      // Optional : Required only to get data dynamically from the server
      // Server configuration for dynamically loading
      // Select, Checkbox and Radio button from server
      serverConfigs: {
        api: {
          host: 'http://localhost:4200',
          // Custom path on the server else the default is used
          bindings: 'api/v2/bindings',
        },
      },
      // Path to the form assets
      // This path will be used the http handler to load the forms in cache
      formsAssets: '/assets/forms.json',
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
