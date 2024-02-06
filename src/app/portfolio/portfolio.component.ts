import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgArr: string[] = [
    "assets/port1.png", "assets/port2.png", "assets/port3.png",
    "assets/port4.png", "assets/port5.png", "assets/port6.png"
  ];
  imgFlag: boolean = false;
  imgSrc: string = ''
  imgIndexAlt: string = ''

  showModal(src: string, index: number) {
    this.imgSrc = src
    this.imgIndexAlt = `portImgModal${++index}`
    console.log(this.imgSrc);
  }

  nextModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const nextIndex = (currentIndex + 1) % this.imgArr.length;
    this.imgSrc = this.imgArr[nextIndex];
  }

  prevModal() {
    const currentIndex = this.imgArr.indexOf(this.imgSrc);
    const prevIndex = (currentIndex - 1 + this.imgArr.length) % this.imgArr.length;
    this.imgSrc = this.imgArr[prevIndex];
  }
}
