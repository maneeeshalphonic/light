import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-addcontacts',
  templateUrl: './addcontacts.component.html',
  styleUrls: ['./addcontacts.component.css']
})
export class AddcontactsComponent implements OnInit {

  constructor(private fb:FormBuilder,private data:GetcontactsService,private routes:Router) { }
  user:FormGroup;
  id:any;
 ngOnInit(): void {
 this.id= localStorage.getItem('id');
 if(this.id){
   
 }
   this.user=this.fb.group({
     name:[null,Validators.required],
     title:[null],
     organistion:[null],
     facebookid:[null],
     email:[null],
     phone:[null],

   })
 }
 submit(){
   if(this.user.valid){
     console.log(this.user.value)
     this.data.setUser(this.user.value).subscribe(res=>{
       console.log("data submit success")
       this.routes.navigate(['/pages/contacts'])
     })
   }
   console.log(this.user)
 }
}
