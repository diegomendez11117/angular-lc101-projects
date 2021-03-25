import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = [
    'https://www.hulu.com/watch/a4f56442-6dc0-4eec-90cd-637fb00e6873',
    'https://watch.sling.com/1/program/3080d99b949f4f3f810dee3627501144/watch?trackingid=google-feed',
    'https://play.hbomax.com/feature/urn:hbo:feature:GXdu2UQAP-qXCPQEAADfL?camp=googleHBOMAX&action=play',
    'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.64a9f786-efb1-28d3-bf27-6038d12cc53a?autoplay=1&ref_=atv_cf_strg_wb',
  ];

  constructor() { }

  ngOnInit() {
  }

}
