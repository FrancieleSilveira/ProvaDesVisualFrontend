import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarFilmeComponent } from './components/views/filme/cadastrar-filme/cadastrar-filme.component';
import { ListarFilmeComponent } from './components/views/filme/listar-filme/listar-filme.component';

const routes: Routes = [
  {
      path: "",
      component: ListarFilmeComponent,
  },
  {
      path: "filme/listar",
      component: ListarFilmeComponent,
  },
  {
      path: "filme/cadastrar",
      component: CadastrarFilmeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
