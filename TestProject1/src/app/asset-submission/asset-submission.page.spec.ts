import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssetSubmissionPage } from './asset-submission.page';

describe('AssetSubmissionPage', () => {
  let component: AssetSubmissionPage;
  let fixture: ComponentFixture<AssetSubmissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetSubmissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssetSubmissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
