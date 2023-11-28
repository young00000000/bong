const Sequelize = require('sequelize');

module.exports = class ReservationMaster extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            ReservationMasterId: {
                type: Sequelize.STRING(255),
                allowNull: false,
               
            },
            ReservationTimeId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            CalendarId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            OperationTimeId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            UserId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            OwnCarId: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            ReservationCode: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            paymentMethod: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            request: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            totalPrice: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'ReservationMaster',
            tableName: 'ReservationMasters', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
