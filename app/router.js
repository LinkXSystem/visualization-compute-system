'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客文章
  const articles = router.namespace('/articles');
  articles.resources('/', controller.articles);
  articles.get('/label', controller.articles.findArticleByLabel);
};
