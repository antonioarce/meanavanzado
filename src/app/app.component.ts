import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{

  title = 'NGZoo';
  emailContacto: string;

  ngOnInit(): void {
    // console.log(localStorage.getItem('emailContacto'));
    this.emailContacto = localStorage.getItem('emailContacto');
  }
  ngDoCheck(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    this.emailContacto  = null;
  }

}
