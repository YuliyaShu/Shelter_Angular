import { TestBed } from '@angular/core/testing';
import { PetsService } from './pets.service';
import { HttpClientModule } from '@angular/common/http';

describe('PetsService', () => {
  let service: PetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
    });
    service = TestBed.inject(PetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPets() should return value from observable',
    (done: DoneFn) => {
    service.getAllPets().subscribe(value => {
      expect(typeof value).toBeTruthy();
      done();
    });
  });

  it('getAllPets() should return an array of Pets',
    (done: DoneFn) => {
    service.getAllPets().subscribe(value => {
      value.map(pet => {
        expect('name' in pet).toBeTrue();
        expect('age' in pet).toBeTrue();
        expect('description' in pet).toBeTrue();
        expect('diseases' in pet).toBeTrue();
        expect('inoculations' in pet).toBeTrue();
        expect('breed' in pet).toBeTrue();
        expect('parasites' in pet).toBeTrue();
        expect('animalType' in pet).toBeTrue();
      })
      done();
    });
  });
});
