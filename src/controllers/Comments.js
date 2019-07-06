const commentsController = () => {
  const getComments = async (req, res) => {
    const redis = req.app.get('redis');
    const getData = await redis.get('comments');
    const comments = getData ? JSON.parse(getData) : [];
    return res.status(200).json({ comments });
  };
  //   const postComments = async (req, res) => {
  //     const redis = req.app.get('redis');
  //     const
  //   }
  return {
    getComments,
  };
};

export default commentsController;
