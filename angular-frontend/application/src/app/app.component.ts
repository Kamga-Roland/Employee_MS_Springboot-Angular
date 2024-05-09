import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { EmployeeListComponent } from "./employee-list/employee-list.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EmployeeListComponent, RouterModule]
})
export class AppComponent {
  title = 'application';
}
