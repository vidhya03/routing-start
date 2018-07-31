import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('on Edit server');
    console.log(this.route.queryParams);
    console.log(this.route.params);
    const id =
      this.route.snapshot.params['id'] !== undefined ? this.route.snapshot.params['id'] : 1;
    console.log('the id is ' + this.route.snapshot.params['id']);
    // console.log( this.route.fragment);
    this.server = this.serversService.getServer(Number(id));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
