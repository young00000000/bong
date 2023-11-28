const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            ProductId: {
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            BrandId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            product_name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            PCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            DrivingMethodPCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discount_rate: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discount_price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            image: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            sales: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            viewers: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            feature: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            isSecond: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            numberOfDataUpdate: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            iIsVisible: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            is_active: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isContinue: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Product',
            tableName: 'Products', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
