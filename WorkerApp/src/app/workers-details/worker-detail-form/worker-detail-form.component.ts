import { Component, Inject, OnInit, inject } from '@angular/core';
import { WorkerDetailService } from 'src/app/shared/worker-detail.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import Swal from 'sweetalert2';
@Component({
   selector: 'app-worker-detail-form',
   templateUrl: './worker-detail-form.component.html',
   styleUrls: ['./worker-detail-form.component.css'],
})
export class WorkerDetailFormComponent implements OnInit {
   empForm: FormGroup;
   constructor(private fb: FormBuilder, private service: WorkerDetailService, private dialogref:
      MatDialogRef<WorkerDetailFormComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
      // Form initialization with default values.
      this.empForm = this.fb.group({
         workerfirstame: '',
         workerlastName: '',
         workerbirthday: '',
         stardate: '',
         salary: '',
      })

   }
   ngOnInit(): void {
      // Patch form values with data received through MatDialog.
      this.empForm.patchValue(this.data)
   }
   //add und Update worker
   onFormSubmit() {
      // Check if the form is valid before proceeding
      if (this.empForm.valid) {
         // Check if there is existing data
         if (this.data) {
            // Update worker
            this.service.updateWorker(<string>this.data.workerDetailId, this.empForm.value).subscribe({
               next: (val: any) => {
                  Swal.fire({
                     title: "Worker Details Updated Succesfull!",
                     text: "You clicked the button!",
                     icon: "success"
                  });
                  this.dialogref.close(true)
               },
               error: (err: any) => {
                  alert(err)
                  console.log(this.data.id)
               }
            });
         } else {
            // add worker 
            this.service.addWorker(this.empForm.value).subscribe({
               next: (val: any) => {
                  Swal.fire({
                     title: "Worker Added Succesfull!",
                     text: "You clicked the button!",
                     icon: "success"
                  });
                  this.dialogref.close(true)
               },
               error: (err: any) => {
                  alert(err)
               }
            });
         }

      }
   }
}
