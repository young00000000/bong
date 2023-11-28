const Sequelize = require('sequelize');

module.exports = class PCCD extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            PageCategoryId: {
                type: Sequelize.STRING(255),
                allowNull: false,
                
            },
            firstName: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            firstCodeName: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            secondName: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            PCCD: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            icon: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'PCCD',
            tableName: 'PCCDs', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
