interface ICauses {
  imgSrc: string,
  title: string,
  target: number,
  received: number,
  detail: string,
  donateBtn: boolean
}

export const causes: ICauses[] = [{
  imgSrc: "/assets/images/causes/cause-hunger.jpg",
  title: "Hunger and poverty",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.",
  donateBtn: true,
  target: 500,
  received: 120
},{
  imgSrc: "/assets/images/causes/cause-education.jpg",
  title: "Education and training",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.",
  donateBtn: true,
  target: 700,
  received: 420
},{
  imgSrc: "/assets/images/causes/cause-rights.jpg",
  title: "Human rights",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.",
  donateBtn: true,
  target: 1000,
  received: 720
},{
  imgSrc: "/assets/images/causes/cause-culture.jpg",
  title: "Arts and culture",
  detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at eros rutrum turpis viverra elementum semper quis ex. Donec lorem nulla, aliquam quis neque vel, maximus lacinia urna.",
  donateBtn: true,
  target: 800,
  received: 320
}]