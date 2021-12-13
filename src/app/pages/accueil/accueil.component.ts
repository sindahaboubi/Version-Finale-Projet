import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Disponibilite } from 'src/app/classes/disponibilite';
import { Hotel } from 'src/app/classes/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  lesHotels:Hotel[]=[];
  disp:Disponibilite[];
  d_arrive: Date;
  d_depart: Date;

  constructor(private hotelsService:HotelsService,private router:Router) { }

  rechercheDate=new FormGroup(
    { d_arrive : new FormControl(''),
      d_depart:new FormControl('')
    });

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){
    this.hotelsService.getAllHotels()
    .subscribe(data => {
      this.lesHotels = data;
    })
  } 

  VerifDisponibilite(disp, d_arrive, d_depart) {
    for (let i of disp) 
    {
      if (i.date_debut <= d_arrive && i.date_fin >= d_depart)
       {
          return true;
       }
    }
    return false;
  }

  onRechercher() {
    let d_arrive = this.rechercheDate.controls['d_arrive'].value;
    let d_depart = this.rechercheDate.controls['d_depart'].value;
    this.lesHotels = this.hotelsService.getHotels().filter(hotel =>
      this.VerifDisponibilite(hotel.disponibilite, new Date(d_arrive), new Date(d_depart)));
  }
}
