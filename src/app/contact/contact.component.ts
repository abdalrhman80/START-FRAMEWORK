import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  flag1: boolean = false
  flag2: boolean = false
  flag3: boolean = false
  flag4: boolean = false
  showLabel1(e: any) {
    e.target.value.length > 0 ? this.flag1 = true : this.flag1 = false;
  }
  showLabel2(e: any) {
    e.target.value.length > 0 ? this.flag2 = true : this.flag2 = false;
  }
  showLabel3(e: any) {
    e.target.value.length > 0 ? this.flag3 = true : this.flag3 = false;
  }
  showLabel4(e: any) {
    e.target.value.length > 0 ? this.flag4 = true : this.flag4 = false;
  }
}
