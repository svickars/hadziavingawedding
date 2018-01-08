var allNames = [],
  plusOnes = [],
  noOnes = [];

// data begin

var data = [{
    "rsvpCode": "VICKL805",
    "guest1": "Lesley Vickars",
    "guest2": "Mark Vickars",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "HARVI596",
    "guest1": "Iain Vickars",
    "guest2": "Mackenzie Hart",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKS236",
    "guest1": "Sam Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "HENDE545",
    "guest1": "Edrie Henderson",
    "guest2": "Scott Henderson",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "HENDB695",
    "guest1": "Beth Henderson",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "HENDC216",
    "guest1": "CJ Henderson",
    "guest2": "Kylie Henderson",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "PERSA596",
    "guest1": "Anders Persson",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "plusOne"
  },
  {
    "rsvpCode": "VICKP412",
    "guest1": "Peter Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "VICKE159",
    "guest1": "Erin Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "FITZJ259",
    "guest1": "Jere Vickars",
    "guest2": "Joyce Fitzgibbon",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKJ277",
    "guest1": "Jonathan Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "NAYLC226",
    "guest1": "Duncan Naylor",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "NAYLC427",
    "guest1": "Conor Naylor",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "NAYLZ859",
    "guest1": "Zach Naylor",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "VICKM994",
    "guest1": "Bob Vickars",
    "guest2": "Mary Vickars",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKM136",
    "guest1": "Matt Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "ROWBU385",
    "guest1": "Chris Rowan",
    "guest2": "Jennifer Burns",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKD876",
    "guest1": "Dave Vickars",
    "guest2": "Tara Fraser",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKJ206",
    "guest1": "Josh Vickars",
    "guest2": "Beata Vickars",
    "kids": 1,
    "kidsNames": "Adam Vickars",
    "status": "family"
  },
  {
    "rsvpCode": "REDFH928",
    "guest1": "Heather Redfern",
    "guest2": "Michael Mclellan",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "KLEIK403",
    "guest1": "Kyra Klein",
    "guest2": "Blake Clarke",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "FORSK769",
    "guest1": "Alex Forsyth",
    "guest2": "Keltie Forsyth",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKS840",
    "guest1": "Leif Vickars",
    "guest2": "Sherry Vickars",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKA485",
    "guest1": "Aidan Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "VICKH442",
    "guest1": "Hannah Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "NAYLK159",
    "guest1": "Steve Naylor",
    "guest2": "Katherine Naylor",
    "kids": 2,
    "kidsNames": "Aksel Naylor, Maddy Naylor",
    "status": "family"
  },
  {
    "rsvpCode": "VICMC976",
    "guest1": "Karin Vickars",
    "guest2": "Crawford McNair",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "JONES818",
    "guest1": "Susan Jones",
    "guest2": "David Jones",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "JONEA969",
    "guest1": "Amy Jones",
    "guest2": "",
    "kids": 2,
    "kidsNames": "Jacob Dennison, Esme Dennison",
    "status": "family"
  },
  {
    "rsvpCode": "CUTEE698",
    "guest1": "Nik Cuff",
    "guest2": "Linn Teetzel",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "GALLO311",
    "guest1": "Kent Gallie",
    "guest2": "Susan Loadman",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "KRINK114",
    "guest1": "Kristen Kringhaug",
    "guest2": "Trevor Kringhaug",
    "kids": 3,
    "kidsNames": "Jackson Kringhaug, Riley Kringhaug, NEW BABY",
    "status": "family"
  },
  {
    "rsvpCode": "MCFAP258",
    "guest1": "Ken McFayden",
    "guest2": "Pat McFayden",
    "kids": 1,
    "kidsNames": "Carol Ann McFayden",
    "status": "family"
  },
  {
    "rsvpCode": "MCFAB614",
    "guest1": "Blair McFayden",
    "guest2": "Franca McFayden",
    "kids": 3,
    "kidsNames": "Massimo McFayden, Connor McFayden, Shaelyn McFayden",
    "status": "family"
  },
  {
    "rsvpCode": "KLEIE375",
    "guest1": "Eli Klein",
    "guest2": "Leah Klein",
    "kids": 2,
    "kidsNames": "Arlo Klein, Kieran Klein",
    "status": "family"
  },
  {
    "rsvpCode": "KLEIR430",
    "guest1": "Rhiannon Klein",
    "guest2": "Maciej Stetkiewicz",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "HADZM519",
    "guest1": "Milka Hadziavdic",
    "guest2": "Mustafa Hadziavdic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "HADZS606",
    "guest1": "Sanela Hadziavdic",
    "guest2": "Milorad Vujicic",
    "kids": 2,
    "kidsNames": "BABY A, BABY B",
    "status": "couple"
  },
  {
    "rsvpCode": "SELJZ294",
    "guest1": "Zlata Seljakovic",
    "guest2": "Dzevad Seljakovic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "SELJM797",
    "guest1": "Merima Seljakovic",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "DJAKM893",
    "guest1": "Mirela Djak",
    "guest2": "Nino Djak",
    "kids": 1,
    "kidsNames": "Mateo Djak",
    "status": "family"
  },
  {
    "rsvpCode": "TUTNS890",
    "guest1": "Seka Tutnjevic",
    "guest2": "Neso Tutnjevic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "DZAFB649",
    "guest1": "Beba Dzaferovic",
    "guest2": "Miky Dzaferovic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "TUTNA912",
    "guest1": "Anka Tutnjevic",
    "guest2": "Drago Tutnjevic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VUJIM170",
    "guest1": "Milenka Vujicic",
    "guest2": "Ranko Vujicic",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "LITKK288",
    "guest1": "Kelsey Litke",
    "guest2": "Jason Leung",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "DIEWL725",
    "guest1": "Lauren Diewold",
    "guest2": "Mat Jackson",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "JANZC191",
    "guest1": "Conrad Janzen",
    "guest2": "Marisa Landicho",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "CALBK163",
    "guest1": "Kevin Calbick",
    "guest2": "Sam Hamilton",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "KINGE579",
    "guest1": "Elly King",
    "guest2": "Bryerton Shaw",
    "kids": 1,
    "kidsNames": "BABY",
    "status": "family"
  },
  {
    "rsvpCode": "STEVC494",
    "guest1": "Zach Stevens",
    "guest2": "Crystal Stevens",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "LYNCJ755",
    "guest1": "Jasmine Lynch",
    "guest2": "Emil Protalinski",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "PAQUD572",
    "guest1": "David Paquin",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "LOKW477",
    "guest1": "Wilfrid Lok",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "NANTR242",
    "guest1": "Reuben Nanthakumar",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "CHORL283",
    "guest1": "Lauren Chor",
    "guest2": "Joon Kim",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "KURAK133",
    "guest1": "Kyle Kuramoto",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "TANGM349",
    "guest1": "Moses Tang",
    "guest2": "Nicole Tang",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "AGYED733",
    "guest1": "Derick Agyemang",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "CORBN825",
    "guest1": "Natalie Corbo",
    "guest2": "Jordan Potter",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "LAVIM299",
    "guest1": "Marc Lavigne",
    "guest2": "Corey Boardman",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "SAYYR865",
    "guest1": "Romyn Sayyah",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "MCIVS933",
    "guest1": "Steven McIver",
    "guest2": "Madeline Goh",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "SERBD751",
    "guest1": "Danny DeSousa",
    "guest2": "Diana Serban",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "LAIW149",
    "guest1": "Wendy Lai",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "GENIS392",
    "guest1": "Shaun Genio",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "BOUGA779",
    "guest1": "John Bounassisi",
    "guest2": "Ashling Gaughan",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "REIDK268",
    "guest1": "Krisi Reid",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "VESTB630",
    "guest1": "Brittany Vesterback",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "SAHOR175",
    "guest1": "Ravi Sahota",
    "guest2": "Lindsay Rosibel",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "GILLS286",
    "guest1": "Shane Gill",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "CHANR220",
    "guest1": "Ringo Chan",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "METEB347",
    "guest1": "Belinda Mete",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "MOREM966",
    "guest1": "Marissa Morelos",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "MAGAC944",
    "guest1": "Aldo Magana",
    "guest2": "Carly Magana",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "DESPM535",
    "guest1": "Michael  Despotovic",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "VICKS217",
    "guest1": "Sydney Vickars",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": ""
  },
  {
    "rsvpCode": "HADZZ370",
    "guest1": "Zlatko Hadziavdic",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": ""
  },
  {
    "rsvpCode": "TRUSI263",
    "guest1": "Gordan Truscott",
    "guest2": "Isabelle Truscott",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "TEST001",
    "guest1": "Individual Guest",
    "guest2": "",
    "kids": "",
    "kidsNames": "",
    "status": "ind"
  },
  {
    "rsvpCode": "TEST002",
    "guest1": "Couple Guest",
    "guest2": "Significant Other",
    "kids": "",
    "kidsNames": "",
    "status": "couple"
  },
  {
    "rsvpCode": "TEST003",
    "guest1": "Family Guest",
    "guest2": "Spouse Name",
    "kids": "2",
    "kidsNames": "Kid A, Kid B",
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
