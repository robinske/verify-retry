async function checkVerification(client, service, to, code) {
  const check = await client.verify
    .services(service)
    .verificationChecks.create({
      to,
      code,
    });

  return check.status === "approved";
}

exports.handler = async function (context, event, callback) {
  const response = new Twilio.Response();
  response.appendHeader("Content-Type", "application/json");

  /*
   * uncomment to support CORS
   * response.appendHeader('Access-Control-Allow-Origin', '*');
   * response.appendHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
   * response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
   */

  if (typeof event.to === "undefined" || typeof event.code === "undefined") {
    response.setBody({
      success: false,
      message: "Missing parameter.",
    });
    response.setStatusCode(400);
    return callback(null, response);
  }

  try {
    const client = context.getTwilioClient();
    const service = context.VERIFY_SERVICE_SID;
    const { to, code } = event;

    const verified = await checkVerification(client, service, to, code);
    if (verified) {
      response.setStatusCode(200);
      response.setBody({
        success: true,
        message: "Verification success.",
      });
      return callback(null, response);
    } else {
      throw new Error("Incorrect token.");
    }
  } catch (error) {
    response.setStatusCode(400);
    response.setBody({
      success: false,
      message: error.message,
    });
    return callback(null, response);
  }
};
