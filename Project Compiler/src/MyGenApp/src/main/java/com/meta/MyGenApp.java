package com.meta;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class }, scanBasePackages = "com.meta.repository")
public class  MyGenApp{

    public static void main(String[] args) {
        SpringApplication.run(MyGenApp.class, args);
    }
}