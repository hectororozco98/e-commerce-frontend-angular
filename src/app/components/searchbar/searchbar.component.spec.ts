import { Product } from 'src/app/models/product';
import { of } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, NgControl } from '@angular/forms';
import { AppRoutingModule } from './../../app-routing.module';
import { ProductService } from 'src/app/services/product.service';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { faShirt } from '@fortawesome/free-solid-svg-icons';

fdescribe('SearchbarComponent', () => {
  let component: SearchbarComponent;
  let fixture: ComponentFixture<SearchbarComponent>;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchbarComponent, AppComponent],
      providers: [ProductService, FormBuilder, AppComponent],
      imports: [AppRoutingModule, FormsModule, HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ProductService);
  });

  // it('should create', () => {
	
  //   expect(component).toBeTruthy();
  // });

  it('subscribe test for searching a product', fakeAsync(() => {
    let product = new Product(10, 'p1', 5, 'p1', 15, ''),
         searchTerm = component.searchTerm,
        spy = spyOn(service, 'getSearchProducts').and.returnValue(of([])),
        subSpy = spyOn(service.getSearchProducts(product.toString()), 'subscribe');
    component.ngOnInit();
    tick(); 
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();
  }));

  it('test for inside subscribe method', fakeAsync(() => {
    let product = new Product(1, 'p1', 5, 'p1', 15, '');
   
    let spy = spyOn(service, "getSearchProducts").and.returnValue(of([]));

    component.ngOnInit();
    tick();
    expect(component.searchTerm).toBeDefined();
    expect(component.search.length).toEqual(1);
    expect(component["appComponent"].isSearching).toEqual(true);
  }))






});
