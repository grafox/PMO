import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  readMore = 'أقرأ المزيد';
  searchPlaceholder = 'بحث';
  PMO='المكتب الاعلامي لرئاسة الوزراء';
  in ='في'
  postesArabic: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.postesArabic = db.collection('postesArabic').valueChanges();
  }
}
