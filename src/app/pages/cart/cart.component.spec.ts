import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {fakeAsync,tick} from '@angular/core/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let productService: ProductService;
  const mockProducts = [
	{
	  product: { id: 1, 
                name: "tshirt",
                quantity: 1,
                price: 2.50,
                description: "desc",
                image: "img"
	  }, 
	  quantity: 1
	},
    {
	 product: { id: 2, 
                name: "mug",
                quantity: 1,
                price: 2.50,
                description: "desc",
                image: "img"
	 }, 
	 quantity: 1
	}
   ]
  const mockCart = {
	cartCount: 1,
	products: mockProducts,
	totalPrice: 5.00,
	cartProducts: mockProducts	
  }	
   
  let  productServiceSpy = jasmine.createSpyObj<ProductService>(['getCart',]);
  
  beforeEach(async () => {
    
     productServiceSpy.getCart.and.returnValue(of(mockCart));

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CartComponent],
      providers: [{ provide: ProductService, useValue: productServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    
    
    productService = TestBed.inject(ProductService);
    
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

  it('cart should be empty', () =>{
    expect(component).toBeTruthy();
    component.emptyCart();
    expect(component.cartCount).toEqual(0);
    expect(component.products).toEqual([]);
    expect(component.totalPrice).toEqual(0.0);
  })
=======
  
  describe('ngOnInit', () => {
  it('testing productService getCart subscribe method is getting called', fakeAsync(() => {
	let subSpy = spyOn(productService.getCart(), 'subscribe');
	component.ngOnInit();
	tick();
	
	expect(subSpy).toHaveBeenCalled();
  }))
  })
  describe('removeFromCart', () => {
	it('should call removeFromCart() function', () => {
		 spyOn(component, 'removeFromCart').and.callFake;
        
		component.removeFromCart(mockProducts[0]);
		expect(component.removeFromCart).toHaveBeenCalled();
	})
  })
   describe('emptyCart', () => {
	it('should call emptyCart() function', () => {
		spyOn(component, 'emptyCart').and.callFake;

		component.emptyCart();
		expect(component.emptyCart).toHaveBeenCalled();
	})
  })

  
>>>>>>> ca7d12b83d3de54caa36bb34b12b7c2b8e587727
});
