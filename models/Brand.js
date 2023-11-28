const Sequelize = require('sequelize');

module.exports = class Brand extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            BrandId: {
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            brandLogo: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            origin: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
            nation: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Brand',
            tableName: 'Brands', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
