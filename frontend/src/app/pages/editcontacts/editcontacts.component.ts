import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-editcontacts',
  templateUrl: './editcontacts.component.html',
  styleUrls: ['./editcontacts.component.css']
})
export class EditcontactsComponent implements OnInit {

  constructor(private fb:FormBuilder,private data:GetcontactsService,private routes:Router) { }
  user:FormGroup;
  id:String;
 ngOnInit(): void {
  this.user=this.fb.group({
    id:[""],
   name:[""],
   title:[""],
   organistion:[""],
   facebookid:[""],
   email:[""],
   phone:[""],
 
 }) 
 this.id= localStorage.getItem('id');

 
  this.data.getContactsById(this.id).subscribe(res=>{
    console.log(res.email)
    this.user.setValue(res);
 
    
})
 

 }
 submit(){
   if(this.user.valid){
     console.log(this.user.value)
     this.data.seteditUser(this.user.value,this.id).subscribe(res=>{
       console.log("data submit success")
       this.routes.navigate(['/list'])
     })
   }
   console.log(this.user)
 }

}
