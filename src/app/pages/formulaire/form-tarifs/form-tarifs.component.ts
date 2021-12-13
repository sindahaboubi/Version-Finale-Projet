import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Disponibilite} from 'src/app/classes/disponibilite';
import {Equipement} from 'src/app/classes/equipement';
import {Hotel} from 'src/app/classes/hotel';
import {Pension} from 'src/app/classes/pension';
import {HotelsService} from 'src/app/services/hotels.service';

@Component({
  selector: 'app-form-tarifs',
  templateUrl: './form-tarifs.component.html',
  styleUrls: ['./form-tarifs.component.css'],
})
export class FormTarifsComponent implements OnInit {
  submitted: boolean;
  selectedPension = "Petit déjeuner";
  selectedPrix="";

  constructor(private activatedRoute: ActivatedRoute, private hotelsService: HotelsService, private router: Router, private formBuilder: FormBuilder) {}
  lesHotels: Hotel;
  hotels: Hotel[] = [];
  prix_total: string = '';
  typeChamb: string = '';
  prix: number = 0;
  tarifsForm: FormGroup;

  onVider() {
    this.tarifsForm.reset({
      type_pension: "Tout inclus",
      nb_adultes: 2,
    });
  }


  typeChambre() {
    let nbAdulte = this.tarifsForm.controls.nb_adultes.value;
    let nbEnfant = this.tarifsForm.controls.nb_enf.value;
    if (nbAdulte == 1 && nbEnfant == 0){
      this.typeChamb= "Vous aurez une chambre Single";
    }
    else if (nbAdulte == 1 && nbEnfant == 1 || nbAdulte == 2 && nbEnfant == 0){
      this.typeChamb= "Vous aurez une chambre Double";
    }
    else if (nbAdulte == 3 && nbEnfant == 0 || nbAdulte == 2 && nbEnfant == 1 || nbAdulte == 1 && nbEnfant == 2){
      this.typeChamb= "Vous aurez une chambre Triple";
    }
    
    else if (nbAdulte == 2 && nbEnfant == 2 || nbAdulte == 1 && nbEnfant == 3 || nbAdulte == 3 && nbEnfant == 1 || nbAdulte == 4 && nbEnfant == 0){
      this.typeChamb= "Vous aurez une chambre Quadruple";
    }
    else{
      this.typeChamb= "Erreur ! Nos chambres ne peuvent pas contenir plus de 4 personnes !";
    }
  }

  /* siDisponible(date1: Date, date2: Date) {
    let table = this.lesHotels.disponibilite;
    for (let i = 0; i < table.length; i++) {
      if (table[i].date_fin >= date1 && table[i].date_debut <= date1) {
        if (table[i].date_fin <= date2 && table[i].date_debut >= date2) {
          return true;
        }
      }
    }
    return false;
  } */

  getPrixPension(pension: String) {
    let selectedPension = this.lesHotels.pension.find(i => i.libelleP === pension);
    return selectedPension.prixP;
  }

  calculerPrix() {
    let prixPension = this.getPrixPension(this.selectedPension);

    let date1 = new Date(this.tarifsForm.controls.d_arrive.value);
    let date2 = new Date(this.tarifsForm.controls.d_depart.value);

    let time_diff = date2.getTime() - date1.getTime();
    let nb_jours = time_diff / (1000 * 3600 * 24);

    let nbAdulte = this.tarifsForm.controls.nb_adultes.value;
    let nbEnfant = this.tarifsForm.controls.nb_enf.value;

    this.prix_total = "Prix total = " + nbAdulte * prixPension * nb_jours + " DT";
  }

  ngOnInit() {
    let i = this.activatedRoute.snapshot.params['id'];
    this.lesHotels = this.hotelsService.getHotelById(i);
    this.hotels = this.hotelsService.getHotels();

    this.tarifsForm = this.formBuilder.group(
      {
        d_arrive: ['', Validators.required],
        d_depart: ['', Validators.required],
        nb_adultes: [1, Validators.required],
        nb_enf: [0, Validators.required],
        type_pension: ['complete', Validators.required],
        prix: [0],
      }
    )
  }

  onSubmit() {
    this.submitted = true;
    if (this.tarifsForm.invalid) {
      return;
    }
  }

  get d_depart() {
    return this.tarifsForm.controls.d_depart;
  }

  get d_arrive() {
    return this.tarifsForm.controls.d_arrive;
  }

  get nbAdultes() {
    return this.tarifsForm.controls.nb_adultes;
  }

  get nb_enf() {
    return this.tarifsForm.controls.nb_enf;
  }
}
