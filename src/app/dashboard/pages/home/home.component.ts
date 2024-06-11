import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../../models/userModel';
import { UserService } from '../../../services/user.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {

  userForm: FormGroup;
  users: User[]=[];
 
  constructor(
    private userService: UserService,
    private fb: FormBuilder
  ){
    this.userForm= this.fb.group({
      nombre:['', Validators.required],
      edad: [0, Validators.required]
    });

  }

  ngOnInit(): void {
    this.listarUser();
  }

  createUser(){
    if(this.userForm.valid){
      
      this.userService.createUser(this.userForm.value).subscribe({
        next: (response)=>{
          console.log('Usuario creado con Id: ', response.id);
          this.userForm.reset();
          this.listarUser();

        },
        error: (error)=>{
          console.error('Error al crear usuario: ', error);

        }
      });

    }
  }
  verificarUsuarioExistente(nombre: string, edad: number): boolean {
    return this.users.some(user => user.nombre === nombre && user.edad === edad);
  }



  listarUser() {
    this.userService.listarUser().subscribe({
      next :(users) => {
        console.log('Usuarios: ', users);
        this.users = users;

      },
      error:(error) => {
        console.error('Error al listar usuarios: ', error);

      }

    });
  }


  trackById(index: number, user: User):number{
    return user.id;
  }

  }


