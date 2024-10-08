const conversation = require('../models/conversation.model.js');
const Message = require('../models/message.model.js');

const sendMsg = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let convo = await conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!convo) {
      convo = await conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMsg = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMsg) {
      convo.messages.push(newMsg._id);
    }

    await convo.save();
    await newMsg.save();

    res.status(201).json(newMsg);
  } catch (error) {
    console.log('Error in message controller file', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const convo = await conversation
      .findOne({
        participants: { $all: [senderId, userToChatId] },
      })
      .populate('messages'); // NOT REFERENCE BUT ACTUAL MESSAGES

    if (!convo) return res.status(200).json([]);

    const messages = convo.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log('Error in getMessages controller: ', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = {
  sendMsg,
  getMessage,
};
