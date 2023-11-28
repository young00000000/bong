const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            PostID: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            UserId: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            PTCD: { 
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            PCCD: { 
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            title: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            content: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            isThumbnail: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            postStartDate: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            postEndDate: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            postDuration: { 
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            isPin: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isActive: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isAnswer: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            answer: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            viewers: { 
                type: Sequelize.STRING(255),
                allowNull: false,
            },
            date: { 
                type: Sequelize.DATE,
                allowNull: false,
            },
            isSecret: { 
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Post',
            tableName: 'posts',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}
