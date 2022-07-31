gitimport { TestBed } from '@angular/core/testing';

import { AddressService } from './address.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('AddressService', () => {
  let service: AddressService,
  httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AddressService
      ]
    });
    service = TestBed.inject(AddressService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get user addresses', ()=>{
    it('should return exp')
  })

  describe('add address', ()=>{})

  describe('update address', ()=>{})




});
