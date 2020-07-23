document.addEventListener('DOMContentLoaded', function () {
    /* Player */
    String.prototype.toMMSS = function () {
        var sec_num = parseInt(this, 10);
        var minutes = Math.floor(sec_num / 60);
        var seconds = sec_num - (minutes * 60);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ':' + seconds;
    }

    let video = document.getElementById("presentation-video"),
        btn = document.getElementById("btn_icon"),
        video_len = document.getElementById("video-len"),
        player = document.getElementById("player"),
        video_info = document.getElementById("video-info");

    video.addEventListener("loadedmetadata", function () {
        video_len.innerText = video.duration.toString().toMMSS();
    })

    video.addEventListener("ended", function () {
        video_info.style.display = 'initial';
        initialPlayer();
    })

    btn.parentElement.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            video_info.style.opacity = '0';
            btn.src = "assets/images/presentation/button-stop.png";
            video.classList.remove("paused");
            player.classList.remove("paused");
        } else {
            video.pause();
            initialPlayer();
        }
    })

    function initialPlayer() {
        video.classList.add("paused");
        player.classList.add("paused");
        video_info.style.opacity = '1';
        btn.src = "assets/images/presentation/button-play.png";
        video_len.innerText = video.currentTime.toString().toMMSS();
    }

    /* Nav toggle */
    let hamburger_icon = document.getElementById("icon-hamburger"),
        nav = document.getElementById("nav"),
        header = document.getElementById("header");

    hamburger_icon.parentElement.addEventListener("click", function () {
        hamburger_icon.parentElement.classList.toggle("open");
        nav.classList.toggle("active");
        header.classList.toggle("active");
    })
});