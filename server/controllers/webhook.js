import GithubWebHook from 'express-github-webhook';
const webhook = GithubWebHook({ path: '/webhook', secret: 'secret' });

// Now could handle following events
webhook.on('*', function(event, repo, data) {});

webhook.on('event', function(repo, data) {});

webhook.on('reponame', function(event, data) {});

webhook.on('error', function(err, req, res) {});

export default webhook;
