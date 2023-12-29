import { Component, Inject, OnInit, inject } from '@angular/core';
import { WorkerDetailService } from 'src/app/shared/worker-detail.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms'
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_DATE_FORMATS } from '@angular/material/core';
@Component({
  selector: 'app-worker-detail-form',
  templateUrl: './worker-detail-form.component.html',
  styleUrls: ['./worker-detail-form.component.css'] ,
})
export class WorkerDetailFormComponent  implements OnInit{
  empForm : FormGroup ;
  constructor(private fb:FormBuilder , private service : WorkerDetailService  , private  dialogref :
    MatDialogRef<WorkerDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any)
  {
     this.empForm = this.fb.group({
      
       workerfirstame: '',
       workerlastName: '',
       workerbirthday:'',
       stardate:'',
        salary: '',
   })
    
  }
   ngOnInit(): void {
      this.empForm.patchValue(this.data)
   }
   onFormSubmit()
   {
     if(this.empForm.valid){
       if(this.data){
          this.service.updateWorker(<string>this.data.workerDetailId,this.empForm.value).subscribe({
             next :(val :any)=>{
                 alert("Worker Details Updated Succesfull") 
                 this.dialogref.close(true)
              },
              error :(err : any) =>{
                 alert(err)
                 console.log(this.data.id)
              }
           });
       }else{
          this.service.addWorker(this.empForm.value).subscribe({
             next :(val :any)=>{
                 alert("Worker Added Succesfull") 
                 this.dialogref.close(true)
              },
              error :(err : any) =>{
                 alert(err)
              }
           });
       }
      
      }
   }
  cancel(){
   console.log(this.empForm.value)
  }
 }
