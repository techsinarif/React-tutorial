interface ICards {
  imgSrc: string,
  title: string,
  content: string,
  readMoreBtn: boolean
}

interface ITwinCards {
  imgSrc: string,
  title: string,
  subTitle: string,
  content: string[],
}

export const cards: ICards[] = [{
  imgSrc: "/assets/images/support-hub/our-mission-icon.png",
  title: "Our Mission",
  content: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
  readMoreBtn: true
}, {
  imgSrc: "/assets/images/support-hub/make-donation-icon.png",
  title: "Make Donations",
  content: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
  readMoreBtn: true
}, {
  imgSrc: "/assets/images/support-hub/help-icon.png",
  title: "Help & Support",
  content: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
  readMoreBtn: true
}, {
  imgSrc: "/assets/images/support-hub/programs-icon.png",
  title: "Our Programs",
  content: "Lorem ipsum dolor sit amet consect adipisscin elit proin vel lectus ut eta esami vera dolor sit amet consect",
  readMoreBtn: true
}];

export const twinCards: ITwinCards[] = [{
  imgSrc: "/assets/images/support-hub/we-fight-togother.jpg",
  title: "We Fight Together",
  subTitle: "We are humans",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga."
  ]
},{
  imgSrc: "/assets/images/support-hub/we-care-about.jpg",
  title: "We Care About Others",
  subTitle: "We are humans",
  content: [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur praesentium, itaque facilis nesciunt ab omnis cumque similique ipsa veritatis perspiciatis, harum ad at nihil molestias, dignissimos sint consequuntur. Officia, fuga."
  ]
}]