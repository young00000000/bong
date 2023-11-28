
const Sequelize = require('sequelize');

module.exports = class WheelHashTagConnection extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            WheelHashTagConnectionId: {
                type: Sequelize.STRING(30),
                allowNull: false,
               
            },
            TireId: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            BrandId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            HashTagId: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            FilterID: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'WheelHashTagConnection',
            tableName: 'WheelHashTagConnections', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
