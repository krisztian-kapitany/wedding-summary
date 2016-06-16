var resultsApp = angular.module('resultsApp', []);

angular.module('resultsApp', []).controller('RestultsTableContoller', function($http){
  
  //Fetching rsvp data from REST Api
  this.resultsData = [];
  
  this.refreshResults = function(){
    $http.get("http://beataeskrisztian.hu/rest/rsvps")
      .then(function(response) {
        this.resultsData = response.data;
      }.bind(this));
  }.bind(this);
  this.refreshResults();
  
  //Specific filter functions
  this.filter_attending= function(entry){
    return entry.attending === "true";
  };
  
  this.filter_diet = function(entry){
    return entry.food.vegetarian > 0;
  };
  
  this.filter_szkiraly = function(entry){
    return entry.attending === "true" 
    && entry.accomodation.need_accomodation === "true" 
    && entry.accomodation.hotel === "szkiraly";
  };
  
  this.filter_park = function(entry){
    return entry.attending === "true" 
    && entry.accomodation.need_accomodation === "true" 
    && entry.accomodation.hotel === "park";
  };
  
  this.filter_fenyo = function(entry){
    return entry.attending === "true" 
    && entry.accomodation.need_accomodation === "true" 
    && entry.accomodation.hotel === "fenyo";
  };
  
  this.filter_siesta = function(entry){
    return entry.attending === "true" 
    && entry.accomodation.need_accomodation === "true" 
    && entry.accomodation.hotel === "siesta";
  };
  
  this.filter_car = function(entry){
    return entry.transport_options.some(function(opt){
      return opt.option === "car";
    });
  };
  
  this.filter_bus = function(entry){
    return entry.transport_options.some(function(opt){
      return opt.option === "bus";
    }); 
  };
  
  this.filter_train = function(entry){
    return entry.transport_options.some(function(opt){
      return opt.option === "train";
    });
  };
  
  //Filtering General
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