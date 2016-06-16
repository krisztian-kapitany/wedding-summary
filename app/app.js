var myApp = angular.module('resultApp', []);

angular.module('resultApp', []).controller('RestultsTableContoller', function($http){
  
  //Fetching rsvp data from REST Api
  this.resultsData = [];
  
  this.refreshResults = function(){
    $http.get("http://beataeskrisztian.hu/rest/rsvps")
      .then(function(response) {
        console.log(response.data);
        this.resultsData = response.data;
      }.bind(this));
  }.bind(this);
  this.refreshResults();
  
  //Toggle deatils panel instead of summary panel
  this.showDetail = -1;

  this.toggleDetail = function(id){
    if(this.showDetail == id){
      this.showDetail = -1; 
    }
    else{ 
       this.showDetail = id;
    }
  };
  
  //Toggle show raw data in details panel
  this.showRawData = false;
  
  this.toggleRawData = function() {
    if(this.showRawData) this.showRawData = false;
    else this.showRawData = true;
  };
  
});