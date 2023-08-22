import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { ReadMangaComponent } from './read-manga/read-manga.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaginaInicialComponent,
    AboutComponent,
    PersonComponent,
    ReadMangaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
