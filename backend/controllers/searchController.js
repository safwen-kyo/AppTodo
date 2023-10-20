const SearchService = require('../services/SearchService');

const SearchController = {
  searchTasks: async (req, res) => {
    try {
      const { query ,statusTask } = req.query;
      const searchResults = await SearchService.searchTasks(query,statusTask);
      if (searchResults.length === 0) {
        
        return res.status(404).json({ message: "No matching tasks found" });
      }
      
      return res.status(200).json({ results: searchResults });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = SearchController;
