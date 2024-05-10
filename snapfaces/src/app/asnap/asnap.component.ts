import { Component, OnInit,  Input} from '@angular/core';
import {Asnap} from '../models/asnap.model';
import { ASnapService } from '../services/a-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asnap',
  templateUrl: './asnap.component.html',
  styleUrl: './asnap.component.scss'
})
export class AsnapComponent implements OnInit{
 @Input() aSnap!:  Asnap;
  buttonText!: string;

  constructor(private aSnapService: ASnapService,
              private router:Router){}

  ngOnInit() {
    this.buttonText = "Oh Snap !";
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

  onViewASnap(){
    this.router.navigateByUrl(`asnaps/${this.aSnap.id}`);
  }
}