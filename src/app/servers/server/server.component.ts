import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  id:number = 0;
  server: {id: number, name: string, status: string};
  constructor(private serversService: ServersService, private rooter:ActivatedRoute) { }

  ngOnInit() {
    const id:number=+this.rooter.snapshot.params['id'];
    this.rooter.params.subscribe((param:Params)=>{    this.server = this.serversService.getServer(+param['id']);})
  }
}
