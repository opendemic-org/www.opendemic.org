var rootEl = document.documentElement;
var modals = Array.from(document.getElementsByClassName('modal'));
var modalButtons = Array.from(document.getElementsByClassName('modal-button'));
var modalCloses = Array.from(document.getElementsByClassName('modal-background')).concat(
  Array.from(document.getElementsByClassName('modal-close')),
  Array.from(document.getElementsByClassName('modal-card-head')),
  Array.from(document.getElementsByClassName('delete')),
  Array.from(document.getElementsByClassName('modal-card-foot')),
  Array.from(document.getElementsByClassName('button'))
);


if (modalButtons.length > 0) {
  modalButtons.forEach(function (el) {
    el.addEventListener('click', function () {
      var target = el.dataset.target;
      openModal(target);
    });
  });
}

if (modalCloses.length > 0) {
  modalCloses.forEach(function (el) {
    el.addEventListener('click', function () {
      closeModals();
    });
  });
}

function openModal(target_id) {
  var target = document.getElementById(target_id);
  rootEl.classList.add('is-clipped');
  target.classList.add('is-active');
}

function closeModals() {
  rootEl.classList.remove('is-clipped');
  modals.forEach(function (el) {
    el.classList.remove('is-active');
  });
}

document.addEventListener('keydown', function (event) {
  var e = event || window.event;
  if (e.keyCode === 27) {
    closeModals();
    closeDropdowns();
  }
});
