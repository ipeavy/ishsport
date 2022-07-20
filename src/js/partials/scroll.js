$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

window.scrollTo({ top: 0, behavior: 'smooth' });