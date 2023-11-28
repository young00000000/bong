const Sequelize = require('sequelize');

module.exports = class Page extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            PageId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                
            },
            name: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            nomponentName: {
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            PTCD: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
            PCCD: {
                type: Sequelize.STRING(10),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'Page',
            tableName: 'Pages', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
