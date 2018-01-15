import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';

import { HomeTabel} from './homeTabel';
import { HomeTabelListA} from './homeTabelList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})


export class HomeComponent implements OnInit {
  /*
  tabels: Tabel[];
  selectedTabel: Tabel;
  items: MenuItem[]; */
    homeTab = HomeTabelListA;
  constructor() {
  }

  ngOnInit() {
    /*    this.apiService.get('api/tabel/').subscribe(res => {
          this.tabels = res;
        });
        this.items = [
          { label: 'View', icon: 'fa-search', command: (event) => this.viewTabel(this.selectedTabel) },
          { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteTabel(this.selectedTabel) }
        ];
      }

      viewTabel(select: Tabel) {
        console.log(JSON.stringify(select));
      }
      deleteTabel(select: Tabel) {
        this.apiService.delete('api/tabel/' + select.idFilm).subscribe(res => {
          console.log(res);
        });
      }  */

  }
}

/*
interface Tabel {
  idFilm: number;
  denumireFilm: string;
  dataFilm: string;
  oraFilm: string;
  pretBilet: string;
}  */






