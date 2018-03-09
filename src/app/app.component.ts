import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'مجلس الوزراء يعقد جلسته الاعتيادية برئاسة رئيس مجلس الوزراء الدكتور حيدر العبادي';
  subContent ='عقد مجلس الوزراء جلسته الاعتيادية اليوم الثلاثاء 6 آذار 2018 برئاسة رئيس مجلس الوزراء الدكتور حيدر العبادي. ووجّه مجلس الوزراء شكره وتقديره لمبادرة عاهل المملكة العربية السعودية الملك سلمان بن عبد العزيز بإنشاء ملعب رياضي متكامل في العاصمة بغداد، واوعز المجلس بتشكيل لجنة من(وزارة الشباب والرياضة والامانة العامة لمجلس الوزراء ووزارة التخطيط / دائرة التنمية المحلية والمكانية ووزارة التعليم العالي والبحث العالي/ مركز التخطيط الحضري والاقليمي) تتولى صياغة الاطار العام لإنشاء الملعب بالتنسيق مع المجلس التنسيقي العراقي- السعودي من حيث الموقع والتصميم والمتابعة، وتعرض اللجنة نتائج عملها على مجلس الوزراء';
  by = 'المكتب الإعلامي لرئيس الوزراء';
  readMore = 'أقرأ المزيد';
  searchPlaceholder = 'بحث';
  PMO='المكتب الاعلامي لرئاسة الوزراء';
  from ='من';
  image = 'https://firebasestorage.googleapis.com/v0/b/firebase-egav.appspot.com/o/images%2F4-3-201802.jpg?alt=media&token=8ed21494-6c7f-4775-8fc8-a9cf4520f987';

  constructor(){
    
  }
}
