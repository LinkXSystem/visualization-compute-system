'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客文章
  const articles = router.namespace('/api/v1/articles');
  articles.resources('/', controller.articles);
  articles.post('/labels', controller.articles.findArticleByLabel);
};
