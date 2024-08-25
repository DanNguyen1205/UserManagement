import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { Router } from '@angular/router';


@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})

export class UserlistComponent {
  data: any[] = [] 
  displayedColumns: string[] = ['id', 'name', 'email', 'actions']

  constructor(private apiService: ApiService, private router: Router){
  }

  goToProfile(id: number){
    this.router.navigate(["/user-profile"], {queryParams: {id: id}});
  }

  //When our component is first initialized
  ngOnInit(){
    this.apiService.getAllUsers().subscribe((users) => {
      if (Array.isArray(users)) {
        this.data = users;  // Assign the array of data to the dataSource
      } else {
        console.error('Expected an array but got:', users);
      }
      
      this.data = users;
      console.log(users);
    })
  }
}
