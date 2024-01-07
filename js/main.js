document.addEventListener('DOMContentLoaded', function() {
  let splitHdrSpBtn = document.querySelector('.splitHdrSpBtn');

  splitHdrSpBtn.addEventListener('click', function() {
    let splitHdr = document.querySelector('.splitHdr');
    if (splitHdr.classList.contains('is-active')) {
      splitHdr.classList.remove('is-active');
    } else {
      splitHdr.classList.add('is-active');
    }
  });
});
