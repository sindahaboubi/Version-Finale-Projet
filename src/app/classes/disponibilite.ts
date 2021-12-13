export class Disponibilite {
    constructor(
        public date_debut:Date,
        public date_fin:Date,
        public siDisponible:boolean,
        public pourcentage:number
    ){}
}