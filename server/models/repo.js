/** Example model */
const repo = (sequelize, DataTypes) => {
    const Repo = sequelize.define('repo', {
        github_id: {
            type: DataTypes.STRING,
            unique: true
        }
    });

    Repo.associate = models => {
        Repo.hasMany(models.Reference, { onDelete: 'CASCADE' });
    };

    return Repo;
};

export default repo;
