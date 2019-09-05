import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {observable, Observable, throwError} from 'rxjs';                                        // RxJS 6
// import {ErrorObservable} from 'rxjs/observable/ErrorObservable';                             // RxJS 5 or lower
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import {API_URL} from '../env';
import {Playbook} from './playbook.model';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PlaybookApiService {

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    // return Observable.throw(err.message || 'Error: Unable to complete request.');         // RxJS 5 or lower
    return throwError(err.message || 'Error: Unable to complete request.');            // RxJS 6
  }

  // GET Playbooks
  getPlaybooks(): Observable<Playbook> {
    return this.http.get<Playbook>(`${API_URL}/playbooks`, httpOptions);
 }


  // Angular 4 - 7
  // getPlaybooks(): Observable<Playbook[]> {
  //   return this.http
  //     .get(`${API_URL}/playbooks`)
  //     .
  //     // .catch(PlaybookApiService._handleError);
  // }
}
