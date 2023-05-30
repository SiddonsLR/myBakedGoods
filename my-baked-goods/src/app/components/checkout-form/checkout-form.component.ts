import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Checkout } from 'src/app/models/checkout';
import { NgForm } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkout: Checkout = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: 0,
    creditCard: '',
  };
  checkoutForm!: FormGroup;
  title = 'mybakedgoods';
  submitted = false;
  @Output() typedForm: EventEmitter<Checkout> = new EventEmitter<Checkout>();
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}
  public products: any = [];
  public grandTotal: number = 0;
  date1 = new Date();

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });

    //validation
    this.checkoutForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],

      creditCard: ['', Validators.required],
    });
  }

  submitData() {
    this.submitted = true;
    if (this.checkoutForm.invalid) {
      return;
    }
    alert('Thank you for Shopping at Bake My Good');
    this.checkoutService
      .postsCheckout(this.checkoutForm.value)
      .subscribe((res) => {
        this.checkoutForm.reset();
      });
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
}
