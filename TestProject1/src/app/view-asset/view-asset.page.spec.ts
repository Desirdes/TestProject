import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAssetPage } from './view-asset.page';

describe('ViewAssetPage', () => {
  let component: ViewAssetPage;
  let fixture: ComponentFixture<ViewAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
