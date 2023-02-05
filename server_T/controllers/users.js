import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );
    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserTransactions = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
  
      const transactions = await Promise.all(
        user.transactions.map((id) => User.findById(id))
      );
      const formattedTransactions = transactions.map(
        ({ _id, firstName, lastName,  }) => {
          return { _id, firstName, lastName,  };
        }
      );
      res.status(200).json(formattedTransactions);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

/* UPDATE */
export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const user = await User.findById(id);
    const friend = await User.findById(friendId);

    if (user.friends.includes(friendId)) {
      user.friends = user.friends.filter((id) => id !== friendId);
      friend.friends = friend.friends.filter((id) => id !== id);
    } else {
      user.friends.push(friendId);
      friend.friends.push(id);
    }
    await user.save();
    await friend.save();

    const friends = await Promise.all(
      user.friends.map((id) => User.findById(id))
    );
    const formattedFriends = friends.map(
      ({ _id, firstName, lastName, occupation, location, picturePath }) => {
        return { _id, firstName, lastName, occupation, location, picturePath };
      }
    );

    res.status(200).json(formattedFriends);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};



export const addRemoveTransaction = async (req, res) => {
    try {
      const { id, transactionId } = req.params;
      const user = await User.findById(id);
      const transaction = await User.findById(transactionId);
  
      if (user.transactions.includes(transactionId)) {
        user.transactions = user.transactions.filter((id) => id !== transactionId);
        transaction.transactions = transaction.transactions.filter((id) => id !== id);
      } else {
        user.transactions.push(transactionId);
        transaction.transactions.push(id);
      }
      await user.save();
      await transaction.save();
  
      const transactions = await Promise.all(
        user.transactions.map((id) => User.findById(id))
      );
      const formattedTransaction = transactions.map(
        ({ _id, firstName, lastName }) => {
          return { _id, firstName, lastName };
        }
      );
  
      res.status(200).json(formattedTransaction);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
