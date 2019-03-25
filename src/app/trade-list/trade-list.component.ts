import { Component, OnInit } from '@angular/core';
import { Trade } from '../trade';
// import { TradeService } from '../trade.service';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
	selector: 'app-trade-list',
	templateUrl: './trade-list.component.html',
	styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {
trades : Trade[];
	constructor(private http: HttpClient) { }

	ngOnInit() {
		this.getTrades();
	}
	getTrades(): void {
			this.http.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=5min&apikey=demo")
			.subscribe(data =>
				console.log(data)
			);
		}
}
