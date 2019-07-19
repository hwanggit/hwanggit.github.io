// Create new timeline
var tl = new TimelineMax();

// Check if animation finished
var animationDone = true;

// Dynamically resize globe
$(document).ready(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '72%')
        $('#cloud-header-3').css('top', $(window).height() * 0.30)
        $('#cloud-header-3').css('left', '68%')
        $('#cloud-header').css('top', $(window).height() * 0.20)
        $('#cloud-header').css('left', '35%')
    }
    else {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '50%')
        $('#cloud-header-3').css('top', $(window).height() * 0.28)
        $('#cloud-header-3').css('left', '70%')
        $('#cloud-header').css('top', $(window).height() * 0.16)
        $('#cloud-header').css('left', '28%')
    }

    // Resize dialog
    resizeDialogue("none")

    // Create a intro message and toggle 
    var message = 'Click me to see my story!'
    var toggle = 0

    // After a few seconds, display click me
    var messageRepeat = setInterval(function () {
        // Resize dialogue then toggle between messages
        resizeDialogue(message)

        if (toggle == 0) {
            message = "Hi, I'm Howard! <br> Welcome to my website!"
            toggle = 1
        }
        else {
            message = 'Click me to see my story!'
            toggle = 0
        }

        // On click, stop toggle
        $('#sprout-animate').click(function () {
            clearInterval(messageRepeat)
        });
    }, 2500)
});

$(window).resize(function () {
    if ($(window).width() <= 575) {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height() * 2)
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '72%')
        $('#cloud-header-3').css('top', $(window).height() * 0.30)
        $('#cloud-header-3').css('left', '68%')
        $('#cloud-header').css('top', $(window).height() * 0.20)
        $('#cloud-header').css('left', '35%')
    }
    else {
        $('#globe-animate').css('height', $(window).height() - $('#topnav').height())
        $('#globe-animate').css('padding-top', $('#topnav').height())
        $('#globe-animate svg').css('margin-top', $(window).height() * 0.6)
        $('#cloud-header-2').css('top', $(window).height() * 0.25)
        $('#cloud-header-2').css('left', '50%')
        $('#cloud-header-3').css('top', $(window).height() * 0.28)
        $('#cloud-header-3').css('left', '70%')
        $('#cloud-header').css('top', $(window).height() * 0.16)
        $('#cloud-header').css('left', '28%')
    }
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))
});

// Animate clouds
$(function () {
    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header-3", 65, 70, 15000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header-3", 65, 70, 15000)
    }, 30000);

    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header-2", 55, 45, 8000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header-2", 55, 45, 8000)
    }, 16000);

    // Repeatedly move cloud left and right
    moveLeftandRight("cloud-header", 40, 30, 10000)
    window.setInterval(function () {
        moveLeftandRight("cloud-header", 40, 30, 10000)
    }, 20000);
});

// Animate earth rotate, and person dialog
$('#sprout-animate').click(function () {
    // toggle switch
    if (animationDone === true) {
        // Change background
        generateBackground('images/animations/skyscrapers.png', 6)

        // Hide dialog box
        $('#dialog-box, #bottom-triangle').css('visibility', 'hidden')

        animationDone = false;
    }
});

// Animate walking cycle
function startWalk(duration) {
    var cycles = new Array();

    // Add 8 cycles
    for (var i = 1; i < 9; i++) {
        cycles[i] = 'images/Walk cycle/cycle' + i + '.png'
    }

    //start with id=0
    var currId = 0;
    var counter = 0;

    var animate = window.setInterval(function () {
        // Switch image
        $('#sprout-animate img').attr('src', cycles[currId])

        // Increment counter
        currId++
        counter++

        // Once counter reaches threshold, stop
        if (counter === duration) clearInterval(animate)

        // Reset currId
        if (currId === 9) {
            currId = 0;
        }
    }, 100);
}

// Function move left and right
function moveLeftandRight(id, start, end, duration) {
    $("#" + id).animate({
        left: start + '%',
    }, duration, function () {
    });
    $("#" + id).animate({
        left: end + '%',
    }, duration, function () {
    });
}

// Rotation Animation plugin (cross-browser)
$.fn.animateRotate = function (endAngle, options, startAngle) {
    return this.each(function () {
        var elem = $(this), rad, costheta, sintheta, matrixValues, noTransform = !('transform' in this.style || 'webkitTransform' in this.style || 'msTransform' in this.style || 'mozTransform' in this.style || 'oTransform' in this.style),
            anims = {}, animsEnd = {};
        if (typeof options !== 'object') {
            options = {};
        }
        else if (typeof options.extra === 'object') {
            anims = options.extra;
            animsEnd = options.extra;
        }
        anims.deg = startAngle;
        animsEnd.deg = endAngle;
        options.step = function (now, fx) {
            if (fx.prop === 'deg') {
                if (noTransform) {
                    rad = now * (Math.PI * 2 / 360);
                    costheta = Math.cos(rad);
                    sintheta = Math.sin(rad);
                    matrixValues = 'M11=' + costheta + ', M12=-' + sintheta + ', M21=' + sintheta + ', M22=' + costheta;
                    $('body').append('Test ' + matrixValues + '<br />');
                    elem.css({
                        'filter': 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',' + matrixValues + ')',
                        '-ms-filter': 'progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\',' + matrixValues + ')'
                    });
                }
                else {
                    elem.css({
                        webkitTransform: 'rotate(' + now + 'deg)',
                        mozTransform: 'rotate(' + now + 'deg)',
                        msTransform: 'rotate(' + now + 'deg)',
                        oTransform: 'rotate(' + now + 'deg)',
                        transform: 'rotate(' + now + 'deg)'
                    });
                }
            }
        };
        if (startAngle) {
            $(anims).animate(animsEnd, options);
        }
        else {
            elem.animate(animsEnd, options);
        }
    });
};

// Function to resize dialogue box
function resizeDialogue(message) {
    // If message is empty, don't change message
    if (message !== "none") {
        $('#monologue').html(message)
    }

    // Set dialog box height and width to be same as text
    $('#dialog-box').css('height', $('#dialog-box p').height() * 1.5)
    $('#dialog-box').css('width', $('#dialog-box p').width() * 1.2)
    $('#dialog-box p').css('padding-top', $('#dialog-box p').height() * 0.25)

    // Set top margin of sprout animation
    $('#sprout-animate').css('margin-top', parseInt($('#globe-animate svg').css('margin-top')) - parseInt($('#sprout-animate').height()))    
    tl.from('#dialog-box, #bottom-triangle', 0.5, { scaleY: 0, transformOrigin: "bottom", ease: Back.easeOut })
}

// Create a function to popup a background image to sprout
function generateBackground(image, offset) {
   $('#sprout-animate').css({"background-image": "url('"+image+"')", "animation-name": "popin",
            "animation-duration": "1.5s", "background-position": "bottom" 
        + offset + " px center"});
   
}