import { Resolve, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';

interface Server {
  id: number;
  status: string;
  name: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}
  resolve(
    route: ActivatedRoute,
    state: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}
