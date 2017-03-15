(function () {

  var VARIANTS = [
      {
          id: 'Guardian-Today-UK-Control',
          test: function () {
              const emailListID = '9999';
              const exampleUrl = '';
              updateWebView(emailListID);
              updateExampleUrl(exampleUrl);
          }
      },
      {
          id: 'Guardian-Today-UK-Variant',
          test: function () {
              const emailListID = '8888';
              const exampleUrl = '';
              updateWebView(emailListID);
              updateExampleUrl(exampleUrl);
          }
      }
  ];

  function isWebView() {
    // window.GU (case is important!) only exists in the app.
    // Therefore, window.GU can be used to detect when an article is running in an App WebView
    return (typeof window.GU !== 'undefined') ? true : false;
  }

  function getRandomBucket(variants) {
    return variants[Math.floor(
      Math.random() * variants.length
    )];
  }

  function updateWebView(emailListID) {
      const emailForm = document.getElementsByClassName('js-email-sub__iframe')[0];
      const formUrl = 'https://www.theguardian.com/email/form/plaintone/' + emailListID
      if (emailForm) {
        emailForm.setAttribute('src', formUrl);
      }
  }

  function updateExampleUrl(exampleUrl) {
    const example = document.getElementsByClassName('js-email-example')[0];
    if(example) {
      example.setAttribute('href', exampleUrl);
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
