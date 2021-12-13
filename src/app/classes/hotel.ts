import { Disponibilite } from "./disponibilite";
import { Equipement } from "./equipement";
import { Pension } from "./pension";

export class Hotel {
    constructor(public id:number,
                public libelle:string, 
                public localisation:string,
                public image:string[]=[],
                public prix:number,
                public ageEnfant:number,
                public distanceCV:number,
                public distanceAer:number,
                public equipements:Equipement,
                public chambre:string[]=[],
                public description:string,
                public disponibilite:Disponibilite[]=[],
                public pension:Pension[]=[],
                ){}
}