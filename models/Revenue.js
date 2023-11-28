const Sequelize = require('sequelize');

module.exports = class Revenue extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            RevenueID: {
                type: Sequelize.STRING(30),
                allowNull: false,
                
            },
            year: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            month: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            revenue: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            onlinePayment: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            offlinePayment: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            ninthSaleProduct: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Revenue',
            tableName: 'Revenues', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
