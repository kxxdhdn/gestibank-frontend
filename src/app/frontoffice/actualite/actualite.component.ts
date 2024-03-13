import { Component, OnInit } from '@angular/core';
import { ActualiteService } from '../../services/actualite.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent implements OnInit{

  public urlUpload = environment.urlUploadImage;

  constructor(private service: ActualiteService) { }

  actualites:any;
  ngOnInit() {
    this.refreshListActualites();
  }
  refreshListActualites() {
    this.service.getAllActualites().subscribe(
      (response:any) => {
        this.actualites = response;
        console.log(this.actualites);
      }
    );
  }

}
