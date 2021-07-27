import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public data2: any[] = [
    {
      kind: "Hydroelectric",
      share: 0.175,
    },
    {
      kind: "Nuclear",
      share: 0.238,
    },
    {
      kind: "Coal",
      share: 0.118,
    },
    {
      kind: "Solar",
      share: 0.052,
    },
    {
      kind: "Wind",
      share: 0.225,
    },
    {
      kind: "Other",
      share: 0.192,
    },
  ];

  public labelContent(e: any): string {
    return e.category;
  }

  public cashFlowData = [
    {
      period: "Beginning\\nBalance",
      amount: 50000,
    },
    {
      period: "Jan",
      amount: 17000,
    },
    {
      period: "Feb",
      amount: 14000,
    },
    {
      period: "Mar",
      amount: -12000,
    },
    {
      period: "Q1",
      summary: "runningTotal",
    },
    {
      period: "Apr",
      amount: -22000,
    },
    {
      period: "May",
      amount: -18000,
    },
    {
      period: "Jun",
      amount: 10000,
    },
    {
      period: "Q2",
      summary: "runningTotal",
    },
    {
      period: "Ending\\nBalance",
      summary: "total",
    },
  ];

  public pointColor(point: any): string {
    const summary = point.dataItem.summary;
    if (summary) {
      return summary === "total" ? "#555" : "gray";
    }

    if (point.value > 0) {
      return "green";
    } else {
      return "red";
    }
  }
  
}
