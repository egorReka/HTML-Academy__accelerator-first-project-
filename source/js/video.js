const LINK_VIDEO = 'https://www.youtube.com/embed/';
const ID_VIDEO = '9TZXsZItgdw';
const QWERY_PARAMS = '?rel=0&showinfo=0&autoplay=1';

const videoContainer = document.querySelector('.video');
const videoLink = videoContainer.querySelector('.video__link');
const videoButton = videoContainer.querySelector('.video__button');

const createIframe = () => {
  const fragment = document.createDocumentFragment();
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allow', 'autoplay; fullscreen');
  iframe.setAttribute('anonymous', '');
  iframe.setAttribute('src', LINK_VIDEO + ID_VIDEO + QWERY_PARAMS);
  iframe.classList.add('video__media');
  fragment.append(iframe);

  return fragment;
};

const setupVideo = () => {
  videoLink.remove();
  videoButton.remove();
  videoContainer.append(createIframe());
};

const changTag = (element, nameTag) => {
  const newTag = document.createElement(nameTag);

  newTag.innerHTML = element.innerHTML;
  newTag.className = element.className;
  element.parentNode.replaceChild(newTag, element);
};

const initVideo = () => {
  changTag(videoLink, 'div');

  videoContainer.classList.add('video--enabled');

  videoContainer.addEventListener('click', setupVideo, { once: true });
};

export { initVideo };
