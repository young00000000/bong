const Sequelize = require('sequelize');

module.exports = class ReservationProduct extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            ReservationProductId: {
                type: Sequelize.STRING(255),
                allowNull: false,
               
            },
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
            ReservationCode: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            PCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            ProductId: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            tTireLocation: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            laborCost: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'ReservationProduct',
            tableName: 'ReservationProducts', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
