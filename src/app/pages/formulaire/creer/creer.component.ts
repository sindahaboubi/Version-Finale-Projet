import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent implements OnInit {

  creerForm:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }


  ngOnInit(): void {
    this.creerForm=this.formBuilder.group({
      nom:['', [Validators.required,  Validators.minLength(8)]],
      numTel:['', [Validators.required, Validators.pattern("(216)[0-9]{8}")]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  creer(){
    this.http.post<any>("http://localhost:3000/utilisateurs",this.creerForm.value).subscribe(res=>{
      alert("Compte crée avec succès");
      this.creerForm.reset();
      this.router.navigate(['/connexion']);
    },err=>{
      alert("Erreur !")
    })
  }

  get f() { 
    return this.creerForm.controls; 
  }

  get nom(){
    return this.creerForm.get('nom');
  }

  get email(){
    return this.creerForm.get('email');
  }

  get password(){
    return this.creerForm.get('password');
  }

  get numTel(){
    return this.creerForm.get('numTel');
  }
}
