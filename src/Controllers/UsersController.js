import { formatResponse } from '../Helpers/HelperGlobal.js';
import Users from '../Models/UsersModel.js';

export const getUsers = async (req, res) => {
  try {
    const result = await Users.find();
    // res.json(users);

    res.status(200).send({
      status: true,
      error_message: "",
      code: "USR200",
      data: result
    })
  } catch (error) {
    res.status(500).json(
      formatResponse({
        status: false,
        code: 500,
        errorMessage: error?.message
      })
    )
  }
}

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;

    if(!id) {
      throw {
        status: 'USRU400',
        message: `ID is empty!`
      };
    }
    const result = await Users.findById(req?.params?.id);

    res.status(200).send({
      status: true,
      error_message: "",
      code: "USR200",
      data: result
    })
  } catch (error) {
    res.status(400).json(
      formatResponse({
        status: false,
        code: 400,
        errorMessage: error?.message
      })
    )
  }
}

export const saveUser = async (req, res) => {
  try {
    const body = req?.body;
    console.log(body);
    if(!body?.name || !body?.age) {
      const label = !body?.name ? "Name" : "Age";
      throw {
        status: 'USRA400',
        message: `${label} can't empty!`
      };
    }

    const user = new Users(req?.body);
    const result = await user.save();

    res.status(201).send(
      formatResponse({
        status: "USRA201",
        data: result
      })
    )
  } catch (error) {
    console.log(error);
    res.status(422).json(
      formatResponse({
        status: false,
        code: error?.status ?? 400,
        errorMessage: error?.message
      })
    )
  }
}

export const updateUser = async (req, res) => {
  try {
    const body = req?.body;
    const id = req.params.id;

    if(!id) {
      throw {
        status: 'USRU400',
        message: `ID is empty!`
      };
    }

    if(!body?.name || !body?.age) {
      const label = !body?.name ? "Name" : "Age";
      throw {
        status: 'USRU400',
        message: `${label} can't empty!`
      };
    }

    // const user = new Users(req?.body);
    const result = await Users.updateOne({
      _id: id
    }, {
      $set: body
    });

    res.status(200).send(
      formatResponse({
        status: "USRU200",
        data: result
      })
    )
  } catch (error) {
    console.log(error);
    res.status(422).json(
      formatResponse({
        status: false,
        code: error?.status ?? 400,
        errorMessage: error?.message
      })
    )
  }
}

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    if(!id) {
      throw {
        status: 'USRD400',
        message: `ID is empty!`
      };
    }

    const result = await Users.deleteOne({
      _id: id
    });

    res.status(200).send(
      formatResponse({
        status: "USRD200",
        data: result
      })
    )
  } catch (error) {
    console.log(error);
    res.status(422).json(
      formatResponse({
        status: false,
        code: error?.status ?? 400,
        errorMessage: error?.message
      })
    )
  }
}
