import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HelloWorldService {
  constructor(private http: HttpClient) {}

  getHelloWorld() {
    return this.http.get<{ hello: string }>(environment.beMs);
  }
}
