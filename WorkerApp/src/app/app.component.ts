import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { WorkerDetailService } from './shared/worker-detail.service';
import { WorkerDetailFormComponent } from './workers-details/worker-detail-form/worker-detail-form.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe],
})
export class AppComponent {
  title = 'WorkerApp';
  displayedColumn: string[] = [
    'workerDetailId',
    'workerfirstame',
    'workerlastName',
    'workerbirthday',
    'stardate',
    'salary',
    'action'
  ];
  dataSource!: MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // Component constructor
  constructor(public service: WorkerDetailService, private dialog: MatDialog, public datePipe: DatePipe) {
  }

  // Method to apply filter to the table data
  applyFilter(event: Event) {
    const filterValur = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValur.trim().toLocaleLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // Method to refresh the table data
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
  //Get data and display it in a table
  ngOnInit() {
    this.refreshTable();
  }
  // Method to delete a worker
  deleteWork(id: string) {
    this.service.deleteWorker(id).subscribe({
      next: (res) => {
        
        Swal.fire({
          title: "Worker deleted!",
          text: "You clicked the button!",
          icon: "success"
        });
        
        this.refreshTable(); //for auto refresh data 
      },
      error: console.log,
    })
  }
  // Method to open the dialog for adding/editing worker details und refreshTable
  openAddEditEmpform() {
    const dialogRef = this.dialog.open(WorkerDetailFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.refreshTable();
        }
      }
    })
  }
  // Method to open the dialog for editing worker details
  editWorkForm(data: any) {
    const dialogRef = this.dialog.open(WorkerDetailFormComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        this.refreshTable();
      },
    });
  }
}