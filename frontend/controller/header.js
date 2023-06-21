const routes = () => {
  $("#loginBtn").click(function () {
    window.location.href = "/login";
  });
  $("#homeBtn").click(function () {
    window.location.href = "/";
  });
  $("#registerBtn").click(function () {
    window.location.href = "/register";
  });
  $("#console").click(function () {
    window.location.href = "/consoles";
  });
  $("#allGames").click(function () {
    window.location.href = "/games";
  });
};

$(document).ready(() => {
  const header = $("#header");
  if (header) {
    $.ajax({
      url: "header.html",
      dataType: "html",
      success: function (content) {
        header.html(content);
        routes();
      },
      error: function (error) {
        console.error("Error loading header:", error);
      },
    });
  }
});
