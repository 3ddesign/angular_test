import {Injectable} from '@angular/core';
import { Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {AuthService} from './auth.service';

@Injectable()
export class HttpService {
  public constructor(private http: Http,
                     private authService: AuthService) {}

  public storeServers(servers: any []): any {
    // const headers: any = new Headers({'Content-Type11': 'application/json'});
    // return this.http.post('https://ang4test-f6666.firebaseio.com/data.json',
    //   servers,
    //   { 'headers': headers });

    // for rewrite data:
    const token: any = this.authService.getToken();
    return this.http.put('https://ang4test-f6666.firebaseio.com/data.json?auth=' + token,
      servers);
      // { 'headers': headers });
  }


  // map() - take a data and wrap it in the new observable
  public getServers(): any {
    const token: any = this.authService.getToken();
    return this.http.get('https://ang4test-f6666.firebaseio.com/data.json?auth=' + token)
      .map(
        (response: Response) => {
          const data: any = response.json();
          for (const server of data) {
            server.name = 'FETCHED_' + server.name;
          }
          return data;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something wrong');
        }
      );
  }

  public getAppName(): any {
    const token: any = this.authService.getToken();
    return this.http.get('https://ang4test-f6666.firebaseio.com/appName.json?auth=' + token)
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }
}
