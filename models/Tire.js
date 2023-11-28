const Sequelize = require('sequelize');

module.exports = class Tire extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            TireId: {
                type: Sequelize.STRING(255),
                allowNull: false,
                
            },
            BrandId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            PCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            DrivingMethodPCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            m_code: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            product_name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            tire_size: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: true,
                comment: 'vat 별도로 저장된 금액',
            },
            amount: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discountRate: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            discountPrice: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            image: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            patternCode: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            maxSpeed: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            maxWeight: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            origin: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            xl: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            ply: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            numberOfDataUpdate: {
                type: Sequelize.INTEGER,
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
            isSecond: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            content: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            feature: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            isVisible: {
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
            modelName: 'Tire',
            tableName: 'Tires', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
