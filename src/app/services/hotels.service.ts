import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disponibilite } from '../classes/disponibilite';
import { Equipement } from '../classes/equipement';
import { Hotel } from '../classes/hotel';
import { Pension } from '../classes/pension';
  const URL = 'http://localhost:3000/lesHotels';
  const URL1="http://localhost:3000/contact";

@Injectable({
  providedIn: 'root'
})

export class HotelsService {
  constructor(private http:HttpClient) { } 
     
  rechercher(lib:string) {
    return this.lesHotels.filter(hotel =>{hotel.libelle==lib});
  }

    private lesHotels: Hotel[]=[  
      new Hotel(1, 'Hôtel Djerba Aqua Resort', 'Djerba', ['assets/Aqua_Resort/aqua0.jpg','assets/Aqua_Resort/aqua1.jpg','assets/Aqua_Resort/aqua2.jpg','assets/Aqua_Resort/aqua3.jpg'], 94,12,1,25,
      new Equipement(true,true,true,true,true,true,false,true,false),
      ['Chambre single standard','Chambre double standard','Chambre triple standard','Chambre quadruple standard'],
      "Situé dans la zone touristique de Midoun à Djerba, au milieu d'un grand parc, à environ 200 m de la mer, avec accès direct à la meilleure plage de sable privée sur l'île, à travers les dunes de sable de verdure et la paume. L'hôtel SUNCONNECT DJERBA AQUA RESORT, quatre étoiles se trouve à 25 km de l'aéroport international de Djerba-Zarzis, à 16 km de Houmt Souk (la capitale de l'île), à 5 km de Midoun et à proximité du golf de Djerba 3courses de 9 trous.",
      [
          new Disponibilite(new Date('2021-12-14 00:00'),  new Date('2022-02-02'),true,0),
          new Disponibilite(new Date('2022-02-10 00:00'),  new Date('2022-03-17'),false,80),
          new Disponibilite(new Date('2022-04-01 00:00'),  new Date('2022-04-27'),true,75),
      ],
      
      [
        new Pension("Petit déjeuner",30),
        new Pension("Demi pension +",25),
        new Pension("Pension complète +",50),
        new Pension("Tout inclus",95)
      ]
      ),


      new Hotel(2,'Hôtel Nour Congress & Resort', 'Bizerte', ['assets/nour/nour.jpg','assets/nour/nour0.jpg','assets/nour/nour1.jpg','assets/nour/nour2.jpg','assets/nour/nour3.jpg','assets/nour/nour4.jpg'],225, 8, 20, 8, 
      new Equipement(true,true,true,true,true,true,false,false,false),
      ["Chambre single Vue mer","Chambre single Standard Vue Jardin	","Chambre double Standard Vue Jardin",'Chambre triple Vue mer','Chambre quadruple Standard vue jardin','Chambre quadruple Standard vue mer'],
      "",
      [
          new Disponibilite(new Date('2022-02-01 00:00'),  new Date('2022-03-23'),true,25),
          new Disponibilite(new Date('2022-03-07 00:00'),  new Date('2022-04-29'),false,100),
          new Disponibilite(new Date('2022-05-06 00:00'),  new Date('2022-06-07'),false,15),
      ] ,
      [
        new Pension("Petit déjeuner",14),
        new Pension("Demi pension +",18),
        new Pension("Pension complète +",32),
        new Pension("Tout inclus",78)
      ]
    ), 

        new Hotel(3, 'Hôtel Hasdrubal Thalassa', 'Djerba', ['assets/Hasdrubal/hasdrubal0.jpg','assets/Hasdrubal/hasdrubal1.jpg','assets/Hasdrubal/hasdrubal2.jpg','assets/Hasdrubal/hasdrubal3.jpg','assets/Hasdrubal/hasdrubal4.jpg','assets/Hasdrubal/hasdrubal5.jpg','assets/Hasdrubal/hasdrubal6.jpg','assets/Hasdrubal/hasdrubal7.jpg'], 183, 0 ,2.4,5, 
    new Equipement(true,true,true,true,true,true,false,false,false),
    ["Chambre Standard, vue jardin ","Chambre Standard, vue mer","Chambre Double Standard"],
    "Hôtel en bord de plage à Midun avec 3 restaurants et un spa proposant des soins complets, Cet hôtel dispose de 215 Chambres,les Chambres de cet hôtel sont réparties sur 2 étages",      
      [
        new Disponibilite(new Date('2021-12-10 00:00'),  new Date('2022-01-18'),false,10),
        new Disponibilite(new Date('2022-02-09 00:00'),  new Date('2022-04-24'),false,78),
        new Disponibilite(new Date('2022-05-09 00:00'),  new Date('2022-06-24'),true,15),
      ] ,
      [
        new Pension("Petit déjeuner",25),
        new Pension("Demi pension +",35),
        new Pension("Pension complète +",70),
        new Pension("Tout inclus",105)
      ]
    ),

    new Hotel(4, 'Hôtel El Fell', 'Hammamet',['assets/Fell/fell0.jpg','assets/Fell/fell1.jpg','assets/Fell/fell2.jpg','assets/Fell/fell3.jpg','assets/Fell/fell4.jpg'], 140, 6, 10, 60,
    new Equipement(true,true,true,true,true,true,true,true,true),
    ["Chambre single Standard","Chambre single Standard Vue Jardin","Chambre triple Standard",'Chambre familiale Vue mer','Chambre quadruple Standard'],
    "Situé dans une zone calme sur une des plus belles plages de la région à la route touristique el merazka Hammamet, L'hôtel EL Fell de classement pied dans l’eau vous promet des vacances inoubliables dans un cadre de relaxation. L’établissement est entouré d’un jardin verdoyant et fleuri et donne sur une belle plage de sable fin dorée. Il se trouve à mi-chemin entre Nabeul et Hammamet, à quelques minutes en voiture du centre-ville et à peu près une heure de l’aéroport de Tunis Carthage. ",
      [
        new Disponibilite(new Date('2022-01-01 00:00'),  new Date('2022-01-29'),true,19),
        new Disponibilite(new Date('2022-02-11 00:00'),  new Date('2022-02-27'),true,30),
        new Disponibilite(new Date('2022-03-21 00:00'),  new Date('2022-04-27'),false,40),
      ],
      [
        new Pension("Petit déjeuner",18),
        new Pension("Demi pension +",32),
        new Pension("Pension complète +",64),
        new Pension("Tout inclus",99)
      ]
      ),

      new Hotel(5,'Hôtel Résidence Hammamet', 'Hammamet', ['assets/ResidenceH/res0.jpg','assets/ResidenceH/res1.jpg','assets/ResidenceH/res2.jpg','assets/ResidenceH/res3.jpg','assets/ResidenceH/res4.jpg','assets/ResidenceH/res5.jpg','assets/ResidenceH/res6.jpg','assets/ResidenceH/res7.jpg'], 63,0, 1, 3 , 
    new Equipement(true,true,true,true,true,true,false,false,false),
    ["Chambre single Vue mer","Chambre single Standard Vue Jardin	","Chambre double Standard Vue Jardin",'Chambre triple Vue mer','Chambre quadruple Standard vue jardin','Chambre quadruple Standard vue mer'],
    "Hôtel La Résidence Hammamet est l’unique hôtel situé en plein centre-ville de Hammamet et à seulement 100m d'une plage privée de sable fin.Cet Hôtel saura vous en mettre plein les yeux avec son style arabo mauresque , et son patio naturellement frais et climatisé abritant un magnifique jardin fleurit au milieu du bâtiment.",
      [
        new Disponibilite(new Date('2022-02-01 00:00'),  new Date('2022-03-23'),true,50),
        new Disponibilite(new Date('2022-05-07 00:00'),  new Date('2022-04-23'),false,24),
        new Disponibilite(new Date('2022-05-06 00:00'),  new Date('2022-06-23'),false,100),
      ],
      [
        new Pension("Petit déjeuner",14),
        new Pension("Demi pension +",18),
        new Pension("Pension complète +",32),
        new Pension("Tout inclus",78)
      ]
    ),

    new Hotel(6, 'Hôtel de charme', 'Djerba', ['assets/Charme/charme0.jpg','assets/Charme/charme1.jpg','assets/Charme/charme2.jpg','assets/Charme/charme3.jpg','assets/Charme/charme4.jpg','assets/Charme/charme5.jpg'], 91, 7,1.5,20, 
    new Equipement(true,true,true,true,true,true,true,true,true),
    ["single standard","double standard","triple standard"],
    "Hotel de charme et SPA Dar El Bhar est un hôtel de 3 étoiles, situé à 4,8 km de l'ISET Djerba et à 4,7 km des Parcours de golf Djerba Golf Club. Situé dans une zone de plage, le site offre 23 chambres avec des soins du visage, un centre de massage et un centre de spa sur place.",
      [
          new Disponibilite(new Date('2021-12-10 00:00'),  new Date('2021-11-21'),true,25),
          new Disponibilite(new Date('2022-02-02 00:00'),  new Date('2022-03-17'),false,39),

      ] ,
      [
        new Pension("Petit déjeuner",20),
        new Pension("Demi pension +",16),
        new Pension("Pension complète +",32),
        new Pension("Tout inclus",88)
      ]
    ),


    new Hotel(7, 'Hôtel Yadis Hammamet', 'Hammamet', ['assets/yadis/yadis0.jpg','assets/yadis/yadis1.jpg','assets/yadis/yadis2.jpg','assets/yadis/yadis3.jpg','assets/yadis/yadis4.jpg','assets/yadis/yadis5.jpg','assets/yadis/yadis6.jpg','assets/yadis/yadis7.jpg'], 153, 0,1.7,8 ,
        new Equipement(true,true,true,true,true,true,true,true,true),
        ["Chambre single ","Chambre quadriple standard"],
        "Le Yadis Hammamet est implanté au milieu de jardins soignés, palmiers et plantes méditerranéens et juste en face de la plage de MREZGA, qui est la plus renommée d’Hammamet, avec son sable fin et blanc .",
          [
              new Disponibilite(new Date('2021-11-10 00:00'),  new Date('2021-11-21'),false,39),
              new Disponibilite(new Date('2022-02-12 00:00'),  new Date('2022-05-17'),false,0),              
          ],
          [
            new Pension("Petit déjeuner",11),
            new Pension("Demi pension +",20),
            new Pension("Pension complète +",40),
            new Pension("Tout inclus",74)
          ]
    ),

    new Hotel(8, 'Hôtel Mahdia Palace', 'Mahdia', ['assets/mahdiaPalace/mahdiaPalace0.jpg','assets/mahdiaPalace/mahdiaPalace1.jpg','assets/mahdiaPalace/mahdiaPalace2.jpg','assets/mahdiaPalace/mahdiaPalace3.jpg','assets/mahdiaPalace/mahdiaPalace4.jpg','assets/mahdiaPalace/mahdiaPalace5.jpg','assets/mahdiaPalace/mahdiaPalace6.jpg','assets/mahdiaPalace/mahdiaPalace7.jpg'], 185,5,0.3,10,
        new Equipement(true,true,false,true,true,false,true,true,true),
        ["Chambre single ","Chambre quadriple standard","Chambre triple standard"],
        "Mahdia Palace se trouve à 8 minutes en voiture du musée et à 9 minutes route de la gare de Mahdia. Sur place, vous profiterez aussi d'un espace de stationnement gratuit, d'une aire de jeux pour enfants et d'un service de garde d'enfants. Enfin, vous rejoindrez la forteresse Borj El Kebir en 9 minutes de route.Les couples apprécient particulièrement l'emplacement de cet établissement. Ils lui donnent la note de 8,0 pour un séjour à deux.",
          [
              new Disponibilite(new Date('2021-05-17 00:00'),new Date('2021-06-20 00:00'),true,45),
              new Disponibilite(new Date('2021-08-10 00:00'),new Date('2021-08-21 00:00'),false,33)
          ] ,
          [
            new Pension("Petit déjeuner",17),
            new Pension("Demi pension +",26),
            new Pension("Pension complète +",60),
            new Pension("Tout inclus",94)
          ]
    ),

    new Hotel(9,'Hôtel One Resort Jockey Monastir', 'Monastir', ['assets/jockeyMonastir/jockeyMonastir0.jpg','assets/jockeyMonastir/jockeyMonastir1.jpg','assets/jockeyMonastir/jockeyMonastir2.jpg','assets/jockeyMonastir/jockeyMonastir3.jpg','assets/jockeyMonastir/jockeyMonastir4.jpg','assets/jockeyMonastir/jockeyMonastir5.jpg','assets/jockeyMonastir/jockeyMonastir6.jpg','assets/jockeyMonastir/jockeyMonastir7.jpg'],100, 12, 1, 3,
    new Equipement(false,true,true,false,true,true,false,true,true),
    ["Chambre single Vue mer","Chambre single Standard Vue Jardin	","Chambre double Vue mer",'Chambre triple Vue jardin','Chambre quadruple Standard vue jardin','Chambre quadruple Standard'],
    "L’hôtel One Resort Jockey Monastir se situe directement sur une plage de sable fin et de galets, à environ 2 km de l aéroport de Monastir, à 8 km du centre et 3 km du parcours de golf “Flamingo”",
      [
          new Disponibilite(new Date('2021-01-10 00:00'),new Date('2021-01-25 00:00'),true,0),
          new Disponibilite(new Date('2021-04-04 00:00'),new Date('2021-05-08 00:00'),false,22),
          new Disponibilite(new Date('2021-05-11 00:00'),new Date('2021-05-29 00:00'),false,28)
      ] ,
      [
        new Pension("Petit déjeuner",10),
        new Pension("Demi pension +",15),
        new Pension("Pension complète +",47),
        new Pension("Tout inclus",69)
      ]
    ),


    new Hotel(10,'Hôtel Rosa Beach Spa & thalasso', 'Monastir', ['assets/rosaM/rosa0.jpg','assets/rosaM/rosa1.jpg','assets/rosaM/rosa2.jpg','assets/rosaM/rosa3.jpg','assets/rosaM/rosa4.jpg','assets/rosaM/rosa5.jpg','assets/rosaM/rosa6.jpg','assets/rosaM/rosa7.jpg'],226,6, 2.6, 1.2, 
        new Equipement(true,true,true,true,true,false,true,true,false),
        ["Chambre double Vue mer","Chambre single Vue Jardin	","Chambre double Vue jardin",'Chambre triple Vue jardin','Chambre quadruple Standard vue mer'],
        "L'hôtel Rosa Beach est Situé au cœur de la station hôtelière de Skanès, sur une plage méditerranéenne de sable fin, à 7km du centre de Monastir.",
        [
          new Disponibilite(new Date('2021-07-01 00:00'),new Date('2021-07-27 00:00'),true,11),
          new Disponibilite(new Date('2021-09-15 00:00'),new Date('2021-10-15 00:00'),true,70),
          new Disponibilite(new Date('2021-11-18 00:00'),new Date('2021-12-02 00:00'),false,50)
      ] ,
      [
        new Pension("Petit déjeuner",17),
        new Pension("Demi pension +",17),
        new Pension("Pension complète +",27),
        new Pension("Tout inclus",77)
      ]


    ),
  ];

  getHotels(){
    return this.lesHotels;
  }

  getHotelById(id :number) {
    return this.lesHotels.find(i => i.id==id);
  }

  getHotelByLocalisation(local : string) {
    return this.lesHotels.filter(c => c.localisation==local);
  }  


  promoEnfantGratuit(promEnf : number) {
    return this.lesHotels.filter(c => c.ageEnfant>promEnf);
  }

  getHotelByBasPrix(pr : number) {
    return this.lesHotels.filter(c => c.prix<pr);
  }

  getHotelByLib(libelle:string){
    return this.lesHotels.filter(x => x.libelle.toLocaleLowerCase()==libelle.toLocaleLowerCase());
  }

  getPrix():number{
    for(let i=0;i<this.lesHotels.length;i++){
    return this.lesHotels[i].disponibilite[1].pourcentage;
  }
  return 0;
  }

  //CRUD

  getAllHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>(URL);
  }

  delete(id:number){
    return this.http.delete(`${URL}/${id}`);
  }

  post(data: any){
    return this.http.post<Hotel>(URL, data)
  }

  update(data:any){
    return this.http.put<Hotel>(`${URL}/${data.id}`, data);
  }
}
