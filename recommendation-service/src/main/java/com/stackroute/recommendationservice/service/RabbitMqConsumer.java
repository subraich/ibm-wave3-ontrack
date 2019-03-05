package com.stackroute.recommendationservice.service;

import com.stackroute.rabbitmq.domain.Brand;
import com.stackroute.rabbitmq.domain.Category;
import com.stackroute.recommendationservice.domain.Product;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RabbitMqConsumer {
    @Autowired
    CategoryService categoryService;

    @Autowired
    BrandService brandService;

    @Autowired
    ProductService productService;

    Product product;

    Category category = new Category();
    Brand brand = new Brand();
    @RabbitListener(queues="${jsa.rabbitmq.queue2}", containerFactory="jsaFactory")
    public void recievedMessage(Product product) {

        System.out.println("rabbitMq call");
        System.out.println("recieved product: "+product.toString());
        category.setProductType(product.getProductType());
        category.setProductTypeId(product.getProductTypeId());
        categoryService.createNode(category);

        System.out.println("recieved : " +category.toString());
        //Product product1 = new Product();

        System.out.println("/////////////////////////////////");
        brand.setBrandId(product.getBrandId());
        brand.setBrand(product.getBrand());
        brandService.createBrandNode(brand);
        System.out.println("brand : " +brand.toString());


        this.product=product;
        System.out.println("***************************");
        productService.createNode(this.product);

    }
}