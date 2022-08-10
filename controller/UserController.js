const BaseController = require('./BaseController');

class UserController extends BaseController {
  static async getUsers(req, res) {
    try {
      const result = await super.get(req, 'User');
      return res.json({result});
    } catch (error) {
      return res.json(error);
    }
  }
  static async getUserById(req, res) {
    try {
      const result = await super.getById(req, 'User');
      return res.json({result});
    } catch (error) {
      return res.json(error);
    }
  }
  static async signup(req, res) {
    try {
      const result = await super.create(req, 'User');
      return res.json({result});
    } catch (error) {
      return res.json(error);
    }
  }
  static async updateAccount(req, res) {
    try {
      const result = await super.updateById(req, 'User');
      return res.json({result});
    } catch (error) {
      return res.json(error);
    }
  }
  static async deleteAccount(req, res) {
    try {
      const result = await super.deleteById(req, 'User');
      return res.json({result});
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = UserController;
