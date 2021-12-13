import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Equipement } from 'src/app/classes/equipement';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  lesHotels : any=[];
  condition:boolean = false;
  formAdmin : FormGroup;
  equipements: FormGroup;
  contact:any[];
  utilisateurs:any[];

  hotel:any={
    id:'',
    libelle:'',
    localisation:'',
    image:'',
    prix:'',
    ageEnfant:'',
    distanceCV:'',
    distanceAer:'',
    description:''
  }

  constructor(private hotelsService:HotelsService, private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.getHotels()
    this.formAdmin=this.formBuilder.group({
      id:[''],
      libelle:[''],
      localisation:['', [Validators.required, Validators.pattern("[A-Z]{8}")]],
      imageH:[''],
      prix:[''],
      ageEnfant:[''],
      distanceCV:[''],
      distanceAer:[''],
      description:['']
    })

    this.equipements = this.formBuilder.group(
      {
        Piscine: true,
        Parking: true,
        Plage: true,
        Wifi: true,
        Restaurant: true,
        Bien_etre: true,
        Golf: true,
        Club_enfants: true,
        Piscine_couverte: true
      })

      this.hotelsService.getContacts().subscribe (data => this.contact = data);
      this.hotelsService.getUtilisateurs().subscribe (data => this.utilisateurs = data);

    }

  getHotels(){
    this.hotelsService.getAllHotels()
    .subscribe(data => {
      this.lesHotels = data;
    })
  }

  deleteHotel(id:number){
    this.hotelsService.delete(id) 
    .subscribe( () => {
      this.lesHotels = this.lesHotels.filter 
      ((data: { id: number; }) => data.id != id)
      alert("Hotel supprimé avec succès");
    },err=>{
      alert("Erreur !");
    } )
  }
 

  postHotels(){
    this.hotel.id = this.formAdmin.value.id;
    this.hotel.libelle = this.formAdmin.value.libelle;
    this.hotel.localisation = this.formAdmin.value.localisation;
    this.hotel.imageH=this.formAdmin.value.imageH;
    this.hotel.prix = this.formAdmin.value.prix;
    this.hotel.ageEnfant=this.formAdmin.value.ageEnfant;
    this.hotel.distanceCV=this.formAdmin.value.distanceCV;
    this.hotel.distanceAer=this.formAdmin.value.distanceAer;
    this.hotel.description = this.formAdmin.value.description;
    this.hotel.equipements=this.equipements.value;

    this.hotelsService.post(this.hotel)
    .subscribe( (data: any) =>{
      this.lesHotels=[data,...this.lesHotels];
      this.vider();
      alert("Hotel ajouté avec succès");
    },err=>{
      alert("Erreur !");
    } )
  }

  editHotel(data: any){
    this.hotel=data;
    this.condition=true;
  }

  updateHotel(){
    this.hotelsService.update(this.hotel)
    .subscribe(data=>{
      alert("Hotel modifié avec succés");
      this.vider();
      this.condition=false;
    },err=>{
      alert("Erreur !");
    })
  }

  vider() {
    this.formAdmin.reset();
    this.equipements.reset()
  }
}
