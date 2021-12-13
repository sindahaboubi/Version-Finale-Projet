import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipement } from 'src/app/classes/equipement';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-equipements',
  templateUrl: './equipements.component.html',
  styleUrls: ['./equipements.component.css']
})
export class EquipementsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private hotelsService:HotelsService,private router:Router) { }

  equipement:Equipement |undefined;

  ngOnInit(): void {
    let i= this.activatedRoute.snapshot.params['id'];
    this.equipement=this.hotelsService.getHotelById(i)?.equipements;
  }

}
