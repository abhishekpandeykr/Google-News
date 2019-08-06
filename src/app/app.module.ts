import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsServiceService } from './news-service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NewsContainerComponent ],
  bootstrap:    [ AppComponent ],
  providers: [NewsServiceService]
})
export class AppModule { }
