$( "#button__metamask" ).click(function() {
  ethereum.request({ method: 'eth_requestAccounts' });
});
