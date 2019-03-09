// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

/*=======BootStrap JS Start Here===========*/
$(function () {
       $('.camera_wrap').camera({
                playPause: false,
                navigation: false,
                hover: false,
                loader: false,
                time: 3200,
                pauseOnClick: false,
                pagination: false
            });
});

/*=======BootStrap JS End Here===========*/
/*=======Form Validation Here===========*/
jQuery.validator.setDefaults({
        success: "valid"

    });
$(function () {

    var validator = $("#regester").validate({
        rules: {

            fname: "required",
            uname: {
                required: true,
                minlength: 4,
                maxlength: 8
            },
            email: {
                required: true,
                email: true
            },
            mobile: {
                required: true,
                digits: true,
                minlength: 11,
                maxlength: 15
            },
            SelectName: {
                valueNotEquals: "default",
                required: true
            },
            address: "required",
            password: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            cpassword: {
                required: true,
                equalTo: "#password"
            }

        },
        messages: {

            fname: {
                required: "*Enter Your Full Name"
            },
            uname: {
                required: "*Enter Your User Name"
            },
            email: {
                required: " *Enter Your Email Address",
                email: "Please Enter Your Valid Email Address"
            },
            mobile: {
                required: "*Please Enter Your Mobile Number",
                digits: "*Please Enter Valid Mobile numbers",
                minlength: "*Please Enter at least 11 Digit."
            },
            SelectName: {
                required: "*Please Select Account Type",
                valueNotEquals: "Please select an item!"

            },
            address: "*Enter Your Address",
            password: {
                required: "*Please Enter Password",
                minlength: "*Password shoud be at least 6 characters.",
                maxlength: "*Password shoud be among 16 characters."

            },
            cpassword: {
                required: "*Please Re-enter password the same password as above",
                equalTo: "*Password Not Matched !Please Enter the same password as above"

            }
        }
    });

    $.validator.methods.email = function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
    };

    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");
});

/*=======Form Validation End Here===========*/
/*===== Easing Scroll Start Here ======*/
$(function () {

    new WOW().init();


    $(".nav a,#home a,.category a").bind("click", function (event) {
        var $anchor = $(this);
        $("html,body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }
        , 1500, "easeInOutExpo");
        event.preventDefault();

    });
});      /*===== Easing Scroll End Here ======*/

   $(function () {
                var containerEl = document.querySelector('.shoes-gallery');

                var mixer = mixitup(containerEl, {
                    animation: {
                        effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
                    },
                    load: {
                        filter: 'none' // Ensure all targets start from hidden (i.e. display: none;)
                    }
                });

                // Add a class to the container to remove 'visibility: hidden;' from targets. This
                // prevents any flickr of content before the page's JavaScript has loaded.

                containerEl.classList.add('mixitup-ready');

                // Show all targets in the container

                mixer.show()
                        .then(function () {
                            // Remove the stagger effect for any subsequent operations

                            mixer.configure({
                                animation: {
                                    effects: 'fade scale',
                                    duration: 500
                                }
                            });
                        });
            });