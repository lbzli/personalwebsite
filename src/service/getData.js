import fetch from '../config/fetch'

/**
 * 用户登录
 *
 * @param   {string}  name      用户名
 * @param   {string}  password  密码
 *
 * @return  {[type]}            [return Promise]
 */
export const toLogin = (name, password) => fetch('/signin', { name, password }, 'POST')

/**
 * 用户登出
 *
 * @return  {[type]}            [return Promise]
 */
export const toLogout = () => fetch('/signout')


/**
 * 用户注册
 *
 * @param   {string}  name        用户名
 * @param   {string}  gender      性别
 * @param   {string}  password    密码
 * @param   {string}  repassword  重复密码
 *
 * @return  {[type]}              [return Promise]
 */
export const toLogup = (name, gender, password, repassword) => fetch('/signup', { name, gender, password, repassword }, 'POST')

export const getPosts = () => fetch('/posts')
export const getUserPosts = (userId) => fetch('/posts/userPosts?author='+userId)
/**
 * 创建一篇文章
 *
 * @param   {string}  title          标题
 * @param   {string}  content        内容
 *
 * @return  {[type]}                 [return Promise]
 */
export const createPost = (title, content) => fetch('/posts/create', { title, content }, 'POST')

/**
 * 获取一篇文章
 *
 * @param   {string}  postId          文章Id
 *
 * @return  {[type]}                  [return Promise]
 */
export const getPostById = (postId) => fetch('/posts/' + postId)


/**
 * 获取要更新的文章内容
 *
 * @param   {string}  postId   文章ID
 *
 * @return  {[type]}           [return Promise]
 */
export const getPostContentById = (postId) => fetch('/posts/' + postId + '/edit')


/**
 * 更新一篇文章
 *
 * @param   {string}  postId   文章ID
 * @param   {string}  title    文章标题
 * @param   {string}  content  文章内容
 *
 * @return  {[Object]}           [return Promise]
 */
export const upPostById = (postId, title, content) => fetch('/posts/' + postId + '/edit', { title, content }, 'POST')

/**
 * 删除一篇文章
 *
 * @param   {string}  postId   文章Id
 *
 * @return  {[type]}           [return description]
 */
export const deletePostById = (postId) => fetch('/posts/' + postId + '/remove')


/**
 * 创建一条留言
 *
 * @param   {string}  postId     文章Id
 * @param   {string}  content    文章内容
 *
 * @return  {[type]}             [return description]
 */
export const createComment = (postId, content) => fetch('/comments', { postId, content }, 'POST')


/**
 * 删除一条留言
 *
 * @param   {string}  commentId   评论Id
 *
 * @return  {[type]}              [return description]
 */
export const deleteCommentById = (commentId) => fetch('/comments/' + commentId + '/remove')