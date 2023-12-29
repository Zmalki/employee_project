import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { WorkerDetailFormComponent } from './workers-details/worker-detail-form/worker-detail-form.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  imports: [
    // ... other imports
    MatFormFieldModule,
  ],
  // ... other configurations
})
export class YourModule { }

@NgModule({
  declarations: [
    AppComponent,
    WorkerDetailFormComponent
  ],
  imports: [
    BrowserModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule ,
    MatToolbarModule ,
    MatButtonModule ,
    MatDialogModule ,
    MatSortModule ,
    MatPaginatorModule ,
    MatFormFieldModule ,
    MatInputModule ,
    MatIconModule ,
    FormsModule ,
    ReactiveFormsModule ,
    MatNativeDateModule ,
    MatDatepickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
