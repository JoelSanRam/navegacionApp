import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {
  id = null

  constructor(private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
   console.log(this.id);
  }

}
