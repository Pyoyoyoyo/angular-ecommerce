package com.luv2code.ecommerce.projection;

import org.springframework.data.rest.core.config.Projection;
import com.luv2code.ecommerce.entity.ProductCategory;

@Projection(name = "categoryProjection", types = ProductCategory.class)
public interface ProductCategoryProjection {
    Long getId();
    String getCategoryName();
}
