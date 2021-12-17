const $video = document.querySelector('#video');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');

$backward.addEventListener('click', handleBackward);
$forward.addEventListener('click', handleForward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);

function handleBackward()
{
    $video.currentTime = $video.currentTime - 10;
}

function handleForward()
{
    $video.currentTime = $video.currentTime + 10;
}

function handlePlay()
{
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
}

function handlePause()
{
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
}

const $progress = document.querySelector('#progress');

$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleTimeUpdate(){
    $progress.value = $video.currentTime;
}

function handleLoaded(){
    $progress.max = $video.duration;
}

$progress.addEventListener('input', handleInput);

function handleInput(){
    $video.currentTime = $progress.value;
}