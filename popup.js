document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var activeTab = tabs[0];
      var url = new URL(activeTab.url);
      var domain = url.hostname;

      var iframe = document.getElementById('domainIframe');
      var loadingDiv = document.getElementById('loading');

      iframe.src = `https://www.whois.com/whois/${domain}`;

      // Show the iframe and hide the loading screen when the iframe is loaded
      iframe.onload = function () {
          loadingDiv.style.display = 'none';
          iframe.style.display = 'block';
      };
  });
});

