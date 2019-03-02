package com.stackroute.recommendationservice.service;


import com.stackroute.recommendationservice.Domain.Product;
import com.stackroute.recommendationservice.Repository.ProductRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;
import java.util.List;


import static org.mockito.Mockito.*;

public class ProductServiceTest {
    Product product;

    @Mock
    ProductRepository productRepository;

    @InjectMocks
    ProductServiceImpl productService;
    List<Product> list = null;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        product = new Product();
        product.setProductId("1");
        product.setProductName("Shoe");
        product.setProductType("good");
        product.setProductTypeId("1");
        product.setImageURL("hkjh nkj");
        product.setMrp("2000");
        product.setPrice("1499");
        product.setDimension("14*10*5");
        product.setWeight("750gm");
        product.setSize("4,5,6,7,8,9");
        product.setGender("Women");
        product.setDescription("Raymond shoes for Women");
        product.setBrand("Raymond");
        product.setBrandId("1");
        product.setColour("Black");

        list = new ArrayList<> ();
        list.add(product);
    }

    @Test
    public void saveProductTest()
    {
        when(productRepository.save((Product)any())).thenReturn(product);
        Product savedProduct = productService.createNode(product);
        Assert.assertEquals(product,savedProduct);
    }

    @Test
    public void getProductTest() {
        productRepository.save(product);
        when(productRepository.findAll()).thenReturn(list);
        List<Product> productList = productService.getAll();
        Assert.assertEquals(list, productList);
    }
}
