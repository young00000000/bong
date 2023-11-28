const Sequelize = require('sequelize');

module.exports = class ReservationTime extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
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
            startTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            EendTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            numberOfReservtation: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            availableNumberOfReservation: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            salesThisTime: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            reservationPossible: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'ReservationTime',
            tableName: 'ReservationTimes', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
