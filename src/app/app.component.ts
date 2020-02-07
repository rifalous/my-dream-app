import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  nama = 'Rivaldy Fauzan Mutaz';
  namaLengkap = 'Chopin';
  nyata = false;

  rubahNama(){
    this.namaLengkap = 'Bethoven'
  }
}
