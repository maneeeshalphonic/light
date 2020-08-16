import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-editaccounts',
  templateUrl: './editaccounts.component.html',
  styleUrls: ['./editaccounts.component.css']
})
export class EditaccountsComponent implements OnInit {

  constructor(private fb:FormBuilder,private data:GetcontactsService,private routes:Router) { }
  user:FormGroup;
  id:any;
 ngOnInit(): void {
   this.user=this.fb.group({
     id:[""],
    companydomain:[null],
    industry:[null],
    companyowner:[null],
    phone:[null],
    city:[null],
    state:[null],
    postalcode:[null],
    linkedin:[null],
    

   })
   this.id= localStorage.getItem('accountid');

 
   this.data.getaccountsById(this.id).subscribe(res=>{
     console.log(res)
     this.user.setValue(res);
  
     
 })
 }
 submit(){
   if(this.user.valid){
     console.log(this.user.value)
     this.data.seteditaccounts(this.user.value,this.id).subscribe(res=>{
       console.log("data submit success")
       this.routes.navigate(['/accounts'])
     })
   }
   console.log(this.user)
 }
}
