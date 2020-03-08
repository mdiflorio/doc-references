/** Example model */
const reference = (sequelize, DataTypes) => {
    const Reference = sequelize.define('reference', {
        ref_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        file_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code_line_start: DataTypes.INTEGER,
        code_line_end: DataTypes.INTEGER,
        function_name: DataTypes.STRING,
        notification_level: DataTypes.STRING
    });

    Reference.associate = models => {
        Reference.belongsTo(models.Repo);
    };

    return Reference;
};

export default reference;
