const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const allImg = document.querySelector(".gallery");
const imgArr = images.map(img => `<li class="item"><img src = "${img.url}" alt = "${img.alt}"/></li>`).join("");
allImg.insertAdjacentHTML("afterbegin", imgArr);
allImg.style.display = "flex";
allImg.style.justifyContent = 'center';
allImg.style.gap = '30px';
allImg.style.listStyle = 'none';
