const countDownDate = new Date("Dec 25, 2022 00:00:01").getTime();

let natal = setInterval(function() {

        let now = new Date().getTime();

        let date = countDownDate - now;

        let days = Math.floor(date / (1000 * 60 * 60 * 24));
        let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("demo").innerHTML = days + "dias " + hours + "h " + minutes + "m ";

        if (date < 0){
            clearInterval(natal);
            document.getElementById("feliz").innerHTML = '<h1>Feliz</h1>'
            document.getElementById("natal").innerHTML = '<h1>Natal</h1>'
            document.getElementById("demo").innerHTML = ''
        }
}, 1000);

