$(document).foundation()

$(document).ready(function(){
    $('#mobile-nav').click(function(){
        $('#nav').toggleClass("hide-for-small-only").toggleClass("stacked-for-small");
    })
})


var app = angular.module('portfolioApp', [] )

app.controller( 'skillsCtrl', function($scope){
    $scope.skills = [
        'HTML5', 'CSS3','eCommerce','PHP','MySQL','Node.js','JavaScript','jQuery','AngularJS','Ajax','WordPress','SASS','Python','UI/UX Design','Research','Public Speaking','Social Media','Microsoft Office'
    ]
})
