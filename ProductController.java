package com.example.ecommerce.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.Map;

@RestController
public class ProductController {

    @GetMapping("/products")
    public List<Map<String, String>> getProducts() {
        return List.of(
            Map.of("id", "1", "name", "T-Shirt", "price", "499"),
            Map.of("id", "2", "name", "Shoes", "price", "999"),
            Map.of("id", "3", "name", "Watch", "price", "1499")
        );
    }
}
