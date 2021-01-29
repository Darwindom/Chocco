const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();

  container.addClass("active");
  contentBlock.height(reqHeight);

}

const closeEveryItem = container => {
  const items = container.find('.team__content');
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("active");
  items.height(0);
}

 const teamTitle = document.querySelector(".team__title");
 teamTitle.addEventListener('click', e => {
   const self = e.currentTarget;
   const container = self.closest(".team");
   const elemContainer = self.closest(".team__item");
   if (elemContainer.classList.contains("active")) {
     closeEveryItem(container);
   } else {
     closeEveryItem(container);
     openItem(self);
   }
})

// const teamTitle = document.querySelectorAll('.team__title');
// teamTitle.forEach(item => {
//   item.addEventListener('click', e => {
//     const self = e.currentTarget;
//     const container = self.closest('.team');
//     const elemContainer = self.closest('.team__item');
//     if (elemContainer.classList.contains('active')) {
//       closeEveryItem(container);
//     } else {
//       closeEveryItem(container);
//       openItem(self);
//     }
//   })
// })
 
$('.team__title').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("active")) {
      closeEveryItem(container);
  } else {
      closeEveryItem(container);
      openItem($this);
  }
})

// const openItem = item => {
//   const container = item.closest(".team__item");
//   const contentBlock = container.querySelector(".team__content");
//   const textBlock = contentBlock.querySelector(".team__content-block");
//   const reqHeight = getComputedStyle(textBlock, null).height;
//   container.classList.add("active");
//   contentBlock.style.height = reqHeight;
// }
// const closeEveryItem = container => {
//   const items = container.querySelector('.team__content');
//   const itemContainer = container.querySelector(".team__item");
//   itemContainer.classList.remove("active");
//   items.style.height = '0';
// }