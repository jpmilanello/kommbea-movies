define([
  'jquery',
  'underscore',
  'backbone',
  // Using the Require.js text! plugin, we are loaded raw text
  // which will be used as our views primary template
  'collections/movies',
  'text!templates/movies/list.html'
], function($, _, Backbone, Movies,moviesListTemplate){
  	var MovieList = Backbone.View.extend({
  		/* HTML element for single page app */
  		el: '#list-movies',
      initialize: function() {
        //setting collection
        this.movies = new Movies();
        this.movies.add([
          {
            id: "1",
            title: "Guardians of the Galaxy", 
            thumb: "gotg.png",
            cover: "gotg_cover.jpg",
            description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth, is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the “Guardians of the Galaxy” to save the world.",
            score: "4",
            director: "James Gunn",
            writers: "James Gunn, Nicole Pertman, Dan Abnett, Andy Lanning",
            cast: "Chriss Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "2",
            title: "The First Avenger", 
            thumb: "tfavenger.png",
            cover: "ca_cover.jpg",
            description: "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price if he attempts to take down a war monger and a terrorist organization.",
            score: "3.5",
            director: "Joe Johnston",
            writers: "Christopher Markus, Stephen McFeely, Joe Simon and Jack Kirby",
            cast: "Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones, Hugo Weaving, Samuel L. Jackson and others.",
            trailer: "gotg.mp4",
            likes: 3234
          },
          {
            id: "3",
            title: "The Amazing Spider-Man 2", 
            thumb: "taspiderman.png",
            cover: "s_cover.jpg",
            description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
            score: "4.1",
            director: "Marc Webb",
            writers: "Alex Kurtzman, Roberto Orci, Jeff Pinkner and others.",
            cast: "Andrew Garfield, Emma Stone, Jamie Foxx and others...",
            trailer: "gotg.mp4",
            likes: 2951
          },
          {
            id: "4",
            title: "The Incredible Hulk", 
            thumb: "tihulk.png",
            cover: "h_cover.jpg",
            description: "Bruce Banner, a scientist on the run from the U.S. Government must find a cure for the monster he emerges whenever he loses his temper. However, Banner then must fight a soldier whom unleashes himself as a threat stronger than he.",
            score: "3.7",
            director: "Louis Leterrier",
            writers: "Zak Penn",
            cast: "Edward Norton, Liv Tyler, Tim Roth and others....",
            trailer: "gotg.mp4",
            likes: 3248
          },
          {
            id: "5",
            title: "Thor: The Dark World", 
            thumb: "thor.png",
            cover: "t_cover.jpg",
            description: "When Thor's love interest gets cursed with a powerful object, Thor must protect it before an army and its ruthless leader try to get their hands on it to take over the remains of Earth.",
            score: "4.3",
            director: "Alan Taylor",
            writers: "Christopher Yost, Christopher Markus and others.",
            cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "6",
            title: "The First Avenger", 
            thumb: "tfavenger.png",
            cover: "ca_cover.jpg",
            description: "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price if he attempts to take down a war monger and a terrorist organization.",
            score: "3.5",
            director: "Joe Johnston",
            writers: "Christopher Markus, Stephen McFeely, Joe Simon and Jack Kirby",
            cast: "Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones, Hugo Weaving, Samuel L. Jackson and others.",
            trailer: "gotg.mp4",
            likes: 3234
          },
          {
            id: "7",
            title: "Thor: The Dark World", 
            thumb: "thor.png",
            cover: "t_cover.jpg",
            description: "When Thor's love interest gets cursed with a powerful object, Thor must protect it before an army and its ruthless leader try to get their hands on it to take over the remains of Earth.",
            score: "4.3",
            director: "Alan Taylor",
            writers: "Christopher Yost, Christopher Markus and others.",
            cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "8",
            title: "Guardians of the Galaxy", 
            thumb: "gotg.png",
            cover: "gotg_cover.jpg",
            description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth, is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the “Guardians of the Galaxy” to save the world.",
            score: "4",
            director: "James Gunn",
            writers: "james Gunn, Nicole Pertman, Dan Abnett, Andy Lanning",
            cast: "Chriss Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "9",
            title: "The Incredible Hulk", 
            thumb: "tihulk.png",
            cover: "h_cover.jpg",
            description: "The InBruce Banner, a scientist on the run from the U.S. Government must find a cure for the monster he emerges whenever he loses his temper. However, Banner then must fight a soldier whom unleashes himself as a threat stronger than he.",
            score: "3.7",
            director: "Louis Leterrier",
            writers: "Zak Penn",
            cast: "Edward Norton, Liv Tyler, Tim Roth and others. Samuel L. Jackson and others.",
            trailer: "gotg.mp4",
            likes: 3234
          },
          {     
            id: "10",
            title: "The Amazing Spider-Man 2", 
            thumb: "taspiderman.png",     
            cover: "s_cover.jpg",
            description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
            score: "4.1",
            director: "Marc Webb",
            writers: "Alex Kurtzman, Roberto Orci, Jeff Pinkner and others.",
            cast: "Andrew Garfield, Emma Stone, Jamie Foxx and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "11",
            title: "The Amazing Spider-Man 2", 
            thumb: "taspiderman.png",
            cover: "s_cover.jpg",
            description: "When New York is put under siege by Oscorp, it is up to Spider-Man to save the city he swore to protect as well as his loved ones.",
            score: "4.1",
            director: "Marc Webb",
            writers: "Alex Kurtzman, Roberto Orci, Jeff Pinkner and others.",
            cast: "Andrew Garfield, Emma Stone, Jamie Foxx and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "12",
            title: "The First Avenger", 
            thumb: "tfavenger.png",
            cover: "ca_cover.jpg",
            description: "Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price if he attempts to take down a war monger and a terrorist organization.",
            score: "3.5",
            director: "Joe Johnston",
            writers: "Christopher Markus, Stephen McFeely, Joe Simon and Jack Kirby",
            cast: "Chris Evans, Hayley Atwell, Sebastian Stan, Tommy Lee Jones, Hugo Weaving, Samuel L. Jackson and others.",
            trailer: "gotg.mp4",
            likes: 3234
          },
          {
            id: "13",
            title: "The Incredible Hulk", 
            thumb: "tihulk.png",
            cover: "h_cover.jpg",
            description: "Bruce Banner, a scientist on the run from the U.S. Government must find a cure for the monster he emerges whenever he loses his temper. However, Banner then must fight a soldier whom unleashes himself as a threat stronger than he.",
            score: "3.7",
            director: "Louis Leterrier",
            writers: "Zak Penn",
            cast: "Edward Norton, Liv Tyler, Tim Roth and others....",
            trailer: "gotg.mp4",
            likes: 3248
          },
          {
            id: "14",
            title: "Thor: The Dark World", 
            thumb: "thor.png",
            cover: "t_cover.jpg",
            description: "When Thor's love interest gets cursed with a powerful object, Thor must protect it before an army and its ruthless leader try to get their hands on it to take over the remains of Earth.",
            score: "4.3",
            director: "Alan Taylor",
            writers: "Christopher Yost, Christopher Markus and others.",
            cast: "Chris Hemsworth, Natalie Portman, Tom Hiddleston and others...",
            trailer: "gotg.mp4",
            likes: 3542
          },
          {
            id: "15",
            title: "Guardians of the Galaxy", 
            thumb: "gotg.png",
            cover: "gotg_cover.jpg",
            description: "After stealing a mysterious orb in the far reaches of outer space, Peter Quill from Earth, is now the main target of a manhunt led by the villain known as Ronan the Accuser. To help fight Ronan and his team and save the galaxy from his power, Quill creates a team of space heroes known as the “Guardians of the Galaxy” to save the world.",
            score: "4",
            director: "James Gunn",
            writers: "James Gunn, Nicole Pertman, Dan Abnett, Andy Lanning",
            cast: "Chriss Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper and others...",
            trailer: "gotg.mp4",
            likes: 3542
          }
        ])
        this.moviesFiltered = this.movies.clone();
        this.render();
      },
  		render: function () {
        
  			/* Create an instance for reference in anonymous function */
  			var element = this;
  			/* Load the html template with the data. Each row is passed in JSON format */
  			var listTemplate = _.template(moviesListTemplate)({movies: this.moviesFiltered.models});
  			element.$('#movies-main').html(listTemplate);	
        $.fn.stars = function() {
            return $(this).each(function() {
                // Get the value
                var val = parseFloat($(this).html());
                // Make sure that the value is in 0 - 5 range, multiply to get width
                var size = Math.max(0, (Math.min(5, val))) * 16;
                // Create stars holder
                var $span = $('<span />').width(size);
                // Replace the numerical value with stars
                $(this).html($span);
            });
        }
        $('.expandable-info .stars').stars();
  		},
      /* Control events */
      events: {
        'click #list-movies': 'closeInfo',
        'click .movie': 'showInfo',
        'click .watch-trailer':'openModal',
        'click .search-img':'search',
        'keyup .search' : 'search'
      },
      showInfo: function (ev) {
        var element = $(ev.currentTarget);
        idInfo = element.attr('id').split("movie")[1];
        if( $('.expandable-info#info'+idInfo).hasClass('closed')){
          this.closeInfo();
          var element = $(ev.currentTarget);
          index = $('.movie').index(element);
          var documentWidth = viewport().width;
          if(documentWidth < 590) {
            mainImageHeight = 0;
            moviesPerRow = 2;
          }else if(documentWidth < 768) {
            mainImageHeight = $('#highlight').height();
            moviesPerRow = 3;
          }else {
            mainImageHeight = $('#highlight').height();
            moviesPerRow = 5;
          }
          row = Math.floor(index/moviesPerRow); 
          thumbHeight = element.height();
          
          element.addClass('spaced');
          topMeasure = (row + 1)*(thumbHeight + documentWidth*0.021*0.8333);
          $('.expandable-info#info'+idInfo).removeClass('closed');
          $('.fake-background').css({display:"block"});
          setTimeout(function(){ 
            $(window).scrollTop(topMeasure - 75 + mainImageHeight);
            $('.expandable-info#info'+idInfo).css({"top":topMeasure + "px","height":"387px"});
          }, 50);
           setTimeout(function(){ 
            element.children('.arrow-top').css({display:"inline-block"});
          }, 100);
        }else{
          this.closeInfo();
        }
        function viewport(){
          var e = window
          , a = 'inner';
          if ( !( 'innerWidth' in window ) )
          {
          a = 'client';
          e = document.documentElement || document.body;
          }
          return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
        };
      }, 
      closeInfo: function (ev) {
        $('.fake-background').css({display:"none"});
        $('.movie').removeClass('spaced');
        $('.movie').children('.arrow-top').css({display:"none"});
        $('.expandable-info').addClass('closed');
        $('.expandable-info').css({"height":"0px"});
      },
      openModal: function (ev) {
        var element = $(ev.currentTarget);
        $('.modal-title').html(element.parent().children('.article-title').html());
        $('video').attr('src', element.parent().children('.videoUrl').val());
        $("video")[0].load();
      },
      search: function (ev) {
        if(!ev.keyCode || ev.keyCode == 13){
          $('.no-results').addClass('hide');
          var searchFor = $('.search').val();
          var pattern = new RegExp(searchFor,"gi");
          var filteredColl = this.movies.filter(function(item){
            return pattern.test(item.get("title"));
          });
        
          this.moviesFiltered.reset(filteredColl);   
          if(this.moviesFiltered.size() == 0){
            $('.no-results').removeClass('hide');  
          }
          this.render();
        }
      }
  	});
  // Our module now returns our view
  return MovieList;
});

