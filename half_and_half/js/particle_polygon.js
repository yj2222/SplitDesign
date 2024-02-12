particlesJS("particles-js", {
  particles: {
    number: {
      value: 200, //この数値を変更すると紙吹雪の数が増減できる
      density: {
        enable: false,
        value_area: 500,
      },
    },
    color: {
      value: [
        "#D0A900",
        "#FFF9E6",
        '#C39000',
        '#E6D8B3',
      ], //紙吹雪の色の数を増やすことが出来る
    },
    shape: {
      type: "polygon", //形状はpolygonを指定
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5, //多角形の角の数
      },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        opacity_min: 0.2,
        sync: false,
      },
    },
    size: {
      value: 10,
      random: true, //サイズをランダムに
      anim: {
        enable: true,
        speed: 5,
        size_min: 3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 10, //この数値を小さくするとゆっくりな動きになる
      direction: "bottom", //下に向かって落ちる
      random: true, //動きはランダムにならないように
      straight: false, //動きをとどめない
      out_mode: "out", //画面の外に出るように描写
      bounce: false, //跳ね返りなし
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});