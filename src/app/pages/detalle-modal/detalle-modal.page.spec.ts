import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleModalPage } from './detalle-modal.page';

describe('DetalleModalPage', () => {
  let component: DetalleModalPage;
  let fixture: ComponentFixture<DetalleModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
