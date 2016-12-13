
function canRun() {
  var userAgent = navigator.userAgent.toLowerCase();
  var isAndroid = userAgent.indexOf("android") > -1;
  var isApple = /iphone|ipod|ipad/.test(userAgent);

  if (isAndroid) {
    return (userAgent.indexOf("wv") > -1) ||
      (userAgent.indexOf("version/") > -1 &&
      userAgent.indexOf("chrome/") > -1);
  } else if (isApple) {
    // TODO work out how to check iOS webview vs browser
  } else {
    return false;
  }
}

function getRandomBucket(list) {
  return list[Math.floor((
    Math.random() * list.length
  ))];
}

// to differentiate between the WebView and Chrome for Android, look for the presence of the Version/_X.X_ string https://developer.chrome.com/multidevice/user-agent#webview_user_agent

function updateWebView(emailListID) {
    var emailForm = document.getElementsByClassName('js-email-sub__iframe')[0];
    emailForm.setAttribute('src', 'https://www.theguardian.com/email/form/plaintone/' + emailListID);
}

// init takes a list of strings, that correspond to the listIDs of all the variants in the email test
function init(listIDs) {
    var listID = getRandomBucket(listIDs);
    updateWebView(listID);
}

if (canRun()) {
  init(['9999', '8888']);
}
