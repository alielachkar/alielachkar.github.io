(function ($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $footer = $('#footer'),
        $main = $('#main'),
        settings = {
            // Parallax background effect?
            parallax: true,

            // Parallax factor (lower = more intense, higher = less intense).
            parallaxFactor: 20
        };

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1800px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px'],
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Touch?
    if (browser.mobile) {

        // Turn on touch mode.
        $body.addClass('is-touch');

        // Height fix (mostly for iOS).
        window.setTimeout(function () {
            $window.scrollTop($window.scrollTop() + 1);
        }, 0);
    }

    // Footer.
    breakpoints.on('<=medium', function () {
        $footer.insertAfter($main);
    });

    breakpoints.on('>medium', function () {
        $footer.appendTo($header);
    });

    // Header.

    // Parallax background.

    // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
    if (browser.name == 'ie' || browser.mobile)
        settings.parallax = false;

    if (settings.parallax) {

        breakpoints.on('<=medium', function () {

            $window.off('scroll.strata_parallax');
            $header.css('background-position', '');

        });

        breakpoints.on('>medium', function () {

            $header.css('background-position', 'left 0px');

            $window.on('scroll.strata_parallax', function () {
                $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
            });

        });

        $window.on('load', function () {
            $window.triggerHandler('scroll');
        });
    }

    // Main Sections: Two.

    // Lightbox gallery.
    $window.on('load', function () {
        $('#two').poptrox({
            caption: function ($a) {
                return $a.next('h3').text();
            },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            popupCloserText: '',
            popupLoaderText: '',
            selector: '.work-item a.image',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: (breakpoints.active('<=small') ? 0 : 50),
        });
    });

    // Function to send the email using EmailJS.
    function sendEmail() {
        // Get form values
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Send email using EmailJS
        emailjs.send('service_9jrkwmi', 'template_29744y2', {
            from_name: name,
            from_email: email,
            message: message,
        })
            .then(function () {
                console.log('Email sent successfully!');
                // Clear form fields after successful submission
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .catch(function (error) {
                console.error('Error sending email:', error);
            });
    }

    // Add event listener to the submit button
    $('#submitBtn').on('click', function (event) {
        event.preventDefault(); // Prevent the default form submission
        sendEmail(); // Call the sendEmail function
    });

})(jQuery);
