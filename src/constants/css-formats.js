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
}
