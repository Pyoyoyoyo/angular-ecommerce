import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null; // Initialize as null for safety

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.handleProductDetails();
  }

  handleProductDetails() {
    this.route.paramMap.subscribe((params) => {
      const theProductId = +params.get('id')!;
      console.log('Product ID from URL:', theProductId);

      if (!isNaN(theProductId) && theProductId > 0) {
        this.productService.getProduct(theProductId).subscribe(
          (data) => {
            console.log('Product Data Fetched:', data);
            this.product = data;
            this.cdRef.detectChanges(); // Force update
          },
          (error) => {
            console.error('Error fetching product:', error);
          }
        );
      }
    });
  }
}
