import axios from 'axios';

const url = 'https://ben-nc-news.herokuapp.com/API';

export const fetchArticles = () => {
  return axios.get(`${url}/articles`).then(res => res.data.articles);
};

export const fetchArticle = async article_id => {
  const { data } = await axios.get(`${url}/articles/${article_id}`);
  return data;
};

export const fetchComments = async article_id => {
  const { data } = await axios.get(`${url}/articles/${article_id}/comments`);
  return data;
};

export const fetchArticlesByTopic = async topic => {
  const { data } = await axios.get(`${url}/topics/${topic}/articles`);
  return data.articles;
};

export const voteOnArticle = async (article_id, amount) => {
  const { data } = await axios.put(
    `${url}/articles/${article_id}?vote=${amount}`
  );
  return data;
};

export const postComment = async (article_id, comment) => {
  const { data } = await axios.post(`${url}/articles/${article_id}/comments`, {
    comment
  });
  return data;
};

export const voteOnComment = async (comment_id, amount) => {
  const { data } = await axios.put(
    `${url}/comments/${comment_id}?vote=${amount}`
  );
  return data;
};
