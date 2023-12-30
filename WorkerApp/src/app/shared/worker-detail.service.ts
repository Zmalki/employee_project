import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { WorkerDetail } from './worker-detail.model';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WorkerDetailService {
  url: string = environment.apiBaseUrl + '/WorkerDetails'
  url1: string = environment.apiBaseUrl + '/WorkerDetails/'
  constructor(private http: HttpClient) { }
  //Create Date
  addWorker(data: any): Observable<any> {
    delete data.workerDetailId
    return this.http.post(this.url, data)
  }
  getAllWorker(): Observable<any> {
    return this.http.get(this.url);
  }
  //Delete Data 
  deleteWorker(id: any): Observable<any> {
    return this.http.delete(this.url1 + id);
  }
  //Update data
  updateWorker(id: string, date: any): Observable<any> {
    return this.http.put(this.url1 + id, date);
  }

}
