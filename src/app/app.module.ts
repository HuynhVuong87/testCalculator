import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import * as math from 'mathjs';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StorageServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
