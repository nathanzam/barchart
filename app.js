(function() {
  'use strict';

  var app = angular.module("barchartApp", []);

  app.controller("chartCtrl", function ($http, $scope) {
    var url = "http://marketdata.websol.barchart.com/getQuote.json?key=14789158ab27ad054182017af6d5afd0&symbols=DWDP,TMUS,T,NOG,AAPL,GOOGL,MSFT,DIS,HAS";

    $http.get(url).then(function(response) {
      $scope.stocks = response.data;
    });
    $(".submit").on("click", function() {
      var inputValue = $(".searchBar").val();
      if(inputValue == '') {
        $(".input").after("<div class='alert alert-danger'>Enter a valid Stock Symbol</div>");
      } else {
      $http.get("http://marketdata.websol.barchart.com/getQuote.json?key=14789158ab27ad054182017af6d5afd0&symbols="+toUpperCase(inputValue)).then(function(respone){
        var data =response;
      $scope.everything = response.data;
    });
  }
  });
});
}());
