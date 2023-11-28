const Sequelize = require('sequelize');

module.exports = class Filter extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            FilterID: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            FliterPCCD: { 
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            name: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            isBrand: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isDrivingMethod: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Filter',
            tableName: 'filters',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
