import User from '../models/User';

class UsersController {
  async store(request, response) {
    const userExists = await User.findOne({
      where: { email: request.body.email },
    });

    if (userExists) {
      return response.status(400).json({ message: 'Usuário já cadastrado' });
    }
    const { id, email, provider, name } = await User.create(request.body);

    return response.json({
      id,
      email,
      provider,
      name,
    });
  }
}

export default new UsersController();
