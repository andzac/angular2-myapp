import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
  }


}
