import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from 'src/app/classes/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  lesHotels:Hotel[]=[];
  firstName:any |undefined;
  nb_hotels:number=0;
  localisation:string="";
  localisations:string[]=['Djerba','Hammamet','Nabeul','Mahdia','Tabarka','Monastir','Tozeur','Bizerte','Sousse','Gammarth'];

  constructor(private activatedRoute:ActivatedRoute,private hotelsService:HotelsService,private router:Router, private http:HttpClient) { }

  onafficher(){
    this.lesHotels=this.hotelsService.getHotels();
    this.localisation="";
    this.nb_hotels=this.hotelsService.getHotels().length;
  }

  onchange(local:string){
    this.lesHotels=this.hotelsService.getHotelByLocalisation(local);
    this.localisation=local;
    this.nb_hotels=this.hotelsService.getHotelByLocalisation(local).length;
  }

  enfantGratuit(promEnf:number){
    this.lesHotels=this.hotelsService.promoEnfantGratuit(promEnf);
    this.nb_hotels=0;
    this.localisation="";
  }

  hotelBasPrix(pr:number){
    this.lesHotels=this.hotelsService.getHotelByBasPrix(pr);
    this.nb_hotels=0;
    this.localisation="";
  }
  
  test2:boolean=false;

  rechercheForm:FormGroup=new FormGroup({
    libelle:new FormControl(''),
  })

  afficherHotelParNom(){
    if (this.test2==false) { this.test2=true;}
  }

  chercherParLibelle(x:string){
    this.lesHotels=this.hotelsService.getHotelByLib(x);
  } 

  ngOnInit(): void {
    this.hotelsService.getAllHotels().subscribe (data => this.lesHotels = data);
  }
}
