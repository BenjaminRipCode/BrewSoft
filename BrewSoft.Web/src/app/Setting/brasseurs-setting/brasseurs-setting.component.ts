import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrasseurService } from '../../Services/brasseur.service';

@Component({
  selector: 'app-brasseurs-setting',
  templateUrl: './brasseurs-setting.component.html',
  styleUrls: ['./brasseurs-setting.component.scss']
})
export class BrasseursSettingComponent implements OnInit {
  brasseurs: any = [];

  constructor(public brasseurService: BrasseurService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBrasseurs();
  }

  getBrasseurs() {
    this.brasseurs = [];
    this.brasseurService.get().subscribe((data: {}) => {
      console.log(data);
      this.brasseurs = data;
    });
  }
}
