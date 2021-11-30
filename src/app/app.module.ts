import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { AjustesPage } from "./pages/ajustes/ajustes.page";
// import { Ajustes2Page } from "./pages/ajustes2/ajustes2.page";
// import { HomePage } from "./pages/home/home.page";
// import { ModalPage } from "./pages/modal/modal.page";
// import { Pagina2Page } from "./pages/pagina2/pagina2.page";
// import { Pagina3Page } from "./pages/pagina3/pagina3.page";
// import { PrincipalPage } from "./pages/principal/principal.page";
// import { TabsPage } from "./pages/tabs/tabs.page";

@NgModule({
  declarations: [AppComponent, /* AjustesPage, Ajustes2Page, HomePage, ModalPage, Pagina2Page, Pagina3Page, PrincipalPage, TabsPage */],
  entryComponents: [/* AjustesPage, Ajustes2Page, HomePage, ModalPage, Pagina2Page, Pagina3Page, PrincipalPage, TabsPage */],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
