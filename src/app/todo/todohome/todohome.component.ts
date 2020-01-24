import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';


export function internalEmail(control:AbstractControl){ 
  let email:string = control.value;
  if(email.lastIndexOf("heraizen.com") != -1){
        return null;
  }else{
      return {domain:true};
  }
}

@Component({
  selector: 'app-todohome',
  templateUrl: './todohome.component.html',
  styleUrls: ['./todohome.component.css']
})
export class TodohomeComponent implements OnInit {

str = "Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus ipsam unde corrupti tempore delectus ullam placeat rerum earum nam, libero quos magni repellendus distinctio dolorem consequuntur, ducimus officia cupiditate at. sit amet consectetur, adipisicing elit. Necessitatibus ipsam unde corrupti tempore delectus ullam placeat rerum earum nam, libero quos magni repellendus distinctio dolorem consequuntur, ducimus officia cupiditate at.";
todos:Todo[] = [
    {'title':'Java8 in Action','description':this.str,status:false},
    {'title':'Buy a watch','description':'Before my daughter birthday',status:false},
    {'title':'Pack things','description':'Before 24-01-2020 visit MITE',status:false}
]
  
  todoForm:FormGroup;
  regForm:FormGroup;
  user:User;
  flag:boolean = true;
  users : User[] = [
    {"username":"Krish","email":"krish.t@heraizen.com"},
    {"username":"Mahesh","email":"mahesh.cs@heraizen.com"},
    {"username":"Ramesh","email":"ramesh.n@heraizen.com"}
  ];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
      this.todoForm = this.fb.group({
        title:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
        description:['',Validators.required,Validators.minLength(5)],
        status:['',Validators.required]        
      })
      this.regForm = this.fb.group({
          'username':['',[Validators.required,Validators.minLength(5)]],
          'email':['',[Validators.required,Validators.email,internalEmail]]
      })
    
  }
  onSubmit(){
     let title = this.todoForm.get('title').value;
     let description = this.todoForm.get('description').value;
     let status = this.todoForm.get('status').value;
     let todo:Todo = {'title':title,'description':description,'status':status};
     this.todos.push(todo);
     this.todoForm.reset();
  }

  OnRegFormSumit(){
    this.user = this.regForm.getRawValue();
    console.log(this.user);
    this.regForm.reset();
  }

  editUser(user){
    this.flag = !this.flag; 
    this.regForm.setValue({
      username:user.username,
      email:user.email
    });
  }

  checkStatus(){
    return this.flag;
  }
  get title(){
     return this.todoForm.get('title');
  }
  get description(){
    return this.todoForm.get('description');
  }
  get status(){
    return this.todoForm.get('status');
  }

  get username(){
    return this.regForm.get("username");
  }
  get email(){
    return this.regForm.get("email");
  }
  
}
