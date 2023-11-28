const Sequelize = require('sequelize');

module.exports = class OperationTime extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            OperationTimeId: {
                type: Sequelize.STRING(255),
                allowNull: false,
               
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            type: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            startTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            endTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            reservationInterval: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            reservationTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, 
            underscored: false,
            modelName: 'OperationTime',
            tableName: 'OperationTimes',
            paranoid: true, 
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
