import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class ChatsrvService {
  url: string = environment.url + 'api/socket';

  constructor(private http: HttpClient) { }

  post(data: Message) {
    return this.http.post(this.url, data)
      .pipe(map((data: Message) => { return data; }));
  }

}
