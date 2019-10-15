package com.example.reactspringdemo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class MessageRestController {

    @RequestMapping("/api/message")
    public String message() {
        return "Hello World !!! server is running on time " + new Date() + " \n";
    }
}
