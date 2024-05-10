import { Component, OnInit } from '@angular/core';
import { Asnap } from '../models/asnap.model';
import { ASnapService } from '../services/a-snap.service';

@Component({
  selector: 'app-a-snap-list',
  templateUrl: './a-snap-list.component.html',
  styleUrl: './a-snap-list.component.scss'
})
export class ASnapListComponent implements OnInit {

  aSnapsArray!: Asnap[];

  constructor(private aSnapService: ASnapService){}

  ngOnInit(): void{
    this.aSnapsArray= this.aSnapService.getAllASnap();
  }

}