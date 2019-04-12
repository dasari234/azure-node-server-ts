import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureInfraComponent } from './azure-infra.component';

describe('AzureInfraComponent', () => {
  let component: AzureInfraComponent;
  let fixture: ComponentFixture<AzureInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
