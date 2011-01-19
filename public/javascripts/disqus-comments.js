$(document).ready(function() {
  var disqus = $("#disqus_thread");
  window.disqus_shortname = "drugpl";
  window.disqus_identifier = disqus.data("identifier");
  window.disqus_url = disqus.data("url");
  window.disqus_title = disqus.data("title");
  
  var dsq = document.createElement('script'); 
  dsq.type = 'text/javascript'; 
  dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
});
