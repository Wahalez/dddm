$(document).ready(function () {
  const header = $("#header");
  if (header.length) {
    $.ajax({
      url: "header.html",
      dataType: "html",
      success: function (content) {
        header.html(content);
      },
      error: function (error) {
        console.error("Error loading header:", error);
      },
    });
  }
});
