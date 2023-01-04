import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private afAuth : AngularFireAuth) {
    this.afAuth.authState.subscribe((x) => console.log(x));
   }

  ngOnInit(): void {
  }

  logout = () => {
    this.afAuth.signOut();
  }

}
