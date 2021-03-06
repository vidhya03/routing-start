import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
      console.log(this.server);
    });
    // this.server = this.serversService.getServer(1);
    // const val = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(val );
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+ params['id']);
    // });
    // console.log('On Server component - The server param ');
    // console.log(val);

  }
  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve'
    }); // preserve query parameter
    // this.router.navigate(['edit'], { relativeTo: this.route }); // relative path
    // we can also use absolute path
    // this.router.navigate(['/servers', this.server.id, 'edit']);
  }
}
