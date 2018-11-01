/*
 * © 2018 Copyright Amadeus Unauthorized use and disclosure strictly forbidden.
 */
package com.decent.application.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PepperEntrypoint {
  @RequestMapping("/home")
  public String pepperSaysHello(){
    return "Meoooooow!";
  }

}
