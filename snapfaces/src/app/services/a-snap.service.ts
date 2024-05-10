import { Injectable } from "@angular/core";
import { Asnap } from "../models/asnap.model";

@Injectable({
  providedIn:'root'
})

export class ASnapService {
  aSnapsArray: Asnap[] =[
    {
      id:1,
      title: "Athéna",
      location: 'Agen',
      description: "Athena is a Greek goddess and the daughter of Zeus",
      imageUrl: "/assets/Athena-Wisdom.jpg",
      createdDate: new Date(),
      snaps: 160,
    },
    {
      id:2,
      title: "Aphrodite",
      location: 'Angers',
      description: "Aphrodite is a Greek goddess and the daughter of Ouranos",
      imageUrl: "/assets/goddess-aphrodite.jpg",
      createdDate: new Date(),
      snaps: 92,
    },
    {
      id:3,
      title: "Artémis",
      description: "Artémis is a Greek goddess and the daughter of Zeus",
      imageUrl: "/assets/artemis-goddess.jpg",
      createdDate: new Date(),
      snaps: 150,
    },
  ];
  
  getAllASnap(): Asnap[] {
    return this.aSnapsArray;
  }

  getASnapById(aSnapId: number): Asnap {
    const aSnap = this.aSnapsArray.find(aSnap => aSnap.id === aSnapId);
    if(!aSnap){
      throw new Error("Asnap not found");
    } else {
      return aSnap;
    }
  }

  snapASnapById(aSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const ASnap = this.getASnapById(aSnapId);
    snapType === 'snap' ? ASnap.snaps++ : ASnap.snaps--;
  }
}