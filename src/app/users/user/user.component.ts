import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private router: ActivatedRoute, private route:Router) { }

  ngOnInit() {
    this.user={
      id:this.router.snapshot.params['id'],
      name:this.router.snapshot.params['name']
    };
  }
  onNavigate(){
    this.route.navigate(['/']);
  }
  onNavigatetoUser(){
    this.route.navigate(["/users"])
  }
}
