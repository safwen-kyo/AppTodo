const TaskModel =require('../models/TaskModel');

const SearchService = {

    searchTasks: async (query, statusTask) => {
      let queryObject = {
        $or: [
          { title: { $regex: new RegExp(query, 'i') } },
          { description: { $regex: new RegExp(query, 'i') } }
        ]
      };
  
      if (statusTask) {
        queryObject.statusTask = statusTask;
      }
  
      return await TaskModel.find(queryObject);
    },
  };
  
  module.exports = SearchService;