import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Form,FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';


@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm!: FormGroup;
  title = 'mybakedgoods';
  submitted = false;

  constructor(private formBuilder: FormBuilder, private cartService:CartService) {}
  public products: any =[];
  public grandTotal : number =0 ;
  date1 = new Date();

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{this.products=res;
    this.grandTotal = this.cartService.getTotalPrice()
    })
    
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
    console.log(this.checkoutForm.value);
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item)
  }
}
