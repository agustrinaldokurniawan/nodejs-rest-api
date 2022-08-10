class BaseController {
  static async get(req, modelName) {
    let result;
    try {
      result = await require(`../model/${modelName}`).find({}).exec();
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
  static async getById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../model/${modelName}`).findById(id).exec();
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
  static async create(req, modelName) {
    let result;
    try {
      result = await require(`../model/${modelName}`).create({
        ...req.body,
      });
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
  static async updateById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../model/${modelName}`).update(
        {_id: id},
        {...req.body}
      );
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
  static async deleteById(req, modelName) {
    const {id} = req.params;
    let result;
    try {
      result = await require(`../model/${modelName}`).deleteOne({_id: id});
    } catch (error) {
      return Promise.reject(error);
    }
    return result;
  }
}

module.exports = BaseController;
