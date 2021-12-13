import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  formContact :FormGroup
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.formContact=this.formBuilder.group({
      nomFamille:['', [Validators.required, Validators.pattern("[A-Z a-z]*")]],
      prenom:['',[Validators.required, Validators.pattern("[A-Z a-z]*")]],
      email:['',Validators.required],
      numTel:['',Validators.required],
      message:['',Validators.required]
    })
  }

  envoyer(){
    this.http.post<any>("http://localhost:3000/contact",this.formContact.value)
    .subscribe(res=>{
      alert("Votre message a été envoyé avec succès");
      this.formContact.reset();
    },err=>{
      alert("Erreur !");
    })
  }

  get nomFamille(){
    return this.formContact.get('nomFamille');
  }

  get prenom(){
    return this.formContact.get('prenom');
  }

  get message(){
    return this.formContact.get('message')
  }

}
