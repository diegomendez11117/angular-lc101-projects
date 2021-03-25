import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movies Photos Example';
  image1 = 'https://s3.amazonaws.com/criterion-production/films/64093139506eeea73f973aee07e3f9ec/ZTvHQrwEUsJIjlvtHztiZ6g0UCH85m_large.jpg';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/711VQcNMkvL._SL1500_.jpg';
  image3 = 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg';
  image4 = 'https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR83,0,630,1200_AL_.jpg';

  constructor() { }

  ngOnInit() {
  }

}