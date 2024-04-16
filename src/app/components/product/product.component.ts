import { Component, Input } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() product!: Product;
}
