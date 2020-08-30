import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetStoragePage } from './asset-storage.page';

describe('AssetStoragePage', () => {
  let component: AssetStoragePage;
  let fixture: ComponentFixture<AssetStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetStoragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
