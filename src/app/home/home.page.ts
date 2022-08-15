import {HttpClient} from '@angular/common/http';
import { Component, VERSION, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
filmes: Observable<any>;
  constructor(
    private router: Router,
    private http: HttpClient,
    public toastController: ToastController
    ) {}

    ngOnInit(){
this.filmes = this.http.get("https://swapi.dev/api/filmes");
    }

}
