import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  films: Observable<any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private api: ApiService,
    public toastController: ToastController) { }

  ngOnInit() {
    console.log('LoginPage - OnInit');
    this.films = this.http.get('https://swapi.dev/api/films');
    // this.films = this.api.getFilms();
  }

  ngOnDestroy() {
    console.log('LoginPage - OnDestroy');
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: `Erro ao consultar a API: ${erro.message}`,
      duration: 4000,
      color: 'danger',
      position: 'middle'
    });
    console.log(erro);
    toast.present();
    return null;
  }

  openDetails(film) {
    let split = film.url.split('/');
    console.log(split);
    let filmId = split[split.length - 1];
    this.router.navigateByUrl(`/filme-detalhe/${filmId}`);
  }

  ionViewWillEnter() {
    console.log('LoginPage - ViewWillEnter');
  }

  ionViewWillLeave() {
    console.log('LoginPage - ViewWillLeave');
  }
}

