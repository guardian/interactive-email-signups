(function () {

  var VARIANTS = [
      {
          id: 'Opinion-UK-Legacy',
          test: function () {
              const emailListID = '3814';
              updateWebView(emailListID);
          }
      },
      {
          id: 'Opinion-UK-Connected',
          test: function () {
              const emailListID = '3811';
              updateWebView(emailListID);
          }
      }
  ];

  function isWebView() {
    // window.GU (case is important!) only exists in the app.
    // Therefore, window.GU can be used to detect when an article is running in an App WebView
    return (typeof window.GU !== 'undefined');
  }

  function getRandomBucket(variants) {
    if (Math.random() < 0.1) {
        return variants[0];
    } else {
        return variants[1];
    }
  }

  function updateWebView(emailListID) {
      const emailForm = document.getElementsByClassName('js-email-sub__iframe')[0];
      const formUrl = 'https://www.theguardian.com/email/form/plaintone/' + emailListID;
      if (emailForm) {
        emailForm.setAttribute('src', formUrl);
      }
  }

  function init(variants) {
      const variant = getRandomBucket(variants);
      variant.test();
  }

  if (isWebView()) {
    init(VARIANTS);
  }

}());
