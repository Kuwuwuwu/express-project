router.get('/posts/stats', async (req, res) => {
  try {
    const stats = await Post.aggregate([
      {
        $group: {
          _id: null,
          totalPosts: { $sum: 1 },
          avgLength: { $avg: { $strLenCP: "$content" } },
          uniqueTitles: { $addToSet: "$title" }
        }
      },
      {
        $project: {
          _id: 0,
          totalPosts: 1,
          avgLength: { $round: ["$avgLength", 2] },
          uniqueTitleCount: { $size: "$uniqueTitles" }
        }
      }
    ]);

    res.json(stats[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});