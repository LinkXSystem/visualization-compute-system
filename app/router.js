'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  const articles = router.namespace('/articles');
  articles.resources('/', controller.articles);
  articles.get('/:uuid/system', controller.articles.system);
};
