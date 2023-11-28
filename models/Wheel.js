const Sequelize = require('sequelize');

module.exports = class Wheel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            WheelId: {
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
            Name: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            wheel_size: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            wheel_price: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            wheel_amount: {
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
            wheel_image: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            Sales: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            Viewers: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            DetailContent: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            Content: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            Features: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            IsSecond: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            NumberOfDataUpdate: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            IsVisible: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsActivate: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            IsContinue: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Wheel',
            tableName: 'Wheels', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
