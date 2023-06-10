import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChartsModule } from '@carbon/charts-angular'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
