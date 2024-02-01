import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-table-multi',
  templateUrl: './page-table-multi.component.html',
  styleUrl: './page-table-multi.component.css'
})

export class PageTableMultiComponent {
@Input() n!: number; 

}
