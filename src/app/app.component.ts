import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Post {
  title: string;
  subContent: string;
  content: string;
  images: string;
}
interface PostId extends Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readMore = 'أقرأ المزيد';
  searchPlaceholder = 'بحث';
  PMO = 'المكتب الاعلامي لرئاسة الوزراء';
  // in ='في'

  postesArabicCol: AngularFirestoreCollection<Post>;
  postesArabic: any;

  title: string;
  subContent: string;
  content: string;
  images: string;

  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.postesArabicCol = this.afs.collection('postesArabic');
    //this.postesArabic = this.postesArabicCol.valueChanges();
    this.postesArabic = this.postesArabicCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        })
      })
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('postesArabic/' + postId);
    this.post = this.postDoc.valueChanges();
  }
}