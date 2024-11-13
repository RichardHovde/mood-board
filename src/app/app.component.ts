import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';

interface Track {
  name: string;
  url: SafeResourceUrl;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mood board';
  combat: Track[];
  nature: Track[];
  city: Track[];
  dungeon: Track[];
  mystery: Track[];
  mood: Track[];

  constructor(public sanitizer: DomSanitizer) {
    this.combat = [
      { name: 'Witcher 3', url: this.sanitizeUrl('NHBUVLpjAmA?si=scgXcbN0neYoqyxE') },
      { name: 'Nosk', url: this.sanitizeUrl('Z1vJSNd3ESA?si=ELqo27M-9_MyegfX') },
      { name: 'Goblin fight theme', url: this.sanitizeUrl('jFGq3nwApvA?si=3ERAWFy578ZYBGbU') },
      { name: 'Cunning cruel crits', url: this.sanitizeUrl('cw9zaG4_mdw?si=p3shJ8yxk1ZVY0IV') },
      { name: 'Ganondorf', url: this.sanitizeUrl('HJtQo9nCt80?si=2OXE1WfhCBsPRobp') },
    ];
    this.nature = [
      { name: 'Thunderstorm', url: this.sanitizeUrl('gVKEM4K8J8A?si=0lJ3VI2Egf12HM51&amp;controls=1') },
      { name: 'Windy hilltopp', url: this.sanitizeUrl('oy0jX_I1CIU?si=eu03ixDelSYwyB31&amp;controls=1') },
      { name: 'Forest', url: this.sanitizeUrl('xNN7iTA57jM?si=XvpxCGnObNdvttv6&amp;controls=1') },
      { name: 'Highest peak', url: this.sanitizeUrl('tRXiKBpiN7E?si=xdLo2DPobnTTwQqB&amp;controls=1') },
      { name: 'Desert ruins', url: this.sanitizeUrl('46w8MRZKj64?si=cGJ5leA-G4n7PoTF&amp;controls=1') },
      { name: 'Arctic wilderness', url: this.sanitizeUrl('qD2ahwiPRBk?si=yQobx29GFp-ozMuB&amp;controls=1') },
      { name: 'Enchanted forest', url: this.sanitizeUrl('XxEhuSJF780?si=dnpFwcDx4ul6k-7P&amp;controls=1') },
      { name: 'Coast', url: this.sanitizeUrl('ZWxlwLYCBsE?si=qP__k_LhoeP91-Ch&amp;controls=1') },
      { name: 'Skyrim day', url: this.sanitizeUrl('hBkcwy-iWt8?si=G-JhRFgPdnRfClkx&amp;controls=1') },
    ]
    this.city = [
      { name: 'Small marketplace', url: this.sanitizeUrl('x2UulCWGess?si=gXg1swQmgUsY-LNM&amp;controls=1') },
      { name: 'Medieval city', url: this.sanitizeUrl('_52K0E_gNY0?si=IrKxDAnny9HB7poJ&amp;controls=1') },
      { name: 'Arena', url: this.sanitizeUrl('plUgICpVAoc?si=RveMFYNrst1MZSrB&amp;controls=1') },
      { name: 'Evening town', url: this.sanitizeUrl('bSbYpFMNxLI?si=-sOFQ1csIdzUB-Gp&amp;controls=1') },
      { name: 'Rain outside', url: this.sanitizeUrl('3sL0omwElxw?si=wPGYqmaHrPkjmbFj&amp;controls=1') },
      { name: 'Skyrim towns', url: this.sanitizeUrl('Y4KX-owEk98?si=-Ybqdu-iqgUCRxKm&amp;controls=1') },
      { name: 'City of Theives', url: this.sanitizeUrl('_RsnVOK6Fdg?si=8fnnUOQhoEQywPu-&amp;controls=1') },
      { name: 'The capital', url: this.sanitizeUrl('9s-ZyewKzrs?si=Xjw9Ag7GHfFK_wIw&amp;controls=1') },
      { name: 'Alliance taverns', url: this.sanitizeUrl('Oeo2VCCtUZQ?si=BeWndESgN3Uk-yOi&amp;controls=1') },
      { name: 'Skyloft', url: this.sanitizeUrl('JILsZeof8m4?si=zNuY-Dno3HSeWm6e&amp;controls=1') },
    ]
    this.dungeon = [
      { name: 'Bellow', url: this.sanitizeUrl('UXCxnelWrkA?si=CXkYSkWFrL1zXdkr') },
      { name: 'The Elderwood Guardian', url: this.sanitizeUrl('CBPvBV1XMnc?si=bqj_O062AEHLRLnm') },
    ]
    this.mystery = [
      { name: 'Suspense', url: this.sanitizeUrl('EApZmmYg_oQ?si=ygouDp2vlQEc3ccG&amp;controls=1') },
      { name: 'Tense path', url: this.sanitizeUrl('fv_7EurNAss?si=kPIx7UmS3NzFuPCI&amp;controls=1') },
      { name: 'Investigation', url: this.sanitizeUrl('7wBzL62Va1k?si=KyQRsYxIF1NyoVig&amp;controls=1') },
      { name: "Mage's tower", url: this.sanitizeUrl('F7k5rqeU6t8?si=_Mll5NFQa_9g8CoD&amp;controls=1') },
      { name: 'Enchanted library', url: this.sanitizeUrl('Nd0beTmpfVA?si=b7cKcGrg_JauNEB0&amp;controls=1') },
      { name: 'City of Tears', url: this.sanitizeUrl('yo0zzQm70Jg?si=R7VhSK9D5qBGKNYY&amp;controls=1') },
    ]
    this.mood = [
      { name: 'Aftermath', url: this.sanitizeUrl('4xe6oOmidwI?si=rxYwr01SU6UemqOW&amp;controls=1') },
      { name: 'Adventure begins', url: this.sanitizeUrl('Jikm8CCRbdM?si=P9qPSe9aQdkUKBz_&amp;controls=1') },
      { name: 'Last goodbye', url: this.sanitizeUrl('mFsQpCjRyvY?si=CSO1o9362BHbHrtz') }, 
      { name: 'On the Nature of Daylight', url: this.sanitizeUrl('u_d23K_-v1Q?si=ef26XY1Yz83MUNss') }, 
    ]
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${url}`);
  }
}