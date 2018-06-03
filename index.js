const approvePullRequest = async context => {
  context.log("Received event");

  const params = context.issue({ event: "APPROVE" });
  context.log(params);

  return context.github.pullRequests.createReview(params);
};

module.exports = robot => {
  robot.on(
    ["pull_request.opened", "pull_request.reopened"],
    approvePullRequest
  );
};
