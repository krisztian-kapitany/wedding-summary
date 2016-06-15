var myApp = angular.module('resultApp', []);

angular.module('resultApp', []).controller('RestultsTableContoller', function(){
  
  this.resultsData = [{
		"email" : "guest",
		"mobile" : "+36207769662222",
		"attending" : "true",
		"guests" : "2",
		"food" : {
			"vegetarian" : "1"
		},
		"departing" : "2016-07-20T22:00:00.000Z",
		"homecoming" : "2016-07-26T22:00:00.000Z",
		"transport_options" : [{
				"option" : "car",
				"own_car" : true,
				"passangers" : "2",
				"from" : "2"
			}
		],
		"from" : "Budapest",
		"accomodation" : {
			"need_accomodation" : "true",
			"hotel" : "szkiraly",
			"from" : "2016-07-21T22:00:00.000Z",
			"to" : "2016-07-25T22:00:00.000Z"
		},
		"name" : "Én és én meg azirén nem"
	}, {
		"email" : "oscsi@batyus.hu",
		"mobile" : "",
		"attending" : "true",
		"guests" : "2",
		"food" : {
			"vegetarian" : 0
		},
		"departing" : "2016-07-20T22:00:00.000Z",
		"homecoming" : "2016-07-28T22:00:00.000Z",
		"transport_options" : [{
				"option" : "car",
				"from" : "Szentlőrinc"
			}, {
				"option" : "bus",
				"from" : "Szentlőrinc"
			}
		],
		"from" : "Budapest",
		"accomodation" : {
			"need_accomodation" : "true",
			"hotel" : "szkiraly",
			"from" : "2016-07-20T22:00:00.000Z",
			"to" : "2016-07-27T22:00:00.000Z"
		},
		"name" : "Benedek József"
	}, {
		"email" : "lengyelgabi71@gmail.com",
		"mobile" : "",
		"attending" : "false",
		"guests" : 1,
		"food" : {
			"vegetarian" : 0
		},
		"departing" : "2016-07-22T22:00:00.000Z",
		"homecoming" : "2016-07-24T22:00:00.000Z",
		"transport_options" : [],
		"from" : "Budapest",
		"accomodation" : {
			"need_accomodation" : "true",
			"hotel" : "szkiraly",
			"from" : "2016-07-23T22:00:00.000Z",
			"to" : "2016-07-24T22:00:00.000Z"
		},
		"name" : "Lengyel Gabriella"
	}];
  
  this.showDetail = -1;

  this.toggleDetail = function(id){
    if(this.showDetail == id){
      this.showDetail = -1; 
    }
    else{ 
       this.showDetail = id;
    }
  };
  
  this.showRawData = false;
  
  this.toggleRawData = function() {
    if(this.showRawData) this.showRawData = false;
    else this.showRawData = true;
  };
  
}); 