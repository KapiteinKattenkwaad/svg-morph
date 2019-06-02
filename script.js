const moonPath = "M18 28.2794C18 43.4672 28 55.7794 28 55.7794C12.8122 55.7794 0.5 43.4672 0.5 28.2794C0.5 13.0915 12.8122 0.779373 28 0.779373C28 0.779373 18 13.0915 18 28.2794Z"

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"

const darkMode = document.querySelector('#darkMode');

let toggle = false;

darkMode.addEventListener('click', () => {

    const timeline = anime.timeline({
        //set variables to the timeline
        duration : 750,
        ease : "easeOutExpo"
    });

    //add animations to the timeline
    timeline.add({
        targets: ".sun",
        d: [
            {
                value : toggle ? sunPath : moonPath
            }
        ]
    })

    //you can add in a lot of animations just by making an add function 
    .add({
        targets: "#darkMode",
        rotate: 320
    }, '-= 350') //here we can make our animations go faster, so you deduct 350 from 750, so it's gonna be 400ms

    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)'
    }, '-= 700');

    

    //toggle our switch

    if (!toggle) {
        toggle = true;
    } else {
        toggle = false; 
    }

});