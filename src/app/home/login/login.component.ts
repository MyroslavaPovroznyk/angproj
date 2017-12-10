import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public users=[
	{name: 'baba', password: '123'},
	{name: 'qwerty', password: 'qwerty'},
	{name: 'trtr', password: '1234'},
	{name: 'zaba', password: 'qaz'},
	];

  	constructor(private router:Router) { }

  	ngOnInit() 
  	{
  		console.log('hit');
  	}
  	Login(e) 
  	{

		e.preventDefault();
		console.log(e);
		var username=e.target.elements[0].value;
		var password=e.target.elements[1].value;
	    
	    let k=0;
	    for(let i=0;i<this.users.length;i++) {
		if(username==this.users[i].name &&  password==this.users[i].password){k=1;break;}
		
		else {k=0;}
	}
	
   
   	if(k==1){this.router.navigate(['welcome']);}
   	else
   	{alert("Error! Sorry, You're not authorized!");}	
}
}
