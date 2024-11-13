import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

interface Track {
  name: string;
  id: SafeResourceUrl;
}

interface Tab {
  title: string;
  trackList: Track[];
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

  tabs: Tab[];

  combat: Track[];
  nature: Track[];
  city: Track[];
  dungeon: Track[];
  mystery: Track[];
  mood: Track[];

  constructor(public sanitizer: DomSanitizer) {
    // Initialize tracklists
    this.combat = [
      { name: 'Witcher 3', id: this.sanitizeUrl('NHBUVLpjAmA') },
      { name: 'Nosk', id: this.sanitizeUrl('Z1vJSNd3ESA') },
      { name: 'Goblin fight theme', id: this.sanitizeUrl('jFGq3nwApvA') },
      { name: 'Cunning cruel crits', id: this.sanitizeUrl('cw9zaG4_mdw') },
      { name: 'Ganondorf', id: this.sanitizeUrl('HJtQo9nCt80') },
    ];
    this.nature = [
      { name: 'Thunderstorm', id: this.sanitizeUrl('gVKEM4K8J8A') },
      { name: 'Windy hilltopp', id: this.sanitizeUrl('oy0jX_I1CIU') },
      { name: 'Forest', id: this.sanitizeUrl('xNN7iTA57jM') },
      { name: 'Highest peak', id: this.sanitizeUrl('tRXiKBpiN7E') },
      { name: 'Desert ruins', id: this.sanitizeUrl('46w8MRZKj64') },
      { name: 'Arctic wilderness', id: this.sanitizeUrl('qD2ahwiPRBk') },
      { name: 'Enchanted forest', id: this.sanitizeUrl('XxEhuSJF780') },
      { name: 'Coast', id: this.sanitizeUrl('ZWxlwLYCBsE') },
      { name: 'Skyrim day', id: this.sanitizeUrl('hBkcwy-iWt8') },
    ]
    this.city = [
      { name: 'Small marketplace', id: this.sanitizeUrl('x2UulCWGess') },
      { name: 'Medieval city', id: this.sanitizeUrl('_52K0E_gNY0') },
      { name: 'Arena', id: this.sanitizeUrl('plUgICpVAoc') },
      { name: 'Evening town', id: this.sanitizeUrl('bSbYpFMNxLI') },
      { name: 'Rain outside', id: this.sanitizeUrl('3sL0omwElxw') },
      { name: 'Skyrim towns', id: this.sanitizeUrl('Y4KX-owEk98') },
      { name: 'City of Theives', id: this.sanitizeUrl('_RsnVOK6Fdg') },
      { name: 'The capital', id: this.sanitizeUrl('9s-ZyewKzrs') },
      { name: 'Alliance taverns', id: this.sanitizeUrl('Oeo2VCCtUZQ') },
      { name: 'Skyloft', id: this.sanitizeUrl('JILsZeof8m4') },
    ]
    this.dungeon = [
      { name: 'Bellow', id: this.sanitizeUrl('UXCxnelWrkA') },
      { name: 'The Elderwood Guardian', id: this.sanitizeUrl('CBPvBV1XMnc') },
    ]
    this.mystery = [
      { name: 'Suspense', id: this.sanitizeUrl('EApZmmYg_oQ') },
      { name: 'Tense path', id: this.sanitizeUrl('fv_7EurNAss') },
      { name: 'Investigation', id: this.sanitizeUrl('7wBzL62Va1k') },
      { name: "Mage's tower", id: this.sanitizeUrl('F7k5rqeU6t8') },
      { name: 'Enchanted library', id: this.sanitizeUrl('Nd0beTmpfVA') },
      { name: 'City of Tears', id: this.sanitizeUrl('yo0zzQm70Jg') },
    ]
    this.mood = [
      { name: 'Aftermath', id: this.sanitizeUrl('4xe6oOmidwI') },
      { name: 'Adventure begins', id: this.sanitizeUrl('Jikm8CCRbdM') },
      { name: 'Last goodbye', id: this.sanitizeUrl('mFsQpCjRyvY') }, 
      { name: 'On the Nature of Daylight', id: this.sanitizeUrl('u_d23K_-v1Q') }, 
    ]

    // Initialize tabs
    this.tabs = [
      { title: 'Combat', trackList: this.combat },
      { title: 'Nature', trackList: this.nature },
      { title: 'City', trackList: this.city },
      { title: 'Dungeon', trackList: this.dungeon },
      { title: 'Mystery', trackList: this.mystery },
      { title: 'Mood', trackList: this.mood },
    ];
  }

  sanitizeUrl(id: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}?loop=1&playlist=${id}`);
  }
}