// Angular
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';

// Libs
import {Observable, of} from 'rxjs';

// App
import {environment} from '../../../environments/environment';
import * as sidebarItems from '../fakeBackend/sidebarItems.json';
import * as productList from '../fakeBackend/products.json';

const urls = [
  {
    method: 'GET',
    url: 'sidebarItems',
    json: sidebarItems,
  },
  {
    method: 'GET',
    url: 'productList',
    json: productList,
  }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO exclude assets/icons
    for (const element of urls) {
      if (request.url === element.url && request.method === element.method) {
        // console.log('request.method: ', request.method);
        // console.log('Loaded from json : ' + request.url);
        // console.log('body: ', element.json);
        return of(new HttpResponse({status: 200, body: (element.json as any).default}));
      }
    }
    console.log('Loaded from http call :' + request.url);
    return next.handle(
      request.clone({
        url: environment.apiBaseUrl + request.url,
      }),
    );
  }
}
