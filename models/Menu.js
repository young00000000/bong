const Sequelize = require('sequelize');

module.exports = class Menu extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            MenuId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                
            },
            PageID: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            sequence: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            upperMenu: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Menu',
            tableName: 'Menus', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
