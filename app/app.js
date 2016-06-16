var myApp = angular.module('resultApp', []);

angular.module('resultApp', []).controller('RestultsTableContoller', function($http){
  
  //Fetching rsvp data from REST Api
  this.resultsData = [];
  
  this.refreshResults = function(){
    $http.get("http://beataeskrisztian.hu/rest/rsvps")
      .then(function(response) {
        this.resultsData = response.data;
      }.bind(this));
  }.bind(this);
  this.refreshResults();
  
  this.filter_attending= function(entry){
    return entry.attending === "true";
  };
  
  this.filter_diet = function(entry){
    return entry.food.vegetarian > 0;
  };
  
  //Filtering General
  this.filteredResults = [];
  
  this.filterResults = function(filter_func){
    this.resultsData = this.resultsData.filter(filter_func);
  }.bind(this);

  
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