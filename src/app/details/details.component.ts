import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Action } from 'rxjs/scheduler/Action';

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
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  postesArabicCol: AngularFirestoreCollection<Post>;
  postesArabic: any;

  postDoc: AngularFirestoreDocument<Post>;
  thePost: Observable<Post>;
  postId: any;
  data: any;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.postId = params;
    })
    this.postDoc = this.afs.doc('postesArabic/' + this.postId);
    this.data = this.postDoc.snapshotChanges().map(Action => {
      const data = Action.payload.data() as Post;
      const id = Action.payload.id;
      return { id, data };
    })
    console.log(this.data);
  }

}
