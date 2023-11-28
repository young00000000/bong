const Sequelize = require('sequelize');

module.exports = class BestSellProduct extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            RevenueId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            PCCD: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            ProductId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            bestSellProduct: {
                type: Sequelize.STRING(255),
                allowNull: false,

            },
            rank: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            largeSellUser: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            saleOfViewers: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'BestSellProduct',
            tableName: 'BestSellProducts', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
