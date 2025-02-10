package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow all origins (for development purposes, you can restrict it to a specific origin later)
        registry.addMapping("/**")  // Apply to all endpoints
                .allowedOrigins("http://localhost:3000")  // Allow your frontend URL
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow HTTP methods
                .allowedHeaders("*")  // Allow all headers
                .allowCredentials(true);
    }
}
