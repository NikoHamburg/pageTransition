import { Lightning, VideoPlayer } from "@lightningjs/sdk";

class Player extends Lightning.Component {
  _init() {
    this.x = 0;
    this.y = 0;
    VideoPlayer.consumer(this);
    VideoPlayer.size(1920, 1080);
    VideoPlayer.position(this.x, this.y);
    VideoPlayer.open(
      "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    );
    // const video1 = document.createElement("video");
    // const video2 = document.createElement("video");
    // const div1 = document.createElement('div');
    // div1.height = 500;
    // div1.width =

    // video1.height = 1920;
    // video1.width = 1080;
    // video1.left = 0;
    // video1.top = 0;
    // video1.setAttribute(
    //   "src",
    //   "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    // );
    // video1.setAttribute('controls', 'autoplay');
    // video1.controls = true;
    // video1.autoplay = true;
    // document.body.appendChild(video1);
    // video1.play();

    // video2.height = 1920;
    // video2.width = 1080;
    // video2.left = 1920;
    // video2.setAttribute(
    //   "src",
    //   "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/video-30sec.mp4"
    // );
    // video2.setAttribute('controls', 'autoplay');
    // document.body.appendChild(video2);
  }

  _handleRight() {
    // const video1 = document.getElementsByTagName("video")[0];
    // video1.style.transition = `all 0.5s ease-out`;
    // video1.style.transform = "translate(-1920px)";
    // const video2 = document.getElementsByTagName("video")[1];
    // video2.style.transition = `all 0.5s ease-out`;
    // video2.style.transform = "translate(-1920px)";
    // Router.navigate("Player2");
    console.log("right");
    this.y -= 100;
    // VideoPlayer.pause();
    VideoPlayer.position(this.x, this.y);

    // VideoPlayer.open(
    //   "http://vf-maf-lng.s3.eu-central-1.amazonaws.com/LNG_MVP_Big_Bunny_AWS_Test.mp4"
    // );
  }

  _handleLeft() {
    console.log("left");
    this.y += 100;
    // VideoPlayer.pause();
    VideoPlayer.position(this.x, this.y);
    // const video1 = document.getElementsByTagName("video")[0];
    // video1.style.transition = `all 0.5s ease-out`;
    // video1.style.transform = `translate(0)`;
    // const video2 = document.getElementsByTagName("video")[1];
    // video2.style.transition = `all 0.5s ease-out`;
    // video2.style.transform = `translate(0)`;
  }
  //   pageTransition() {
  //     return "left";
  //   }
}

export { Player };
