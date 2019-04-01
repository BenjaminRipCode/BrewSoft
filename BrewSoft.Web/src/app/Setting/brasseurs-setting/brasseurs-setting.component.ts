import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BrasseurDataSource } from './brasseur-datasource';

@Component({
  selector: 'app-brasseurs-setting',
  templateUrl: './brasseurs-setting.component.html',
  styleUrls: ['./brasseurs-setting.component.scss']
})
export class BrasseursSettingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BrasseurDataSource;

  displayedColumns = ['id', 'name'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new BrasseurDataSource(this.paginator, this.sort);
  }

}
