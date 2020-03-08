import db from '../config/database';

const models = {
    User: db.import('./user'),
    Message: db.import('./message'),
    Reference: db.import('./reference'),
    Repo: db.import('./repo')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

export default models;
