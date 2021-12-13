import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {

  public connexionForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.connexionForm=this.formBuilder.group({
      nom:['', [Validators.required,  Validators.minLength(8)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    })
  }

  connexion(){
    this.http.get<any>("http://localhost:3000/utilisateurs")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.nom === this.connexionForm.value.nom && a.password === this.connexionForm.value.password
      });
      if(user.nom=="administrateur" && user.password=="administrateur"){
        alert("Connexion avec succès en tant qu'administrateur" );
        this.connexionForm.reset(); 
        this.router.navigate(['/admin']);
       }
       else if(user.nom != "administrateur" && user.password != "administrateur"){
         alert("Connexion avec succès en tant du client");
         this.connexionForm.reset(); 
         this.router.navigate(['/hotels']);
       }
       else if(!user){
        alert("Utilisateur non trouvé !");
      }
    },err=>{
      alert("Erreur !")
    })
  }

  public get nom(){
    return this.connexionForm.get('nom');
  }

  public get password(){
    return this.connexionForm.get('password'); 
  }

}
