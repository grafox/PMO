import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'مجلس الوزراء يعقد جلسته الاعتيادية برئاسة رئيس مجلس الوزراء الدكتور حيدر العبادي';
  subContent ='عقد مجلس الوزراء جلسته الاعتيادية اليوم الثلاثاء 6 آذار 2018 برئاسة رئيس مجلس الوزراء الدكتور حيدر العبادي.';
  by = 'المكتب الإعلامي لرئيس الوزراء';
  readMore = 'أقرأ المزيد'
}
