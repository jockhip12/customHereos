import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';   // our custom service, see below
import { AppComponent } from './app.component';
import { HereosComponent } from './hereos/hereos.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpClientModule],
    declarations: [AppComponent, HereosComponent, HeroDetailComponent],
    providers: [AppService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule { }
