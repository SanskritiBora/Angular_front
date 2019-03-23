import { Component, OnInit } from '@angular/core';
import { Hero } from './trade';
import { TradeService } from './trade.service';
@Component({
  selector: 'app-trade-list',
  templateUrl: './trade-list.component.html',
   providers: [ TradeService ]
  styleUrls: ['./trade-list.component.css']
})
export class TradeListComponent implements OnInit {
trades : Trade[];
  constructor(private tradeService: TradeService) { }

  ngOnInit() {
    this.getTrade();
  }
  getTrades(): void {
      this.tradeService.getTrade()
        .subscribe(trades => this.trades = trades);
    }
}
