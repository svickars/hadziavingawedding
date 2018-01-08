var allNames = [],
  plusOnes = [],
  noOnes = [];

// data begin

var data = [{
    "rsvpCode": "TESTS002",
    "guest1": "Lesley Vickars",
    "guest2": "Mark Vickars",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "TESTS001",
    "guest1": "Sam Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "TESTS003",
    "guest1": "Josh Vickars",
    "guest2": "Beata Vickars",
    "kids": 1,
    "kidsNames": "Adam",
    "status": "family"
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
  guest1 = "",
  guest2 = "",
  kids = "",
  status = "";

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
            guest1 = data[i].guest1;
            guest2 = data[i].guest2;
            kids = data[i].kids;
            kidsNames = data[i].kidsNames;
            status = data[i].status;
            console.log(status);
          }
        }

        https: //docs.google.com/forms/d/e/1FAIpQLScphBnHhJLUFqsTiBMGSYRTQSMmrYstSPSzBngUi8o0-R1MfQ/viewform?usp=sf_link

          if (allNames.includes(code) === false) {
            $(".instructions2").html("That doesn't look right. Give it another go.");
          } else {
            $(".instructions2").html("");
            if (status === "ind") {
              $(".centerContainer").fadeOut(function() {
                $(this).css("border", "10px solid #b296c5").css("height", "750px").css("padding-top", "0").html('<iframe               src="https://docs.google.com/forms/d/e/1FAIpQLSf8LHHYH3NXVuopbSyi_71bWocmZR6nX546bKHF_dWp0vu2Pg/viewform?embedded=true&usp=pp_url&entry.1651278538=' + code + '&entry.1010062915=' + guest1 + '&entry.487716855&entry.307816897&entry.1150828673&entry.1688124554&entry.603971525&entry.1654011779&entry.1224320764&entry.969733510" width="355" height="730" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
              }).fadeIn();
            }
            if (status === "couple") {
              $(".centerContainer").fadeOut(function() {
                $(this).css("border", "10px solid #b296c5").css("height", "750px").css("padding-top", "0").html('<iframe               src="https://docs.google.com/forms/d/e/1FAIpQLScphBnHhJLUFqsTiBMGSYRTQSMmrYstSPSzBngUi8o0-R1MfQ/viewform?usp=pp_url&entry.1620511179=' + code + '&entry.1010062915=' + guest1 + '&entry.487716855=' + guest2 + '&entry.307816897&entry.1150828673&entry.969733510" width="355" height="730" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
              }).fadeIn();
            }
            if (status === "family") {
              $(".centerContainer").fadeOut(function() {
                $(this).css("border", "10px solid #b296c5").css("height", "750px").css("padding-top", "0").html('<iframe               src="https://docs.google.com/forms/d/e/1FAIpQLSdntdcJVHxXfSwkfMFO3q7-5wqNxInQX_L78_KKmJKe0bnGvA/viewform?usp=pp_url&entry.1620511179=' + code + '&entry.1010062915=' + guest1 + '&entry.487716855=' + guest2 + '&entry.1062255074=' + kids + '&entry.1069086486=' + kidsNames + '&entry.307816897&entry.1150828673&entry.969733510" width="355" height="730" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>');
              }).fadeIn();
            }
          }
      }
    });
  }).fadeIn();

  $(".instructions").fadeOut(function() {
    $(this).html('Enter the RSVP code included with your invitation.')
  }).fadeIn();
}

function oc(a) {
  var o = {};
  for (var i = 0; i < a.length; i++) {
    o[a[i]] = '';
  }
  return o;
}
