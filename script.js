const info = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
]`;

const json = JSON.parse(info);
const work = json[0];
const play = json[1];
const study = json[2];
const exercise = json[3];
const social = json[4]
const selfCare = json[5]

$(function() {
    $("#daily").click(function() {
        $("#work-hrs").text(work.timeframes.daily.current + "hrs");
        $("#work-last-week").text("Last Day - " + work.timeframes.daily.previous + "hrs");

        $("#play-hrs").text(play.timeframes.daily.current + "hr");
        $("#play-last-week").text("Last Day - " + play.timeframes.daily.previous + "hrs");

        $("#study-hrs").text(study.timeframes.daily.current + "hr");
        $("#study-last-week").text("Last Day - " + study.timeframes.daily.previous + "hrs");

        $("#exercise-hrs").text(exercise.timeframes.daily.current + "hr");
        $("#exercise-last-week").text("Last Day - " + exercise.timeframes.daily.previous + "hrs");

        $("#social-hrs").text(social.timeframes.daily.current + "hr");
        $("#social-last-week").text("Last Day - " + social.timeframes.daily.previous + "hrs");

        $("#self-care-hrs").text(selfCare.timeframes.daily.current + "hr");
        $("#self-care-last-week").text("Last Day - " + selfCare.timeframes.daily.previous + "hrs");

        $("#daily").css({
            "color": "white",
        });

        $("#weekly, #monthly").css({
            "color": "hsl(235, 45%, 61%)",
        });


    });

    $("#weekly").click(function() {
        $("#work-hrs").text(work.timeframes.weekly.current + "hrs");
        $("#work-last-week").text("Last Day - " + work.timeframes.weekly.previous + "hrs");

        $("#play-hrs").text(play.timeframes.weekly.current + "hrs");
        $("#play-last-week").text("Last Day - " + play.timeframes.weekly.previous + "hrs");

        $("#study-hrs").text(study.timeframes.weekly.current + "hrs");
        $("#study-last-week").text("Last Day - " + study.timeframes.weekly.previous + "hrs");

        $("#exercise-hrs").text(exercise.timeframes.weekly.current + "hrs");
        $("#exercise-last-week").text("Last Day - " + exercise.timeframes.weekly.previous + "hrs");

        $("#social-hrs").text(social.timeframes.weekly.current + "hrs");
        $("#social-last-week").text("Last Day - " + social.timeframes.weekly.previous + "hrs");

        $("#self-care-hrs").text(selfCare.timeframes.weekly.current + "hrs");
        $("#self-care-last-week").text("Last Day - " + selfCare.timeframes.weekly.previous + "hrs");

        $("#weekly").css({
            "color": "white",
        });

        $("#daily, #monthly").css({
            "color": "hsl(235, 45%, 61%)",
        });
    });

    $("#monthly").click(function() {
        $("#work-hrs").text(work.timeframes.monthly.current + "hrs");
        $("#work-last-week").text("Last Day - " + work.timeframes.monthly.previous + "hrs");

        $("#play-hrs").text(play.timeframes.monthly.current + "hrs");
        $("#play-last-week").text("Last Day - " + play.timeframes.monthly.previous + "hrs");

        $("#study-hrs").text(study.timeframes.monthly.current + "hrs");
        $("#study-last-week").text("Last Day - " + study.timeframes.monthly.previous + "hrs");

        $("#exercise-hrs").text(exercise.timeframes.monthly.current + "hrs");
        $("#exercise-last-week").text("Last Day - " + exercise.timeframes.monthly.previous + "hrs");

        $("#social-hrs").text(social.timeframes.monthly.current + "hrs");
        $("#social-last-week").text("Last Day - " + social.timeframes.monthly.previous + "hrs");

        $("#self-care-hrs").text(selfCare.timeframes.monthly.current + "hrs");
        $("#self-care-last-week").text("Last Day - " + selfCare.timeframes.monthly.previous + "hrs");

        $("#monthly").css({
            "color": "white",
        });

        $("#weekly, #daily").css({
            "color": "hsl(235, 45%, 61%)",
        });
    });
});