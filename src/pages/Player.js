import { Lightning, Router, VideoPlayer } from "@lightningjs/sdk";

class Player extends Lightning.Component {
  _init() {
    // VideoPlayer.consumer(this);
    // VideoPlayer.size(1920, 1080);
    // VideoPlayer.position(0, 0);
    // VideoPlayer.open(
    //   "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    // );
    const video1 = document.createElement("video");
    // const video2 = document.createElement("video");
    // const div1 = document.createElement('div');
    // div1.height = 500;
    // div1.width = 

    video1.width = 1720;
    video1.height = 880;
    video1.left = 100;
    video1.top = 100;
    video1.setAttribute(
      "src",
      "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    );
    // video1.setAttribute('controls', 'autoplay');
    // video1.controls = true;
    // video1.autoplay = true;
    document.body.appendChild(video1);
    // video1.play();

    // video2.width = 960;
    // video2.height = 540;
    // video2.left = 960;
    // video2.setAttribute(
    //   "src",
    //   "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/video-30sec.mp4"
    // );
    // video2.setAttribute('controls', 'autoplay');
    // document.body.appendChild(video2);
  }

  _handleRight() {
    const video1 = document.getElementsByTagName("video")[0];
    video1.style.transition = `all 0.5s ease-out`;
    video1.style.transform = "translate(-1920px)";
    // const video2 = document.getElementsByTagName("video")[1];
    // video2.style.transition = `all 0.5s ease-out`;
    // video2.style.transform = "translate(-1920px)";
    // Router.navigate("Player2");
  }

  _handleLeft() {
    const video1 = document.getElementsByTagName("video")[0];
    video1.style.transition = `all 0.5s ease-out`;
    video1.style.transform = `translate(0)`;
    // const video2 = document.getElementsByTagName("video")[1];
    // video2.style.transition = `all 0.5s ease-out`;
    // video2.style.transform = `translate(0)`;
  }
  //   pageTransition() {
  //     return "left";
  //   }
}

export { Player };
