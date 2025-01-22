package com.luv2code.ecommerce.projection;

import org.springframework.data.rest.core.config.Projection;
import com.luv2code.ecommerce.entity.Product;

@Projection(name = "customProduct", types = { Product.class })
public interface ProductProjection {
    String getSku();
    String getName();
    String getDescription();
    Double getUnitPrice();
    String getDateCreated();
    String getLastUpdated();
    String getImageUrl(); 
    Boolean getActive(); 
    Integer getUnitsInStock(); 
}
