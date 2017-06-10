var allNames = [],
  plusOnes = [],
  noOnes = [];

// data begin

var data = [{
    "rsvpCode": "VICKS390",
    "first": "Sam",
    "last": "Vickars",
    "guests": "TRUE"
  },
  {
    "rsvpCode": "TAYLM385",
    "first": "Meghan",
    "last": "Taylor",
    "guests": "FALSE"
  },
  {
    "rsvpCode": "VICKI812",
    "first": "Iain",
    "last": "Vickars",
    "guests": "TRUE"
  },
  {
    "rsvpCode": "VICKM483",
    "first": "Mark",
    "last": "Vickars",
    "guests": "FALSE"
  },
  {
    "rsvpCode": "VICKL436",
    "first": "Lesley",
    "last": "Vickars",
    "guests": "FALSE"
  }
]
// data end

for (var i = 0; i < data.length; i++) {
  allNames.push(data[i].rsvpCode);
  if (data[i].guests === "TRUE") {
    plusOnes.push(data[i].rsvpCode);
  } else {
    noOnes.push(data[i].rsvpCode);
  }
}

var code = "",
  firstName = "",
  lastName = "";

function rsvpBegin() {
  $(".rsvp").fadeOut(function() {
    $(this).html('<input type="text" class="rsvpCode" id="rsvpCode" placeholder="RSVP code" autofocus>')
    $('#rsvpCode').keyup(function() {
      if ($(this).val().length >= 8) {
        $(".instructions").html('Hit the enter key!');
      }
    })
    $('#rsvpCode').keydown(function(event) {
      if (event.keyCode == 13) {
        code = $(this).val();
        code = code.toUpperCase();

        for (var i = 0; i < data.length; i++) {
          if (data[i].rsvpCode === code) {
            firstName = data[i].first;
            lastName = data[i].last;
            console.log(lastName);
          }
        }


        if (allNames.includes(code) === false) {
          $(".instructions2").html("That doesn't look right. Give it another go.");
        } else {
          $(".instructions2").html("");
          if (plusOnes.includes(code) === true) {
            $(".centerContainer").fadeOut(function() {


              $(this).css("height", "750px").css("padding-top", "0").html('<iframe               src="https://docs.google.com/forms/d/e/1FAIpQLScphBnHhJLUFqsTiBMGSYRTQSMmrYstSPSzBngUi8o0-R1MfQ/viewform?embedded=true&usp=pp_url&entry.1620511179=' + code + '&entry.1010062915=' + firstName + '&entry.487716855=' + lastName + '&entry.307816897&entry.1150828673&entry.1688124554&entry.603971525&entry.1654011779&entry.1224320764&entry.969733510" width="355" height="730" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
            }).fadeIn();
          } else {
            if (noOnes.includes(code) === true) {
              $(".centerContainer").fadeOut(function() {
                $(this).css("border-color", "#228B22").css("height", "750px").css("padding-top", "0").html('<iframe               src="https://docs.google.com/forms/d/e/1FAIpQLSf8LHHYH3NXVuopbSyi_71bWocmZR6nX546bKHF_dWp0vu2Pg/viewform?embedded=true&usp=pp_url&entry.1651278538=' + code + '&entry.1010062915=' + firstName + '&entry.487716855=' + lastName + '&entry.307816897&entry.1150828673&entry.1688124554&entry.603971525&entry.1654011779&entry.1224320764&entry.969733510" width="355" height="730" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
              }).fadeIn();
            }
          }
        }
      }
    });
  }).fadeIn();

  $(".instructions").fadeOut(function() {
    $(this).html('Enter the RSVP code included on your save the date card or invitation')
  }).fadeIn();
}

function oc(a) {
  var o = {};
  for (var i = 0; i < a.length; i++) {
    o[a[i]] = '';
  }
  return o;
}
