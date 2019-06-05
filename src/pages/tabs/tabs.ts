import { Component } from '@angular/core';

import { PerfilPage } from '../perfil/perfil';
import { ReportesPage } from '../reportes/reportes';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ReportesPage;
  tab3Root = PerfilPage;

  constructor() {

  }
}
