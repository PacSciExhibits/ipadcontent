let video;
let playing = false;
const controlsheight = 60;
let mic, recorder, soundFile;


let state = 0;
/*  STATES:
    0   ready to record
    1   recording
    2   ready to play back
    3   playing back        */



function setup() {
    createCanvas(1920/3, 1080/3 + controlsheight);
    video = createVideo('motionsfx.mp4');
    video.hide();


    // create an audio in
    mic = new p5.AudioIn();

    // prompts user to enable their browser mic
    mic.start();

    // create a sound recorder
    recorder = new p5.SoundRecorder();

    // connect the mic to the recorder
    recorder.setInput(mic);

    // this sound file will be used to
    // playback & save the recording
    soundFile = new p5.SoundFile();
    video.onended(handleEnd)
    
    soundFile.onended(handleEnd)
}


function draw() {
    textSize(16);
    if (state === 1) {
        background(255, 0,0)
    }
    else {
        background(0)
    }
    // text('Click the canvas to start and pause the video feed.', 345, 50);
    // text('tap to record', width/2, height/2);
    
    
    
    
    // Draw the first instance of the video in the canvas.
    image(video, 0, 0, width, height - controlsheight);
    fill('white');
    textFont('Courier New', 20);
    if (state === 0) {
        text("click to start recording", 170, 400)
    }
    if (state === 1) {
        text("recording ...", 200, 400)
    }
    if (state === 2) {
        text("click to play back", 150, 400)
    }
    if (state === 3) {
        text("playing back with audio...", 150, 400)
    }
}

function mousePressed() {


    // ensure audio is enabled
    userStartAudio();
    console.log("Mouse pressed. Current state:", state);

    // make sure user enabled the mic
    if (state === 0 && mic.enabled) {
        console.log("pressed");
        // TO STATE 1
        // record to our p5.SoundFile
        video.play();
        recorder.record(soundFile);
        state++;
    }
    // else if (state === 1) {
    //     // TO STATE 2
    //     // stop recorder and send result to soundFile
    //     video.stop();
    //     recorder.stop();
    //     state++;
    // }

    else if (state === 2) {
        // TO STATE 3
        video.play();
        soundFile.play(); // play the result!
        // save(soundFile, 'mySound.wav');
        state++;
    }
}

function handleEnd() {
    if (state === 1) {
        video.stop();
        recorder.stop();
        state++;
    }
    if (state === 3) {
        state = 0;
    }
}