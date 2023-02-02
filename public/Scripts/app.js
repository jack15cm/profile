(function(){
  function start(){
    console.log("App Started...");
  }
  window.addEventListener("load",start)
})();


$(document).ready(function() {
  M.updateTextFields();
});


$('#contact_message').val('');
  M.textareaAutoResize($('#contact_message'));