'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // 博客用户
  const auth = router.namespace('/api/v1/authentic');
  auth.post('/token', controller.authentic.login);
  auth.post('/register', controller.authentic.register);

  // 博客文章
  const articles = router.namespace('/api/v1/article');
  articles.resources('/', controller.articles);
  articles.post('/labels', controller.articles.findArticleByLabel);

  // 文章标签
  const labels = router.namespace('/api/v1/labels');
  labels.post('/query', controller.labels.query);
  labels.post('/batch', controller.labels.batch);
  labels.post('/build', controller.labels.build);

  // 云存储
  const clouds = router.namespace('/api/v1/clouds');
  clouds.post('/token', controller.clouds.token);

  // 博客评论
  const comments = router.namespace('/api/v1/comment');
  comments.resources('/', controller.comments);

  // 博客用户
  const users = router.namespace('/api/v1/user');
  users.resources('/', controller.users);

  // 博客专栏
  const columns = router.namespace('/api/v1/column');
  columns.resources('/', controller.columns);

  // 任务建立
  const tasks = router.namespace('/api/v1/task');
  tasks.post('/build', controller.tasks.build);
};
