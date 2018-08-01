import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    // this.server = this.serversService.getServer(1);
    const val = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(
      val !== undefined ? Number(val) : 1
    );
    this.route.params.subscribe((params: Params) => {
      const val2 = params['id'];
      this.server = this.serversService.getServer(
        val !== undefined ? Number(val2) : 1
      );
    });
    console.log('On Server component - The server param ');
    console.log(val);
    console.log(this.server);
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
