'use strict'

$(document).foundation()

$(document).ready(function(){
    $('#mobile-nav').click(function(){
        $('#nav')
            .toggleClass("hide-for-small-only")
            .toggleClass("stacked-for-small")
            .toggleClass("nav-above")
    })

    $('#nav a').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            var href = $(this).attr('href')
            $('html,body').animate({
                scrollTop: $(href).offset().top
            }, 1000)
        })
    })

    // send mail
    // $('#contact-form').submit(function(e){
    //     e.preventDefault();
    //     var data = $(this).serialize();
    //     $('#submit-button')
    //         .attr('disabled','disabled')
    //         .empty()
    //         .html('<i class="fa fa-circle-o-notch fa-spin"></i>');
    //     $('input[type=email],textarea').attr("disabled","disabled");

    //     console.log(data);
    // })

    $('#copy-year').text( (new Date()).getFullYear() )

    var skills = [
         'HTML5', 'CSS3','eCommerce','PHP','MySQL','Node.js','JavaScript','jQuery','AngularJS','Ajax','WordPress','SASS','Python','UI/UX Design','Research','Public Speaking','Social Media','Microsoft Office', 'Photoshop','Illustrator','Responsive Web Design','Bootstrap','Foundation','Communication','Teamwork','Adaptability','Teaching'
     ];
     var skillset = $('#skills-set')
     $.each(skills, function(index,value){
        skillset.append("<span class=\"label\">" + value + "</span>")
     })


     // social 
    var social = [{
        icon: 'fa-facebook-official',
        url: 'https://www.facebook.com/casey.blamires'
    },{
        icon: 'fa-twitter',
        url: 'https://twitter.com/clblamires'
    },{
        icon: 'fa-pinterest',
        url: 'https://www.pinterest.com/clblamires/'
    },{
        icon: 'fa-linkedin',
        url: 'https://www.linkedin.com/in/casey-blamires-74344094/'
    },{
        icon: 'fa-instagram',
        url: 'https://www.instagram.com/clblamires/'
    },{
        icon: 'fa-github',
        url: 'https://github.com/clblamires'
    }]
    var social_footer = $('#social-icons-footer')
	var social_header = $('#social-icons-header')
    var social_url, social_icon;
    $.each(social, function(index,value){
        social_icon = '<i class="fa '+ value.icon +'"></i>'
        social_url = '<li><a href="' + value.url + '">' + social_icon  + '</a></li>'
        
        social_footer.append(social_url)
		social_header.append(social_url)
		console.log("Added?")
    })
})
