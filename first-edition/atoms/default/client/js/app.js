// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

function generateFacebookLink(encodedPageUrl) {
  return `https://www.facebook.com/dialog/share?app_id=180444840287&href=${encodedPageUrl}&CMP=share_btn_fb'`;
}

function generateTwitterLink(encodedPageUrl, encodedSubjectText) {
  return `https://twitter.com/intent/tweet?text=${encodedSubjectText}&url=${encodedPageUrl}&CMP=share_btn_tw`;
}

function generateEmailLink(encodedPageUrl, encodedSubjectText) {
  return `mailto:?subject=${encodedSubjectText}&body=${encodedPageUrl}&CMP=share_btn_link`;
}

/**
 * Finds all elements with the attribute [data-share-link-for] that are descendents of 
 * an .interactive-wrapper and sets their href to a share link for the current page, 
 * usin a platform determined by the the value of [data-share-link-for].
 * 
 * Supported values are 'facebook', 'twitter' and 'email'.
 * 
 * @param {string} subjectText the description or subject text to be used when sharing the page
 */
function populateShareLinks(subjectText) {
  const encodedPageUrl = encodeURIComponent(window.location.href);
  const encodedSubjectText = encodeURIComponent(subjectText);

  const shareLinks = [
    ...document.querySelectorAll(".interactive-wrapper [data-share-link-for]"),
  ];
  shareLinks.forEach((shareLink) => {
    const shareTo = shareLink.getAttribute("data-share-link-for");
    let href = "";

    switch (shareTo) {
      case "facebook":
        href = generateFacebookLink(encodedPageUrl);
        break;
      case "twitter":
        href = generateTwitterLink(encodedPageUrl, encodedSubjectText);
        break;
      case "email":
        href = generateEmailLink(encodedPageUrl, encodedSubjectText);
        break;
    }

    shareLink.setAttribute("href", href);
  });
}

populateShareLinks("Sign up for the First Edition");
