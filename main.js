function setup() {
    video = creatCanvas(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
  }

  function modelLoaded() {
    console.log('poseNet is Initialized');
  }

  function gotPoses(results) {
      if (results.length > 0) {
          console.log(results);

          leftWrist = results[0].pose.leftWrist.x;
          rightWrist = results[0].pose.rightWrist.x;
          differnece = floor(leftWrist - rightWrist);
      }
  }

  function draw() {
      background('#6C91C2');
      textSize(differnece);
      fill('#FFE787');
      text('peter',50,400)
  }

