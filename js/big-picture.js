const bigPictureElement = document.querySelector('.big-picture');
const commentСountElement = document.querySelector('.social__comment-count');
const commentListElement = document.querySelector('.social__comments');
const commentsLoaderElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const cancelButtonElement = document.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');

const createComment = ({avatar, name, message}) => {
  const comment = commentElement.cloneNode(true);

  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const renderComments = (comments) => {
  commentListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createComment(item);
    fragment.append(comment);
  });

  commentListElement.append(fragment);
};

const hideBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const renderPictureDetails = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderElement.classList.add('hidden');
  commentСountElement.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

cancelButtonElement.addEventListener('click', onCancelButtonClick);

export {showBigPicture};


// const bigPictureOpenElements = document.querySelectorAll('.picture');
// const COMMENTS_IMAGE_SIZE = 35;

// const pictureModal = (generatedPictures) => {


//   const bigPictureClose = () => {
//     bigPictureElement.classList.add('hidden');
//     bodyElement.classList.remove('modal-open');
//   };

//   const onBigPictureEscKeydown = (evt) => {
//     if (isEscapeKey(evt)) {
//       evt.preventDefault();
//       bigPictureClose();
//     }
//   };

//   bigPictureOpenElements.forEach((el, elIndex) =>
//     el.addEventListener('click', (evt) => {
//       evt.preventDefault();
//       bodyElement.classList.add('modal-open');
//       bigPictureElement.classList.remove('hidden');
//       bigPictureElement.querySelector('.big-picture__img img').src = generatedPictures[elIndex].url;
//       bigPictureElement.querySelector('.likes-count').textContent = generatedPictures[elIndex].likes;
//       bigPictureElement.querySelector('.social__comment-shown-count').textContent = generatedPictures[elIndex].likes;
//       bigPictureElement.querySelector('.social__comment-total-count').textContent = generatedPictures[elIndex].comments.length;

//       commentListElement.textContent = '';

//       generatedPictures[elIndex].comments.forEach((comment) => {
//         const commentBlock = document.createElement('li');
//         commentBlock.classList.add('social__comment');

//         const commentImage = document.createElement('img');
//         commentImage.classList.add('social__picture');
//         commentImage.src = comment.avatar;
//         commentImage.alt = comment.name;
//         commentImage.width = COMMENTS_IMAGE_SIZE;
//         commentImage.height = COMMENTS_IMAGE_SIZE;

//         const commentText = document.createElement('p');
//         commentText.classList.add('social__text');
//         commentText.textContent = comment.message;

//         commentBlock.appendChild(commentImage);
//         commentBlock.appendChild(commentText);

//         commentListElement.appendChild(commentBlock);
//       });

//       bigPictureElement.querySelector('.social__caption').textContent = generatedPictures[elIndex].description;

//       cancelButtonElement.addEventListener('click', bigPictureClose);

//       document.addEventListener('keydown', onBigPictureEscKeydown);
//     })
//   );

//   commentСountElement.classList.add('hidden');
//   commentLoaderElement.classList.add('hidden');
// };

// export {pictureModal};

