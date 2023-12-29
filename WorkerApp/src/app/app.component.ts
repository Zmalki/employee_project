import { Component , OnInit, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http" ;
import { environment } from 'src/environments/environment';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { WorkerDetailService } from './shared/worker-detail.service';
import { WorkerDetailFormComponent } from './workers-details/worker-detail-form/worker-detail-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  providers: [DatePipe],
})
export class AppComponent {
  title = 'WorkerApp';
  displayedColumn : string[] = [
    'workerDetailId' ,
    'workerfirstame' ,
     'workerlastName' ,
      'workerbirthday' ,
      'stardate',
      'salary',
      'action'
    ] ;
    dataSource!: MatTableDataSource<any>
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  constructor(public service: WorkerDetailService , private dialog:MatDialog, public datePipe: DatePipe ){
  }
  
  
  applyFilter(event : Event){
    const filterValur = (event.target as HTMLInputElement).value ;
    this.dataSource.filter = filterValur.trim().toLocaleLowerCase();
    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }
  refreshTable() { 
    this.service.getAllWorker()
      .subscribe({
        next: (res) => {
          console.log(res)
           this.dataSource = new MatTableDataSource(res);
           this.dataSource.sort = this.sort;
           this.dataSource.paginator = this.paginator;
        }
      })
  }
  ngOnInit() {
    this.refreshTable() ;
  }
  deleteWork(id:string)
  {
    this.service.deleteWorker(id).subscribe({
      next :(res)=>{
        alert("Worker deleted")
        this.refreshTable() ; //for auto refresh data 
      },
      error : console.log ,
    })
  }
  openAddEditEmpform(){
   const dialogRef =  this.dialog.open(WorkerDetailFormComponent);
    dialogRef.afterClosed().subscribe({
      next :(val)=>{
        if(val){
          this.refreshTable();
        }
      }
    })
  }
  editWorkForm(data:any){
    this.dialog.open(WorkerDetailFormComponent ,{
      data ,
    })
  }
}
