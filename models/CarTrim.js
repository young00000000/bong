const Sequelize = require('sequelize');

module.exports = class CarTrim extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            CarId: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            BrandId: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            carTrim: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            
            name: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            driveMethod: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            fuelEfficiency: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            frontTireSize: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            backTireSize: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            curbWeight: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'CarTrim',
            tableName: 'cartrims',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
