import { Component, OnInit } from '@angular/core';
import { GetcontactsService } from '../getcontacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private data:GetcontactsService,private routes:Router) { }
  accounts
  ngOnInit(): void {
    this.data.getaccounts().subscribe(res=>{
      console.log(res)
      this.accounts=res
  })
  }

  deleteAccount(id:any){
    console.log(id)
    this.data.deleteAccounts(id).subscribe(res=>{
      console.log(res)
      this.accounts=res
  })
    }
     edit(id:any){
       localStorage.setItem('accountid',id);
      this.routes.navigate(['/pages/editaccounts'])
      console.log(id)
     }
}
