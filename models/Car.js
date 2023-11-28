const Sequelize = require('sequelize');

module.exports = class Car extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            CarId: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            BrandId: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            PCCD: { 
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            codeName: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            name: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            type: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            fuel: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            displacement: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            image: { 
                type: Sequelize.STRING(255),
                allowNull: true,
            },
            year: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Car',
            tableName: 'cars',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
