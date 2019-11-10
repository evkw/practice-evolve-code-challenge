import { TestBed } from '@angular/core/testing';
import { TypeService } from './type.service';
import { TestBaseModule } from 'src/app/spec/data-service-test.spec';

describe('TypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [TestBaseModule],
    providers: [TypeService]
  }));

  it('should be created', () => {
    const service: TypeService = TestBed.get(TypeService);
    expect(service).toBeTruthy();
  });
});

