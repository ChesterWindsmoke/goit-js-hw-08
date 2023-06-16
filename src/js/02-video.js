// Імпорт бібліотек
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// Знаходимо iframe в HTML коді
const iframe = document.querySelector('iframe');
// Створюємо новий об'єкт з використанням бібліотеки Vimeo
const player = new Player(iframe);

let savedTime = 0;

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

const onPlay = function(data) {
    console.log(data);
};

const updatePlaybackTime = throttle(function(data) {
    savedTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', savedTime.toString());
}, 1000);

player.on('timeupdate', updatePlaybackTime);

player.on('play', onPlay);

window.addEventListener('beforeunload', function () {
    player.setCurrentTime(savedTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
});

window.addEventListener('DOMContentLoaded', function () {
    savedTime = parseFloat(localStorage.getItem('videoplayer-current-time')) || 0;
    player.setCurrentTime(savedTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
});
