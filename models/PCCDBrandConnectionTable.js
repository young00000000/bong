const Sequelize = require('sequelize');

module.exports = class PCCDBrandConnectionTable extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            PageCategoryId: {
                type: Sequelize.STRING(255),
                allowNull: false,
                
            },
            BrandId: {
                type: Sequelize.STRING(255),
                allowNull: false,
                primaryKey: true,
            },
        }, {
            sequelize,
            timestamps: true, // Set to true if you want timestamps
            underscored: false,
            modelName: 'PCCDBrandConnectionTable',
            tableName: 'PCCDBrandConnectionTables', // Adjust the table name if needed
            paranoid: true, // Set to true if you want soft deletes
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
