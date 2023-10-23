import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Open Door Suites';

  constructor(private router: Router){}

  public displayTenantList(){
    this.router.navigate(['list-tenants']);
  }
}
