import { Component, OnInit } from '@angular/core';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private data:GetcontactsService,private routes:Router) { }
  contacts=[];
  ngOnInit(): void {
    this.data.getContacts().subscribe(res=>{
        console.log(res)
        this.contacts=res
    })
  }
  deleteContact(id:any){
  console.log(id)
  this.data.deleteContacts(id).subscribe(res=>{
    console.log(res)
    this.contacts=res
})
  }
   edit(id:any){
     localStorage.setItem('id',id);
    this.routes.navigate(['/pages/editcontacts'])
    console.log(id)
   }
}
