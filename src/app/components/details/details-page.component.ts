import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

import { SpinnerService } from 'src/app/services/spinner.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-details',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {

  id!:number;
  user!:User;
  data!:User[];

  constructor(
    private userService: UserService,
    public spinnerService: SpinnerService,
    private route:ActivatedRoute,
    private router:Router

  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getUser();
  }

 
  getUser(){
    this.userService.getUserById(this.id).subscribe((user:any)=>{
      this.user = user;
    })
  }

  backToHomePage(){
    this.router.navigate(['/users'])
  }

}
