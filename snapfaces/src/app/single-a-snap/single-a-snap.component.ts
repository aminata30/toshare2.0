import { Component, OnInit} from '@angular/core';
import {Asnap} from '../models/asnap.model';
import { ASnapService } from '../services/a-snap.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-a-snap',
  templateUrl: './single-a-snap.component.html',
  styleUrl: './single-a-snap.component.scss'
})
export class SingleASnapComponent implements OnInit{
  aSnap!:  Asnap;
  buttonText!: string;

  constructor(private aSnapService: ASnapService, 
              private route: ActivatedRoute){}

  ngOnInit() {
    this.buttonText = "Oh Snap !";
    const ASnapId = +this.route.snapshot.params['id'];
    this.aSnap = this.aSnapService.getASnapById(ASnapId);
  }
  onSnap(){
    if (this.buttonText === 'Oh Snap !') { 
      this.aSnapService.snapASnapById(this.aSnap.id,'snap');
      this.buttonText= 'Oops, unSnap !'
    } else {
      this.aSnapService.snapASnapById(this.aSnap.id, 'unsnap');
      this.buttonText= 'Oh Snap !'
    }
    
  }

}
