import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../service/api.service';

@Component({
  selector: 'app-detali',
  templateUrl: './detali.component.html',
  styleUrls: ['./detali.component.less']
})
export class DetaliComponent implements OnInit {
  tabel1s: Array<any>;
  idFilm1: number;
  anAparitie: string;
  descriere: string;
  gen: string;
  nota: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get('/api/home').subscribe(res => {
      /*
      this.idFilm1 = res.idFilm1;
      this.anAparitie = res.anAparitie;
      this.descriere = res.descriere;
      this.gen = res.gen;
      this.nota = res.nota;
      */
      this.apiService = ;
    });
  }

}
