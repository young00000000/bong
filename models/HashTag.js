const Sequelize = require('sequelize');

module.exports = class HashTag extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            HashTagId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            FilterID: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            PCCD: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'HashTag',
            tableName: 'HashTags', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
