import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disponibilite } from 'src/app/classes/disponibilite';
import { Equipement } from 'src/app/classes/equipement';
import { Hotel } from 'src/app/classes/hotel';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-details-hotels',
  templateUrl: './details-hotels.component.html',
  styleUrls: ['./details-hotels.component.css']
})
export class DetailsHotelsComponent implements OnInit {
  lesHotels:Hotel|undefined;

  lesHotel : any=[];
  hotels:Hotel[]=[];
  chambre:string[]=[];
  disponibilite:Disponibilite;

  display:boolean = false;
  afficherPrix(){
    this.display = !this.display;
  }

  constructor(private activatedRoute:ActivatedRoute,private hotelsService:HotelsService,private router:Router) { }

  ngOnInit(): void {
    let i= this.activatedRoute.snapshot.params['id'];
    this.lesHotels=this.hotelsService.getHotelById(i);
    this.hotels=this.hotelsService.getHotels();

    this.hotelsService.getAllHotels()
 .subscribe (data => this.lesHotel = data)

  }

  getHotels(){
    this.hotelsService.getAllHotels()
    .subscribe(data => {
      this.lesHotel = data;
    })
  }
}
