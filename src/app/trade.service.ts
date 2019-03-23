import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Trade } from './trade';
@Injectable({
  providedIn: 'root'
})
export class TradeService {
url="https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=BU2N9M0SYP8Z2DM7"
  constructor( private http: HttpClient) { }

  /** GET heroes from the server */
 getTrade(): Observable<Trade[]> {
   return this.http.get<Trade[]>(this.url);
}
