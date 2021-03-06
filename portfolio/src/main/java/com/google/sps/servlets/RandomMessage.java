package com.google.sps.servlets;

import java.io.IOException;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter; 

@WebServlet("/randmessage")
public class RandomMessage extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
      String[] messages = {"My Name is Andrew", "Javascript is painful", "I want to cry", "This is miserable"};
      String json = convertToJson(messages);

      response.setContentType("application/json;");   
      response.getWriter().println(json);
      
  }

  private String convertToJson(String[] messages){
      int iterator = 1;
      String json = "{";
      for (String i:messages){
          json += "\"message" + iterator + "\":" + "\"" + i + "\"";
          if (iterator == 4){
              break;
          }else{
              json += ",";
          }
          iterator++;
      }
      json += "}";
      return json;
      
  }
}
