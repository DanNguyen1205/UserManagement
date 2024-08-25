import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [
    MatCard, MatCardModule, 
    MatIconModule, MatButtonModule, 
    MatListModule, MatDividerModule,
    FlexLayoutModule, CommonModule
  ],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.scss'
})
export class UserprofileComponent {
  user: any = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router){
  }

  goBackUserList(){
    this.router.navigate(["/userlist"]);
  }

  //When our component is first initialized
  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.apiService.getUser(id).subscribe((user) => {
        this.user = user;
        console.log(user);
      })

    });
  }


}
