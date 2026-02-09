function isOtherLang(src, lang) {
  if (lang === "zh-CN") return src.endsWith(".en.md");
  return src.endsWith(".zh-CN.md");
}

hexo.extend.filter.register("before_generate", function () {
  var lang = hexo.config.language || "en";
  var Post = hexo.model("Post");
  var toRemove = [];

  Post.forEach(function (post) {
    var src = post.source || "";
    if (isOtherLang(src, lang)) {
      toRemove.push(post._id);
    }
  });

  return Promise.all(
    toRemove.map(function (id) {
      var post = Post.findById(id);
      if (post) return post.remove();
    }),
  ).then(function () {
    if (toRemove.length > 0) {
      hexo.locals.invalidate();
    }
  });
});

hexo.extend.helper.register("filter_posts", function (posts) {
  var lang = this.config.language || "en";
  return posts.filter(function (post) {
    var src = post.source || "";
    return !isOtherLang(src, lang);
  });
});

hexo.extend.generator.register("sitemap_index", function () {
  var root = hexo.config.root || "/";
  if (root !== "/") return;

  var siteUrl = (hexo.config.url || "").replace(/\/$/, "");
  if (!siteUrl) return;

  var enSitemapPath =
    hexo.config.sitemap && hexo.config.sitemap.path
      ? hexo.config.sitemap.path
      : "sitemap.xml";

  var xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    "  <sitemap>\n" +
    "    <loc>" +
    siteUrl +
    "/" +
    enSitemapPath +
    "</loc>\n" +
    "  </sitemap>\n" +
    "  <sitemap>\n" +
    "    <loc>" +
    siteUrl +
    "/zh-CN/sitemap.xml</loc>\n" +
    "  </sitemap>\n" +
    "</sitemapindex>\n";

  return {
    path: "sitemap.xml",
    data: xml,
  };
});
