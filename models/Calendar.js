const Sequelize = require('sequelize');

module.exports = class Calendar extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            CalendarId: {
                type: Sequelize.STRING(255),
                allowNull: false,

            },
            OperationTimeId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            month: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            week: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            day: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            dayOfWeek: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            isHoliday: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                comment: '평일, 주말, 공휴일',
            },
            holiday_name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            totalPrice: {
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
            modelName: 'Calendar',
            tableName: 'Calendars', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
