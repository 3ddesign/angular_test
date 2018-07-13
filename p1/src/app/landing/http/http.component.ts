import {Component} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent {
  public compName: string = this.httpService.getAppName();
  public servers: any = [
    {
      name: 'Testserver',
      capacity: 10,
      id: 1
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: 2
    }
  ];

  public constructor(private httpService: HttpService) {
  }

  public onSave(): any {
    this.httpService.storeServers(this.servers)
      .subscribe(
        (response: any) => console.log(response),
        (error: any) => console.log(error)
      );
  }

  public onGet(): any {
    this.httpService.getServers()
      .subscribe(
        (servers: any []) => this.servers = servers,
        (error: any) => console.log(error)
      );
  }

  public onAddServer(name: string): any {
    this.servers.push({
      'name': name,
      capacity: 50,
      id: this.generateId()
    });
  }

  private generateId(): any {
    return Math.round(Math.random() * 10000);
  }
}
