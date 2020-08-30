import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteAssetPage } from './delete-asset.page';

describe('DeleteAssetPage', () => {
  let component: DeleteAssetPage;
  let fixture: ComponentFixture<DeleteAssetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAssetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAssetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
