// mailslurp.js

const { MailSlurp } = require('mailslurp-client');

const mailslurp = new MailSlurp({ apiKey: '6899d09fdac04b8315ca1d624b244cad510d99311d7ea2f8c6e50a1f3b0298ae' });

const getEmails = async () => {
  return await mailslurp.getEmails();
};

const waitForLatestEmail = async (inboxId, timeout = 30000) => {
  return await mailslurp.waitForLatestEmail(inboxId, { timeout });
};

module.exports = { getEmails, waitForLatestEmail };
