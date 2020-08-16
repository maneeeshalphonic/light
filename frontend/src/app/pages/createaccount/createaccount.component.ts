import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private fb:FormBuilder,private data:GetcontactsService,private routes:Router) { }
  user:FormGroup;
 ngOnInit(): void {
   this.user=this.fb.group({
    companydomain:[null],
    industry:[null],
    companyowner:[null],
    phone:[null],
    city:[null],
    state:[null],
    postalcode:[null],
    linkedin:[null],
    

   })
 }
 submit(){
   if(this.user.valid){
     console.log(this.user.value)
     this.data.setaccountsUser(this.user.value).subscribe(res=>{
       console.log("data submit success")
       this.routes.navigate(['/accounts'])
     })
   }
   console.log(this.user)
 }
}