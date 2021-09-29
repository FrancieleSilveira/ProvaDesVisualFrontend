import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarFilmeComponent } from './components/views/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './components/views/filme/listar-filme/listar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarFilmeComponent,
    ListarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
