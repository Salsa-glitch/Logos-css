export const logoFormats = {
  instragram: `.instagram {
  height: 10rem;
  width: 10rem;
  background: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
  border-radius: 30%;
  position: relative;
  border: 0;
}
.instagram:before {
  content: "";
  border: 10px solid #ffffff;
  border-radius: 30%;
  width: 6.6rem;
  height: 6.6rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
}
.instagram:after {
  content: "";
  border: 10px solid #ffffff;
  border-radius: 100%;
  width: 3.1rem;
  height: 3.1rem;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  position: absolute;
  margin: auto;
}

.instagramdot {
  content: "";
  border: 8px solid #ffffff;
  border-radius: 100%;
  width: 0;
  height: 0;
  left: 45%;
  right: 0;
  top: 0;
  bottom: 40%;
  position: absolute;
  margin: auto;
}
.instagram:hover {
  filter: drop-shadow(0 0 2em #c46ddcaa);
  cursor: pointer;
}

`,

  react: `.react {
  position: relative;
  background-color: transparent;
  width: 10rem;
  height: 10rem;
  border: transparent;
  animation: spin 8s linear infinite;
}

@keyframes spin {
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
}

.core {
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: #61dafb;
  border-radius: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.orbit {
  position: absolute;
  width: 140px;
  height: 50px;
  border: 8px solid #61dafb;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
}

.orbit1 {
  rotate: 0deg;
}
.orbit2 {
  rotate: 60deg;
}
.orbit3 {
  rotate: -60deg;
}

.react:hover {
  filter: drop-shadow(0 0 2em #61dafb);
  cursor: pointer;
}
`,
  tiktok: `.tiktokbackground {
  position: relative;
  height: 10rem;
  width: 10rem;
  background: #000000;
  border: 0;
  margin: 0 auto;
}

.tiktok {
  content: "";
  position: absolute;
  width: 20px;
  height: 90px;
  background: #fff;
  margin: auto;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  filter: drop-shadow(-5px -5px 0 #24f6f0);
  box-shadow: 4px 4px 0 0 #fe2d52;
}
.tiktok:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border: 20px solid #fff;
  border-top: 20px solid transparent;
  border-radius: 50%;
  margin: auto;
  left: -40px;
  right: 0;
  top: 72px;
  bottom: 0;
  transform: rotate(40deg);
  filter: drop-shadow(6px 0px 0 #fe2d52);
}
.tiktok:after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  border: 20px solid #fff;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 100px;
  border-right: 20px solid transparent;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-radius: 100%;
  transform: rotate(45deg);
  filter: drop-shadow(7px 0px 0 #fe2d52);
}

.tiktokbackground:hover {
  box-shadow: -4px -4px 0 0 #24f6f0;
  filter: drop-shadow(7px 7px 0 #fe2d52);
  cursor: pointer;
}
`,

  windows: `.split-image-container {
  position: relative;
  width: 10rem;
  height: 10rem;
  margin: auto;
  background: transparent;
  border: none;
}

.split-image-container:hover {
  cursor: pointer;
}

.quadrant {
  position: absolute;
  width: 5rem;
  height: 5rem;
  transition: transform 0.3s ease;
  margin: auto;
}

.quadrant-1 {
  top: 0;
  left: 0;
  background-position: top left;
  background-color: #f86828;
}

.quadrant-2 {
  top: 0;
  right: 0;
  background-position: top right;
  background-color: #92c400;
}

.quadrant-3 {
  bottom: 0;
  left: 0;
  background-position: bottom left;
  background-color: #00b5f1;
}

.quadrant-4 {
  bottom: 0;
  right: 0;
  background-position: bottom right;
  background-color: #ffc400;
}

.split-image-container:hover .quadrant-1 {
  transform: translate(-5px, -5px);
  cursor: pointer;
}

.split-image-container:hover .quadrant-2 {
  transform: translate(5px, -5px);
}

.split-image-container:hover .quadrant-3 {
  transform: translate(-5px, 5px);
}

.split-image-container:hover .quadrant-4 {
  transform: translate(5px, 5px);
}
`,

  youtube: `.youtubespace {
  height: 10rem;
  width: 10rem;
  position: relative;
  background-color: transparent;
  border: 0;
}

.youtube {
  position: absolute;
  height: 6rem;
  width: 8rem;
  background-color: #e21;
  padding: 0 15px;
  border-radius: 50% / 11%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.youtube:before {
  content: "";
  position: absolute;
  background: inherit;
  left: -4%;
  right: -5%;
  top: 10%;
  bottom: 10%;
  border-radius: 5% / 50%;
}

.youtube:after {
  content: "";
  position: absolute;
  border: 35px solid #ffffff;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-right: 35px;
  left: 5px;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.youtube:hover {
  filter: drop-shadow(0 0 2em #e21);
  cursor: pointer;
}
`,

  google: `.googlecontainer {
  width: 10rem;
  height: 10rem;
}
.google {
  position: relative;
  border-top: 35px solid #ea4335;
  border-right: 35px solid #4285f4;
  border-bottom: 35px solid #34ab53;
  border-left: 35px solid #fbbc05;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  background-color: #242424;
}

.google::before {
  content: "";
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  width: 80px;
  height: 35px;
  background: #4285f4;
}

.google:after {
  content: "";
  position: absolute;
  border-top: 61px solid transparent;
  border-right: 61px solid #242424;
  top: -33px;
  right: -33px;
  width: 0;
  height: 0;
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .google:hover {
    animation: 1s ease-in 0.5s running logo-spin;
    cursor: pointer;
  }
}
`,
}
