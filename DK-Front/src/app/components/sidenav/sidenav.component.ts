import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
//es como un escuchador da tru or f si acalza la petici+on =>mdiaMstcher
  private mediaMatcher:MediaQueryList = matchMedia('(max-width:720px)');

  constructor() { }

  ngOnInit() {
  }

  pantallaSmall(){
    //matches return true
    return this.mediaMatcher.matches;
  }

}

