
function isWebView() {
  return (typeof window.GU !== 'undefined') ? true : false;
}

function getRandomBucket(list) {
  return list[Math.floor((
    Math.random() * list.length
  ))];
}

function updateWebView(emailListID) {
    var emailForm = document.getElementsByClassName('js-email-sub__iframe')[0];
    emailForm.setAttribute('src', 'https://www.theguardian.com/email/form/plaintone/' + emailListID);
}

// init takes a list of strings, that correspond to the listIDs of all the variants in the email test
function init(listIDs) {
    var listID = getRandomBucket(listIDs);
    updateWebView(listID);
}

if (isWebView()) {
  init(['9999', '8888']);
}
