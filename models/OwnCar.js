const Sequelize = require('sequelize');

module.exports = class OwnCar extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            OwnCarId: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            CarId: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            BrandId: { 
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            UserId: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            carNumber: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            pCCD: { 
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            isRepresent: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'OwnCar',
            tableName: 'owncars',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
