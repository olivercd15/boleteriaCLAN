import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { BoleteriaPage } from './boleteria.page';

describe('BoleteriaPage', () => {
  let component: BoleteriaPage;
  let fixture: ComponentFixture<BoleteriaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BoleteriaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BoleteriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
